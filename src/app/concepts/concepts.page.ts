import { Component } from "@angular/core";
import {
  IonModal,
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  SearchbarInputEventDetail,
} from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { IonSearchbarCustomEvent } from "@ionic/core";

@Component({
  selector: "app-concepts",
  templateUrl: "./concepts.page.html",
  styleUrls: ["./concepts.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonModal,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
  ],
})
export class ConceptsPage {

  isModalOpen: boolean = false;
  concepts: Array<Concept> = [];
  results: Array<Concept> = [...this.concepts];
  data: Concept | undefined;

  constructor(private http: HttpClient) {
    this.http
      .get("./assets/concepts.json")
      .subscribe((response) => {
        this.concepts = response as Array<Concept>
        this.results = this.concepts;
      });
  }

  setOpen(isOpen: boolean, data: Concept | undefined) {
    this.data = data;
    this.isModalOpen = isOpen;
  }
  
  searchbar(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.concepts.filter((concept) => ((concept.title? concept.title: '') + (concept.subtitle? concept.subtitle: '')).toLowerCase().indexOf(query) > -1);
    throw new Error('Method not implemented.');
  }
}

export interface Concept {
  title: string | undefined | null;
  subtitle: string | undefined | null;
  description: string | undefined | null;
  example: string | undefined | null;
}
