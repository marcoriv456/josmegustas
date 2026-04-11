import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Bus {
  private eventSubject = new Subject<any>();

  public emit(event: any) {
    console.log(event);
    this.eventSubject.next(event);
  }

  public on<T>(eventType: new (...args: any[]) => T) {
    return this.eventSubject.pipe(filter((e): e is T => e instanceof eventType));
  }
}
