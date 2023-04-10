
import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import fetcher from "@/library/fetcher";
import Loader from "./Loader";
import Error from "./Error";

const RelatedPosts = () => {

  const { data, isLoading, isError } = fetcher("api/posts");
  
  if(isLoading) return <Loader />
  if(isError) return <Error />
  
    return (
      <section className="pt-20">
           <h1 className="font-bold text-3xl py-10">Related</h1>

           <div className="flex flex-col gap-10">
              {
                  data.map((value, index) => (
                      <Post key={index} data={value}></Post>
                  ))
              }
           </div>
      </section>
  )
}

const Post = ({data}) => {
  const {id, title, subtitle, category, img, published, author} = data;
  return (
    <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
            <Link href={`/posts/${id}`}>
                <Image src={img || ""} alt="" className="rounded" width={300} height={200}></Image>
            </Link>
        </div>
        <div className="info flex justify-center flex-col">
        <div className="category">
            <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "No category"}</Link>
            <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">- {published ||""} </Link>
        </div>
        <div className="title">
            <Link href={`/posts/${id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No title"}</Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle || "No title"}
        </p>
        {author?<Author {...author}></Author>:<></>}
      </div>
      
    </div>
  )
}

export default RelatedPosts
