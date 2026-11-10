import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type ScrollAnimationProps = {
  /** animate.css 3.x sınıf adı, örn. "fadeInUp" */
  animateIn: string;
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

/** Eleman ekrana girince animate.css animasyonunu bir kez çalıştırır. */
export function ScrollAnimation({ animateIn, children, delay = 0, style, className }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const shown = isVisible || reducedMotion;

  return (
    <div
      ref={ref}
      className={[shown && !reducedMotion ? `animated ${animateIn}` : "", className ?? ""].join(" ").trim() || undefined}
      style={{ animationDelay: `${delay}ms`, opacity: shown ? undefined : 0, ...style }}
    >
      {children}
    </div>
  );
}
