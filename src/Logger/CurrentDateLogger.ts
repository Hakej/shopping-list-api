// This component is made to avoid worker deploying the API sleeping

export class CurrentDateLogger {
  constructor(loggingInterval: number) {
    setInterval(this.logCurrentDate, loggingInterval);
  }

  logCurrentDate() {
    const date = new Date();
    console.log(date);
  }
}
