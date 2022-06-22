export const validationInputs = {
    'name': /^\w+[ ]\w+$/,
    'email': /^\w+[@]\w+[.]\w+$/
}

export const validateDate = (e) =>{

    switch(e.target.name){
        case 'name':
            if (validationInputs.name.test(e.target.value)){
                document.getElementById("inputName").classList.remove("errorDate");
                document.getElementById("inputName").classList.add("correctDate");

            } else {
                document.getElementById("inputName").classList.add("errorDate");
            }
        break;
    }
}