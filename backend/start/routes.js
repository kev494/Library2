'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/signup', 'UserController.signup')
Route.post('/login', 'UserController.login')

Route.group(() => {
  Route.get('/me', 'UserController.me')
  Route.put('/update_profile', 'UserController.updateProfile')
  Route.put('/change_password', 'UserController.changePassword')
})
  .prefix('account')
  .middleware(['auth:jwt'])

Route.group(() => {
  Route.post('books', 'BookController.store')
  Route.get('books','BookController.index')
  Route.put('books/:id', 'BookController.update')
  Route.get('books/:id', 'BookController.show')
  Route.delete('books/:id', 'BookController.delete')
})

Route.group(() => {
  Route.post('genres', 'GenreController.store')
  Route.get('genres','GenreController.index')
  Route.put('genres/:id', 'GenreController.update')
  Route.get('genres/:id', 'GenreController.show')
  Route.delete('genres/:id', 'GenreController.delete')
})

Route.group(() => {
  Route.post('authors', 'AuthorController.store')
  Route.get('authors','AuthorController.index')
  Route.put('authors/:id', 'AuthorController.update')
  Route.get('authors/:id', 'AuthorController.show')
  Route.delete('authors/:id', 'AuthorController.delete')
})