function dwarfRollCall(dwarves) {
  var names = []
 for(var i=0; i<dwarves.length/2; i++)
 names.push(i+1+". "+ dwarves[i]+" " )
 return names.join('') 
}

function summonCaptainPlanet(planeteerCalls){
  var calls = []
  for(var i=0; i<planeteerCalls.length; i++)
  calls.push( planeteerCalls[i].toUpperCase()+`!`)
  return calls
}


function longPlaneteerCalls(words) {
  for(var i=0; i < words.length; i++)
  {
    if(words[i].length >4)
    {
      return true;
    }
  }
  return false
}
  

function wordsWithB(names){
  for(var i=0; i<names.length; i++)
  if




}






function findTheCheese(snacks) {
  for(var i=0; i<snacks.length; i++)
{
  if(snacks[i]=="gouda")
  {
  return snacks[i]
  }
  if(snacks[i]=="cheddar")
  {
  return "cheddar"
  }
  if(snacks[i]=="camembert")
  {
  return "camembert"
  }
  if(snacks[i]=="swiss")
  {
  return "swiss"
  }
}
  return "no cheese!"
}


  

  














