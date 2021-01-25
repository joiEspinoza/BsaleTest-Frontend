import { BackendConnect } from "../Backend/BackendConnect.js";

//---------------------------------->>

const getCategories = async () =>
{

    try 
    {
        const request = await BackendConnect( 'product/categories', {}, 'GET' );
        const response = await request.json();

        if( response.ok )
        {
            return response.categories;
        }
        else
        {
            return alert( response.msg );
        };

    } 
    catch( error ) 
    {
        console.log( error );
        return alert( 'Something went wrong' );
    };

};


const getProducts = async () =>
{

    try 
    {
        const request = await BackendConnect( 'product/products', {}, 'GET' );
        const response = await request.json();

        if( response.ok )
        {
            return response.products;
        }
        else
        {
            return alert( response.msg );
        };

    } 
    catch( error ) 
    {
        console.log( error );
        return alert( 'Something went wrong' );
    };

};


const getProductsBySearchValue = async ( searchValue ) =>
{
    try 
    {

        
        const request = await BackendConnect( 'product/products', { searchValue }, 'POST' );
        const response = await request.json();

        if( response.ok )
        {
            return response.products;
        }
        else
        {
            
            localStorage.clear();
            return alert( response.msg );

        };

    } 
    catch( error ) 
    {
        console.log( error );
        return alert( 'Something went wrong' );
    };
};

//------------------------------->

export { getCategories, getProducts, getProductsBySearchValue };