const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product
      }
}

const deleteFromCart = product => {
    return {
        type: "DELETE",
        product
      }
} 

export {addToCart,deleteFromCart};