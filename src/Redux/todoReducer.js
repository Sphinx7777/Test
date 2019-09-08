
const ADD_NEW_TASK = '/todoReducer___ADD_NEW_TASK';
const REMOVE_CHANGED_TASK = '/todoReducer___REMOVE_CHANGED_TASK';
const CHANGE_TASK = '/todoReducer___CHANGE_TASK';
const CHANGE_TASK_STATUS = '/todoReducer___CHANGE_TASK_STATUS';


let initialState = {
	tasks :[
		{id: 1, name:'one', description: 'learn React dmnhhfnjdf fdfdf dfdrsr dfdfdrfdre dfddfdf dfdfdfd', status: false},
		{id: 2, name:'two', description: 'learn JS', status: false},
		{id: 3, name:'three', description: 'learn Redux', status: false}
	],
	filterTasksStatus:null,

};


const todoReducer =(state=initialState,action)=>{
	switch (action.type) {
		case ADD_NEW_TASK:{
			return {...state,...state.tasks.unshift(action.task)}
		}
		case REMOVE_CHANGED_TASK:{
			return {...state, ...state.tasks.filter(t=>t.status !== false)}
		}
		case CHANGE_TASK:{
			return {...state, ...state.tasks.map(
				t=> t.id === action.id ? t.description:action.text)}
		}
		case CHANGE_TASK_STATUS:{
			return {...state, ...state.tasks.map(
				t=> t.id === action.id ? t.status:action.status)}
		}
			default:
				return state;
	}

};

const setNewTask = (task)=> ({type:ADD_NEW_TASK, task});
const setRemoveTask = ()=> ({type:REMOVE_CHANGED_TASK});
const setChangeTask = (id,text)=> ({type:CHANGE_TASK, action:{id,text}});
const setChangeTaskStatus = (id,status)=> ({type:CHANGE_TASK_STATUS, action:{id,status}});



export const addNewTask = (task)=> {
	return async (dispatch)=>{
		await dispatch(setNewTask(task));
		console.log('Приколюха добавлена')
	}
};
export const removeTask = (id)=> {
	return async (dispatch)=>{
		await dispatch(setRemoveTask(id));
		console.log('Приколюха удалена')
	}
};
export const changeTask = (id,text)=> {
	return async (dispatch)=>{
		await dispatch(setChangeTask(id,text));
		console.log('Приколюха изменена')
	}
};
export const changeTaskStatus = (id,status)=> {
	return async (dispatch)=>{
		await dispatch(setChangeTaskStatus(id,status));
		console.log('Приколюха сделана или нет')
	}
};

export default todoReducer;