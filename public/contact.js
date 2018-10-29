function checkform(){
    
    if(!(document.getElementById("m").checked) && !(document.getElementById("f").checked) && !(document.getElementById("o").checked)){
       alert("please choose one option");
        return false;
    }
    else{
        return true;
    }
}