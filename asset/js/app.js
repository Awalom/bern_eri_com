
function valText(text) {
  //This fanction will chech if the minimum length of a text is three characktor,
  return text.length >= 3;
}

function valForm(e) {
  // All error massages will be stored in this Array
  var massage = [];
  // validate first name is greater than three char
  var firstName = document.getElementById('firstName');
  if (!valText(firstName.value)) { // text length is less than three 
    massage.push("First name is to short. It must be at least three char");
    firstName.style.border = "2px solid red";
  }else {
    firstName.style.border = "2px initial";
  }
  // validate last name is greater than three char
  var lasttName = document.getElementById('lastName');
  if (!valText(lastName.value)) { // text length is less than three 
    massage.push("last name is to short. It must be at least three char");
    lasttName.style.border = "2px solid red";
  }
  

  for(let i = 1; i <= 3; i++ ) {

   var check = document.getElementById('check' + i);
    
    if (!check.checked) {
      massage.push("You have to check check " + i );
      check.style.outline="1px solid red"
    } else {
      check.style.outline="none";
    }
  }
  

  //call postError function and exit
  postError(massage);
  
  e.preventDefault();
  
  if(massage.length == 0) { // if there is no error massage will be empty
    alert("thank you for sending your application. You will listing from us in 24 hours.")
  }
  
  return false;

}

function postError(array) {
  let errorMassages = document.getElementById('errorMassages');
  errorMassages.innerHTML = "";
  for(let i = 0; i < array.length; i++) {
    let newLi = document.createElement('li');
    newLi.textContent = array[i];
    errorMassages.appendChild(newLi);
  }
}

document.getElementById('membership').addEventListener('submit', function(event) {
  valForm(event)
  massage = "";
});