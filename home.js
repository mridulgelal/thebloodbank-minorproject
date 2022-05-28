//------------------ user donation history drop down toggle--------------------------
$(function () {
    $('.donor-card').click(function () {
        $(this).find('.user-history').slideToggle('show');
    });
});



// --------------------region and blood group selector form ------------------------

var subjectObject = {
    "Bagmati": {
        "Kathmandu": ["Links", "Images", "Tables", "Lists"],
        "Bhaktapur": ["Borders", "Margins", "Backgrounds", "Float"],
        "Lalitpur": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Gandaki": {
        "Kaski": ["pokhara", "macchapuchre", "annapurna"],
        "Parbat": ["modi", "bihadi", "kushma"]
    },
    "Lumbini": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}
window.onload = function () {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
   
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function () {
        //empty Chapters dropdown
        chapterSel.length = 1;
        //display correct values
        var z = subjectObject[subjectSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    }
}

// -------------------- -----------------------------------------------------------------

 
