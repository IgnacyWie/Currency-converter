const axios = require('axios');
const cheerio = require('cheerio');

async function getData(first, second){
    first = first.toLowerCase().trim()
    second = second.toLowerCase().trim();
    const { data } = await axios.get(`https://www.google.com/finance/quote/${first}-${second}`);
    const dic = {}
    $ = cheerio.load(data);
    dic.price =  $('.fxKbKc').text();
    dic.symbols = $('.KY7mAb').text();
    dic.names = $('.MAwwx').text();;
    return(dic);
}

module.exports = getData;
