
import link from './link';
const changePassword = (token, password, newPass) =>(
    fetch('http://'+link+':5000/api/auth/changePassword', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, password ,newPass})
    })
    .then(res => res.json())
    .catch((error)=>{
        console.log("Api call error");
     })
);
module.exports = changePassword;