const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  const timestamp = Date.now();
  
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CIS Knowledge Café ☕</title>
            <script src="https://unpkg.com/@ui5/webcomponents/dist/Button.js"></script>
            <script src="https://unpkg.com/@ui5/webcomponents/dist/Title.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
            <style>
                :root {
                    --sap-blue: #354a5f;
                    --sap-light-blue: #4a6583;
                    --background-color: #f5f6f7;
                }
                
                body { 
                    display: flex; 
                    flex-direction: column;
                    min-height: 100vh; 
                    background-color: var(--background-color);
                    margin: 0;
                    font-family: 'Open Sans', "72", Arial, Helvetica, sans-serif;
                    color: #333;
                }

                .sap-banner {
                    width: 100%;
                    background: linear-gradient(135deg, var(--sap-blue) 0%, var(--sap-light-blue) 100%);
                    color: white;
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 28px;
                    font-weight: 700;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .sap-banner .left-logo {
                    margin-left: 40px;
                }

                .sap-banner .right-logo {
                    margin-right: 40px;
                }

                .sap-banner .left-logo img {
                    height: 40px;
                    filter: brightness(1.2);
                }

                .sap-banner .right-logo img {
                    height: 55px;
                    filter: brightness(1.2);
                }

                .sap-banner .title {
                    text-align: center;
                    padding: 0 20px;
                }

                .main-content {
                    display: flex;
                    flex: 1;
                    padding: 20px;
                    gap: 20px;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                    box-sizing: border-box;
                }

                .sidebar {
                    flex: 0 0 300px;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .puzzle-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .iframe-container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                iframe {
                    border: none;
                    display: block;
                    width: 100%;
                    height: 700px;
                    border-radius: 5px;
                }

                .instructions {
                    margin-bottom: 30px;
                }

                .instructions h2 {
                    color: var(--sap-blue);
                    margin-bottom: 15px;
                }

                .instructions ul {
                    padding-left: 20px;
                    line-height: 1.6;
                }

                .instructions img {
                    height: 20px;
                    vertical-align: middle;
                    margin: 0 5px;
                }

                .controls {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 20px;
                }

                .button {
                    background: var(--sap-blue);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: background-color 0.2s;
                    width: 100%;
                }

                .button:hover {
                    background: var(--sap-light-blue);
                }

                .footer {
                    background: linear-gradient(135deg, var(--sap-blue) 0%, var(--sap-light-blue) 100%);
                    color: white;
                    padding: 15px;
                    text-align: center;
                    font-weight: 600;
                    margin-top: auto;
                }

                @media (max-width: 1024px) {
                    .main-content {
                        flex-direction: column;
                    }
                    .sidebar {
                        flex: none;
                        width: auto;
                    }
                }

                .success-message {
                    display: none;
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                    margin-top: 10px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="sap-banner">
                <div class="left-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP Logo">
                </div>
                <div class="title">Week 4 Crossword Challenge</div>
                <div class="right-logo">
                    <img src="/CIS_Visual_R_White.png" alt="CIS Logo">
                </div>
            </div>
            
            <div class="main-content">
                <div class="sidebar">
                    <div class="instructions">
                        <h2>How to Play</h2>
                        <ul>
                            <li>Click on a number in the grid or a clue in the list</li>
                            <li>Type your answer directly into the grid</li>
                            <li>Use Tab to move to the next clue</li>
                            <li>Use Enter to switch between across and down clues</li>
                            <li>Click the Clear Puzzle icon <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNnYxNGgtMTRWNmgxNHptLTE2LTJoLTF2MTZjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY0aC0xdjJoLTE2VjR6bTQgMTFoOHYtMmgtOHYyem0wLTRoOHYtMmgtOHYyeiIvPjwvc3ZnPg==" alt="Clear Puzzle Icon"> in the puzzle interface to start fresh</li>
                        </ul>
                    </div>
                </div>
                
                <div class="puzzle-container">
                    <div class="iframe-container">
                        <iframe frameborder="0" src="https://crosswordlabs.com/embed/cis-knowledge-hub-crossword-week-1?t=${timestamp}"></iframe>
                    </div>
                </div>
            </div>

            <div class="footer">
                Made with ❤️ at CIS Knowledge Café☕
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    // Page initialization
                });
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 