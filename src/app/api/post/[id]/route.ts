import { NextResponse } from "next/server";

interface paramsType{
params:{
    id:number
}
}

export function GET({params}:paramsType) {
    const {id} = params;
    return NextResponse.json({
        postId:id
    })
}