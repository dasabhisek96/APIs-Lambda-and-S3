import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-upload-json',
  templateUrl: './upload-json.component.html',
  styleUrls: ['./upload-json.component.css']
})
export class UploadJsonComponent {
  jsonData: string = '';
  response: any;

  constructor(private apiService: ApiService) {}

  onUpload() {
    try {
      const jsonObject = JSON.parse(this.jsonData);
      this.apiService.uploadJson(jsonObject).subscribe(
        (res) => {
          this.response = res;
          console.log('Upload successful:', res);
        },
        (error) => {
          console.error('Error uploading JSON:', error);
        }
      );
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  }
}
