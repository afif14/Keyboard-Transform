// membuat baris keyboard dengan array
var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var row4 = ["z", "x", "c", "v", "b", "n", "m"];

// menggabungkan semua baris
var allRows = row1.concat(row2).concat(row3).concat(row4);

//membuat hasil akhir
var allOutputText= [];

//membuat variabel array
var characterPlaceInArray;

//membuat object
function TranformText () {
    this.horizontalFlipValue = [];
    this.verticalFlipValue = [];
    this.linierShiftValue = [];
}

//horizontal flip
TranformText.prototype.horizontalFlip = function (allOutputText) {
    this.horizontalFlipValue = [];
    for(let i = 0; i < allOutputText.length; i++) {
        if($.inArray(allOutputText[i], row1) != -1) {
            characterPlaceInArray = row1.indexOf(allOutputText[i], row1);
            this.horizontalFlipValue.push(row1[(row1.length - 1) - characterPlaceInArray]);
        } else if ($.inArray(allOutputText[i], row2) != -1) {
            characterPlaceInArray = row2.indexOf(allOutputText[i], row2);
            this.horizontalFlipValue.push(row2[(row2.length - 1) - characterPlaceInArray]);
        } else if ($.inArray(allOutputText[i], row3) != -1) {
            characterPlaceInArray = row3.indexOf(allOutputText[i], row3);
            this.horizontalFlipValue.push(row3[(row3.length - 1) - characterPlaceInArray]);
        } else if ($.inArray(allOutputText[i], row4) != -1) {
            characterPlaceInArray = row4.indexOf(allOutputText[i], row4);
            this.horizontalFlipValue.push(row4[(row4.length - 1) - characterPlaceInArray]);
        } else {
            this.horizontalFlipValue.push(allOutputText);
        }
    }

    allOutputText = this.horizontalFlipValue;
}

//vertical flip
TranformText.prototype.verticalFlip = function (allOutputText) {
    this.verticalFlipValue = [];
    for(let i = 0; i < allOutputText.length; i++) {
        if($.inArray(allOutputText[i], row1) != -1){
            characterPlaceInArray = row1.indexOf(allOutputText[i], row1);
            this.verticalFlipValue.push(row4[characterPlaceInArray]);
        } else if($.inArray(allOutputText[i], row2) != -1){
            characterPlaceInArray = row2.indexOf(allOutputText[i], row2);
            this.verticalFlipValue.push(row3[characterPlaceInArray]);
        }else if($.inArray(allOutputText[i], row3) != -1){
            characterPlaceInArray = row3.indexOf(allOutputText[i], row3);
            this.verticalFlipValue.push(row2[characterPlaceInArray]);
        } else if($.inArray(allOutputText[i], row4) != -1){
            characterPlaceInArray = row4.indexOf(allOutputText[i], row4);
            this.verticalFlipValue.push(row1[characterPlaceInArray]);
        } else {
            this.verticalFlipValue.push(allOutputText[i]);
        }
    }

    allOutputText = this.verticalFlipValue;
}

//Shift
TranformText.prototype.linierShift = function (allOutputText, linierShiftValue) {
    this.linierShiftValue  = [];
    for(let i = 0; i < allOutputText.length; i++) {
        if($.inArray(allOutputText[i], allRows) != -1) {
            characterPlaceInArray = allRows.indexOf(allOutputText[i], allRows);
            if(linierShiftValue < 0 || linierShiftValue === 0) {
                if((linierShiftValue % 40) === 0) {
                    this.linierShiftValue.push(allRows[characterPlaceInArray]);
                } else {
                    if((characterPlaceInArray + (linierShiftValue % 40)) < 0) {
                        this.linierShiftValue.push(allRows[allRows.length + (characterPlaceInArray + (linierShiftValue % 40))]);
                    } else {
                        this.linierShiftValue.push(allRows[characterPlaceInArray + (linierShiftValue % 40)]);
                    }
                }
            } else if (linierShiftValue > 0) {
                this.linierShiftValue.push(allRows[(characterPlaceInArray + (linierShiftValue % 40)) % 40]);
            }
        } else {
            allOutputText = this.linierShiftValue;
        }
    }
    allOutputText = this.linierShiftValue;
}