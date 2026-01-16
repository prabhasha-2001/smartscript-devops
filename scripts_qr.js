let qr;

// Add new medicine row
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

// Generate real prescription format
function generatePrescription() {

  let medicineRows = "";

  document.querySelectorAll(".medicine").forEach((med, index) => {
    const drug = med.querySelector(".drug").value;
    const dose = med.querySelector(".dose").value;
    const dosage = med.querySelector(".dosage").value;

    if (drug && dose && dosage) {
      medicineRows += `${index + 1}. ${drug.padEnd(15)} ${dose.padEnd(10)} ${dosage}\n`;
    }
  });

  const prescription = `
Patient Name : ${document.getElementById("patientName").value}
Age          : ${document.getElementById("age").value}
Disease      : ${document.getElementById("disease").value}

-----------------------------------------
Drug Details
-----------------------------------------
Medicine        Dose       Dosage
-----------------------------------------
${medicineRows}

-----------------------------------------
                          Doctor Name      : ${document.getElementById("doctorName").value}
                          SLMC Register No : ${document.getElementById("doctorReg").value}
                          Hospital Name    : ${document.getElementById("hospital").value}
`;

  document.getElementById("output").innerText = prescription;

  // Generate QR Code
  document.getElementById("qrcode").innerHTML = "";
  qr = new QRCode(document.getElementById("qrcode"), prescription);
}

// Save QR as Image
function saveQR() {
  const img = document.querySelector("#qrcode img");
  if (!img) {
    alert("Please generate prescription first");
    return;
  }

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "prescription_qr.png";
  a.click();
}
