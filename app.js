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

            document.querySelector('#title').textContent = "Title: " + tag.tags.title;
            document.querySelector('#artist').textContent = "Artist: " + tag.tags.artist;
            document.querySelector('#album').textContent = "Album: " + tag.tags.album;
            document.querySelector('#year').textContent = "Year: " + tag.tags.year;
            document.querySelector('#genre').textContent = "Genre: " + tag.tags.genre;
            //document.querySelector('#comment').textContent = "Comment: " + tag.tags.comment;
        },
        onError: function(error){
            console.log(error)
        }
    });
    let fileCopy = new Audio()
    fileCopy.src = e.target.files[0];
    console.log(fileCopy.sampleRate);


});
