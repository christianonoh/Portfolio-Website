const menuItems = document.querySelector('.menu-items');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.navbar-links');

openMenu.addEventListener('click', () => {
  menuItems.classList.add('display-mobile-menu');
});
closeMenu.addEventListener('click', () => {
  menuItems.classList.remove('display-mobile-menu');
});

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menuItems.classList.remove('display-mobile-menu');
  });
});

// Projects
const projectInfos = [
  {
    id: 'project1',
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    imgSrc: [
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-eduardo-rosas-907487.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-eduardo-rosas-907487.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project2',
    name: 'Project 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </br> </br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.   ",
    imgSrc: [
      'assets/images/pexels-eduardo-rosas-907487.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-eduardo-rosas-907487.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project3',
    name: 'Project 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: [
      'assets/images/pexels-ivan-samkov-5676744.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-ivan-samkov-5676744.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project4',
    name: 'Project 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: [
      'assets/images/pexels-lukas-57407023.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-lukas-57407023.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project5',
    name: 'Project 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: [
      'assets/images/pexels-mockupeditorcom-205316.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
      'assets/images/pexels-mockupeditorcom-205316.jpg',
      'assets/images/pexels-antoni-shkraba-4348404.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project6',
    name: 'Project 6',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: [
      'assets/images/pexels-pixabay-39284.jpg',
      'assets/images/pexels-mockupeditorcom-205316.jpg',
      'assets/images/pexels-pixabay-39284.jpg',
      'assets/images/pexels-mockupeditorcom-205316.jpg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
];

const projectContainer = document.getElementById('projects');

projectInfos.map((project) => {
  projectContainer.innerHTML += `
  <div id="${project.id}" class="project">
<img class="project-img" src="${project.imgSrc[0]}" alt="Project 1">
  <div class="project-hover">       
  <h2 class="project-name janoth">${project.name}</h2>
  <ul class="project-tools janoth">
    <li class="project-tool">${project.technologies[0]}</li>
    <li class="project-tool">${project.technologies[1]}</li>
    <li class="project-tool">${project.technologies[2]}</li>
  </ul>
  <p class="see-project more-info light-btn" role="button">${project.seeProject} <i class="fa fa-arrow-right fa-sm" aria-hidden="true"></i> </p>
</div>
</div>
  `;
  return '';
});

// Pop Up
const seeProjectButton = document.querySelectorAll('.more-info');
const popUp = document.querySelector('.popup');

seeProjectButton.forEach((p, index) => {
  p.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    popUp.classList.add('display-visible');
    popUp.innerHTML = `
  <div class="popup-container display-flex-column">
        <div class="close-pop"><i class="fa fa-times" aria-hidden="true"></i></div>
        <h2 class="project-name janoth">${projectInfos[index].name}</h2>
        <ul class="project-tools janoth">
          <li class="project-tool">${projectInfos[index].technologies[0]}</li>
          <li class="project-tool">${projectInfos[index].technologies[1]}</li>
          <li class="project-tool">${projectInfos[index].technologies[2]}</li>
        </ul>
        <div class="slider">
          <img id="project-img" class="project-img" src="${projectInfos[index].imgSrc[0]}" alt="">
          <div class="popup-btn">
            <button class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="img-icons">
          <img src="${projectInfos[index].imgSrc[0]}" alt="">
          <img src="${projectInfos[index].imgSrc[1]}" alt="">
          <img src="${projectInfos[index].imgSrc[2]}" alt="">
          <img src="${projectInfos[index].imgSrc[3]}" alt="">
        </div>
        <p class="notes">
        ${projectInfos[index].description}
        </p>
        <div class="pop-btns">
          <button class="see-project more-info light-btn">See Live <i class="fa fa-external-link" aria-hidden="true"></i> </button>
          <button class="see-project light-btn">See Live <i class="fa fa-github" aria-hidden="true"></i> </button>
        </div>
      </div>`;
    const closePop = document.querySelector('.close-pop');
    closePop.addEventListener('click', () => {
      popUp.classList.remove('display-visible');
      document.body.classList.remove('no-scroll');
    });
    // Slide controls
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const mainimg = document.getElementById('project-img');
    const images = projectInfos[index].imgSrc;
    let num = 0;
    prevBtn.addEventListener('click', () => {
      num -= 1;
      if (num < 0) {
        num = images.length - 1;
        mainimg.src = images[num];
      } else { mainimg.src = images[num]; }
    });
    nextBtn.addEventListener('click', () => {
      num += 1;
      if (num >= images.length) {
        num = 0;
        mainimg.src = images[num];
      } else { mainimg.src = images[num]; }
    });
  });
});

// Contact form
const form = document.getElementById('contact-form');
// show a message with a type of the input
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg, invalidCase) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format //
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lowerCaseChecker = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  } if (!lowerCaseChecker.test(email)) {
    return showError(input, invalidCase);
  }
  return true;
}

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';
const EMAIL_CASE = 'Please email address in lower case';
const MESSAGE_REQUIRED = 'Please enter your message ;)';

form.addEventListener('submit', (btn) => {
  // stop form submission
  btn.preventDefault();
  // validate the form
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID, EMAIL_CASE);
  const messageValid = hasValue(form.elements['user-message'], MESSAGE_REQUIRED);
  // if valid, submit the form.
  if (nameValid && emailValid && messageValid) {
    form.submit();
    form.reset();
  }
});

// Local Storage

const fullName = form.elements.name;
const emailAddress = form.elements.email;

// Access stored form data if present
const storedData = JSON.parse(localStorage.getItem('formData'));
if (storedData) {
  fullName.value = storedData.name;
  emailAddress.value = storedData.email;
}

// Save formData
function saveData() {
  const formData = {
    name : fullName.value,
    email : emailAddress.value
  }
  localStorage.setItem('formData', JSON.stringify(formData));
}
fullName.addEventListener('input', saveData);
emailAddress.addEventListener('input', saveData);
