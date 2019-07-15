 weightValue= document.getElementById("weight")
weightValue.addEventListener('keyup',()=>{
    val = Number(weightValue.value);
    if(isNaN(val)){
        document.getElementById("kg").hidden=true
        document.getElementById("ounce").hidden=true
        document.getElementById("stone").hidden=true

        $("#error").fadeIn("slow");
        setTimeout(()=> {$("#error").fadeOut("slow");},5000);
       
    }
    else{
        if(weightValue.value.length>0){
            kg = val * 0.453592
            stone = val * 0.0714286
            ounce = val * 16
    
            kg_result = kg + " kilograms"
            stone_result = stone + " stones"
            ounce_result = ounce + " ounces"
    
            $("#kg").html(kg_result);
            $("#ounce").html(ounce_result);
            $("#stone").html(stone_result);
    
            $("#kg").slideDown("slow");
            $("#ounce").slideDown("slow");
            $("#stone").slideDown("slow");
            
            setTimeout(()=> {$("#kg").slideUp("slow");},5000);
            setTimeout(()=> {$("#ounce").slideUp("slow");},5000); 

            setTimeout(()=> {$("#stone").slideUp("slow");},5000); 

        }
       
    }
})