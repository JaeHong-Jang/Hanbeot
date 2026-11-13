import type { SceneId } from './strings';

import alone from '@/shared/assets/intro/alone.jpg';
import home from '@/shared/assets/intro/home.jpg';
import tangled from '@/shared/assets/intro/tangled.jpg';
import team from '@/shared/assets/intro/team.jpg';

const SCENE_IMAGES: Record<SceneId, string> = { alone, team, tangled, home };

export function sceneImage(id: SceneId): string {
  return SCENE_IMAGES[id];
}
