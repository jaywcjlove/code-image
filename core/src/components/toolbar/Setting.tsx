import React, { FC, PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { ContextSetting } from '../../store/setting';
import { Input } from './Input';

const Warpper = styled.div`
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: 0.5rem;
`;

const ItemWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const InputMini = styled(Input)`
  max-width: 60px;
`;

interface ItemLabel {
  label?: React.ReactNode;
}

const Item: FC<PropsWithChildren<ItemLabel>> = (props) => {
  const { label, children } = props;
  return (
    <ItemWarpper>
      <label>{label}</label>
      <div>{children}</div>
    </ItemWarpper>
  );
};

export const SettingView = () => {
  const {
    fontSize,
    width,
    padding,
    enableShadow,
    setEnableShadow,
    setPadding,
    setWidth,
    borderRadius,
    setBorderRadius,
    setFontSize,
    lineNumbers,
    setLineNumbers,
  } = useContext(ContextSetting);
  return (
    <Warpper>
      <Item label="Width">
        <InputMini
          type="number"
          placeholder="auto"
          min="250"
          value={width}
          onChange={(ev) => setWidth(ev.target.value)}
        />
      </Item>
      <Item label="Padding">
        <InputMini
          type="number"
          placeholder="auto"
          value={padding}
          onChange={(ev) => setPadding(Number(ev.target.value))}
        />
      </Item>
      {/* <Item label="Background Color"> </Item> */}
      <Item label="Font Size">
        <InputMini type="number" value={fontSize} onChange={(ev) => setFontSize(Number(ev.target.value))} />
      </Item>
      <Item label="Line Numbers">
        <InputMini type="checkbox" checked={lineNumbers} onChange={(ev) => setLineNumbers(ev.target.checked)} />
      </Item>
      <Item label="Shadow">
        <InputMini type="checkbox" checked={enableShadow} onChange={(ev) => setEnableShadow(ev.target.checked)} />
      </Item>
      <Item label="Border Radius">
        <InputMini type="number" value={borderRadius} onChange={(ev) => setBorderRadius(Number(ev.target.value))} />
      </Item>
    </Warpper>
  );
};
