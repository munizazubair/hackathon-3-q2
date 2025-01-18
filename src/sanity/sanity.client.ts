import { createClient , type ClientConfig } from "next-sanity";

 const sanityClient: ClientConfig = {
    projectId: "zdbi0t6c",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: false
 }
 export default createClient(sanityClient);