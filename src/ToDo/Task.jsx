import React, {useState} from 'react'
import s from './ToDo.module.scss'
import settings from './../image/Settings.ico'
import add from './../image/add.ico'


export const Task = ({
											 newTasks, changeTask, changeTaskStatus, setToggleEditTask, editTask,
											 editDescriptionStatus
										 }) => {
	let [editValue, setEditValue] = useState('');
	let [name, setName] = useState('');
	let setChangedText = (id) => {
		editValue.length > 1 &&
		changeTask(id, editValue, name);
	};


	return (
		<>
			{newTasks.map((t, i) => {
				return (
					<div key={t.id + i} className={s.taskWrapper}>
						<div className={s.taskName}>

							{!editDescriptionStatus
								? <div><span>Название : </span><span className={s.name}>{t.name}</span></div>
								: <input className={s.editName}
												 defaultValue={t.name}
												 onChange={(event) => {
													 setName(event.currentTarget.value)
												 }}/>
							}
							<div><span>Дата создания : </span><span className={s.date}>{t.createDate}</span></div>
						</div>
						<div className={s.task}>
							<div className={!t.status ? s.inputWrapper : s.inputWrapper + ' ' + s.changed}>
								<input className={s.taskStatus}
											 type="checkbox"
											 checked={t.status}
											 onChange={(event) => {
												 changeTaskStatus(t.id, event.target.checked)
											 }}/>
							</div>
							{!editDescriptionStatus
								? <span
									className={!t.status
										? s.taskDescription
										: s.taskDescription + ' ' + s.taskDescriptionOff}>
											{t.description ? t.description : 'Странно...что то да должно было быть...перезагрузите страницу'}
										</span>
								: <div className={s.areaWrapper}>
											<textarea className={s.area} cols='50' rows='3' maxLength='200'
																defaultValue={t.description} onChange={(e) => {
												setEditValue(e.currentTarget.value)
											}}/>
								</div>
							}
							{!editDescriptionStatus
								? <span className={s.taskEdit} title='Редактировать'
												onClick={() =>
													editTask(t.id, true)}>
												<img className={s.settingsIcon} src={settings} alt="Редактировать"/>
									</span>
								: <div className={s.edit}>

									<span className={s.taskEdit} title='Сохранить'
												onClick={() =>
													setChangedText(t.id)}>
												<img className={s.settingsIcon} src={add} alt="Сохранить"/>
									</span>
									<span className={s.closeEdit} onClick={() => setToggleEditTask(false)} title='Закрыть'>X</span>
								</div>}
						</div>
					</div>
				)
			})}
		</>
	)
};

