import {
    DRAWER_OPEN,
    DRAWER_CLOSE
} from "../constants/utilConstants"

export const drawerToggleReducer = (state = { drawerState: false }, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return { drawerState: true }

        case DRAWER_CLOSE:
            return { drawerState: false }

        default:
            return state
    }
}