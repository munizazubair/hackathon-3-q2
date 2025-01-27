import sanityClient from "@/sanity/sanity.client"

export async function getPosts() {
  const data = await sanityClient.fetch('*[_type == "post"]');
  return data;
}
