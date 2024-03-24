(()=>{
    updateBattery();
})();



function updateBattery() {
    navigator.getBattery().then((battery)=>{
        let level=Math.floor(battery.level*100);
        let BatteryLevel=document.querySelector(".container__battery-status-desc");
        let batterySize=document.querySelector(".battery-ele--size");
        batterySize.style.width=level+"%";        
        BatteryLevel.innerText=`Your device Battery is ${level}%`;

        if(level<=20){
            batterySize.style.background="red";
            BatteryLevel.style.color="red";
        }
        else{
            batterySize.style.background="green";
            BatteryLevel.style.color="green";            
        }
        let isCharging=document.querySelector(".isCharging-desc");
        if(battery.charging){
            isCharging.style.color="Green";
            isCharging.innerText="Charging";
        }
        else{
            isCharging.style.color="Blue";
            isCharging.innerText="Not Charging";
        }
    });      
}  
setInterval(() => {
    updateBattery();
}, 1000);