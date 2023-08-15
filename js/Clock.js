class Clock {

    constructor() {
        this.t1 = 60*4
        this.t2 = 60*2
        this.currentTime = 0
        this.currentTimeRegress = 0
        this.paused = true
        this.mode = 0
        this.count = 1

        this.clock = {
            reset: this.reset,
            update: this.update,
            play: this.play,
            pause: this.pause,
            playpause: this.playpause,
            format: Format
        }

        this.set = {
            t1: this.setT1.bind(this),
            t2: this.setT1.bind(this)
        }

    }

    isPaused() { return this.paused }
    pause() { this.paused = true }
    play() { this.paused = false }
    playpause() { this.paused = !this.paused }
    

    getFullTime() { return !this.mode ? this.t1 : this.t2 }
    
    getCountDown() { 
        return !this.mode ? this.t1 - this.currentTime : this.t2 - this.currentTime 
    }

    getCurrentTimeRegressedFormated() { 
        return Format.secondsToClock(this.getCurrentTimeRegressed()) 
        // return Format
    }
    
    setCurrentTimeRegress(value) { 
        return this.currentTimeRegress = value 
    }

    setT1(value){ 
        this.t1 = value 
        this.currentTime = 0
    }
    setT2(value){ 
        this.t2 = value 
        this.currentTime = 0
    }

    reset() {
        this.mode = 0
        this.currentTime = 0
        this.count = 0
    }

    update() {

        if(this.paused) return
        
        this.currentTime++

        if (this.getCountDown() < 0) {
            this.mode = this.mode == 0 ? 1 : 0
            this.currentTime = 0
        }
        // if (this.currentTime == 0 && this.mode == 0) {
        //     this.count++
        // }

        if(screenApp.getCountDown() == 0 && this.mode == 1 ){
            this.count++
        }

        // this.countdown = this.getFullTime() - this.currentTime
        this.countdown--
        
    }

}
