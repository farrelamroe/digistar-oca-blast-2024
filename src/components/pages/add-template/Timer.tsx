import { useState } from 'react'

export function Timer() {
  const [settings, setSettings] = useState(1)
   const [color, setColor] = useState({
     color1: '#FFFFFF',
     color2: '#000000',
     color3: '#FF00FF',
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

   const handleColor3Change = (newColor: string) => {
     setColor((prevColor) => ({
       ...prevColor,
       color3: newColor,
     }))
   }

  return (
    <div className="ml-[27px] w-[50%] rounded-[8px] border-[1px] border-neutral-50 bg-neutral-10 px-[36px] pt-[16px]">
      <h1 className="text-center font-inter text-[24px] font-semibold leading-[32x] tracking-[0.02em]">
        Timer
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
            {/* Time Pick */}
            <div className="flex flex-row items-center justify-between">
              <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                Time Pick
              </p>
              <div className="flex w-fit flex-row items-center gap-x-[6px]">
                <div className="bg-fills-tertiary rounded-[6px] bg-opacity-[0.12] px-[11px] py-[6px]">
                  <h1 className="text-center font-inter text-[14px] leading-[22px] tracking-[0.02em] text-primary-50">
                    Sept 1, 2024
                  </h1>
                </div>
                <div className="bg-fills-tertiary rounded-[6px] bg-opacity-[0.12] px-[11px] py-[6px]">
                  <h1 className="text-center font-inter text-[14px] leading-[22px] tracking-[0.02em] text-primary-50">
                    9:41 AM
                  </h1>
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
            {/* Time Color */}
            <div className="flex flex-row items-center justify-between">
              <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                Time Color
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
            {/* Text Color */}
            <div className="flex flex-row items-center justify-between">
              <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
                Text Color
              </p>
              <div className="flex w-fit flex-row items-center gap-x-[10px] rounded-[4px] border-[1px] border-black px-[10px] py-[8px]">
                <div
                  className="h-[24px] w-[24px] rounded-[2px] border-[1px] border-black/50"
                  style={{ backgroundColor: color.color3 }}
                />
                <input
                  type="text"
                  value={color.color3}
                  onChange={(e) => handleColor3Change(e.target.value)}
                  className="max-w-[83px]"
                  maxLength={7}
                />
              </div>
            </div>
            <div className="border-t-[1px] border-accent-api-20" />
          </>
        )}
      </div>
    </div>
  )
}
