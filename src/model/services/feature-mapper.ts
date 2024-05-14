import { SaleItem } from "../sale-item";

export class CS571FeaturedSaleItemMapper {
    
    private readonly featureMapper: any;

    public constructor(featureMapper: any) {
        this.featureMapper = featureMapper;
    }

    public getFeaturedSaleItem(): SaleItem {
        return this.featureMapper[this.getDayName()] as SaleItem
    }

    // https://stackoverflow.com/questions/57187691/javascript-how-to-verify-day-by-getday-when-using-timezone
    private getDayName(): string {
        return new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            weekday: 'long'
        })
    }
}