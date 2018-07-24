'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')


  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: 'admin',
      email: 'admin@admin.ch',
      password: 'secret'
    }
  })


Factory.blueprint('App/Models/Genre', (faker) => {
  return {
    name: faker.word()
  }

})

Factory.blueprint('App/Models/Author', (faker) => {
  return {
    name: faker.name(),
    bio: faker.sentence()
  }

})
