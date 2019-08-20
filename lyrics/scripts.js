const fetchLyrics = event => {
  //let pokemon = event.target.pokemon.value.toLowerCase();

  let request = new XMLHttpRequest();
  let url = `https://api.lyrics.ovh/v1/${artist}/${title}/`;

  request.open('GET', url);

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  request.send();
};

document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('song_name');
  form.addEventListener('submit', function(){
      fetchLyrics(event);
  });
});