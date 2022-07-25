import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) =>{

    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUT':
            console.log("aqui o dentro co case, o o workout",state.workouts)

            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state
      
    }

}

export const WorkoutsContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });


  //  dispatch({type: 'SET_WORKOUT', payload:[{},{}]})

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}} >
            { children }
        </WorkoutsContext.Provider>
    )
}