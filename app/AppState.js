import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/House').House[]}*/
  houses = [
    new House ({
      address: '123 Somewhere Way',
      bathrooms: '2-1/2',
      bedrooms: '4',
      color: 'White',
      image: 'https://designingidea.com/wp-content/uploads/2020/05/house-with-beige-exterior-paint-black-front-door.jpg',
      price: 750000,
      squareFoot: 2400,
      year: 2007
    })
  ]
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job ({
      company: 'Fancy Spares',
      experience: 'If you don\'t know anything about spares, GET OUT!',
      hours: '50/week',
      image: 'https://www.spares.se/upload/LOGO.png',
      position: 'Spare Expert (replacement)',
      salary: '$8 an hour',
      url: 'https://thesecatsdonotexist.com/'
    })
    
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
