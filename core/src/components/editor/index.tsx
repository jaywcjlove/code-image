import React, { useContext, useEffect, useRef } from 'react';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import * as themes from '@uiw/codemirror-themes-all';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { Container, ContainerPadding, EidtorContainer } from '../Container';
import { Context } from '../../store/content';
import { ContextSetting } from '../../store/setting';

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
  const { lineNumbers, lineHighlight, fontSize, enableShadow, padding, width, setWidth, borderRadius } =
    useContext(ContextSetting);
  if (typeof basicSetup === 'object') {
    basicSetup.lineNumbers = lineNumbers;
  }

  const defaultStyle = EditorView.theme({
    '&.cm-editor': {
      borderRadius: `${borderRadius}px`,
      padding: '5px',
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
    '&.cm-editor.cm-focused': {
      outline: 0,
    },
  });

  const extensions = [defaultStyle];
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
      setWidth(String(currentWdith));
    }
  };
  const onDragEnd = (ev: MouseEvent) => {
    window.removeEventListener('mousemove', onDragging, false);
    window.removeEventListener('mouseup', onDragEnd, false);
  };
  return (
    <EidtorContainer>
      <ContainerPadding ref={$dom} padding={padding}>
        <Container ref={$container} enableShadow={enableShadow}>
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
