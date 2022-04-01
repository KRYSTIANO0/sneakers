import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
	// switch the methods
	switch (req.method) {
		case 'GET': {
			return getShoes(req, res)
		}
	}
}

async function getShoes(req, res) {
	try {
		// connect to the database
		let { db } = await connectToDatabase()
		// fetch the posts
		let menu = await db.collection('assets').find({}).toArray()
		// return the posts
		return res.json({
			message: JSON.parse(JSON.stringify(menu)),
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
