import { Button, dataEmail, Navbar, Tablet } from '@/components'
import Head from 'next/head'
import Image from 'next/image'

export default function Email() {
  return (
    <>
      <Head>
        <title>OCA Blast - Email</title>
      </Head>
      <main>
        <Navbar />
        <Tablet>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-[33px]">
              <Image
                src="/post_add.png"
                alt="Icon post add"
                height={1000}
                width={1000}
                className="max-w-[68px]"
              />
              <p className="font-roboto text-[24px] leading-[32px] text-red-100">
                Email Template
              </p>
            </div>
            <div className="flex flex-row gap-x-[16px]">
              <Button color="blue-100" className="rounded-[4px]" href="refresh">
                <div className="flex flex-row items-center gap-x-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M17.6449 6.35C16.1949 4.9 14.2049 4 11.9949 4C7.57488 4 4.00488 7.58 4.00488 12C4.00488 16.42 7.57488 20 11.9949 20C15.7249 20 18.8349 17.45 19.7249 14H17.6449C16.8249 16.33 14.6049 18 11.9949 18C8.68488 18 5.99488 15.31 5.99488 12C5.99488 8.69 8.68488 6 11.9949 6C13.6549 6 15.1349 6.69 16.2149 7.78L12.9949 11H19.9949V4L17.6449 6.35Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-[16px] leading-[24px] tracking-[0.5px]">
                    Refresh
                  </p>
                </div>
              </Button>
              <Button color="red-200" className="rounded-[4px]">
                <div className="flex flex-row items-center gap-x-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="text-[16px] leading-[24px] tracking-[0.5px]">
                    Add Email Template
                  </p>
                </div>
              </Button>
            </div>
          </div>
          <div className="my-[33px] flex flex-row flex-wrap items-center gap-[35px]">
            {dataEmail.map(({ image }) => {
              return (
                <>
                  <div className="h-full max-h-[341px] w-full max-w-[298px] rounded-[4px] border-[1px] border-grey-400">
                    <div className="m-[8px] h-[297px] w-[282px] rounded-[4px] border-[1px] border-grey-300">
                      <Image
                        src={image}
                        alt="Foto"
                        height={1000}
                        width={1000}
                      />
                    </div>
                    <p className="pb-[8px] text-center text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                      Email Template Name
                    </p>
                  </div>
                </>
              )
            })}

            <div className="h-[341px] w-[298px] rounded-[4px] border-[1px] border-grey-400">
              <div className="m-[8px] h-[325px] w-[282px] rounded-[4px] border-[1px] border-grey-300">
                <svg
                  width="138"
                  height="138"
                  viewBox="0 0 138 138"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto block h-full"
                >
                  <path
                    d="M109.25 74.75H74.75V109.25H63.25V74.75H28.75V63.25H63.25V28.75H74.75V63.25H109.25V74.75Z"
                    fill="#DED8E1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Tablet>
      </main>
    </>
  )
}
