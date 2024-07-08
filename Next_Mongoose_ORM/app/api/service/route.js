import { NextResponse } from "next/server";

export const GET = () => {
    console.log("Get call");
    let services = {
        title: "A service",
        description: "A service description",
        image: "url"
    }
    return NextResponse.json(services)
}

export const POST = async(req) => {
    const body= await req.json()
    console.log("body",body);
    return NextResponse.json({ message: "Post method call" })
}


export const DELETE = () => {
    return NextResponse.json({ message: "Delete method call" })
}


export const PUT = () => {
    return NextResponse.json({ message: "PUT method call" })
}