import React from 'react';

let Session2 = function ({code, match})  
{
    let paramCode = match.params.code;

    if(code || paramCode)
    {
        return <h1>Code {code} {paramCode}</h1> 
    }else{
        return <h1>No Code Supplied</h1> 
    }

    
}

export default Session2