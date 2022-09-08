import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { CleanIcon, DownloadIcon, ThemeIcon, SettingIcon, CodeIcon } from '../icons';
import { ThemeView } from './Themes';
import { DownloadView } from './Download';
import { LanguageView } from './Language';
import { Context, ThemeValue } from '../../store/content';

export const Warpper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  z-index: 9;
`;

type ButtonProps = {
  active?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding: 0;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 0.5rem;
  border: 0;
  transition: all 0.3s;
  svg {
    height: 1.8em;
  }
  &:hover {
    background-color: #d3d3d3;
  }
  &:active {
    background-color: #c5c5c5;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #c5c5c5;
    `}
`;

export const BlockButton = styled(Button)`
  width: initial;
  border-radius: 0.3rem;
  justify-content: start;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  gap: 0.3rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
`;

const Container = styled.div`
  box-shadow: 0 0 0 1px rgb(0 0 0 / 11%), 1px 1px 5px rgb(0 0 0 / 12%);
  border-radius: 0.3rem;
  background-color: #ffffffd9;
`;

const Aside = styled(Container)`
  flex: 1;
  overflow: auto;
`;

type ToolType = 'clean' | 'download' | 'style' | 'lang' | 'setting';

export function ToolBar() {
  const { setCode } = useContext(Context);
  const [toolType, setToolType] = useState<ToolType>();
  const typeHandle = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setToolType(ev.currentTarget.dataset.type as ToolType);
  };
  const cleanCodeHandle = () => {
    setCode('');
  };
  return (
    <Warpper>
      <Container>
        <Nav>
          <Button data-type="clean" active={toolType === 'clean'} onClick={cleanCodeHandle}>
            <CleanIcon />
          </Button>
          <Button data-type="download" active={toolType === 'download'} onClick={typeHandle}>
            <DownloadIcon />
          </Button>
          <Button data-type="style" active={toolType === 'style'} onClick={typeHandle}>
            <ThemeIcon />
          </Button>
          <Button data-type="lang" active={toolType === 'lang'} onClick={typeHandle}>
            <CodeIcon />
          </Button>
          <Button data-type="setting" active={toolType === 'setting'} onClick={typeHandle}>
            <SettingIcon />
          </Button>
        </Nav>
      </Container>
      {toolType === 'style' && (
        <Aside>
          <ThemeView />
        </Aside>
      )}
      {toolType === 'download' && (
        <Aside>
          <DownloadView />
        </Aside>
      )}
      {toolType === 'lang' && (
        <Aside>
          <LanguageView />
        </Aside>
      )}
    </Warpper>
  );
}
