function validate()

    {
    
        var errorMessage="";
        var regexp =/^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)?(\.\w{2,3})+$/;
        var regexppwd=/^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{6,20}$/;
        var email=document.forms["frmouter"]["email"].value;	
        var pwd=document.forms["frmouter"]["password"].value;	
        
        // Email validation

        if (email==null || email=="")
            {
                errorMessage += "Email address is required.\ ";
            }
        if (regexp.test(email) == false)
            {
                errorMessage += "Please enter a valid email address.\ ";
            }
         //Password verification

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