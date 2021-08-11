const School = require('./eventemiiter');
const school = new School();
school.on('bellRing',({period,text})=>{
    console.log(`we need to run beacause ${period} ${text}`);
});
school.startPeriod();