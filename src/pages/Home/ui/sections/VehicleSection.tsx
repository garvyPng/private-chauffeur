import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';

export const VehicleSection = () => {
    const { t } = useTranslation('common');
    const features = t('vehicle.features', { returnObjects: true }) as string[];

    return (
        <section className='relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-black'>
            <div className='flex flex-col md:flex-row'>
                <div className='relative aspect-[4/3] w-full md:aspect-auto md:w-1/2'>
                    <img
                        src='/images/cars/vehicle.webp'
                        alt={t('vehicle.title_accent')}
                        className='h-full w-full object-cover'
                    />
                </div>

                <div className='w-full md:w-1/2'>
                    <Container className='flex h-full flex-col justify-center py-12 md:py-16'>
                        <SectionTitle
                            subtitle={t('vehicle.eyebrow')}
                            title={t('vehicle.title')}
                            italicText={t('vehicle.title_accent')}
                            position='left'
                            h2ClassName='!text-white'
                            className='!text-white'
                        />

                        <p className='text-sm text-neutral-300'>
                            {t('vehicle.description')}
                        </p>

                        <ul className='mt-6 flex flex-col gap-2'>
                            {features.map((feature) => (
                                <li
                                    key={feature}
                                    className='flex items-start gap-2 text-sm text-neutral-300'
                                >
                                    <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C9A15B]' />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={t('vehicle.cta.link')}
                            className='group mt-10 inline-flex w-fit items-center justify-center border border-[#C9A15B]/60 px-8 py-4 text-xs font-medium tracking-[0.2em] text-[#C9A15B] transition-colors duration-300 hover:border-[#C9A15B] hover:bg-[#C9A15B]/10'
                        >
                            {t('vehicle.cta.label').toUpperCase()}
                        </a>
                    </Container>
                </div>
            </div>
        </section>
    );
};
