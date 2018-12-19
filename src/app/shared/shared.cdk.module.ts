import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
    imports: [
        LayoutModule,
        OverlayModule,
        PortalModule
    ], // 先import
    exports: [
        LayoutModule,
        OverlayModule,
        PortalModule
    ] // 在export
})
export class SharedCdkModule {

    constructor() { }
}
