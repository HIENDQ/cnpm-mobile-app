
import link from './link';
const changeInfo = (token, name, address, phone) =>(
    fetch('http://'+link+':5000/api/auth/changeInfo', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, name, address, phone })
    })
    .then(res => res.json())
    .catch((error)=>{
        console.log("Api call error");
     })
);
module.exports = changeInfo;