let form = document.getElementById("form");
let blank_ul = document.getElementById("blank-ul");

blank_ul.addEventListener("click", removeOrEditItem);
function removeOrEditItem(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        const text = li.firstChild.textContent;

        person_deserialized = JSON.parse(text);
        let key = person_deserialized.mail;

        blank_ul.removeChild(li);
        localStorage.removeItem(key);
    }

    if (e.target.classList.contains("edit")) {
        let li = e.target.parentElement;
        const text = li.firstChild.textContent;

        person_deserialized = JSON.parse(text);
        let key = person_deserialized.mail;
        let name = person_deserialized.name;
        let phone = person_deserialized.phone;


        blank_ul.removeChild(li);
        localStorage.removeItem(key);
        document.getElementById("name").value = name;
        document.getElementById("mail").value = key;
        document.getElementById("phone").value = phone;
    }
}

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
    localStorage.setItem(mail, person_serialized);

    let del_btn = document.createElement("button");
    del_btn.className = "btn btn-danger btn-sm float-right delete";
    del_btn.appendChild(document.createTextNode("Delete"));
    let edit_btn = document.createElement("button");
    edit_btn.className = "btn btn-primary btn-sm float-right mr-2 edit";
    edit_btn.appendChild(document.createTextNode("Edit"));
    let new_li = document.createElement("li");
    new_li.className = "list-group-item";
    let text = document.createTextNode(person_serialized);
    new_li.appendChild(text);
    new_li.appendChild(del_btn);
    new_li.appendChild(edit_btn);
    blank_ul.appendChild(new_li);
}

function printList() {
    let l = localStorage.length;
    for (let i = 0; i < l; i++) {
        let k = localStorage.key(i);
        let val = localStorage.getItem(k);

        let del_btn = document.createElement("button");
        del_btn.className = "btn btn-danger btn-sm float-right delete";
        del_btn.appendChild(document.createTextNode("Delete"));

        let edit_btn = document.createElement("button");
        edit_btn.className = "btn btn-primary btn-sm float-right mr-2 edit";
        edit_btn.appendChild(document.createTextNode("Edit"));
        
        let new_li = document.createElement("li");
        new_li.className = "list-group-item";
        let text = document.createTextNode(val);
        new_li.appendChild(text);
        new_li.appendChild(del_btn);
        new_li.appendChild(edit_btn);
        blank_ul.appendChild(new_li);
    }
}

printList();