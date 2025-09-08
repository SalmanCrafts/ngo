function handleDecision(isAccepted) {
  const messageDiv = document.getElementById("message");
  const historyList = document.getElementById("historyList");

  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  if (isAccepted) {
    messageDiv.textContent = "✅ Food Donation Accepted";
    messageDiv.style.color = "#00704a";

    const li = document.createElement("li");
    li.textContent = `Cooked - Biryani, 25 packs from Mohammed Salman (Vellore) 
      - Accepted on ${formattedDate} at ${formatter.format(now)}`;

    if (historyList.children[0].textContent === "No history available") {
      historyList.innerHTML = "";
    }

    historyList.appendChild(li);
  } else {
    messageDiv.textContent = "❌ Food Donation Rejected";
    messageDiv.style.color = "#e74c3c";
  }
}

function toggleSection(sectionId, button) {
  const section = document.getElementById(sectionId);
  const isHidden = section.style.display === "none";

  section.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden
    ? `Hide ${sectionId === "foodSection" ? "Food" : "History"} Section`
    : `Show ${sectionId === "foodSection" ? "Food" : "History"} Section`;
}
