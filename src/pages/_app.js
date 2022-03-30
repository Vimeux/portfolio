import { useEffect } from 'react'
import Layout from '../common/components/Layout/Layout'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  // Manage locomotive
  useEffect(() => {
    let scroll
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
        lerp: 0.1,
        multiplier: 1,
        offset: ['30%', 100]
      })
    })

    // `useEffect`'s cleanup phase
    return () => scroll.destroy()
  })

  // Each time the component is modified, the page size is recalculated according to the size of the component.
  useEffect(() => window.dispatchEvent(new Event('resize')), [Component])

  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
