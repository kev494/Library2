'use strict'

const Model = use('Model')

class Genre extends Model {
    books () {
        return this.belongsToMany('App/Models/Book')
    }
}

module.exports = Genre
