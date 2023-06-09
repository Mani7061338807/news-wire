import axios from 'axios';
const getNewsItemsHelper = async() =>{
    try {
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       return {
        news:response.data
       } 
    } catch (error) {
        throw error
    }
}
export const getnewsItems = () =>{
    return {
        type:'get_news',
        payload:getNewsItemsHelper()
    }
}
const getNewsItemByIdHelper = async(id) =>{
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return {
         newsItem:response.data
        } 
     } catch (error) {
         throw error
     }
} 
export const getNewsItemById = (id) =>{
    return {
        type:'get_news_by_id',
        payload:getNewsItemByIdHelper(id)
    }
}