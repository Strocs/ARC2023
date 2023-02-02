import { useState } from 'react'
import { SearchIcon } from './icons/SearchIcon'

export const SearchEvents = () => {
	const [showInput, setShowInput] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [showDropdown, setShowDropdown] = useState(false)

	const handleOnChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`h-fit rounded-md bg-white ${
				showInput ? 'w-[45%]' : 'w-[9.7%]'
			} relative transition-all duration-200 ease-in`}
		>
			<div
				onClick={() => setShowInput(true)}
				className={
					'flex h-9 flex-shrink-0 -translate-y-[0.15rem] cursor-pointer items-center overflow-hidden rounded-md border-2 border-white bg-main px-4 '
				}
			>
				<SearchIcon />
				<input
					className='bg-main pl-3 outline-none placeholder:font-medium placeholder:text-white'
					type='text'
					placeholder='Busca tu evento favorito!'
					value={inputValue}
					onChange={handleOnChange}
					onBlur={() => setShowInput(false)}
				/>
			</div>
			{showInput && (
				<ul className='absolute mt-2 grid w-full gap-1'>
					<li className='ml-12 rounded-md bg-main text-center text-white'>Ases Falsos</li>
					<li className='ml-12 rounded-md bg-main text-center text-white'>Ases Falsos</li>
					<li className='ml-12 rounded-md bg-main text-center text-white'>Ases Falsos</li>
					<li className='ml-12 rounded-md bg-main text-center text-white'>Ases Falsos</li>
				</ul>
			)}
		</form>
	)
}
