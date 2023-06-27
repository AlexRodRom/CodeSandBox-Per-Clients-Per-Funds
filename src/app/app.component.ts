import { Component } from "@angular/core";
import { SeriesLabels } from "@progress/kendo-angular-charts";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-legend position="bottom" orientation="horizontal">
      </kendo-chart-legend>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="categories">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>

      <kendo-chart-series>
        <kendo-chart-series-item
          name="Fund A"
          type="column"
          [data]="[1056, 2430, 3099, 4640]"
          color="#ffbc63"
          [labels]="seriesLabels2022"
        >
        </kendo-chart-series-item>
        <kendo-chart-series-item
          name="Fund B"
          type="column"
          [data]="[7920, 3980, 5120, 1245]"
          color="#b7cff7"
          [labels]="seriesLabels2023"
        >
        </kendo-chart-series-item>
        <kendo-chart-series-item
          name="Fund E"
          type="column"
          [data]="[13820, 5398, 3581, 2405]"
          [labels]="seriesLabels2023"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public categories: string[] = ["Apr", "May", "Jun", "Jul"];

  public seriesLabels2022: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    //font: "bold 16px Arial, sans-serif",
    color: "#ffbc63"
  };

  public seriesLabels2023: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    //font: "bold 16px Arial, sans-serif",
    color: "blue"
  };
}
