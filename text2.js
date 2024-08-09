function text2(node, newObj, newObj_, ii, jj, k, compWidth, compHeight){

if(node.value.type == "TEXT"){
    
    var yParent1 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[0].relativeTransform[1][2]))
var yParent2 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[1][2]))
var xParent1 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[0].relativeTransform[0][2]))
var xParent2 = (JSON.stringify(JSON.parse(client.body()).document.children[0].children[1].relativeTransform[0][2]))


var yParDiff = (yParent2 - yParent1)
var xParDiff = (xParent2 - xParent1)


var fontWeight = node.value.style.fontWeight
var fontWeight2 = node.value.style.fontWeight
var align = node.value.style.textAlignHorizontal
var align2 = node.value.style.textAlignHorizontal
if(fontWeight == 100){textWeight = "Thin"}
if(fontWeight2 == 100){textWeight2 = "Thin"}
if(fontWeight == 200){textWeight = "ExtraLight"}
if(fontWeight2 == 200){textWeight2 = "ExtraLight"}
if(fontWeight == 300){textWeight = "Light"}
if(fontWeight2 == 300){textWeight2 = "Light"}
if(fontWeight == 400){textWeight = "Normal"}
if(fontWeight2 == 400){textWeight2 = "Normal"}
if(fontWeight == 500){textWeight ="Medium"}
if(fontWeight2 == 500){textWeight2 = "Medium"}
if(fontWeight == 600){textWeight = "SemiBold"}
if(fontWeight2 == 600){textWeight2 = "SemiBold"}
if(fontWeight == 700){textWeight = "Bold"}
if(fontWeight2 == 700){textWeight2 = "Bold"}
if(fontWeight == 800){textWeight = "ExtraBold"}
if(fontWeight2 == 800){textWeight2 = "ExtraBold"}
if(fontWeight == 900){textWeight = "Black"}
if(fontWeight2 == 900){textWeight2 = "Black"}
if(align == "LEFT"){textAlign = 0}
if(align2 == "LEFT"){textAlign2 = 0}
if(align == "CENTER"){textAlign = 1}
if(align2 == "CENTER"){textAlign2 = 1}
if(align == "RIGHT"){textAlign = 2}
if(align2 == "RIGHT"){textAlign2 = 2}
    newObj_["textWidth"+k]=(node.value.absoluteBoundingBox.x)
newObj_["x"+k]=(node.value.relativeTransform[0][2])
newObj_["y"+k]=(node.value.relativeTransform[1][2])
newObj_["xWidth"+k] = 0
newObj_["yHeight"+k] = 0
    //newObj_["xPos"+k] = (newObj_["x"+k]-(compWidth/2)+(newObj_["xWidth"+k]/2))
    //newObj_["yPos"+k] = (newObj_["y"+k]-(compHeight/2)-(newObj_["yHeight"+k]/2))
newObj_["red"+k] = node.value.fills[0].color.r
newObj_["green"+k] = node.value.fills[0].color.g
newObj_["blue"+k] = node.value.fills[0].color.b
newObj_["fontSize"+k] = node.value.style.fontSize
newObj_["letterSpacing"+k] = node.value.style.letterSpacing
newObj_["lineSpacing"+k]= node.value.style.paragraphSpacing
newObj_["tgh::::::jklt"+k]=""
    newObj_["textBoxSizeX"+k] = node.value.size.x
newObj_["textBoxSizeY"+k] = node.value.size.y
    if(node.level == 9){
       newObj_["x"+k]=(node.value.absoluteBoundingBox.x)
        newObj_["xPos"+k] = ((newObj_["x"+k]-(compWidth/2)+(newObj_["xWidth"+k]/2)))-xParDiff
        //newObj_["xPos"+k] = (newObj_["x"+k]+(compWidth/2)+(newObj_["xWidth"+k]))-compWidth
       newObj_["y"+k]=(node.value.absoluteBoundingBox.y);
        newObj_["yPos"+k] = ((newObj_["y"+k]-(compHeight/2)+(newObj_["yHeight"+k]/2))*-1)+yParDiff
       newObj_["name"+k]=(node.value.name+"---GROUP")
    }else{

        newObj_["name"+k]=(node.value.name)
         newObj_["yPos"+k] = ((newObj_["y"+k]-(compHeight/2))*-1)
        newObj_["xPos"+k] = (newObj_["x"+k]-(compWidth/2))
    }
    newObj_["stagger"+k]=(ii+jj)
var _primId = api.create("textShape", newObj_["name"+k]+"----"+(ii+jj));
api.set(_primId,{"text": node.value.characters, "horizontalAlignment": textAlign, "verticalAlignment" : node.value.style.textAlignVertical, "textBoxSize.x": node.value.size.x, "textBoxSize.y": node.value.size.y})
api.set(_primId, {"font":{"font": node.value.style.fontFamily, "style": textWeight}})



newObj_["layer"+k]=(_primId)



}
return newObj_
}