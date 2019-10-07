import React, {Component} from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {connect} from "react-redux";
import {getNewArticleAndComments} from "./Redux/testReducer";
import {Test} from "./Test/Test";
import {articleData, commentsData} from "./Test/dateApi";




class App extends Component {
	componentDidMount() {
		this.props.getNewArticleAndComments(articleData,commentsData);
	}

	render() {
		const {commentsData,articleData}=this.props;
		/*if(!commentsData || !articleData){
			return <div><h1>Loading...</h1></div>
		}*/
		return (
			<div className={s.appWrapper}>
				<Header />
				<div className={s.contentWrapper}>
					<Test {...{articleData,commentsData}} />
				</div>
			</div>
		);
	}
}

export let mapStateToProps = (state) => ({
	articleData: state.test.articleData,
	commentsData: state.test.commentsData,
});

export default connect(mapStateToProps, {getNewArticleAndComments})(App);
