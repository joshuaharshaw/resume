function animate (e) {
  const target = e.target;
  
  console.log(target); 

    console.log("animate"); 

  if (target.className == "project-border") {

  	 target.className += ' animate';

  	 target.dataset.status = "open"
  }
 
}


function reset (e) {

	console.log("reset"); 

	const target = e.target;

	if (target.dataset.status == "open") {

		document.querySelector('.animate').className = "project-border";

		target.dataset.status = "closed"

	}

}


const covers = document.getElementsByClassName('project-border');

for (i=0; i<covers.length; i++) {
  covers[i].addEventListener('click', animate);
}


const projects = document.getElementsByClassName('project');

for (i=0; i<projects.length; i++) {
  projects[i].addEventListener('click', reset);
}
