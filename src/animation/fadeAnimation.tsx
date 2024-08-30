"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, {css, keyframes } from 'styled-components';

type fadeinAnimationType = {
  children: ReactNode;
};

export const FadeinAnimation = (props: fadeinAnimationType) => {
  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <FadeinAnim inView={inView} ref={ref} className="opacity-0">
      {children}
    </FadeinAnim>
  );
};
//   @apply ${(props) => (props.inView ? "animate-slide-from-left" : "")};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeinAnim = styled.span<{ inView: boolean }>`
  ${(props) => props.inView ? css`animation: ${FadeIn} 3s forwards;` : ""}
`;

// ----

type fadeoutAnimationType = {
  children: ReactNode;
};

export const FadeoutAnimation = (props: fadeoutAnimationType) => {
  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <FadeinAnim inView={inView} ref={ref} className="opacity-0">
      {children}
    </FadeinAnim>
  );
};
//   @apply ${(props) => (props.inView ? "animate-slide-from-left" : "")};

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FadeoutAnim = styled.span<{ inView: boolean }>`
  ${(props) => props.inView ? css`animation: ${FadeOut} 3s forwards;` : ""}
`;
