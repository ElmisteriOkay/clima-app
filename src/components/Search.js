import React, {useState} from 'react';
import { FcSearch } from 'react-icons/fc';

function Search({search}) {
	const [query, setQuery] = useState('London');

	const keyPre = e => {
		if(e.key === "Enter"){
			search(query);
			console.log(query)
			setQuery(''); //
		}
	} 

	const onClick = () => {
		search(query);
		console.log(query)
		setQuery(''); //
	}

	return (
			<div className="search-box">
	          <input 
	            type="text" 
	            className="search-bar" 
	            placeholder="Buscar ciudad/pais..." 
	            onChange={e => setQuery(e.target.value)}
	            value={query}
	            onKeyPress={keyPre}
	          />
			  <button className="search-btn" onClick={onClick}>
			  	<FcSearch />
			   </button>
	        </div>
	);
}

export default Search;