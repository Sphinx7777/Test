import React from 'react'
import s from './Test.module.scss'


export const HeaderTest = (
	{
		articleData,
		MyComponent,
		createDate
	}) => {

	return (
		<>
			<div className={s.itemHeader}>
					<span>
						{articleData.title}
					</span>
				<span>
						{createDate}
					</span>
			</div>

			<div className={s.itemText}>
				{MyComponent(articleData.text)}
			</div>
		</>
	)
};
