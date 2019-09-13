import React from 'react'
import s from './Footer.module.scss'
import {NavLink} from "react-router-dom";
import telegram from "../images/telegram.ico";
import lamp from "../images/lamp.ico";
import brother from "../images/Sfinx.jpg";
import git from "../images/git.ico";


export const Footer = ({menuShowStatus}) => {

	return (
		<div className={!menuShowStatus ? s.footerWrapper : s.footerWrapper+' '+s.footerDisableMenu}>
			<footer className={s.footer}>
				<div className={s.mail}>
					<div>
						© «Онищенко С.М.», 2019
					</div>
					<div>
						<NavLink className={s.link} target='_blank' to="/mailLink">
							Пишите письма
						</NavLink>
					</div>
				</div>

				<div className={s.LinkWrapper}>
					<div className={s.linkLineWrapper}>
						<NavLink className={s.link} target='_blank' to="/djinni">
							<img className={s.linkImg} src={lamp} alt="Джинни"/><span className={s.linkTitle}>Djinni</span>
						</NavLink>
						<NavLink className={s.link} target='_blank' to="/telegram">
							<img className={s.linkImg} src={telegram} alt="Телеграм"/><span className={s.linkTitle}>Telegram</span>
						</NavLink>
						<NavLink className={s.link} target='_blank' to="/git">
							<img className={s.linkImg} src={git} alt="Гитхаб"/><span className={s.linkTitle}>Git</span>
						</NavLink>
					</div>
				</div>

				<div className={s.photoWrapper}>
					<img className={s.photo} src={brother} alt="Brother"/>
				</div>
			</footer>
		</div>
	)
};

