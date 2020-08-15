const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");
const cwd = process.cwd();

let out = (text) => document.getElementById("out").innerHTML = text;

document.getElementById("download").onclick = () => {
    const video = document.getElementById("url").value;
    if (video != "") {
        const file = path.join(cwd, video + ".mp3");
        out("<b>obtain yes</b>");
        ytdl(video, { filter: "audioonly" })
            .pipe(fs.createWriteStream(file))
            .then(out("done."))
            .catch(out("<b>oop</b>"));
    } else alert("Please provide a video url or id.");
}