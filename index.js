(function(){
  "use strict";
  // generate a random number
  const random = (from,to) => {
    return Math.floor(Math.random() * to) + from;
  };
  // initial data
  const data = {
    background:'red',
    clientY:null,
    clientX:null,
    1:{
      id:'square',
      idNumber:1,
      width:1,
      height:1
    },
    2:{
      id:'circle',
      idNumber:2,
      width:1,
      height:1
    },
    3:{
      id:'line',
      idNumber:3,
      width:.1,
      height:10,
      degree:0
    },
    current:null
  };
  data.current = data['1'];

  const mouseElement = document.createElement('span');
  const onMouseElementChange = ev => {
    mouseElement.className = data.current.id;
    mouseElement.setAttribute('style',`top:${data.clientY - 10}px;
    left:${data.clientX - 10}px;
    background:${data.background};
    width:${data.current.width}px;
    height:${data.current.height}px;
    border:${data.background === 'white' ? data.border : 'none'};
    transform:${data.current.id === 'line' ? `rotate(${data.current.degree}deg)` : ''}
    `);
  }
  // on pressing key listener
  window.onkeypress = (ev => {
    if(Number(ev.key) <= 3 ) data.current = data[ev.key];
    if(ev.key === '+'){
      if(data.current.id === 'line'){
        data[3].width += 0.1;
        data[3].height += 1;
      }else{
        data[data.current.idNumber].width += 1;
        data[data.current.idNumber].height += 1;
      }
    }
    if(ev.key === '-'){
      if(data.current.id === 'line'){
        data[3].width -= 0.1;
        data[3].height -= 1;
      }else{
        data[data.current.idNumber].width -= 1;
        data[data.current.idNumber].height -= 1;
      }
    }
    if(ev.key === '*') data[3].degree += 1;
    if(ev.key === '/') data[3].degree -= 1
    if(ev.key === 'c'){
      data.background =prompt('please enter the name of a color : ');
    }
    onMouseElementChange(ev);
  });
  // on mouse moving listener
  window.onmousemove = (ev => {
    data.clientY = ev.clientY;
    data.clientX = ev.clientX;
    onMouseElementChange(ev);
    document.body.appendChild(mouseElement);
  });
  // on mouse click listener
  window.onmousedown = (ev => {
    const element = document.createElement('span');
    element.className = data.current.id;
    // generate an unique id
    element.id = random(0, 9999999999999);
    element.setAttribute('style',`top:${ev.clientY -10}px;
    left:${ev.clientX - 10}px;
    background:${data.background};
    width:${data.current.width}px;
    height:${data.current.height}px;
    transform:${data.current.id === 'line' ? `rotate(${data.current.degree}deg)` : 'none'}
    `); 
    document.querySelector('body').appendChild(element);
  });
})();