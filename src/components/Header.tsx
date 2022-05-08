import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { ActiveLink } from './ActiveLink'

export const Header = () => {
  return (
    <header className="flex flex-col items-center h-20">
      <Link href="/">
        <Image
          width={500}
          height={500}
          src="/star.svg"
          alt="Star Wars"
          className="cursor-pointer"
        />
      </Link>

      <Menu as="nav" className="relative flex items-center text-left z-10">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className="inline-flex w-full justify-center rounded-md
              bg-primary text-black px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Menu
                <HiChevronDown
                  className="ml-2 -mr-1 h-5 w-5 text-black hover:text-black"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={open}
            >
              <Menu.Items className="absolute left-2 top-5 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-2">
                  <Menu.Item>
                    <ActiveLink href="/" shouldMatchExactHref passHref>
                      <a className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                        Characters
                      </a>
                    </ActiveLink>
                  </Menu.Item>
                </div>

                <div className="p-2">
                  <Menu.Item>
                    <ActiveLink href="/planets" shouldMatchExactHref passHref>
                      <a className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                        Planets
                      </a>
                    </ActiveLink>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </header>
  )
}
