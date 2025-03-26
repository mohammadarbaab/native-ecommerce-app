import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

const reducers = (intialState = [], actions) => {
    switch (actions.type) {
        case ADD_TO_CART:
            return [...intialState, actions.payload]; // Add a single item to the cart
        case REMOVE_FROM_CART:
            const deletedArray = intialState.filter((item, index) => {
                return index !== actions.payload; // Remove item based on index
            });
            return deletedArray;
        default:
            return intialState;
    }
}

export default reducers;
