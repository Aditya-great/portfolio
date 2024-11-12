// Simple JavaScript to toggle a project's details
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const details = project.querySelector('.project-details');
  const toggleButton = project.querySelector('.toggle-button');

  toggleButton.addEventListener('click', () => {
    details.classList.toggle('active');
    toggleButton.textContent = details.classList.contains('active') ? 'Hide Details' : 'Show Details';
  });
});