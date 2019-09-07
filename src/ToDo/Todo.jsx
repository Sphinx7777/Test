import React from 'react'
import s from './ToDo.module.scss'
import settings from './../image/Settings.ico'


let tasks = [
	{id: 1, description: 'learn React', status: false},
	{id: 2, description: 'learn JS', status: false},
	{id: 3, description: 'learn Redux', status: false}
];

const Todo = (props) => {

	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div><h2>Список дел которые надо успеть ...</h2></div>
				<div className={s.todoButtons}>
					<button className={s.todoBtn} onClick={() => {console.log('edit')}}>
						Добавить новый прикол
					</button>
					<button className={s.todoBtn} onClick={() => {console.log('edit')}}>
						Удалить выделенные
					</button>
				</div>
				<div className={s.todoList}>
					<div className={s.listWrapper}>
						{tasks.map((t, index) => {
							return (<div className={s.task} key={index}>
									<div className={s.inputWrapper}>
										<input className={s.taskStatus}
													 type="checkbox"
													 onChange={(event) => {
														 console.log(event.target.checked)
													 }}/>
									</div>
									<span className={s.taskDescription}>{t.description}</span>
									<span className={s.taskEdit}
												onClick={() => {
													console.log('edit')
												}}>
										<img className={s.settingsIcon} src={settings} alt=""/>
									</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)

};

export default Todo;