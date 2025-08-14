import { supabase } from '../../src/lib/supabase.ts';

// stock the container containing the project-items
const projectGrid = document.getElementById("project-grid");

// triggers function intializeModule(); when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeModule);


async function initializeModule(){
    // store the rows of the “projects” table in the SQL database
    let { data: projects, error } = await supabase
        .from('projects')
        .select('*')

    // in the event of any error on the part of Supabase
    if (error) {
        console.error('Erreur Supabase :', error.message);
    }

    if (!projects || !projects.length) {
        console.warn(" Aucun projet trouvé dans Supabase")
    }

    // loop in the rows of the “projects” table
    for (const project of projects) {

        // stock each column of the “project” element
        const image = project.image;
        const name = project.name;
        const description = project.description;
        const link = project.link;
        const ongoing = project.ongoing;

        // includes a div class="project-item" in projectGrid with the appropriate content for all rows in the “projects” table
        projectGrid.innerHTML +=
        `<div class="project-item">
            <img src="${image}" alt="">
			<h2>${name}</h2>
			<p>${description}</p>
			<a href="${link}" target="_blank">Lien vers le projet</a>
        </div>`
    };
};