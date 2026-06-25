const movies=[
    // Action
{
    name: "RRR",
    language: "Telugu",
    genre: "Action",
    rating: 8.0,
    image: "rrr.jpg",
    link:"https://youtu.be/NgBoMJy386M?si=ptynSI-5HHFhMf8e"
},
{
    name: "Baahubali",
    language: "Telugu",
    genre: "Action",
    rating: 8.2,
    image: "baahubali.jpg",
     link:"https://youtu.be/NgBoMJy386M?si=ptynSI-5HHFhMf8e"
},
{
    name: "Pushpa: The Rise",
    language: "Telugu",
    genre: "Action",
    rating: 7.6,
    image: "pushpa.jpg",
     link:"https://youtu.be/Q1NKMPhP8PY?si=uP4IDQVh_6b9YX1-"

},
{
    name: "Salaar",
    language: "Telugu",
    genre: "Action",
    rating: 7.5,
    image: "salaar.webp",
     link:"https://youtu.be/4GPvYMKtrtI?si=6ISrUBkaVV4tm6_L"
},
{
    name: "Akhanda",
    language: "Telugu",
    genre: "Action",
    rating: 7.0,
    image: "akhanda.webp",
     link:"https://youtu.be/qlCBzdZSnlY?si=oEXepIM1sxprfG7p"
},

// Comedy
{
    name: "Jathi Ratnalu",
    language: "Telugu",
    genre: "Comedy",
    rating: 8.2,
    image: "jathi.webp"
},
{
    name: "DJ Tillu",
    language: "Telugu",
    genre: "Comedy",
    rating: 7.3,
    image: "djtillu.webp"
},
{
    name: "F2: Fun and Frustration",
    language: "Telugu",
    genre: "Comedy",
    rating: 7.1,
    image: "fun.webp"
},
{
    name: "Venky",
    language: "Telugu",
    genre: "Comedy",
    rating: 7.8,
    image: "venky.jpg"
},
{
    name: "Ready",
    language: "Telugu",
    genre: "Comedy",
    rating: 7.3,
    image: "ready.jpg"
},

// Drama
{
    name: "Lucky Bhaskar",
    language: "Telugu",
    genre: "Drama",
    rating: 8.1,
    image: "lucky-baskhar-movie-poster.jpg"
},
{
    name: "Mahanati",
    language: "Telugu",
    genre: "Drama",
    rating: 8.4,
    image: "Arundhati.webp"
},
{
    name: "Sita Ramam",
    language: "Telugu",
    genre: "Drama",
    rating: 8.6,
    image: "sitharamam.jpg"
},
{
    name: "Hi Nanna",
    language: "Telugu",
    genre: "Drama",
    rating: 8.3,
    image: "hinaa.jpeg"
},
{
    name: "Fidaa",
    language: "Telugu",
    genre: "Drama",
    rating: 7.4,
    image: "fidaa.jpg"
},

// Thriller
{
    name: "Rakshasudu",
    language: "Telugu",
    genre: "Thriller",
    rating: 8.3,
    image: "rakshasudu_te.jpg"
},
{
    name: "HIT: The First Case",
    language: "Telugu",
    genre: "Thriller",
    rating: 8.0,
    image: "hit1st.webp"
},
{
    name: "Kshanam",
    language: "Telugu",
    genre: "Thriller",
    rating: 8.2,
    image: "kshnam.webp"
},
{
    name: "Evaru",
    language: "Telugu",
    genre: "Thriller",
    rating: 8.1,
    image: "evaru.webp"
},
{
    name: "Agent Sai Srinivasa Athreya",
    language: "Telugu",
    genre: "Thriller",
    rating: 8.4,
    image: "agent.webp"
},

// Romance
{
    name: "Hi Nanna",
    language: "Telugu",
    genre: "Romance",
    rating: 8.3,
    image: "hinaa.jpeg"
},
{
    name: "Sita Ramam",
    language: "Telugu",
    genre: "Romance",
    rating: 8.6,
    image: "sitharamam.webp"
},
{
    name: "Geetha Govindam",
    language: "Telugu",
    genre: "Romance",
    rating: 7.7,
    image: "geetha.webp"
},
{
    name: "Fidaa",
    language: "Telugu",
    genre: "Romance",
    rating: 7.4,
    image: "fidaa.jpg"
},
{
    name: "Ye Maaya Chesave",
    language: "Telugu",
    genre: "Romance",
    rating: 7.7,
    image: "yeemayachesavae.webp"
},

// Horror
{
    name: "Masooda",
    language: "Telugu",
    genre: "Horror",
    rating: 7.8,
    image: "masooda.webp"
},
{
    name: "Virupaksha",
    language: "Telugu",
    genre: "Horror",
    rating: 7.9,
    image: "vVirupaksha.webp"
},
{
    name: "Arundhati",
    language: "Telugu",
    genre: "Horror",
    rating: 7.9,
    image: "Arundhati.webp"
},
{
    name: "Pindam",
    language: "Telugu",
    genre: "Horror",
    rating: 7.0,
    image: "Pindam.jpg"
},
{
    name: "Raju Gari Gadhi",
    language: "Telugu",
    genre: "Horror",
    rating: 7.2,
    image: "Raju Gari Gadhi.webp"
},

// Sci-Fi
{
    name: "Aditya 369",
    language: "Telugu",
    genre: "Sci-Fi",
    rating: 8.4,
    image: "Aditya 369.avif"
},
{
    name: "Kalki 2898 AD",
    language: "Telugu",
    genre: "Sci-Fi",
    rating: 8.3,
    image: "Kalki 2898 AD.jpg"
},
{
    name: "Project Z",
    language: "Telugu",
    genre: "Sci-Fi",
    rating: 7.3,
    image: "Project Z.webp"
},
{
    name: "7:11 PM",
    language: "Telugu",
    genre: "Sci-Fi",
    rating: 7.1,
    image: "711 PM movie.webp"
},
{
    name: "Okka Kshanam",
    language: "Telugu",
    genre: "Sci-Fi",
    rating: 7.5,
    image: "Okka Kshanam.webp"
},

]
const cont=document.getElementById("movieContainer")  
const lan=document.getElementById("language");
const gen=document.getElementById("genre");
const btn=document.getElementById("searchBtn");
console.log(lan.value)
lan.addEventListener("change",function(){
    console.log(lan.value);
})
gen.addEventListener("change",function(){
    console.log(gen.value);
})
btn.addEventListener("click",function(){
    cont.innerHTML="";
    for(let i=0;i<movies.length;i++){
        if(lan.value===movies[i].language&&gen.value===movies[i].genre){
            cont.innerHTML=cont.innerHTML+
            `<div class="card">
            
                <div class="imamovie">
                ${
                    movies[i].link ? 
                    `<a href="${movies[i].link}" target="_blank">
                        <img class="movieimage"   src="${movies[i].image}">
                    </a>`:
                        `<img class="movieimage" src="${movies[i].image}" onclick="alert('no trailer for this')" ></img>`
                      
                }
                            
                </div>

                <h3>name: ${movies[i].name}</h3>
                <p>language: ${movies[i].language}</P>
                <p>genre: ${movies[i].genre}</p>
                <p>rating: ${movies[i].rating}</P>
                
            </div>`
            
        }
}

})

