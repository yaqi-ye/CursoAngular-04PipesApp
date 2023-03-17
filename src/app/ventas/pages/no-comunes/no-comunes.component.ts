import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Samuel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  // i18nPlural
  clientes: string[] = ['María','Pedro','Juan','Eduardo','Rodrigo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela:  true
    },
    {
      nombre: 'Robin',
      vuela:  false
    },
    {
      nombre: 'Aquaman',
      vuela:  false
    },
  ]

  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise ( ( resolve, object ) => {
    setTimeout(() => {
      resolve ( 'Tenemos data de promesa' );
      }, 3500 );
    });
}
