
export default function initDropDown() {
  const dropdown = document.querySelectorAll('[data-dropdown]')
  
  
  dropdown.forEach(element => {
    ['touchstart', 'click'].forEach(userEvent => {
      element.addEventListener(userEvent, openDropdown)
    });
  });
  
  function openDropdown(event) {
    event.preventDefault()
    this.classList.toggle('active')
    outsideClick(this ,() => {
      console.log(this);
      
    })
  }
  
  function outsideClick(element, callback) {
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick(event){
      callback()
    }
  }


}