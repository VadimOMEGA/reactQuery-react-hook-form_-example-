import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest } : PropsWithChildren<TypeButton>) => {
  return (
    <button
        className={cn(
            'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-primary/90',
            className
        )}
        {...rest}
    >
        {children}
    </button>
  )
}

export default Button