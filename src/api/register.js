const register = (name , phone, password) =>{
    fetch('link', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({name, phone, password})
    })
    .then(res => res.text())
};
module.exports = register;