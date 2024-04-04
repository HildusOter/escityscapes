console.log('Hello!');
function setStage(newStage) {
    const form = document.querySelector("#multi-step-form");
    
    form.classList.remove("current-form-1");
    form.classList.remove("current-form-2");
    form.classList.remove("current-form-3");
}
    
function submitForm() {
        console.log("Submitting form");
}

