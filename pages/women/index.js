import React from 'react'
//components
import Shoes from '../../components/men-section/Shoes'
const Women = ({ shoes }) => {
	const womenShoes = shoes.filter(shoe => shoe.category === 'women')

	return <Shoes shoes={womenShoes} type='women' />
}
export const getServerSideProps = async () => {
	const response = await fetch('https://sneakers-next-js-website.vercel.app/api/shoes')
	const data = await response.json()
	return {
		props: {
			shoes: JSON.parse(JSON.stringify(data['message'])),
		},
	}
}
export default Women
