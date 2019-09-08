import React from 'react'


export const Input = (props) => {

let {input, label, type, autoFocus, typeComponent, cols, rows, autocomplete,meta: { touched, error, warning }}=props;


	return (
	<div>
		<div>
			{typeComponent==='input' ? <input {...input} placeholder={label} type={type} autoFocus={autoFocus}/>
			: <textarea {...input} placeholder={label} cols={cols} rows={rows} autocomplete={autocomplete} autoFocus={autoFocus}/>}

			{touched &&
			((error && <span>{error}</span>) ||
				(warning && <span>{warning}</span>))}


		</div>
	</div>
)
};