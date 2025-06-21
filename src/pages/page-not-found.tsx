import { RoundedButton } from '@components/button/rounded-button'
import { ArrowRightIcon } from 'lucide-react'
import { NavLink } from 'react-router'

export default function PageNotFound() {
  return (
    <main className="flex h-[60vh] w-full flex-col items-center justify-center gap-5">
      <h1 className="font-jogan-soft mb-5 text-9xl font-bold">404</h1>
      <p>I can't let you do that</p>
      <NavLink to="/">
        <RoundedButton
          variant="light-colorful"
          className="flex items-center justify-center gap-3 !pr-5 !pl-6 tracking-wider"
        >
          TAKE ME HOME
          <ArrowRightIcon size={18} />
        </RoundedButton>
      </NavLink>
    </main>
  )
}
