import React from 'react'
//components
import Shoes from '../../components/men-section/Shoes'
const Men = ({ shoes }) => {
	const mensShoes = shoes.filter(shoe => shoe.category === 'men')
	return <Shoes shoes={mensShoes} type='men' />
}
export const getStaticProps = async () => {
	const response = await fetch('https://sneakers-next-js-website.vercel.app/api/shoes')
	const data = await response.json()
	return {
		props: {
			shoes: JSON.parse(JSON.stringify(data['message'])),
		},
	}
}

export default Men
