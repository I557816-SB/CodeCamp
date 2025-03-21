const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

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
                    justify-content: flex-start; 
                    min-height: 100vh; 
                    background-color: #f4f4f4; 
                    margin: 0;
                    font-family: "72", "72full", Arial, Helvetica, sans-serif;
                }
                .content-wrapper {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }
                iframe {
                    border: 3px solid black; 
                    display: block;
                    width: 900px;
                    height: 800px;
                    max-width: 95vw;
                    max-height: 80vh;
                }
                .footer {
                    margin-top: auto;
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
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                }
                .sap-banner img {
                    height: 35px;
                    margin-right: 15px;
                }
            </style>
        </head>
        <body>
            <div class="sap-banner">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP Logo">
                Week 3 Crossword Challenge
            </div>
            <div class="content-wrapper">
                <iframe frameborder="0" src="https://crosswordlabs.com/embed/cis-knowledge-hub-crossword-week-1"></iframe>
            </div>
            <div class="footer">Made with ❤️ at CIS Knowledge Café☕ by Saurabh</div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 