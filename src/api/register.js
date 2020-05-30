
import link from './link';
const register =  (values) =>(

    fetch('http://'+link+':5000/api/auth/signup', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then( res => res.json())
    .catch((error)=>{
        console.log("Api call error");
     })

)
module.exports = register;