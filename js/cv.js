var JSON_URL = "http://localhost/programmation/perso/cv/js/data.json";

/**
 * createPrincipalCard function create the principal card.
 *
 *
 */
function createPrincipalCard(title){
  //Create the principal Card for the section (title)
  var principalCard = document.createElement("div");
  principalCard.classList.add('card', 'border-secondary', 'mb-3');

  //Create the title Div for the principal card
  var titleDiv = document.createElement("div");
  titleDiv.classList.add("card-header");
  titleDiv.innerHTML = title;

  //Create the body for the principal card
  var bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");

  //Add the title and the body for the principal card
  principalCard.appendChild(titleDiv);
  principalCard.appendChild(bodyDiv);

  return principalCard;
}

/**
 * createSimpleCard function create the simple card,
 * for each data wich must be put in the principal card
 *
 */
function createSimpleCard(principalCard, data){
  //Create the simple card
  var simpleCard = document.createElement("div");
  simpleCard.classList.add("card");

  //Create the body for the card
  var simpleCardBody = document.createElement("div");
  simpleCardBody.classList.add("card-body");

  //Create the header for the title
  var titleHeader = document.createElement("h4");
  titleHeader.classList.add("card-title");
  titleHeader.innerHTML = data["title"];

  //Create the header for the subtitle
  var subtitleHeader = document.createElement("h6");
  subtitleHeader.classList.add("card-subtitle", "mb-2", "text-muted");
  subtitleHeader.innerHTML = data["subtitle"];

  //Create the paragraph for the content
  var contentParagraph = document.createElement("p");
  contentParagraph.classList.add("card-text");
  contentParagraph.innerHTML = data["content"];

  //Add the title, subtitle and the content to the bodyCard
  simpleCardBody.appendChild(titleHeader);
  simpleCardBody.appendChild(subtitleHeader);
  simpleCardBody.appendChild(contentParagraph);

  //Add the bodyCard to the simpleCard
  simpleCard.appendChild(simpleCardBody);

  //Add the simpleCard to the body part of the principalCard
  principalCard.lastElementChild.appendChild(simpleCard);
}

/**
 * cardGenerator function call the createPrincipalCard and the createSimpleCard fucntions
 * Then, this function add the card to the html page.
 *
 */
function cardGenerator(jsonData, title){
  //console.log(jsonData);

  //Create the principal card and add the title
  var principalCard = createPrincipalCard(title);

  //For each json object, create a simpleCard(title, subtitle, content) and add to the principal card
  jsonData.forEach(function(data){
    createSimpleCard(principalCard, data);
  });

  //Add the principal card to the html document.
  document.querySelector("#curriculum").appendChild(principalCard);
}

/**
 * Ajax request to get the Json data.
 *
 *
 */
ajaxGet(JSON_URL, function(reponse){
    //Mise en format JS
    var data = JSON.parse(reponse);
    console.log(data);
    //in Data, we have 4 arrays
    //Education - Skills - Professionnal - Skills
    //Each arrays display some Json objects (title-subtitle-content)
      cardGenerator(data["Education"], "Education");
        cardGenerator(data["Skills"], "Skills");
          cardGenerator(data["Professionnal"], "Professionnal Experiences");
            cardGenerator(data["Additionnal"], "Additionnal Information");
});
