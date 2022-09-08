import React from 'react';

export interface CreateContextSetting {
  lineNumbers: boolean;
  setLineNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  enableShadow: boolean;
  setEnableShadow: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  borderRadius: number;
  setBorderRadius: React.Dispatch<React.SetStateAction<number>>;
  padding: number;
  setPadding: React.Dispatch<React.SetStateAction<number>>;
}

export const ContextSetting = React.createContext<CreateContextSetting>({
  width: '',
  setWidth: () => {},
  lineNumbers: false,
  setLineNumbers: () => {},
  enableShadow: true,
  setEnableShadow: () => {},
  borderRadius: 5,
  setBorderRadius: () => {},
  padding: 20,
  setPadding: () => {},
  fontSize: 14,
  setFontSize: () => {},
});

export const ProviderSetting: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [fontSize, setFontSize] = React.useState<number>(14);
  const [lineNumbers, setLineNumbers] = React.useState<boolean>(false);
  const [enableShadow, setEnableShadow] = React.useState<boolean>(true);
  const [borderRadius, setBorderRadius] = React.useState<number>(5);
  const [width, setWidth] = React.useState<string>('');
  const [padding, setPadding] = React.useState<number>(20);
  return (
    <ContextSetting.Provider
      value={{
        enableShadow,
        setEnableShadow,
        width,
        setWidth,
        padding,
        setPadding,
        lineNumbers,
        setLineNumbers,
        borderRadius,
        setBorderRadius,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ContextSetting.Provider>
  );
};
