import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { SeedsComponent } from './products/seeds/seeds.component';
import { PesticidesComponent } from './products/pesticides/pesticides.component';
import { FertilizersComponent } from './products/fertilizers/fertilizers.component';
import { PumpsComponent } from './products/pumps/pumps.component';
import { MotorsComponent } from './products/motors/motors.component';
import { HarvestingmachineryComponent } from './products/harvestingmachinery/harvestingmachinery.component';
import { FooterComponent } from './footer/footer.component';
import { SoiltestComponent } from './soiltest/soiltest.component';
import { CottonComponent } from './cotton/cotton.component';
import { MirchiComponent } from './mirchi/mirchi.component';
import { CornComponent } from './corn/corn.component';
import { TurmaricComponent } from './turmaric/turmaric.component';
import { RiceComponent } from './rice/rice.component';
import { PowderpesticidesComponent } from './powderpesticides/powderpesticides.component';
import { LiquidpesticidesComponent } from './liquidpesticides/liquidpesticides.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    DetailsComponent,
    ContactusComponent,
    LoginComponent,
    LogoComponent,
    SeedsComponent,
    PesticidesComponent,
    FertilizersComponent,
    PumpsComponent,
    MotorsComponent,
    HarvestingmachineryComponent,
    FooterComponent,
    SoiltestComponent,
    CottonComponent,
    MirchiComponent,
    CornComponent,
    TurmaricComponent,
    RiceComponent,
    PowderpesticidesComponent,
    LiquidpesticidesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
