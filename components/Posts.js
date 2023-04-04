
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image"; 
import Author from "./_child/Author";
import fetcher from "@/library/fetcher";
import Loader from "./_child/Loader";
import Error from "./_child/Error";

const Posts = () => {
  
  const { data, isLoading, isError } = fetcher('api/popular');
  
  if(isLoading) return <Loader />
  if(isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
    <Swiper
       slidesPerView={2}
    >
        {
          data.map((value, index)=> (
            <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
          ))
        }
    </Swiper>
    </section>
  )
}

const Post = ({data}) => {
  const {id, title, category, img, published, description, author} = data;
    return (
      <div className="item">
        <div className="images">
        <Link href="/"><Image src={img} width={400} height={400} alt="" /></Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
          <div className="category">
              <Link href="/" className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
              <Link href="/" className="text-gray-800 hover:text-gray-600">- {published || "28/03/2023"}</Link>
          </div>
          <div className="title">
              <Link href="/" className="text-3xl md:tezt-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</Link>
          </div>
          <p className="text-gray-500 py-3">
          {description || "No Description"}
          </p>
          {author?<Author></Author>:<></>}
        </div>
      </div>
    )
  }

export default Posts