const name = document.getElementById("student-name");
const rollNo = document.getElementById("univesity-rollno");
const address = document.getElementById("address");
const date = document.getElementById("date");

window.onload = () => {
    name.innerHTML = "Santosh Kumar Morya";
    rollNo.innerHTML = "201500620";
    address.innerHTML = "GLA University, Mathura";
    date.innerHTML = new Date().toDateString();
}

