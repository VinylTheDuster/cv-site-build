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
        alert('Erreur Supabase :', error.message)
    }

    if (!projects || !projects.length) {
        alert('Aucun contenu trouvé dans Supabase')
    }

    // loop in the rows of the “projects” table
    for (const project of projects) {

        // const ongoing = project.ongoing; => to assign later

        // to store a possible placeholder
        let image = "";

        // check if project.image contain nothing
        if (!project.image) {
            image = 'https://sivtvabtcdjkbwygrxjk.supabase.co/storage/v1/object/sign/projects-thumbnails/placeholderthumbnail.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZmM5ZDcyMy0zYWFlLTQzMmUtOGExOC1kOWYwMzZiNDc2ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0cy10aHVtYm5haWxzL3BsYWNlaG9sZGVydGh1bWJuYWlsLnBuZyIsImlhdCI6MTc1NTE5MTYwNSwiZXhwIjoxNzU1NjIzNjA1fQ.ymQ2pTRb0AfDRDyPyZce3fnj8UPiWC---UXBzErifnM';
        } else {
            image = project.image;
        }

        // includes a div class="project-item" in projectGrid with the appropriate content for all rows in the “projects” table
        projectGrid.innerHTML +=
        `<div class="project-item">
            <img src="${image}" alt="">
			<h2>${project.name}</h2>
			<p>${project.description}</p>
			<a href="${project.link}" target="_blank" rel="noopener noreferrer">Lien vers le projet</a>
        </div>`
    };
};