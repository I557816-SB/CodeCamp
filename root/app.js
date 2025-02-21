const express = require("express");
const path = require("path");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Crossword Embed</title>
            <script src="https://unpkg.com/@ui5/webcomponents/dist/Button.js"></script>
            <script src="https://unpkg.com/@ui5/webcomponents/dist/Title.js"></script>
            <style>
                body { 
                    display: flex; 
                    flex-direction: column;
                    justify-content: center; 
                    align-items: center; 
                    height: 100vh; 
                    background-color: #f4f4f4; 
                    margin: 0;
                    font-family: "72", "72full", Arial, Helvetica, sans-serif;
                }
                iframe {
                    border: 3px solid black; 
                    display: block;
                    width: 800px;
                    height: 800px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #354a5f;
                    padding: 10px;
                    text-align: center;
                    width: 100%;
                    font-weight: bold;
                    border-top: 3px solid #fff;
                }
                .sap-banner {
                    width: 100%;
                    background-color: #354a5f;
                    color: white;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: bold;
                }
                .sap-banner img {
                    height: 30px;
                    margin-right: 10px;
                }
            </style>
        </head>
        <body>
            <div class="sap-banner">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP Logo">
                Week 1 Crossword Challenge
            </div>
            <iframe frameborder="0" src="https://crosswordlabs.com/embed/cis-knowledge-hub-crossword-week-1"></iframe>
            <div class="footer">Made with ❤️ at CIS Knowledge Café☕ by Saurabh</div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});