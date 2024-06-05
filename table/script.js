const adaptiveTables = document.querySelectorAll('.adaptive-table');

adaptiveTables.forEach((table) => {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  tbody.querySelectorAll('tr').forEach((row) => {
    row.querySelectorAll('td').forEach((cell, i) => {
      cell.setAttribute('data-label', thead.querySelectorAll('th')[i].textContent);
    });
  });
});
