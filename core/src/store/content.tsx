import React from 'react';
import * as themes from '@uiw/codemirror-themes-all';
import { LanguageName } from '@uiw/codemirror-extensions-langs';

const sampleCode = `import React from 'react';
const HelloWorld = () => {
  return <div>Hello World!</div>
};`;

export type ToolType = 'clean' | 'download' | 'style' | 'lang' | 'setting' | undefined;
export type ThemeValue = keyof typeof themes;
export interface CreateContext {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  lang: LanguageName;
  setLang: React.Dispatch<React.SetStateAction<LanguageName>>;
  panel?: ToolType;
  setPanel: React.Dispatch<React.SetStateAction<ToolType>>;
  domImage?: HTMLDivElement;
  setDomImage: React.Dispatch<React.SetStateAction<HTMLDivElement | undefined>>;
  theme: ThemeValue;
  setTheme: React.Dispatch<React.SetStateAction<ThemeValue>>;
}

export const Context = React.createContext<CreateContext>({
  code: sampleCode,
  setCode: () => {},
  lang: 'jsx',
  setLang: () => {},
  panel: undefined,
  setPanel: () => {},
  domImage: undefined,
  setDomImage: () => {},
  theme: 'githubDark',
  setTheme: () => {},
});

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [code, setCode] = React.useState<string>(sampleCode);
  const [lang, setLang] = React.useState<LanguageName>('jsx');
  const [panel, setPanel] = React.useState<ToolType>();
  const [theme, setTheme] = React.useState<ThemeValue>('githubDark');
  const [domImage, setDomImage] = React.useState<HTMLDivElement>();
  return (
    <Context.Provider
      value={{
        code,
        setCode,
        lang,
        setLang,
        panel,
        setPanel,
        domImage,
        setDomImage,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
