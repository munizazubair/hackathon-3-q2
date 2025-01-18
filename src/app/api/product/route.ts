import {Product_Data} from "./data"

export async function GET() {
    return new Response(JSON.stringify(Product_Data));
}
