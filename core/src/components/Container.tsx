import React from 'react';
import styled, { css } from 'styled-components';

type ContainerProps = {
  enableShadow?: boolean;
  borderRadius: number;
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  shadowColor: string;
};

export const Container = styled.div<Partial<ContainerProps>>`
  position: relative;
  min-width: 250px;
  ${(props) =>
    props.enableShadow &&
    css`
      border-radius: ${props.borderRadius}px;
      box-shadow: ${props.shadowColor || '#0000008f'} ${props.offsetX || 0}px ${props.offsetY || 5}px
        ${props.blurRadius || 20}px ${props.spreadRadius || 0}px;
    `}
`;

type ContainerPaddingProps = {
  padding?: number;
};

export const ContainerPadding = styled.div<ContainerPaddingProps>`
  ${(props) => css`
    padding: ${props.padding ? `${props.padding}px` : '20px'};
  `}
  min-width: 100px;
`;

export const EidtorContainer = styled.div`
  border: 2px dotted #b5d4ff;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==);
  background-color: #fff;
`;
