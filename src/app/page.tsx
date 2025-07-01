import Image from 'next/image'
import chinaNight from './images/china_night.jpg'

export default function Home() {
  return (
    <div className="items-center sm:items-start justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-7">
      <Image 
      src = {chinaNight}
      width = {0}
      height = {0}
      sizes="100vw"
      style={{ width: '50%', height: 'auto' }}
      alt = "Picture of some chinese city at night with cyberpunk vibe"
      ></Image>
      
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-4">
              {
              `I attended the University of Michigan from 2020 to 2024 and graduated with a degree in CS and a minor in math. 
                I am particularly interested in information security, software engineering, and game development. 
                I made this page to keep a log of certain thoughts as well as for any write ups I want to do in the future.`
              }
          </p>
        </ol>

      </main>
    </div>
  );
}

