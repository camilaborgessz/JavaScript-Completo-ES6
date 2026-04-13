class Temperature {
  constructor(celsius) {
    this._celsius = celsius
  }

  get fahrenheit() {
    return this._celsius * 9/5 + 32
  }

  get kelvin() {
    return this._celsius + 273.15
  }
}

const temp = new Temperature(37)
console.log(temp.fahrenheit) // 98.6  → acessou como propriedade, calculou sozinho
console.log(temp.kelvin) 

class Person {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  set fullName(value) {
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

const person = new Person('Ana', 'Silva')
console.log(person.fullName)     // "Ana Silva"  → getter juntou os dois

person.fullName = 'João Costa'   // → setter separou e salvou nos dois campos
console.log(person.firstName)    // "João"
console.log(person.lastName)     // "Costa"

class User {
  constructor() {
    this._password = null
  }

  set password(value) {
    if (value.length < 6) {
      console.log('senha muito curta')
      return
    }
    this._password = value
    console.log('senha salva')
  }
  // sem get → ninguém consegue ler a senha de volta
}

const user = new User()
user.password = '123'        // "senha muito curta"
user.password = 'abc123'     // "senha salva"
console.log(user.password)   // undefined → não existe getter