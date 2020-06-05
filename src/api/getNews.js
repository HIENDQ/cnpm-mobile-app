import  link from './link';
const getNews = async (page) =>(
    await fetch('http://'+link+':5000/api/product/'+page, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: undefined
    })
    .then(res => res.json())
    .catch((error)=>{
        console.log("Api call error"+error);
     })
);
module.exports = getNews;