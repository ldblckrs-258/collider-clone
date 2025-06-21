export interface LandingData {
  announcement?: {
    text: string
    link: string
  }
  dealButton?: {
    text: string
    link: string
  }
  dealText?: {
    text: string
    link: string
  }
  banner: {
    video: string
    poster: string
  }
}

export const LANDING_DATA: LandingData = {
  announcement: {
    text: 'EXTRA 10% OFF WITH CODE LIFTOFF10',
    link: '/announcement'
  },
  dealButton: {
    text: 'GIVE 15%, GET 15%',
    link: '/deal-1'
  },
  dealText: {
    text: 'GET UP TO 25% OFF WHEN YOU BUILD A BUNDLE',
    link: '/deal-2'
  },
  banner: {
    video:
      'https://cdn.shopify.com/videos/c/o/v/981856146d1145d483dca453516384c3.mp4',
    poster:
      'https://cdn.shopify.com/s/files/1/0839/6767/2623/files/home-banner-poster.jpg'
  }
}
