import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-[#F2F5F1]/10 border-y border-[#F2F5F1]/10', className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${item.id || idx}`;
        const buttonId = `faq-button-${item.id || idx}`;

        return (
          <div key={item.id || item.question} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full py-5 flex items-center justify-between gap-4 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFF3A] rounded-sm"
              >
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F2F5F1] group-hover:text-[#7CFF3A] transition-colors">
                  {item.question}
                </span>
                <span
                  className={cn(
                    'w-8 h-8 rounded-sm border flex items-center justify-center shrink-0 transition-colors',
                    isOpen
                      ? 'border-[#7CFF3A]/60 bg-[#2FB30F]/15 text-[#7CFF3A]'
                      : 'border-[#F2F5F1]/15 bg-[#151816] text-[#9AA39C] group-hover:border-[#7CFF3A]/40 group-hover:text-[#F2F5F1]'
                  )}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-10 text-sm sm:text-base text-[#9AA39C] leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
