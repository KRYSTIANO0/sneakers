import React from 'react'
import { connectToDatabase } from '../../lib/mongodb'
//components
import ShoeDetail from '../../components/men-section/ShoeDetail'
const DetailShoePage = ({ selectedShoe }) => {
	return <ShoeDetail {...selectedShoe} />
}

export const getStaticPaths = async () => {
	let { db } = await connectToDatabase()
	let shoes = await db.collection('shoes').find({}, { _id: 1 }).toArray()

	return {
		fallback: 'blocking',
		paths: shoes.map(shoe => ({
			params: { shoeID: shoe._id },
		})),
	}
}
export const getStaticProps = async ctx => {
	const shoeID = ctx.params.shoeID
	let { db } = await connectToDatabase()
	let selectedShoe = await db.collection('shoes').findOne({
		_id: shoeID,
	})

	return {
		props: {
			selectedShoe: JSON.parse(JSON.stringify(selectedShoe)),
		},
	}
}

export default DetailShoePage
