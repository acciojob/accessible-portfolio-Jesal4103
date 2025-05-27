//your code here
  <script>
    // Simulating a JSON array from backend
    const projects = [
      { title: "Portfolio Website", tech: "HTML/CSS", year: 2024, type: "Personal", url: "#" },
      { title: "E-commerce Site", tech: "React/Node", year: 2023, type: "Client", url: "#" },
      { title: "Accessibility Tool", tech: "Vue/Express", year: 2022, type: "Open Source", url: "#" },
      { title: "Blog Platform", tech: "Gatsby/GraphQL", year: 2021, type: "Personal", url: "#" },
      { title: "Dashboard UI", tech: "Angular/Firebase", year: 2020, type: "Enterprise", url: "#" }
    ];

    const skills = ["HTML", "CSS", "JavaScript", "ARIA", "Responsive Design"];

    // Populate Skills List
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.setAttribute('role', 'listitem');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Populate Projects List
    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
      const li = document.createElement('li');
      li.setAttribute('role', 'listitem');
      li.innerHTML = `<strong>${project.title}</strong> – ${project.tech} (${project.year}) [${project.type}]`;
      projectsList.appendChild(li);
    });
  </script>