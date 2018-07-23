'use strict'
const Author = use('App/Models/Author')

class AuthorController {
    async index({ response }) {
        try {
            const authors = await Author.all()

            return response.status(200).json({
                status: 'success',
                data: authors
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'There was an error fetching authors from database'
            })
        }
    }

    async store({ request, response }) {
        const authorData = request.only(['name', 'bio'])

        try {
            const author = await Author.create(authorData)

            return response.status(200).json({
                status: 'success',
                data: author
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Author could not be created'
            })
        }
    }

    async show({ params, response }) {
        try {
            const author = await Author.findOrFail(params.id)

            return response.status(200).json({
                status: 'success',
                data: author
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Author was not found in database'
            })
        }

    }

    async update({ params, response, request}) {
        const { name, bio } = request.post()
        
        try {
            const author = await Author.findOrFail(params.id)

            author.name = name || author.name
            author.bio = bio ||  author.bio
            author.save()

            return response.status(200).json({
                status: 'success',
                data: author
            })

        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'Author was not updated'
            })

        }
    }

    async delete({params, response}) {
        try {
            const author = await Author.find(params.id)
            await author.delete()

            return response.status(200).json({
                status: 'success',
                message: 'Author sucessfully deleted'
            })
        } catch(error) {
            return response.status(400).json({
                status: 'error',
                message: 'Author could not be deleted'
            })
        }
    }
}

module.exports = AuthorController
