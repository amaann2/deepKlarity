import { category, projects } from "./data"
import './MyProject.css'
import { useState } from 'react'
const MyProject = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleFilterClick = (category) => {
        setSelectedCategory(category);

    };
    const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);
    return (
        <div className="" id="project">
            <h2 className="title">My Projects</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. . Adipisci quas dolores dicta nemo at atque eius<br /> velit sequi tempora provident?</p>
            <div className="filter">
                {category.map((cat) => (
                    <div onClick={() => handleFilterClick(cat.name)} key={cat.id} className={cat.name === selectedCategory ? "active" : ""}>{cat.name}</div>
                ))}
            </div>
            <div className="small-container">
                <div className="row">
                    {filteredProjects && filteredProjects.map((project) => (
                        <div className="col-3 project-card" key={project.id}>
                            <img src={project.image} alt="" />
                            <p>{project.category}</p>
                            <h2>{project.name}</h2>
                        </div>
                    ))}
                </div >
            </div>
        </div>
    )
}

export default MyProject