import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  title = 'angular-src';
  imageFile: any;
  imgBase64: string;
  imageSource: any = '';

  fileChangeEvent(event: any) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this.handleFile.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleFile(event: any) {
    var binaryString = event.target.result;
    this.imgBase64 = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
