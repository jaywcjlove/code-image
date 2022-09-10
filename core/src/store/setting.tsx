import React, { useReducer } from 'react';

export type WindowStyle = 'Windows' | 'MacOS' | 'none';

export type InitialState = {
  windowStyle: WindowStyle;
  lineHighlight: boolean;
  lineNumbers: boolean;
  enableShadow: boolean;
  windowTitle: boolean;
  disableTitle: boolean;
  fontSize: number;
  width: string;
  borderRadius: number;
  padding: number;
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
};

const initialState: InitialState = {
  windowStyle: 'MacOS',
  lineHighlight: false,
  lineNumbers: false,
  windowTitle: true,
  disableTitle: true,
  enableShadow: true,
  fontSize: 14,
  width: '',
  borderRadius: 5,
  padding: 20,
  offsetX: 0,
  offsetY: 5,
  blurRadius: 20,
  spreadRadius: 0,
  color: '#737373',
};

function reducer(state: InitialState, action: Partial<InitialState>) {
  return { ...state, ...action };
}

export interface CreateContextSetting {
  state: Partial<InitialState>;
  dispatch: React.Dispatch<Partial<InitialState>>;
}

export const ContextSetting = React.createContext<CreateContextSetting>({
  state: initialState,
  dispatch: () => {},
});

export const ProviderSetting: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextSetting.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ContextSetting.Provider>
  );
};
