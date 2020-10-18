function LoginFormEventHandler()
{
    userNameElemnt=document.getElementById("txtUserName");
    passwordElemnt=document.getElementById("txtPassword");
    errorFlag=false;

    //errorMessageElement=document.getElementById("errorMessage")
    console.log("username: "+userNameElemnt.value)
    if(userNameElemnt.value=="")
    {
      //console.log("username cannot be empty");
      alert("username cannot be empty");
      errorFlag=true;
    }
    if(passwordElemnt.value=="")
    {
      //console.log("password cannot be empty");
      alert("password cannot be empty");
      errorFlag=true;

    }
    if(errorFlag== false)
    {
        message="Thank You" +userNameElemnt.value+ "for logging";
        alert(message);
        location.href="file:///C:/Users/user/OneDrive/Desktop/Assignment/post.html"
    }
 }