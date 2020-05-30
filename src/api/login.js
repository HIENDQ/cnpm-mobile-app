
import  link from './link';
const login = async (values) =>(
    await fetch('http://'+link+':5000/api/auth/login', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then(res => res.json())
    .catch((error)=>{
        console.log("Api call error");
     })
);
module.exports = login;