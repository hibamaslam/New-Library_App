function validate()

    {
    
        var errorMessage="";
        let regexpname = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
        var regexppwd=/^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{6,20}$/;
        var username=document.getElementById('username');
        // var username=document.forms["frmouter"]["username"].value;	
        var pwd = document.getElementById('password');
        // var pwd=document.forms["frmouter"]["password"].value;	
        
        // Email validation

        if (username.value==null || username.value=="")
            {
                errorMessage += "username is required.\ ";
            }
        if (regexpname.test(username.value) == false)
            {
                errorMessage += "Please enter a valid username.\ ";
            }
         //Password verification

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
               errorMessage += "Please enter a valid password.\ ";
            }

    if (errorMessage !="")
         {
            alert(errorMessage);
            return false;
         }
     else
    return true;
}