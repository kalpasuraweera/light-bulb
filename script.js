let lightSwitch = false; // varibale to represnt switch state

//toggle switch 
$("#switch").click(()=>{
    if (lightSwitch) {
        lightSwitch=false; // if the current state true it turns to false
        // toggle images
        $("#switch").attr('src','./images/off switch.png');
        $("#bulb").attr('src', './images/off.jpg');
        
        
    } else {
        lightSwitch=true;
        $("#switch").attr('src','./images/on switch.png');
        $("#bulb").attr('src', './images/on.jpg');
        
    }

});

