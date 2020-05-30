const register =  (values) =>(

    fetch('http://192.168.1.5:5000/api/auth/signup', 
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
        alert(error.message);
     })

)
module.exports = register;