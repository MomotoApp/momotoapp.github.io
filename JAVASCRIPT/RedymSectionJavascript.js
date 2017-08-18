responseObj = readJsonFromUrl('http://ethpool.org/api/miner_new/13D61378b55Daa8b3F81f1D1244B374533fbC74a');
var count = responseObj.query.count;

console.log(count)