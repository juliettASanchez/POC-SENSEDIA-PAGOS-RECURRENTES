import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        console.log("hoal")
        const response = await fetch('http://api-cecoban.sensedia.com/dev/imss/semanasTrabajadas', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
        const data = await response.json();
        const filterData = data.filter(item => item.rfc === params.id)
        return Response.json(filterData[0]);
    } catch (error) {
        console.error(error);
        Response.status(500).json({ error: error.message || error.toString() });
    }
}