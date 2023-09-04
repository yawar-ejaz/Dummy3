let form = document.getElementById("form");

form.addEventListener("submit", addToLocalStorage);

function addToLocalStorage(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let mail = e.target.mail.value;
    let phone = e.target.phone.value;
    console.log(name);
    console.log(mail);
    console.log(phone);

    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
    localStorage.setItem("phone", phone);
}