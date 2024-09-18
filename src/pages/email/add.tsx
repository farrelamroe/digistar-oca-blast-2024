import {
  Button,
  ButtonTemplate,
  dataAddTemplate,
  Divider,
  ImageTemplate,
  Settings,
  Text,
  Timer,
  Video,
} from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function AddTemplate() {
  const [redirect, setRedirect] = useState(0)
  return (
    <>
      <Head>
        <title>OCA Blast - Add Template</title>
      </Head>
      {/* Navbar */}
      <nav className="fixed top-0 z-10 h-[60px] w-full bg-neutral-10 pl-[17px] pr-[23px] shadow-navbar">
        <div className="flex flex-row items-center justify-between">
          <Image
            src="/logo-vertical.png"
            alt="Foto Logo"
            height={1000}
            width={1000}
            className="mb-[13px] mt-[13px] h-[33px] w-[74px]"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5229 22 12C22 6.47718 17.5228 2.00003 12 2.00003C6.47715 2.00003 2 6.47718 2 12C2 17.5229 6.47715 22 12 22Z"
              stroke="#5E6C84"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8.00003L8 12L12 16"
              stroke="#5E6C84"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 12H8"
              stroke="#5E6C84"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="font-inter text-[12px] font-bold leading-[22px] tracking-[0.02em]">
            Template Name
          </p>
          <div className="flex flex-row items-center gap-x-[16px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="#5E6C84"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 19L5 12L12 5.00003"
                stroke="#5E6C84"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="#5E6C84"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.00003L19 12L12 19"
                stroke="#5E6C84"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center gap-x-[33px]">
            <div className="flex flex-row items-center gap-x-[4px]">
              <Button className="rounded-[6px] border-[1px] border-primary-60 bg-neutral-10 px-[12px] py-[5px] text-primary-60 hover:bg-primary-60 hover:text-neutral-10">
                <div className="flex flex-row items-center gap-x-[8px]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_102_552)">
                      <path
                        d="M6 1.00003L7.545 4.13003L11 4.63503L8.5 7.07003L9.09 10.51L6 8.88503L2.91 10.51L3.5 7.07003L1 4.63503L4.455 4.13003L6 1.00003Z"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_552">
                        <rect width="12" height="12" fill="neutral-10" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-inter text-[12px] font-bold leading-[22px] tracking-[0.02em]">
                    Preview
                  </p>
                </div>
              </Button>
              <Button className="rounded-[6px] border-[1px] border-primary-60 bg-primary-60 px-[12px] py-[5px] text-neutral-10 hover:bg-neutral-10 hover:text-primary-60">
                <div className="flex flex-row items-center gap-x-[8px]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_102_552)">
                      <path
                        d="M6 1.00003L7.545 4.13003L11 4.63503L8.5 7.07003L9.09 10.51L6 8.88503L2.91 10.51L3.5 7.07003L1 4.63503L4.455 4.13003L6 1.00003Z"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_552">
                        <rect width="12" height="12" fill="neutral-10" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-inter text-[12px] font-bold leading-[22px] tracking-[0.02em]">
                    Save
                  </p>
                </div>
              </Button>
            </div>
            <div className="h-[35px] w-[35px] overflow-hidden rounded-full border-[1px] border-primary-60">
              <Image
                src="/foto-profil.webp"
                alt="Foto"
                height={1000}
                width={1000}
                className="relative object-cover object-center"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Content for add template */}
      <div className="flex h-[100vh] flex-row bg-neutral-30 pb-[14px] pl-[10px] pr-[8px] pt-[76px]">
        {/* Button */}
        <div className="flex h-[80vh] w-[38px] flex-col items-center">
          <div className="mb-[15px] rounded-[4px] border-[1px] border-accent-api-50 bg-neutral-10 p-[4px] text-center text-accent-api-50 duration-300 hover:cursor-pointer hover:border-accent-ai-50 hover:text-accent-ai-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto block"
            >
              <path
                d="M10.0001 1.66669L12.5751 6.88335L18.3334 7.72502L14.1667 11.7834L15.1501 17.5167L10.0001 14.8084L4.85008 17.5167L5.83341 11.7834L1.66675 7.72502L7.42508 6.88335L10.0001 1.66669Z"
                stroke="currentColor"
                stroke-width="2.08"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-regular font-inter text-[8px] leading-[12px] tracking-[0.02em]">
              Layout
            </p>
          </div>
          {dataAddTemplate.map(({ id, name }) => {
            return (
              <>
                <div className="mb-[3px] flex flex-col items-center justify-center">
                  <button
                    className={`w-[38px] rounded-[4px] border-[1px] bg-neutral-10 p-[4px] text-center duration-300 hover:cursor-pointer hover:border-accent-ai-50 hover:text-accent-ai-50 ${redirect == id ? 'border-accent-ai-50 text-accent-ai-50' : 'border-accent-api-50 text-accent-api-50'}`}
                    onClick={() => setRedirect(id)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto block"
                    >
                      <path
                        d="M10.0001 1.66669L12.5751 6.88335L18.3334 7.72502L14.1667 11.7834L15.1501 17.5167L10.0001 14.8084L4.85008 17.5167L5.83341 11.7834L1.66675 7.72502L7.42508 6.88335L10.0001 1.66669Z"
                        stroke="currentColor"
                        stroke-width="2.08"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="font-regular font-inter text-[8px] leading-[12px] tracking-[0.02em]">
                      {name}
                    </p>
                  </button>
                </div>
              </>
            )
          })}
          <Button
            className="mt-[169px] w-[38px] rounded-[4px] border-[1px] border-accent-api-50 bg-neutral-10 p-[4px] text-center text-accent-api-50 duration-300 hover:cursor-pointer hover:border-accent-ai-50 hover:text-accent-ai-50"
            href="/chatai"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto block"
            >
              <path
                d="M10.0001 1.66669L12.5751 6.88335L18.3334 7.72502L14.1667 11.7834L15.1501 17.5167L10.0001 14.8084L4.85008 17.5167L5.83341 11.7834L1.66675 7.72502L7.42508 6.88335L10.0001 1.66669Z"
                stroke="currentColor"
                stroke-width="2.08"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-regular font-inter text-[8px] leading-[12px] tracking-[0.02em]">
              ChatAI
            </p>
          </Button>
        </div>
        {/* Space for making template */}
        <div className="ml-[13px] h-full w-full rounded-[8px] border-[1px] border-neutral-50 pt-[16px]">
          <div className="mx-auto block w-full max-w-[499px] bg-neutral-10 p-[10px]">
            <div className="rounded-[4px] border-[1px] border-dashed border-primary-60 bg-primary-20">
              <p className="py-[25px] text-center font-inter text-[12px] leading-[18px] tracking-[0.02em] text-primary-60">
                Drag & Drop Content
              </p>
            </div>
          </div>
          <Button
            className="mx-auto mt-[16px] block w-fit rounded-[4px] border-[1px] border-accent-api-50 bg-neutral-10 p-[8px]"
            href="refresh"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_29_5146)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19V13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11H13V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5V11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H11V19Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_29_5146">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        {/* Space for styling template */}
        {redirect == 0 && <Text />}
        {redirect == 1 && <Settings />}
        {redirect == 2 && <ImageTemplate />}
        {redirect == 3 && <Video />}
        {redirect == 4 && <ButtonTemplate />}
        {redirect == 5 && <Timer />}
        {redirect == 6 && <Divider />}
      </div>
    </>
  )
}
