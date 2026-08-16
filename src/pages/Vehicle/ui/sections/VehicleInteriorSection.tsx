import { useTranslation } from 'react-i18next';
import i18n from '../../../../i18n/config';

export const VehicleInteriorSection = () => {
    const { t } = useTranslation('vehicle');
    const items = i18n.getResource(
        i18n.language,
        'vehicle',
        'interior.features',
    ) as string[] | undefined;
    const features = Array.isArray(items) ? items : [];

    return (
        <section className='relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-black'>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <div className='flex h-full flex-col justify-center py-12 pl-[calc(max(0px,(100vw-1070px)/2)+1rem)] pr-4 sm:pl-[calc(max(0px,(100vw-1070px)/2)+1.5rem)] sm:pr-6 md:py-16 lg:pl-[calc(max(0px,(100vw-1070px)/2)+2rem)] lg:pr-16'>
                        <p className='text-sm font-heading  font-medium tracking-[0.25em] text-[#C9A15B]'>
                            {t('interior.eyebrow')}
                        </p>

                        <h2 className='mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl'>
                            {t('interior.title')}
                            <br />
                            <span className='italic'>
                                {t('interior.title_accent')}
                            </span>
                        </h2>

                        <p className='mt-6 max-w-md text-sm leading-relaxed text-neutral-400'>
                            {t('interior.description')}
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
                    </div>
                </div>

                <div className='relative aspect-[4/3] w-full overflow-x-hidden md:aspect-auto md:w-1/2'>
                    <img
                        src='/images/cars/interior-rear.webp'
                        alt={t('interior.title_accent')}
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};
