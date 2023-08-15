// secondsToClock(70)
// 70 -> 01:10

const Format = {
    clock: function(time){

        if(time==undefined) return "00:00"
        if(time == '') return "00:00"
        if((time|0) < 0) return "00:00"
        
        time = time.toString()
        time = time.match(/\d/g).join('')

        if(time.length > 6) return "Limit length = 6"

        time = time.padStart(6, '0')

        let sec = time.slice(4,6)|0
        let min = time.slice(2,4)|0
        let hor = time.slice(0,2)|0

        sec = sec < 0 ? 0 : sec.toString().padStart(2,'0')
        min = min < 0 ? 0 : min.toString().padStart(2,'0')
        hor = hor < 0 ? 0 : hor.toString().padStart(2,'0')

        if(hor == '00') return `${min}:${sec}`

        return `${hor}:${min}:${sec}`
    }, 
    secondsToClock: function(time){
        const int = (n) => Number.parseInt(n)
        const digits = t => int(t).toString().padStart(2, '0')

        let sec = time % 60
        let min = time / 60 % 60
        let hrs = (time / 60 / 60)
    
        sec = sec > 0 ? digits(sec) : digits(0)
        min = min > 0 ? digits(min) : digits(0)
        hrs = hrs > 0 ? digits(hrs) : digits(0)
    
        const msg = (int(hrs) > 0) ? `${hrs}:${min}:${sec}` : `${min}:${sec}`
        return msg
    },
    adjustFormatClock: function(time){

        if(time==undefined) return "00"
        if(time == '') return "00"
        if((time|0) < 0) return "00"
        
        time = time.toString()
        time = time.match(/\d/g).join('')

        if(time.length > 6) return "Limit length = 6"

        time = time.padStart(6, '0')

        let sec = time.slice(4,6)|0
        let min = time.slice(2,4)|0
        let hor = time.slice(0,2)|0

        hor += parseInt(min/60)%24
        min += parseInt(sec/60)%24

        hor %= 60
        min %= 60
        sec %= 60

        sec = sec < 0 ? 0 : sec.toString().padStart(2,'0')
        min = min < 0 ? 0 : min.toString().padStart(2,'0')
        hor = hor < 0 ? 0 : hor.toString().padStart(2,'0')


        if(hor == '00' && min == '00') return `${sec}`
        if(hor == '00') return `${min}:${sec}`

        return `${hor}:${min}:${sec}`
    },
    clockToSeconds(time){
        // time = '2:30'
        time = this.adjustFormatClock(time)
        time = time.split(':').map(e=>parseInt(e))
        let sec = time[time.length-1]
        let min = time[time.length-2] * 60
        let hor = time[time.length-3] *60 * 60
        
        
        sec = isNaN(sec) ? 0 : sec
        min = isNaN(min) ? 0 : min
        hor = isNaN(hor) ? 0 : hor

        return hor+min+sec

    }
}

Format.clockToSeconds('1:61')