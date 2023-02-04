import { useState } from 'react'
import { getEventsPath } from 'src/utils'
import { Icon } from '@iconify/react'

export const SearchEvents = () => {
	const [inputValue, setInputValue] = useState('')
	const [showDropdown, setShowDropdown] = useState(false)
	const [filteredEvents, setFilteredEvents] = useState([])

	const events = getEventsPath()

	const handleOnChange = (e) => {
		setInputValue(e.target.value)
		setFilteredEvents([])
		if (e.target.value.length <= 1) return
		setShowDropdown(true)
		const filterEvent = events
			.filter((event) => event.eventName.toLowerCase().includes(e.target.value.toLowerCase()))
			.slice(0, 3)
		setFilteredEvents(filterEvent)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
  <div className='fixed top-[4.3rem] right-0 left-0 mx-auto w-fit sm:top-20'>
    <form
      onSubmit={handleSubmit}
      className='h-full rounded-md bg-main text-main transition-all duration-200 ease-in'
    >
      <div className='flex h-9 -translate-y-[0.15rem] items-center rounded-md border-2 border-main bg-white px-3'>
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' className='h-5 w-5 inline'>
          <path
            fill='currentColor'
            d='M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z'
          />
        </svg>
        <input
          className='w-full bg-white pl-2 text-sm outline-none placeholder:font-medium placeholder:text-main'
          type='text'
          placeholder='Busca tu evento favorito!!'
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
    </form>
    {showDropdown && (
      <ul className='mx-auto mt-2 grid max-w-[12rem] gap-1'>
        {filteredEvents.map(({ location, event, eventName }) => (
          <li
            className='rounded-md border-2 border-main bg-white text-center leading-5 text-main transition-all duration-200 ease-in hover:bg-main hover:text-white'
            key={event}
          >
            <a className='font-medium' href={`${location}/${event}`}>
              <p className='inline'>{eventName}</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1rem'
                height='1rem'
                viewBox='0 0 24 24'
                className='my-auto inline'
              >
                <path
                  fill='currentColor'
                  d='M8.5 18.31L5.69 15.5l6.37-6.38H7.11V5.69h11.2v11.2h-3.42v-4.95L8.5 18.31Z'
                />
              </svg>
            </a>
          </li>
					))}
      </ul>
			)}
  </div>
	)
}
