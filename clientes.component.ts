import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {Cliente} from '../shared/cliente';
import {ClienteService} from '../shared/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Cliente [] = [];
  editando = false;

  constructor(private cS : ClienteService) { }

  columnas : string[] = ['id', 'nombre', 'direccion'];


  ngOnInit(): void {

    this.cS.get().subscribe(
      (clientes) => {
        this.clientes = clientes;
        console.log(clientes);
      } 
    )

  }

  borrar( row : Cliente){
  }

  editar( row : Cliente){
    this.editando = true;
  }

  aceptar(){
    this.editando = false;
  }
  cancelar(){
    this.editando = false;
  }


}
