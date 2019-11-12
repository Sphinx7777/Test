import React from 'react'
import s from './Test.module.scss'

export const LikesCount = (
	{
		setNumbersOfLikes,
		com,
	}) => {


	return (
		<div>
			<button className={s.likes}
							onClick={() =>
								setNumbersOfLikes(com.id, com.likes + 1)}>
				Like +
			</button>
			<span className={s.likesCount}>
												<b>{com.likes}</b>
											</span>
			<button className={s.likes}
							disabled={com.likes === 0}
							onClick={() =>
								setNumbersOfLikes(com.id, com.likes - 1)}>
				- DisLike
			</button>
		</div>
	)
};
