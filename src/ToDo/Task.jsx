import React, {useState, useEffect} from 'react'
import s from './ToDo.module.scss'
import settings from '../images/settings.ico'
import add from '../images/add.ico'




export const Task = ({
											 newTasks, changeTask, changeTaskStatus, editTask, editMode,
											 toggleEditStatus, defaultName, defaultValue
										 }) => {
	let [editValue, setEditValue] = useState(defaultValue);
	let [name, setName] = useState(defaultName);
	let [error, setError] = useState(false);

	useEffect(() => {
		setName(defaultName);
		setEditValue(defaultValue);
	}, [defaultValue, defaultName]);

	let setChangedText = (id) => {
		if (name.length >= 1 && editValue.length >= 1) {
			changeTask(id, editValue, name, false);
			setError(false);
		} else {
			setError(true)
		}
	};


	return (
		<>
			{newTasks.map((t, i) => {
				return (
					<div key={t.id + i} className={s.taskWrapper}>
						<div className={s.taskName}>
							{!t.editStatus
								? <div><span>Название : </span><span className={s.name}>{t.name}</span></div>
								: <div>
									<span
										className={!error ? s.fieldEditMode : s.fieldEditMode + ' ' + s.error}>Min 1 && Max 25 symbols : </span>
									<input className={!error ? s.editName : s.editName + ' ' + s.error}
												 defaultValue={t.name}
												 maxLength='25'
												 minLength='1'
												 autoFocus={true}
												 placeholder='Min 1 && Max 25 symbols'
												 onChange={(event) => {
													 setName(event.currentTarget.value)
												 }}
												 onKeyUp={(event) => {
													 if (event.key === 'Enter') {
														 setChangedText(t.id)
													 } else if (event.key === 'Escape') {
														 setError(false);
														 toggleEditStatus(t.id, false);
													 }}}/>
								</div>
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
								{!t.status ? <span>Завершить</span> : <span className={s.taskCompleted}>Ок!</span>}

							</div>
							{!t.editStatus
								? <div
									className={!t.status
										? s.taskDescription
										: s.taskDescription + ' ' + s.taskDescriptionOff}>
									{t.description ? t.description : 'Странно...что то да должно было быть...забыли написать наверное'}
								</div>
								: <div className={s.areaWrapper}>
									<div className={!error ? s.areaEditMode : s.areaEditMode + ' ' + s.error}>Min 1 && Max 300 symbols
									</div>
									<textarea className={!error ? s.area : s.area + ' ' + s.error} cols='30' rows='3' maxLength='300'
														minLength='1'
														placeholder='Min 1 && Max 300 symbols'
														defaultValue={t.description}
														onChange={(e) => {
															setEditValue(e.currentTarget.value)
														}}
														onKeyUp={(event) => {
															if (event.key === 'Enter') {
																setChangedText(t.id)
															} else if (event.key === 'Escape') {
																setError(false);
																toggleEditStatus(t.id, false)
															}
														}}/>
								</div>
							}
							{!t.editStatus
								? <button className={s.taskEdit} title='Редактировать'
													onClick={() =>
														editTask(t.id, t.name, t.description)} disabled={editMode}>
									<img className={s.settingsIcon} src={settings} alt="Редактировать"/>
								</button>
								: <div className={s.edit}>

									<span className={s.taskEdit} title='Сохранить'
												onClick={() =>
													setChangedText(t.id)}>
												<img className={s.settingsIcon} src={add} alt="Сохранить"/>
									</span>
									<span className={s.closeEdit} onClickCapture={() => {
										setError(false);
									}} onClick={() => toggleEditStatus(t.id, false)} title='Закрыть'>X</span>
								</div>}
						</div>
					</div>
				)
			})}
		</>
	)
};

