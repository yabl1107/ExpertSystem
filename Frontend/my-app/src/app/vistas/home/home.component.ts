import { Component } from '@angular/core';
import {HeaderComponent} from '../../plantillas/header/header.component';
import {ApiService} from '../../service/api.service';
import { MyResponse } from '../../service/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  fechaActual: Date = new Date();
  sintomas: any =  {};
  enfermedades: any =  {};
  errorSintomas = '';
  indices: number[] = [];
  valoresSeleccionados: any = {};
  respuesta: string | null = null;
  diagnostico: string='';

  constructor(private apiService: ApiService){ }

  ngOnInit() {
    this.getSintomas();
    this.getEnfermedades();
  }


  agregarSelect() {
    const nuevoIndex = this.indices.length;
    this.indices.push(nuevoIndex);
  }

  onSelectChange($event: any, index:number) {
    let selectedIndex = $event.target.options[$event.target.options.selectedIndex];
    let text = selectedIndex.text;
    this.valoresSeleccionados['select_'+index] = text;
    console.log('select_'+index);
    console.log(this.valoresSeleccionados);
  }

  onDelete( index:number) {
    delete this.valoresSeleccionados['select_'+index] ;
    const i = this.indices.indexOf(index, 0);
    console.log(this.indices)
    this.indices.splice(i, 1);
    console.log(index+" valor " + i);
    console.log(this.indices)
  }

  clear(){
    this.valoresSeleccionados = {};
    this.indices = [];
    this.respuesta = null;
    this.diagnostico = '';
  }
  getSintomas(){
    this.apiService.getSintomas().subscribe(
      (response:MyResponse) =>{
      this.sintomas = response.data;
      console.log(this.sintomas);
    }
    );
  }
  getEnfermedades(){
    this.apiService.getEnfermedades().subscribe(
      (response:MyResponse) =>{
        this.enfermedades = response.data;
        console.log(this.enfermedades);
      }
  );
  }

  submitData(){
    const diagnostic: {[key: string]: number} = {};
    for (const clave in this.valoresSeleccionados) {
        const valor = this.valoresSeleccionados[clave];
        diagnostic[valor] = 1;
    }
    console.log(diagnostic);
    this.apiService.postData(diagnostic).subscribe((response:MyResponse) =>{
      console.log(response);
      if(response.status_code === 200){
        this.respuesta = response.message;
        console.log(this.respuesta);
        
        this.diagnostico = response.data[0]["Enfermedad"];
        console.log(this.diagnostico);
      }
    })
  }

}
