//Names: Jerry Yu, David Staronka, Brenden Montemurno, Nicholas Apostolico, Glen Farbanish
//Pledge: I pledge my honor that I have abided by the Stevens Honor System.

var x = document.getElementsByClassName("logo");
var length = x.length;
for (var i = 0; i < length; i++) {
	x[i].addEventListener("mouseleave", function() {this.style.opacity = "1";});
   	x[i].addEventListener("mouseover", function() {this.style.opacity = "0.5";});
}

var surv = document.getElementById("postForm");
surv.addEventListener("focus", function( event ) {
  event.target.style.background = "lightblue";}, true);
surv.addEventListener("blur", function( event ) {
  event.target.style.background = "";}, true);

function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   name = document.getElementById("name").value;
   favorite = document.getElementById("favorite").value;
   why_like = document.getElementById("why_like").value;
   help = document.getElementById("help").value;
   satis = document.getElementById("satis").value;
   change = document.getElementById("change").value;
   review = document.getElementById("review").value;
   review = review.trim();
   if (review ==  '') {
	   review = "N/A";
   }
   // Pass values to addNewPost()
   addNewPost(name, favorite, why_like, help, satis, change, review);
   reset();
}

function addNewPost(name, favorite, why_like, help, satis, change, review) {
   //Creates elements and class names
   var newDiv = document.createElement("div"); 
   newDiv.className = "post";
   var newp = document.createElement("p");
   newp.className = "name";
   var newp2 = document.createElement("p");
   newp2.className = "question";
   var newp3 = document.createElement("p");
   newp3.className = "question";
   var newp4 = document.createElement("p");
   newp4.className = "question";
   var newp5 = document.createElement("p");
   newp5.className = "question";
   var newp6 = document.createElement("p");
   newp6.className = "question";
   var newp7 = document.createElement("p");
   newp7.className = "question";
   //Add text to elements
   var nametext = document.createTextNode(name);
   var favoritetext = document.createTextNode("Favorite search engine: " + favorite);
   var why_liketext = document.createTextNode("Why do you like " + favorite + ": " + why_like);
   var helptext = document.createTextNode("Has the website helped you understand " + favorite + ": " + help);
   var satistext = document.createTextNode("How satisfied are you with our website: " + satis );
   var changetext = document.createTextNode("After learning, have you considered changing search engines: " + change);
   var reviewtext = document.createTextNode("Review: " + review);
   //Append text to elements
   newp.appendChild(nametext);
   newp2.appendChild(favoritetext);
   newp3.appendChild(why_liketext);
   newp4.appendChild(helptext);
   newp5.appendChild(satistext);
   newp6.appendChild(changetext);
   newp7.appendChild(reviewtext);
   //Append p's to div
   newDiv.appendChild(newp);
   newDiv.appendChild(newp2);
   newDiv.appendChild(newp3);
   newDiv.appendChild(newp4);
   newDiv.appendChild(newp5);
   newDiv.appendChild(newp6);
   newDiv.appendChild(newp7);
   var newSection = document.getElementById("postList");
   newSection.appendChild(newDiv);
   
}

function reset() {
    document.getElementById("postForm").reset();
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};