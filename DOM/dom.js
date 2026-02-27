/*  ===============================
    📘 NOTES: JavaScript in HTML
    ===============================

    ✔ 3 Ways to use JavaScript in HTML:
       1. Inline JS (inside tag)
       2. Internal JS (inside <script>)
       3. External JS (BEST PRACTICE)

    ✔ RULE:
      If <script> has src="", then inside code is IGNORED.
      
      Example (wrong):
      <script src="app.js">
          alert("This will NOT run");
      </script>

      Example (correct):
      <script src="app.js"></script>

    ✔ Why JS at the end of <body>?
      - HTML loads first
      - JS runs after elements exist
      - Avoids DOM null errors

    ===============================
    📘 DOM (Document Object Model)
    ===============================

    DOM = JS ko HTML elements ko access aur change karne deta hai.
    Webpage ko ek tree structure ke form me treat karta hai.

    Common DOM methods:
      document.getElementById()
      document.getElementsByClassName()
      document.getElementsByTagName()
      document.querySelector()
      document.querySelectorAll()

    Change text:
      element.innerText = "New text";

    Change HTML:
      element.innerHTML = "<b>Bold</b>";

    Change Style:
      element.style.color = "red";
    -->*/


