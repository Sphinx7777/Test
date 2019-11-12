import React from 'react';
import s from './Preloader.module.scss';


export const Preloader = () => {

	return (
		<div className={s.preloader}>
			<span className={s.preloadText}>
				Загружаем...ожидайте
			</span>
			<img className={s.preloadImg}
					 src={'/images/settings.ico'}
					 alt=""
			/>
		</div>)
};