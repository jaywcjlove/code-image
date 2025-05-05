import React from 'react';
import { Warpper, WarpperOverflow } from './components/Warpper';
import { ToolBar } from './components/toolbar/index';
import { Provider } from './store/content';
import { ProviderSetting } from './store/setting';
import EditorContainer from './components/editor/index';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] .w-code-image-color {
    --color-ci-bg: #2f2f2fd9;
    --color-ci-btn-bg: #5a5a5ad9;
    --color-ci-btn-hover-bg: #a1a1a1d9;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] .w-code-image-color {
    --color-ci-bg: #ffffffd9;
    --color-ci-btn-bg: #e4e4e4d9;
    --color-ci-btn-hover-bg: #a1a1a1d9;
  }
`;

export interface CodeImageProps extends React.PropsWithRef<React.HTMLAttributes<HTMLDivElement>> {
  prefixCls?: string;
}

export default function CodeImage(props: CodeImageProps = {}) {
  const { className, prefixCls = 'w-code-image', ...others } = props;
  const cls = [className, prefixCls, 'w-code-image-color'].filter(Boolean).join(' ');
  return (
    <ProviderSetting>
      <Provider>
        <GlobalStyle />
        <ToolBar className="w-code-image-color" />
        <WarpperOverflow className={cls}>
          <Warpper {...others}>
            <EditorContainer />
          </Warpper>
        </WarpperOverflow>
      </Provider>
    </ProviderSetting>
  );
}
