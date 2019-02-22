function changeTitles() {
    let myTitleElt = document.getElementsByClassName("jumbotron-heading")[0];
    console.log(myTitleElt.innerText);
    myTitleElt.innerHTML = "Ce que j'ai appris à THP";
    let mySubTitleElt = document.getElementsByClassName("lead text-muted")[0];
    console.log(mySubTitleElt.innerText);
    mySubTitleElt.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";

}
changeTitles();



function changeCallToActions() {
    let myContainerEltm = document.querySelectorAll("div.container")[2].querySelectorAll("p > a");
    console.log(myContainerEltm[0].innerText);
    myContainerEltm[0].innerHTML = "OK je veux tester";
    myContainerEltm[0].href = "http://www.thehackingproject.org";
    myContainerEltm[1].innerHTML = "Non Merci";
    myContainerEltm[1].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();


function changeLogoName() {
    let myAlbumElt = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0].querySelectorAll("a > strong")[0];
    console.log(myAlbumElt.innerText);
    myAlbumElt.innerHTML = "The THP Experience";
    myAlbumElt.style.fontSize = "2em";

}
changeLogoName();

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages() {
    let myCardImageElt = document.getElementsByClassName("card-img-top");
    for (i = 0; i < myCardImageElt.length; i++) {
        // console.log(myCardImageElt[i].src);
        myCardImageElt[i].src = imagesArray[i];
    };
}
populateImages()

function deleteLastCards() {
    let myCardElt = document.getElementsByClassName("card mb-4 box-shadow");
    // let last_item = myCardElt.length - 1;
    for (i = 0; i < 3; i++) {
        myCardElt[myCardElt.length - 1].remove();
    }
    // console.log(myCardElt[myCardElt.length - 1]);
}
deleteLastCards()


function changeCardsText() {
    let myCardElt = document.getElementsByClassName("card mb-4 box-shadow");
    myCardElt[0].getElementsByClassName("card-text")[0].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
    myCardElt[1].getElementsByClassName("card-text")[0].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
    myCardElt[2].getElementsByClassName("card-text")[0].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
}
changeCardsText()


function changeViewButtons() {
    let myCardButtonElt = document.getElementsByClassName("card mb-4 box-shadow");
    for (i = 0; i < myCardButtonElt.length; i++) {
        // console.log(myCardButtonElt[i].getElementsByTagName("button")[0].attributes[1].value);
        myCardButtonElt[i].getElementsByTagName("button")[0].attributes[1].value = "btn btn-sm btn-success";
    }
}
changeViewButtons()


function laSpeciale() {
    let addDiv = document.createElement('div');
    addDiv.textContent = "Ajout d'un div avec Row";
    addDiv.setAttribute('class', 'row');
    let myRowCardElmtn = document.querySelectorAll("div.row")[1];
    // myRowCardElmtn.appendChild(addDiv);
    myRowCardElmtn.insertBefore(addDiv, myRowCardElmtn.firstChild)
    // console.log(myRowCardElmtn)
}
laSpeciale()


function laComplete() {
    let myCardToMoveElt = document.getElementsByClassName("card mb-4 box-shadow")[2];
    // console.log(myCardToMoveElt.innerText);
    let parent = document.querySelectorAll("div.row")[2];
    console.log(parent);

    let node = myCardToMoveElt;
    // parent = document.querySelectorAll("div.row")[1];
    prev = node.previousSibling;
    oldChild = parent.cloneNode(node);
    parent.insertBefore(oldChild, prev);
}
laComplete()