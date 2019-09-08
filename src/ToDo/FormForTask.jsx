import React from 'react'
import s from './ToDo.module.scss'
import * as handleSubmit from "redux-form";





export const FormForTask = (props) => {

	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(props.onSubmit)}>
				<div>
					<input type="text" placeholder='Название'/>
				</div>
				<div>
					<input type="text" placeholder='Описание'/>
				</div>


				<button>Сохранить</button>
			</form>

		</div>
	)

};
