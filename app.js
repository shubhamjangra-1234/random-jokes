 const url ="https://v2.jokeapi.dev/joke/Any";
let joke = document.getElementById("joke");
let ans = document.getElementById("ans");
let btn = document.getElementById("btn");

setTimeout(() =>{
   ans.style.display = "flex"
},2000)
 async function data(){
     const response = await fetch(url);
     const get = await response.json();
     console.log(get.setup,get.delivery, get.joke);
     joke.innerText= get.setup;
     ans.innerText=  get.delivery ;
    };

console.log(data());
