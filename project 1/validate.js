function validate(){
    var result="";
    result+=validateName();
    result+=validateEmail();
    result+=validatePassword();
    result+=validateTerms();

    if(result=="") return true;

    alert("Validation Result: \n\n"+result);
    return false;
}

function validateName(){
    var name=document.getElementsByName("name")[0].Value;
    if(name.length<=3)
        return "Name shoild be atleast three charecter.\n";
    return "";
}

function validateEmail(){
    var email=valueOf("email");
    var retype=valueOf("retype_email");

    if(email.indexOf('@')==-1)
        return "Email should be a valid address.\n";
    return "";
}

function validatePassword(){
    var password= valueOf("password");
    var retype=valueOf("retype_password");

    if(password.length<=6)
        return "Password should be atleast 6 charecter.\n";

    if(password!=retype)
        return "Password do not match.\n";
}

function validateTerms(){
    var terms=document.getElementsByName("terms")[0];
    if(!terms.checked)
        return "Please accept the terms of service and privac policy";
    return "";
}

function valueOf(name){
    return document.getElementsByName(name)[0].value;
}