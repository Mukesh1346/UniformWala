// Reducer.jsx

export const initialState = {
    cart: [],      // [{id, name, price, size, quantity}]
    wishlist: []   // [{id, name, price}]
  };
  
  export const ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    TOGGLE_CART_ITEM: "TOGGLE_CART_ITEM", // new toggle action
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    UPDATE_QUANTITY: "UPDATE_QUANTITY",
    CLEAR_CART: "CLEAR_CART",
  
    ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
    REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST"
  };
  
  export function appReducer(state, action) {
    switch (action.type) {
  
      // Toggle Cart Item
      case ACTIONS.TOGGLE_CART_ITEM: {
        const { id, name, price, size, quantity, image } = action.payload;
  
        const existing = state.cart.find(
          (item) => item.id === id && item.size === size
        );
  
        if (existing) {
          // Remove from cart if exists
          return {
            ...state,
            cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
          };
        }
  
        // Add new item if not exists
        return {
          ...state,
          cart: [...state.cart, { id, name, price, size, quantity,image }],
        };
      }
  
      // Add to cart (standard)
      case ACTIONS.ADD_TO_CART: {
        const { id, name, price, size, quantity,image } = action.payload;
  
        const existing = state.cart.find(
          (item) => item.id === id && item.size === size 
        );
  
        if (existing) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === id && item.size === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        }
  
        return {
          ...state,
          cart: [...state.cart, { id, name, price, size, quantity,image }],
        };
      }
  
      case ACTIONS.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(
            (item) => !(item.id === action.payload.id && item.size === action.payload.size)
          ),
        };
  
      case ACTIONS.UPDATE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case ACTIONS.CLEAR_CART:
        return { ...state, cart: [] };
  
      case ACTIONS.ADD_TO_WISHLIST:
        if (state.wishlist.find((item) => item.id === action.payload.id)) {
          return state;
        }
        return {
          ...state,
          wishlist: [...state.wishlist,  {
            ...action.payload,
            image: action.payload.image?.src || action.payload.image, // ensure URL string
          },],
        };
  
      case ACTIONS.REMOVE_FROM_WISHLIST:
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
  
      default:
        return state;
    }
  }
  