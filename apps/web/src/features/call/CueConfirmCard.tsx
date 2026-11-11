import styles from './CueConfirmCard.module.css';
import { callStrings as s } from './strings';

type Props = { category: string; onAnswer: (confirmed: boolean) => void };

/**
 * 목소리 감정 단서를 확인 질문으로만 쓴다(설계서 5-4).
 * 감정을 단정하지 않고 묻고, [맞아]/[아니야] 한 번으로 답한다. 점수는 보여주지 않는다.
 */
export function CueConfirmCard({ category, onAnswer }: Props) {
  return (
    <section className={styles.card} aria-label={s.cueLabel}>
      <p>{s.cueQuestions[category] ?? s.cueFallback}</p>
      <div className={styles.answers}>
        <button type="button" className={styles.answer} onClick={() => onAnswer(true)}>
          {s.cueYes}
        </button>
        <button type="button" className={styles.answer} onClick={() => onAnswer(false)}>
          {s.cueNo}
        </button>
      </div>
    </section>
  );
}
