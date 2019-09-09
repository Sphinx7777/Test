const ADD_NEW_TASK = '/todoReducer___ADD_NEW_TASK';
const REMOVE_CHANGED_TASK = '/todoReducer___REMOVE_CHANGED_TASK';
const CHANGE_TASK = '/todoReducer___CHANGE_TASK';
const CHANGE_TASK_STATUS = '/todoReducer___CHANGE_TASK_STATUS';
const EDIT_MODE_STATUS = '/todoReducer___EDIT_MODE_STATUS';
const MARK_ALL_TASKS = '/todoReducer___MARK_ALL_TASKS';


let initialState = {
	tasks: [
		{id: 1, name: 'one', description: 'learn React', status: true},
		{id: 2, name: 'two', description: 'learn JS', status: false},
		{id: 3, name: 'three', description: 'learn Redux', status: false},
		{id: 4, name: 'four', description: 'Посадить дерево', status: true},
		{id: 5, name: 'five', description: 'Построить дом', status: false},
		{id: 6, name: 'sex', description: 'Вырастить сына', status: true}
		],
	filterTasksStatus: null,
	editMode: false,
	allMark: false,
};


const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.task})}
		}
		case EDIT_MODE_STATUS: {
			return {...state, editMode: action.status}
		}
		case REMOVE_CHANGED_TASK: {
			return {...state,tasks:state.tasks.filter(t=>t.status!==true),allMark: false
			}
		}
		case CHANGE_TASK: {
			return {
				...state, tasks: state.tasks.map(t => {
					if (t.id === action.id) {
						t.description = action.description;
						return t;
					}
					return t;
				})
			}
		}
		case CHANGE_TASK_STATUS: {
			return {
				...state, tasks: state.tasks.map(t => {
					if (t.id === action.id) {
						t.status = action.status;
						return t;
					}
					return t;
				})
			}
		}
		case MARK_ALL_TASKS: {
			return {
				...state, ...state.tasks.map(t => t.status = action.status), allMark: action.status
			}
		}
		default:
			return state;
	}

};

const setNewTask = (task) => ({type: ADD_NEW_TASK, task});
const setRemoveTask = () => ({type: REMOVE_CHANGED_TASK});
const setChangeTask = (taskDesc) => ({type: CHANGE_TASK, ...taskDesc});
const setChangeTaskStatus = (taskStatus) => ({type: CHANGE_TASK_STATUS, ...taskStatus});
const setEditModeStatus = (status) => ({type: EDIT_MODE_STATUS, status});
const setStatusMarkAllTasks = (status) => ({type: MARK_ALL_TASKS, status});



export const addNewTask = (task) => {
	return (dispatch) => {
		dispatch(setNewTask(task));
		dispatch(setEditModeStatus(false));
	}
};
export const changeStatusTaskEditForm = (status) => {
	return (dispatch) => {
		dispatch(setEditModeStatus(status));
	}
};
export const changeStatusAllTasks = (status) => {
	return (dispatch) => {
		dispatch(setStatusMarkAllTasks(status));
	}
};
export const removeTask = (id) => {
	return (dispatch) => {
		dispatch(setRemoveTask(id));
	}
};
export const changeTask = (id, description) => {
	return (dispatch) => {
		dispatch(setChangeTask({id, description}));
	}
};
export const changeTaskStatus = (id, status) => {
	return (dispatch) => {
		dispatch(setChangeTaskStatus({id, status}));
	}
};

export default todoReducer;

