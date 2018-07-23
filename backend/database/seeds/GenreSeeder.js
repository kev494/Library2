'use strict'

/*
|--------------------------------------------------------------------------
| GenreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class GenreSeeder {
  async run () {
    const genre1 = await Factory.model('App/Models/Genre').create()
    const genre2 = await Factory.model('App/Models/Genre').create()
  }
}

module.exports = GenreSeeder
