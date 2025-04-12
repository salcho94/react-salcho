import React from 'react';

const TechButton = ({tech}) => {
    const importantTechnologies = ["TypeScript", "Next.js", "React","Jquery","Javascript","Html","Jstl","Jsp"];
    const isImportantTag = (tech) => importantTechnologies.includes(tech);

    const btnClass = isImportantTag(tech) ? "btn-outline-warning" : "btn-outline-info";
    return (
        <button className={`${btnClass} mr-1 mb-1 radius`}>
            {tech}
        </button>
    );
}

export default TechButton