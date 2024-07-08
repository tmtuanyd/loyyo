/* eslint-disable react/prop-types */
import React, { ReactNode, forwardRef, Ref } from 'react';
import classes from './Slider.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Box, Flex } from '@mantine/core';

interface SlidersLayoutProps {
  children: ReactNode[];
  scrollLeft: number;
  onScrollForward: () => void;
  onScrollBack: () => void;
  isScrolledToEnd: boolean;
  onScroll: () => void;
  gap: number;
}

const SlidersLayout = forwardRef<HTMLDivElement, SlidersLayoutProps>(
  (
    { children, scrollLeft, onScrollForward, onScrollBack, isScrolledToEnd, onScroll, gap },
    ref
  ) => {
    return (
      <div className={classes.slider}>
        <div className={classes.sliderContainer}>
          <Flex gap={gap} className={classes.slides} ref={ref} onScroll={onScroll}>
            {children.map((card, index) => (
              <article className={classes.card} key={index}>
                {card}
              </article>
            ))}
            {/* {isShowLastCard && (
              <>
                <Box className={classes.lastCard}>
                  <Box className={classes.lastCard}></Box>
                </Box>
                <Box className={classes.virtualCard} />
              </>
            )} */}
            <Box className={classes.virtualCard}></Box>
          </Flex>
          <span onClick={onScrollForward} className={classes.navigationNext}>
            <IconChevronRight />
          </span>
        </div>
      </div>
    );
  }
);

SlidersLayout.displayName = 'SlidersLayout';
export default SlidersLayout;
