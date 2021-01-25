
//---------\\ SERVER URL //---------\\ 

const baseUrl = "http://localhost:4030/api";

//----------------------------------\\ 


const BackendConnect = ( endpoint, data = {}, method = 'GET' ) =>
{

    const url = `${ baseUrl }/${ endpoint }`;

    //console.log( url );

    if( method === "GET" )
    {
        return fetch( url );
    }
    else
    {
        return fetch( 
            
            url, 
            { 
                method, 
                headers : 
                { 
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify( data )
            } 
        );
        
    };

};

//////---------------------------------------------->>>>>

export { BackendConnect };