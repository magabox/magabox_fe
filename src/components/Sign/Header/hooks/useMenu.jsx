import React from 'react'
import { useState } from 'react'

const useMenu = (initialState) => {
    const [value,setValue] = useState(initialState);

    const openMenu = () => {
		setValue(true)
	}

	const closeMenu = () => {
		setValue(false)
	}


  return {value, onMouseEnter : openMenu, onMouseLeave : closeMenu}
}

export default useMenu