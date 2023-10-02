import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { esbuild } from '@packages/is-esbuild';
import { vite } from '@packages/is-vite';
import { tsc } from '@packages/is-tsc';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'test-lib-connection-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  esbuild = esbuild();
  vite= vite();
  tsc= tsc();
}
