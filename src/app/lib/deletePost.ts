// lib/deletePost.js
import sanityClient from "@/sanity/sanity.client"

export async function deletePost(postId:any) {
  const result = await sanityClient.delete(postId);
  return result;
}
