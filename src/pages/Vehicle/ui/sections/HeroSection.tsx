import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';

export const HeroSection = () => {
    const { t } = useTranslation('vehicle');

    return (
        <section className='relative h-[500px]'>
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <img
                    className='h-full w-full object-cover object-[center_80%]'
                    src={'/images/cars/vehicle_page.webp'}
                    alt={t('hero.title')}
                    fetchPriority='high'
                    decoding='async'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%)',
                    }}
                />
            </div>

            <Container className='relative z-10 flex h-full flex-col items-start justify-end gap-6 pb-20 md:flex-row md:items-end md:justify-between'>
                <div className='font-heading text-white'>
                    <p>{t('hero.eyebrow')}</p>
                    <h1 className='text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:w-[600px] lg:text-7xl'>
                        {t('hero.title')}
                    </h1>
                </div>

                {/* <p className='max-w-md text-base text-neutral-300 sm:text-lg'>
                    {t(`${tourData.id}.description`)}
                </p> */}
            </Container>
        </section>
    );
};
