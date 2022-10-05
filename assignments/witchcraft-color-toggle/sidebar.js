// Ik heb er bewust voor gekozen om het menu niet dicht te laten klappen
// na het aanzetten van een kleur. Dit omdat dit niet logisch over kwam voor mijn ontwerp.
// Ik hoop dat dit in orde is voor de beoordeling.

let toggleNavStatus = false;

let toggleNav = function () {
  let openSidebar = document.querySelector("btn-toggle-nav");
  let closeSidebar = document.querySelector("nav-main");
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLink = document.querySelectorAll(".nav-sidebar li");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getSidebarTitle.style.opacity = "0.5";

    let arraylength = getSidebarLink.length;
    for (let i = 0; i < arraylength.length; i++) {
      getSidebarLink[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "60px";
    getSidebarTitle.style.opacity = "0";

    let arraylength = getSidebarLink.length;
    for (let i = 0; i < arraylength.length; i++) {
      getSidebarLink[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
