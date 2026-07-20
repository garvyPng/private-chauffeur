import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Container } from '../../../../components/layout/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';

interface FaqItem {
    question: string;
    answer: string;
}

function FaqAccordionItem({
    item,
    isOpen,
    onToggle,
}: {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`overflow-hidden rounded-md transition-colors duration-300 ${
                isOpen ? 'bg-neutral-100' : 'bg-neutral-50'
            }`}
        >
            <button
                type='button'
                onClick={onToggle}
                aria-expanded={isOpen}
                className='flex w-full items-center justify-between gap-4 px-6 py-5 text-left'
            >
                <span className='font-heading text-lg text-neutral-900'>
                    {item.question}
                </span>
                <ChevronDown
                    className={`h-5 w-5 shrink-0 text-neutral-900 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                />
            </button>

            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className='overflow-hidden'>
                    <p className='px-6 pb-5 text-sm leading-relaxed text-neutral-500'>
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export const FaqSection = () => {
    const { t } = useTranslation('common');
    const items = t('faqs.items', { returnObjects: true }) as FaqItem[];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className='mt-16'>
            <Container>
                <SectionTitle
                    subtitle={t('faqs.eyebrow')}
                    title={t('faqs.title')}
                    position='center'
                />

                <div className='mx-auto flex max-w-3xl flex-col gap-3'>
                    {items.map((item, i) => (
                        <FaqAccordionItem
                            key={item.question}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() =>
                                setOpenIndex(openIndex === i ? null : i)
                            }
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
