import { NextResponse } from 'next/server'

/**
 * @param {Request} request 
 * @returns 
 */
export async function POST(request) {
    const body = await request.json();

    /**
     * @type {string} string
     */
    const email = json.email;

    return NextResponse.json({
        email,
    });
}
