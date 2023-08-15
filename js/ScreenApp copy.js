class ScreenApp{

    constructor(visor_html, circle_html, square_html){
        super()
        this.visor = visor_html
        this.circle = circle_html
        this.square = square_html
        this.current = true
        this.square.onclick = () => {
            this.current ? this.screenPause() : this.screenPlay()
        }
    }

    getScreenColor(){
        return this.current ? "#2196f3":"#df2d64"
    }

    screenPause(){
        clearInterval(this.s)
        this.current = false
        this.square.classList.add('paused')
        this.circle.setAttribute('stroke',"#ffffff")
    }
    
    screenPlay(){
        this.current = true
        this.loop()
        this.square.classList.remove('paused')
        this.circle.setAttribute('stroke',"#df2d64")
    }

    setScreenCircleProgress(a, b){
        let val = a / b * 100
        val = val < 0 ? 0 : val
        val = val > 100 ? 100 : val
        this.circle.setAttribute('stroke-dasharray', `calc(${val} * 283 / 100) 283`)
        
        if(this.mode == 'short' && this.current) 
            this.circle.setAttribute('stroke', this.getScreenColor() )

    }

    setScreenCurrentTime(value){
        this.currentTime = value-1
        this.ScreenUpdate()
    }

    setScreenT1(value){
        this.set_t1(value)
        this.setScreenTime(value)
        this.ScreenUpdate()
    }

    setScreenT2(value){
        this.set_t2(value)
        this.setScreenTime(value)
        this.ScreenUpdate()
    }

    setScreenTime(value){
        this.visor.innerHTML = this.format_clock(value)
        this.setScreenCircleProgress(this.get_t() - value, this.get_t())
    }

    ScreenUpdate(){
        this.update()
        this.setScreenTime( this.get_t() - this.get_currentTime() )
    }

    

    loop(){
        this.ScreenUpdate()
        this.s = setTimeout(()=>{
            this.loop()
        },1000)
    }

    

}

let screenApp = new ScreenApp(relogio, circle, square)
screenApp.loop()
// screenApp.setScreenTime(0)
// screenApp.update()


// circle_progress(10)