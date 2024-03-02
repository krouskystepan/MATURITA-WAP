import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

import { navLinks } from '@/constants'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="p-6 flex h-7 items-center justify-center space-x-8 text-xl">
      {navLinks.map((link, index) => {
        if (link.name === 'Home') {
          return (
            <Fragment key={index}>
              <Link to={link.to!}>
                <p>{link.name}</p>
              </Link>
            </Fragment>
          )
        }
        return (
          <Fragment key={index}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-center gap-1">
                {link.name}
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {link.links?.map((currentLink, index) => (
                    <Link key={index} to={currentLink.to}>
                      <DropdownMenuItem className="cursor-pointer">
                        <p>{currentLink.name}</p>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </Fragment>
        )
      })}
    </header>
  )
}
