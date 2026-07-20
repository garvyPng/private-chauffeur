import { useTranslation } from 'react-i18next';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';
interface FooterLink {
    label: string;
    url: string;
}

export const Footer = () => {
    const { t } = useTranslation('common');
    const navLinks = t('footer.navigation.links', {
        returnObjects: true,
    }) as FooterLink[];

    const year = new Date().getFullYear();

    return (
        <footer className='relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-black'>
            <Container className='py-14' size='lg'>
                <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
                    <div className='max-w-sm'>
                        <a href='/' className='flex space-x-2 items-center'>
                            <img
                                className='w-16 md:w-36'
                                src='/images/logo.png'
                                alt=''
                            />
                            <div className='font-thin uppercase '>
                                <p className='text-base md:text-xl text-white'>
                                    Private Chauffeur
                                </p>
                                <p className='text-xs text-neutral-300 tracking-[37%] md:text-base'>
                                    Switzerland
                                </p>
                            </div>
                        </a>

                        <p className='mt-5 text-sm leading-relaxed text-neutral-400'>
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-16'>
                        <div>
                            <p className='text-xs font-medium tracking-[0.2em] text-[#C9A15B]'>
                                {t('footer.navigation.title').toUpperCase()}
                            </p>
                            <ul className='mt-4 flex flex-col gap-2.5'>
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.url}
                                            className='text-sm text-neutral-300 transition-colors duration-200 hover:text-[#C9A15B]'
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className='text-xs font-medium tracking-[0.2em] text-[#C9A15B]'>
                                {t('footer.contacts.title').toUpperCase()}
                            </p>
                            <ul className='mt-4 flex flex-col gap-2.5'>
                                <li>
                                    <a
                                        href={`tel:${t('footer.contacts.phone_link')}`}
                                        className='flex items-center gap-2 text-sm text-neutral-300 transition-colors duration-200 hover:text-[#C9A15B]'
                                    >
                                        <Phone
                                            className='h-4 w-4'
                                            strokeWidth={1.5}
                                        />
                                        {t('footer.contacts.phone')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${t('footer.contacts.email')}`}
                                        className='flex items-center gap-2 text-sm text-neutral-300 transition-colors duration-200 hover:text-[#C9A15B]'
                                    >
                                        <Mail
                                            className='h-4 w-4'
                                            strokeWidth={1.5}
                                        />
                                        {t('footer.contacts.email')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={t(
                                            'footer.contacts.whatsapp_link',
                                        )}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center gap-2 text-sm text-neutral-300 transition-colors duration-200 hover:text-[#C9A15B]'
                                    >
                                        <MessageCircle
                                            className='h-4 w-4'
                                            strokeWidth={1.5}
                                        />
                                        {t('footer.contacts.whatsapp_label')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mt-10 h-px w-full bg-[#C9A15B]/25' />

                <p className='mt-6 text-center text-xs tracking-wide text-neutral-500'>
                    © {year} {t('footer.copyright')}
                </p>
            </Container>
        </footer>
    );
};
