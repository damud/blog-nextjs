
import Link from "next/link";
import Image from "next/image";
import Author from "./Author";

const RelatedPosts = () => {
  return (
    <section className="pt-20">
        <h1 className="font-bold text-3xl py-10">Related Posts</h1>
        <div className="flex flex-col gap-10">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    </section>
  )
}

const Post = () => {
  return (
    <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
            <Link href="/">
                <Image src={"/images/img1.jpg"} alt="" className="rounded" width={300} height={200}></Image>
            </Link>
        </div>
        <div className="info flex justify-center flex-col">
        <div className="category">
            <Link href="/" className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
            <Link href="/" className="text-gray-800 hover:text-gray-600">- 28/03/2023</Link>
        </div>
        <div className="title">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
        </div>
        <p className="text-gray-500 py-3">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
        <Author></Author>
      </div>
      
    </div>
  )
}

export default RelatedPosts
