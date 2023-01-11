import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl2: string = 'https://restcountries.com/v2/';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,cca2,flags,population,alpha2Code');
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url,{ params: this.httpParams }).pipe(tap(console.log));
  }

  getPaisPorAlpha( id: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );

  }
  buscarRegion( region: string ):Observable<Country[]>{

    const httpParams = new HttpParams();
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams }).pipe(tap(console.log));

}
}
