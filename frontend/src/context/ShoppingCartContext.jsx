import { createContext, useContext, useState } from "react"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // The cartQuantity sums up the total number of items in the cart.
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // This function returns the number of items in the shopping cart with a given id.
  // If no items with this id exist in the shopping cart it returns 0.
  function getItemQuantity(id) {
    return cartItems.find(item => item.id == id) ?.quantity || 0
  }

  // This function increases the quantity of the items with the given id by 1.
  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id == id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  // This function decreases the quantity of the items with the given id by 1.
  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id == id) ?.quantity == 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
      <ShoppingCartContext.Provider 
        value={{ 
          getItemQuantity, 
          increaseCartQuantity, 
          decreaseCartQuantity, 
          cartItems, 
          cartQuantity,
          }}>

          {children}
      </ShoppingCartContext.Provider>
  )
}