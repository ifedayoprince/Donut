export async function GET() {
    return new Response('Retrieve a specific poll');
}

export async function POST() {
    return new Response('Update a specific poll');
}

export async function DELETE() {
    return new Response('Delete a specific poll');
}
