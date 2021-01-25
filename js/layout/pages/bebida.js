import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";



//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 4 );

})
.catch( ( error ) => console.log( error ) );

