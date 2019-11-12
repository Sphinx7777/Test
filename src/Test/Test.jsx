import React from 'react'
import s from './Test.module.scss'
import {HeaderTest} from "./HeaderTest";
import {Comment} from "./Comment";
import {Replies} from "./Replies/Replies";
import {RepliesForReplies} from "./Replies/RepliesForReplies";

const newDate = new Date();
const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};
const createDate = (newDate.toLocaleString("ru", options));

const createMarkup = text => ({__html: text});

const MyComponent = (text) => {
	return <span
		className={s.text}
		dangerouslySetInnerHTML={createMarkup(text)}/>;
};


export const Test = (
	{
		articleData,
		commentsData,
		changeTheNumberOfLikes,
		changeTheNumberOfLikesReplies
	}) => {

	const setNumbersOfLikes = (id, likes) => changeTheNumberOfLikes(id, likes);

	const setNumberOfLikesReplies = (id, likes) => changeTheNumberOfLikesReplies(id, likes);

	return (

		<div className={s.newsWrapper}>
			<div className={s.itemNews}>
				<HeaderTest {...
					{
						articleData,
						MyComponent,
						createDate
					}}
				/>
				{commentsData.map(com =>
					<div className={s.commentsWrapper} key={Math.random()}>
						<div className={s.comments}>
							<Comment {...
								{
									MyComponent,
									com,
									setNumbersOfLikes,
									createDate
								}}
							/>
							<div className={s.replies}>
								{com.replies
									? com.replies.map(comRepl =>
										<React.Fragment key={Math.random()}>
											<Replies {...
												{
													MyComponent,
													comRepl,
													setNumberOfLikesReplies,
													createDate
												}}
											/>
											<div className={s.repliesForReplies}>
												{comRepl.replies
														? comRepl.replies.map(repRepl =>
															<React.Fragment key={Math.random()}>
																<RepliesForReplies {...
																	{
																		MyComponent,
																		repRepl,
																		createDate,
																	}}
																/>
															</React.Fragment>
													)
														: ''
												}
											</div>
										</React.Fragment>)
									: ''}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
};
