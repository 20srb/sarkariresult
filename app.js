// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column, index) => {
    setTimeout(() => {
      column.classList.add("show");
    }, index * 200); // delay each column slightly
  });
});

