function includeHTML(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => {
      console.error(`Could not load ${url}:`, err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "/grp109/team_project/recurring/header.html");
  includeHTML("footer-placeholder", "/grp109/team_project/recurring/footer.html");
});
