fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">

            </div>
            <div class="name-container">
                  <span class="firstName">${el.fisrt_name}</span>
                  <span class="lastName">${el.last_name}</span>

            </div>
            <p class="email">${el.email}</p>
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');

  })
