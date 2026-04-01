function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();


  if (isNaN(candi)) {
    return false;
  }

 
  let num = parseInt(candi);

 
  if (num < 1 || num > 10) {
    return false;
  }

  return true;
}

function validateForm(){

    if(!checkSID()){
        alert("Invalid value for Student ID!");
        document.getElementById("sid").focus();
        return false;
    }

    if(!checkCandiNo()){
        alert("Invalid value for Candidate No!!");
        document.getElementById("candi").focus();
        return false;
    }

    alert("Your input data passes validation!!");
    return true;
}