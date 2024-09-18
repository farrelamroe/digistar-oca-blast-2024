import { Button } from '@/components'
import { useEffect, useRef, useState } from 'react'

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ])
  const [input, setInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)

  // Array of possible bot responses
  const botResponses = [
    'I can help with that!',
    'Let me think...',
    'What else would you like to know?',
    'That’s interesting!',
    'Can you clarify that for me?',
  ]

  // Function to randomly pick a bot response
  const getBotResponse = () => {
    const randomIndex = Math.floor(Math.random() * botResponses.length)
    return botResponses[randomIndex]
  }

  const handleSendMessage = () => {
    if (input.trim() === '') return

    // Add the user's message to the chat
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')

    setIsBotTyping(true)

    // Simulate AI bot response after 1 second
    setTimeout(() => {
      var botMessage = getBotResponse()
      if (input.trim() === 'Give me an example template email you recommend') {
        botMessage =
          'HUGE SALE! There is 9.9 time! Our Merchant start Flash Sale start in : 3hr 3m 3s START SHOP NOW (CTA)'
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: 'bot' },
      ])
      setIsBotTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevents default form submission
      handleSendMessage()
    }
  }

  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages])

  return (
    <div className="mx-auto flex h-screen w-full flex-col bg-gray-100 p-4">
      <div
        className="bg-neutral-10 mb-[16px] flex-grow overflow-y-auto rounded-[32px] p-[16px] text-[10px] leading-[14px] tracking-[0.02em] shadow"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-[16px] rounded-[32px] px-[16px] py-[10px] font-inter ${
              message.sender === 'user'
                ? 'bg-accent-1 text-primary-10 ml-auto w-fit'
                : 'text-accent-api-60 bg-accent-api-10 w-fit max-w-[263px]'
            }`}
          >
            {message.text}
          </div>
        ))}
        {isBotTyping && (
          <div className="text-accent-api-60 bg-accent-api-10 mb-[16px] w-fit rounded-[32px] px-[16px] py-[10px] font-inter">
            AI is typing...
          </div>
        )}
      </div>

      <div className="flex flex-row items-center gap-x-[10px]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tell us what us want to broadcast"
          className="placeholder-accent-api-50 border-accent-api-30 h-[34px] w-full rounded-[32px] border-[1px] px-[10px] py-[20px] font-inter text-[10px] leading-[14px] tracking-[0.02em] text-neutral-90 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-accent-1 h-[36px] w-[36px] items-center rounded-[32px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-[11.33px] mx-auto block"
          >
            <g clip-path="url(#clip0_153_1766)">
              <path
                d="M14.6668 1.3335L7.3335 8.66683"
                stroke="#FEF3F6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6668 1.3335L10.0002 14.6668L7.3335 8.66683L1.3335 6.00016L14.6668 1.3335Z"
                stroke="#FEF3F6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_153_1766">
                <rect width="16" height="16" fill="neutral-10" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}
