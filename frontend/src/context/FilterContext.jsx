import { createContext, useContext, useState } from "react"
import allStoreItems from "../data/items.json"

const FilterContext = createContext({})

export function useFilter() {
  return useContext(FilterContext)
}

export function FilterProvider({ children }) {
  const [storeItems, setStoreItems] = useState(allStoreItems)

  // Saves the list of item objects which have the same type to the context.
  function filterStoreItems(type) {
    setStoreItems(allStoreItems)
    setStoreItems(currItems => {
      return currItems.filter(item => item.type === type)
    })
  }

  // Saves all items to the context.
  function restoreStoreItems() {
    setStoreItems(allStoreItems)
  }

  return (
    <FilterContext.Provider
      value={{storeItems, filterStoreItems, restoreStoreItems}}>

        {children}
    </FilterContext.Provider>
  )
}