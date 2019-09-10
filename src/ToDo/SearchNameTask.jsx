import React,{useState} from 'react'
import s from './ToDo.module.scss'
import search from './../image/search.ico'
import search3 from './../image/search3.ico'




export const SearchNameTask = ({searchTask}) => {

let [title,setTitle] = useState('');
let [searchMode,setSearchMode] = useState(false);


return (
	<div className={s.searchWrapper}>
		{searchMode && <input className={s.search} placeholder='По названию'
												onChange={(event) => {setTitle(event.target.value)}}
												onKeyPress={(event)=>{if(event.key === 'Enter'){
													searchTask(title)}}}

		/>}
		{searchMode && <span className={s.closeSearch} onClick={()=>setSearchMode(false)}>X</span>}
		{searchMode ? <img className={s.searchIcon}
												src={search}
												alt="Поиск"
												onClick={()=>{searchTask(title)}}
		/>:<img className={s.searchIcon}
						src={search3}
						alt="Открыть поисковую строку"
						onClick={()=>{setSearchMode(!searchMode)}}
		/>
		}

	</div>
)
};
