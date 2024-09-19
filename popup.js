document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get(["scores"], function (result) {
    const scores = result.scores || [];
    const table = document.getElementById("scoresTable");

    scores.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));


    scores = scores.splice(0, 10);

    scores.forEach(function (score) {
      const row = table.insertRow(-1);
      const scoreCell = row.insertCell(0);
      const dateCell = row.insertCell(1);
      const timeCell = row.insertCell(2);

      const date = new Date(score.timestamp);

      scoreCell.textContent = score.score;
      dateCell.textContent = date.toLocaleDateString();
      timeCell.textContent = date.toLocaleTimeString();
    });
  });
});
