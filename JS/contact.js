document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    emailjs.init("YOUR_USER_ID");
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
      .then(() => {
        alert("Message sent!");
      })
      .catch(() => {
        alert("Error sending message.");
      });
  
    event.target.reset();
  });
  