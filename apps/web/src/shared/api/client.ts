import type { paths, Problem } from '@/entities';

const BASE_URL = '/api';

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

type JsonOf<T> = T extends { content: { 'application/json': infer B } } ? B : never;
type OkResponse<Op> = Op extends { responses: infer R }
  ? JsonOf<R[Extract<keyof R, 200 | 201 | 202>]>
  : never;
type BodyOf<Op> = Op extends { requestBody: { content: { 'application/json': infer B } } }
  ? B
  : never;

export class ApiError extends Error {
  readonly problem: Problem;
  constructor(problem: Problem) {
    super(problem.detail ?? problem.title);
    this.name = 'ApiError';
    this.problem = problem;
  }
}

async function toProblem(res: Response): Promise<Problem> {
  try {
    return (await res.json()) as Problem;
  } catch {
    return { type: 'about:blank', title: res.statusText || 'Error', status: res.status };
  }
}

export async function request<P extends keyof paths, M extends Method & keyof paths[P]>(
  path: P,
  method: M,
  options: {
    params?: Record<string, string>;
    query?: Record<string, string | undefined>;
    body?: BodyOf<paths[P][M]>;
  } = {},
): Promise<OkResponse<paths[P][M]>> {
  let url = String(path);
  for (const [key, value] of Object.entries(options.params ?? {})) {
    url = url.replace(`{${key}}`, encodeURIComponent(value));
  }
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(options.query ?? {})) {
    if (value !== undefined) search.set(key, value);
  }
  const qs = search.toString();
  const res = await fetch(`${BASE_URL}${url}${qs ? `?${qs}` : ''}`, {
    method: method.toUpperCase(),
    headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  if (!res.ok) throw new ApiError(await toProblem(res));
  if (res.status === 204) return undefined as OkResponse<paths[P][M]>;
  return (await res.json()) as OkResponse<paths[P][M]>;
}
