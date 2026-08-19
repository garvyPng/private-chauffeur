import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';

export const HeroSection = () => {
    const { t } = useTranslation('experiences');
    return (
        <section className='relative h-[500px]'>
            <div className=' absolute z-0 inset-0 overflow-hidden'>
                <img
                    className='h-full w-full object-cover object-[center_80%]'
                    src='/images/cars/vehicle.webp'
                    alt='mercedes'
                    fetchPriority='high'
                    decoding='async'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background: 'rgba(0,0,0,0.2)',
                    }}
                />
            </div>
            <Container className='relative flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between z-10 h-full pb-20 md:space-x-10 space-y-5 md:space-y-0'>
                <div className='font-heading text-white'>
                    <p>{t('hero.eyebrow')}</p>
                    <h1 className='lg:w-[500px] sm:w-auto text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:text-7xl'>
                        {t('hero.title')}
                        <span className='italic'>
                            {' '}
                            {t('hero.title-secondary')}
                        </span>
                    </h1>
                </div>
                <p className='text-base text-neutral-300 sm:text-lg '>
                    {t('hero.text')}
                </p>
            </Container>
        </section>
    );
};
