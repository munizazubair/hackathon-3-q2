// lib/updatePost.js
import sanityClient from "@/sanity/sanity.client"

export async function updatePost(postId:any, updatedData:any) {
  const result = await sanityClient.patch(postId)
    .set(updatedData) // Fields to update
    .commit(); // Commit changes
  return result;
}
