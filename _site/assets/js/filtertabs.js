
function filterProject(evt,projectType) {
  var allProjects = Array.from(document.getElementsByClassName('project'));
  var selectedProjects = Array.from(document.getElementsByClassName('project ' + projectType));
  allProjects.forEach(function(e) {
    e.style = "display: none;opacity: 0;";

  });

  $.each( selectedProjects, function( index, value ){
    value.style = "display: block;opacity: 0"
    $(value).delay(50).animate({opacity:'1',bottom: '20px'},500);
});

tablinks = Array.from(document.getElementsByClassName("tablink"));
tablinks.forEach(function(e) {
    e.className = e.className.replace(" w3-red", "");
  });
evt.currentTarget.className += " w3-red";
}
