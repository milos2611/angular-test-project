import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private numerSocket: number = 0;
  public socketNumber = new Subject<number>();

  addElement(add: number) {
    this.socketNumber.next((this.numerSocket += add));
  }
}
