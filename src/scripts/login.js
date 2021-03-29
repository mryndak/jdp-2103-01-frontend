// LOGIN
let a = document.getElementById("submit-btn");
if (a !== null) {
    document.getElementById("submit-btn").addEventListener('click', function () {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === "" || password === "") {
            alert('Uzupełnij login lub hasło');
        } else {
            checkUserInput(username, password);
        }
        event.preventDefault();
    });
}

function checkUserInput(username, password) {
    fetch(endpoints.login.url)
        .then(function (response) {
            return response.json();
        })
        .then(function (loginCheck) {
            if (loginCheck.loggedIn === true) {
                window.location.replace("/admin-products");
            }
        });
};