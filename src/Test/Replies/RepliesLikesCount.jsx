import React from 'react'
import s from '../Test.module.scss'


export const RepliesLikesCount = (
	{
		comRepl,
		setNumberOfLikesReplies,
	}) => {

	return (
		<div>
			<button className={s.likes}
							onClick={() => setNumberOfLikesReplies(comRepl.id, comRepl.likes + 1)
							}>
				Like +
			</button>
			<span className={s.likesCount}>
													<b>{comRepl.likes}</b>
												</span>
			<button className={s.likes}
							disabled={comRepl.likes === 0}
							onClick={() => setNumberOfLikesReplies(comRepl.id, comRepl.likes - 1)}>
				- DisLike
			</button>
		</div>
	)
};
