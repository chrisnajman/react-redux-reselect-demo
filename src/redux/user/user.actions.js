import { UserActionTypes } from './user.types'

export const setUserName = updatedUserName => ({
    type: UserActionTypes.SET_USERNAME,
    payload: updatedUserName
})


export const setUserAge = updatedUserAge => ({
    type: UserActionTypes.SET_USERAGE,
    payload: updatedUserAge
})

/*

    No action required for SET_USERJOB

*/