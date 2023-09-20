
import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
    name: "Krillin",
    power: 1000
    },
    {
     name: "Goku",
     power: 9500
    },
    {
      name: "Vegeta",
      power: 7500
     }
  ];

  onNewCharacter( character: Character):void{
    this.characters.push(character);      //Al final de la lista
    //this.characters.unshift(character);   //Al iniciio de la lista
  }

  onDeleteCharacter(index: number): void{
    this.characters.splice(index, 1);
  }

}
