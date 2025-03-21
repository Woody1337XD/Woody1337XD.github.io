
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
 __        __              _       ___     _   _   _               
 \ \      / /__   ___   __| |_   _|_ _|___| |_| \ | | __ _ ___ ___ 
  \ \ /\ / / _ \ / _ \ / _` | | | || |/ __| __|  \| |/ _` / __/ __|
   \ V  V / (_) | (_) | (_| | |_| || |\__ \ |_| |\  | (_| \__ \__ \
    \_/\_/ \___/ \___/ \__,_|\__, |___|___/\__|_| \_|\__,_|___/___/
                             |___/                                 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
