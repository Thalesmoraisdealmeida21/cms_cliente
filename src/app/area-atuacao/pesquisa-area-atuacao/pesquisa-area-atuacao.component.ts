import { Component, OnInit } from '@angular/core';
import { AreaAtuacaoServiceService } from '../../services/areaAtuacao/area-atuacao-service.service';
import { AreaAtuacao } from '../../interfaces/area-atuacao';
import PNotify from '../../../../node_modules/pnotify/dist/es/PNotify'

@Component({
  selector: 'app-pesquisa-area-atuacao',
  templateUrl: './pesquisa-area-atuacao.component.html',
  styleUrls: ['./pesquisa-area-atuacao.component.css']
})
export class PesquisaAreaAtuacaoComponent implements OnInit {

  constructor(private AreaAtuacaoService: AreaAtuacaoServiceService) { }

  areas: AreaAtuacao[]
  checkLimitArea: boolean
  ngOnInit(): void {
    this.getAllAreas();
  }




  getAllAreas(){
      this.AreaAtuacaoService.getAllAreas().subscribe((areas: AreaAtuacao[])=> {
        this.areas = areas
        if(this.areas.length >= 6){
          this.checkLimitArea = true
        } else {
          this.checkLimitArea = false
        }
      })
  }

  deleteArea(id){
      this.AreaAtuacaoService.deleteArea(id).subscribe((rowsAffected)=>{
            if(rowsAffected > 0){
              this.getAllAreas();
              PNotify.success({
                text: "Registro deletado com sucesso"
              })
            }
      })

  }

  

}
