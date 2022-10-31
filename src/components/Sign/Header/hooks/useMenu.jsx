import React from 'react'
import { useState } from 'react'

const useMenu = (initialState = false) => {
    const [value,setValue] = useState(initialState);

    const openMenu = () => {
		setValue(true)

    }
    const closeMenu = () => {
		setValue(false)
	}

  return {value,openMenu,closeMenu}
}

export default useMenu