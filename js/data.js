const data = {
  // portfolioTest:[
  //   {
  //     link: "saas-sandy.vercel.app",
  //     title: "SaaS",
  //     caption: "SaaS Website",
  //     attributes: [
  //       {
  //         name: "data-item",
  //         value: "web"
  //       },
  //       {
  //         name: "data-open",
  //         value: "modal1"
  //       }
  //     ]
  //   }
  // ],
  dataPortfolioCards : [
    {
      picture:"./assets/img/saas.png",
      title:'Software as a Service',
      caption:'SaaS Website',
      attributes: [
        {
          name: "data-item",
          value: "Responsive CSS"
        },
        {
          name: "data-open",
          value: "modal1"
        }
      ]
    },
    {
      picture: './assets/img/recipes_api.png',
      title:'Recipe Collection API',
      caption:'Recipe API',
      attributes: [
        {
          name: "data-item",
          value: "Javascript"
        },
        {
          name: "data-open",
          value: "modal2"
        }
      ]
    },
    {
      picture:'./assets/img/lawfirm.png',
      title:'Lawfirm Business',
      caption:'Lawfirm Landing Page',
      attributes: [
        {
          name: "data-item",
          value: "Responsive CSS"
        },
        {
          name: "data-open",
          value: "modal3"
        }
      ]
    },
    {
      picture:'./assets/img/taskApp.png',
      title:'Super Retro Production',
      caption:'Productivity App',
      attributes: [
        {
          name: "data-item",
          value: "React"
        },
        {
          name: "data-open",
          value: "modal4"
        }
      ]
    },
    {
      picture:'./assets/img/youtube.png',
      title:'Nintendo.com Clone',
      caption:'A clone from Nintendo\'s website',
      attributes: [
        {
          name: "data-item",
          value: "Responsive CSS"
        },
        {
          name: "data-open",
          value: "modal5"
        }
      ]
    },
    {
      picture:'./assets/img/monstercat.png',
      title:'Monstercat Music Player',
      caption:'Responsive Website',
      attributes: [
        {
          name: "data-item",
          value: "Responsive CSS"
        },
        {
          name: "data-open",
          value: "modal6"
        }
      ]
    },
    // {
    //   picture:'./assets/img/portfolio-7.jpg',
    //   title:'UI Design',
    //   caption:'Cool Design',
    //   attributes: [
    //     {
    //       name: "data-item",
    //       value: "ui"
    //     },
    //     {
    //       name: "data-open",
    //       value: "modal7"
    //     }
    //   ]
    // },
    // {
    //   picture:'./assets/img/portfolio-8.jpg',
    //   title:'UI Design',
    //   caption:'Masterpiece',
    //   attributes: [
    //     {
    //       name: "data-item",
    //       value: "ui"
    //     },
    //     {
    //       name: "data-open",
    //       value: "modal8"
    //     }
    //   ]
    // }
  ],
  
  dataModals : [
    {
      id: "modal1",
      h3: "Saas Website",
      img: "./assets/img/saas.png",
      strongParagraph: "Mock Software as a Service Website",
      firstParagraph: "This is a mock website for a SaaS company. It is a responsive website that is built with HTML, CSS, and JavaScript. It is a single page website that has a smooth scroll effect",
      link: "https://saas-8b9b.vercel.app/"
    },
    {
      id: "modal2",
      h3: "Recipe API",
      img: "./assets/img/recipe_api.png",
      strongParagraph: "Recipe Collection App",
      firstParagraph: "This is a recipe collection app that uses an API to fetch recipes. It is a single page, responsive website that is built with HTML, CSS, and JavaScript and has a smooth scrolling effect.",
      link: "https://what-to-eat-api-v2-43z8.vercel.app/"
    },
    {
      id: "modal3",
      h3: "Small Lawfirm",
      img: "./assets/img/lawfirm.png",
      strongParagraph: "Law Firm Small business landing page",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      link: "https://mock-lawfirm.vercel.app/"
    },
    {
      id: "modal4",
      h3: "Productivity App",
      img: "./assets/img/taskApp.png",
      strongParagraph: "Super Retro Production",
      firstParagraph: "This is a productivity app that utilizes the React framework. It is a single page, responsive website that is built with HTML, CSS, and Javascript.  This page also won the Devslopes Hackathon.",
      link: "https://prod-app-hackathon.vercel.app/"
    },
    {
      id: "modal5",
      h3: "Nintendo Clone",
      img: "./assets/img/youtube.png",
      strongParagraph: "Nintendo Clone Website",
      firstParagraph: "This is a clone of Nintendo's website. It is a single page that is built with HTML and CSS.",
      link: "https://mock-nintendo.vercel.app/"
    },
    {
      id: "modal6",
      h3: "Monstercat Clone",
      img: "./assets/img/monstercat.png",
      strongParagraph: "Monstercat Website Clone",
      firstParagraph: "This is a clone of Monstercat's website. It is a single page that is built with HTML and CSS.",
      link: "https://monstercat-clone-six.vercel.app/"
    },
    // {
    //   id: "modal7",
    //   h3: "UI Development",
    //   img: "./assets/img/portfolio-7.jpg",
    //   strongParagraph: "My first Awesome Website",
    //   firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    //   secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    // },
    // {
    //   id: "modal8",
    //   h3: "UI Development",
    //   img: "./assets/img/portfolio-8.jpg",
    //   strongParagraph: "My first Awesome Website",
    //   firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    //   secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    // },
  ]

}

// Generate Portfolio Cards
const portfolioPanel = document.querySelector('.portfolio-panel');
const portfolioCard = 'portfolio-card';
const portfolioCardBody = 'portfolio-card-body';
const cardModal = 'card-modal';



for(let i = 0; i< data.dataPortfolioCards.length; i++){
  let card = document.createElement('div');
  card.classList.add(portfolioCard);
  card.setAttribute(data.dataPortfolioCards[i].attributes[0].name, data.dataPortfolioCards[i].attributes[0].value);
  card.setAttribute(data.dataPortfolioCards[i].attributes[1].name, data.dataPortfolioCards[i].attributes[1].value);
  card.innerHTML =
  `<div class="portfolio-card-body">
    <div class="title_bar"><i class="fa-regular fa-square-plus"></i></div>
    <img src=${data.dataPortfolioCards[i].picture} alt="portfolio icon">
    <div class='card-modal'>
      <div>${data.dataPortfolioCards[i].title}</div>
      <h3>${data.dataPortfolioCards[i].caption}</h3>
    </div>
  </div>`;
  portfolioPanel.appendChild(card);
}

// Generate corresponding modals
const main = document.querySelector('.site-wrapper');
const modal = 'modal';

for(let i = 0; i< data.dataModals.length; i++){
  let modalElement = document.createElement('div');
  modalElement.classList.add(modal);
  modalElement.setAttribute('id', data.dataModals[i].id);
  modalElement.setAttribute('data-animation', "slideDown");
  modalElement.innerHTML =
  `<div class="modal-dialog">
    <header class="modal-header">
      <h3>${data.dataModals[i].h3}</h3>
      <i data-close class="fas fa-times"></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img src=${data.dataModals[i].img} alt="portfolio icon">
      </div>
      <div class="text-body">
        <p><strong>${data.dataModals[i].strongParagraph}</strong><p>
        <p>${data.dataModals[i].firstParagraph}<p>
        <a href="${data.dataModals[i].link}">Click to see more ></a>
      </div>
    </div>
  </div>`;
  main.appendChild(modalElement);
}
