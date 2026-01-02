import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  collagename = 'Amal Jyothi'
  person = {
    name: 'Niya Tom',
    email: 'niyatom2028@cs.ajce,in',
    contact: '+91 9876543210',

  }
  protected readonly title = signal('project');
}
