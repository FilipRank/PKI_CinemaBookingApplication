import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCardListComponent } from './production-card-list.component';

describe('ProductionCardListComponent', () => {
  let component: ProductionCardListComponent;
  let fixture: ComponentFixture<ProductionCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
