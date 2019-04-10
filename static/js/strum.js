/* global strum */
(function (e, t, r, n, a) {
  var c = []; e[a] = function () { c.push(arguments) }
  e[a].queue = c; var s = t.createElement(r); s.async = 1; s.src = n
  var u = t.getElementsByTagName(r)[0]; u.parentNode.insertBefore(s, u)
})(window, document, 'script', '//dlv9be7z5p95f.cloudfront.net/rum.js', 'strum')
strum('config', { token: 'fd633b3c-0514-42ed-978e-694ee14af636', 'receiverUrl': 'https://rum-receiver.apps.test.sematext.com' })
