import {useState} from "react";
import Store from './store';

export const useAppState = () => {
    // This implementation for subscribing state copy it in every usage of useAppState,
    // But fot this small app w/e it is not even 1k rows couple times, ofc in production use real Redux
    const [state, setState] = useState(Store.getState());

    Store.addSubscriber(setState);



    return {
        state,
        dispatch: Store.dispatch
    }
};