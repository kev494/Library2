'use strict'
const Genre = use('App/Models/Genre')

class GenreController {
    async index({ response }) {
        try {
            const genres = await Genre.all()

            return response.status(200).json({
                status: 'success',
                data: genres
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'There was an error fetching genres from database'
            })
        }
    }

    async store({ request, response }) {
        const genreData = request.only(['name'])

        try {
            const genre = await Genre.create(genreData)

            return response.status(200).json({
                status: 'success',
                data: genre
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Genre could not be created'
            })
        }
    }

    async show({ params, response }) {
        try {
            const genre = await Genre.findOrFail(params.id)

            return response.status(200).json({
                status: 'success',
                data: genre
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Genre was not found in database'
            })
        }

    }

    async update({ params, response, request}) {
        const { name } = request.post()
        
        try {
            const genre = await Genre.findOrFail(params.id)

            genre.name = name || genre.name
            genre.save()

            return response.status(200).json({
                status: 'success',
                data: genre
            })

        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Genre was not updated'
            })

        }
    }

    async delete({params, response}) {
        try {
            const genre = await Genre.find(params.id)
            await genre.delete()

            return response.status(200).json({
                status: 'success',
                message: 'Genre sucessfully deleted'
            })
        } catch(error) {
            return response.status(400).json({
                status: 'error',
                message: 'Genre could not be deleted'
            })
        }
    }
}

module.exports = GenreController
