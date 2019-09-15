import React from 'react'
import s from './Resume.module.scss'
import resume from '../Others/resume_Onishchenko_Sergei.pdf'
import coverLetter from '../Others/cover_Letter_Onishchenko _Sergei.pdf'


export const Resume = (props) => {

	return (
		<div className={s.resumeWrapper}>
			<div className={s.resume}>
				<embed src={resume} width="800px" height="1190px" />
				<embed src={coverLetter} width="800px" height="1190" />
			</div>
		</div>
	);
};

