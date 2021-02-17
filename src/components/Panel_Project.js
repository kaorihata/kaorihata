import { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import "./Panels.css";

/* 
  * style
*/
const Strong = styled.span`
  font-weight: bold;
`
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    filter: contrast(110%);
  }
`
const Link = styled.a`
  color: var(--ink-black);
  &:hover{
    border-bottom: 1px solid var(--ink-black)
  }
`

/* 
  * data
*/
const projectsData = [
  {
    id: 1,
    title: 'HW Web Studio',
    image: '/images/project01.png',
    text: 'One-page portfolio website includes interactive designs with high usability',
    url: 'https://kaorihata.github.io/HW_WebStudio/',
    github: 'https://github.com/kaorihata/HW_WebStudio/',
  },
  {
    id: 2,
    title: 'Janken',
    image: '/images/project02.png',
    text: 'Janken (じゃん拳) is the Japanese version of Rock Paper Scissors',
    url: 'https://kaorihata.github.io/Janken/',
    github: 'https://github.com/kaorihata/Janken/',
  },
  {
    id: 3,
    title: 'City Weather',
    image: '/images/project03.png',
    text: 'An easy-to-use weather application that allows users to easily search the weather and time',
    url: 'https://kaorihata.github.io/CityWeather/',
    github: 'https://github.com/kaorihata/CityWeather/',
  },
  {
    id: 4,
    title: 'Daily',
    image: '/images/project04.png',
    text: 'A News website gathering daily information from New York Times',
    url: 'https://kaorihata.github.io/Daily/',
    github: 'https://github.com/kaorihata/daily/',
  },
]


function Project() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <div className="panel-content">
      {projects.map((project) => (
        <div key={project.id} className="panel-item">
          <a target="_blank" rel="noreferrer noopener" href={project.url}>
            <Img src={process.env.PUBLIC_URL + `${project.image}`} alt={project.title}/>
          </a> 
          <p>
            <Strong>{project.title}: </Strong>{project.text}... <Link target="_blank" href={project.github}>read more</Link>
          </p>
        </div>
      ))}
    </div>
  )
}


export default Project;