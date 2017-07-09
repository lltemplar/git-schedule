var script = [
    "echo '1' >> .temp",
    "git pull origin master",
    "git add .",
    "git commit -m \"commit code in " + getDate() + "\"",
    "git push --set-upstream origin master"
].join("&"); 
 
function getDate() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

module.exports = script;    