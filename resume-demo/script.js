function generateSummary() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const level = document.getElementById("level").value;
  const output = document.getElementById("output");

  if (!name || !role || !skills || !level) {
    output.innerText = "⚠️ Please fill in all fields and select profile type.";
    output.style.color = "red";
    return;
  }

  let summary = "";

  if (level === "fresher") {
    summary = `${name} is a motivated ${role} with foundational knowledge in ${skills}. 
    Eager to learn, adapt, and contribute to real-world projects while growing technical expertise.`;
  } else {
    summary = `${name} is an experienced ${role} with strong hands-on experience in ${skills}. 
    Known for delivering efficient solutions, collaborating with teams, and continuously improving application quality.`;
  }

  output.style.color = "#333";
  output.innerText = summary;
}
function copySummary() {
  const output = document.getElementById("output");
  const text = output.innerText;

  if (!text) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Summary copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy text.");
    });
}


