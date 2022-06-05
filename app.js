const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const image = document.querySelector('.profile-top img');
const sex = document.querySelector('#sex');
const name = document.querySelector('#name');
const generateUser = document.querySelector('button');

// alert('Click on the generate new user to get started');

getUser = async () => {
    data = await fetch('https://randomuser.me/api/');
    response = await data.json();

    // To get country info(flag)
    data2 = await fetch(`https://restcountries.com/v3.1/name/${response.results[0].location.country}`);
    response2 = await data2.json();

    return [response.results[0], response2[0]]
}

updateUI = (data) => {

    // localStorage
    localStorage.setItem('title', data[0].name.title);
    localStorage.setItem('firstname', data[0].name.first);
    localStorage.setItem('lastname', data[0].name.last);
    localStorage.setItem('avatar', data[0].picture.medium);
    localStorage.setItem('gender', data[0].gender.toUpperCase());
    localStorage.setItem('phone', data[0].phone);
    localStorage.setItem('email', data[0].email);
    localStorage.setItem('country', data[0].location.country);
    localStorage.setItem('flag', data[1].flags.png);





    name.innerHTML = `<p>
                        <span>${localStorage.getItem('title')}</span>
                        <span>${localStorage.getItem('firstname')}</span>
                        <span>${localStorage.getItem('lastname')}</span>
                        </p>`
    sex.innerHTML = `<span>${localStorage.getItem('gender')}</span>`
    phone.innerHTML = `<span class="material-icons">call</span> <span>${localStorage.getItem('phone')}</span>`
    email.innerHTML = `<span class="material-icons">email</span> <span>${localStorage.getItem('email')}</span>` 
    country.innerHTML = `<span class="material-icons">location_on</span> <span>${localStorage.getItem('country')} <img src = "${localStorage.getItem('flag')}" width = "20px" height = "15px" alt = ""></span>`
    image.setAttribute('src', localStorage.getItem('avatar'))
    image.setAttribute('title', data[0].name.first)

}


generateUser.addEventListener('click', () => {
    getUser()
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});


// Showing data from localStorage

if(localStorage.length) {
    name.innerHTML =`<p>
                        <span>${localStorage.getItem('title')}</span>
                        <span>${localStorage.getItem('firstname')}</span>
                        <span>${localStorage.getItem('lastname')}</span>
                    </p>`;
    sex.innerHTML = `<span>${localStorage.getItem('gender')}</span>`;
    phone.innerHTML = `<span class="material-icons">call</span> <span>${localStorage.getItem('phone')}</span>`;
    email.innerHTML = `<span class="material-icons">email</span> <span>${localStorage.getItem('email')}</span>` ;
    country.innerHTML = `<span class="material-icons">location_on</span> <span>${localStorage.getItem('country')} <img src = "${localStorage.getItem('flag')}" width = "20px" height = "15px" alt = ""></span>`;
    image.setAttribute('src', localStorage.getItem('avatar'));
    image.setAttribute('title', localStorage.getItem('title'));
}

    