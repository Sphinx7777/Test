import React from 'react'
import s from './Resume.module.scss'
import resume from '../Others/resumeOnishchenkoSergei.pdf'
import coverLetter from '../Others/coverLetterOnishchenkoSergei.pdf'


export const Resume = (props) => {

	return (
		<div className={s.resumeWrapper}>
			<div className={s.resume}>
				<embed src={resume} width="800px" height="1190px" type="application/pdf"/>
				<embed src={coverLetter} width="800px" height="1190" type="application/pdf"/>
			</div>
		</div>
	);
};

