
export default function initDropDown() {
  const dropdown = document.querySelectorAll('[data-dropdown]')

  function openDropdown(event){
    event.preventDefault()
    this.classList.toggle('active')
  }

  dropdown.forEach(element => {
    ['touchstart', 'click' ].forEach(userEvent => {
      element.addEventListener(userEvent, openDropdown)
    });
  });
}