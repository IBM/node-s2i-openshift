var urlfield = document.getElementById('url');
var cobolbutton = document.getElementById('cobolbutton');
var javabutton = document.getElementById('javabutton');
var localbutton = document.getElementById('localbutton');

function checkurl() {
  if (validURL(urlfield.value)) {
    cobolbutton.style.opacity = 1;
    javabutton.style.opacity = 1;
  } else {
    cobolbutton.style.opacity = 0.3;
    javabutton.style.opacity = 0.3;
  }
}


function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}


function chooseJava() {
  if (validURL(urlfield.value)) {

    localbutton.classList.remove("settingsbuttonselected");
    cobolbutton.classList.remove("settingsbuttonselected");
    javabutton.classList.add('settingsbuttonselected');
    sessionStorage.setItem("patientUImode", 3);

    console.log('clicked java');


    var url = "./mode";
    var params = "mode=" + 2 + "&url=" + urlfield.value;

    var http = new XMLHttpRequest();

    http.open("POST", url + "?" + params, true);

    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {

        // sessionStorage.removeItem(patientid);
        // sessionStorage.removeItem(patientusername);
        sessionStorage.setItem("patientUImode", 3);

        window.location = '/login.html';

      }
    }
    http.send(null);
  }
}

function chooseCobol() {
  if (validURL(urlfield.value)) {

    localbutton.classList.remove("settingsbuttonselected");
    javabutton.classList.remove("settingsbuttonselected");
    cobolbutton.classList.add('settingsbuttonselected');

    console.log('clicked cobol');

    var url = "./mode";
    var params = "mode=" + 2 + "&url=" + urlfield.value;

    var http = new XMLHttpRequest();

    http.open("POST", url + "?" + params, true);

    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {

        // sessionStorage.removeItem(patientid);
        // sessionStorage.removeItem(patientusername);
        sessionStorage.setItem("patientUImode", 2);

        window.location = '/login.html';

      }
    }
    http.send(null);
  }
}

function chooseLocal() {

  localbutton.classList.add("settingsbuttonselected");
  javabutton.classList.remove("settingsbuttonselected");
  cobolbutton.classList.remove('settingsbuttonselected');

  sessionStorage.setItem("patientUImode", 1);
  console.log('clicked local');
}
