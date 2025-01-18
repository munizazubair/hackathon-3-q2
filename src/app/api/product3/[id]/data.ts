import { NextResponse } from "next/server";

export async function GET(req:NextResponse , {params}: {params: Promise<{id:string}>}) {
    const data = await params;
    return NextResponse.json({id:data.id});
}