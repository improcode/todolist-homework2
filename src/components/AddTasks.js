import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {ACTIONS} from '../state/addtasks'


saveTaskToDatabase = () => {

    fetch(`https://fatcash-app.firebaseio.com/users/${this.props.userUid}/transactions/.json`,
        {
            method: 'POST',
            body: JSON.stringify
            (
                {
                    tasks: this.state.tasks,
                    newTask: Date.now(),
                }
            )
        }
    )}


const AddTasks = (props) => (

    <div>
        <TextField
            hintText="You don`t need remember about everything! Write you task and work with free mind :)"
            value={props.taskText}
            onChange={props.taskHandler}
        />
        <RaisedButton
            label="ADD NEW TASK"
            onClick={props.sendTaskToDatabase}
        />
    </div>
)

const mapStateToProps = state => ({
    tasks: state.tasks,
    newTask: state.newTask
})

const mapDispatchToProps = dispatch => ({
    actions: {
        sendTaskToDatabase: messages =>
            dispatch(ACTIONS.sendToDatabase(messages)),
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTasks);