const data={
clinic:{title:"Children’s Medical Clinic Expansion",amount:"$150,000",text:"Expand the existing clinic with additional treatment rooms, improved patient circulation, storage, and updated utilities. The purpose is to increase the number of children who can be treated safely and efficiently."},
water:{title:"School Water System",amount:"$18,500",text:"Provide dependable water storage, filtration, and distribution for the school. The project is intended to improve sanitation, drinking water availability, and daily school operations."},
desks:{title:"Replace Classroom Desks",amount:"$3,600",text:"Replace 24 damaged desks with durable workstations. This is deliberately shown as a small task so modest needs can be presented with the same clarity as large construction projects."},
training:{title:"Vocational Training Workshop",amount:"$72,000",text:"Create a practical skills workshop where participants can learn carpentry, electrical work, mechanical repair, and other employable trades."},
shade:{title:"Repair Playground Shade",amount:"$1,850",text:"Replace damaged shade fabric and anchoring hardware over the children’s play area. A small, finite project with an immediately visible result."},
garden:{title:"Community Garden & Irrigation",amount:"$11,500",text:"Build raised planting beds, install basic irrigation, and provide tools and starter materials. The garden would support food production, education, and neighborhood participation."}
};
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".project-card").forEach(card=>card.style.display=(f==="all"||card.classList.contains(f))?"flex":"none");
}));
function openModal(key){const d=data[key];document.getElementById("modal-title").textContent=d.title;document.getElementById("modal-text").textContent=d.text;document.getElementById("modal-amount").textContent=d.amount;document.getElementById("modal").classList.add("show")}
function closeModal(e,force=false){if(force||e.target.id==="modal")document.getElementById("modal").classList.remove("show")}
