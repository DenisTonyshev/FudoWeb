import { useState } from "react";
import { TextField, Button, Typography, Grid, Box,Container } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      // Create a new FormData object
    const formData = new FormData();

    // Append the form data
    formData.append('fullName', name);
    formData.append('email', email);
    formData.append('message', message);

    // Create a hidden HTML form
    const htmlForm = document.createElement('form');
    htmlForm.setAttribute('action', `https://fabform.io/f/${process.env.FORM_TOKEN || ""}`);
    htmlForm.setAttribute('method', 'post');
    htmlForm.style.display = 'none';

    // Append form data to the HTML form
    for (let pair of formData.entries()) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', pair[0]);
      input.setAttribute('value', pair[1]);
      htmlForm.appendChild(input);
    }

    // Append the HTML form to the document body
    document.body.appendChild(htmlForm);

    // Submit the HTML form
    htmlForm.submit();
    //
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" align="center" mb={2}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/132/810/non_2x/kendo-illustration-free-vector.jpg"
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}