export class Timer {
  private totalTime: number;
  private interval?: number = undefined;
  private currentTime: number = 0;

  constructor({ t }: { t: number }) {
    this.totalTime = t;

    if (this.interval) {
      this.interval = undefined;
    }
    this.interval = setInterval(() => {
      this.totalTime -= 1;
      this.currentTime += 1;
      if (this.totalTime == 0) {
        clearInterval(this.interval);
      }

      console.log(this.totalTime);
    }, 1000);
  }

  get time() {
    return this.totalTime;
  }

  get getCurrentTime() {
    return this.currentTime;
  }
}
