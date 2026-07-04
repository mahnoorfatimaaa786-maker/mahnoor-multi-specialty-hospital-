const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const age = form.querySelector('input[type="number"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if(name === "" || age === "" || phone === "" || email === ""){
        alert("⚠ Please fill in all required fields.");
        return;
    }

alert(
"✅ Success!\n\n" +
"Your Appointment Has Been Booked\n\n" +
"Thank You For Choosing\n" +
"Mahnoor Multi Specialty Hospital 💙"
);
    form.reset();

});
window.addEventListener("load", function () {

    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 3000);

});