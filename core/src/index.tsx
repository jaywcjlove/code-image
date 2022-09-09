import React from 'react';
import { Warpper, WarpperOverflow } from './components/Warpper';
import { ToolBar } from './components/toolbar/index';
import { Provider } from './store/content';
import { ProviderSetting } from './store/setting';
import EditorContainer from './components/editor';

export interface CodeImageProps extends React.PropsWithRef<React.HTMLAttributes<HTMLDivElement>> {
  prefixCls?: string;
}

export default function CodeImage(props: CodeImageProps = {}) {
  const { className, prefixCls = 'w-code-image', ...others } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  return (
    <ProviderSetting>
      <Provider>
        <ToolBar />
        <WarpperOverflow>
          <Warpper {...others} className={cls}>
            <EditorContainer />
          </Warpper>
        </WarpperOverflow>
      </Provider>
    </ProviderSetting>
  );
}
