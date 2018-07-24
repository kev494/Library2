'use strict'

const Schema = use('Schema')

class BookGenreSchema extends Schema {
  up () {
    this.create('book_genre', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.integer('genre_id').unsigned()
      table.foreign('book_id').references('books.id').onDelete('cascade')
      table.foreign('genre_id').references('genres.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_genre')
  }
}

module.exports = BookGenreSchema
