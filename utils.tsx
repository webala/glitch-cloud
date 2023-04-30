import axios from "axios"

export const fetchCategories = async () => {
   const response = await axios.get('http://localhost:8000/api/categories')
   return response.data
}