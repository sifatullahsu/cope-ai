import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...otherProps } = pageProps;
  const getLayout = Component.getLayout ?? ((page) => page);

  return <div>{getLayout(<Component {...otherProps} />)}</div>;
}
