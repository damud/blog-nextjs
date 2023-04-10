import Layout from "@/layout/Layout";
import Author from "@/components/_child/Author";
import Image from "next/image";
import RelatedPosts from "@/components/_child/RelatedPosts";
import getPost from "@/library/helper";
import fetcher from "@/library/fetcher";
import Loader from "@/components/_child/Loader";
import Error from "@/components/_child/Error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const Post = ({fallback}) => {
    const router = useRouter()
    const {postId} = router.query;
    const {data, isLoading, isError} = fetcher(`api/posts/${postId}`);
    if(isLoading) return <Loader />
    if(isError) return <Error />
    return (
        <SWRConfig value={{fallback}}>
        <Article {...data} />
        </SWRConfig>
    )
}

const Article = ({title, img, subtitle, description, author}) => {
  return (
    <Layout> 
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                {author?<Author></Author>:<></>}
            </div>
            <div className="post py-10">
            <h1 className='font-bold text-4xl text-center pb-5'>{title || "No title"}</h1>

<p className='text-gray-500 text-xl text-center'>{subtitle || "No subtitle"}</p>

<div className="py-10">
    <Image src={img || "/"} width={900} height={600} alt=""></Image>
</div>

<div className="content text-gray-600 text-lg flex flex-col gap-4">
    <p>
        {description || "No description"}
   </p>
   
</div>
            </div>
            <RelatedPosts></RelatedPosts>
        </section>

    </Layout>
  )
}
 
export async function getStaticProps({params}){
    const posts = await getPost(params.postId);
    return {
        props: {
            fallback: {
                "/api/posts":posts
            }
        }
    }
}

export async function getStaticPaths(){
    const posts = await getPost();

    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export default Post;