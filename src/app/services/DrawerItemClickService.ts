import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DrawerItemClickEvent } from '../events/DrawerItemClickEvent';

@Injectable({providedIn:'root'})
export class DrawerItemClickService{

    private subject=new Subject<DrawerItemClickEvent>();

    sendEventMessage(item:DrawerItemClickEvent){
        this.subject.next(item)
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<DrawerItemClickEvent> {
        return this.subject.asObservable();
    }
}