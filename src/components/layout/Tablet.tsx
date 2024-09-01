import { useState } from 'react'
import Image from 'next/image'
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
          className={`bg-grey-100 border-grey-200 no-scrollbar fixed top-0 z-0 h-full w-full overflow-y-scroll border-r-[2px] py-[85.5px] pl-[9px] pr-[17px] duration-300 ${large ? 'max-w-[250px]' : 'max-w-[64px]'}`}
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
            {dataTabletHome.map(({ icon, name, href }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`font-roboto flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] duration-300 hover:font-bold ${large ? 'hover:bg-grey-200 max-w-[250px] pl-[19px] pr-[10px]' : 'max-w-[64px] px-[17px] hover:bg-red-100'}`}
                  >
                    <Image
                      src={icon}
                      alt="icon Tablet"
                      width={30}
                      height={30}
                      className="h-full w-full max-w-[30px] hover:fill-red-100"
                    />
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px]`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-grey-300 my-[20px] w-full border-[1px]" />
            {dataTabletValidation.map(({ icon, name, href }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`font-roboto flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] duration-300 hover:font-bold ${large ? 'hover:bg-grey-200 max-w-[250px] pl-[19px] pr-[10px]' : 'max-w-[64px] px-[17px] hover:bg-red-100'}`}
                  >
                    <Image
                      src={icon}
                      alt="icon Tablet"
                      width={30}
                      height={30}
                      className="h-full w-full max-w-[30px] hover:fill-red-100"
                    />
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px]`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-grey-300 my-[20px] w-full border-[1px]" />
            {dataTabletContacts.map(({ icon, name, href }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`font-roboto flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] duration-300 hover:font-bold ${large ? 'hover:bg-grey-200 max-w-[250px] pl-[19px] pr-[10px]' : 'max-w-[64px] px-[17px] hover:bg-red-100'}`}
                  >
                    <Image
                      src={icon}
                      alt="icon Tablet"
                      width={30}
                      height={30}
                      className="h-full w-full max-w-[30px] hover:fill-red-100"
                    />
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px]`}
                    >
                      {name}
                    </p>
                  </div>
                </Link>
              )
            })}
            <div className="border-grey-300 my-[20px] w-full border-[1px]" />
            {dataTabletManagement.map(({ icon, name, href }) => {
              return (
                <Link href={href} key={icon + name}>
                  <div
                    className={`font-roboto flex h-full w-full flex-row items-center gap-[15px] rounded-[4px] py-[7.5px] duration-300 hover:font-bold ${large ? 'hover:bg-grey-200 max-w-[250px] pl-[19px] pr-[10px]' : 'max-w-[64px] px-[17px] hover:bg-red-100'}`}
                  >
                    <Image
                      src={icon}
                      alt="icon Tablet"
                      width={30}
                      height={30}
                      className="h-full w-full max-w-[30px] hover:fill-red-100"
                    />
                    <p
                      className={`w-[150px] overflow-hidden whitespace-nowrap text-[16px] leading-[24px] tracking-[0.5px]`}
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
