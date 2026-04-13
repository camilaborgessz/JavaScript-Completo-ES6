class Button {
  constructor(text, color) {
    this.text = text
    this.color = color
  }
  element(){
    const button = document.createElement('button')
    button.style.backgroundColor = (this.color)
    button.innerText = (this.text)

    document.body.appendChild(button)
  }
}

const blueButton = new Button('Aceitar', "green")
blueButton.element()
console.log(blueButton);
