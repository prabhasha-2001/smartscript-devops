function login() {
  const regNo = document.getElementById("regNo").value.trim();
  const role = document.getElementById("role").value;

  if (regNo.length < 5) {
    document.getElementById("msg").innerText = "Invalid SLMC Number";
    return;
  }

  localStorage.setItem("role", role);
  localStorage.setItem("regNo", regNo);

  window.location.href = "prescription.html";
}
