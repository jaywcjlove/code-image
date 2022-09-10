import React, { FC, PropsWithChildren, useContext } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { ContextSetting, WindowStyle } from '../../store/setting';
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
  paddingLeft?: number;
}

const Item: FC<PropsWithChildren<ItemLabel>> = (props) => {
  const { label, children, paddingLeft } = props;
  const style: CSSProperties = { paddingLeft };
  return (
    <ItemWarpper>
      <label style={style}>{label}</label>
      <div>{children}</div>
    </ItemWarpper>
  );
};

const colorInputStyle: CSSProperties = {
  padding: 0,
};

export const SettingView = () => {
  const { state, dispatch } = useContext(ContextSetting);
  const {
    fontSize,
    width,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color,
    padding,
    enableShadow,
    borderRadius,
    lineHighlight,
    lineNumbers,
    disableTitle,
  } = state;
  return (
    <Warpper>
      <Item label="Window Style">
        <select value={state.windowStyle} onChange={(ev) => dispatch({ windowStyle: ev.target.value as WindowStyle })}>
          <option value="none">none</option>
          <option value="Windows">Windows</option>
          <option value="MacOS">MacOS</option>
        </select>
      </Item>
      <Item label="Width">
        <InputMini
          type="number"
          placeholder="auto"
          min="250"
          value={width}
          onChange={(ev) => dispatch({ width: ev.target.value })}
        />
      </Item>
      <Item label="Padding">
        <InputMini
          type="number"
          placeholder="auto"
          value={padding}
          onChange={(ev) => dispatch({ padding: Number(ev.target.value) })}
        />
      </Item>
      {/* <Item label="Background Color"> </Item> */}
      <Item label="Font Size">
        <InputMini type="number" value={fontSize} onChange={(ev) => dispatch({ fontSize: Number(ev.target.value) })} />
      </Item>
      <Item label="Line Numbers">
        <InputMini
          type="checkbox"
          checked={lineNumbers}
          onChange={(ev) => dispatch({ lineNumbers: ev.target.checked })}
        />
      </Item>
      <Item label="Line Highlight">
        <InputMini
          type="checkbox"
          checked={lineHighlight}
          onChange={(ev) => dispatch({ lineHighlight: ev.target.checked })}
        />
      </Item>
      <Item label="Title">
        <InputMini
          type="checkbox"
          checked={disableTitle}
          onChange={(ev) => dispatch({ disableTitle: ev.target.checked })}
        />
      </Item>
      <Item label="Border Radius">
        <InputMini
          type="number"
          value={borderRadius}
          onChange={(ev) => dispatch({ borderRadius: Number(ev.target.value) })}
        />
      </Item>
      <Item label="Shadow">
        <InputMini
          type="checkbox"
          checked={enableShadow}
          onChange={(ev) => dispatch({ enableShadow: ev.target.checked })}
        />
      </Item>
      <Item label="Offset X" paddingLeft={10}>
        <InputMini type="number" value={offsetX} onChange={(ev) => dispatch({ offsetX: Number(ev.target.value) })} />
      </Item>
      <Item label="Offset Y" paddingLeft={10}>
        <InputMini type="number" value={offsetY} onChange={(ev) => dispatch({ offsetY: Number(ev.target.value) })} />
      </Item>
      <Item label="Blur Radius" paddingLeft={10}>
        <InputMini
          type="number"
          value={blurRadius}
          onChange={(ev) => dispatch({ blurRadius: Number(ev.target.value) })}
        />
      </Item>
      <Item label="Spread Radius" paddingLeft={10}>
        <InputMini
          type="number"
          value={spreadRadius}
          onChange={(ev) => dispatch({ spreadRadius: Number(ev.target.value) })}
        />
      </Item>
      <Item label="Color" paddingLeft={10}>
        <InputMini
          type="color"
          value={color}
          style={colorInputStyle}
          onChange={(ev) => dispatch({ color: ev.target.value })}
        />
      </Item>
    </Warpper>
  );
};
