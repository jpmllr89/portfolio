const open = "open";
const root = document.documentElement;
const active = "active";
const setActive = (e, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
    e.classList.add(active);
  } else {
    e.classList.add(active);
  }
};
/*Modal*/

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const cardButton = document.querySelectorAll(".fa-square-plus");

// Full site modal open buttons
for (const el of openModal) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    event.preventDefault();
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// Portfolio

const dataFilter = "[data-filter]";
const filterLink = document.querySelectorAll(dataFilter);
const portfolioData = "[data-item]";
const portfolioItems = document.querySelectorAll(portfolioData);

for (const e of filterLink) {
  e.addEventListener("click", function () {
    setActive(e, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Search bar logic

const searchBox = document.querySelector("#search");

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Individual Modal
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
