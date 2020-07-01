(function(){
  "use strict";
  const onMouseElement = document.createElement('div');
  const onMouseElementChange = ev => {
    onMouseElement.className = data.current.id;
    onMouseElement.setAttribute('style',`top:${data.clientY - 10}px;
    left:${data.clientX - 10}px;
    background:${data.background};
    width:${data.current.width}px;
    height:${data.current.height}px;
    border:${data.background === 'white' ? data.border : ''};
    transform:${data.current.id === 'line' ? `rotate(${data.current.degree}deg)` : ''}
    `);
  }
  // initial data
  const data = {
    background:'red',
    color:['red', 'blue','black', 'white'],
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
  // on pressing key listener
  window.onkeypress = (ev => {
    if(Number(ev.key) <= 3 ) data.current = data[ev.key];
    // if(Number(ev.key) > 3 && Number(ev.key) < 6) data.background = data.color[ev.key - 3];
    // if(Number(ev.key) === 6){
    //   data.background = data.color[ev.key - 3];
    //   data.border = '1px solid red';
    // }
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
    document.body.appendChild(onMouseElement);
  });
  // on mouse click listener
  window.onmousedown = (ev => {
    const element = document.createElement('div');
    element.className = data.current.id;
    element.setAttribute('style',`top:${ev.clientY -10}px;
    left:${ev.clientX - 10}px;
    background:${data.background};
    width:${data.current.width}px;
    height:${data.current.height}px;
    transform:${data.current.id === 'line' ? `rotate(${data.current.degree}deg)` : ''}
    `); 
    document.querySelector('body').appendChild(element);
    console.log(ev);
  })

})();