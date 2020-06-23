import {Pokemon, Type} from "../list/interfaces";
import {reducers} from "./reducers";

export type Action = {
    type: string;
    payload?: any;
}
export type Reducer<State> = (state: State, action: Action) => State
type Subscriber<State = any> = (state: State) => void
type Store<State> = {
    getState(): State;
    addSubscriber(subscriber: Subscriber): void;
    dispatch(action: Action): void
}
export type PokeState = {
    filters: {
        name?: string;
        type?: Type;
    };
    list: string[];
    isLoading: boolean;
    pokemons: {
        [key: string]: Pokemon
    }
}

const initialPokeState = {
    filters: {},
    list: [],
    isLoading: false,
    pokemons: {},
};

const createStore = <State>(initialState: State, reducers: Reducer<State>[], initialSubscribers: Subscriber[]): Store<State> => {
    // This is by no mean good performance or stable
    // don't support async actions ;( and many other features

    const subscribers = initialSubscribers;
    let state = initialState;

    const getState = () => state;

    return {
        getState,
        addSubscriber: (subscriber: Subscriber) => {
            subscribers.push(subscriber)
        },
        dispatch: (action: Action) => {
            state = reducers.reduce((currentState, reducer)=>{
                return reducer(currentState, action)
            }, state);


            subscribers.forEach(subscriber => subscriber(state))
        }
    }
};



export default createStore<PokeState>(initialPokeState, reducers, [console.log])