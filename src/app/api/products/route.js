import { query } from '@/app/config/db';
export async function GET(request) {
    try {
        const params = new URL(request.url).searchParams;
        const page = parseInt(params.get('page')) || 1;
        const limit = parseInt(params.get('limit')) || 6;
        const offset = (page - 1) * limit;
        const products = await query({
            query: `SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`,
            values: [limit, offset],
        });

        const Totalproducts = await query({
            query: `SELECT * FROM products`,
            values: [],
        });
        // let data = JSON.stringify(products);
        const responseData = {
            data: products,
            total:Totalproducts.length,
            limit: limit,
            page: page
        };
        const data = JSON.stringify(responseData);
        return new Response(data, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error occurred",error }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
