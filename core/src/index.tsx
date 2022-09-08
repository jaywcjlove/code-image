import React from 'react';
import { Warpper } from './components/Warpper';
import { ToolBar } from './components/toolbar/index';
import { Provider } from './store/content';
import EditorContainer from './components/editor';

export interface CodeImageProps extends React.PropsWithRef<React.HTMLAttributes<HTMLDivElement>> {
  prefixCls?: string;
}

export default function CodeImage(props: CodeImageProps = {}) {
  const { className, prefixCls = 'w-code-image', ...others } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  return (
    <Provider>
      <Warpper {...others} className={cls}>
        <ToolBar />
        <EditorContainer />
      </Warpper>
    </Provider>
  );
}
