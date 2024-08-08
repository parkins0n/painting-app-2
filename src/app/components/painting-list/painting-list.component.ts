import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaintingService } from '../../services/painting.service';
import { Painting } from '../../models/painting.model';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, PipesModule]
})
export class PaintingListComponent {
  paintings: Painting[] = [];
  selectedPainting?: Painting;

  constructor(private paintingService: PaintingService) {}

  ngOnInit(): void {
    this.paintingService.getPaintings().subscribe(paintings => this.paintings = paintings);
  }

  selectPainting(painting: Painting): void {
    this.selectedPainting = painting;
  }

  clearSelection(): void {
    this.selectedPainting = undefined;
  }
}
