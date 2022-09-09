import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import domtoimage from 'dom-to-image-more';
import { Context } from '../../store/content';
import { JpgIcon, PngIcon, SvgIcon, DownloadIcon } from '../icons';
import { BlockButton } from './';
import { Input } from './Input';

const icons = {
  jpg: <JpgIcon height={26} style={{ color: '#9c27b0' }} />,
  png: <PngIcon height={26} style={{ color: '#009688' }} />,
  svg: <SvgIcon height={26} style={{ color: '#ff5722' }} />,
};

const Warpper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: 0.8rem;
`;

const Toolbar = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.2rem;
`;

type ToolbarItemProps = {
  active?: boolean;
};

const ToolbarItem = styled.div<ToolbarItemProps>`
  padding: 0.1rem 0 0.1rem 0;
  transition: all 0.3s;
  svg {
    display: block;
  }
  &:hover {
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 19%);
    border-radius: 0.2rem;
  }
  ${(props) =>
    props.active &&
    css`
      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 19%);
      border-radius: 0.2rem;
    `}
`;

const ButtonTitle = styled.span``;

const ScaleTool = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const ScaleToolItem = styled.span<ToolbarItemProps>`
  background-color: rgb(0 0 0 / 13%);
  padding: 0.1rem 0.2rem;
  display: inline-block;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 0.8rem;
  display: inline-block;
  position: relative;
  ${(props) =>
    props.active &&
    css`
      background-color: rgb(0 0 0 / 29%);
      border-radius: 0.2rem;
      &::after {
        content: '  ';
        display: block;
        background-color: #333;
        border-radius: 1px;
        height: 2px;
        bottom: -4px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    `}
`;

export const DownloadView = () => {
  const { domImage, imageName, setImageName } = useContext(Context);
  const [type, setType] = useState<keyof typeof icons>('png');
  const [scale, setScale] = useState<number>(2);
  const settingType = (ev: React.MouseEvent<HTMLDivElement>) => {
    setType(ev.currentTarget.dataset.type as keyof typeof icons);
  };
  const settingScale = (ev: React.MouseEvent<HTMLDivElement>) => {
    setScale(Number(ev.currentTarget.dataset.type));
  };
  const handleDownload = () => {
    let fun = domtoimage.toPng;
    if (type === 'jpg') {
      fun = domtoimage.toJpeg;
    } else if (type === 'svg') {
      fun = domtoimage.toSvg;
    }
    const opts = {
      height: domImage!.offsetHeight * scale,
      width: domImage!.offsetWidth * scale,
      style: {
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top left',
        height: domImage!.offsetHeight * scale,
        width: domImage!.offsetWidth * scale,
      },
    };

    fun(domImage, opts).then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `${imageName}.${type}`;
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <Warpper>
      <Input placeholder="Please enter image name" value={imageName} onChange={(ev) => setImageName(ev.target.value)} />
      <BlockButton onClick={handleDownload}>
        <DownloadIcon />
        <ButtonTitle>Download</ButtonTitle>
      </BlockButton>
      <Toolbar>
        <ToolbarItem data-type="jpg" active={type === 'jpg'} onClick={settingType}>
          <JpgIcon height={26} style={type === 'jpg' ? { color: '#9c27b0' } : {}} />
        </ToolbarItem>
        <ToolbarItem data-type="png" active={type === 'png'} onClick={settingType}>
          <PngIcon height={26} style={type === 'png' ? { color: '#009688' } : {}} />
        </ToolbarItem>
        <ToolbarItem data-type="svg" active={type === 'svg'} onClick={settingType}>
          <SvgIcon height={26} style={type === 'svg' ? { color: '#ff5722' } : {}} />
        </ToolbarItem>
      </Toolbar>
      <ScaleTool>
        <ScaleToolItem data-type="1" active={scale === 1} onClick={settingScale}>
          1x
        </ScaleToolItem>
        <ScaleToolItem data-type="2" active={scale === 2} onClick={settingScale}>
          2x
        </ScaleToolItem>
        <ScaleToolItem data-type="3" active={scale === 3} onClick={settingScale}>
          3x
        </ScaleToolItem>
        <ScaleToolItem data-type="png" active={type === 'png'} onClick={settingType}>
          png
        </ScaleToolItem>
        <ScaleToolItem data-type="jpg" active={type === 'jpg'} onClick={settingType}>
          jpg
        </ScaleToolItem>
        <ScaleToolItem data-type="svg" active={type === 'svg'} onClick={settingType}>
          svg
        </ScaleToolItem>
      </ScaleTool>
    </Warpper>
  );
};
