function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

  function login() {
    console.log("In login");

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var url = "./login";
    var params = "username="+username+"&password="+password;

    var http = new XMLHttpRequest();

    http.open("POST", url+"?"+params, true);

    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {
          var patientid = JSON.parse(http.responseText);

          if (patientid.id) {
            sessionStorage.setItem("patientid",patientid.id);
            sessionStorage.setItem("patientusername",username);
            window.location = '/';
            return;
          }
        }
    }
  http.send(null);
}

function logout() {
  sessionStorage.removeItem("patientid");
  sessionStorage.removeItem("patientusername");
  window.location = '/login.html';
  return;
}



// //Fade in dashboard box
// $(document).ready(function(){
//     $('.box').hide().fadeIn(1000);
//     });
//
// //Stop click event
// $('a').click(function(event){
//     event.preventDefault();
// 	});
