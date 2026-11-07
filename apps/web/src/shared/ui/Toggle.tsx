import { useId } from 'react';

import styles from './Toggle.module.css';

type Props = {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export function Toggle({ label, description, checked, disabled, onChange }: Props) {
  const id = useId();
  return (
    <div className={styles.row}>
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
