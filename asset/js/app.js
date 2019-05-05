var massage = ""
function validateMembership() {
  var firstName = document.getElementById("firstName").value;
  alert(firstName);
  
}

function validateText(text) {
  //MINIMUM NAME SHOULD BE TWO CHARACTERS
  
  if (text.length <= 2) {
    return true;
    console.log("true")
  }
  return false
  console.log("false")
}
