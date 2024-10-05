const form = document.querySelector('form');
const accountsDiv = document.querySelector('div');

const accounts = [];


function Account(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

function displayAccounts(accounts) {
    accountsDiv.innerHTML = '';
    for(const acc of accounts) {
        accountsDiv.innerHTML += `<p>Account ${acc.firstname} ${acc.lastname}</p>`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;

    const acc = new Account(firstname, lastname);

    accounts.push(acc);

    displayAccounts(accounts);
})