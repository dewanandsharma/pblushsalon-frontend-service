
document.getElementById("contactinfo").addEventListener("submit", async function (event) {
  event.preventDefault(); // prevent page reload

  const form = event.target;

  // collect form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    mobile: form.mobile.value,
    message: form.message.value
  };

  // ✅ Confirmation popup
  const userConfirmed = confirm("Do you really want to send this message?");
  if (!userConfirmed) {
    return; // stop here if user clicks "Cancel"
  }

  try {
    const response = await fetch("http://localhost:5500/api/contactcustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    loading.style.display = "none";

    if (response.ok) {
      successMsg.style.display = "block";
      form.reset();
    } else {
      errorMsg.textContent = result.message || "Something went wrong.";
    }
  } catch (error) {
    loading.style.display = "none";
    errorMsg.textContent = "Error: " + error.message;
  }
});
