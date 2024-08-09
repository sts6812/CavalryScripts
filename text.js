function text(node, newObj, ii, jj, k, compWidth, compHeight){
if(node.value.type == "TEXT"){

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
    newObj["textWidth"+k]=(node.value.absoluteBoundingBox.x)
newObj["x"+k]=(node.value.relativeTransform[0][2])
newObj["y"+k]=(node.value.relativeTransform[1][2])
newObj["xWidth"+k] = 0
newObj["yHeight"+k] = 0
    //newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2))
    //newObj["yPos"+k] = (newObj["y"+k]-(compHeight/2)-(newObj["yHeight"+k]/2))
newObj["red"+k] = node.value.fills[0].color.r
newObj["green"+k] = node.value.fills[0].color.g
newObj["blue"+k] = node.value.fills[0].color.b
newObj["fontSize"+k] = node.value.style.fontSize
newObj["letterSpacing"+k] = node.value.style.letterSpacing
newObj["lineSpacing"+k]= node.value.style.paragraphSpacing
newObj["tgh::::::jklt"+k]=""
newObj["textBoxSizeX"+k] = node.value.size.x
newObj["textBoxSizeY"+k] = node.value.size.y
    if(node.level == 9){

        newObj["name"+k]=(node.value.name+"--GROUP")
            newObj["xPos"+k] = ((newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2)))
    newObj["yPos"+k] = (newObj["y"+k]-(compHeight/2)+(newObj["yHeight"+k]/2))*-1
    }else{

        newObj["name"+k]=(node.value.name)
         newObj["yPos"+k] = ((newObj["y"+k]-(compHeight/2))*-1)
        newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2))
    }
    newObj["stagger"+k]=(ii+jj)
var _primId = api.create("textShape", newObj["name"+k]+"----"+(ii+jj));
api.set(_primId,{"text": node.value.characters, "horizontalAlignment": textAlign, "verticalAlignment" : node.value.style.textAlignVertical, "textBoxSize.x": node.value.size.x, "textBoxSize.y": node.value.size.y})
api.set(_primId, {"font":{"font": node.value.style.fontFamily, "style": textWeight}})



newObj["layer"+k]=(_primId)



}
return newObj
}