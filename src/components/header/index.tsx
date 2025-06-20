import Logo from '@assets/logo.svg?react'
import { RoundedButton } from '@components/button/rounded-button'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(function () {
    function handleScroll() {
      setIsAtTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll)
    return function () {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="relative">
      {isAtTop && (
        <a
          className="bg-foreground text-background block w-full text-center leading-[38px] font-medium tracking-wider uppercase"
          href="/announcement"
        >
          EXTRA 10% OFF WITH CODE LIFTOFF10
        </a>
      )}
      <nav
        className={`border-b-foreground top-0 right-0 left-0 border-b py-4 ${
          isAtTop ? 'relative' : 'fixed'
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            <NavLink to="/deal">
              <RoundedButton>GIVE 15%, GET 15%</RoundedButton>
            </NavLink>
            <NavLink to="/account">
              <RoundedButton>ACCOUNT</RoundedButton>
            </NavLink>
            <NavLink to="/cart">
              <RoundedButton>CART (0)</RoundedButton>
            </NavLink>
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-1/2 z-[110] w-fit -translate-x-1/2 mix-blend-exclusion ${
          isAtTop ? 'top-[calc(16.5px+38px)]' : 'top-[16.5px]'
        }`}
      >
        <NavLink to="/">
          <Logo className="text-foreground h-[34px] fill-white" />
        </NavLink>
      </div>
    </header>
  )
}
