import React, {useState} from 'react'
import s from './ToDo.module.scss'
import search3 from '../images/search3.ico'


export const SearchTask = ({searchTaskByName, searchTaskByDescription}) => {

	let [searchMode, setSearchMode] = useState(false);


	return (
		<div className={s.searchWrapper}>
			{!searchMode ? <div className={s.search} onClick={() => {setSearchMode(!searchMode)}}>
				<img className={s.searchIcon}
													src={search3}
													alt="Открыть поисковую строку"
													/>
													Поиск
			</div>
				: <div className={s.searchWrapperContent}>
					<div>
						<input className={s.searchField} placeholder='По названию'
									 onChange={(event) => {
										 searchTaskByName(event.target.value)
									 }}/>
					</div>
					<div>
						<input className={s.searchField} placeholder='По описанию'
									 onChange={(event) => {
										 searchTaskByDescription(event.target.value)
									 }}/>
					</div>
					<span className={s.closeSearch} onClick={() => setSearchMode(false)}>X</span>
				</div>
			}
		</div>
	)
};
