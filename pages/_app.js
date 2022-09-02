import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return <SessionProvider session={session}>
    <Component {...pageProps}/>;
  </SessionProvider>
}

export default MyApp
