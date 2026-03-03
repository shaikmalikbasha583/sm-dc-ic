// Initialize Materialize Components
function initMaterialize() {
  // Mobile sidenav initialization
  const sideNavElements = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sideNavElements, {
    edge: "right",
    inDuration: 250,
  });

  // Initialize ScrollSpy (Required for the 'active' state in nav)
  const scrollspies = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspies, {
    scrollOffset: 65,
  });
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.replace("z-depth-2", "z-depth-4");
    } else {
      nav.classList.replace("z-depth-4", "z-depth-2");
    }
  });

  // Dropdown initialization
  var navDropDown = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(navDropDown, {
    coverTrigger: false, // dropdown appears below the trigger
    constrainWidth: false, // allow width to fit content
  });

  // Modal initialization
  const modalElems = document.querySelectorAll(".modal");
  M.Modal.init(modalElems, {
    opacity: 0.9,
    inDuration: 300,
  });

  // Tabs initialization
  const tabElems = document.querySelectorAll(".tabs");
  M.Tabs.init(tabElems, {
    swipeable: true,
    duration: 200,
  });

  // Carousel initialization
  const carouselElems = document.querySelectorAll(".carousel");
  const carouselInstances = M.Carousel.init(carouselElems, {
    indicators: true,
    fullWidth: true,
    duration: 200,
  });

  // Guard: no carousel found
  if (!carouselInstances || carouselInstances.length === 0) return;

  const carouselInstance = carouselInstances[0];
  const carouselElem = carouselElems[0];

  // Auto rotate
  let autoRotate = setInterval(() => {
    carouselInstance.next();
  }, 3000);

  // Pause on hover
  carouselElem.addEventListener("mouseenter", () => {
    clearInterval(autoRotate);
  });

  // Resume on leave
  carouselElem.addEventListener("mouseleave", () => {
    autoRotate = setInterval(() => {
      carouselInstance.next();
    }, 3000);
  });
}

function initAfterDOMLoad() {
  initMaterialize();
}

document.addEventListener("DOMContentLoaded", initAfterDOMLoad);
