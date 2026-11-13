import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Layers } from 'lucide-react';
import type { ProjectItem } from '../../data/projects';
import { SafeImage } from './SafeImage';

interface LightboxProps {
  projects: ProjectItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function Lightbox({
  projects,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxProps) {
  const [showBefore, setShowBefore] = useState(false);

  const project = activeIndex !== null ? projects[activeIndex] : null;

  useEffect(() => {
    setShowBefore(false);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % projects.length);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + projects.length) % projects.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, projects.length, onClose, onSelectIndex]);

  return (
    <AnimatePresence>
      {project && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#050606]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-5xl bg-[#121513] border border-[#F2F5F1]/15 rounded-md overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#F2F5F1]/10 bg-[#0E100F]">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-[#9AA39C]">
                  <span className="text-[#7CFF3A] font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F2F5F1] truncate">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.beforeImage && (
                  <button
                    type="button"
                    onClick={() => setShowBefore((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#1A1D1B] border border-[#7CFF3A]/35 text-[#F2F5F1] hover:border-[#7CFF3A] transition-colors cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#7CFF3A]" aria-hidden="true" />
                    <span>{showBefore ? 'View Finished' : 'View Prep / Before'}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project lightbox"
                  className="w-9 h-9 rounded-sm bg-[#1A1D1B] border border-[#F2F5F1]/15 flex items-center justify-center text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Image Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#0B0D0C]">
              <SafeImage
                src={showBefore && project.beforeImage ? project.beforeImage : project.image}
                alt={project.title}
                priority
                className="w-full h-full object-contain bg-[#090B0A]"
              />

              {/* Prev / Next */}
              <button
                type="button"
                onClick={() =>
                  onSelectIndex((activeIndex - 1 + projects.length) % projects.length)
                }
                aria-label="Previous project"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#0B0D0C]/85 border border-[#F2F5F1]/20 flex items-center justify-center text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onSelectIndex((activeIndex + 1) % projects.length)}
                aria-label="Next project"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#0B0D0C]/85 border border-[#F2F5F1]/20 flex items-center justify-center text-[#F2F5F1] hover:border-[#7CFF3A] hover:text-[#7CFF3A] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Footer details */}
            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#111412] border-t border-[#F2F5F1]/10">
              <p className="text-sm text-[#9AA39C] max-w-2xl leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#DCE5DB] shrink-0">
                {project.highlights.map((item, i) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    {i > 0 && <span className="text-[#7CFF3A]" aria-hidden="true">·</span>}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
