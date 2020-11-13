const https = require('https');

const report_url = 'https://xmas2020.rndgroup.com/report';
let data = [];
let rnd_data = [];

const getJsonFromUrl = (url) => {
    return new Promise((resolve, reject) => {
        const lib = url.startsWith('https') ? require('https') : require('http');
        const request = lib.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error(`Failed to get data, status code: ${response.statusCode}`));
            }
            const body = [];
            response.on('data', (chunk) => body.push(chunk));
            response.on('end', () => resolve(body.join('')));
        });
        request.on('error', (err) => reject(err));
    });
};

getJsonFromUrl(report_url)
    .then((body) => {
        data = JSON.parse(body);
        console.log(data.length);
        rnd_data = data.filter(r => r.email.includes('rndgroup.com'));
        console.log('');
        console.log('');
        console.log('Secret Santa Reporting');
        console.log('=================================================')
        console.log('');
        console.log('Record count:        ', data.length);
        console.log('RND only count:      ', rnd_data.length);
        console.log('');
        console.log('Participant List:');
        console.log('---------------------');
        rnd_data.forEach(r => console.log(`${r.fname} ${r.lname}`));
    })
    .catch((err) => console.error(err.message));


// output
