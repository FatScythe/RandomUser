const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const image = document.querySelector('.profile-top img');
const sex = document.querySelector('#sex');
const name = document.querySelector('#name');
const generateUser = document.querySelector('button');



getUser = async () => {
    data = await fetch('https://randomuser.me/api/');
    response = await data.json();

    return response.results[0];
}

updateUI = (data) => {
    phone.innerHTML += `<span>${data.phone}</span>`
    email.innerHTML += `<span>${data.email}</span>` 
    country.innerHTML += `<p>${data.location.country}</p>`
    sex.innerHTML += `<p>${data.gender}</p>`
    name.innerHTML += `<p>
                        <span>${data.name.title}</span>
                        <span>${data.name.first}</span>
                        <span>${data.name.last}</span>
                        </p>`
    image.setAttribute('src', data.picture.medium)
}


generateUser.addEventListener('click', () => {
    getUser()
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
