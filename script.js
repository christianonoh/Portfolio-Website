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
    name: 'Travel & Workshop',
    description:
      'Welcome to Travel and Workshop, a website that brings together travel, adventure, and learning in one seamless platform. Our website allows users to easily register for thrilling events and gain access to detailed information about speakers, event descriptions, and program schedules. We also offer valuable partnerships to enhance your experience. Discover new opportunities for education, adventure, and exploration with our wide range of offerings.',
    imgSrc: [
      'assets/images/travel_workshop1.webp',
      'assets/images/travel_workshop2.webp',
      'assets/images/travel_workshop3.webp',
      'assets/images/travel_workshop4.webp',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'https://christianonoh.github.io/travel-workshop/',
    linkSource: 'https://github.com/christianonoh/travel-workshop',
  },
  {
    id: 'project2',
    name: 'Film Fussion',
    description:
      'Film Fussion is an innovative web-based platform that serves as a rich treasure trove of TV shows and movies. This dynamic website empowers users to not only explore an extensive database but also actively engage with their favorite films and shows. Here, users can effortlessly rate, comment, and like their favorite movies, fostering a vibrant community of movie aficionados. Join us to discover, discuss, like, and dive deeper into the world of entertainment!',
    imgSrc: [
      'assets/images/filmfussion1.webp',
      'assets/images/filmfussion4.webp',
      'assets/images/filmfussion2.webp',
      'assets/images/filmfussion3.webp',
    ],
    technologies: ['HTML/CSS', 'Webpack', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'https://filmfussion.netlify.app/',
    linkSource: 'https://github.com/christianonoh/film-fussion',
  },
  {
    id: 'project3',
    name: 'Weather360',
    description:
      'Welcome to Weather360, your ultimate destination for comprehensive and precise weather insights spanning the entire globe. Our cutting-edge web application empowers you to effortlessly access up-to-the-minute weather updates, detailed forecasts, and a wealth of pertinent information for cities worldwide. Explore Weather360 and stay one step ahead with the weather information you need at your fingertips.',
    imgSrc: [
      'assets/images/weather1.png',
      'assets/images/weather2.png',
      'assets/images/weather3.png',
      'assets/images/weather4.png',
    ],
    technologies: ['React', 'CSS3', 'Webpack'],
    seeProject: 'See Project',
    linkLive: 'https://theweather360.onrender.com/',
    linkSource: 'https://github.com/christianonoh/weather360',
  },
  {
    id: 'project4',
    name: 'Coin Mapper',
    description:
      'CoinMapper is a user-friendly and intuitive budget management application built with Ruby on Rails. This app is designed to assist you in effortlessly managing your finances, helping you track expenses, map income, and gain control over your financial journey. Start your path to financial success today with CoinMapper.',
    imgSrc: [
      'assets/images/coinmapper3.webp',
      'assets/images/coinmapper1.webp',
      'assets/images/coinmapper2.webp',
      'assets/images/coinmapper4.webp',
    ],
    technologies: ['HTML/SCSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'https://coinmapper.onrender.com/',
    linkSource: 'https://github.com/christianonoh/coin-mapper',
  },
  {
    id: 'project5',
    name: 'VECS School',
    description:
      'Welcome to VECS School! Our platform is designed to make your learning journey easier and more streamlined. By creating an account, you gain access to a comprehensive suite of features that allow you to track, reserve, and modify your course selections. With just a few clicks, you can explore a wide range of courses and sign up for the ones that align with your learning goals.',
    imgSrc: [
      'assets/images/vecs-home.webp',
      'assets/images/vecs-reserve.webp',
      'assets/images/vecs-login.webp',
      'assets/images/vecs-courses.webp',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'React'],
    seeProject: 'See Project',
    linkLive: 'https://vecs-school.onrender.com',
    linkSource: 'https://github.com/smunoz1988/vecs-school-frontend',
  },
  {
    id: 'project6',
    name: 'Math Wizardry',
    description:
      'Introducing Math Wizardry: Your one-stop destination for seamless calculations and a daily dose of mathematical inspiration! Math Wizardry is a dynamic Single Page App (SPA) thoughtfully crafted with React, a leading JavaScript library for creating captivating user interfaces. Experience the magic of mathematics with interactive calculations and discover nuggets of wisdom through an array of thought-provoking math-related quotes.',
    imgSrc: [
      'assets/images/mathwizard4.webp',
      'assets/images/mathwizard2.webp',
      'assets/images/mathwizard3.webp',
      'assets/images/mathwizard4.webp',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'https://mathwizard.onrender.com',
    linkSource: 'https://github.com/christianonoh/math-wizardry',
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
          <div class="pop-img-container">
          <img id="project-img" class="project-img" src="${projectInfos[index].imgSrc[0]}" alt="">
          </div>
          <div class="popup-btn">
            <button class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
          </div>
        </div>

        <p class="notes">
        ${projectInfos[index].description}
        </p>
        <div class="pop-btns">
          <a href="${projectInfos[index].linkLive}" target="_blank" class="see-project more-info light-btn" role="button">Demo <i class="fa fa-external-link" aria-hidden="true"></i></a> 
          <a href="${projectInfos[index].linkSource}" target="_blank" class="see-project light-btn" role="button">Repo <i class="fa fa-github" aria-hidden="true"></i></a> 
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
const userMessage = form.elements['user-message'];

// Access stored form data if present
const storedData = JSON.parse(localStorage.getItem('formData'));
if (storedData) {
  fullName.value = storedData.name;
  emailAddress.value = storedData.email;
  // userMessage.value = storedData.usermessage;
}

// Save formData
function saveData() {
  const formData = {
    name: fullName.value,
    email: emailAddress.value,
    usermessage: userMessage.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}
fullName.addEventListener('input', saveData);
emailAddress.addEventListener('input', saveData);
userMessage.addEventListener('input', saveData);
