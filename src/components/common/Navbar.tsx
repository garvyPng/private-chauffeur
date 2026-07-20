import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../layout/Container';
import { useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
    const { lang } = useParams();
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);

    const changeLang = (newLang: string) => {
        if (newLang === lang) return;
        navigate(`/${newLang}`);
    };
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='absolute top-0 left-0 w-full z-50 text-white'>
            <Container size='lg'>
                <div className='w-full flex items-center justify-between px-4 py-4 md:py-0'>
                    <a href='/' className='flex space-x-2 items-center'>
                        <img
                            className='w-16 lg:w-36'
                            src='/images/logo.png'
                            alt=''
                        />
                        <div className='font-thin uppercase'>
                            <p className='text-base md:text-xl'>
                                Private Chauffeur
                            </p>
                            <p className='text-xs tracking-[37%] md:text-base'>
                                Switzerland
                            </p>
                        </div>
                    </a>

                    <nav className='hidden lg:flex gap-6 text-base font-normal absolute md:relative top-20 md:top-0'>
                        <button
                            onClick={() => scrollTo('home')}
                            className='relative group'
                        >
                            {t('nav.home')}
                            <span className='absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full'></span>
                        </button>

                        <button
                            onClick={() => scrollTo('experiences')}
                            className='relative group'
                        >
                            {t('nav.experiences')}
                            <span className='absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full'></span>
                        </button>

                        <button
                            onClick={() => scrollTo('vehicle')}
                            className='relative group'
                        >
                            {t('nav.vehicle')}
                            <span className='absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full'></span>
                        </button>

                        <button
                            onClick={() => scrollTo('contact')}
                            className='relative group'
                        >
                            {t('nav.contact')}
                            <span className='absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full'></span>
                        </button>
                    </nav>

                    <div className='hidden lg:flex items-center gap-3'>
                        <div className='flex gap-2 text-base'>
                            {['en', 'de'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => changeLang(l)}
                                    className={lang === l ? 'underline' : ''}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <div className='flex space-x-2'>
                            <a
                                className='text-white w-[18px] h-[18px] transition-all duration-300 hover:scale-110'
                                href='https://t.me/keratin_switzerland'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg
                                    className='w-[18px] h-[18px] fill-current'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g
                                        id='SVGRepo_bgCarrier'
                                        strokeWidth='0'
                                    ></g>
                                    <g
                                        id='SVGRepo_tracerCarrier'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    ></g>
                                    <g id='SVGRepo_iconCarrier'>
                                        {' '}
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z'
                                            fill='currentColor'
                                        ></path>{' '}
                                    </g>
                                </svg>
                            </a>
                            <a
                                className='text-white w-[18px] h-[18px] transition-all duration-300 hover:scale-110'
                                href='https://www.instagram.com/keratin.switzerland'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg
                                    className='w-[18px] h-[18px] text-white'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g
                                        id='SVGRepo_bgCarrier'
                                        strokeWidth='0'
                                    ></g>
                                    <g
                                        id='SVGRepo_tracerCarrier'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    ></g>
                                    <g id='SVGRepo_iconCarrier'>
                                        {' '}
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                                            fill='currentColor'
                                        ></path>{' '}
                                        <path
                                            d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                                            fill='currentColor'
                                        ></path>{' '}
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                                            fill='currentColor'
                                        ></path>{' '}
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <a
                            href=''
                            className='inline-flex items-center gap-2.5 px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans font-medium bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 cursor-pointer'
                        >
                            Book now
                        </a>
                    </div>
                    <div className='flex lg:hidden items-center gap-5'>
                        <div className='flex gap-2 text-sm'>
                            {['en', 'de'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => changeLang(l)}
                                    className={lang === l ? 'underline' : ''}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='relative w-8 h-8 flex flex-col justify-center items-center'
                        >
                            <span
                                className={`absolute w-6 h-0.5 bg-white transition-all ${
                                    isOpen ? 'rotate-45' : '-translate-y-2'
                                }`}
                            />

                            <span
                                className={`absolute w-6 h-0.5 bg-white transition-all ${
                                    isOpen ? 'opacity-0' : ''
                                }`}
                            />

                            <span
                                className={`absolute w-6 h-0.5 bg-white transition-all ${
                                    isOpen ? '-rotate-45' : 'translate-y-2'
                                }`}
                            />
                        </button>
                        {isOpen && (
                            <div
                                className={`fixed py-10 inset-0 z-50 bg-black/90 backdrop-blur-xl
    transition-all duration-300
    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className='absolute top-6 right-6 flex items-center justify-center w-11 h-11  transition-all duration-300'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                    >
                                        <path d='M6 6L18 18' />
                                        <path d='M18 6L6 18' />
                                    </svg>
                                </button>
                                <div className='flex flex-col items-center gap-4 text-lg'>
                                    <button
                                        onClick={() => scrollTo('home')}
                                        className='group py-3 border-b border-white/10 text-center font-light tracking-wide transition-all duration-300 hover:text-[#d7b46a]'
                                    >
                                        {t('nav.home')}
                                    </button>

                                    <button
                                        onClick={() => scrollTo('experiences')}
                                        className='group py-3 border-b border-white/10 text-center font-light tracking-wide transition-all duration-300 hover:text-[#d7b46a]'
                                    >
                                        {t('nav.experiences')}
                                    </button>

                                    <button
                                        onClick={() => scrollTo('vehicle')}
                                        className='group py-3 border-b border-white/10 text-center font-light tracking-wide transition-all duration-300 hover:text-[#d7b46a]'
                                    >
                                        {t('nav.vehicle')}
                                    </button>

                                    <button
                                        onClick={() => scrollTo('contact')}
                                        className='group py-3 border-b border-white/10 text-center font-light tracking-wide transition-all duration-300 hover:text-[#d7b46a]'
                                    >
                                        {t('nav.contact')}
                                    </button>

                                    <a
                                        href=''
                                        className='mt-10 inline-flex items-center justify-center rounded-full border border-[#d7b46a] px-10 py-4 uppercase tracking-[0.25em] text-sm font-medium transition-all duration-300 hover:bg-[#d7b46a] hover:text-black'
                                    >
                                        Book now
                                    </a>

                                    <div className='flex gap-6 mt-6'>
                                        <a
                                            className='text-white w-[18px] h-[18px] transition-all duration-300 hover:scale-110'
                                            href='https://t.me/keratin_switzerland'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <svg
                                                className='w-[18px] h-[18px] fill-current'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <g
                                                    id='SVGRepo_bgCarrier'
                                                    strokeWidth='0'
                                                ></g>
                                                <g
                                                    id='SVGRepo_tracerCarrier'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                ></g>
                                                <g id='SVGRepo_iconCarrier'>
                                                    {' '}
                                                    <path
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                        d='M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z'
                                                        fill='currentColor'
                                                    ></path>{' '}
                                                </g>
                                            </svg>
                                        </a>
                                        <a
                                            className='text-white w-[18px] h-[18px] transition-all duration-300 hover:scale-110'
                                            href='https://www.instagram.com/keratin.switzerland'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <svg
                                                className='w-[18px] h-[18px] text-white'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <g
                                                    id='SVGRepo_bgCarrier'
                                                    strokeWidth='0'
                                                ></g>
                                                <g
                                                    id='SVGRepo_tracerCarrier'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                ></g>
                                                <g id='SVGRepo_iconCarrier'>
                                                    {' '}
                                                    <path
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                        d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                                                        fill='currentColor'
                                                    ></path>{' '}
                                                    <path
                                                        d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                                                        fill='currentColor'
                                                    ></path>{' '}
                                                    <path
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                        d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                                                        fill='currentColor'
                                                    ></path>{' '}
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
