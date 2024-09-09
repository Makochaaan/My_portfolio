"use client";

import { ReactNode } from "react";
import styled, { keyframes } from 'styled-components';

type loadAnimationType = {
  children?: React.ReactNode;
  classContent: string;
};

export const LoadAnimation = (props: loadAnimationType) => {
  const { children, classContent } = props;

  return (
    <LoadAnim className={classContent}>
      {children}
    </LoadAnim>
  );
};

const loadKeyframes = keyframes`
  0% {
    transform-origin:left;
		transform:scaleX(0);
  }
  25% {
    transform-origin:left;
		transform:scaleX(1);
  }
  75% {
    transform-origin:right;
		transform:scaleX(1);
  }
  100% {
    transform-origin:right;
		transform:scaleX(0);

  }
`;

const LoadAnim = styled.div`
  animation: ${loadKeyframes} 4.5s forwards;
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: left;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
`;

// ---

type loadStrAnimationType = {
  children?: ReactNode;
};

export const LoadStrAnimation = (props: loadStrAnimationType) => {
  const { children } = props;

  return (
    <LoadStrAnim className="absolute">
        {children}
    </LoadStrAnim>
  );
};

const LoadStr = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
    z-index: 30;  
  }
  25% {
    transform: translateX(-100%);
    opacity: 0;
    z-index: 30;  
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
    z-index: 30;  
  }
  100% {
    transform: translateX(75%);
    opacity: 0;
    z-index: -1;
  }
`;


const LoadStrAnim = styled.div`
  animation: ${LoadStr} 5s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;  
`;