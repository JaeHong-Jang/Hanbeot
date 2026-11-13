import styles from './IntroStory.module.css';
import { sceneImage } from './scenes';
import type { SceneId } from './strings';

/** 하단에 문구를 얹을 여백이 있는 생성 사진을 사용한다. */
export function IntroScene({ id }: { id: SceneId }) {
  return <img className={styles.art} src={sceneImage(id)} alt="" />;
}
