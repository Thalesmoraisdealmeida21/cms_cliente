import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../interfaces/contato';
import { MatSliderModule } from '@angular/material/slider';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import PNotify from 'pnotify/dist/es/PNotify';
@Component({
  selector: 'app-listacontatos',
  templateUrl: './listacontatos.component.html',
  styleUrls: ['./listacontatos.component.css']
})
export class ListacontatosComponent implements OnInit {

  constructor(
    private ContatoService: ContatoService,
    private modalService: NgbModal
    ) { }

    closeResult: string
  contatos: Contato[]
  contatoSelected: Contato
  
  ngOnInit() {
    this.getAllContatos();
  }


  getAllContatos(){
    this.ContatoService.getAllContatos().subscribe((contatos: Contato[])=>{
        this.contatos = contatos;
    })
  }



  openVisMsg(content, id){
    console.log(content)
     this.modalService.open(content)
     this.getContatoById(id)
     console.log(this.contatoSelected.nome)
  }

  getContatoById(id){
    this.ContatoService.getOneContact(id).subscribe((contact: Contato)=>{
        this.contatoSelected = contact;
    })
  }


  deleteContato(id){
    let confimation = confirm("Você tem certeza que deseja excluir ? Este registro não poderá ser recuperado.")

    if(confimation == true){
        this.ContatoService.deleteContact(id).subscribe((retorno)=>{
          if(retorno){  
                PNotify.success({
                  title: "Sistema",
                  text: "Contato excluído com sucesso"
                })

                this.getAllContatos();
          }
        }, (err)=>{
          if(err){
            PNotify.error({
              title: "Sistema",
              text: "Ocorreu um erro ao excluir o contato ):"
            });
          }
        })
    }
  }


}
