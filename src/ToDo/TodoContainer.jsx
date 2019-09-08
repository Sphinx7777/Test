import React from 'react'
import Todo from "./Todo";
import {connect} from "react-redux";
import {addNewTask, changeStatusTaskEditForm, changeTask, changeTaskStatus, removeTask} from "../Redux/todoReducer";



class TodoContainer extends React.Component {

	state = {

	};


	render() {
		return (
			<Todo {...this.props}/>
		)
	}
}

let mapStateToProps = (state)=>({
	tasks: state.toDo.tasks,
	editMode: state.toDo.editMode,
});

export default connect(mapStateToProps,
	{addNewTask,removeTask,changeTask,changeTaskStatus,changeStatusTaskEditForm})(TodoContainer);