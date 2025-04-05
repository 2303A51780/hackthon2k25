const adminCredentials = { username: 'admin', password: 'admin123' };
const supervisorCredentials = { username: 'supervisor', password: 'super123' };

function adminLogin() {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  if (user === adminCredentials.username && pass === adminCredentials.password) {
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('adminPanel').classList.remove('hidden');
    loadPatients();
  } else {
    alert("Invalid admin credentials");
  }
}

function supervisorLogin() {
  const user = document.getElementById('supUser').value;
  const pass = document.getElementById('supPass').value;
  if (user === supervisorCredentials.username && pass === supervisorCredentials.password) {
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('supervisorPanel').classList.remove('hidden');
  } else {
    alert("Invalid supervisor credentials");
  }
}

function addPatient() {
  const name = document.getElementById('pname').value;
  const age = document.getElementById('age').value;
  const scheme = document.getElementById('scheme').value;
  const type = document.getElementById('ptype').value;

  if (!name || !age) {
    alert("Please fill all fields");
    return;
  }

  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  patients.push({ name, age, scheme, type });
  localStorage.setItem('patients', JSON.stringify(patients));
  loadPatients();

  document.getElementById('pname').value = '';
  document.getElementById('age').value = '';
}

function loadPatients() {
  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  const table = document.getElementById('patientTable');
  if (!table) return;
  table.innerHTML = '';
  patients.forEach(p => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.scheme}</td>
        <td>${p.type}</td>
      </tr>
    `;
  });
}
