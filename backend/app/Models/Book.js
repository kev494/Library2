'use strict'

const Model = use('Model')

class Book extends Model {

    author () {
        return this.belongsTo('App/Models/Author')
    }

    genres () {
        return this.belongsToMany('App/Models/Genre')
    }
}



module.exports = Book
