// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (email === "admin@xenvex.com" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password");
  }
}

// Signup (frontend only)
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert("Account created! You can now login.");
  window.location.href = "login.html";
}

// Editor functions
function addText() {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML += "<p>New Text</p>";
}

function changeColor(color) {
  document.execCommand("foreColor", false, color);
}

function makeBold() {
  document.execCommand("bold");
}

function makeItalic() {
  document.execCommand("italic");
}

function clearCanvas() {
  document.getElementById("canvas").innerHTML = "";
}