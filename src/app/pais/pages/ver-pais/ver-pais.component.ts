import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) {}

  ngOnInit(): void {  
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) )
    )
    .subscribe( pais => {
      console.log(pais);
    });
  }
}
