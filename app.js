let form = document.getElementById("form");

form.addEventListener("submit", addToLocalStorage);

function addToLocalStorage(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let mail = e.target.mail.value;
    let phone = e.target.phone.value;
    
    e.target.name.value = "";
    e.target.mail.value = "";
    e.target.phone.value = "";

    let person = {
        name: name,
        mail: mail,
        phone: phone
    };
    
    person_serialized = JSON.stringify(person);

    let blank_space = document.getElementById("blank-space");
    blank_space.innerHTML = person_serialized;
    localStorage.setItem(mail, person_serialized);
}