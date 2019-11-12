import React from 'react'
import s from '../Test.module.scss'



export const RepliesForReplies = (
	{
		MyComponent,
		repRepl,
		createDate,
	}) => {


	return (
		<>
			<div className={s.repliesForRepliesHeader}>
				<span className={s.name}>
					Name :
					<b>{MyComponent(repRepl.name)}</b>
				</span>
				<span className={s.date}>
					{createDate}
				</span>
			</div>
			<div className={s.repliesText}>
				{MyComponent(repRepl.commentText)}
			</div>
		</>
	)
};
