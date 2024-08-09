var Path = "/Volumes/Backup/Scripts/"
//var Path = "C:/users/sts1268/Documents/"

var cavalryImages = {}

var topLevelIds = api.getCompLayers(true);

for (var layer of topLevelIds) {

if(api.getNiceName(layer) == 'Images Image Shader' || api.getNiceName(layer) == "Images Smart Folder"){

cavalryImages["cavalryImages"]= layer
}else{

api.deleteLayer(layer)
}
if(api.getNiceName(layer) == 'Images Image Shader'){cavalryImages["shader"]= layer}
if(api.getNiceName(layer) == "Images Smart Folder"){cavalryImages["folder"]= layer}
}


const apikey = "figd_Eg9ELUNu6aRgN7Aa1vtYDHkMv6RQsPgUrh4q5fG2";
const seasonId = '21787';

const client = new api.WebClient('https://api.figma.com');
const client1 = new api.WebClient('https://api.figma.com');
client.addHeader("X-Figma-Token", apikey);
client1.addHeader("X-Figma-Token", apikey);


api.load(Path + "jeffEasyFilter.js")
api.load(Path + "rectangle.js")
api.load(Path + "rectangle2.js")
api.load(Path + "text.js")
api.load(Path + "text2.js")
api.load(Path + "textGroup.js")
api.load(Path + "rectangleGroup.js")
api.load(Path + "keyframes.js")
api.load(Path + "vector.js")
api.load(Path + "vector2.js")
api.load(Path + "getFigmaLayers.js")


ui.setTitle('Figma Animation')
// create a button
var button = new ui.Button("Refresh figma design");
// set the onClick callback function
// add the button to the layout

ui.add(button);
label = new ui.Label("Stagger");
ui.add(label)

// show the window
ui.show()

ui.setFixedHeight(350);

var num = new ui.NumericField(0);
var slider = new ui.Slider();
slider.setRange(0,50);
slider.setValue(0);

slider.onValueChanged = function() {
var sliderValue = slider.getValue();
num.setValue(sliderValue);
}

num.onValueChanged = function() {
var numValue = num.getValue();
slider.setValue(numValue);
return numValue
}

ui.add(num);
ui.add(slider);
ui.show();

var num1 = new ui.NumericField(30);
var slider1 = new ui.Slider();
slider1.setRange(0,50);
slider1.setValue(0);

slider1.onValueChanged = function() {
var sliderValue = slider1.getValue();
num1.setValue(sliderValue);
}

num1.onValueChanged = function() {
var numValue = num1.getValue();
slider1.setValue(numValue);
return numValue
}
label = new ui.Label("Duration");
ui.add(label)

ui.add(num1);
ui.add(slider1);
ui.show();


var EasingDropdown = new ui.DropDown();
EasingDropdown.setSize(150,22);
myArray = [0,1,2,3]

label = new ui.Label("Easing");
ui.add(label)

EasingDropdown.addEntry("Linear")
EasingDropdown.addEntry("SlowIn")
EasingDropdown.addEntry("SlowOut")
EasingDropdown.addEntry("SlowInSlowOut")
EasingDropdown.addEntry("VerySlowIn")
EasingDropdown.addEntry("VerySlowOut")
EasingDropdown.addEntry("VerySlowInVerySlowOut")
EasingDropdown.addEntry("SpringIn")
EasingDropdown.addEntry("SpringOut")
EasingDropdown.addEntry("SpringInSpringOut")
EasingDropdown.addEntry("SmallSpringIn")
EasingDropdown.addEntry("SmallSpringOut")
EasingDropdown.addEntry("SmallSpringInSmallSpringOut")
EasingDropdown.addEntry("AnticipateIn")
EasingDropdown.addEntry("OvershootOut")
EasingDropdown.addEntry("AnticipateInOvershootOut")
EasingDropdown.addEntry("BounceIn")
EasingDropdown.addEntry("BounceOut")
EasingDropdown.addEntry("BounceInBounceOut")
EasingDropdown.setText("VerySlowInVerySlowOut")


EasingDropdown.onValueChanged = function () {
return EasingDropdown.getText();
};

//EasingDropdown.setValue("VerySlowInVerySlowOut")
ui.addStretch();
ui.add(EasingDropdown);

label = new ui.Label("In Handle");
ui.add(label)

var num2 = new ui.NumericField(100);
var slider2 = new ui.Slider();
slider2.setRange(0,1000);
slider2.setValue(100);

slider2.onValueChanged = function() {
var sliderValue = slider2.getValue();
num2.setValue(sliderValue);
}

num2.onValueChanged = function() {
var numValue = num2.getValue();
slider2.setValue(numValue);
return numValue
}
ui.add(num2);
ui.add(slider2);
ui.show();

label = new ui.Label("Out Handle");
ui.add(label)

var num3 = new ui.NumericField(100);
var slider3 = new ui.Slider();
slider3.setRange(0,1000);
slider3.setValue(100);

slider3.onValueChanged = function() {
var sliderValue = slider3.getValue();
num3.setValue(sliderValue);
}

num3.onValueChanged = function() {
var numValue = num3.getValue();
slider3.setValue(numValue);
return numValue
}
ui.add(num3);
ui.add(slider3);
ui.show();

var button1 = new ui.Button("Send text to Top");

ui.add(button1);


// show the window
ui.show()

ui.setFixedHeight(350);


button.onClick = function () {
    client.get('/v1/files/ZFvyViIzPRhsnU5eyHUQhZ?geometry=paths');
client1.get('/v1/files/ZFvyViIzPRhsnU5eyHUQhZ/images');
var obj = JSON.parse(client.body())
var obj1 = JSON.parse(client1.body())
var comp = api.getActiveComp()
var compRes = (api.get(api.getActiveComp(), "resolution"));
var compWidth = compRes.x
var compHeight = compRes.y
var layers = obj.document.children[0].children[0]
var layers2 = obj.document.children[0].children[1]
api.set(comp,{'resolution.x': layers.size.x})
api.set(comp,{'resolution.y': layers.size.y})
// Send the Get Request...



//console.log(JSON.stringify(obj))
getFigmaLayers(Path, cavalryImages, obj, obj1, compWidth, compHeight)
}

button1.onClick = function () {
    let layers = api.getCompLayers(false);

    for(layer in layers){
    console.log(layers[layer])
       if(api.getLayerType(layers[layer])== "textShape"){
        
           api.select([layers[layer]]);
        api.bringToFront();
           }
       }
        
    }
    
  // if(api.getLayerType(layers)== "text"){console.log(layers)}
    
    
