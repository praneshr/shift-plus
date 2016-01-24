
$(window).keypress(function(e) {
  if (e.shiftKey && !$('input, textarea').is(':focus') && !$('.is-showPlaceholder').length > 0) {
    chrome.runtime.sendMessage({ getKeyCode: String.fromCharCode(e.which), getKeyMap: false }, function(response) {
      if (response.url) {
        window.open(response.url);
      }
    });
  }
});
