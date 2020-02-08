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
    var notice = PNotify.notice({
      title: 'Confirmation Needed',
      text: 'Are you sure?',
      icon: 'fas fa-question-circle',
      hide: false,
      stack: {
        'dir1': 'down',
        'modal': true,
        'firstpos1': 25
      },
      modules: {
        Confirm: {
          confirm: true
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        },
      }
    });
    notice.on('pnotify.confirm', function() {
      alert('Ok, cool.');
    });
    notice.on('pnotify.cancel', function() {
      alert('Oh ok. Chicken, I see.');
    });
  }


}
