var subjectObject = {
  Bagmati: {
    Kathmandu: ["kathmandu", "tarkeswor", "chandragiri", "budanilkantha"],
    Bhaktapur: ["changunarayan", "madhyapur", "suryebinayek"],
    Lalitpur: ["Godawari", "lalitpur", "mahalaxmi", "konjyosom"],
  },
  Gandaki: {
    Kaski: ["pokhara", "macchapuchre", "annapurna"],
    Parbat: ["modi", "bihadi", "kushma"],
  },
};
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
  };
  topicSel.onchange = function () {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  };
};
