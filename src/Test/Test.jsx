import React, {useState, useEffect} from 'react'
import s from './Test.module.scss'

let newDate = new Date();
let options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};
let createDate = (newDate.toLocaleString("ru", options));

function createMarkup(text) {
	return {__html: text};
}
function MyComponent(text) {
	return <span className={s.text} dangerouslySetInnerHTML={createMarkup(text)}/>;
}


export const Test = ({articleData, commentsData, changeTheNumberOfLikes, changeTheNumberOfLikesReplies}) => {

	const [showReplies,setStatusShowReplies]=useState(false);

	return (
		<div className={s.newsWrapper}>
			<div className={s.itemNews}>
				<div className={s.itemHeader}>
					<span className={s.itemHeaderTitle}>{articleData.title}</span><span className={s.itemDate}>{createDate}</span>
				</div>
				<div className={s.itemText}>
					{MyComponent(articleData.text)}
				</div>
				{commentsData.map(c =>
					<div className={s.commentsWrapper} key={Math.random()}>
						<div className={s.comments}>
							<div className={s.comment}>
								<div className={s.commentHeader}>
									<span className={s.name}>Name : <b>{MyComponent(c.name)}</b></span>
									<span className={s.date}>{createDate}</span>
									{c.likes >= 0 && <div>
										<span className={s.likes}
													onClick={() => {
														changeTheNumberOfLikes(c.id, c.likes + 1)
													}}>Like + </span><span className={s.likesCount}><b>{c.likes}</b></span>
										<span className={s.likes} onClick={() => {
											changeTheNumberOfLikes(c.id, c.likes > 0 ? c.likes - 1 : 0)
										}}> - DisLike</span>
									</div>}
								</div>
								<div className={s.commentText}>
									{MyComponent(c.commentText)}
								</div>
							</div>
							<div className={s.replies}>
								{c.replies ? c.replies.map(r =>
									<React.Fragment key={Math.random()}>
										<div className={s.repliesHeader}>
											<span className={s.name}>Name : <b>{MyComponent(r.name)}</b></span>
											<span className={s.date}>{createDate}</span>
											{r.likes >= 0 && <div>
												<span className={s.likes}
														onClick={() => {
															changeTheNumberOfLikesReplies(r.id, r.likes + 1)
														}}>Like + </span><span className={s.likesCount}><b>{r.likes}</b></span>
												<span className={s.likes} onClick={() => {
													changeTheNumberOfLikesReplies(r.id, r.likes > 0 ? r.likes - 1 : 0)
												}}> - DisLike</span>
											</div>}
										</div>
										<div className={s.repliesText}>
											{MyComponent(r.commentText)}
										</div>
										<div className={s.repliesForReplies}>
											{r.replies ? r.replies.map(rr =>
												<React.Fragment key={Math.random()}>
													<div className={s.repliesForRepliesHeader}>
														<span className={s.name}>Name : <b>{MyComponent(rr.name)}</b></span>
														<span className={s.date}>{createDate}</span>
													</div>
													<div className={s.repliesText}>
														{MyComponent(rr.commentText)}
													</div>
												</React.Fragment>) : ''}
										</div>
									</React.Fragment>) : ''}
							</div>
						</div>
					</div>)}
			</div>
		</div>
	)
};
