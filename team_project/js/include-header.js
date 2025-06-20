function includeHTML(id, url) {
  const target = document.getElementById(id);
  if (!target) return; // Prevents errors if the placeholder is missing

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.text();
    })
    .then(data => {
      target.innerHTML = data;
    })
    .catch(err => {
      console.error(`Could not load ${url}:`, err);
    });
}

// Run as soon as the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "/grp109/team_project/recurring/header.html");
});
