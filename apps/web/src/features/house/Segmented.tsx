import styles from './room.module.css';

type Props<T extends string> = {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (next: T) => void;
};

/** 두세 개 중 하나 고르기(대화 방식, 친구, 화면). */
export function Segmented<T extends string>({ label, options, value, onChange }: Props<T>) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={styles.seg}
      style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
