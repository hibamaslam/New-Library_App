
function validate() 
{
    var errorMessage="";
    var uname = document.forms["frmouter"]["user_first_name"].value;
    var email = document.forms["frmouter"]["user_email"].value;
    var pwd = document.forms["frmouter"]["user_password"].value;
    var cpwd = document.forms["frmouter"]["conf_user_password"].value;
    let regexpname = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    let regexpemail = /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)?(\.\w{2,3})+$/;
    let regexppwd = /^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{6,20}$/;

console.log(uname);
console.log(email);
console.log(pwd);
console.log(cpwd);

//User name validation

if (uname==null || uname=="")
{
    errorMessage += "User name is required.\ ";
}
if (regexpname.test(uname) == false)
{
    errorMessage += "Please enter a valid user name.\ ";
}

//email validation

if (email==null || email=="")
{
    errorMessage += "Email address is required.\ ";
}
if (regexpemail.test(email) == false)
{
    errorMessage += "Please enter a valid email address.\ ";
}

//password validation

if (pwd==null || pwd=="")
{
    errorMessage += "Password is required.\ ";
}
if ((pwd.length > 20) || (pwd.length < 6))
{
    errorMessage += "Password must be more than 6 and less than 20 charachters.\ ";
}
if (regexppwd.test(pwd) == false)
{
   errorMessage += "Please enter a valid password.\ Should contain atleast one Uppercase, number and special charachter.\ ";
}

// password matching 
if (pwd !== cpwd)
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