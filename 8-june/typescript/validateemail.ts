function validate(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    if (reg.test(email) == false) 
    {
        console.log('Invalid Email Address');
        return (false);
    }
    else{
        console.log("good")
    }
}
validate("sparashar@gmail.com")