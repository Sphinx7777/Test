import React from 'react'
import Todo from "./Todo";
import {connect} from "react-redux";
import {addNewTask, changeTask, changeTaskStatus, removeTask} from "../Redux/todoReducer";



class TodoContainer extends React.Component {

	state = {
		editMode:false,
	};


	render() {
		return (
			<Todo {...this.props}/>
		)
	}
}

let mapStateToProps = (state)=>({
	tasks: state.toDo.tasks,
});

export default connect(mapStateToProps,
	{addNewTask,removeTask,changeTask,changeTaskStatus})(TodoContainer);