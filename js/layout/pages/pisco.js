import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";
import { offContent } from "../ui/offContent.js";


//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 2 );

})
.catch( ( error ) => 
{
    
    console.log( error )
    offContent();

} );

