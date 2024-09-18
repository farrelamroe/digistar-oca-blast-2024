import { useState } from "react"

export function Divider(){
    const [settings, setSettings] = useState(1)

    const [color, setColor] = useState({
      color1: '#FFFFFF',
      color2: '#000000',
    })

    // Handler for updating the first color
    const handleColor1Change = (newColor: string) => {
      setColor((prevColor) => ({
        ...prevColor,
        color1: newColor,
      }))
    }

    // Handler for updating the second color
    const handleColor2Change = (newColor: string) => {
      setColor((prevColor) => ({
        ...prevColor,
        color2: newColor,
      }))
    }

    // Handler for dropdown
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Arial')

    const toggleDropdown = () => setIsOpen(!isOpen)
    const handleOptionClick = (option: any) => {
      setSelectedOption(option) // Update the selected option
      setIsOpen(false) // Close the dropdown
    }

    return (
      <div className="ml-[27px] w-[50%] rounded-[8px] border-[1px] border-neutral-50 bg-neutral-10 px-[36px] pt-[16px]">
        <h1 className="text-center font-inter text-[24px] font-semibold leading-[32x] tracking-[0.02em]">
          Divider
        </h1>
        <div className="mt-[46px] flex flex-col gap-y-[22px]">
          {/* Button */}
          <div className="flex flex-row rounded-[6px] bg-accent-api-20">
            <button
              className={`${settings && 'bg-neutral-10'} w-full rounded-[6px] border-[3px] border-accent-api-20 py-[10px] text-center duration-300 hover:bg-neutral-10`}
              onClick={() => setSettings(1)}
            >
              Settings
            </button>
            <button
              className={`${!settings && 'bg-neutral-10'} w-full rounded-[6px] border-[3px] border-accent-api-20 py-[10px] text-center duration-300 hover:bg-neutral-10`}
              onClick={() => setSettings(0)}
            >
              Styles
            </button>
          </div>
          {settings ? (
            <>
              {/* Paragraph Format */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Paragraph Format
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[8px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    P
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[4px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    H1
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[4px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    H2
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[4px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    H3
                  </h1>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Align */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Align
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 10.0001H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 6H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 14H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 18H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 10.0001H6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 6H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 14H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 18H6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10.0001H7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 6H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 14H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 18H7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10.0001H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 6H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 14H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 18H3"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Text Style */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Text Style
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 9.5C16.5 9.04037 16.4095 8.58525 16.2336 8.16061C16.0577 7.73597 15.7999 7.35013 15.4749 7.02513C15.1499 6.70012 14.764 6.44231 14.3394 6.26642C13.9148 6.09053 13.4596 6 13 6H8.5C8.23478 6 7.98043 6.10536 7.79289 6.29289C7.60536 6.48043 7.5 6.73478 7.5 7V17C7.5 17.2652 7.60536 17.5196 7.79289 17.7071C7.98043 17.8946 8.23478 18 8.5 18H13C13.6967 18.003 14.3783 17.7975 14.9572 17.4098C15.536 17.0221 15.9856 16.4701 16.2481 15.8247C16.5105 15.1794 16.5738 14.4703 16.4298 13.7886C16.2858 13.107 15.9411 12.4841 15.44 12C15.7743 11.6749 16.0403 11.2863 16.2223 10.857C16.4044 10.4277 16.4988 9.96631 16.5 9.5ZM13 16H9.5V13H13C13.3978 13 13.7794 13.158 14.0607 13.4393C14.342 13.7206 14.5 14.1022 14.5 14.5C14.5 14.8978 14.342 15.2794 14.0607 15.5607C13.7794 15.842 13.3978 16 13 16ZM13 11H9.5V8H13C13.3978 8 13.7794 8.15804 14.0607 8.43934C14.342 8.72064 14.5 9.10218 14.5 9.5C14.5 9.89782 14.342 10.2794 14.0607 10.5607C13.7794 10.842 13.3978 11 13 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 6H11C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7C10 7.26522 10.1054 7.51957 10.2929 7.70711C10.4804 7.89464 10.7348 8 11 8H12.52L9.32 16H7C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16H11.48L14.68 8H17C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.5C13.3261 15.5 14.5979 14.9732 15.5355 14.0355C16.4732 13.0979 17 11.8261 17 10.5V5.5C17 5.23478 16.8946 4.98043 16.7071 4.79289C16.5196 4.60536 16.2652 4.5 16 4.5C15.7348 4.5 15.4804 4.60536 15.2929 4.79289C15.1054 4.98043 15 5.23478 15 5.5V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V5.5C9 5.23478 8.89464 4.98043 8.70711 4.79289C8.51957 4.60536 8.26522 4.5 8 4.5C7.73478 4.5 7.48043 4.60536 7.29289 4.79289C7.10536 4.98043 7 5.23478 7 5.5V10.5C7 11.8261 7.52678 13.0979 8.46447 14.0355C9.40215 14.9732 10.6739 15.5 12 15.5ZM17 17.5H7C6.73478 17.5 6.48043 17.6054 6.29289 17.7929C6.10536 17.9804 6 18.2348 6 18.5C6 18.7652 6.10536 19.0196 6.29289 19.2071C6.48043 19.3946 6.73478 19.5 7 19.5H17C17.2652 19.5 17.5196 19.3946 17.7071 19.2071C17.8946 19.0196 18 18.7652 18 18.5C18 18.2348 17.8946 17.9804 17.7071 17.7929C17.5196 17.6054 17.2652 17.5 17 17.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8393 11.4574H13.1632C12.9623 11.4183 12.7513 11.3791 12.5283 11.34C12.2089 11.2832 12.0824 11.2598 11.9096 11.2265C10.879 11.0308 10.2583 10.8351 9.76406 10.5573C9.05893 10.1561 8.7154 9.61215 8.7154 8.89205C8.7154 8.16804 9.02076 7.56731 9.59933 7.15051C10.1699 6.73958 10.9815 6.52238 11.9458 6.52238C13.0467 6.52238 13.8964 6.80416 14.473 7.35989C14.7663 7.64166 14.9813 7.98801 15.1118 8.38916C15.1379 8.46938 15.1681 8.58483 15.1982 8.73746C15.2163 8.83139 15.3027 8.89792 15.3971 8.89792H16.8596C16.9721 8.89792 17.0625 8.80791 17.0625 8.70029V8.68072C17.0484 8.54766 17.0364 8.44395 17.0223 8.36763C16.8757 7.51643 16.4598 6.76894 15.823 6.20929C14.931 5.4168 13.6192 5 12.0321 5C10.5797 5 9.27187 5.35418 8.34978 5.996C7.83549 6.35605 7.43772 6.8022 7.17254 7.32075C6.90134 7.85104 6.76473 8.46351 6.76473 9.13861C6.76473 9.71586 6.87924 10.2051 7.11228 10.6355C7.27902 10.9428 7.50603 11.2128 7.79732 11.4574H3.16071C3.07232 11.4574 3 11.5278 3 11.6139V12.788C3 12.8741 3.07232 12.9446 3.16071 12.9446H11.8634C11.9056 12.9524 11.9417 12.9602 11.9819 12.968C12.6027 13.0894 12.9763 13.1715 13.3199 13.2655C13.7819 13.3927 14.1355 13.5257 14.4288 13.6862C15.148 14.0815 15.4996 14.6489 15.4996 15.4277C15.4996 16.1185 15.1882 16.7349 14.6237 17.1653C14.0109 17.633 13.1049 17.8776 12.002 17.8776C11.1241 17.8776 10.3808 17.7113 9.78817 17.3884C9.20357 17.0695 8.80179 16.6096 8.58884 16.0285C8.57277 15.9854 8.55469 15.9267 8.5346 15.8523C8.51049 15.7662 8.42812 15.7056 8.33973 15.7056H6.73862C6.62612 15.7056 6.53571 15.7956 6.53571 15.9032V15.9228C6.53973 15.9678 6.54375 16.005 6.54777 16.0343C6.67835 16.9892 7.15647 17.772 7.96808 18.359C8.91429 19.04 10.2462 19.4 11.8212 19.4C13.5127 19.4 14.931 19.0126 15.9234 18.2788C16.4257 17.9089 16.8114 17.453 17.0705 16.9286C17.3317 16.3983 17.4663 15.7956 17.4663 15.1381C17.4663 14.5159 17.3498 13.9954 17.1087 13.5453C16.9922 13.3261 16.8455 13.1246 16.6708 12.9426H20.8393C20.9277 12.9426 21 12.8722 21 12.7861V11.612C20.9995 11.5708 20.9823 11.5315 20.9522 11.5026C20.9221 11.4736 20.8816 11.4574 20.8393 11.4574Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Case */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Case
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[11.5px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    -
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[2.5px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    AA
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[6.5px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    aa
                  </h1>
                  <h1 className="rounded-[2px] border-[0.5px] border-accent-api-20 px-[5px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    Aa
                  </h1>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* List */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  List
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 6H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 18H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 6H3.01"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 12H3.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 18H3.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 6H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 18H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 6H3.01"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 12H3.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 18H3.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Insert */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Insert
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[4px]">
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9H9.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 9H15.01"
                        stroke="#5E6C84"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="rounded-[2px] border-[0.5px] border-accent-api-20 p-[2px] font-inter text-[20px] leading-[28px] tracking-[0.02em] duration-300 hover:bg-primary-20 hover:text-primary-60">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.0002 10.9999C13.5707 10.4258 13.0228 9.95074 12.3936 9.60698C11.7645 9.26322 11.0687 9.0588 10.3535 9.00759C9.63841 8.95637 8.92061 9.05955 8.24885 9.31014C7.5771 9.56072 6.96709 9.95285 6.4602 10.4599L3.4602 13.4599C2.54941 14.4029 2.04544 15.6659 2.05683 16.9769C2.06822 18.2879 2.59407 19.542 3.52111 20.469C4.44815 21.3961 5.70221 21.9219 7.01319 21.9333C8.32418 21.9447 9.58719 21.4407 10.5302 20.5299L12.2402 18.8199"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
            </>
          ) : (
            <>
              {/* Background Color */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Background Color
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[10px] rounded-[4px] border-[1px] border-black px-[10px] py-[8px]">
                  <div
                    className="h-[24px] w-[24px] rounded-[2px] border-[1px] border-black/50"
                    style={{ backgroundColor: color.color1 }}
                  />
                  <input
                    type="text"
                    value={color.color1}
                    onChange={(e) => handleColor1Change(e.target.value)}
                    className="max-w-[83px]"
                    maxLength={7}
                  />
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Text Color */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Text Color
                </p>
                <div className="flex w-fit flex-row items-center gap-x-[10px] rounded-[4px] border-[1px] border-black px-[10px] py-[8px]">
                  <div
                    className="h-[24px] w-[24px] rounded-[2px] border-[1px] border-black/50"
                    style={{ backgroundColor: color.color2 }}
                  />
                  <input
                    type="text"
                    value={color.color2}
                    onChange={(e) => handleColor2Change(e.target.value)}
                    className="max-w-[83px]"
                    maxLength={7}
                  />
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Font Family */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Font Family
                </p>
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-x-[10px] rounded-[4px] border-[1px] border-black px-[17.5px] py-[5px]"
                  >
                    <p className="w-[84px] text-start font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                      {selectedOption}
                    </p>
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${isOpen ? 'rotate-90' : ''} duration-300`}
                    >
                      <path
                        d="M15.5 18.75L9.25 12.5H21.75L15.5 18.75Z"
                        fill="#1D1B20"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 z-[100] mt-[8px] w-[200px] rounded-[4px] px-[8px] shadow-navbar duration-300">
                      <div
                        className="py-[8px]"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => handleOptionClick('Arial')}
                          className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                          role="menuitem"
                        >
                          Arial
                        </button>
                        <button
                          onClick={() => handleOptionClick('Poppins')}
                          className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                          role="menuitem"
                        >
                          Poppins
                        </button>
                        <button
                          onClick={() => handleOptionClick('Times New Roman')}
                          className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                          role="menuitem"
                        >
                          Times New Roman
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
              {/* Font Size */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Font Size
                </p>
                <div className="flex items-center rounded-[4px] border-[1px] border-black">
                  <input
                    type="text"
                    className="w-full max-w-[74px] rounded-l-[4px] border-gray-300 px-[17px] py-[9px] text-center focus:outline-none"
                    maxLength={5}
                  />
                  <div className="rounded-r-[4px] border-l-[1px] border-black bg-gray-100 px-[17px] py-[9px] text-gray-600">
                    Px
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-accent-api-20" />
            </>
          )}
        </div>
      </div>
    )
}