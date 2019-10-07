import React from 'react'
import s from './Header.module.scss'



export const Header = ({menuShowStatus,setToggleShowSideBar}) => {



	return (
		<div className={s.headerWrapper}>
			<header className={s.header}>
				<div>
					<h2 className={s.headTitle}>Тестовое задание</h2>
				</div>
				<div className={s.logo}>
				</div>
			</header>
		</div>
	)
};

