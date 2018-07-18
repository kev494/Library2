'use strict'

const Schema = use('Schema')

class AuthorSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments()
      table.text('name').notNullable()
      table.text('bio').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorSchema
