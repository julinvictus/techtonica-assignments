const fetchLyrics = event => {
  let artist = document.getElementById("artist_name").value;
  console.log(artist)
  let title = document.getElementById("song_name").value;
  console.log(title)
  let request = new XMLHttpRequest();
  let url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  request.open('GET', url, true); // setting the true param makes call asynchronous 

  request.onreadystatechange = function () {
    console.log(request.reponse);
    if (request.readyState === 4) {
      console.log('Status:', request.status);
      let response = JSON.parse(this.response);
      console.log(response.lyrics);

      $(document).ready(function() {
        let html = "";
        html+= `<p>${response.lyrics.replace(/\n/g, '<br />')}</p>`;
        // insert final html into #lyrics...
        $("#lyrics").html(html);
      });
    }
  };

  request.send();
};

document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('songForm');
  form.addEventListener('submit', function(event){
    event.preventDefault(); // prevent form submission from reloading the page.
    fetchLyrics();
  });
});


