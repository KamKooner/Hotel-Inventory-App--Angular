import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../roomsInterface';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {
  }
  seLectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }

}
