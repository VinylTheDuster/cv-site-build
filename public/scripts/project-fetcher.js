import { supabase } from '../../src/lib/supabase.ts';

const projectGrid = document.getElementById("project-grid");

document.addEventListener("DOMContentLoaded", initializeModule);

if (!projectGrid) {
    console.error("#project-grid introuvable dans le DOM");
}


async function initializeModule(){
    let { data: projects, error } = await supabase
        .from('projects')
        .select('*')

    if (error) {
        console.error('Erreur Supabase :', error.message);
    }

    if (!projects || !projects.length) {
        console.warn(" Aucun projet trouvé dans Supabase")
    }

    //loop in the array
    for (const project of projects) {

        const image = project.image;
        const name = project.name;
        const description = project.description;
        const link = project.link;
        const ongoing = project.ongoing;

        projectGrid.innerHTML +=
        `<div class="project-item">
            <img src="${image}" alt="">
			<h2>${name}</h2>
			<p>${description}</p>
			<a href="${link}" target="_blank">Lien vers le projet</a>
        </div>`
    };
};