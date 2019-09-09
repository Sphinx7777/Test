import React, {useState} from 'react'
import s from './ToDo.module.scss'
import settings from './../image/Settings.ico'
import add from './../image/add.ico'


export const Task = ({newTasks,changeTask, changeTaskStatus}) => {
	let [editValue, setEditValue] = useState('');
	let [editText, setEditText] = useState(false);
	let setChangedText = (id) => {
		editValue.length > 1 &&
		changeTask(id, editValue);
		setEditText(false);
	};

	return (
		<>
			{newTasks.map((t, i) => {
				return (<div key={t.id + i}>
						<div className={s.taskName}>{t.name}</div>
						<div className={s.task}>
							<div className={!t.status ? s.inputWrapper : s.inputWrapper +' '+ s.changed}>
								<input className={s.taskStatus}
											 type="checkbox"
											 checked={t.status}
											 onChange={(event) => {
												 changeTaskStatus(t.id, event.target.checked)
											 }}/>
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
				)
			})}
		</>
	)
};

