import React, { useState } from 'react'

function Languages() {
    const languages = [
        {
            name: "HTML",
            backgroundColor: "#E2680F",
            color: "#F9F4DA",
        },
        {
            name: "CSS",
            backgroundColor: "#328AF1",
            color: "#F9F4DA",
        },
        {
            name: "JavaScript",
            backgroundColor: "#F4EB13",
            color: "#1E1E1E",
        },
        {
            name: "React",
            backgroundColor: "#2ED3E9",
            color: "#1E1E1E",
        },
        {
            name: "TypeScript",
            backgroundColor: "#298EC6",
            color: "#F9F4DA",
        },
        {
            name: "Node.js",
            backgroundColor: "#599137",
            color: "#F9F4DA",
        },
        {
            name: "Python",
            backgroundColor: "#FFD742",
            color: "#1E1E1E",
        },
        {
            name: "Ruby",
            backgroundColor: "#D02B2B",
            color: "#F9F4DA",
        },
        {
            name: "Assembly",
            backgroundColor: "#2D519F",
            color: "#F9F4DA",
        },
    ]
    
             const LangageElements= languages.map((lang,index) => (
            <span className=''
            key={lang.name}
            style={{
                backgroundColor: lang.backgroundColor,
                color: lang.color,
                padding: "5px 10px",
                margin: "5px",
                borderRadius: "3px",
                display: "inline-block",
            }}
        >
            {lang.name}
        </span>
    ))
  return (
    <div className='flex flex-wrap justify-content-center w-3'>
  
{ LangageElements}
    </div>
  )
}

export default Languages
