
let form = document.getElementById('form');

console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let check = true;

    let nameInput = document.getElementById("inputName");
    if (!CheckName(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'name length cannot less than 3';
        check = false;
    } else {
        nameInput.nextElementSibling.classList.add('d-none')
    }

    let surnameInput = document.getElementById("inputSurname");
    if (!CheckSurname(surnameInput.value)) {
        surnameInput.nextElementSibling.classList.remove('d-none');
        surnameInput.nextElementSibling.innerText = 'surname length cannot less than 5';
        check = false;

    } else {
        surnameInput.nextElementSibling.classList.add('d-none')
    }

    let ageInput = document.getElementById("inputAge");
    if (!CheckAge(ageInput.value)) {
        ageInput.nextElementSibling.classList.remove('d-none');
        ageInput.nextElementSibling.innerText = 'age cannot less than 0';
        check = false;

    } else {
        ageInput.nextElementSibling.classList.add('d-none')
    }


    let groupInput = document.getElementById("inputGroup");

    console.log(groupInput.value.length);
    if (!CheckGroupNo(groupInput.value)) {
        groupInput.nextElementSibling.classList.remove('d-none');
        groupInput.nextElementSibling.innerText = 'group no length cannot bigger than 5 and less than 3';
        check = false;

    } else {
        groupInput.nextElementSibling.classList.add('d-none')
    }
    
    let success = document.getElementById('success');
    CheckTime(check, success);

   

})

function CheckName(value) {
    if (value.length < 3) {
        return false
    }
    return true;
}


function CheckSurname(value) {
    if (value.length < 5) {
        return false
    }
    return true;
}

function CheckAge(value) {
    if (value <= 0) {
        return false
    }
    return true;
}

function CheckGroupNo(value) {
    if (value.length > 6 || value.length < 3) {
        return false
    }
    return true;
}