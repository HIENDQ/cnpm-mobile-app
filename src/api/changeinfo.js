const changePassword = (token, name, address, phone) =>{
    fetch('link', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, name, address, phone })
    })
    .then(res => res.json())
};
module.exports = changePassword;