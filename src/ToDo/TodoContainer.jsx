import React,{Component} from 'react'
import {connect} from "react-redux";
import {
	addNewTask,
	changeStatusAllTasks,
	changeStatusTaskEditForm,
	changeTask,
	changeTaskStatus, openEditTaskDescription,
	removeTask, searchTask, setToogleEditTask
} from "../Redux/todoReducer";
import {Todo} from "./Todo";



class TodoContainer extends Component {
	render() {
		return (
			<Todo {...this.props}/>
		)
	}
}

let mapStateToProps = (state)=>({
	tasks: state.toDo.tasks,
	editMode: state.toDo.editMode,
	allMark: state.toDo.allMark,
	editDescriptionStatus: state.toDo.editDescriptionStatus,
});

export default connect(mapStateToProps,
	{addNewTask,removeTask,changeTask,changeTaskStatus,
		changeStatusAllTasks,changeStatusTaskEditForm,openEditTaskDescription,searchTask,setToogleEditTask})(TodoContainer);