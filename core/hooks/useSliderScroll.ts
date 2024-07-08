import { useState, useEffect, useRef, MutableRefObject } from 'react';

type UseSliderScrollResult = {
  onScrollForward: () => void;
  onScrollBack: () => void;
  scrollLeft: number;
  isScrolledToEnd: boolean;
  sliderContainerRef: MutableRefObject<HTMLDivElement | null>;
  onScroll: () => void;
};

export const useSliderScroll = (gap: number = 32, items: any[]): UseSliderScrollResult => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [scrollDeltaPx, setScrollDeltaPx] = useState(50);
  const isScrolledToEnd = scrollLeft >= maxScrollLeft;
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sliderContainerNode = sliderContainerRef.current;
    if (!sliderContainerNode) return;

    setScrollLeft(sliderContainerNode.scrollLeft);
    setMaxScrollLeft(sliderContainerNode.scrollWidth - sliderContainerNode.clientWidth);

    const slideWidth = sliderContainerNode.childNodes[0]
      ? (sliderContainerNode.childNodes[0] as HTMLElement).clientWidth
      : 50;
    const numberVisible = Math.floor(sliderContainerNode.clientWidth / (slideWidth + gap)) || 1;
    const deltaPx = (slideWidth + gap) * numberVisible;

    if (deltaPx !== scrollDeltaPx) {
      setScrollDeltaPx(deltaPx);
    }
  }, [items, gap, scrollDeltaPx]);

  const onScrollForward = () => {
    const sliderContainerNode = sliderContainerRef.current;
    if (!sliderContainerNode) return;

    const slideWidth = sliderContainerNode.childNodes[0]
      ? (sliderContainerNode.childNodes[0] as HTMLElement).clientWidth
      : 50;
    let offset = 0;

    if (
      scrollLeft &&
      scrollLeft % (slideWidth + gap) !== 0 &&
      maxScrollLeft - scrollLeft > scrollDeltaPx
    ) {
      const numberVisible = Math.floor(scrollLeft / (slideWidth + gap));
      offset = scrollLeft - numberVisible * (slideWidth + gap);
    }

    sliderContainerNode.scrollBy({ left: scrollDeltaPx - offset, behavior: 'smooth' });
  };

  const onScrollBack = () => {
    const sliderContainerNode = sliderContainerRef.current;
    if (!sliderContainerNode) return;

    const slideWidth = sliderContainerNode.childNodes[0]
      ? (sliderContainerNode.childNodes[0] as HTMLElement).clientWidth
      : 50;
    let offset = 0;

    if (scrollLeft && scrollLeft % (slideWidth + gap) !== 0 && scrollLeft > scrollDeltaPx) {
      const numberVisible = Math.floor(scrollLeft / (slideWidth + gap));
      offset = scrollLeft - (numberVisible + 1) * (slideWidth + gap);
    }

    sliderContainerNode.scrollBy({ left: -scrollDeltaPx - offset, behavior: 'smooth' });
  };

  const onScroll = () => {
    const sliderContainerNode = sliderContainerRef.current;
    if (!sliderContainerNode) return;
    setScrollLeft(sliderContainerNode.scrollLeft);
  };

  return {
    onScrollForward,
    onScrollBack,
    scrollLeft,
    isScrolledToEnd,
    sliderContainerRef,
    onScroll,
  };
};
