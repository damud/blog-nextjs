import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
    
  )
}



const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href=""><Image src="/images/img1.jpg" width={600} height={600} alt="" /></Link>
      </div>
      <div className="info"></div>
      <div className="category">
        <Link href="/" className="text-orange-600 hover:text-orange-400">Business, Travel</Link>
        <Link href="/" className="text-gray-800 hover:text-gray-600">- 28/03/2023</Link>
      </div>
    </div>
  )
}

export default Hero