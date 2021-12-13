function  adduser(){
    var username=document.getElementById("user_name").value;

    localStorage.setItem("username",username);
    
    window.location="main.html";
}