import React from 'react'
import s from './ToDo.module.scss'
import {NavLink} from "react-router-dom";
import telegram from "../image/telegram.ico";
import lamp from "../image/lamp.ico";
import brother from "../image/Sfinx.jpg";
import git from "../image/git.ico";


export const Footer = (props) => {

	return (
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<div className={s.LinkWrapper}>
					<div>
						<div>
							© «Онищенко С.М.», 2019
						</div>
						<div>
							{/*<a href="mailto:Spamoglot13@gmail.com ">Пишите однако...</a>*/}
						</div>
					</div>
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
					<span>Будете копипастить пожалуюсь братану</span>
					<img className={s.photo} src={brother} alt="Brother"/>
				</div>
			</footer>
		</div>
	)
};

