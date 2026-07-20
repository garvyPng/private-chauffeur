interface SwissIconProps {
    className?: string;
}

export default function SwissIcon({ className = '' }: SwissIconProps) {
    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <img className='w-10' src='/images/swiss.svg' alt='' />
            <div className='h-[1px] w-14 bg-white'></div>
        </div>
    );
}
