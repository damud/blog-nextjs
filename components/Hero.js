import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
      </div>
    </section>

  )
}



const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Image src="" width={600} height={600} />
      </div>
      <div className="info"></div>
    </div>
  )
}

export default Hero