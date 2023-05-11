import { FronteggProviderNoSSR } from "@frontegg/nextjs/no-ssr";
import type { AppProps } from "next/app";

const contextOptions = {
  baseUrl: 'https://samples-demo.frontegg.com',
  clientId: '2e53360e-517e-4c38-a040-ba0e8639f2c7'
};

const authOptions = {
  keepSessionAlive: true
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FronteggProviderNoSSR
      contextOptions={contextOptions}
      authOptions={authOptions}
      hostedLoginBox={true} //Switch to false when using Embedded login
    >
      <Component {...pageProps} />
    </FronteggProviderNoSSR>
  );
}

export default MyApp;
