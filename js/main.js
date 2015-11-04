var mail = document.getElementById('mail');
var mailAdd = 'contact@meshtimate.com';

var link = document.createElement('a');
link.setAttribute( "href", "mailto:" + mailAdd );
link.textContent = 'Contact us';

mail.appendChild(link);