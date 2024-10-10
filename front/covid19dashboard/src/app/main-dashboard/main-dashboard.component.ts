import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent {
  public showGraph = true;
  public loading = false;

  constructor(public apiService: ApiService) {}

  public reloadGraph() {
    this.showGraph = false;
    setTimeout(() => (this.showGraph = true), 0);
  }

  public sendFile(event: any): void {
    const file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.loading = true;
    this.apiService.sendData(formData).subscribe(
      (response: { message: any }) => {
        window.alert(response.message);
        this.loading = false;
        this.reloadGraph();
      },
      (error: any) => {
        console.error('Erro ao enviar o arquivo', error);
        this.loading = false;
      }
    );
  }
}
