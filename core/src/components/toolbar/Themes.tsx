import React, { useContext } from 'react';
import * as themes from '@uiw/codemirror-themes-all';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { Context, ThemeValue } from '../../store/content';
import { CheckIcon } from '../icons';

const Warpper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: 0.5rem;
`;

const ThemeSample = styled.div`
  position: relative;
  padding: 0.3rem;
  &::after {
    content: ' ';
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    cursor: pointer;
    background-color: var(--color-ci-btn-hover-bg);
    border-radius: 0.2rem;
    opacity: 0;
    transition: all 0.2s;
  }
  &:hover::after {
    opacity: 0.1;
  }
  &:active::after {
    opacity: 0.3;
  }
`;

const Header = styled.div`
  background-color: var(--color-ci-btn-bg);
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0.3rem;
  margin-bottom: 0.3rem;
  position: sticky;
  z-index: 9;
  top: 0;
`;

const sampleCode = `import React from 'react';

export function Demo() {
  return <div>Oh!</div>;
}`;

const basicSetup = { foldGutter: false };
export const ThemeView = () => {
  const { setTheme, theme } = useContext(Context);
  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setTheme(ev.currentTarget.dataset.theme as ThemeValue);
  };
  return (
    <Warpper>
      {(Object.keys(themes) as Array<keyof typeof themes>).map((keyname, index) => {
        return (
          <ThemeSample key={index} data-theme={keyname} onClick={handleClick}>
            <Header>
              {keyname}
              {keyname === theme && <CheckIcon width={15} height={15} fill="#4caf7c" />}
            </Header>
            <CodeMirror
              value={sampleCode}
              basicSetup={basicSetup}
              editable={false}
              extensions={[langs.jsx()]}
              theme={themes[keyname]}
            />
          </ThemeSample>
        );
      })}
    </Warpper>
  );
};
