import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.min");
  },[])
    return( 
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
}

export default MyApp
