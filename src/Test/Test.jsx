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



export const Test = () => {





	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div className={s.filterWrapper}>
					xfsddsdsds
				</div>
<button>like</button>
				{createDate}
			</div>
		</div>
	)
};
