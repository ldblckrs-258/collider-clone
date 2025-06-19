import Logo from '@assets/logo.svg?react'
import { RoundedButton } from '@components/button/rounded-button'
import { NavLink } from 'react-router'
export default function Header() {
  return (
    <header className="relative">
      <nav className="border-b-foreground fixed top-0 right-0 left-0 border-b py-4">
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
      <div className="fixed top-[16.5px] left-1/2 z-[110] -translate-x-1/2 mix-blend-exclusion">
        <NavLink to="/">
          <Logo className="text-foreground h-[34px] fill-white" />
        </NavLink>
      </div>
    </header>
  )
}
