import { COLORCHANGE, STATUSCHANGE } from "./action";

export const statusChange = (status) => {
        console.log(status);
        return {
            type:STATUSCHANGE,
            payload:status
        }
}
export const colorChange = (color,changeType) => {
        return {
                type:COLORCHANGE,
                payload:{
                    color,changeType
                }
        }
}
