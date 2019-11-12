import React from 'react'
import s from './Test.module.scss'
import {LikesCount} from "./LikesCount";


export const Comment = (
	{
		MyComponent,
		com,
		setNumbersOfLikes,
		createDate

	}) => {


	return (
		<div className={s.comment}>
			<div className={s.commentHeader}>
									<span className={s.name}>
										Name :
										<b>{MyComponent(com.name)}</b>
									</span>
				<span className={s.date}>
										{createDate}
									</span>
				{
					com.likes >= 0 &&
					<LikesCount {...
						{
							setNumbersOfLikes,
							com
						}}/>
				}
			</div>
			<div className={s.commentText}>
				{MyComponent(com.commentText)}
			</div>
		</div>

	)
};
