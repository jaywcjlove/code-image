import { showPanel } from '@codemirror/view';
import { EditorView, Panel } from '@codemirror/view';
import { InitialState } from '../../store/setting';

function headerPanel(style?: InitialState['windowStyle']): (view: EditorView) => Panel {
  return (view) => {
    const dom = document.createElement('div');
    const actions = document.createElement('div');
    actions.className = 'cm-panel-actions-' + style?.toLocaleLowerCase();

    const exit = document.createElement('div');
    exit.className = 'exit';
    const minimize = document.createElement('div');
    minimize.className = 'minimize';
    const maximize = document.createElement('div');
    maximize.className = 'maximize';
    actions.appendChild(exit);
    actions.appendChild(minimize);
    actions.appendChild(maximize);
    if (style !== 'none') {
      dom.appendChild(actions);
    }
    return {
      top: true,
      dom,
    };
  };
}

export function showHeader(style?: InitialState['windowStyle']) {
  return showPanel.of(headerPanel(style));
}
