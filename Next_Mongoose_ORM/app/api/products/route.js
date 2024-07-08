import { NextResponse } from "next/server";
import { productModel } from "../../../model/products";
import dbConnect from "../../../config/db";
dbConnect()
export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body);
        if (body.title && body.description && body.price) {
            
            const product = new productModel(body)
            await product.save()
            return NextResponse.json({ message: "successfully products created" })
        }
        return NextResponse.json({ message: "All Params are required" })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)

        })
    }
}