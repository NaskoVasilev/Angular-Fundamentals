export class Game {
    public showContent: boolean;
    public imageUrl: string;
    constructor(public title: string, public price: number) {
      this.imageUrl = 'https://www.androidlegend.com/wp-content/uploads/2015/09/NFS-most-wanted-for-pc-android-legend-1.jpg';
    }
  
    public toggleContent($event) {
      this.showContent = !this.showContent;
    }
  
    public setTitle(title: string) {
      this.title = title;
    }
  }