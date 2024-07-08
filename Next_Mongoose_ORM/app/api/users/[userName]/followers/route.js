import { NextResponse } from "next/server"

export const GET=(req, route)=>{
    console.log("route", route.params);
    return NextResponse.json({message:"Get method call api/users/dynamic",param: route.params.userName})
}