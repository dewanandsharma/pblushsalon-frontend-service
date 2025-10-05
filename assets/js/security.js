


  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Block some devtools shortcuts
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') e.preventDefault();

    // Ctrl+U (view source), Ctrl+S, Ctrl+Shift+I/J/C
    if ((e.ctrlKey || e.metaKey) && (
        e.key.toLowerCase() === 'u' ||
        e.key.toLowerCase() === 's' ||
        (e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'c'))
      )) {
      e.preventDefault();
    }
  });

  // Optional: show a brief message when user tries to open devtools (simple detection)
  (function detectDevTools() {
    let threshold = 160;
    setInterval(function() {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      if (widthDiff > threshold || heightDiff > threshold) {
        console.log('DevTools likely opened'); // placeholder - don't reveal sensitive info
      }
    }, 2000);
  })();



//   Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
// X-Frame-Options: DENY
// X-Content-Type-Options: nosniff
// Referrer-Policy: no-referrer
// Permissions-Policy: geolocation=(), microphone=(), camera=()
// Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';

/* <script src="https://cdn.example.com/lib.min.js"
        integrity="sha384-BASE64_HASH=="
        crossorigin="anonymous"></script> */

        // Express example (server-side)
// app.use((req, res, next) => {
//   res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
//   res.setHeader('X-Frame-Options', 'DENY');
//   res.setHeader('X-Content-Type-Options', 'nosniff');
//   res.setHeader('Referrer-Policy', 'no-referrer');
//   res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
//   res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';");
//   next();
// });



/* <html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>My Site</title>
  <!-- No source maps in production -->
  <link rel="stylesheet" href="/assets/styles.min.css">
  <script defer src="/assets/app.min.js"></script>
</head>
<body>
  <!-- content -->
  <script>
    // minimal deterrent (optional)
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (e.key === 'F12' || ((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='u')) e.preventDefault();
    });
  </script>
</body>
</html>
 */
