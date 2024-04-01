import { query } from "@/app/config/db";
export async function GET(request,{params}) {
  try {
// 
    // This is currect code but it were give me error during the deployment process
    const url = new URL(request.url);
    const params = url.searchParams;
    const page = parseInt(params.get("page")) || 1;
    const limit = parseInt(params.get("limit")) || 6;
    const offset = (page - 1) * limit;
    const products = await query({
      query: `SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`,
      values: [],
    });

    const Totalproducts = await query({
      query: `SELECT * FROM products`,
      values: [],
    });

    const responseData = {
      data: products,
      total: Totalproducts.length,
      limit: limit,
      page: page,
    };
    const data = JSON.stringify(responseData);

    return new Response(data, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error occurred", error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
