class ScreenApp extends Clock{

    constructor(visor, circle, square){
        super()
        this.visor = visor
        this.circle = circle
        this.square = square

        this.square.onclick = () => {
            this.control.playpause()
        }
        
        const t = this

        this.control = {
            play: () => {
                this.square.classList.remove('paused')
                this.square.style.scale = 1
                this.play()
                console.log('ok')
            },
            pause: () => {
                this.square.classList.add('paused')
                this.square.style.scale = 0.9
                this.pause()
            },
            playpause: () => {
                this.playpause()
                this.isPaused() ? this.control.pause() : this.control.play()
            },
            setTime(){
                // screenApp.setCircle2(screenApp.currentTime)
            },
            circle: a =>{
                let b = this.mode == 0 ? this.t1 : this.t2

                if(b==0) {
                    a = 3
                }

                let val = a / b * 100
                val = val < 0 ? 0 : val
                val = val > 100 ? 100 : val
                this.circle.setAttribute('stroke-dasharray', `calc(${(val * 283 / 100).toFixed(2)}) 283`)
                this.circle.setAttribute('stroke', this.mode ? "#2196f3" : "#df2d64" )
            },
            reset(){
                t.currentTime = 0
                t.count = 1
                // this.reset()
                // this.update()
                t.render()
            }
        }
    }
    

    setCircle(a, b){
        let val = a / b * 100

        if(b==0) {
            a = 0
            b = 0
        }

        val = val < 0 ? 0 : val
        val = val > 100 ? 100 : val
        this.circle.setAttribute('stroke-dasharray', `calc(${val} * 283 / 100) 283`)
        this.circle.setAttribute('stroke', this.mode ? "#2196f3" : "#df2d64" )
    }

    render(){
        // this.visor.innerHTML = this.currentTime
        // this.visor.innerHTML = Format.adjustFormatClock(this.currentTime)
        // this.visor.innerHTML = this.getCountDown()
        // this.visor.innerHTML = this.getCountDown()
        // this.visor.innerHTML = Format.adjustFormatClock(this.getCountDown())
        this.visor.innerHTML = Format.secondsToClock(this.getCountDown())
        this.control.circle(this.currentTime)
        clock_count.innerHTML = "# "+this.count

        let audio = new Audio('./mp3/clock.mp3')
        
    }
    

}

let screenApp = new ScreenApp(relogio, circle, square)
screenApp.render()
screenApp.control.play()


// setInterval(()=>{
//     let a = Format.clockToSeconds(screenApp.visor.innerHTML)
//     let b = Format.clockToSeconds(screenApp.visor.innerHTML) - screenApp.currentTime

//     console.log('a: '+a)
//     console.log('b: '+b)
//     console.log(a==b)

//     if(a != b)
//         screenApp.render()

// },1000/30)

setInterval(()=>{
    screenApp.update()
    screenApp.render()

    if( !screenApp.paused && [3,2,1].includes(screenApp.getCountDown())){
        let audio = new Audio('./mp3/clock.mp3')
        audio.play()
    }
    if( !screenApp.paused && [0].includes(screenApp.getCountDown())){
        let audio = new Audio('./mp3/bass.mp3')
        audio.play()
    }
},1000)



// Clock.getFullTime()
// screenApp.clock.reset

