function rectangle(node, newObj, ii, jj, k, path, obj, compWidth, compHeight){



if(node.value.type == "RECTANGLE"){

newObj["x"+k]=(node.value.relativeTransform[0][2])
  


var yParent1 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[0].relativeTransform[1][2]))
var yParent2 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[1][2]))
var xParent = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[0][2]))




newObj["xWidth"+k] = parseFloat(node.value.size.x)
newObj["yHeight"+k] = parseFloat(node.value.size.y)
 
newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2))
   
   
     if(node.level == 9){
        //newObj["stagger"+k]=(jj)
       newObj["y"+k]=(node.value.absoluteBoundingBox.y);
        newObj["yPos"+k] = ((newObj["y"+k]-(compHeight/2)+(newObj["yHeight"+k]/2))*-1)
       newObj["name"+k]=(node.value.name+"---GROUP")
                       newObj["x"+k]=(node.value.absoluteBoundingBox.x);
         newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2))
    }else{
        //newObj["stagger"+k]=(ii+jj)
        newObj["y"+k]=(node.value.relativeTransform[1][2]);
           newObj["yPos"+k] = ((newObj["y"+k]-(compHeight/2)+(newObj["yHeight"+k]/2))*-1)
        newObj["name"+k]=(node.value.name)
        
     
    }
    newObj["stagger"+k]=(ii+jj)

    var _primId = api.primitive("rectangle", newObj["name"+k]+"----"+(ii));
    newObj["layer"+k]=(_primId)
newObj["tgh::::::jklt"+k]=""
newObj["cornerRadius"+k] = node.value.cornerRadius
    

if(node.value.fills[0].imageRef == undefined){

newObj["red"+k] = node.value.fills[0].color.r
newObj["green"+k] = node.value.fills[0].color.g
newObj["blue"+k] = node.value.fills[0].color.b
}else{

newObj["image"+k] = node.value.fills[0].imageRef
   client1.get(obj.meta.images[node.value.fills[0].imageRef]);

client1.writeBodyToBinaryFile(path+"Images/"+ "1_"+node.value.fills[0].imageRef +".png");
var asset1 = api.duplicate(cavalryImages.shader, true);
api.set(asset1, {"scaleMode": 2});
var sfAsset1 = api.duplicate(cavalryImages.folder, true);
api.set(sfAsset1.toString(), {'path': "1_"+node.value.fills[0].imageRef +".png"});
//api.rename(sfAsset1, "Images Smart Folder "+k);
api.set(sfAsset1, {"index": (k)})
api.connect(sfAsset1.toString(), "id", asset1, "image", true);
api.connect(asset1, "id", _primId, "material.colorShaders");
   

}
}

return newObj
}