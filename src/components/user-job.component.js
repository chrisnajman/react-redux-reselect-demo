import React from "react"
import { connect } from 'react-redux'
import {  selectUserJobStateOnly } from '../redux/user/user.selectors'


const UserJob = ({ jobDescription }) => (
    <div className="user-job">
        <p><span>User Job Description:</span> {jobDescription}</p>
    </div>
)

const mapStateToProps = state => ({
  jobDescription: selectUserJobStateOnly(state)
})
export default connect(mapStateToProps)(UserJob)

/*

  Getting mapStateToProps props from import {  selectUserJobOnly } from './redux/user/user.selectors'

*/