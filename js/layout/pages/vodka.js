import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";



//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 7 );

})
.catch( ( error ) => console.log( error ) );

