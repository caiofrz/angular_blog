import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DATA } from "../../data_mock/dataMock";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null):void {
    const result = DATA.filter((article) => article.id == id)[0];

    if (!result) {
      throw new Error("Não foi possivel carregar o conteudo!");
    }

    this.title = result.title;
    this.image = result.image;
    this.description = result.description;
  }
}
