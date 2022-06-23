export const validationInputs = {
    'name': /^[a-zA-Z0-9\_\-]{4,16}$/,
    'email': /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
}

const changeState = {
    'inputName': false,
    'inputEmail': false
}

export const validateDate = (e) =>{

    switch(e.target.name){
        case 'name':
            if (validationInputs.name.test(e.target.value) && validationInputs.name.test(e.target.value) != ""){
                document.getElementById("inputName").classList.remove("errorDate");
                document.getElementById("inputName").classList.add("correctDate");
                changeState.inputName = true;
                
            } else {
                document.getElementById("inputName").classList.remove("correctDate");
                document.getElementById("inputName").classList.add("errorDate");
                changeState.inputName = false;
            }
        break;

        case 'email':
            if (validationInputs.email.test(e.target.value)){
                document.getElementById("inputEmail").classList.remove("errorDate");
                document.getElementById("inputEmail").classList.add("correctDate");
                changeState.inputEmail = true;
            } else {
                document.getElementById("inputEmail").classList.remove("correctDate");
                document.getElementById("inputEmail").classList.add("errorDate");
                changeState.inputEmail = false;
            }
    }
    return true;
}

export const validateSubmit = (e) =>{
    if(changeState.inputName && changeState.inputEmail){
        console.log("enviado");

    }else{
        console.log("No enviado");
    }
}