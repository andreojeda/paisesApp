import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{
    
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
  }
  
  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
  }

}
