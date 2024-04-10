import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log(body)
        const response = await fetch('http://api-cecoban.sensedia.com/dev/domiciliado', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        const data = await response.json();
        console.log(data)
        return Response.json(data);
    } catch (error) {
        console.error(error);
        Response.status(500).json({ error: error.message || error.toString() });
    }
}