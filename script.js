let knowledgeBase = JSON.parse(localStorage.getItem("knowledgeBase")) || {};

function renderAllEntries() {
  const allEntries = document.getElementById("allEntries");
  allEntries.innerHTML = "";

  for (let key in knowledgeBase) {
    const li = document.createElement("li");
    li.innerHTML = `<b>${key}</b>: ${knowledgeBase[key]} 
    <button onclick="deleteEntry('${key}')">❌</button>`;
    allEntries.appendChild(li);
  }
}

function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (knowledgeBase[input]) {
    resultDiv.innerHTML = `<p><b>${input}</b>: ${knowledgeBase[input]}</p>`;
  } else {
    resultDiv.innerHTML = "<p>Нічого не знайдено.</p>";
  }
}

function saveEntry() {
  const key = document.getElementById("keyInput").value.toLowerCase();
  const value = document.getElementById("valueInput").value;

  if (key && value) {
    knowledgeBase[key] = value;
    localStorage.setItem("knowledgeBase", JSON.stringify(knowledgeBase));
    renderAllEntries();
    alert("Запис збережено!");
  } else {
    alert("Будь ласка, заповніть обидва поля.");
  }
}

function deleteEntry(key) {
  if (confirm(`Видалити запис "${key}"?`)) {
    delete knowledgeBase[key];
    localStorage.setItem("knowledgeBase", JSON.stringify(knowledgeBase));
    renderAllEntries();
  }
}

renderAllEntries();
