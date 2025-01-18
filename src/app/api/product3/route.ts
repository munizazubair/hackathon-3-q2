import { Product_Data3 } from "@/app/api/product3/data";

export async function GET() {
    return new Response(JSON.stringify(Product_Data3));
}
