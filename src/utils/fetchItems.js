const URL="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"

export const fetchData = async() => { 
    try {
        const dataResponse= await fetch( URL , { method : "GET" } )
        const data= await dataResponse.json()
        return data
    } catch (error) {
        return error
    }
 }