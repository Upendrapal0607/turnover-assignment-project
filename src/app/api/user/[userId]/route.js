import { query } from "@/app/config/db";

export async function DELETE(request, {params}) {
    console.log(params);
    try {
        const deleteResult = await query({
            query: `DELETE FROM emplyee WHERE id = ${+params.userId}`,
            values: [+params.userId],
        });

        if (deleteResult.affectedRows === 1) {
            return new Response(JSON.stringify({ message: "User deleted successfully" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } else {
           
            return new Response(JSON.stringify({ message: "User not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    } catch (error) {
   console.log(error);
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}



export async function PATCH(request, { params}) {
    const requestBody = JSON.parse(await request.text());
    console.log({requestBody});
    try {
        // Perform the update operation
        const updateResult = await query({
            query: `UPDATE emplyee SET ${requestBody.sallary ? `sallary = ${requestBody.sallary}` : ""} WHERE id = ${params.useId}`,
            values: [requestBody.sallary || null, params.useId],
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
            return new Response(JSON.stringify({ message: "User not found" }), {
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
