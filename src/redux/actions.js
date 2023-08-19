// тут будут actionsCreator-ы, функции которые возвращают action(объект).
import { INCREMENT, DECREMENT } from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}