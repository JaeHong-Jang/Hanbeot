import { useId } from 'react';

import styles from './Toggle.module.css';

type Props = {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  /** 다른 줄 안에 넣을 때: 위아래 여백과 구분선을 없앤다 */
  dense?: boolean;
  onChange: (checked: boolean) => void;
};

export function Toggle({ label, description, checked, disabled, dense, onChange }: Props) {
  const id = useId();
  return (
    <div className={`${styles.row} ${dense ? styles.dense : ''}`}>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>
        <span className={styles.label}>{label}</span>
        {description ? <span className={styles.desc}>{description}</span> : null}
      </label>
    </div>
  );
}
