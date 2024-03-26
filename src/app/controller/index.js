const { default: axios } = require("axios");

const baseUrl = "http://localhost:3000/api/user";
const productbaseUrl = "http://localhost:3000/api/products"

export const registerUser = async(params) =>{
try {
   return await axios.post(baseUrl, params).then(response =>{
        console.log({response});
       return response?.data
    }).catch(err =>{
        return {message:"there is some error"}
    })
} catch (error) {
    return {message:"there is some error"}
}
}


export const loginUser = async(params) =>{
try {
   return await axios.post(`${baseUrl}/login`, params).then(response =>{
        console.log({response});
       return response?.data
    }).catch(err =>{
        return {message:"there is some error"}
    })
} catch (error) {
    return {message:"there is some error"}
}
}


 export const updateProduct = async({userId,productId}) =>{
    try {
        return axios.patch(`${productbaseUrl}/${productId}`,{userId}).then(response =>{
            console.log({response});
           return response?.data
        } ).catch(error=>{
            return {message:"there is some error"}
        })
    } catch (error) {
        return {message:"there is some error"}
    }
 }

