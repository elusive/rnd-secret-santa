
// data
const data = require('./report.json');
const rnd_data = data.filter(r => r.email.includes('rndgroup.com'));


// output
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
