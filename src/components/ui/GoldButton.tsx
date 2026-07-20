import type { ReactNode } from 'react';

type GoldButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'outline' | 'filled';
    className?: string;
    type?: 'button' | 'submit';
    href?: string;
};

export function GoldButton({
    children,
    onClick,
    variant = 'outline',
    className = '',
    type = 'button',
    href,
}: GoldButtonProps) {
    const base =
        'inline-flex items-center gap-2.5 px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 cursor-pointer';

    const styles =
        variant === 'filled'
            ? 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-light)]'
            : 'border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white';

    if (href) {
        return (
            <a href={href} className={`${base} ${styles} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${styles} ${className}`}
        >
            {children}
        </button>
    );
}
