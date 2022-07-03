import React, {useCallback, useState} from "react";
import debounce from 'loadash.debounce';

export function FilteredList({names}){
    const [query, setQuery]=useState("");

    let filteredNames=names;
    console.log(filteredNames)
    if(query!==""){

        filteredNames = names.filter((name)=>{
            console.log(name.toLowerCase().includes(query.toLowerCase()))
            return name.toLowerCase().includes(query.toLowerCase());
        })
    }

    const changeHandler = (event)=>{
        console.log(event.target.value)
        setQuery(event.target.value);
    }

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300),[]);

    return(
        <div>
            <input type="text" placeholder="Type here..." onChange={debouncedChangeHandler}/>
            {filteredNames}
            {filteredNames.map((name)=>{
                <div>{name}</div>
            })}
            <div>{filteredNames.length==0 && query!=="" && "No matched found"}</div>
        </div>
    )
}