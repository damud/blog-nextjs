import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

const CategoryPost = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Business</h1>
                <div className="flex flex-col gap-6">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                </div>
            </div>
            
        </div>
    </section>
  )
}

const Post = () => {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
              <Link href="/"><Image src="/images/img1.jpg" className="rounded" width={300} height={250} alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col">
            <div className="category">
              <Link href="/" className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
              <Link href="/" className="text-gray-800 hover:text-gray-600">- 28/03/2023</Link>
          </div>
          <div className="title">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
          </div>
          <Author></Author>
     </div>

        </div>
    )
}

export default CategoryPost