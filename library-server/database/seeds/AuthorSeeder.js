'use strict'

/*
|--------------------------------------------------------------------------
| AuthorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class AuthorSeeder {
  async run () {
    const author1 = await Factory.model('App/Models/Author').create()
    const author2 = await Factory.model('App/Models/Author').create()
  }
}

module.exports = AuthorSeeder
