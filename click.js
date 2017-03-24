//declare samecolor() here
function samecolor(index){
  let newcolor = "F0FFF0"
  const doc = Document;
  let divs = doc.querySelector('#samecolor div');

  divs[0].style.background = "#ff00ff";
  divs[1].style.background = "#fff0ff"
  divs[2].style.background = "#f0f0ff"
  divs[3].style.background = "#f000ff"

  divs[0].style.opacity = 0.20;
  divs[1].style.opacity = 0.35;
  divs[2].style.opacity = 0.50;
  divs[3].style.opacity = 0.65;
}
//declare diffcolor() here
function diffcolor(color, complement){
  let color = "0000FF"
  let complement = "FF8C00"
  const doc = Document;
  let divs = doc.querySelector('#diffcolor div')

}
