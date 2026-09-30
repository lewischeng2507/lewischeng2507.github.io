// Show a photo when its file exists; otherwise keep the dashed placeholder.
document.querySelectorAll('.ph img').forEach(function (img) {
  var fig = img.parentElement;
  function ok() { fig.classList.add('has'); }
  if (img.complete && img.naturalWidth) ok();
  else img.addEventListener('load', ok);
});
document.getElementById('yr').textContent = new Date().getFullYear();
