import axios from 'axios';



  //List of LS Instructors Github username's:
  const gitHubLogIns = [
    ['Ogden-R'],
    ['tetondan'],
    ['dustinmyers'],
    ['justsml'],
    ['luishrd'],
    ['bigknell'],
  ];

const logInData = []; 
function getData(array){
  for (let i=0; i<array.length; i++){
logInData.push([`https://api.github.com/users/${array[i]}`]);
  }
  return logInData;
}

console.log(getData(gitHubLogIns));
console.log(logInData);


const entryPoint = document.querySelector('.cards');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/Ogden-R
*/
// axios.get(`https://api.github.com/users/Ogden-R`)
//   .then (resp =>{
//     console.log(resp.data);
//   })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];


//   STEP 3: Create a function that accepts a single object as its only argument.
//     Using DOM methods and properties, create and return the following markup:

function cardMaker({ data }) {
  //make elements
  const cardDiv = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const userName  = document.createElement('p');
  const location = document.createElement('p');
  const userProfile = document.createElement('p');
  const gitHub = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

  //put in order
  cardDiv.appendChild(cardImage);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(gitHub);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);

  //add classes to elements
  cardDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  cardTitle.classList.add('name');
  userName.classList.add('username');

  //add text and srcs to items.
  cardImage.src = [data].avatar_url;
  cardTitle.textContent = `Name: ${[data].name}`;
  userName.textContent = `Username: ${[data].login}`;
  location.textContent = `Location: ${[data].location}`;
  gitHub.href = [data].url;
  gitHub.textContent =  `Click Here to view ${[data].name}'s GitHub page!`;
  followers.textContent = `Followers: ${[data].followers}`;
  following.textContent = `Following: ${[data].following}`;
  userBio.textContent = `Bio: ${[data].bio}`;

  return cardDiv;

}

//     <div class="card">
//       <img src={image url of user} />
//       <div class="card-info">
//         <h3 class="name">{users name}</h3>
//         <p class="username">{users user name}</p>
//         <p>Location: {users location}</p>
//         <p>Profile:
//           <a href={address to users github page}>{address to users github page}</a>
//         </p>
//         <p>Followers: {users followers count}</p>
//         <p>Following: {users following count}</p>
//         <p>Bio: {users bio}</p>
//       </div>
//     </div>


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const cardElements = logInData.map(cardElem => {
  return cardMaker(cardElem);
})
cardElements.forEach(cardElement => {
  entryPoint.appendChild(cardElement);
})


const getCards = () => {
  // try {
    for(let i = 0; i<logInData.length; i++) {
      axios.get(logInData[i]);
        const madeCard = cardMaker(logInData[i]);
        entryPoint.appendChild(madeCard);
      }
    // } catch(err) {
    //   const errorText = document.createElement('p');
    //   errorText.textContent = `Whoops, can't do that. Try again later!`;
    //   document.body.appendChild(errorText);
    // }  finally {
    //   console.log("Honey, I'm Home!");
    // } 
    return getCards;
}



