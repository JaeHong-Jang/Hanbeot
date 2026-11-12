import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** primary: 화면의 주요 동작 하나 · secondary: 회색 보조 · ghost: 글자만 · danger: 지우기처럼 되돌릴 수 없는 동작 */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** 화면 폭을 꽉 채운다(하단 고정 버튼 등). */
  block?: boolean;
  size?: 'md' | 'sm';
};

export function Button({
  variant = 'secondary',
  block = false,
  size = 'md',
  className,
  ...rest
}: Props) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${block ? styles.block : ''} ${className ?? ''}`}
      {...rest}
    />
  );
}
