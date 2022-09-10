import { showPanel } from '@codemirror/view';
import { EditorView, Panel } from '@codemirror/view';
import { InitialState } from '../../store/setting';

type HeaderPanelOptions = {
  style?: InitialState['windowStyle'];
  disableTitle?: boolean;
  title?: string;
};

function headerPanel(options: HeaderPanelOptions = {}): (view: EditorView) => Panel {
  return (view) => {
    const dom = document.createElement('div');
    if (options.style !== 'none') {
      const actions = document.createElement('div');
      actions.className = 'cm-panel-actions-' + options.style?.toLocaleLowerCase();

      const exit = document.createElement('div');
      exit.className = 'exit';
      const minimize = document.createElement('div');
      minimize.className = 'minimize';
      const maximize = document.createElement('div');
      maximize.className = 'maximize';
      actions.appendChild(exit);
      actions.appendChild(minimize);
      actions.appendChild(maximize);
      dom.appendChild(actions);
      if (options.disableTitle) {
        const input = document.createElement('input');
        input.className = 'cm-panel-title-input';
        input.value = options.title || '';
        dom.appendChild(input);
      }
    }
    return {
      top: true,
      dom,
    };
  };
}

export function showHeader(options?: HeaderPanelOptions) {
  return showPanel.of(headerPanel(options));
}
