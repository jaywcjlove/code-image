import { EditorView } from '@codemirror/view';

export const windowsStyle = EditorView.theme({
  '.cm-panels-top': {
    border: '0',
  },
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
    padding: '7px 8px 1px 0',
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
  '.cm-panel-title-input:focus-visible': {
    outline: '0',
  },
  '.cm-panel-title-input': {
    fontSize: 'inherit',
    color: 'currentColor',
    position: 'absolute',
    top: '0',
    background: 'transparent',
    width: '100%',
    textAlign: 'center',
    border: '0',
    padding: '7px 0',
  },
});
