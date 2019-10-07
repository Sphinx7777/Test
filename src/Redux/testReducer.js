/*import {load} from "redux-localstorage-simple";
let data = load({namespace:'testTask'});
let initial = data.test; */


const ADD_ARTICLE = '/todoReducer___ADD_ARTICLE';
const ADD_COMMENTS = '/todoReducer___ADD_COMMENTS';
const SET_THE_NUMBER_OF_LIKES = '/todoReducer___SET_THE_NUMBER_OF_LIKES';
const SET_THE_NUMBER_OF_LIKES_REPLIES = '/todoReducer___SET_THE_NUMBER_OF_LIKES_REPLIES';
const SET_CHANGE_LIKES = '/todoReducer___SET_CHANGE_LIKES';


const initialState = {
	articleData: {},
	commentsData: [],
	dataLoad: false,
	likeChanged: false,

};

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE: {
			return {...state,articleData:{...action.article} }
		}
		case ADD_COMMENTS: {
			return {...state,commentsData:[...action.comments],dataLoad: true }
		}
		case SET_CHANGE_LIKES: {
			return {...state,likeChanged: false }
		}
		case SET_THE_NUMBER_OF_LIKES: {
			return {
				...state,commentsData: state.commentsData.map(t => {
					if (t.id === action.id) {
						t.likes = action.number;
						return t;
					}else{
						return t;
					}

				})
			}
		}
		case SET_THE_NUMBER_OF_LIKES_REPLIES: {
			let commentsDataReplies=state.commentsData.map(c=> c.replies && c.replies );
			let commentsDataRepliesWithGangedLikes=[];
			for(let i=0;i<commentsDataReplies.length-1; i++){
				commentsDataReplies[i].map(t => {
					if (t.id === action.id) {
						t.likes = action.number;
						commentsDataRepliesWithGangedLikes.push(t) ;
					}else {
						commentsDataRepliesWithGangedLikes.push(t) ;
					}
				})
			}
			return {
				...state,...state.commentsData,replies:commentsDataRepliesWithGangedLikes,likeChanged: true
			}
		}
		default:
			return state;
	}
};

const setArticleFromAPI = (article) => ({type: ADD_ARTICLE, article});
const setCommentsFromAPI = (comments) => ({type: ADD_COMMENTS, comments});
const setTheNumberOfLikes = (idAndLikes) => ({type: SET_THE_NUMBER_OF_LIKES,...idAndLikes });
const setTheNumberOfLikesReplies = (idAndLikes) => ({type: SET_THE_NUMBER_OF_LIKES_REPLIES,...idAndLikes });
const setChangeLikes = () => ({type: SET_CHANGE_LIKES});


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

export const changeTheNumberOfLikes = (id,number) => {
	return  (dispatch) => {
		dispatch(setTheNumberOfLikes({id,number}));
	}};
export const changeTheNumberOfLikesReplies = (id,number) => {
	return  (dispatch) => {
		dispatch(setTheNumberOfLikesReplies({id,number}));
		dispatch(setChangeLikes());

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

