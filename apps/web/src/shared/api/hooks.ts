import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { request } from './client';

import type { Consent, MemoryState } from '@/entities';

export const queryKeys = {
  consents: ['consents'] as const,
  memories: (state?: MemoryState) => ['memories', state ?? 'all'] as const,
  summary: (sessionId: string) => ['summary', sessionId] as const,
};

export function useConsents() {
  return useQuery({
    queryKey: queryKeys.consents,
    queryFn: () => request('/consents', 'get'),
  });
}

export function useUpdateConsents() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: Consent) => request('/consents', 'put', { body }),
    onSuccess: (data) => qc.setQueryData(queryKeys.consents, data),
  });
}

export function useMemories(state?: MemoryState) {
  return useQuery({
    queryKey: queryKeys.memories(state),
    queryFn: () => request('/memories', 'get', { query: { state } }),
  });
}

export function useUpdateMemory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v: { id: string; text: string }) =>
      request('/memories/{memoryId}', 'patch', {
        params: { memoryId: v.id },
        body: { text: v.text },
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['memories'] }),
  });
}

export function useDeleteMemory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      request('/memories/{memoryId}', 'delete', { params: { memoryId: id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['memories'] }),
  });
}

export function useApproveMemory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      request('/memories/{memoryId}/approve', 'post', { params: { memoryId: id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['memories'] }),
  });
}

export function useSummary(sessionId: string) {
  return useQuery({
    queryKey: queryKeys.summary(sessionId),
    queryFn: () => request('/summaries/{sessionId}', 'get', { params: { sessionId } }),
  });
}

export function useDeletionRequest() {
  return useMutation({ mutationFn: () => request('/deletion', 'post') });
}
