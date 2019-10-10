import { createSelector } from 'reselect'

const selectAllStateFromCurrentUser = state => state.currentUser

export const selectUserJobStateOnly = createSelector(
    [selectAllStateFromCurrentUser],
    (currentUser) => currentUser.userjob
)