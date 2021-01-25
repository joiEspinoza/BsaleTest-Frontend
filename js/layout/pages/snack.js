import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";



//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 5 );

})
.catch( () => console.log( error ) );
