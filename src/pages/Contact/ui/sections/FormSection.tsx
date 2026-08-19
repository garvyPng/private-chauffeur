// import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Container } from '../../../../components/layout/Container';
// import { GoldButton } from '../../../../components/ui/GoldButton';

// interface FormState {
//     name: string;
//     email: string;
//     phone: string;
//     date: string;
//     message: string;
// }

// const initialForm: FormState = {
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     message: '',
// };

function ContactInfoItem({
    icon: Icon,
    label,
    value,
    href,
}: {
    icon: typeof Phone;
    label: string;
    value: string;
    href?: string;
}) {
    const content = (
        <div className='flex items-start gap-4'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A15B]/40'>
                <Icon className='h-4 w-4 text-[#C9A15B]' strokeWidth={1.5} />
            </div>
            <div>
                <p className='text-xs font-medium uppercase tracking-[0.2em] text-[#C9A15B]'>
                    {label}
                </p>
                <p className='mt-1 text-sm text-neutral-700'>{value}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='block transition-opacity duration-200 hover:opacity-70'
            >
                {content}
            </a>
        );
    }

    return content;
}

export const FormSection = () => {
    const { t } = useTranslation('contact');
    // const [form, setForm] = useState<FormState>(initialForm);
    // const [status, setStatus] = useState<
    //     'idle' | 'sending' | 'success' | 'error'
    // >('idle');

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // const handleSubmit = async (e: FormEvent) => {
    //     e.preventDefault();
    //     setStatus('sending');

    //     try {
    //         // TODO: заменить на реальный вызов API/email-сервиса
    //         await new Promise((resolve) => setTimeout(resolve, 1000));
    //         setStatus('success');
    //         setForm(initialForm);
    //     } catch {
    //         setStatus('error');
    //     }
    // };

    return (
        <>
            <section className='-mt-12 md:-mt-16'>
                <Container>
                    <div className='flex items-center justify-center'>
                        {/* Contact Info Card */}
                        <div className='rounded-md border border-neutral-200 bg-white  p-8 md:p-10'>
                            <h2 className='font-serif text-xl text-neutral-900'>
                                {t('info.title')}
                            </h2>

                            <div className='mt-8 flex flex-col gap-7'>
                                <ContactInfoItem
                                    icon={Phone}
                                    label={t('info.phone_label')}
                                    value={t('info.phone')}
                                    href={`tel:${t('info.phone_link')}`}
                                />
                                <ContactInfoItem
                                    icon={Mail}
                                    label={t('info.email_label')}
                                    value={t('info.email')}
                                    href={`mailto:${t('info.email')}`}
                                />
                                <ContactInfoItem
                                    icon={MessageCircle}
                                    label={t('info.whatsapp_label')}
                                    value={t('info.whatsapp_label')}
                                    href={t('info.whatsapp_link')}
                                />
                                <ContactInfoItem
                                    icon={Clock}
                                    label={t('info.hours_label')}
                                    value={t('info.hours')}
                                />
                                <ContactInfoItem
                                    icon={MapPin}
                                    label={t('info.areas_label')}
                                    value={t('info.areas')}
                                />
                            </div>
                        </div>

                        {/* Form */}
                        {/* <div className='rounded-md border border-neutral-200 bg-white p-8 md:p-10'>
                            <h2 className='font-serif text-xl text-neutral-900'>
                                {t('form.title')}
                            </h2>

                            {status === 'success' ? (
                                <div className='mt-8 flex flex-col items-center rounded-md bg-neutral-50 py-14 text-center'>
                                    <CheckCircle2
                                        className='h-10 w-10 text-[#C9A15B]'
                                        strokeWidth={1.5}
                                    />
                                    <p className='mt-4 font-serif text-lg text-neutral-900'>
                                        {t('form.success_title')}
                                    </p>
                                    <p className='mt-2 max-w-xs text-sm text-neutral-500'>
                                        {t('form.success_text')}
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className='mt-8 flex flex-col gap-5'
                                >
                                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                                        <div>
                                            <label
                                                htmlFor='name'
                                                className='text-xs font-medium uppercase tracking-[0.15em] text-neutral-500'
                                            >
                                                {t('form.name_label')}
                                            </label>
                                            <input
                                                id='name'
                                                name='name'
                                                type='text'
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder={t(
                                                    'form.name_placeholder',
                                                )}
                                                className='mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#C9A15B] focus:outline-none'
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='email'
                                                className='text-xs font-medium uppercase tracking-[0.15em] text-neutral-500'
                                            >
                                                {t('form.email_label')}
                                            </label>
                                            <input
                                                id='email'
                                                name='email'
                                                type='email'
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder={t(
                                                    'form.email_placeholder',
                                                )}
                                                className='mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#C9A15B] focus:outline-none'
                                            />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                                        <div>
                                            <label
                                                htmlFor='phone'
                                                className='text-xs font-medium uppercase tracking-[0.15em] text-neutral-500'
                                            >
                                                {t('form.phone_label')}
                                            </label>
                                            <input
                                                id='phone'
                                                name='phone'
                                                type='tel'
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder={t(
                                                    'form.phone_placeholder',
                                                )}
                                                className='mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#C9A15B] focus:outline-none'
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='date'
                                                className='text-xs font-medium uppercase tracking-[0.15em] text-neutral-500'
                                            >
                                                {t('form.date_label')}
                                            </label>
                                            <input
                                                id='date'
                                                name='date'
                                                type='date'
                                                value={form.date}
                                                onChange={handleChange}
                                                className='mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 focus:border-[#C9A15B] focus:outline-none'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='message'
                                            className='text-xs font-medium uppercase tracking-[0.15em] text-neutral-500'
                                        >
                                            {t('form.message_label')}
                                        </label>
                                        <textarea
                                            id='message'
                                            name='message'
                                            required
                                            rows={4}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder={t(
                                                'form.message_placeholder',
                                            )}
                                            className='mt-2 w-full resize-none border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#C9A15B] focus:outline-none'
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className='text-sm text-red-500'>
                                            {t('form.error_text')}
                                        </p>
                                    )}

                                    <GoldButton
                                        type='submit'
                                        variant='filled'
                                        className='mt-2 w-full justify-center sm:w-fit'
                                    >
                                        {status === 'sending'
                                            ? t('form.sending_label')
                                            : t('form.submit_label')}
                                    </GoldButton>
                                </form>
                            )}
                        </div> */}
                    </div>
                </Container>
            </section>
        </>
    );
};
