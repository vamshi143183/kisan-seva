import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CornComponent } from './corn/corn.component';
import { CottonComponent } from './cotton/cotton.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LiquidpesticidesComponent } from './liquidpesticides/liquidpesticides.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { MirchiComponent } from './mirchi/mirchi.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PowderpesticidesComponent } from './powderpesticides/powderpesticides.component';
import { FertilizersComponent } from './products/fertilizers/fertilizers.component';
import { HarvestingmachineryComponent } from './products/harvestingmachinery/harvestingmachinery.component';
import { MotorsComponent } from './products/motors/motors.component';
import { PesticidesComponent } from './products/pesticides/pesticides.component';
import { ProductsComponent } from './products/products.component';
import { PumpsComponent } from './products/pumps/pumps.component';
import { SeedsComponent } from './products/seeds/seeds.component';
import { RiceComponent } from './rice/rice.component';
import { SoiltestComponent } from './soiltest/soiltest.component';
import { TurmaricComponent } from './turmaric/turmaric.component';

const routes: Routes = [
  {path:'logo',component:LogoComponent},
  {path:'',redirectTo:'logo',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'soiltest',component:SoiltestComponent},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'products',component:ProductsComponent,children:[
  {path:'seeds',component:SeedsComponent,children:[
  {path:'rice',component:RiceComponent},
  {path:'cotton',component:CottonComponent},
  {path:'mirchi',component:MirchiComponent},
  {path:'corn',component:CornComponent},
  {path:'turmaric',component:TurmaricComponent}
  ]},
  {path:'pesticides',component:PesticidesComponent,children:[
  {path:'powderpesticides',component:PowderpesticidesComponent},
  {path:'liquidpesticides',component:LiquidpesticidesComponent}
  ]},
  {path:'fertilizers',component:FertilizersComponent},
  {path:'pumps',component:PumpsComponent},
  {path:'motors',component:MotorsComponent},
  {path:'harvestingmachinery',component:HarvestingmachineryComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
 
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
