function check(str) {
    if (str == "") {
      document.getElementById("u1").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("u1").innerHTML = this.responseText;
    }
    xhttp.open("GET", "profile.php?q="+str);
    xhttp.send();
  }