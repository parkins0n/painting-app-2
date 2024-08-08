import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearFormatPipe } from './year-format/year-format.pipe';
import { SizeFormatPipe } from './size-format/size-format.pipe';
import { AuthorFormatPipe } from './author-format/author-format.pipe';

@NgModule({
  declarations: [YearFormatPipe, SizeFormatPipe, AuthorFormatPipe],
  imports: [CommonModule],
  exports: [YearFormatPipe, SizeFormatPipe, AuthorFormatPipe]
})
export class PipesModule {}
