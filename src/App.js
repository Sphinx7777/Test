import React, {Component} from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {connect} from "react-redux";
import {getNewArticleAndComments, articleData, commentsData} from "./Redux/testReducer";
import {Test} from "./Test/Test";




class App extends Component {
	componentDidMount() {
		this.props.getNewArticleAndComments(articleData,commentsData);
	}

	render() {

		return (
			<div className={s.appWrapper}>
				<Header />
				<div className={s.contentWrapper}>
					<Test />
				</div>
			</div>
		);
	}
}

export let mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {getNewArticleAndComments})(App);
