function searchWord() {
  const easyPrimaryWord = ['bank', 'call', 'eyes', 'find', 'grey', 'July', 'lion', 
  'live',
  'sing',
  'stop',
  'take',
  'tick'
  ];

  const levels = {
      Easy: ['bank', 'call', 'eyes', 'find', 'grey', 'July', 'lion', 'live', 'sing', 'stop', 'take', 'tick'],
      Middle: "Middle",
      Hard: "Hard"
  }

  const courses = {
    Primary: "Easy",
    "Secundary-A": "Secundary-A",
    "Secundary-B": "Secundary-b"
}

  let level = document.getElementById("level").options[combo.selectedIndex].text;
  let levelSelected = level.options[level.selectedIndex].text;
  let course = document.getElementById("course");
  let courseSelected = course.options[course.selectedIndex].text;

  

  if(levels[levelSelected] && courses[courseSelected]) {
      if()
  }

  
}

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}
