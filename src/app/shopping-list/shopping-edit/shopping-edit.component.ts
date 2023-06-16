import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingList } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('nameInput') inputRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  ingredients;
  constructor(private slService: ShoppingList) {}

  ngOnInit(): void {}
  onAdditem() {
    const ingredientAmount = this.amountRef.nativeElement.value;
    const ingredientName = this.inputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
