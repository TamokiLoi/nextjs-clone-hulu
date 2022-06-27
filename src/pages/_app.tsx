import type { AppProps } from 'next/app'
import { Template } from '@@components'
import { useMedia } from '@@hooks';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 999px)");
  const desktop = useMedia("(min-width: 1000px)");

  return (
    <Template deviceType={{ mobile, tablet, desktop }}>
      <Component
        {...pageProps}
        deviceType={{ mobile, tablet, desktop }}
      />
    </Template>
  )
}

export default MyApp
