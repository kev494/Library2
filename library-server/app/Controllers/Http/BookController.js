'use strict'
const Book = use('App/Models/Book')

class BookController {
    async index({ response }) {
        try {
            const books = await Book.all()

            return response.status(200).json({
                status: 'success',
                data: books
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'There was an error fetching books from database'
            })
        }
    }

    async store({ request, response }) {
        const { title, author_id, description, genres } = request.post()

        try {
            const book = await Book.create({ title, author_id, description })
            await book.genres().attach(genres)
            book.genres = await book.genres().fetch()

            return response.status(200).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Book could not be created'
            })
        }
    }

    async show({ params, response }) {
        try {
            const book = await Book
                .query()
                .where('id', params.id)
                .with('genres')
                .firstOrFail()

            return response.status(200).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Book was not found in database'
            })
        }

    }

    async update({ params, response, request}) {
        const {title, author_id, description, genres } = request.post()
        
        try {
            const book = await Book.find(params.id)

            book.title = title || book.title
            book.author_id = author_id || book.author_id
            book.description = description || book.description
            book.save()
            await book.genres().detach()
            await book.genres().attach(genres)
            book.genres = await book.genres().fetch
            
            return response.status(200).json({
                status: 'success',
                data: book
            })

        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Book was not updated'
            })

        }
    }

    async delete({params, response}) {
        try {
            const book = await Book.find(params.id)
            await book.delete()

            return response.status(200).json({
                status: 'success',
                message: 'Book sucessfully deleted'
            })
        } catch(error) {
            return response.status(400).json({
                status: 'error',
                message: 'Book could not be deleted'
            })
        }
    }
}

module.exports = BookController
