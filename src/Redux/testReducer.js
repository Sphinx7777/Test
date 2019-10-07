/*import {load} from "redux-localstorage-simple";
let data = load({namespace:'testTask'});
let initial = data.test; */


const ADD_ARTICLE = '/todoReducer___ADD_ARTICLE';
const ADD_COMMENTS = '/todoReducer___ADD_COMMENTS';


const initialState = {
	articleData: {},
	commentsData: [],
	articleDataLoad: false,
	commentsDataLoad: false,
};

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE: {
			return {...state,articleData:{...action.article},articleDataLoad: true }
		}
		case ADD_COMMENTS: {
			return {...state,commentsData:[...action.comments],commentsDataLoad: true }
		}
		default:
			return state;
	}
};

const setArticleFromAPI = (article) => ({type: ADD_ARTICLE, article});
const setCommentsFromAPI = (comments) => ({type: ADD_COMMENTS, comments});


export const getNewArticleAndComments = (articleData,commentsData) => {
	return async (dispatch) => {
		let newArticle = await new Promise(resolve => {
			setTimeout(() => resolve(articleData), 1000);
		});
		let newComments = await new Promise(resolve => {
			setTimeout(() => resolve(commentsData), 1500);
		});
		await Promise.all([newArticle,newComments]);
		await dispatch(setArticleFromAPI(newArticle));
		dispatch(setCommentsFromAPI(newComments));
	}};





/*
export const articleAPI = {
	get: () =>
		new Promise(resolve => {
			setTimeout(() => resolve(articleData), 1000);
		})
};

export const commentsAPI = {
	get: () =>
		new Promise(resolve => {
			setTimeout(() => resolve(commentsData), 1500);
		}),
};
*/


export default testReducer;

