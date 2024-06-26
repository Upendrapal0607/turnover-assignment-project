import { query } from "@/app/config/db";



export async function GET(request,{params}) {
  try {
    const page = +params.productId || 1;
    const limit =  6;
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




export async function PATCH(request, { params }) {
  const { userId } = JSON.parse(await request.text());
  console.log({ userId, params });
  try {
    const updateResult = await query({
      query: `UPDATE products SET userId = ${userId} WHERE id = ${+params.productId}`,
      values: [userId, +params.useId],
    });

    if (updateResult.affectedRows === 1) {
      return new Response(
        JSON.stringify({ message: "User updated successfully" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(JSON.stringify({ message: "product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
