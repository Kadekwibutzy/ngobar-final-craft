const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementProjectComplete = document.querySelector('#value-project-complete');

const elementYearsexperience = document.querySelector('#yearsexperience');

const navigationMenus = document.querySelector(".navigation_menus")

const containerValue = {
  ProjectComplete: 430,
  Yearsexperience: "30+",
};


const navMenu = [
  {
    titile: "work",
    link: "/#"
  },
  {
    titile: "About",
    link: "/#"
  },
  {
    titile: "Service",
    link: "/#"
  },
  {
    titile: "Contact",
    link: "/#"
  },

];
/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

elementProjectComplete.append(containerValue.ProjectComplete);
elementYearsexperience.append(containerValue.Yearsexperience);

