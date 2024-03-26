import { query } from "@/app/config/db";

export async function PATCH(request, { params}) {
    const {userId} = JSON.parse(await request.text());
    console.log({userId,params});
    try {
        const updateResult = await query({
            query: `UPDATE products SET userId = ${userId} WHERE id = ${+params.productId}`,
            values: [userId, +params.useId],
        });
        

        if (updateResult.affectedRows === 1) {
            // If one row was affected (updated), send a success response
            return new Response(JSON.stringify({ message: "User updated successfully" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } else {
            // If no row was affected (no user found with that ID), send a not found response
            return new Response(JSON.stringify({ message: "product not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    } catch (error) {
        console.log(error);
        // If an error occurs during the update process, send an error response
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}