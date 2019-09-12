import React, {useState} from 'react'
import s from './ToDo.module.scss'
import settings from './../image/Settings.ico'
import add from './../image/add.ico'


export const Task = ({
											 newTasks,changeTask,changeTaskStatus,editTask,editMode,
											 toggleEditStatus,defaultName,defaultValue
										 }) => {
	let [editValue, setEditValue] = useState(defaultValue);
	let [name, setName] = useState(defaultName);

	let setChangedText = (id) => {
			changeTask(id, editValue, name, false);
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
									<span className={s.fieldEditMode}>Min 1 && Max 25 symbols : </span>
									<input className={s.editName}
												 defaultValue={t.name}
												 maxLength='25'
												 minLength='1'
												 placeholder='Min 1 && Max 25 symbols'
												 onChange={(event) => {
													 setName(event.currentTarget.value)
												 }}/>
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
							</div>
							{!t.editStatus
								? <span
									className={!t.status
										? s.taskDescription
										: s.taskDescription + ' ' + s.taskDescriptionOff}>
											{t.description ? t.description : 'Странно...что то да должно было быть...забыли написать наверное'}
										</span>
								: <div className={s.areaWrapper}>
									<div className={s.areaEditMode}>Min 1 && Max 200 symbols</div>
									<textarea className={s.area} cols='30' rows='3' maxLength='200' minLength='1'
														placeholder='Min 1 && Max 200 symbols'
														defaultValue={t.description}
														onChange={(e) => {
										setEditValue(e.currentTarget.value)
									}}/>
								</div>
							}
							{!t.editStatus
								? <button className={s.taskEdit} title='Редактировать'
													onClick={() =>
														editTask(t.id,t.name,t.description)} disabled={editMode}>
									<img className={s.settingsIcon} src={settings} alt="Редактировать"/>
								</button>
								: <div className={s.edit}>

									<span className={s.taskEdit} title='Сохранить'
												onClick={() =>
													setChangedText(t.id)}>
												<img className={s.settingsIcon} src={add} alt="Сохранить"/>
									</span>
									<span className={s.closeEdit} onClick={() => toggleEditStatus(t.id, false)} title='Закрыть'>X</span>
								</div>}
						</div>
					</div>
				)
			})}
		</>
	)
};

