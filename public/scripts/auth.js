var USER = JSON.parse(document.getElementById('user').value);

console.log(JSON.stringify(USER, null, 2))

function saveLocalUser() {
    setSession("USER", USER);
    window.location.href = '/';
}

saveLocalUser();