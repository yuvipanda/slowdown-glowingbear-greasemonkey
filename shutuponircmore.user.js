// ==UserScript==
// @name        shutuponircmore
// @namespace   yuvi.in
// @description Helps you keep shut on IRC some more
// @include     http://www.glowing-bear.org/#
// @version     1
// @grant       none
// ==/UserScript==

function getTimeoutValue() {
   // FIXME: Vary based on time of day, channel present in, etc.
   return 3 * 1000;
}

function disableTemporarily(messageBox) {
   messageBox.disabled = true;
   messageBox.placeholder = 'Wait!';
   setTimeout(function() {
      messageBox.disabled = false;
   }, getTimeoutValue());
}

function attachHandler() {
   var messageBox = document.getElementById('sendMessage');
   if (messageBox === null) {
      setTimeout(attachHandler, 2 * 1000);
   } else {
      messageBox.addEventListener('keyup', function(e) {
         var key = e.which || e.keyCode;
         if (key === 13) { // 13 is enter
            disableTemporarily(messageBox);
         }
      });
   }
}

attachHandler();
