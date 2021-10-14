import React from 'react'
import {Form} from 'react-bootstrap'
import './FilterByName'

export const FilterByName = ({inputSearch,setinputSearch}) => {
    return (
        <div>
            <Form.Control type="text" placeholder="Enter movie title..." 
            onChange={(e)=>setinputSearch(e.target.value)}
            value={inputSearch} />
        </div>
    )
}

