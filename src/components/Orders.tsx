import { useEffect, useState } from 'react'
import { orders } from '../../static/orders'
import { useSelect } from '../context/Select'
import { Cards, DARK, headers } from '../utils/constants'
import Card from './Card'
import Order from './Order'

function Orders() {
	const { mode } = useSelect()
	const [cards, setCards] = useState<any[]>([])

	useEffect(() => {
		setCards(Cards(orders))
	}, [])

	const background = mode === DARK ? 'bg-gray-300' : 'bg-gray-50'

	return (
		<section className="px-8">
			<ul className='flex items-center justify-between py-8 flex-wrap gap-4'>
				{cards.map((type, index) => 
					<Card item={type} key={index} />)}
			</ul>
			<div className='flex justify-between my-8'>
				<h1 className="capitalize text-2xl">recent orders</h1>
			</div>
			<div className='flex items-center justify-between px-4 font-medium capitalize pr-16 mb-4'>
				{headers.map((header, index) => (
					<span key={index}>{header}</span>
				))}
			</div>
			<ul className='max-h-[35rem] overflow-auto overflow-x-hidden capitalize font-medium'>
				{orders.map((order, index) => (
					<Order key={index} order={order} bg={background} />
				))}
			</ul>
		</section>
	)
}

export default Orders
