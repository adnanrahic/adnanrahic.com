/* global strum */
(function (e, t, r, n, a) {
  var c = []; e[a] = function () { c.push(arguments) }
  e[a].queue = c; var s = t.createElement(r); s.async = 1; s.src = n
  var u = t.getElementsByTagName(r)[0]; u.parentNode.insertBefore(s, u)
})(window, document, 'script', '//dlv9be7z5p95f.cloudfront.net/rum.js', 'strum')
strum('config', { token: 'd9a6aa67-c05a-4f8e-81e7-e4231fba83a5', 'receiverUrl': 'https://rum-receiver.sematext.com' })
