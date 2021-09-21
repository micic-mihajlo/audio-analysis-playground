const btn = document.getElementById('btn');

let audioFile = new Audio();
audioFile.src ='epic.mp3'

btn.addEventListener('click', function(){
    audioFile.play();
    audioFile.addEventListener('playing', function(){
        console.log('HA!');
    })
})


const jsmediatags = window.jsmediatags;

document.querySelector("#input").addEventListener("change", (e) => {
    const file = e.target.files[0]; //because we want to select just one file(for now)
    jsmediatags.read(file, {
        onSuccess: function(tag){
            //since album covers look like array buffer in metadata, we have to convert it
            const data = tag.tags.picture.data;
            const format = tag.tags.picture.format;
            let base64String = "";

            for (let i = 0; i <= data.length - 1; i++) {
                base64String += String.fromCharCode(data[i]);
            }
            document.querySelector("#cover").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;

            document.querySelector('#title').textContent = tag.tags.title;
            document.querySelector('#artist').textContent = tag.tags.artist;
            document.querySelector('#album').textContent = tag.tags.album;
            document.querySelector('#year').textContent = tag.tags.year;
            document.querySelector('#genre').textContent = tag.tags.genre;
            document.querySelector('#comment').textContent = tag.tags.comment;
        },
        onError: function(error){
            console.log(error)
        }
    });
});
/*
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
    console.log(displayInputFile())
    displayInputFile();
});*/

