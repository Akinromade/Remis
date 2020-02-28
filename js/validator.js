
const form = document.querySelector(".get_a_quote_form");

form.addEventListener("submit" , ($event) => {
    let formData = {};
    $event.preventDefault();
    let inputFields = document.getElementsByTagName("input");
    for(let fieldIndex = 0; fieldIndex < inputFields.length; fieldIndex++){
        const value =  inputFields[fieldIndex].value;
        formData[inputFields[fieldIndex].id] = value;
    }
});


form.addEventListener('input' , (event) => {

    const nameError = document.querySelector(".nameError");
    const emailError = document.querySelector(".emailError");
    const companyError = document.querySelector(".companyError");
    const phoneNumberError = document.querySelector(".phoneNumberError");
    const addressError = document.querySelector(".addressError");
    const stateError = document.querySelector(".stateError");
    const requestError = document.querySelector(".requestError");

    if(event.target.id === 'name'){
        if(event.target.value === ''){
            event.target.classList.add("redBorder");
            nameError.style.display = "inline";
        }else{
            event.target.classList.remove("redBorder");
            nameError.style.display = "none";
        }
    }
    else if(event.target.id === "email"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            emailError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            emailError.style.display = "none";
        }
    }
    else if(event.target.id === "company"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            companyError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            companyError.style.display = "none";
        }
    }
    else if(event.target.id === "address"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            addressError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            addressError.style.display = "none";
        }
    }
    else if(event.target.id === "phoneNumber"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            phoneNumberError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            phoneNumberError.style.display = "none";
        }
    }
    else if(event.target.id === "state"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            stateError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            stateError.style.display = "none";
        }
    }
    else if(event.target.id === "request"){
        if(event.target.value === ""){
            event.target.classList.add("redBorder");
            requestError.style.display = "inline";
        }else {
            event.target.classList.remove("redBorder");
            requestError.style.display = "none";
        }
    }
})

