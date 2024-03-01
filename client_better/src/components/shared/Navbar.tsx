import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

import { navLinks } from '@/constants'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex h-7 justify-center items-center space-x-4 text-xl">
      {navLinks.map((link, index) => {
        if (link.name === 'Home') {
          return (
            <Fragment key={index}>
              <Link to={link.to!}>
                <p>{link.name}</p>
              </Link>
              {index !== navLinks.length - 1 && (
                <Separator orientation="vertical" />
              )}
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

            {index !== navLinks.length - 1 && (
              <Separator orientation="vertical" />
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
