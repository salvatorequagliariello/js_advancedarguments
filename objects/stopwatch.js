
function Stopwatch() {

    let startTime, endTime, running, duration = 0;


    this.start = () => {
        if (running) throw new Error(`Stopwatch has already  started!`);
        startTime = new Date();
        running = true;
    };

    this.stop = () => {
        if (!running) throw new Error(`Stopwatch has already been stopped!`)
        endTime = new Date();
        running = false;

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = () => {
        endTime = 0;
        startTime = 0;
        duration = 0;
        running = false;
    };


    Object.defineProperty(this, `duration`, {
        get: function() {return duration}
    })
};