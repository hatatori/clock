class DigitalKeyboard extends Clock{
    constructor(DigitalVisor){
        super()
        this.DigitalVisor = DigitalVisor
        this.digit = ''

        this.DigitalVisor.onclick=(DigitalVisor)=>{
            // this.digit = Format.adjustFormatClock(this.digit)
            // this.digit = ''
            // this.render()
            // console.log(this.DigitalVisor)
            Dropdown(this.DigitalVisor.parentElement).toggle()
            // Dropdown(DigitalVisor).toggle()
        }
    }
    
    add(n){
        this.digit += n
        if(this.digit.length >= 7) this.digit = ''
        this.render()
    }

    backspace(){
        this.digit = this.digit.slice(0,-1)
        this.render()
    }

    getDigitalKeyboardTime(){
        // return Format.prototype.secondsToClock(this.digit)
    }

    getVisorValue(){
        // format_clock(getClockToSeconds(Format.prototype.secondsToClock(this.digit)))
        return getClockToSeconds(Format.prototype.secondsToClock(this.digit))
    }

    reset(){
        this.digit = ""
        this.render()
    }
    
    render(){
        this.DigitalVisor.innerHTML = Format.clock(this.digit)
    }
}

let DigitalKeyboard1 = new DigitalKeyboard(bt_a)
let DigitalKeyboard2 = new DigitalKeyboard(bt_b)

DigitalKeyboard1.start = function(){
    this.DigitalVisor.innerHTML = Format.clock(Format.adjustFormatClock(this.digit|0))
    screenApp.setT1(Format.clockToSeconds(this.digit|0))
    screenApp.mode = 0
    screenApp.control.pause()
    Dropdown(dropdown_a).close()
    screenApp.render()
}

DigitalKeyboard2.start = function(){
    this.DigitalVisor.innerHTML = Format.clock(Format.adjustFormatClock(this.digit|0))
    screenApp.setT2(Format.clockToSeconds(this.digit|0))
    screenApp.mode = 0
    screenApp.control.pause()
    Dropdown(dropdown_b).close()
    screenApp.render()
}
