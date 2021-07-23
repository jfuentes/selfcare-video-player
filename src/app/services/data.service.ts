import { Injectable } from '@angular/core';

export interface Video {
  title: string;
  url: string;
  thumb: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private videos: Video[] = [
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/cintura.mp4",
      subtitle: "Cintura",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/cintura.png",
      title: "Cintura"
    },
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/glucosa_ayuno.mp4",
      subtitle: "Glucosa en ayuno",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/glucosa_ayuno.png",
      title: "Glucosa en ayuno"
    },
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/glucosa_ingesta.mp4",
      subtitle: "Glucosa post ingesta",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/glucosa_ingesta.png",
      title: "Glucosa post ingesta"
    },
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/medir.mp4",
      subtitle: "Estatura",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/medir.png",
      title: "Estatura"
    },
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/peso.mp4",
      subtitle: "Peso",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/peso.png",
      title: "Peso"
    },
    {
      url: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/presion_arterial.mp4",
      subtitle: "Presión Arterial",
      thumb: "http://www.face.ubiobio.cl/~jfuentes/apps/selfcare/presion_arterial.png",
      title: "Presión Arterial"
    }
  ];

  constructor() { }

  public getVidoes(): Video[] {
    return this.videos;
  }

}
