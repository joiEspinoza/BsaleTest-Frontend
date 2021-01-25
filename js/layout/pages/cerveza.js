import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";


//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 6 );

})
.catch( () => console.log( error ) );

