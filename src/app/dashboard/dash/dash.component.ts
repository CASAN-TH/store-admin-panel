import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MiniCardService, StoreSummary } from '../mini-card/mini-card.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {

  miniCardData: StoreSummary[];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        // return [
        //   { title: 'Card 1', cols: 1, rows: 1 },
        //   { title: 'Card 2', cols: 1, rows: 1 },
        //   { title: 'Card 3', cols: 1, rows: 1 },
        //   { title: 'Card 4', cols: 1, rows: 1 }
        // ];
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 3 },
        };
      }

      // return [
      //   { title: 'Card 1', cols: 2, rows: 1 },
      //   { title: 'Card 2', cols: 1, rows: 1 },
      //   { title: 'Card 3', cols: 1, rows: 2 },
      //   { title: 'Card 4', cols: 1, rows: 1 }
      // ];
      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private summaryService: MiniCardService) { }

  ngOnInit() {
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
  }

}
