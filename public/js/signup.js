
function validate() 
{
    var errorMessage="";
    var uname=document.getElementById('user_name');
    var email=document.getElementById('user_email');
    var pwd=document.getElementById('user_password');
    var cpwd=document.getElementById('conf_user_password');
    

    let regexpname = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    let regexpemail = /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)?(\.\w{2,3})+$/;
    let regexppwd = /^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{6,20}$/;

console.log(uname);
console.log(email);
console.log(pwd);
console.log(cpwd);

//User name validation

if (uname.value==null || uname.value=="")
{
    errorMessage += "User name is required.\ ";
}
if (regexpname.test(uname.value) == false)
{
    errorMessage += "Please enter a valid user name.\ ";
}

//email validation

if (email.value==null || email.value=="")
{
    errorMessage += "Email address is required.\ ";
}
if (regexpemail.test(email.value) == false)
{
    errorMessage += "Please enter a valid email address.\ ";
}

//password validation

if (pwd.value==null || pwd.value=="")
{
    errorMessage += "Password is required.\ ";
}
if ((pwd.length > 20) || (pwd.length < 6))
{
    errorMessage += "Password must be more than 6 and less than 20 charachters.\ ";
}
if (regexppwd.test(pwd.value) == false)
{
   errorMessage += "Please enter a valid password.\ Should contain atleast one Uppercase, number and special charachter.\ ";
}

// password matching 
if (pwd.value !== cpwd.value)
{
    errorMessage += "passwords dont match.\ ";
}

if (errorMessage !="")
         {
            alert(errorMessage);
            return false;
         }
     else
    return true;
}