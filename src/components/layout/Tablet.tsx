import { useState } from 'react'
import Link from 'next/link'
import {
  dataTabletContacts,
  dataTabletHome,
  dataTabletManagement,
  dataTabletValidation,
} from '@/components'

export function Tablet(props: any) {
  const { children } = props
  const [large, setLarge] = useState(false)
  const toggle = () => {
    setLarge((prev) => !prev)
  }

  return (
    <>
      <div className="flex flex-row">
        <main
          className={`no-scrollbar fixed top-0 z-0 h-full w-full overflow-y-scroll border-r-[2px] border-grey-200 bg-grey-100 py-[85.5px] pl-[9px] pr-[17px] duration-300 ${large ? 'max-w-[250px]' : 'max-w-[64px] pr-2'}`}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
            className={`mb-[14.5px] h-[15px] w-[9.25px] duration-300 ${!large ? 'mx-auto block rotate-180' : 'ml-auto block'} `}
          >
            <path
              d="M7.5 15.5L0 8L7.5 0.5L9.25 2.25L3.5 8L9.25 13.75L7.5 15.5Z"
              fill="#EC2164"
            />
          </svg>

          <div className="flex w-full flex-col items-center gap-[7px]">
            {dataTabletHome.map(({ icon, name, href, path }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`group flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] font-roboto duration-300 hover:font-bold ${large ? 'max-w-[250px] pl-[19px] pr-[9px] hover:bg-grey-200 focus:bg-grey-200 focus:font-bold' : 'max-w-[64px] px-[17px] hover:bg-accent-1 focus:bg-accent-1'}`}
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`duration-300 ${large ? 'group-hover:text-primary-60 group-focus:text-primary-60' : 'group-hover:text-neutral-10 group-focus:text-neutral-10'} `}
                    >
                      {path}
                    </svg>
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px] text-schemes-on-surface ${large ? 'block' : 'hidden'}`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-outline-variant my-[20px] w-full border-[1px]" />
            {dataTabletValidation.map(({ icon, name, href, path }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`group flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] font-roboto duration-300 hover:font-bold ${large ? 'max-w-[250px] pl-[19px] pr-[9px] hover:bg-grey-200' : 'max-w-[64px] px-[17px] hover:bg-accent-1'}`}
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`duration-300 ${large ? 'group-hover:text-red-500' : 'group-hover:text-neutral-10'} `}
                    >
                      {path}
                    </svg>
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px] ${large ? 'block' : 'hidden'}`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-outline-variant my-[20px] w-full border-[1px]" />
            {dataTabletContacts.map(({ icon, name, href, path }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`group flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] font-roboto duration-300 hover:font-bold ${large ? 'max-w-[250px] pl-[19px] pr-[9px] hover:bg-grey-200' : 'max-w-[64px] px-[17px] hover:bg-accent-1'}`}
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`duration-300 ${large ? 'group-hover:text-red-500' : 'group-hover:text-neutral-10'} `}
                    >
                      {path}
                    </svg>
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px] ${large ? 'block' : 'hidden'}`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-outline-variant my-[20px] w-full border-[1px]" />
            {dataTabletManagement.map(({ icon, name, href, path }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`group flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] font-roboto duration-300 hover:font-bold ${large ? 'max-w-[250px] pl-[19px] pr-[9px] hover:bg-grey-200' : 'max-w-[64px] px-[17px] hover:bg-accent-1'}`}
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`duration-300 ${large ? 'group-hover:text-red-500' : 'group-hover:text-neutral-10'} `}
                    >
                      {path}
                    </svg>
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px] ${large ? 'block' : 'hidden'}`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </main>
        <div
          className={`mr-[78px] mt-[97px] w-full duration-300 ${large ? 'ml-[302px]' : 'ml-[116px]'}`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
