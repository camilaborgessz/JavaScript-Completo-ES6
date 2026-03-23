class Button {
  constructor(text, background) {
    this.text = text
    this.background = background
  }
  element() {
    const htmlElement = document.createElement('button')
    htmlElement.innerText = this.text
    htmlElement.style.background = this.background
    return htmlElement
  }
  // append(target){
  //   const elementTarget = document.que
  // }
}

const blueButton = new Button('blue button', blue)

console.log(blueButton);
