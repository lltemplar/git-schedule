var schedule = require('node-schedule');
var exec = require('child_process').exec;
var cmd = require('./script.js'); 


/*  *  *  *  *  *  *
    ┬ ┬ ┬ ┬ ┬ ┬
    │ │ │ │ │ |
    │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
    │ │ │ │ └───── month (1 - 12)
    │ │ │ └────────── day of month (1 - 31)
    │ │ └─────────────── hour (0 - 23)
    │ └──────────────────── minute (0 - 59)
    └───────────────────────── second (0 - 59, OPTIONAL)
*/

function scheduleCronstyle() {
    console.log('new scheduleJob in ' + new Date());
    schedule.scheduleJob('0 0 21 * * *', function () {        
        exec(cmd.build(), function (error, stdout, stderr) {
            console.dir(stdout);
        });
    });
}

scheduleCronstyle();

module.exports = scheduleCronstyle;