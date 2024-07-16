import axios from 'axios';

function getProductList(){
  return axios.get('https://dummyjson.com/products')
  
}
export default getProductList;