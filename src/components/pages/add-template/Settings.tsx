import { useState } from 'react'

export function Settings() {
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
  const [selectedOption, setSelectedOption] = useState('None')

  const toggleDropdown = () => setIsOpen(!isOpen)
  const handleOptionClick = (option: any) => {
    setSelectedOption(option) // Update the selected option
    setIsOpen(false) // Close the dropdown
  }

  return (
    <div className="ml-[27px] w-[50%] rounded-[8px] border-[1px] border-neutral-50 bg-neutral-10 px-[36px] pt-[16px]">
      <h1 className="text-center font-inter text-[24px] font-semibold leading-[32x] tracking-[0.02em]">
        Settings
      </h1>
      <div className="mt-[46px] flex flex-col gap-y-[24px]">
        {/* Background */}
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
            Background
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
        {/* Email Background */}
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
            Email Background
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
        {/* Email Border */}
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
            Email Border
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
                    onClick={() => handleOptionClick('Option 1')}
                    className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                    role="menuitem"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => handleOptionClick('Option 2')}
                    className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                    role="menuitem"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => handleOptionClick('Option 3')}
                    className="block w-full rounded-[4px] px-4 py-2 text-left text-[14px] leading-[22px] tracking-[0.02em] text-gray-700 hover:bg-accent-1"
                    role="menuitem"
                  >
                    Option 3
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Padding Top */}
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
            Padding Top
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
        {/* Padding Bottom */}
        <div className="flex flex-row items-center justify-between">
          <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
            Padding Bottom
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
      </div>
    </div>
  )
}
