import { useSliderScroll } from '@/core/hooks/useSliderScroll';
import React, { ReactNode } from 'react';
import SlidersLayout from './SliderLayout';

interface SlidersProps {
  children: ReactNode[];
  gap: number;
}

const Slider: React.FC<SlidersProps> = ({ children, gap }) => {
  const {
    onScrollForward,
    onScrollBack,
    scrollLeft,
    isScrolledToEnd,
    sliderContainerRef,
    onScroll,
  } = useSliderScroll(gap, React.Children.toArray(children));

  return (
    <SlidersLayout
      scrollLeft={scrollLeft}
      onScrollForward={onScrollForward}
      onScrollBack={onScrollBack}
      isScrolledToEnd={isScrolledToEnd}
      ref={sliderContainerRef}
      onScroll={onScroll}
      gap={gap}
    >
      {children}
    </SlidersLayout>
  );
};

export default Slider;
