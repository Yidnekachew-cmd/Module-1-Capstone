// storing featured content in the form of object with in an array.
const featured = [
  {
    image: './images/ermi.jpg',
    listTitle: 'Ermias Teshome',
    subTitle: 'CEO at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
  {
    image: './images/gedi.jpg',
    listTitle: 'Gedion Tarekegn',
    subTitle: 'Director at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
  {
    image: './images/sami.jpg',
    listTitle: 'Samuel Zerihun',
    subTitle: 'Coordinator at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
  {
    image: './images/edi.jpg',
    listTitle: 'Eden Teshome',
    subTitle: 'Designer at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
  {
    image: './images/fevi.jpg',
    listTitle: 'Feven Masresha',
    subTitle: 'Event Organizer at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
  {
    image: './images/dagi.jpg',
    listTitle: 'Dagimawit Sitotaw',
    subTitle: 'Team Leader at Andy Decor',
    para: 'lorem lorem lorem lorem  lorem lorem lorem lorem',
  },
];

// Create Elements and store them in a variables.
const sectionFeature = document.getElementById('featured-page');
const container = document.createElement('div');
container.className = 'featured-container';
const heading = document.createElement('h2');
const line = document.createElement('hr');
heading.className = 'featured-title';
heading.textContent = 'Featured Speakers';
const unOrderedList = document.createElement('ul');
unOrderedList.className = 'featured-group';
const listOne = document.createElement('li');
listOne.className = 'featured-item-1';
const listTwo = document.createElement('li');
listTwo.className = 'featured-item-2';
const btnLess = document.createElement('button');
btnLess.className = 'featured-btn btn-1';
btnLess.textContent = 'Less';
btnLess.type = 'button';
const btn = document.createElement('button');
btn.textContent = 'More';
btn.className = 'featured-btn';
btn.type = 'button';

// adding features dynamically using forloop fot the mobile part
for (let i = 0; i <= 2; i += 1) {
  const mobile = window.matchMedia('(max-width: 768px)');
  if (i === 2 && mobile.matches) {
    listOne.innerHTML += `<div class="featured-item last-featured">
      <div class="featured-img">
                <img src="${featured[i].image}" alt="img" />
                </div>
                <div class="featured-content">
                <h2>${featured[i].listTitle}</h2>
                <h3>${featured[i].subTitle}</h3>
                <hr />
                <p>${featured[i].para}
                </p>
                </div>
                </div>`;
  } else {
    listOne.innerHTML += `<div class="featured-item">
  <div class="featured-img">
            <img src="${featured[i].image}" alt="img" />
            </div>
            <div class="featured-content">
            <h2>${featured[i].listTitle}</h2>
            <h3>${featured[i].subTitle}</h3>
            <hr />
            <p>${featured[i].para}
            </p>
            </div>
            </div>`;
  }
}

// adding features dynamically using forloop fot the desktop part
for (let i = 3; i < featured.length; i += 1) {
  listTwo.innerHTML += `<div class="featured-item">
  <div class="featured-img">
            <img src="${featured[i].image}" alt="img" />
            </div>
            <div class="featured-content">
            <h2>${featured[i].listTitle}</h2>
            <h3>${featured[i].subTitle}</h3>
            <hr />
            <p>${featured[i].para}
            </p>
            </div>
            </div>`;
}

// Add event listener for the less button
btn.addEventListener('click', () => {
  btn.style.display = 'none';
  listOne.style.height = '100vh'.background;
  listOne.style.background = '#fff';
  listOne.style.backdropFilter = 'blur(6px)';
  for (let i = 2; i < featured.length; i += 1) {
    if (i === featured.length - 1) {
      listOne.innerHTML += `<div class="featured-item">
  <div class="featured-img">
            <img src="${featured[i].image}" alt="img" />
            </div>
            <div class="featured-content">
            <h2>${featured[i].listTitle}</h2>
            <h3>${featured[i].subTitle}</h3>
            <hr />
            <p>${featured[i].para}
            </p>
            </div>
            </div>
            `;
      listOne.appendChild(btnLess);
      btnLess.style.display = 'block';
    } else {
      listOne.innerHTML += `<div class="featured-item">
  <div class="featured-img">
            <img src="${featured[i].image}" alt="img" />
            </div>
            <div class="featured-content">
            <h2>${featured[i].listTitle}</h2>
            <h3>${featured[i].subTitle}</h3>
            <hr />
            <p>${featured[i].para}
            </p>
            </div>
            </div>
            `;
    }
  }
});

// Add event listener for the less button
btnLess.addEventListener('click', () => {
  btn.style.display = 'block';
  listOne.innerHTML = '';
  for (let i = 0; i < 2; i += 1) {
    listOne.innerHTML += `<div class="featured-item">
  <div class="featured-img">
            <img src="${featured[i].image}" alt="img" />
            </div>
            <div class="featured-content">
            <h2>${featured[i].listTitle}</h2>
            <h3>${featured[i].subTitle}</h3>
            <hr />
            <p>${featured[i].para}
            </p>
            </div>
            </div>`;
  }
  listOne.appendChild(btn);
  btnLess.style.display = 'none';
});

// appending new elements
container.appendChild(heading);
container.appendChild(line);
listOne.appendChild(btn);
unOrderedList.appendChild(listOne);
unOrderedList.appendChild(listTwo);
container.appendChild(unOrderedList);
sectionFeature.appendChild(container);
