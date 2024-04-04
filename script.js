console.log('Hello!');

function setStage(newStage) {
    const form = document.querySelector("#multi-step-form");

    // Hide all stages
    document.querySelectorAll('.choice-box').forEach(function(el) {
        el.style.display = 'none';
    });

    // Show the selected stage
    document.querySelector('.stage-' + newStage).style.display = 'block';
}

function submitForm() {
    console.log("Submitting form");
}