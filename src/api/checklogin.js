
import link from './link'
const checkLogin =  (token) =>(
    fetch('http://'+link+':5000/api/auth/checkLogin', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token})
    })
    .then( res => res.json())
    .catch((error)=>{
        console.log("Api call error");
     })
);
module.exports = checkLogin;