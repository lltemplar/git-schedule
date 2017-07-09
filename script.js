var script = [
    "echo '1' >> .temp",
    "git pull origin master",
    "git add .",
    "git commit -m \"commit code in " + getDate() + "\"",
    "git push --set-upstream origin master"
];

function getDate() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function refresh() {
    script[3] = "git commit -m \"commit code in " + getDate() + "\"";
}

module.exports = {
    build: function () {
        refresh();
        return script.join("&");
    }
};    