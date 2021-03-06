import React from "react"
import {
  FaGithubAlt,
  FaLinkedin,
  FaTwitterSquare,
  FaCode,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubAlt className="social-icon"></FaGithubAlt>,
    url: "https://www.github.com/migben",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/miguelben",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/SutzakuX",
  },
  {
    id:4,
    icon: <FaCode className="social-icon"></FaCode>,
    url: "https://leetcode.com/migben/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
