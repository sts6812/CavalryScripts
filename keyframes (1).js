function keyframes(newObj, newObj_, obj1,  path, compWidth, compHeight){




   
var count = (JSON.stringify(newObj).match(/tgh::::::jklt/g) || []).length

   for(iii=0; iii<=count+1; iii++){



var layerObj = newObj["layer"+(iii).toString()]

var name = newObj["name"+(iii).toString()]

var staggerObj = newObj["stagger"+(iii).toString()]
var x = newObj["x"+(iii).toString()]
var y = newObj["y"+(iii).toString()]
var xWidth = newObj["xWidth"+(iii).toString()]
var yHeight = newObj["yHeight"+(iii).toString()]
var stagger = (num.onValueChanged()*.1)*(Number(staggerObj)*10)
var red = newObj["red"+(iii).toString()]
var green = newObj["green"+(iii).toString()]
var blue = newObj["blue"+(iii).toString()]
var cornerRadius = newObj["cornerRadius"+(iii).toString()]
var image = newObj["image"+(iii).toString()]
var fontSize = newObj["fontSize"+(iii).toString()]
var letterSpacing = newObj["letterSpacing"+(iii)]
var xPos = newObj["xPos"+(iii)]
var yPos = newObj["yPos"+(iii)]
if (letterSpacing == undefined){letterSpacing = 0}else{letterSpacing = letterSpacing}
var lineSpacing = newObj["lineSpacing"+(iii)]

if (lineSpacing == undefined){lintreSpacing = 0}else{lineSpacing = lineSpacing}
var textWidth = newObj["textWidth"+(iii).toString()]
if (textWidth == undefined){textWidth = 0}else{textWidth = textWidth}
       var textBoxSizeX = newObj["textBoxSizeX"+(iii)]
var textBoxSizeY = newObj["textBoxSizeY"+(iii)]
       
       var layerObj2 = newObj_["layer"+(iii).toString()]
var name2 = newObj_["name"+(iii).toString()]

var staggerObj2 = newObj_["stagger"+(iii).toString()]
var x2 = newObj_["x"+(iii).toString()]
var y2 = newObj_["y"+(iii).toString()]
var xWidth2 = newObj_["xWidth"+(iii).toString()]
var yHeight2 = newObj_["yHeight"+(iii).toString()]
var stagger2 = (num.onValueChanged()*.1)*(Number(staggerObj)*10)
var red2 = newObj_["red"+(iii).toString()]
var green2 = newObj_["green"+(iii).toString()]
var blue2 = newObj_["blue"+(iii).toString()]
var cornerRadius2 = newObj_["cornerRadius"+(iii).toString()]
var image2 = newObj_["image"+(iii).toString()]
var fontSize2 = newObj_["fontSize"+(iii).toString()]
var letterSpacing2 = newObj_["letterSpacing"+(iii)]
var xPos2 = newObj_["xPos"+(iii)]
var yPos2 = newObj_["yPos"+(iii)]
if (letterSpacing2 == undefined){letterSpacing2 = 0}else{letterSpacing2 = letterSpacing2}
var lineSpacing2 = newObj_["lineSpacing"+(iii)]

if (lineSpacing2 == undefined){lintreSpacing2 = 0}else{lineSpacing2 = lineSpacing2}
var textWidth2 = newObj_["textWidth"+(iii).toString()]
if (textWidth2 == undefined){textWidth2 = 0}else{textWidth2 = textWidth2}
var textBoxSizeX2 = newObj_["textBoxSizeX"+(iii)]
var textBoxSizeY2 = newObj_["textBoxSizeY"+(iii)]
  
var stagger = staggerObj
var keyIn = stagger * num.onValueChanged()
var keyOut = stagger * num.onValueChanged()+ num1.onValueChanged()
var opacityKeyIn = ((keyOut - keyIn) / 3)+keyIn
var opacityKeyOut = ((keyOut - keyIn) / 3)+opacityKeyIn
 var easing = EasingDropdown.onValueChanged()
try{

api.keyframe(layerObj, stagger * num.onValueChanged(), {"lineSpacing": lineSpacing, "letterSpacing": letterSpacing, "generator.cornerRadius" : cornerRadius,"material.materialColor.r": red*255, "material.materialColor.g": green*255, "material.materialColor.b": blue*255, "generator.dimensions.x":xWidth , "generator.dimensions.y":yHeight,"position.x": xPos, "position.y": yPos})
    
    api.keyframe(layerObj, (stagger * num.onValueChanged())+ num1.onValueChanged(), {"lineSpacing": lineSpacing2, "letterSpacing": letterSpacing2,  "generator.cornerRadius" : cornerRadius2,"material.materialColor.r": red2*255, "material.materialColor.g": green2*255, "material.materialColor.b": blue2*255, "generator.dimensions.x":xWidth2 , "generator.dimensions.y":yHeight2,"position.x": xPos2, "position.y": yPos2})
    api.select([layerObj]);
api.bringToFront();
    api.magicEasing(layerObj, "generator.dimensions.x", stagger, easing);
    api.magicEasing(layerObj, "generator.dimensions.y", stagger, easing);
    api.magicEasing(layerObj, "generator.dimensions.x", num1.onValueChanged() + stagger, easing);
api.magicEasing(layerObj, "generator.dimensions.y", num1.onValueChanged() + stagger, easing);
  

    
        if(image != undefined){
  //console.log(stagger)

        }
    
    api.set(layerObj, {"hierarchy": false})
   //api.offsetLayerTime(layerObj, stagger * ((num1.onValueChanged()/2)+5));
}catch(e){''}
    
      
  if(image2 != undefined){
api.keyframe(layerObj2, stagger * num.onValueChanged(), {"lineSpacing": lineSpacing, "letterSpacing": letterSpacing,  "generator.cornerRadius" : cornerRadius,"material.materialColor.r": red*255, "material.materialColor.g": green*255, "material.materialColor.b": blue*255, "generator.dimensions.x":xWidth , "generator.dimensions.y":yHeight,"position.x": xPos, "position.y": yPos})
     
      api.keyframe(layerObj2, (stagger * num.onValueChanged())+ num1.onValueChanged(), {"lineSpacing": lineSpacing2, "letterSpacing": letterSpacing2,  "generator.cornerRadius" : cornerRadius2,"material.materialColor.r": red2*255, "material.materialColor.g": green2*255, "material.materialColor.b": blue2*255, "generator.dimensions.x":xWidth2 , "generator.dimensions.y":yHeight2,"position.x": xPos2, "position.y": yPos2})
      
                  api.keyframe(layerObj, opacityKeyIn, {"opacity":100}) 
           api.keyframe(layerObj, opacityKeyOut, {"opacity":0})
                        api.keyframe(layerObj2, opacityKeyIn, {"opacity":0}) 
           api.keyframe(layerObj2, opacityKeyOut, {"opacity":100})
    api.set(layerObj2, {"hierarchy": false})
    api.select([layerObj2]);
api.bringToFront();

//api.keyframe(layerObj2, stagger * (num.onValueChanged()-10), {"opacity":0})
//api.offsetLayerTime(layerObj2, stagger * ((num1.onValueChanged()/2)+5));

}  if(fontSize != undefined){
    
    try{
api.keyframe(layerObj2, stagger * num.onValueChanged(), {"lineSpacing": lineSpacing, "letterSpacing": letterSpacing, "scale.x": 1, "scale.y": 1, "generator.cornerRadius" : cornerRadius,"material.materialColor.r": red*255, "material.materialColor.g": green*255, "material.materialColor.b": blue*255, "generator.dimensions.x":xWidth , "generator.dimensions.y":yHeight,"position.x": xPos, "position.y": yPos})
   


    if(name2 == "Tell your story with Premiere Pro."){console.log(name2+"---"+fontSize2+"----"+textBoxSizeX2+"---"+api.get(layerObj2, "scale.x")+"---"+fontSize)} 
      
        api.keyframe(layerObj2, (stagger * num.onValueChanged())+ num1.onValueChanged(), {"lineSpacing": lineSpacing2, "letterSpacing": letterSpacing2, "scale.x": ((fontSize2/fontSize)), "scale.y": ((fontSize2/fontSize)), "generator.cornerRadius" : cornerRadius2,"material.materialColor.r": red2*255, "material.materialColor.g": green2*255, "material.materialColor.b": blue2*255, "generator.dimensions.x":xWidth2 , "generator.dimensions.y":yHeight2,"position.x": xPos2, "position.y": yPos2})
        

        
                  api.keyframe(layerObj, opacityKeyIn, {"opacity":100}) 
           api.keyframe(layerObj, opacityKeyOut, {"opacity":0})
                          api.keyframe(layerObj2, opacityKeyIn, {"opacity":0}) 
           api.keyframe(layerObj2, opacityKeyOut, {"opacity":100})
        
            api.select([layerObj2]);
api.bringToFront();
        
    api.set(layerObj, {"hierarchy": false})
//pi.offsetLayerTime(layerObj2, stagger * ((num1.onValueChanged()/2)+5));
    }catch(e){''}

}else{


   
}
      

}
   





}