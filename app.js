const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const image = document.querySelector('.profile-top img');
const sex = document.querySelector('#sex');
const name = document.querySelector('#name');
const generateUser = document.querySelector('button');

alert('Click on the generate new user to get started');

getUser = async () => {
    data = await fetch('https://randomuser.me/api/');
    response = await data.json();

    // To get country info(flag)
    data2 = await fetch(`https://restcountries.com/v3.1/name/${response.results[0].location.country}`);
    response2 = await data2.json();

    return [response.results[0], response2[0]]
}

updateUI = (data) => {
    name.innerHTML = `<p>
                        <span>${data[0].name.title}</span>
                        <span>${data[0].name.first}</span>
                        <span>${data[0].name.last}</span>
                        </p>`
    sex.innerHTML = `<span>${data[0].gender.toUpperCase()}</span>`
    phone.innerHTML = `<span class="material-icons">call</span> <span>${data[0].phone}</span>`
    email.innerHTML = `<span class="material-icons">email</span> <span>${data[0].email}</span>` 
    country.innerHTML = `<span class="material-icons">location_on</span> <span>${data[0].location.country} <img src = "${data[1].flags.png}" width = "20px" height = "15px" alt = ""></span>`
    image.setAttribute('src', data[0].picture.medium)
    image.setAttribute('title', data[0].name.first)
}


generateUser.addEventListener('click', () => {
    getUser()
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
