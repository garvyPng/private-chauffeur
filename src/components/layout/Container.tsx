import type { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'full';
    className?: string;
};

export const Container = ({
    children,
    size = 'md',
    className = '',
}: ContainerProps) => {
    const sizes = {
        sm: 'max-w-[768px]',
        md: 'max-w-[1070px]',
        lg: 'max-w-[1380px]',
        full: 'max-w-none',
    };

    return (
        <div
            className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
        >
            {children}
        </div>
    );
};
