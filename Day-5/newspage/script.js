console.log('...App Started....');

function callAPI(){
  fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f29c669d09504935868a7827f75bf734")
  .then((res)=> res.json())
  .then((data)=> renderUI(data)) 
  }

function renderUI(data){

  //got the articles from data
  const articles = data.articles;
  // console.log(articles)
  // console.log(data)
  const root = document.getElementById("root")

  //single articles from the articles array
  for(let i=0;i<articles.length;i++){
  const ar = articles[i];
  // console.log(ar)

  //create parent div
  const div = document.createElement("div")
  div.setAttribute("class","news-card")
  const h3 = document.createElement("h3")
  h3.innerText = ar.title
  div.appendChild(h3)

  
  const img = document.createElement("img")
  img.src = ar.urlToImage;

  const a = document.createElement("a")
  a.target = '_blank'
  a.href = ar.url
  a.textContent = "To-be-continued"
  a.innerText = 'Read more...'

  // div.innerText = 'Card'
  const p = document.createElement("p")
  p.innerText = ar.description
  div.appendChild(img)
  root.appendChild(div)
  div.appendChild(p)
  div.appendChild(a)
  }
}

// renderUI()
callAPI()