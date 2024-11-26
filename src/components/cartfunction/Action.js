import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART } from "./ActionType";

export const addTocart =(item) =>({
    type: ADD_TO_CART,
    payload:item
});

export const removeFromcart =(itemId) =>({
    type: REMOVE_FROM_CART,
    payload:itemId
});

export const updateCartQuantity = (itemId, quantity) =>({
    type:UPDATE_CART_QUANTITY,
    payload:{itemId, quantity}
})

 export const  clearCart = ()=>({
    type: CLEAR_CART
 });


