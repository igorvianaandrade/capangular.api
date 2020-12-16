import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterList } from 'src/app/models/character/character-list.model';
import { CharactersApiService } from 'src/app/services/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  characterList: CharacterList = {};

  constructor(private characterService: CharactersApiService) { }
  /* chamando da própria api*/
 // characterList: Observable<any>;
  
  // ngOnInit(): void {
  //   this.getCharacters();
  // }

  // getCharacters() {
  //   this.characterList = this.characterService.getAllCharacters();
  //   console.log("lista"+this.characterList);
  // }

  /*chamando com modelagem */

  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .subscribe((response:any) => {
      
      this.characterList = response;

     // this.characterList.data.results?.map(result => {

     // });
    });
  }
}
