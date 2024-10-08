import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-botao-upload',
  templateUrl: './botao-upload.component.html',
  styleUrls: ['./botao-upload.component.css']
})
export class BotaoUploadComponent implements OnInit {
  public arquivo: any;

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  public sendFile(event: any): void {
    const file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.apiService.sendData(formData).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
