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
    schedule.scheduleJob('0 * * * * *', function () {
        console.log('scheduleCronstyle:' + new Date());
        console.log(cmd);
        exec(cmd, function (error, stdout, stderr) {
            console.dir(stdout);
            console.error(stderr);
        });
    })
}

scheduleCronstyle();

module.exports = scheduleCronstyle;