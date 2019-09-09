import React from 'react'
import s from './ToDo.module.scss'


export const ButtonHeaderToDo = ({tasks, removeTask, changeStatusTaskEditForm}) => {
	let statusBtn = tasks.every(t => t.status === false);

	return (
		<div className={s.todoButtons}>
			<button className={s.todoBtnAdd} onClick={() => {
				changeStatusTaskEditForm(true)
			}}>
				Добавить новый прикол
			</button>
			<button className={s.todoBtnDell} disabled={statusBtn} onClick={() => {
				removeTask()
			}}>
				Удалить выделенные
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