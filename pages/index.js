import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  TextInput,
  Toolbar,
  Window,
  WindowHeader,
  WindowContent,
  Frame,
} from "react95";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppBar>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Button>Tests</Button>
          </Toolbar>
        </AppBar>

        <Window resizable style={{ width: "90%", marginTop: 200 }}>
          <WindowHeader className="window-title">
            <span>react94.exe</span>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
            <p>
              When you set &quot;resizable&quot; prop, there will be drag handle
              in the bottom right corner (but resizing itself must be handled by
              you tho!)
            </p>
          </WindowContent>
          <Frame variant="well" className="footer">
            Put some useful information here
          </Frame>
        </Window>
      </ThemeProvider>
    </>
  );
}
