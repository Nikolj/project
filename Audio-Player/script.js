const playPauseBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const progress = document.querySelector('.progress');
const playerAudio = document.querySelector('.conteiner');
const currentTimes = document.querySelector('.currentTime');
const durationTimes = document.querySelector('.durationTime');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const thumbnail = document.querySelector('.thumbnail');
const background = document.querySelector('.background');
const audio = new Audio();


let isPlay = false;
let playNum = 0;
let playList = [
    'dontstartnow',
    'beyonce',
    'BRAN-Tonight-kissvk.com'
]


function playAudio() {
    audio.src = `assets/audio/${playList[playNum]}.mp3`;
    audio.play();
    isPlay = true;
    thumbnail.style = "transform: scale(1.15);";
}
audio.onended = function() {
    playNext();
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    thumbnail.style = "transform: scale(1);";
}

function playPause() {
    playPauseBtn.classList.toggle('pause-znak');

    if (!isPlay) {
        playAudio();
    } else {
        pauseAudio();

    };
}

function playNext() {
    playNum++;
    if (playNum > playList.length - 1) {
        playNum = 0;
    }
    playAudio(playList[playNum]);
    playPauseBtn.classList.add('pause-znak');
    if (playNum == 0) {
        songTitle.innerHTML = "Don't Start Now";
        songArtist.innerHTML = 'Dua Lipa';
        thumbnail.src = "assets/img/dontstartnow.png";
        background.src = "assets/img/dontstartnow.png";

    };
    if (playNum == 1) {
        songTitle.innerHTML = "Don't Hurt Yourself";
        songArtist.innerHTML = 'Beyonce';
        thumbnail.src = "assets/img/lemonade.png";
        background.src = "assets/img/lemonade.png";
    };
}



function playPrey() {
    playNum--;
    if (playNum < 0) {
        playNum = playList.length - 1;
    }
    playAudio(playList[playNum]);
    playPauseBtn.classList.add('pause-znak');
    if (playNum == 0) {
        songTitle.innerHTML = "Don't Start Now";
        songArtist.innerHTML = 'Dua Lipa';
        thumbnail.src = "assets/img/dontstartnow.png";
        background.src = "assets/img/dontstartnow.png";
    };
    if (playNum == 1) {
        songTitle.innerHTML = "Don't Hurt Yourself";
        songArtist.innerHTML = 'Beyonce';
        thumbnail.src = "assets/img/lemonade.png";
        background.src = "assets/img/lemonade.png";
    };
}


function audioTimePerevod(time) {
    time = Math.floor(time);
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;
    if (minutes < 10) {
        minutesVal = '0' + minutes;
    }
    if (seconds < 10) {
        secondsVal = '0' + seconds;
    }

    return minutesVal + ':' + secondsVal;
}

function audioProgress() {
    let progresss = (Math.floor(audio.currentTime) / (Math.floor(audio.duration) / 100));
    progress.value = progresss;
    let value = 0;
    value = progresss;
    progress.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
    currentTimes.innerHTML = audioTimePerevod(audio.currentTime);
    if (currentTimes.innerHTML == '00:00') {
        durationTimes.innerHTML = audioTimePerevod(audio.duration);
    }

}

function audioChangeTime(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('timeupdate', audioProgress);
progress.addEventListener('click', audioChangeTime);



playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', playPrey);
nextBtn.addEventListener('click', playNext);
