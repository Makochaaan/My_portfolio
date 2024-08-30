"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, {css, keyframes } from 'styled-components';

type slideAnimationRightType = {
  children: ReactNode;
  Threshold?: number;
};

export const SlideAnimationRight = (props: slideAnimationRightType) => {
  const { children, Threshold = 0 } = props;

  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true,
    threshold: Threshold,
  });

  return (
    <SlideAnimRight inView={inView} ref={ref} className="opacity-0">
      {children}
    </SlideAnimRight>
  );
};
//   @apply ${(props) => (props.inView ? "animate-slide-from-left" : "")};

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideAnimRight = styled.span<{ inView: boolean }>`
  ${(props) => props.inView ? css`animation: ${slideInRight} .5s forwards;` : ""}
`;

type slideAnimationLeftType = {
  children: ReactNode;
  Threshold?: number;
};

export const SlideAnimationLeft = (props: slideAnimationLeftType) => {
  const { children, Threshold = 0} = props;

  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true,
    threshold: Threshold,
  });

  return (
    <SlideAnimLeft inView={inView} ref={ref} className="opacity-0">
      {children}
    </SlideAnimLeft>
  );
};
//   @apply ${(props) => (props.inView ? "animate-slide-from-left" : "")};

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideAnimLeft = styled.span<{ inView: boolean }>`
  ${(props) => props.inView ? css`animation: ${slideInLeft} 3s forwards;` : ""}
`;
