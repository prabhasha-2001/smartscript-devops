let qr;

function addMedicine() {
  const div = document.createElement("div");
  div.className = "medicine";

  div.innerHTML = `
    <input class="drug" placeholder="Drug Name">
    <input class="dose" placeholder="Dose (e.g. 500mg)">
    <input class="dosage" placeholder="Dosage (e.g. 1 tablet twice daily)">
  `;

  document.getElementById("medicineList").appendChild(div);
}

function generatePrescription() {
  let medicineRows = "";

  document.querySelectorAll(".medicine").forEach((med, index) => {
    const drug = med.querySelector(".drug").value;
    const dose = med.querySelector(".dose").value;
    const dosage = med.querySelector(".dosage").value;

    if (drug && dose && dosage) {
      medicineRows += `${index + 1}. ${drug} | ${dose} | ${dosage}\n`;
    }
  });

  if (!medicineRows) {
    alert("Add at least one medicine");
    return;
  }

  const prescription = `
Patient Name : ${patientName.value}
Age          : ${age.value}
Disease      : ${disease.value}

--------------------------------
Drug Details
--------------------------------
${medicineRows}

Doctor Name  : ${doctorName.value}
SLMC No      : ${doctorReg.value}
Hospital     : ${hospital.value}
`;

  output.innerText = prescription;

  qrcode.innerHTML = "";
  qr = new QRCode(qrcode, prescription);
}

function saveQR() {
  const img = document.querySelector("#qrcode img");
  if (!img) {
    alert("Generate prescription first");
    return;
  }

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "prescription_qr.png";
  a.click();
}

