import React from 'react'
import s from '../Test.module.scss'
import {RepliesLikesCount} from "./RepliesLikesCount";


export const Replies = (
	{
		MyComponent,
		comRepl,
		setNumberOfLikesReplies,
		createDate
	}) => {

	return (
		<>
			<div className={s.repliesHeader}>
				<span className={s.name}>
					Name :
					<b>{MyComponent(comRepl.name)}</b>
				</span>
				<span className={s.date}>
					{createDate}
				</span>
				{
					comRepl.likes >= 0 &&
					<RepliesLikesCount {...
						{
							comRepl,
							setNumberOfLikesReplies
						}}
					/>
				}
			</div>
			<div className={s.repliesText}>
				{MyComponent(comRepl.commentText)}
			</div>
		</>)
};
