import React,{Component} from 'react'
import {connect} from "react-redux";
import {
	addNewTask,
	changeStatusAllTasks,
	changeStatusTaskEditForm,
	changeTask,
	changeTaskStatus,
	removeTask, setToggleEditTask, toggleEditStatus
} from "../Redux/todoReducer";
import {Todo} from "./Todo";



class TodoContainer extends Component {

	componentDidMount() {
		/*let saveTasks = JSON.stringify(this.props.tasks);
		localStorage.setItem('tasks',saveTasks);*/
	}

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
		changeStatusAllTasks,changeStatusTaskEditForm,setToggleEditTask,toggleEditStatus})(TodoContainer);


