function rectangle2(node, newObj, newObj_, ii, jj, k, path, obj, compWidth, compHeight){

var jsonObj = JSON.parse(client.body())

if(node.value.type == "RECTANGLE"){

newObj_["x"+k]=(node.value.relativeTransform[0][2])

var yParent1 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[0].relativeTransform[1][2]))
var yParent2 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[1][2]))
var xParent1 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[0].relativeTransform[0][2]))
var xParent2 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[0][2]))


var yParDiff = (yParent2 - yParent1)
var xParDiff = (xParent2 - xParent1)


newObj_["xWidth"+k] = parseFloat(node.value.size.x)
newObj_["yHeight"+k] = parseFloat(node.value.size.y)

//newObj_["xPos"+k] = (newObj_["x"+k]-(compWidth/2)+(newObj_["xWidth"+k]/2))
newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2))

    if(node.level == 9){

       newObj_["x"+k]=(node.value.absoluteBoundingBox.x)
        newObj_["xPos"+k] = ((newObj_["x"+k]-(compWidth/2)+(newObj_["xWidth"+k]/2)))-xParDiff
        //newObj_["xPos"+k] = (newObj_["x"+k]+(compWidth/2)+(newObj_["xWidth"+k]))-compWidth
       newObj_["y"+k]=(node.value.absoluteBoundingBox.y);
        newObj_["yPos"+k] = ((newObj_["y"+k]-(compHeight/2)+(newObj_["yHeight"+k]/2))*-1)+yParDiff
       newObj_["name"+k]=(node.value.name+"---GROUP")
   }else{
       //newObj_["stagger"+k]=(ii+jj)
        newObj_["x"+k]=(node.value.relativeTransform[0][2]);
        newObj_["y"+k]=(node.value.relativeTransform[1][2]);
        newObj_["name"+k]=(node.value.name)
        newObj_["xPos"+k]= (newObj_["x"+k]-(compWidth/2)+(newObj_["xWidth"+k]/2))
        newObj_["yPos"+k]= (((newObj_["y"+k]-(compHeight/2))*-1)-newObj_["yHeight"+k]/2)
   }
   newObj_["stagger"+k]=(ii+jj)


newObj_["tgh::::::jklt"+k]=""
newObj_["cornerRadius"+k] = node.value.cornerRadius

if(node.value.fills[0].imageRef == undefined){
newObj_["red"+k] = node.value.fills[0].color.r
newObj_["green"+k] = node.value.fills[0].color.g
newObj_["blue"+k] = node.value.fills[0].color.b
}else{
var _primId = api.primitive("rectangle", newObj_["name"+k]+"----"+(ii));
   newObj_["layer"+k]=(_primId)
newObj_["image"+k] = node.value.fills[0].imageRef
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

return newObj_
}