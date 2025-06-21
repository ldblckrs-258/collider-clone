import StarIcon from '@assets/star.svg?react'
import { RoundedButton } from '@components/button/rounded-button'
import { useWindowScrollPosition } from '@hooks/use-window-scroll-position'
import { useWindowSize } from '@hooks/use-window-size'
import { LANDING_DATA } from '@statics/landing-data'
import { cn } from '@utils/cn'
import { ArrowRightIcon } from 'lucide-react'
import { NavLink } from 'react-router'
import styles from './styles/App.module.styl'

function App() {
  const { width } = useWindowSize()
  const { y } = useWindowScrollPosition()

  return (
    <>
      {LANDING_DATA?.dealText && y < 10 && (
        <NavLink
          className={cn(
            styles['deal-text'],
            y < 10 && width < 1280 ? 'top-[calc(22.5px+38px)]' : 'top-[22.5px]'
          )}
          to={LANDING_DATA.dealText.link}
        >
          {LANDING_DATA.dealText.text}
        </NavLink>
      )}
      <section className={styles['header-section']}>
        <video
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          poster={LANDING_DATA.banner.poster}
        >
          <source src={LANDING_DATA.banner.video} type="video/mp4" />
        </video>
        <div className={cn(styles['header-section-content'], 'container')}>
          <div>
            <h1>The Final Frontier for Beer</h1>
            <p>
              Non-alcoholic beer infused with functional mushrooms and
              mood-boosting botanicals to relax you without the need for
              alcohol.
            </p>
            <div className={styles['feature-items']}>
              <div>
                <img
                  src="/icons/Cloud_Unwind_Collider_Icons_RGB.png"
                  alt="Calming effect"
                />
                <p>CALMING EFFECT</p>
              </div>
              <div>
                <img src="/icons/icon-alcohol-free.png" alt="Alcohol free" />
                <p>ALCOHOL FREE</p>
              </div>
              <div>
                <img
                  src="/icons/Bolt_Collider_Icons_RGB.png"
                  alt="Real beer flavour"
                />
                <p>REAL BEER FLAVOUR</p>
              </div>
            </div>
            <div className={styles['header-section-content-footer']}>
              <NavLink to="/shop">
                <RoundedButton
                  variant="light-colorful"
                  className="flex items-center justify-center gap-3 !pr-3.5 !pl-4 tracking-wider"
                >
                  SHOP NOW
                  <ArrowRightIcon size={18} />
                </RoundedButton>
              </NavLink>
              <div className={styles['rating-box']}>
                <div className={styles['rating-box-stars']}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <p>4.8/5 FROM 200+ REVIEWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="container h-[200vh]"></main>
    </>
  )
}

export default App
