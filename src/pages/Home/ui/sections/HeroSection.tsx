import { Container } from '../../../../components/layout/Container';
import { useTranslation } from 'react-i18next';
import { GoldButton } from '../../../../components/ui/GoldButton';
import SwissIcon from '../../../../components/ui/SwissIcon';
import { useLocalizedPath } from '../../../../hooks/useLocalizedPath';
export const HeroSection = () => {
    const { t } = useTranslation('home');
    const localize = useLocalizedPath();

    return (
        <section id='home' className='relative h-screen min-h-[600px]'>
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <img
                    className='h-full w-full object-cover'
                    src='/images/cars/hero.webp'
                    alt='mercedes'
                    fetchPriority='high'
                    decoding='async'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%)',
                    }}
                />
            </div>
            <Container className='relative' size='lg'>
                <div className='flex  h-screen min-h-[600px] w-full flex-col md:flex-row justify-center md:justify-between md:items-center'>
                    <SwissIcon className='order-1 md:order-2 h-10 w-10 sm:h-12 sm:w-12' />

                    <div className='order-2 md:order-1  z-10 mt-6 space-y-3 sm:max-w-[420px] md:max-w-[500px]'>
                        <h1 className='font-heading lg:w-[600px] sm:w-auto text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-8xl'>
                            {t('hero.title')}
                            <span className='italic'> in Complete Comfort</span>
                        </h1>

                        <p className='text-base text-neutral-300 sm:text-lg'>
                            {t('hero.text')}
                        </p>

                        <div className='flex flex-col gap-3 pt-2 text-white sm:flex-row sm:gap-5'>
                            <GoldButton
                                className='z-20 w-full justify-center sm:w-auto'
                                variant='filled'
                                href={localize('/contact')}
                            >
                                {t('hero.btn-book')}
                            </GoldButton>
                            <GoldButton
                                className='z-20 w-full justify-center sm:w-auto'
                                href={localize('/experiences')}
                            >
                                {t('hero.btn-explore')}
                            </GoldButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
