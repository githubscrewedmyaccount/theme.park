
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    _   ___       __    __  ____        _     __
   / | / (_)___ _/ /_  / /_/ __ \____ _(_)___/ /
  /  |/ / / __ `/ __ \/ __/ /_/ / __ `/ / __  / 
 / /|  / / /_/ / / / / /_/ _, _/ /_/ / / /_/ /  
/_/ |_/_/\__, /_/ /_/\__/_/ |_|\__,_/_/\__,_/   
        /____/                                 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
