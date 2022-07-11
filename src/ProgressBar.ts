export class ProgressBar {
  progressBarDiv: HTMLDivElement;
  percentageFull: number = 0;

  constructor(div: HTMLDivElement) {
    this.progressBarDiv = div;
  }

  setPercentage(p: number) {
    if (0 <= p && p <= 1) {
        this.percentageFull = p;


    }
  }

  private setWidth(n: number) {
        const child = this.progressBarDiv.children[0] as HTMLDivElement
        // child.style.width = this.progressBarDiv.style.width * n
  }
}
