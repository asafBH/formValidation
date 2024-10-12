function validateForm() {
  let flag = true;
  const onlyLetters = /^[a-zA-Z]+$/;
  const name = document.forms["myform"]["name"].value.trim();
  const address = document.forms["myform"]["address"].value.trim();

  const nameError = document.getElementById("nameError");
  const addressError = document.getElementById("addressError");

  // Clear previous error messages
  nameError.innerHTML = "";
  addressError.innerHTML = "";

  // Validate Name
  if (name.length < 5) {
    nameError.innerHTML = "Name must be at least 5 letters and not empty.";
    flag = false;
  } else if (!onlyLetters.test(name)) {
    nameError.innerHTML = "Use only letters.";
    flag = false;
  }

  // Validate Address
  if (address.length < 5 || address.length > 50) {
    addressError.innerHTML = "Address must be between 5 and 50 characters.";
    flag = false;
  }

  return flag;
}
