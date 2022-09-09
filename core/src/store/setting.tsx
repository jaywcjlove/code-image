import React, { useReducer } from 'react';

type InitialState = {
  lineHighlight: boolean;
  lineNumbers: boolean;
  enableShadow: boolean;
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
  lineHighlight: false,
  lineNumbers: false,
  enableShadow: true,
  fontSize: 14,
  width: '',
  borderRadius: 5,
  padding: 20,
  offsetX: 0,
  offsetY: 5,
  blurRadius: 20,
  spreadRadius: 0,
  color: 'rgb(0 0 0 / 25%)',
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