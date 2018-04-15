function UserAction() {
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ITSM").innerHTML = this.responseText;
    }
  };
    xhttp.open("POST", "https://itsm.srv.mhp.com.ua/webservices/rest.php?version=1.3", truez);
xhttp.setRequestHeader('auth_pwd','21Q04w19e71r');
xhttp.send('auth_pwd:21Q04w19e71r');
xhttp.setRequestHeader("auth_user", "m.vasylev");
xhttp.send("21Q04w19e71r");

    xhttp.send();
}
