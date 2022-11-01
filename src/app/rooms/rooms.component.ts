import { Component, OnInit } from '@angular/core';
import { Room } from './roomsInterface';
import { RoomList } from './roomsInterface';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel'
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList
  rooms: Room = {totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5};
  

roomList: RoomList [] = [];
constructor() { }
ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Single Room',
        amenities: 'Air Conditioning',
        price: 500,
        photos: 'www.img.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioning',
        price: 500,
        photos: 'www.img.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 4.7
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioning',
        price: 500,
        photos: 'www.img.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 4.0
      }
    ];
 }
toggle(){
  this.hideRooms = !this.hideRooms;
}

seLectRoom(room: RoomList){
  this.selectedRoom = room;
  console.log(room)
}


}
