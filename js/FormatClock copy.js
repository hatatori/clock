// secondsToClock(70)
// 70 -> 01:10
function secondsToFormatClock(time) { // 70 -> 01:10
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
}

function adjustFormatClock(time) { // 00:00:90 -> 01:30
    
    if(time==undefined) return ":00:00"
    if(time == '') return "00:00"
    if((time|0) < 0) return "00:00"
    
    time = time.toString()
    time = time.match(/\d/g).join('')

    if(time.length > 6) return "Limit length = 6"

    time = time.padStart(6, '0')

    let sec = time.slice(4,6)
    let min = time.slice(2,4)
    let hor = time.slice(0,2)

    hor += parseInt(min/60)%24
    min += parseInt(sec/60)%24

    hor %= 60
    min %= 60
    sec %= 60

    sec = sec < 0 ? 0 : sec.toString().padStart(2,'0')
    min = min < 0 ? 0 : min.toString().padStart(2,'0')
    hor = hor < 0 ? 0 : hor.toString().padStart(2,'0')

    if(hor == '00') return `${min}:${sec}`

    return `${hor}:${min}:${sec}`
}

