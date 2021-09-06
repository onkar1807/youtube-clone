import React, { useState } from 'react'
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
    
    const handleClick = (value) => {
        setActiveElements(value)
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
