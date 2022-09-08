import React, { useContext, useState } from 'react';
import { langs, LanguageName } from '@uiw/codemirror-extensions-langs';
import styled, { css } from 'styled-components';
import Keywords from 'react-keywords';
import { Input } from './Input';
import { Context } from '../../store/content';

const Warpper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: 0.2rem;
  position: relative;
`;

const LanguageItem = styled.div`
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
    background-color: #333;
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

const Header = styled.div<{ active: boolean }>`
  background-color: #00000017;
  border-radius: 0.2rem;
  display: inline-block;
  padding: 0.1rem 0.3rem;
  ${(props) =>
    props.active &&
    css`
      background-color: #00ea015e;
    `}
`;

export const LanguageView = () => {
  const { lang, setLang } = useContext(Context);
  const [search, setSearch] = useState<string>('');
  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    setLang(ev.currentTarget.dataset.theme as LanguageName);
  };
  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };
  const filter = (keyname: string) => {
    return new RegExp(`${search}`, 'gi').test(keyname);
  };
  return (
    <Warpper>
      <Input type="search" value={search} onChange={handleSearch} />
      {(Object.keys(langs) as Array<LanguageName>).filter(filter).map((keyname, index) => {
        return (
          <LanguageItem key={index} data-theme={keyname} onClick={handleClick}>
            <Header active={keyname === lang}>
              <Keywords value={search}>{keyname}</Keywords>
            </Header>
          </LanguageItem>
        );
      })}
    </Warpper>
  );
};
