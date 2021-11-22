// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let monH1 = document.querySelector("h1")
monH1.addEventListener("click", () => {
    monH1.classList.add("text-blue")
})

// ### 2. Au double clique du h3, rajoute la class text-error
let monH3 = document.querySelector("h3")
monH3.addEventListener("dblclick", () => {
    monH3.classList.add("text-error")
})

// ### 3. Trouve une methode qui rajoute la class text-style sur le 1er paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
let firstP = document.querySelector("p")
firstP.addEventListener("click", () => {
    firstP.classList.add("text-style")
})


// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let avantDernierP = document.querySelectorAll("p")[1]
let span2 = avantDernierP.querySelectorAll("span")
span2.forEach(el => {
    el.addEventListener("click", () => {
        el.setAttribute("class", "bolder")
    })
})

// ### 5. Dans le dernier paragraphe tu as trois span,créer un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont 

let mySpan2 =  Array.from(document.querySelectorAll("p")[2].children)
console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener("click", () => {
        mySpan2.forEach(el => {
            el.classList.remove("bolder-red")
        })
        el.classList.add("bolder-red")
    })
})

//###################################################################################################################"""

//1
let myH1 = document.querySelector('h1');

myH1.addEventListener('click', () => {
    myH1.classList.add('text-blue')
})

//2
let myH3 = document.querySelector('h3')

myH3.addEventListener('dblclick', () => {
    myH3.classList.add('text-error')
})

//3 
let firstP = document.querySelector('p')
firstP.addEventListener('click', () => {
    firstP.classList.toggle('text-style')
})

//4
// let span = Array.from(document.querySelectorAll('p')[1].children)
// console.log(span);

// span.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('bolder-red')
//     })
// });

let p1 = document.querySelectorAll("p")[1];
let span2 = p1.querySelectorAll("span")
span2.forEach(el => {
    el.addEventListener("click",() => {
        el.setAttribute("class","bolder");
    })
});

//5
let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)

console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener('click', () => {
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList.add('bolder-red')
    })
});"