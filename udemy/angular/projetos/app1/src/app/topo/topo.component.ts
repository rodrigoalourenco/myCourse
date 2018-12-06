import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl : './topo.component.html', //recurso externo
    //template: '<p>Esse eh o componente topo</p>' //recurso inline
    //styles: ['.exemplo{color:red}']
    styleUrls: ['./topo.component.css']
})

export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}