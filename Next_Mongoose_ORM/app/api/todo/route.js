import { NextResponse } from "next/server"

export const GET=()=>{
    return NextResponse.json({message:"Get method call api/todo"})
}

export const POST=(req)=>{
    const title= new URL(req.url).searchParams.get("title")
    return NextResponse.json({message:"Post method call api/todo",data:title})
}