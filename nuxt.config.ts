// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "~": "/<rootDir>",
  "@": "/<rootDir>",
  "assets": "/<rootDir>/assets",
  app: {
    head: {
        htmlAttrs: {
            lang: 'es-mx'
        },
        charset: 'utf-8',
        title: 'Canal Once',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Canal Once inició sus transmisiones el 2 de marzo 1959, lo que la convierte en la primera televisora pública, educativa y cultural en México, y pionera en América Latina. A lo largo de su historia es reconocida por sus contenidos, que aportan conocimiento, información, cultura y entretenimiento.' },
            { name: 'keywords', content: 'Canal 11, canal once, once, televisora, pública, televisión, tv abierta, señal abierta, televisión mexicana, ipn, televisora politécnica' },
            { name: 'author', content: 'Canal Once' },
            { name: 'twitter:card', content: 'summary_large_imag' },
            { name: 'twitter:site', content: '@CanalOnceTV' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
            { property: 'og:locale', content: 'es_MX' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Canal Once' },
            { property: 'og:description', content: 'Canal Once inició sus transmisiones el 2 de marzo 1959, lo que la convierte en la primera televisora pública, educativa y cultural en México, y pionera en América Latina. A lo largo de su historia es reconocida por sus contenidos, que aportan conocimiento, información, cultura y entretenimiento.' },
            { property: 'og:url', content: 'https://canalonce.mx' },
            { property: 'og:site_name', content: 'Canal Once' },
            { property: 'og:image', content: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/screeen_logo_once.jpg' },
            { property: 'og:image:width', content: '1346' },
            { property: 'og:image:height', content: '1346' },
            { property: 'og:image:type', content: 'image/jpeg' },
            { property: 'og:image:type', content: 'image/jpeg' },
        ],
        link: [
            { rel: 'shortlink', href: 'https://canalonce.mx/'},
            { rel: 'canonical', href: 'https://canalonce.mx'},
            { rel: 'dns-prefetch', href: '//www.google-analytics.com'},
            { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-57x57.png'},
            { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-60x60.png'},
            { rel: 'apple-touch-icon', sizes: '72', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-72x72.png'},
            { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-76x76.png'},
            { rel: 'apple-touch-icon', sizes: '114x144', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-114x114.png'},
            { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-120x120.png'},
            { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-144x144.png'},
            { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-152x152.png'},
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-180x180.png'},
            { rel: 'icon', sizes: '192x192', href: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-192x192.png'},
        ],              
        script: [
        ]
    }
  },
  css:[
    '@/assets/css/main.css',
    '@/assets/css/navbar.css',
    '@/assets/css/footer.css',
  ],
  ssr: true,
  modules: [ 
    'nuxt-aos',
    'nuxt-icon',
    'nuxt-viewport',
    'nuxt-typed-router',
    'nuxt-link-checker',
    'nuxt-payload-analyzer',
    '@nuxthq/studio',
  ],
  devtools: { enabled: true },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },

    cookie: {
      expires: 365, // 365 days
      name: 'viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true,
    },

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },

    fallbackBreakpoint: 'desktop',
  },
})
