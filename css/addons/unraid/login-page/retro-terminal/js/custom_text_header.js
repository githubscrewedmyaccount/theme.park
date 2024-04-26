
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
 _______  .__       .__     __ __________        .__    .___
 \      \ |__| ____ |  |___/  |\______   \_____  |__| __| _/
 /   |   \|  |/ ___\|  |  \   __\       _/\__  \ |  |/ __ | 
/    |    \  / /_/  >   Y  \  | |    |   \ / __ \|  / /_/ | 
\____|__  /__\___  /|___|  /__| |____|_  /(____  /__\____ | 
        \/  /_____/      \/            \/      \/        \/
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
