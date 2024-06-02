import { NextResponse } from "next/server"

var posts = [
    {
        id: 1,
        title: "NextJS13 course",
        description: "A Detail Description",
        image: "nextjs.png"
    },
    {
        id: 2,
        title: "TypeScript course",
        description: "A Detail Description",
        image: "typecription.png"
    }
]

export const GET = () => {
    return NextResponse.json(posts)
}

export const POST = async (req) => {
    const body = await req.json()

    posts.push(body)

    return NextResponse.json({message:"Post Created..."})


}


export const DELETE=(req)=>{
    const id= new URL(req.url).searchParams.get("id")
    console.log("id",id);

    posts=posts.filter((post)=>{
        post.id!=id
    })

    return NextResponse.json({message:"post deleted..."})
}


export const PUT=async(req)=>{
   const body=await req.json();

   posts=posts.map((post)=>{
    if (post.id==body.id) {
        return body
    }
    else{
        return post
    }
   })

    return NextResponse.json({message:"Update successfully..."})
}
