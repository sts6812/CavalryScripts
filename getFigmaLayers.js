function getFigmaLayers(path, cavalryImages, obj, obj1, compWidth, compHeight){



// Check it succeeded.
if (client1.status() == 200) {
// do something here


//const obj1 = JSON.parse(client.body());


try{
client1.get(obj.meta.images[images1]);
//client1.get(obj1.meta.images[images2]);
if (client1.status() == 200) {

client1.writeBodyToBinaryFile(path+"Images/"+ii+"Images"+ images1 +".png");
//client1.writeBodyToBinaryFile(path+(ii+layers2.children.length)+"Images"+ images2 +".png");

}
}catch(e){''
}


var primId = []
var primIdrect = []
var primIdtext = []
var layers = obj.document.children[0].children[0]
var layers2 = obj.document.children[0].children[1]

var comp = api.getActiveComp()
var compRes = (api.get(api.getActiveComp(), "resolution"));



var compWidth = (JSON.stringify(compRes.x))
var compHeight = (JSON.stringify(compRes.y))



var jj=-1
var k = 0
var kk = 0
var ii=0
var i=0


var emptyArray = []
var stagger = []
var newObj = {}
var newObj2 = {}


var sample = JSON.parse(JSON.stringify(obj));

var sample = JSON.parse(JSON.stringify(obj));

var res = new JefNode(sample).filter(function(node) {
    


if(node.has("children") && node.value.type == "GROUP"){
jj++
kk++

}

//*****NOT PART OF A GROUP*******//
try{
if(node.pathArray[1]==="children" && node.value.type != "GROUP" && !node.has("visible")){

if(node.level==7 && node.value.name != undefined){
ii++

if(node.path.indexOf("document.children.0.children.0") != -1){


//rectangle(node, newObj, ii, jj, k, path, obj1, compWidth, compHeight)
   if(node.value.type == "TEXT"){


   text(node, newObj, ii, jj, k++, compWidth, compHeight)
   } else if(node.value.type == "VECTOR"){


   vector( node, newObj, ii, jj, k++, path, obj1, compWidth, compHeight )
   }
   else if(node.value.type == "RECTANGLE"){


   rectangle(node, newObj, ii, jj, k++, path, obj1, compWidth, compHeight)
   }

   //vector( node, newObj, ii, jj, k, path, obj1, compWidth, compHeight )
//rectangle2(node, newObj2, ii, jj, kk, path, obj1)
if(node.value.type == "VECTOR"){

}

//rectangle(node, newObj, ii, jj, k, path, obj1)


//text(node, newObj, ii, jj, k)


}
   if(node.path.indexOf("document.children.0.children.1") != -1){
           if(node.value.type == "RECTANGLE"){
      rectangle2(node, newObj, newObj2, ii, jj, i++, path, obj1, compWidth, compHeight)
}else if(node.value.type == "TEXT"){
  text2(node, newObj, newObj2, ii, jj, i++, compWidth, compHeight)
     }else if(node.value.type == "VECTOR"){
   vector2( node, newObj, newObj2, ii, jj, i++, path, obj, compWidth, compHeight)
     } 

   }
}


//*****PART OF A GROUP*******//
if(node.level==9 && node.value.name != undefined){

if(node.path.indexOf("document.children.0.children.0") != -1){ //k++
//*****RECTANGLES THAT ARE PART OF A GROUP*******//
//rectangleGroup(node, newObj, ii, jj, k)

//text(node, newObj, ii, jj, k, compWidth, compHeight)
   if(node.value.type == "RECTANGLE"){


   rectangle(node, newObj, ii, jj, k++, path, obj1, compWidth, compHeight)
   }else if(node.value.type == "TEXT"){


   text(node, newObj, ii, jj, k++, compWidth, compHeight)
   }else if(node.value.type == "VECTOR"){


   vector( node, newObj, ii, jj, k++, path, obj1, compWidth, compHeight )
   }

//textGroup(node, newObj, ii, jj, k)
}else{

}
if(node.path.indexOf("document.children.0.children.1") != -1){
//*****TEXT THAT IS PART OF A GROUP*******//
if(node.value.type == "RECTANGLE"){   

rectangle2(node, newObj, newObj2, ii, jj, i++, path, obj1, compWidth, compHeight)
}else if(node.value.type == "TEXT"){
  text2(node, newObj, newObj2, ii, jj, i++, compWidth, compHeight)
     }else if(node.value.type == "VECTOR"){
   vector2( node, newObj, newObj2, ii, jj, i++, path, obj, compWidth, compHeight)
     }
}else{

}
}
}
}catch(e){''
}

})

var count = (JSON.stringify(newObj).match(/tgh::::::jklt/g) || []).length;

//const obj2 = JSON.parse(client1.body())
for(iii=1; iii<=count+1; iii++){

var layerObj = newObj["layer"+(iii).toString()]

var name = newObj["name"+(iii).toString()]

var staggerObj = newObj["stagger"+(iii).toString()]
var x = newObj["x"+(iii).toString()]
var y = newObj["y"+(iii).toString()]
var xWidth = newObj["xWidth"+(iii).toString()]
var yHeight = newObj["yHeight"+(iii).toString()]
var xPos = newObj["xPos"+(iii)]
var stagger = (num.onValueChanged()*.1)*(Number(staggerObj)*10)
var red = newObj["red"+(iii).toString()]
var green = newObj["green"+(iii).toString()]
var blue = newObj["blue"+(iii).toString()]
var cornerRadius = newObj["cornerRadius"+(iii).toString()]
var image = newObj["image"+(iii).toString()]
var fontSize = newObj["fontSize"+(iii).toString()]
var letterSpacing = newObj["letterSpacing"+(iii)]
if (letterSpacing == undefined){letterSpacing = 0}else{letterSpacing = letterSpacing}
var lineSpacing = newObj["lineSpacing"+(iii)]

if (lineSpacing == undefined){lineSpacing = 0}else{lineSpacing = lineSpacing}
var textWidth = newObj["textWidth"+(iii).toString()]
if (textWidth == undefined){textWidth = 0}else{textWidth = textWidth}
if(image != undefined){

try{
client.get(obj.meta.images[image]);

if (client.status() == 200) {

client.writeBodyToBinaryFile(path+"Images/"+iii+"Images"+ image +".png");
//client1.writeBodyToBinaryFile("/Volumes/Backup/Scripts/CavalryImages/"+(ii+layers2.children.length)+"Images"+ images2 +".png");

}
}catch(e){''
}


}



   keyframes(newObj, newObj2, obj, path, compWidth, compHeight)
//api.keyframe(layerObj, stagger + ((num1.onValueChanged()/2)+5), {"lineSpacing": lineSpacing, "letterSpacing": letterSpacing, "fontSize": fontSize, "generator.cornerRadius" : cornerRadius,"material.materialColor.r": red*255, "material.materialColor.g": green*255, "material.materialColor.b": blue*255, "generator.dimensions.x":xWidth , "generator.dimensions.y":yHeight,"position.x": (x-(compWidth/2)+(xWidth/2)), "position.y": ((y-(compHeight/2))+(yHeight/2))*-1})
//api.set(layerObj, {"hierarchy": true})

}
}
}