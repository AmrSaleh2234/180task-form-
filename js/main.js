
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const radio = document.getElementsByName('gender');
const form = document.getElementById('form');
console.log(phone.value);
form.addEventListener('submit', (e) => {
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;
    if (username.value === '' || name.value === null ) {
        document.getElementById('usernameSpan').style.visibility = 'visible';
        e.preventDefault();

    } else {
        document.getElementById('usernameSpan').style.visibility = 'hidden';
    }
    if (!(phone.value.match(phoneno))) {
        document.getElementById('phoneSpan').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.getElementById('phoneSpan').style.visibility = 'hidden';
    }

    if (!(email.value.match(mailformat)|| !(email. valueOf('@')))) {
        document.getElementById('emailSpan').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.getElementById('emailSpan').style.visibility = 'hidden';
    }


    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            flag += 1;
            break;
        }
    }

    if (flag == 0) {

        document.getElementById('genderSpan').style.visibility = 'visible';
        e.preventDefault();
    } else {
        document.getElementById('genderSpan').style.visibility = 'hidden';
    }


})

