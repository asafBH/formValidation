// Make quick references to our fields.
function validateForm() {
  var flag = true;
  var onlyletters= /^[a-zA-Z]+$/;
  var Name = document.forms["myform"]["name"].value;
  var Address = document.forms["myform"]["address"].value;

  //check if name of user is less then five letters and not empty
  var min_chars_name = 5;
  if (Name.length < min_chars_name) {
    document.getElementById("nameError").innerHTML = "Name must be more then 5 letters and not empty";
    flag = false;
  }
  //check if not only letters insert to name
  else if (!onlyletters.test(Name)) {
    flag=false;
    document.getElementById("nameError").innerHTML="Use only letters";
  }

  var max_chars_address = 10;
  var min_chars_address = 1;
  
  //check if address is more then ten letters and not empty
  if (Address.length > max_chars_address || Address.length < min_chars_address) {
    document.getElementById("addressError").innerHTML = "adress must be less then 10 letters and not empty";
    flag = false;
  }

  return flag;
}
