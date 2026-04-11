import { Injectable } from '@angular/core';
import {PageEvent} from "../../models/events/base/page-event.model";
import {filter, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class EventBusService{
  private eventSubject=new Subject<PageEvent>()

  public emit(event:PageEvent){
    console.log(event)
    this.eventSubject.next(event)
  }

  public on<T extends PageEvent>(eventType: new (...args: any[]) => T) {
    return this.eventSubject.pipe(
      filter((e): e is T => e instanceof eventType)
    );
  }

}
