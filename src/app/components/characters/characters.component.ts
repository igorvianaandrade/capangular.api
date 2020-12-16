import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterList } from 'src/app/models/character/character-list.model';
import { Character } from 'src/app/models/character/character.model';
import { CharactersApiService } from 'src/app/services/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  characterList: Character[] = [];

  constructor(private characterService: CharactersApiService) { }
  // chamando da própria api
 // characterList: Observable<any>;

  // getCharacters() {
  //   this.characterList = this.characterService.getAllCharacters();
  //   console.log("lista"+this.characterList);
  // }

  /*chamando com modelagem */
  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .subscribe((response:any) => {
      this.characterList = response;
      console.log("OI: "+this.characterList);
    });
  }
}
