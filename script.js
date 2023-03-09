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
    document.body.classList.toggle('no-scroll');
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
            <button class="prev" onclick="previous()"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button class="next" onclick="next()"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
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
      document.body.classList.toggle('no-scroll');
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
