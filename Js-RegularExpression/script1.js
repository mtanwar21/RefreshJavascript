document.getElementById("logIn").addEventListener('click',function(){
var id= document.getElementById("Sign-upLog-in");
id.setAttribute("class" ,"signupLogin login-active ");
var id2=document.getElementById("signupForm");
id2.setAttribute("class" , "signupForm login-active-signupForm" );
var id3=document.getElementById("loginForm");
id3.setAttribute("class","loginForm login-active-loginForm" );
},false);

document.getElementById("signUp").addEventListener('click',function(){
var id=document.getElementById("Sign-upLog-in");
id.setAttribute("class" ,"signupLogin  signup-active");
var id2=document.getElementById("signupForm");
id2.setAttribute("class" , "signupForm signup-active-signupForm" );
var id3=document.getElementById("loginForm");
id3.setAttribute("class"," loginForm signup-active-loginForm" );


},false)