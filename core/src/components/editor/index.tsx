import React, { useContext, useEffect, useRef } from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import * as themes from '@uiw/codemirror-themes-all';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { Container, ContainerPadding, EidtorContainer } from '../Container';
import { Context } from '../../store/content';
import { ContextSetting } from '../../store/setting';
import { showHeader } from './showPanel';

const basicSetup: ReactCodeMirrorProps['basicSetup'] = { foldGutter: false };
const DragWidth = styled.div`
  width: 5px;
  height: 100%;
  position: absolute;
  z-index: 999;
  right: -3px;
  cursor: ew-resize;
  user-select: none;
  background-color: #57b5f9;
  opacity: 0;
  &:hover {
    opacity: 0.4;
  }
`;

export default function EditorContainer() {
  const $dom = useRef<HTMLDivElement>(null);
  const $container = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const { theme, code, lang, setCode, setDomImage } = useContext(Context);
  const { state, dispatch } = useContext(ContextSetting);
  const {
    windowStyle,
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color,
    lineNumbers,
    lineHighlight,
    fontSize,
    enableShadow,
    padding,
    width,
    borderRadius,
  } = state;
  if (typeof basicSetup === 'object') {
    basicSetup.lineNumbers = lineNumbers;
  }

  const windowsStyle = EditorView.theme({
    '.cm-panel-actions-macos': {
      display: 'flex',
      gap: '6px',
      padding: '9px 5px 3px 9px',
    },
    '.cm-panel-actions-macos > div': {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
    },
    '.cm-panel-actions-macos .exit': {
      backgroundColor: '#ff5f56',
      boxShadow: '0 0 1px #e0443e',
    },
    '.cm-panel-actions-macos .minimize': {
      backgroundColor: '#ffbd2e',
      boxShadow: '0 0 1px #dea123',
    },
    '.cm-panel-actions-macos .maximize': {
      backgroundColor: '#27c93f',
      boxShadow: '0 0 1px #1aab29',
    },
    '.cm-panel-actions-windows': {
      display: 'flex',
      float: 'right',
      gap: '12px',
      padding: '4px 8px 4px 0',
    },
    '.cm-panel-actions-windows > div': {
      width: '14px',
      height: '14px',
    },
    '.cm-panel-actions-windows .exit': {
      borderBottom: '2px solid #cfd2d1',
      top: '-6px',
      position: 'relative',
    },
    '.cm-panel-actions-windows .minimize': {
      border: '2px solid #cfd2d1',
      width: '14px',
      height: '14px',
    },
    '.cm-panel-actions-windows .maximize': {
      width: '16px',
      height: '16px',
    },
    '.cm-panel-actions-windows .maximize::after, .cm-panel-actions-windows .maximize::before': {
      content: "' '",
      display: 'inline-block',
      height: '16px',
      left: '5px',
      position: 'relative',
    },
    '.cm-panel-actions-windows .maximize::after': {
      borderRight: '2px solid #cfd2d1',
      transform: 'rotate(-45deg)',
    },
    '.cm-panel-actions-windows .maximize::before': {
      borderLeft: '2px solid #cfd2d1',
      transform: 'rotate(45deg)',
      left: '7px',
    },
  });
  const defaultStyle = EditorView.theme({
    '&.cm-editor': {
      borderRadius: `${borderRadius}px`,
      padding: '6px',
      fontSize: `${fontSize}px`,
    },
    '.cm-gutters': {
      borderRight: '0',
      backgroundColor: 'transparent !important',
    },
    '.cm-activeLine, .cm-activeLineGutter': lineHighlight
      ? {}
      : {
          backgroundColor: 'transparent !important',
        },
    '.cm-line': {
      paddingRight: '5px',
    },
    '.cm-panels': {
      backgroundColor: 'transparent !important',
    },
    '.cm-scroller': {
      padding: '5px',
      fontFamily: 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace',
    },
    '&.cm-editor.cm-focused': {
      outline: 0,
    },
  });

  const extensions = [defaultStyle, windowsStyle, showHeader(windowStyle)];
  if (langs[lang]) {
    extensions.push(langs[lang]());
  }
  if (width) {
    extensions.push(EditorView.lineWrapping);
  }
  useEffect(() => {
    if ($dom.current) {
      setDomImage($dom.current);
    }
  }, [$dom]);
  const handleChange = (value: string) => {
    setCode(value);
  };
  const handleMouseDown = (ev: React.MouseEvent<HTMLDivElement>) => {
    startX.current = ev.clientX;
    startWidth.current = $container.current?.clientWidth || 0;
    window.addEventListener('mousemove', onDragging, false);
    window.addEventListener('mouseup', onDragEnd, false);
  };
  const onDragging = (ev: MouseEvent) => {
    const newWidth = ev.clientX - startX.current;
    const currentWdith = startWidth.current + newWidth;
    if (currentWdith > 250) {
      dispatch({ width: String(currentWdith) });
    }
  };
  const onDragEnd = (ev: MouseEvent) => {
    window.removeEventListener('mousemove', onDragging, false);
    window.removeEventListener('mouseup', onDragEnd, false);
  };
  return (
    <EidtorContainer>
      <ContainerPadding ref={$dom} padding={padding}>
        <Container
          ref={$container}
          enableShadow={enableShadow}
          borderRadius={borderRadius}
          offsetX={offsetX}
          offsetY={offsetY}
          blurRadius={blurRadius}
          spreadRadius={spreadRadius}
          shadowColor={color}
        >
          <DragWidth onMouseDown={handleMouseDown} />
          <CodeMirror
            theme={themes[theme]}
            width={`${width}px`}
            basicSetup={basicSetup}
            placeholder="Please enter your code"
            extensions={extensions}
            value={code}
            onChange={handleChange}
          />
        </Container>
      </ContainerPadding>
    </EidtorContainer>
  );
}
