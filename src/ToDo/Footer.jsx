import React from 'react'
import s from './ToDo.module.scss'
import {NavLink} from "react-router-dom";
import telegram from "../image/telegram.ico";
import lamp from "../image/lamp.ico";
import brother from "../image/Sfinx.jpg";


export const Footer = (props) => {

	return (
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<div className={s.LinkWrapper}>© «Онищенко С.М.», 2019 -
					<NavLink className={s.link} target='_blank' to="/telegram">
						<img className={s.linkImg} src={telegram} alt="Телеграм"/><span className={s.linkTitle}>Telegram</span>
					</NavLink>
					<NavLink className={s.link} target='_blank' to="/djinni">
						<img className={s.linkImg} src={lamp} alt="Джинни"/><span className={s.linkTitle}>Djinni</span>
					</NavLink>
				</div>
				<div className={s.photoWrapper}>
					<span>Будете копипастить пожалуюсь братану</span>
					<img className={s.photo} src={brother} alt="Brother"/>
				</div>
			</footer>
		</div>
	)
};

