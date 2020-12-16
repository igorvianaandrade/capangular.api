import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CharacterList } from '../models/character/character-list.model';
import { Data } from '@angular/router';
import { Character } from '../models/character/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  /*Marvel keys */
  PUBLIC_KEY = 'd8ef50454c7f9e939315243a325bf81d';
  HASH = '77178b2d0202fdb90b2d362c9004188d';
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  /*getAllCharacters(): Observable<any>{
    console.log(this.URL_API);
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }*/

  getAllCharacters(): Observable<Character[]>{
    console.log(this.URL_API);
    return this.http.get<Character[]>(this.URL_API)
    .pipe(map((data: Data) => data.data.results))
  } 
}
