const btn = document.getElementById('btn');

let audioFile = new Audio();
audioFile.src ='epic.mp3'

btn.addEventListener('click', function(){
    audioFile.play();
    audioFile.addEventListener('playing', function(){
        console.log('HA!');
    })
})


const button_upload = document.getElementById('button_upload')
button_upload.addEventListener('click', function(){
    console.log("brrr");
})

const getVals = () =>{
    const artistName = document.querySelector('input.artist-name');
    const songName = document.querySelector('input.song-name');
    const albumCover = document.querySelector('input.album-img').files[0];
    const song = document.querySelector('input.song-aud').files[0];

    document.querySelector('form').style.display ='none'

    return [artistName, songName, albumCover, song];
}

const convertInput = () =>{ //to be able to display images/audio, we need to convert it to URL
    const [artistName, songName, albumCover, song] = getVals();

    const albumCoverURL = URL.createObjectURL(albumCover);
    const songURL = URL.createObjectURL(song);

    return [albumCoverURL, songURL, artistName, songName];
}

const displayInputFile = () =>{
    const [albumCoverURL, songURL, artistName, songName] = convertInput();

    document.querySelector('.artist h2').innerHTML = '${artistName}';
    document.querySelector('.artist h3').innerHTML = '${songName}';
    document.querySelector('.artist img').setAttribute('src', albumCoverURL);
    document.querySelector('.aud').setAttribute('src', songURL);

}
document.querySelector('submit').addEventListener('click', (e) => {
    e.preventDefault();
    displayInputFile();
});
