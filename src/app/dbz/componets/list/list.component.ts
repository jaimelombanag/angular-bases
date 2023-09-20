import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }];

  public onDeleteCharacter(index: number):void{
    //TODO: Emitir el Id del personaje
    console.log({index});
    this.onDelete.emit(index);


  }

}
