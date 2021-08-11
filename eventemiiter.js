const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log("Event has started");

        //raising an event 
        setTimeout(()=>{
            this.emit('bellRing',{
                period: 'first',
                text:'period ended',
            });
        },2000);
    }
}
module.exports = School;