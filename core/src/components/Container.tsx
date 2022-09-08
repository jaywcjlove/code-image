import styled, { css } from 'styled-components';

type ContainerProps = {
  enableShadow?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  ${(props) =>
    props.enableShadow &&
    css`
      box-shadow: rgb(0 0 0 / 25%) 0px 5px 20px 0px;
    `}
  min-width: 250px;
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
`;
