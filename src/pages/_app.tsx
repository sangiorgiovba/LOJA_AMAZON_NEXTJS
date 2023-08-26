import R_Layout from '@/components/R_Layout';
import { persistor, store } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { PersistGate } from 'redux-persist/integration/react';
import {SessionProvider} from "next-auth/react";


export default function App({
  Component,
  pageProps:{session, ...pageProps},
 }: AppProps) {
  return(
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
     <SessionProvider session={session}>
        <div className="font-bodyFont bg-gray-300">
          <R_Layout>
            <Component {...pageProps} />
          </R_Layout>
        </div>
     </SessionProvider>
    </PersistGate>
    </Provider>
    
  );
}
