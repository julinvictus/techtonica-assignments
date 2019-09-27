const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getJson(url) {
  try{
    const response = await fetch(url);
    return await response.json;
    
  } catch (error) {
    throw error;
    
  }
}

async function getPeopleInSpace(url) {
//  const peopleResponse = await fetch(url);
//  const peopleJSON = await peopleResponse.json();
  const peopleJSON = await getJSON(url);
  
  const profiles = peopleJSON.people.map( async (person) => {
    const craft = person.craft;
//    const profileResponse = await fetch(wikiUrl + person.name);
//    const profileJSON = await profileResponse.json();
    const profileJSON = await getJSON(wikiUrl + person.name);
  
    return { ...profileJSON, craft };
  });

  return Promise.all(profiles);
}

console.log(getPeopleInSpace(astrosUrl));

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

// using async/await only
//btn.addEventListener('click', async (event) => {
//  event.target.textContent = "Loading...";
//  const astros = await getPeopleInSpace(astrosUrl)
//  generateHTML(astros);
//  event.target.remove();
//});

// combining async/await with promises
btn.addEventListener('click',  (event) => {
  event.target.textContent = "Loading...";

  getPeopleInSpace(astrosUrl)
      .then(generateHTML)
      .catch( e => {
        peopleList.innerHTML = '<h3>Something went wrong<h3>';
        console.error(e);
      })
      .finally( () => event.target.remove() )
});