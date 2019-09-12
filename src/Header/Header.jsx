import React from 'react'
import s from './Header.module.scss'


export const Header = (props) => {

	return (
		<div className={s.headerWrapper}>
			<header className={s.header}>
				<div>
					<h2 className={s.headLine}>Тренировочный проект</h2>
					<span className={s.comment}>"Постоянно дорабатывается"</span>
				</div>

			</header>
		</div>
	)
};

