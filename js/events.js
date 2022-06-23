export const validationInputs = {
    'name': /^[a-zA-Z0-9\_\-]{4,16}$/,
    'email': /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
}

export const validateDate = (e) =>{

    switch(e.target.name){
        case 'name':
            if (validationInputs.name.test(e.target.value)){
                document.getElementById("inputName").classList.remove("errorDate");
                document.getElementById("inputName").classList.add("correctDate");
                
            } else {
                document.getElementById("inputName").classList.remove("correctDate");
                document.getElementById("inputName").classList.add("errorDate");
            }
        break;

        case 'email':
            if (validationInputs.email.test(e.target.value)){
                document.getElementById("inputEmail").classList.remove("errorDate");
                document.getElementById("inputEmail").classList.add("correctDate");
            } else {
                document.getElementById("inputEmail").classList.remove("correctDate");
                document.getElementById("inputEmail").classList.add("errorDate");
            }
    }
}