type SectionTitleProps = {
    title: string;
    subtitle: string;
    position?: string;
    className?: string;
    italicText?: string;
    titleEnd?: string;
    h2ClassName?: string;
    subtitleClassName?: string;
};

export default function SectionTitle({
    title,
    subtitle,
    position = 'center',
    className = '',
    italicText = '',
    titleEnd = '',
    h2ClassName = '',
    subtitleClassName = '',
}: SectionTitleProps) {
    return (
        <div
            className={`w-full mb-10 flex flex-col 
        ${position === 'center' ? 'items-center text-center' : 'items-start'}
        font-heading ${className}`}
        >
            <p
                className={`text-sm text-[var(--color-gold)] mb-3 ${subtitleClassName}`}
            >
                {subtitle}
            </p>
            <h2 className={`text-5xl text-black ${h2ClassName}`}>
                {title}
                {italicText && <span className='italic'> {italicText}</span>}
                {titleEnd && (
                    <>
                        <br />
                        {titleEnd}
                    </>
                )}
            </h2>
        </div>
    );
}
