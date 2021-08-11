const EventEmitter = require('events'); // we will get a class after we recieve an Event
const emitter = new EventEmitter();



//register a listener for bellring Event  that is response after an event
emitter.on('bellRing',({period,text})=>{
    console.log(`We need to run because ${period}  ${text}`);
})

//raising an event 
// emitter.emit('bellRing');

//If we want the response of event after 2 seconds
// setTimeout(()=>{
//     emitter.emit('bellRing','second Period Ended');

// },2000);

//for multiple Parameter we can get
setTimeout(()=>{
    emitter.emit('bellRing',{
        period:'first',
        text:'period Ended',
    });

},2000);