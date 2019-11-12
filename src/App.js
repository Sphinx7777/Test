import React, {Component} from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {connect} from "react-redux";
import {
	changeTheNumberOfLikes,
	changeTheNumberOfLikesReplies,
	getNewArticleAndComments
} from "./Redux/testReducer";
import {Test} from "./Test/Test";
import {articleData, commentsData} from "./Test/dateApi";
import {Preloader} from "./Preloader/Preloader";


class App extends Component {

	componentDidMount() {
		this.props.getNewArticleAndComments(articleData, commentsData);
	}

	render() {

		const {
			commentsData,
			articleData,
			dataLoad,
			changeTheNumberOfLikes,
			changeTheNumberOfLikesReplies
		} = this.props;

		if (!dataLoad) {
			return <Preloader/>
		}

		return (
			<div className={s.appWrapper}>
				<Header/>
				<div className={s.contentWrapper}>
					<Test {...
						{
							articleData,
							commentsData,
							changeTheNumberOfLikes,
							changeTheNumberOfLikesReplies
						}} />
				</div>
			</div>
		);
	}
}

export let mapStateToProps = (state) => ({
	articleData: state.test.articleData,
	commentsData: state.test.commentsData,
	dataLoad: state.test.dataLoad,
	likeChanged: state.test.likeChanged,
});

export default connect(mapStateToProps,
	{
		getNewArticleAndComments,
		changeTheNumberOfLikes,
		changeTheNumberOfLikesReplies
	})(App);
