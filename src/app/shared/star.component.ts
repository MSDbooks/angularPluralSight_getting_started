import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() 
    public rating: number;

    public starWidth: number;

    @Output()
    public ratingClicked: EventEmitter<String> = new EventEmitter<String>();

    public ngOnChanges(): void{
        this.starWidth = this.rating * 75 / 5;

    }

    public onCLick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }

}