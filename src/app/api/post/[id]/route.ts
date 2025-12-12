import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface paramsType{
params:Promise<{
    id: string; 
}>;
}

export  async function GET(request:NextRequest , {params}:paramsType) {
    const {id} = await params
    return NextResponse.json({
        postId:id
    })
}


