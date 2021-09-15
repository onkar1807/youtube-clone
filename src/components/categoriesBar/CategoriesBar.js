import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/action/videoAction';
import './_categoriesBar.scss'

const keywords = [
    "All",
    "React js",
    "angular js",
    "React Native",
    "use of Api",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh"
]

const CategoriesBar = () => {

    const [activeElements, setActiveElements] = useState('All');
    const dispatch = useDispatch();
    
    const handleClick = (value) => {
        setActiveElements(value)
        if(value === 'All') {
            dispatch(getPopularVideos())
        }
        dispatch(getVideosByCategory(value))
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value, i) => (
                    <span 
                        key={i}
                        onClick={()=>handleClick(value)}
                        className={activeElements === value ? 'active' : ''}
                    >
                        {value}
                    </span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
