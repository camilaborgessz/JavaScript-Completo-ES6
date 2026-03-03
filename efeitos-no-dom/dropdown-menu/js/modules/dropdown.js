
import  outsideClick  from "./outside-click.js";

export default function initDropDown() {
  const dropdown = document.querySelectorAll('[data-dropdown]')
  dropdown.forEach(element => {
    ['touchstart', 'click'].forEach(userEvent => {
      element.addEventListener(userEvent, openDropdown)
    });
  });

  function openDropdown(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], ()=> {
      this.classList.remove('active')
    })
  }
}