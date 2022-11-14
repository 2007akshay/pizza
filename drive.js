AFRAME.registerComponent("drive",{
    init:function(){
this.driveBike()
},
driveBike:function(){
    var handleRotation=0

    window.addEventListener('keydown',function(e){
        var handle=document.querySelector("#first-person-view")
        if(e.code=="ArrowRight" && handleRotation<=7){
            handleRotation+=10
            handle.setAttribute("rotation",{x:0,y:180,z:handleRotation})
        }
        if(e.code=="ArrowLeft" && handleRotation>=-7){
            handleRotation-=10
            handle.setAttribute("rotation",{x:0,y:180,z:handleRotation})
        }
        if(e.code=="ArrowUp" ){
            
           var cameraRig=document.querySelector("#camera-rig")
          var speedChange = cameraRig.getAttribute("movement-controls")
          console.log("hi")
          console.log(speedChange.speed)
            camera.setAttribute("movement-controls",{"speed":speedChange.speed+1})
        }
   
        
    
    })
}
}) 