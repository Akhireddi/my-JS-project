/** Environments to run js
 * 1. Browser Environment

    The most common place to run JS.

    Runs inside web browsers (Chrome, Firefox, Edge, Safari).

    Provides access to Web APIs:

    document (DOM manipulation)

    window (browser window, alert, prompt, etc.)

    fetch (HTTP requests)

    Example:

    <script>
    console.log("Hello from Browser!");
    alert("Hi Akhila");
    </script>

2. Node.js Environment

    Runs JavaScript outside the browser.

    Great for backend/server-side development.

    Provides Node APIs:

    File system (fs)

    HTTP server (http)

    OS info (os)

    Example:

    console.log("Hello from Node.js");
    const os = require("os");
    console.log("OS:", os.platform());

3. Deno

    A newer runtime (built by the creator of Node.js).

    More secure, supports TypeScript out of the box.

    Example:

    console.log("Hello from Deno");

4. Other Environments

    Electron → For building desktop apps with JS (e.g., VS Code).

    React Native → Runs JS for mobile apps.

    Cloud Runtimes (AWS Lambda, Google Cloud Functions, etc.) → Serverless JS.

    Embedded Systems (Espruino, microcontrollers).

    So, mainly:

    Use Browser → for frontend, web pages.

    Use Node.js → for backend, running JS on your computer.
 */
