const shortid = require('shortid')
const db = require('../db/cattable.json')

class Cat {
    constructor(cat) {
        this.id = cat.id || shortid.generate()
        this.breed = cat.breed
        this.sex = cat.sex
        this.dob = new Date(cat.dob)
        this.price = parseInt(cat.price)
        this.name = cat.name.trim().toLowerCase()
    }

    save() {
        // pretending that we save it to the db
        return Promise.resolve(this)
    }



    static all(){
        return db
    }

    static find(id) {

        const catDetails = db.find(cat => {
            return cat.id === id
        })

        return new Cat(catDetails)
    }
}
// const catDetails = {
//     breed: 'bengal',
//     sex: 'female',
//     dob: '2018-04-20',
//     price: '250000',
//     name: 'fluffy'
// }
// const cat = new Cat(catDetails)
// cat.price = '900000'

// console.log(cat.price)
// console.log(Cat.all())

module.exports = Cat