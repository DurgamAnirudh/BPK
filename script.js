
document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var dob = document.getElementById('dob').value;
  var parentName = document.getElementById('parentName').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var phone = document.getElementById('phone').value;

  
  var table = document.getElementById('studentTable');
  var newRow = table.insertRow(-1);

 
  var firstNameCell = newRow.insertCell(0);
  firstNameCell.textContent = firstName;

  var lastNameCell = newRow.insertCell(1);
  lastNameCell.textContent = lastName;

  var dobCell = newRow.insertCell(2);
  dobCell.textContent = dob;

  var parentNameCell = newRow.insertCell(3);
  parentNameCell.textContent = parentName;

  var addressCell = newRow.insertCell(4);
  addressCell.textContent = address;

  var cityCell = newRow.insertCell(5);
  cityCell.textContent = city;

  var phoneCell = newRow.insertCell(6);
  phoneCell.textContent = phone;

  
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('parentName').value = '';
  document.getElementById('address').value = '';
  document.getElementById('city').value = '';
  document.getElementById('phone').value = '';
});
