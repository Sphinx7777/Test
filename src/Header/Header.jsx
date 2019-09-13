import React, {useState} from 'react'
import s from './Header.module.scss'
import brother from "../images/Sfinx.jpg";


export const Header = (props) => {

	let [menuShow, setMenuShow] = useState(false);

	return (
		<div className={s.headerWrapper}>
			<header className={s.header}>
				<div className={s.menu}>
					{!menuShow
						? <div className={s.toggleMenu} onClick={()=>{setMenuShow(true)}}>Показать меню</div>
						: <div className={s.toggleMenu} onClick={()=>{setMenuShow(false)}}>Скрыть меню</div>
					}
				</div>
				<div>
					<h2 className={s.headTitle}>Тренировочный проект</h2>
					<span className={s.comment}>"Постоянно дорабатывается"</span>
				</div>
				<div className={s.logo}>
					<img className={s.logoImg} src={brother} alt="Логотип"/>
				</div>
			</header>
		</div>
	)
};

