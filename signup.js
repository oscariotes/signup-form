  let verify = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('display_error').style.color = 'green';
      document.getElementById('display_error').innerHTML = 'Password Match';
    } else {
      document.getElementById('display_error').style.color = 'red';
      document.getElementById('display_error').innerHTML = "Password don't match";
    }
  }