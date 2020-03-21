import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic' 
import { ActivatedRoute, Router } from '@angular/router';
import { AreaAtuacaoServiceService } from '../../services/areaAtuacao/area-atuacao-service.service';
import PNotify from './../../../../node_modules/pnotify/dist/es/PNotify'
import { environment } from '../../../environments/environment';
import { AreaAtuacao } from '../../interfaces/area-atuacao';
import { FileArea } from '../../interfaces/file-area';

@Component({
  selector: 'app-visualiza-area-atuacao',
  templateUrl: './visualiza-area-atuacao.component.html',
  styleUrls: ['./visualiza-area-atuacao.component.css']
})
export class VisualizaAreaAtuacaoComponent implements OnInit {
  
  Editor = ClassicEditor
  area: AreaAtuacao
  iconeAreaAtual = ""
  showImage
  constructor(private ActivatedRoute: ActivatedRoute, private AreasAtuacaoService: AreaAtuacaoServiceService, private router: Router) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((params)=>{
      this.AreasAtuacaoService.getById(params['id']).subscribe((dataArea: AreaAtuacao)=>{
          this.area = dataArea

      })  
      
    })

   
  }


  update(id){
      this.AreasAtuacaoService.updateById(id, this.area).subscribe((ret)=>{
        PNotify.success({
          text: "Registro alterado com sucesso"
        })

        this.router.navigateByUrl("/area-atuacao/pesquisa")
      })

  }

  uploadImage(event){
      const iconeArea = event.target.files[0];

      const formData = new FormData();
      formData.append('icone', iconeArea);

      this.AreasAtuacaoService.uploadImage(formData).subscribe((ret: FileArea)=>{
        this.area.icone = environment.api + "/" + ret.pathImg
        console.log("icone" + this.area.icone)
  
      })


      

      
  }



}
