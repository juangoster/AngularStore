import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesComponentComponent } from './components/imagenes-component/imagenes-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InputComponent } from './components/input/input.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighLightDirective } from './directives/high-light.directive';
import { SwiperModule } from 'swiper/angular';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FilesComponent } from './components/files/files.component';



@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponentComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    ProductoComponent,
    NavbarComponent,
    ProductsComponent,
    ImgComponent,
    ReversePipe,
    HighLightDirective,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
