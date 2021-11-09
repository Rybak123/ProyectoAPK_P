import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { GlobalConstants } from '../global-constants';
@Injectable()
export class NotificacionesService {

  public socket:any;  
  readonly URL = `${GlobalConstants.apiURL}`;
  constructor() {
    this.socket = io.io(this.URL);
  }  
  
  listen(){
    return new Observable(suscriber=>{
      this.socket.on('messageRespuesta',(data:any)=>{
        suscriber.next(data);
      });
    });
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  
}