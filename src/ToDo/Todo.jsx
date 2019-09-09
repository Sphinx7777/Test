import React, {useState} from 'react'
import s from './ToDo.module.scss'
import settings from './../image/Settings.ico'
import add from './../image/add.ico'
import FormForTask from "./FormForTask";


const Todo = (props) => {
	let {
		tasks, addNewTask, removeTask, changeTask,
		changeTaskStatus, editMode, changeStatusTaskEditForm, allMark, changeStatusAllTasks
	} = props;
	let onSubmit = (e) => {
		addNewTask({id: Math.random(), name: e.name, description: e.description, status: false})
	};
	let statusBtn = tasks.every(t => t.status === false);

	let [editValue, setEditValue] = useState('');
	let [editText, setEditText] = useState(false);

	let setChangedText = (id) => {
		editValue.length > 1 &&
		changeTask(id, editValue);
		setEditText(false);
	};


	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div><h2>Список дел которые надо успеть ...</h2></div>

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

				{editMode && <div className={s.formForTask}>
					<FormForTask onSubmit={onSubmit} changeStatusTaskEditForm={changeStatusTaskEditForm}/>
				</div>}


				<div className={s.allMark}>
					<input className={s.allMarkCheck}
								 onChange={(event) => {
									 changeStatusAllTasks(event.target.checked)
								 }} checked={allMark} type="checkbox"/>Отметить все
				</div>


				<div className={s.todoList}>
					<div className={s.listWrapper}>


						{tasks.map((t, i) => {
							return (<div key={t.id + i}>
									<div className={s.taskName}>{t.name}</div>
									<div className={s.task}>
										<div className={s.inputWrapper}>
											<input className={s.taskStatus}
														 type="checkbox"
														 checked={t.status}
														 onChange={(event) => {
														 	changeTaskStatus(t.id, event.target.checked)}}/>
										</div>
										{!editText ? <span
												className={!t.status ? s.taskDescription : s.taskDescription + ' ' + s.taskDescriptionOff}>
											{t.description ? t.description : '--------------------------'}
										</span>
											: <div className={s.areaWrapper}>
											<textarea className={s.area} cols='20' rows='3'
																defaultValue={t.description} onChange={(e) => {
												setEditValue(e.currentTarget.value)
											}}/>
											</div>
										}
										{!editText ? <span className={s.taskEdit} title='Редактировать'
																			 onClick={() =>
																				 setEditText(true)}>
												<img className={s.settingsIcon} src={settings} alt="Редактировать"/>
									</span>
											: <span className={s.taskEdit} title='Сохранить'
															onClick={() =>
																setChangedText(t.id)}>
												<img className={s.settingsIcon} src={add} alt="Сохранить"/>
									</span>}
									</div>
								</div>
							)})}


					</div>
				</div>


				<div className={s.footer}>
					<div className={s.allCount}>Общее количество : {tasks.length}</div>
					<div className={s.filter}>
						<div className={s.filterItem} onClick={() => {
							console.log('Все')
						}}>Все
						</div>
						<div className={s.filterItem} onClick={() => {
							console.log('Активные')
						}}>Активные
						</div>
						<div className={s.filterItem} onClick={() => {
							console.log('Завершенные')
						}}>Завершенные
						</div>
					</div>
				</div>


			</div>
		</div>
	)
};

export default Todo;