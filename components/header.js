import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const header = () => {
  return (
    <header className='bg-gray-50'>
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row justify-between text-center py-3">
      <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm: py-0">
        <input type="text" className="input-text" placeholder="Search..." />
      </div>
      <div className="shrink w-80 sm:order-2">
        <Link legacyBehavior href="/">
        <a className="font-bold uppercase text-3xl">Design</a>
        </Link>
      </div>
      <div className="w-96 order-3 flex justify-center">
        <div className="flex gap-6">
          <Link legacyBehavior href="/"><ImFacebook color="#888"/></Link>
          <Link legacyBehavior href="/"><ImTwitter color="#888"/></Link>
          <Link legacyBehavior href="/"><ImYoutube color="#888" /></Link>
        </div>
      </div>
      </div>
    </header>
  )
}

export default header
