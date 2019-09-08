const ADD_NEW_TASK = '/todoReducer___ADD_NEW_TASK';
const REMOVE_CHANGED_TASK = '/todoReducer___REMOVE_CHANGED_TASK';
const CHANGE_TASK = '/todoReducer___CHANGE_TASK';
const CHANGE_TASK_STATUS = '/todoReducer___CHANGE_TASK_STATUS';
const EDIT_MODE_STATUS = '/todoReducer___EDIT_MODE_STATUS';


let initialState = {
	tasks: [
		{id: 1, name: 'one', description: 'learn React', status: false},
		{id: 2, name: 'two', description: 'learn JS', status: false},
		{id: 3, name: 'three', description: 'learn Redux', status: false}
	],
	filterTasksStatus: null,
	editMode: false,

};


const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.task})}
		}
		case EDIT_MODE_STATUS: {
			return {...state,editMode: action.status}
		}
		case REMOVE_CHANGED_TASK: {
			return {
				...state, tasks: state.tasks.filter(t => t.status !== true)}
		}
		case CHANGE_TASK: {
			return {
				...state, ...state.tasks.map(
					t => t.id === action.id ? t.description=action.text : t.description)
			}
		}
		case CHANGE_TASK_STATUS: {
			return {
				...state,tasks: state.tasks.map(t => {if(t.id === action.id){
						t.status=action.status;
						return t;
					}return t;
					}
				)
			}
		}
		default:
			return state;
	}

};

const setNewTask = (task) => ({type: ADD_NEW_TASK, task});
const setRemoveTask = () => ({type: REMOVE_CHANGED_TASK});
const setChangeTask = (id, text) => ({type: CHANGE_TASK, action: {id, text}});
const setChangeTaskStatus = (taskStatus) => ({type: CHANGE_TASK_STATUS, ...taskStatus});
const setEditModeStatus = (status) => ({type: EDIT_MODE_STATUS, status});


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
export const removeTask = (id) => {
	return (dispatch) => {
		dispatch(setRemoveTask(id));
	}
};
export const changeTask = (id, text) => {
	return (dispatch) => {
		dispatch(setChangeTask(id, text));
	}
};
export const changeTaskStatus = (id, status) => {
	return (dispatch) => {
		dispatch(setChangeTaskStatus({id, status}));
	}
};

export default todoReducer;

