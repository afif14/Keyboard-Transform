$(document).ready(function() {
    $("form#text-input-form").submit(function(event) {
        event.preventDefault();

        // inisialisasi input 
        var inputText = $("textarea#text-to-change").val();
        //convert semua transformasi value huruf besar, menghilangkan spasi dan bagi dengan koma
        var tranformationValues = $("input#tranformation-values").val().toUpperCase().replace(/\s/g, "").split(",");
        // membuat array menjadi output
        allOutputText = inputText.toLowerCase().split('');
        // membuat object array baru
        var newTransformedText = new TranformText (allOutputText);
        //looping transformasi
        for(let i = 0; i < tranformationValues.length; i++) {
            if (tranformationValues[i] === "H") {
                newTransformedText.horizontalFlip(allOutputText);
                allOutputText = newTransformedText.horizontalFlipValue;
            } else if (tranformationValues[i] === "V") {
                newTransformedText.verticalFlip(allOutputText);
                allOutputText = newTransformedText.verticalFlipValue;
            } else {
                var linierShiftValue = parseInt(tranformationValues[i]);
                newTransformedText.linierShift(allOutputText, linierShiftValue);
                allOutputText = newTransformedText.linierShiftValue;
            }
        }
        
        //hasil tranformasi
        $("#output-text").html(allOutputText.join("").replace(/(\r|\n)/g, "<br> />"));
    });
});





