import {Product_Data2} from "./data"

export async function GET() {
    return new Response(JSON.stringify(Product_Data2));
}
