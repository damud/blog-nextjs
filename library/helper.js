// endpoint: http://localhost:3000/api/posts

const baseURL="http://localhost:3000/api/posts";

export default async function getPost(id) {
    const response = await fetch(`${baseURL}`)
    const posts = await response.json();
    if(id) {
        return posts.find(value => value.id == id)
    }
    return posts;
}