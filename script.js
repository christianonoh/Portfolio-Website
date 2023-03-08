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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    imgSrc: ['assets/images/pexels-antoni-shkraba-4348404.jpg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project2',
    name: 'Project 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: ['assets/images/pexels-eduardo-rosas-907487.jpg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project3',
    name: 'Project 3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: ['assets/images/pexels-ivan-samkov-5676744.jpg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project4',
    name: 'Project 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: ['assets/images/pexels-lukas-57407023.jpg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project5',
    name: 'Project 5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: ['assets/images/pexels-mockupeditorcom-205316.jpg'],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    seeProject: 'See Project',
    linkLive: 'www.walmart.com',
    linkSource: 'github.com',
  },
  {
    id: 'project6',
    name: 'Project 6',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    imgSrc: ['assets/images/pexels-pixabay-39284.jpg'],
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
<img class="project-img" src="${project.imgSrc}" alt="Project 1">
  <div class="project-hover">       
  <h2 class="project-name janoth">${project.name}</h2>
  <ul class="project-tools janoth">
    <li class="project-tool">${project.technologies[0]}</li>
    <li class="project-tool">${project.technologies[1]}</li>
    <li class="project-tool">${project.technologies[2]}</li>
  </ul>
  <p class="see-project light-btn" role="button">${project.seeProject} <i class="fa fa-arrow-right fa-sm" aria-hidden="true"></i> </p>
</div>
</div>
  `;
  return ('');
});

// Pop Up 
