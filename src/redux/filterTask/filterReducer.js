
import { COLORCHANGE, STATUSCHANGE } from "./action";

const initialState2 = {
    status:'all',
    colors:[]
}

    const filterReducer = (state=initialState2,action) => {

        switch (action.type) {
            case STATUSCHANGE:
            return {...state,
                status:action.payload
            }

            case COLORCHANGE:

                    const {color,changeType} = action.payload
                        switch (changeType) {
                            case "add":
                                return {...state,
                                    colors:[...state.colors,color]
                                }
                                case "remove":
                                    return {
                                        ...state,
                                        colors:state.colors.filter((existingColor) => existingColor !== color)
                                    }
                            default:
                                return state
                        }
        
            default:
                return state
        }
    }
    export default filterReducer