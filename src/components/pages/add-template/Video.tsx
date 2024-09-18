import { useState } from 'react'

export function Video() {
  const [settings, setSettings] = useState(1)

  return (
    <div className="ml-[27px] w-[50%] rounded-[8px] border-[1px] border-neutral-50 bg-neutral-10 px-[36px] pt-[16px]">
      <h1 className="text-center font-inter text-[24px] font-semibold leading-[32x] tracking-[0.02em]">
        Video
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
            {/* Thumbnail */}
            <p className="font-inter text-[14px] leading-[22px] tracking-[0.02em]">
              Thumbnail
            </p>
            <input
              type="text"
              placeholder="Google Drive"
              className="rounded-[4px] border-[1px] px-[13px] py-[14px] font-inter text-[14px] leading-[22px] tracking-[0.02em]"
            />
          </>
        )}
      </div>
    </div>
  )
}
