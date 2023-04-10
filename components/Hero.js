import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"
import Loader from "./_child/Loader";
import Error from "./_child/Error";
import fetcher from "@/library/fetcher";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

const Hero = () => {
  const {data, isLoading, isError} = fetcher("api/trending");

  if(isLoading) return <Loader />
  if(isError) return <Error />

  SwiperCore.use([Autoplay])
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
  }

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
      <Swiper
       breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        }
       }}
      >
      {data.map((value, index) => (
        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
      ))}    
    </Swiper>
      </div>
    </section>
    
  )
}

const Slide = ({data}) => {
  const {id, title, category, img, published, description, author} = data;
  return (
    <div className="grid md:grid-cols-2">
    <div className="image">
        <Link href={`/posts/${id}`}><Image src={img || "/"} width={600} height={600} alt="" /></Link>
    </div>
    <div className="info flex justify-center flex-col">
        <div className="category">
            <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
            <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</Link>
        </div>
        <div className="title">
            <Link href={`/posts/${id}`} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</Link>
        </div>
        <p className="text-gray-500 py-3">
            {description || "Description"}
        </p>
        {author?<Author {...author}></Author>:<></>}
    </div>
</div>
  )
}

export default Hero