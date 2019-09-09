import React from 'react'
import s from './ToDo.module.scss'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormComponents/Input";


const FormForTask = (props) => {
	const {handleSubmit, pristine, reset, submitting,onSubmit,changeStatusTaskEditForm} = props;


	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
				<Field
					typeComponent='input'
					autoFocus={true}
					name="name"
					type="text"
					component={Input}
					label="Название"
				/>
				</div>
				<div>
				<Field
					cols= '25'
					rows='3'
					typeComponent='textarea'
					name="description"
					type="text"
					component={Input}
					label="Описание"
				/>
				</div>
				<div>
					<button type="submit" disabled={submitting}>
						Сохранить
					</button>
					<button type="button" disabled={pristine || submitting} onClick={reset}>
						Очистить
					</button>
				</div>
				<div className={s.closeForm} onClick={()=>{changeStatusTaskEditForm(false)}}><span className={s.closeFormBtn}>X</span></div>
			</form>
		</div>
	)
};

export default reduxForm({form: 'taskForm'})(FormForTask)

