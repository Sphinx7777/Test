import React from 'react'
import s from './ToDo.module.scss'


export const ButtonHeaderToDo = ({tasks,removeTask,editDescriptionStatus,changeStatusTaskEditForm}) => {
	let statusBtn = tasks.every(t => t.status === false);
let disableBtnAdd = tasks.length>=50;

	return (
		<div className={s.todoButtons}>
			<button className={s.todoBtnAdd} disabled={disableBtnAdd || editDescriptionStatus} onClick={() => {
				changeStatusTaskEditForm(true)
			}}>{!disableBtnAdd ? 'Добавить новое задание' : 'Максимум 50 заданий'}

			</button>
			<button className={s.todoBtnDell} disabled={statusBtn} onClick={() => {
				removeTask()
			}}>
				Удалить завершенные
			</button>
		</div>
	)
};


export const MarkAllTasks = ({allMark, changeStatusAllTasks}) => {

	return (
		<div className={s.allMark}>
			<input className={s.allMarkCheck}
						 onChange={(event) => {
							 changeStatusAllTasks(event.target.checked)
						 }} checked={allMark} type="checkbox"/>Отметить все
		</div>
	)
};


