import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex justify-center gap-6">
          <Link href="/"><ImFacebook color="#888"/></Link>
          <Link href="/"><ImTwitter color="#888"/></Link>
          <Link href="/"><ImYoutube color="#888" /></Link>
          </div>
          <p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
              <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </div>
  )
}

export default Footer