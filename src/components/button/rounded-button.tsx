import { cn } from '@utils/cn'
import React, { forwardRef } from 'react'
import styles from './button.module.styl'

interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  variant?: 'light' | 'dark' | 'light-colorful'
}

const RoundedButton = forwardRef<HTMLButtonElement, RoundedButtonProps>(
  function RoundedButton(
    { className, children, type = 'button', variant = 'light', ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          styles.roundedButton,
          variant === 'light'
            ? styles.roundedButtonLight
            : variant === 'dark'
              ? styles.roundedButtonDark
              : styles.roundedButtonLightColorful,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

RoundedButton.displayName = 'RoundedButton'

export { RoundedButton }
