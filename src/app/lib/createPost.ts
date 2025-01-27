// lib/createPost.js
import sanityClient from "@/sanity/sanity.client"

export async function createPost(newPost:any) {
  const result = await sanityClient.create({
    _type: 'post', // Sanity schema type
    title: newPost.title,
    body: newPost.body,
    author: newPost.author,
  });
  return result;
}
