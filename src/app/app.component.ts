import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material-module';
import { ProductionService, Production } from './services/production.service';
import { isAwaitKeyword } from 'typescript';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ProductionService
  ]
})
export class AppComponent implements OnInit {
  title = 'tempAngular';
  foo: string = "";
  bar: Production[] = [];

  constructor(private productionService: ProductionService, private ch: ChangeDetectorRef) { }

  async ngOnInit() {
    this.bar = await this.productionService.getAllProductions();
    this.foo = (await this.productionService.getProductionById(0)).title;
  }
}
