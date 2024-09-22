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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_624_2898)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM15.2929 5.29289C15.4804 5.10536 15.7348 5 16 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H16C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V6C15 5.73478 15.1054 5.48043 15.2929 5.29289ZM16 3C15.2044 3 14.4413 3.31607 13.8787 3.87868C13.3161 4.44129 13 5.20435 13 6V18C13 18.7957 13.3161 19.5587 13.8787 20.1213C14.4413 20.6839 15.2043 21 16 21H18C18.7957 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7957 21 18V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3H16Z"
                  fill="#6B778C"
                />
              </g>
              <defs>
                <clipPath id="clip0_624_2898">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="font-regular font-inter text-[8px] leading-[12px] tracking-[0.02em]">
              Layout
            </p>
          </div>
          {dataAddTemplate.map(({ id, name, svg }) => {
            return (
              <>
                <div className="mb-[3px] flex flex-col items-center justify-center">
                  <button
                    className={`w-[38px] rounded-[4px] border-[1px] bg-neutral-10 p-[4px] text-center duration-300 hover:cursor-pointer hover:border-accent-ai-50 hover:text-accent-ai-50 ${redirect == id ? 'border-accent-ai-50 text-accent-ai-50' : 'border-accent-api-50 text-accent-api-50'}`}
                    onClick={() => setRedirect(id)}
                  >
                    {svg}
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
              className="block mx-auto"
            >
              <path
                d="M16.6665 1.66669H3.33317C2.4165 1.66669 1.6665 2.41669 1.6665 3.33335V18.3334L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3334V3.33335C18.3332 2.41669 17.5832 1.66669 16.6665 1.66669ZM16.6665 13.3334H4.99984L3.33317 15V3.33335H16.6665V13.3334Z"
                fill="currentColor"
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
