
console.log('Start javascript');
let songs;
let currentfolder;
let currentsong = new Audio();
let songul;

//play music 
let playmusic = (track, pause = false) => {
    // var currentsong=new Audio("/songs/" + track);
    currentsong.src = `/${currentfolder}/` + track;
    if (!pause) {
        currentsong.play();
        play.src = "/svgs/pause.svg";
        document.querySelector("#play").classList.remove("invert");
    }

    document.querySelector(".songname").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = `00:00 / 00:00`;
}

//time function 
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
}

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}



//async function
async function getsongs(folder) {
    currentfolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`)
    let response = await a.text();
    // console.log(response);
    let element = document.createElement("div");
    element.innerHTML = response;
    let anchor = element.getElementsByTagName("a");

    songs = [];
    for (let index = 0; index < anchor.length; index++) {
        const element = anchor[index];
        if (element.href.endsWith("mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
}

    // song display 
     songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songul.innerHTML = "";
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li>
        <div class="songcard cursor flex">
            <div class="songinfo flex">
                <img class="invert" src="svgs/music.svg" alt="">
                <div class="songinfo2">
                <p>${song.replaceAll("%20", " ")}</p>
                <p>Nikhil Singh</p>
            </div>
            </div>
            <div class="play flex">
                <p>Play now</p>
                <img src="svgs/playnow.svg" alt="">
            </div>
        </div>
    </li>`;
}
  
    //attaching eventlistener to the song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {

        e.addEventListener("click", () => {

            console.log(e.querySelector(".songinfo2").firstElementChild.innerHTML)
            playmusic(e.querySelector(".songinfo2").firstElementChild.innerHTML);
        })
    });
    return songs;
}

async function displayalbums(){
    let a = await fetch(`http://127.0.0.1:5500/songs/`)
    let response = await a.text();

    let element = document.createElement("div");
    element.innerHTML = response;
    let anchor = element.getElementsByTagName("a");
    let cardcontainer=document.querySelector(".container")
    let array=Array.from(anchor)
for (let index = 0; index < array.length; index++) {
    const e = array[index];
    
        if(e.href.includes("/songs/")){
           let folder =e.href.split("/").slice(4)[0]
           console.log(folder);
         //get the metadata of the folder 
            let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`)
            let response = await a.json();

            cardcontainer.innerHTML=cardcontainer.innerHTML +`<div data-folder=${folder} class="card flex cursor">
            <div class="playbtn ">
                <img src="svgs/btn.svg" alt="">
            </div>
            <div class="pic">
                <img src="/songs/${folder}/cover.jpeg" alt="">
            </div>
            <div class="songtitle">
            ${response.title}
            </div>
            <div class="aboutsong">
                ${response.discription}
            </div>
        </div>`

        }
    }

        //loading folder
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playmusic(songs[0])

        })
    })
}

async function main() {
    //get the list of songs
    songs = await getsongs(`songs/ncs`);
    playmusic(songs[0],true);
    // console.log(songs);
    displayalbums()


    //show all the songs


    //attaching eventlistener to the buttons
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "/svgs/pause.svg";
            document.querySelector("#play").classList.remove("invert")

        }
        else {
            currentsong.pause();
            play.src = "/svgs/play.svg";
            document.querySelector("#play").classList.toggle("invert")
        }
    })

    //Timeupdate event listener 
    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime,currentsong.duration)
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`
        // document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";

    })

    // seekbar 
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let precent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = precent + "%";
        //   currentsong.currentTime=
        currentsong.currentTime = ((currentsong.duration * precent) / 100);
    })

    // hamburger 
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    // closing hamburger
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = -110 + "%";
    })

      // Add an event listener to previous
      prev.addEventListener("click", () => {
        currentsong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playmusic(songs[index - 1])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", () => {
        currentsong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
    })

    //volume 
    document.querySelector(".vol").getElementsByTagName("input")[0].addEventListener("change", (e) => {

        if (e.target.value == 0) {
            volume.src = "svgs/mute.svg"
            currentsong.volume = 0;
        }
        else {
            volume.src = "svgs/volume.svg";
            currentsong.volume = parseInt(e.target.value) / 100;
        }
    })
}
main();