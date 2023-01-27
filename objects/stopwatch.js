 

 function Stopwatch () {

    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) throw new Error(`Stopwatch has already started.`);
        
        running = true;

        startTime = new Date();
    };

    this.stop = () => {
        if (!running) throw new Error(`Stopwatch has already stopped.`);

        running = true;

        endTime = new Date();
        
        const seconds =  (endTime.getTime()  - startTime.getTime()) /  1000;
        duration += seconds;
    };

    this.reset = () => {
        startTime = null;
        endTime  =  null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, `duration, {
        get: function() {return duration};
    }`)

 };