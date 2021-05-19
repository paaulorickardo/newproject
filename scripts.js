
function validate() {

  const Email = document.getElementById('Email').value;
  isValid = true;
  if (Email == "") {
      document.getElementById("emailhelp").classList.remove("hide");
      isValid = false;
  }

  else {
      isValid = true;
      if (!document.getElementById("emailhelp").classList.contains("hide")) {
          document.getElementById("emailhelp").classList.add("hide");
          location.reload()
      }
      return isValid;

  }

}