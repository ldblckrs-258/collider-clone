import Logo from '@assets/logo.svg?react'
import { RoundedButton } from '@components/button/rounded-button'
import { useWindowScrollPosition } from '@hooks/use-window-scroll-position'
import { useWindowSize } from '@hooks/use-window-size'
import { LANDING_DATA } from '@statics/landing-data'
import { cn } from '@utils/cn'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
export default function Header() {
  const [isLanding, setIsLanding] = useState(false)
  const { width } = useWindowSize()
  const pathname = useLocation().pathname
  const { y } = useWindowScrollPosition()

  useEffect(() => {
    setIsLanding(pathname === '/')
  }, [pathname])

  return (
    <header className="relative">
      {LANDING_DATA?.announcement && y < 10 && (!isLanding || width < 1280) && (
        <a
          className="bg-foreground text-background block w-full text-center leading-[38px] font-medium tracking-wider uppercase"
          href={LANDING_DATA.announcement.link}
        >
          {LANDING_DATA.announcement.text}
        </a>
      )}
      <nav
        className={cn(
          'top-0 right-0 left-0 z-100 border-b py-4',
          y < 10 ? 'relative' : 'fixed',
          isLanding && y < 10
            ? 'border-b-transparent'
            : 'border-b-foreground bg-background'
        )}
      >
        <div className="container flex items-center justify-between">
          <div className="hidden items-center gap-3 xl:flex">
            <NavLink to="/products">
              <RoundedButton>SHOP NOW</RoundedButton>
            </NavLink>
            <NavLink to="/merch">
              <RoundedButton>MERCH</RoundedButton>
            </NavLink>
            <NavLink to="/discover">
              <RoundedButton>DISCOVER</RoundedButton>
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {LANDING_DATA?.dealButton && (
              <NavLink
                to={LANDING_DATA.dealButton.link}
                className="hidden xl:block"
              >
                <RoundedButton>{LANDING_DATA.dealButton.text}</RoundedButton>
              </NavLink>
            )}
            <NavLink to="/account" className="hidden xl:block">
              <RoundedButton>ACCOUNT</RoundedButton>
            </NavLink>
            <NavLink to="/cart">
              <RoundedButton>CART (0)</RoundedButton>
            </NavLink>
          </div>
        </div>
      </nav>
      <motion.div
        className="fixed left-1/2 z-[110] w-fit -translate-x-1/2 mix-blend-exclusion"
        initial={{ top: isLanding ? 16.5 + 21 : 16.5 + 38 }}
        animate={{
          top:
            y < 10
              ? isLanding && width > 1280
                ? 16.5 + 38 + 21
                : 16.5 + 38
              : 16.5
        }}
        transition={{ duration: isLanding && width > 1280 ? 0.3 : 0 }}
      >
        <NavLink to="/">
          <motion.div
            animate={
              width > 1280
                ? isLanding
                  ? { width: y < 10 ? '90vw' : 212 }
                  : { width: isLanding ? '90vw' : 212 }
                : { width: 212 }
            }
            transition={{ duration: 0.3 }}
          >
            <Logo className="text-foreground h-auto w-full fill-white" />
          </motion.div>
        </NavLink>
      </motion.div>
    </header>
  )
}
