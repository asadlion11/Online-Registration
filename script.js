function checkingForm(){
    var firstName = document.forms["myForm"]["firstName"].value;
    var middleName = document.forms["myForm"]["middleName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var phone = document.forms["myForm"]["phone"].value;
    if(firstName == null || firstName == '' && 
        middleName == null || middleName == '' &&
        lastName == null || lastName == ''){
        alert('Names are required');
        return false;
    }
    else if(firstName.length < 3 ){
        alert('First Name must be at least 3 characters');
        return false;
    }
    else if(middleName.length < 3){
        alert('Middle Name must be at least 3 characters');
        return false;
    }
    else if(lastName.length < 3){
        alert('Last Name must be at least 3 characters');
        return false;
    }
    else{
        alert('Submitted');
        return true;
    }
}