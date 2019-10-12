import { createSelector } from 'reselect'

const selectAllStateFromCurrentUser = state => state.currentUser

export const selectUserNameStateOnly = createSelector(
    [selectAllStateFromCurrentUser],
    (currentUser) => currentUser.username
)

export const selectUserAgeStateOnly = createSelector(
    [selectAllStateFromCurrentUser],
    (currentUser) => currentUser.userage
)

export const selectUserJobStateOnly = createSelector(
    [selectAllStateFromCurrentUser],
    (currentUser) => currentUser.userjob
)