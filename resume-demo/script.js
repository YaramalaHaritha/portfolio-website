function generateSummary() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const output = document.getElementById("output");
  if(!name || !role || !skills){
    output.innerText ="Please fill in all fields to generate a summery";
    output.style.color ="red";
    return;
  }

  const summary = `${name} is an enthusiastic ${role} with practical experience in ${skills}. 
   Known for a strong willingness to learn, problem-solving mindset, and intrest in building clean, user-friendly web applications.`;

   output.style.color = "#333"
   output.innerText = summary;

  
}

