import React from 'react'
//components
import Shoes from '../../components/men-section/Shoes'
const Women = ({ shoes }) => {
	const womenShoes = shoes.filter(shoe => shoe.category === 'women')

	return <Shoes shoes={womenShoes} type='women' />
}
export const getStaticProps = async () => {
	const response = await fetch('/api/shoes')
	const data = await response.json()
	return {
		props: {
			shoes: JSON.parse(JSON.stringify(data['message'])),
		},
	}
}
export default Women
