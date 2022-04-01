import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
	// switch the methods
	switch (req.method) {
		case 'GET': {
			return getPosts(req, res)
		}

		case 'POST': {
			return addPost(req, res)
		}

		case 'PUT': {
			return updatePost(req, res)
		}

		case 'DELETE': {
			return deletePost(req, res)
		}
	}
}

async function getPosts(req, res) {
	try {
		// connect to the database
		let { db } = await connectToDatabase()
		// fetch the posts
		let shoes = await db.collection('shoes').find({}).toArray()
		// return the posts
		return res.json({
			message: JSON.parse(JSON.stringify(shoes)),
			success: true,
		})
	} catch (error) {
		// return the error
		return res.json({
			message: new Error(error).message,
			success: false,
		})
	}
}
