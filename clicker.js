button = document.querySelector('.user-tap-button')
NoneEnergy = false
function click() {
    try{
        const energy = document.querySelector('.user-tap-energy > p')
        if(energy){
            const enegryVal = energy.innerText
            const energyCur = Number(enegryVal.split("/")[0])
            const energyMax = Number(enegryVal.split("/")[1])
            
            if(!NoneEnergy){
            let i = 0
            while(i < 6){
                button.dispatchEvent(new PointerEvent('pointerup'))
                i ++
            }}

            if(energyCur <= 10){
                NoneEnergy = true
            }
            if((energyMax - energyCur) <= 7950){
                NoneEnergy = false
            }
        }
    } catch(error){
        console.log(error)
    }

setTimeout(click, 123 * Math.random() + 4)
}   
click()
