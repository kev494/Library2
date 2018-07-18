'use strict'

const Schema = use('Schema')

class GenreSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.increments()
      table.text('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenreSchema
