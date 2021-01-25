
//---------\\ SERVER URL //---------\\ 

const baseUrl = "https://bsalebackendd.herokuapp.com/api";

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