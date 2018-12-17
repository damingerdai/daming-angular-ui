import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';

export const CN_FORMATS = {
    parse: {
      dateInput: 'YYYY/MM/DD'
    },
    display: {
      dateInput: 'YYYY/MM/DD',
      monthYearLabel: 'YYYY MMM',
      dateA11yLabel: 'YYYY/MM/DD',
      monthYearA11yLabel: 'YYYY MMM'
    }
  };

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatStepperModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
        MatDividerModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSelectModule,
    ], // 先import
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatStepperModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
        MatDividerModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSelectModule,
    ], // 在export
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
        { provide: MAT_DATE_FORMATS, useValue: CN_FORMATS }
      ]
})
export class SharedMaterialModule {

    constructor() { }
}
