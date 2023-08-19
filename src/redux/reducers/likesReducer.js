import { INCREMENT, DECREMENT } from "../types"

const initialState = {
    likes: 0
}
// const INCREMENT = 'INCREMENT' по сути это импорт из типов.

const likesReducer = (state = initialState, action) => { // приходит action = {type: 'INCREMENT'}, т.к. импортили типы, то, const INCREMENT = 'INCREMENT'
    debugger
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        default: return state
    }
}

export default likesReducer;