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
              <p className="text-accent-1 font-roboto text-[24px] leading-[32px]">
                Email Template
              </p>
            </div>
            <Button
              className="border-primary-60 text-primary-60 hover:bg-primary-60 rounded-[12px] border-[1px] bg-neutral-10 px-[24px] py-[16px] font-inter tracking-[16px] hover:text-neutral-10"
              href="refresh"
            >
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
                <p className="text-[20px] font-bold leading-[28px] tracking-[0.5px]">
                  Refresh
                </p>
              </div>
            </Button>
          </div>
          <div className="border-outline mt-[45px] rounded-[4px] border-[1px] bg-neutral-10 px-[8px] pb-[4px] pt-[8px]">
            <Button
              className="border-primary-50 bg-primary-50 hover:text-primary-50 h-full w-full rounded-[2px] border-[1px] text-neutral-10 hover:bg-neutral-10"
              href="/email/add"
            >
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto block h-full py-[24.75px]"
              >
                <path
                  d="M81.25 46.75H46.75V81.25H35.25V46.75H0.75V35.25H35.25V0.75H46.75V35.25H81.25V46.75Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </div>
          <div className="my-[65px] flex flex-row flex-wrap items-center gap-[35px]">
            {dataEmail.map(({ image }) => {
              return (
                <>
                  <div className="border-outline h-full max-h-[341px] w-full max-w-[298px] rounded-[4px] border-[1px]">
                    <div className="border-outline-variant m-[8px] h-[297px] w-[282px] rounded-[4px] border-[1px]">
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
          </div>
        </Tablet>
      </main>
    </>
  )
}
