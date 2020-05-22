const login = (email, password) =>{
    fetch('link', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.text())
};
module.exports = login;