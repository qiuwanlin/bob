!function(){
var duration = 10
function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
let code = `
.preview-wrapper{
    background:rgb(241,219,95);
    flex: 1;
    height: 100%;
}
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#code{
    overflow: hidden;
    height: 100%;
}
.wrapper{
      width: 100%;
      height: 200px;
      position: relative;
}



.eye{
      width: 80px;
      height: 80px;
      background: white;
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000000;
      top:30px;
}
.eye.left{
  right:50%;
  margin-right:1px;
}
.eye.right{
  left:50%;
  margin-left:1px;
}
.blue{
      width: 40px;
      height: 40px;
      background: rgb(68,170,255);
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000000;
      top:54px;
}
.blue.left{
  right:50%;
  margin-right:8px;
}
.blue.right{
  left:50%;
  margin-left:8px;
}
.blue::before{
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: black;
      position: absolute;
      border-radius: 50%;
      left: 8px;
      top:8px;
    }
.eyelash{
      width: 4px;
      height: 16px;
      background: black;
      position: absolute; 
}
.eyelash.l1{
  right:50%;
  margin-right:70px;
  top:24px;
  transform: rotate(-30deg);
}
.eyelash.l2{
  right:50%;
  margin-right:40px;
    top:14px;
}
.eyelash.l3{
  right:50%;
  margin-right:12px;
    top:24px;
  transform: rotate(30deg);
}
.eyelash.r1{
  left:50%;
  margin-left:70px;
    top:24px;
  transform: rotate(30deg);
}
.eyelash.r2{
  left:50%;
  margin-left:40px;
    top:14px;
}
.eyelash.r3{
  left:50%;
  margin-left:12px;
    top:24px;
  transform: rotate(-30deg);
}
.mouth{
  width: 180px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  border-top:none;
  border-left:none;
  border-right:none;
  position: absolute;
  top:90px;left:50%;margin-left:-90px;
}
.nose{
  width: 46px;
  height: 30px;
  background:rgb(241,219,95);
  border: 2px solid #000000;
  border-radius: 50%;
  transform: rotate(-60deg);
  position: absolute;
  right:50%;margin-right:-30px;top:70px
}
.upnose{
  width: 22px;
  height: 28px;
  background:white;
  border-radius: 50%;
  position: absolute;transform: rotate(40deg);
  right:50%;margin-right:-12px;top:85px;
  
}
.upnose{background:rgb(241,219,95);}
.tooth{
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      border-radius: 0 0 6px 6px;
      border: 2px solid #000000;
}
.tooth.left{
  right:50%;top:140px;margin-right:4px;
  transform: rotate(2deg);
}
.tooth.right{
  left:50%;top:140px;margin-left:4px;
  transform: rotate(-2deg);
}
`
writeCode('',code)
}.call()