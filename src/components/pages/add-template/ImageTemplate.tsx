import { useState } from 'react'

export function ImageTemplate() {
  const [settings, setSettings] = useState(1)

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
        Image
      </h1>
      <div className="mt-[46px] flex flex-col gap-y-[16px]">
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
            {/* Image Link */}
              <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                Image link
              </p>
              <input
                type="text"
                placeholder="Google Drive"
                className="rounded-[4px] border-[1px] px-[13px] py-[14px] font-inter text-[14px] leading-[22px] tracking-[0.02em]"
              />
          </>
        ) : (
          <>
              {/* Border */}
              <div className="flex flex-row items-center justify-between">
                <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                  Border
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
