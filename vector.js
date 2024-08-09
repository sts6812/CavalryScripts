function vector( node, newObj, ii, jj, k, path, obj, compWidth, compHeight){
  
if(node.value.type == "VECTOR"){
   
function parse(d) {
var re = {
command: /\s*([achlmqstvz])/gi,
number: /\s*([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/gi,
comma: /\s*(?:(,)|\s)/g,
flag: /\s*([01])/g
};
var matchers = {
"number": function(must) {
var x = get("number", must);
if(x === null) return null;
return +x;
},
"coordinate pair": function(must) {
var x = get("number", must);
if (x === null && !must) return null;
get("comma");
var y = get("number", true);
return { x: +x, y: +y };
},
"arc definition": function(must) {
var radii = matchers["coordinate pair"](must);
if (!radii && !must) return null;
get("comma");
var rotation = +get("number", true);
get("comma", true);
var large = !!+get("flag", true);
get("comma");
var clockwise = !!+get("flag", true);
get("comma");
var end = matchers["coordinate pair"](true);
return {
radii: radii,
rotation: rotation,
large: large,
clockwise: clockwise,
end: end
};
}
}
var index = 0;
var commands = [];

while (index < d.length) {
var cmd = get("command");
var upcmd = cmd.toUpperCase();
var relative = cmd !== upcmd;
var sequence;
switch (upcmd) {
case "M":
sequence = getSequence("coordinate pair").map(function(coords, i) {
if (i === 1) cmd = relative ? "l" : "L";
return makeCommand({ end: coords });
});
break;
case "L":
case "T":
sequence = getSequence("coordinate pair").map(function(coords) {
return makeCommand({ end: coords });
});
break;
case "C":
sequence = getSequence("coordinate pair");
if (sequence.length % 3)
throw Error("Expected coordinate pair triplet at position " + index);

sequence = sequence.reduce(function(seq, coords, i) {
var rest = i % 3;
if (!rest) {
seq.push(makeCommand({ cp1: coords }));
} else {
var last = seq[seq.length - 1];
last[rest === 1 ? "cp2" : "end"] = coords;
}
return seq;
}, []);

break;
case "Q":
case "S":
sequence = getSequence("coordinate pair");
if (sequence.length & 1)
throw Error("Expected coordinate pair couple at position " + index);

sequence = sequence.reduce(function(seq, coords, i) {
var odd = i & 1;
if (!odd) {
seq.push(makeCommand({ cp: coords }));
} else {
var last = seq[seq.length - 1];
last.end = coords;
}
return seq;
}, []);

break;
case "H":
case "V":
sequence = getSequence("number").map(function(value) {
return makeCommand({ value: value });
});
break;
case "A":
sequence = getSequence("arc definition").map(makeCommand);
break;
case "Z":
sequence = [ { code: "Z" } ];
break;
}
commands.push.apply(commands, sequence);
}

return commands;

function makeCommand(obj) {
obj.code = cmd;
obj.relative = relative;

return obj;
}
function get(what, must) {
re[what].lastIndex = index;
var res = re[what].exec(d);
if (!res || res.index !== index) {
if (!must) return null;
throw Error("Expected " + what + " at position " + index);
}

index = re[what].lastIndex;

return res[1];
}
function getSequence(what) {
var sequence = [];
var matched;
var must = true;
while ((matched = matchers[what](must)) !== null) {
sequence.push(matched);
must = !!get("comma");
}

return sequence;
}
};



var str = node.value.fillGeometry[0].path


const svgpath = parse(str);

//for (obj in svgpath){console.log(JSON.stringify(svgpath[ii++].code))}





//var layerId = api.createEditable(path, "My Path");
//let layerId_ = api.getEditablePath(layerId, true);
//var commands = str.split(/(?=[LMC])/);









//var pointsArray2 = pointsArray.slice(1, d.length).split(',');



//console.log(_layerId)

var pairsArray = [];






var path = new cavalry.Path();
for(let obj of svgpath){

if(obj.code == "M"){

path.moveTo(obj.end.x,obj.end.y*-1);
}
if(obj.code == "L"){

path.lineTo(obj.end.x,obj.end.y*-1);
}




// this path can then be returned if on the JavaScript layer
// or used to create an Editable Shape like so

//onsole.log(layerId_[0].points[i-1].position.y)
}


newObj["xWidth"+k] = parseFloat(node.value.size.x)
newObj["yHeight"+k] = parseFloat(node.value.size.y)
 
newObj["xPos"+k] = (newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]/2))
   
   
     if(node.level == 9){
        //newObj["stagger"+k]=(jj)
       newObj["y"+k]=(node.value.absoluteBoundingBox.y);
        newObj["yPos"+k] = ((newObj["y"+k]-(compHeight/2)+(newObj["yHeight"+k]))*-1)
       newObj["name"+k]=(node.value.name+"---GROUP")
                       newObj["x"+k]=(node.value.absoluteBoundingBox.x);
         newObj["xPos"+k] = ((newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]))-newObj["xWidth"+k])
    }else{
        //newObj["stagger"+k]=(ii+jj)
       newObj["y"+k]=(node.value.absoluteBoundingBox.y);
        newObj["yPos"+k] = ((newObj["y"+k]-(compHeight/2)+(newObj["yHeight"+k]))*-1)
       newObj["name"+k]=(node.value.name)
                       newObj["x"+k]=(node.value.absoluteBoundingBox.x);
         newObj["xPos"+k] = ((newObj["x"+k]-(compWidth/2)+(newObj["xWidth"+k]))-newObj["xWidth"+k])
        
     
    }
var mypath = api.createEditable(path, newObj["name"+k]);
    api.set(mypath, {"pivot.y": (node.value.size.y)*-1})
path.close()
newObj["layer"+k]=(mypath)
newObj["stagger"+k]=(ii+jj)



   
//newObj["xPos"+k]= (newObj["x"+k]-(compWidth/2))
    //newObj["yPos"+k]= (((newObj["y"+k]-(compHeight/2))*-1)-newObj["yHeight"+k])

newObj["tgh::::::jklt"+k]=""
newObj["cornerRadius"+k] = node.value.cornerRadius

if(node.value.fills[0].imageRef == undefined){
newObj["red"+k] = node.value.fills[0].color.r
newObj["green"+k] = node.value.fills[0].color.g
newObj["blue"+k] = node.value.fills[0].color.b}




//console.log(pointsArray[0])

//var x = (pointsArray[0])

//var y = (pointsArray[1])

//path.moveTo(Number(x),Number(y));

//path.lineTo(0.,-100.);

//path.lineTo(300.,-100.);

//path.cubicTo(210., 110., 240., 140., 280., 260);

//path.close();








//return pairsArray;


//api.setEditablePath(layerId, true, layerId_);
try{
//console.log(JSON.stringify(layerId))

}catch(e){""
}
}
}
//console.log(pointArrays[0].split(','))