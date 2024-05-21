import { Express } from 'express';

import { CS571Route } from "@cs571/su24-api-framework";
import WeeklyMenu from '../model/weekly-feature';

export class CS571AllFeaturedItemsRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/rest/su24/hw3/all-featured-items';

    private readonly saleItems: WeeklyMenu;

    public constructor(saleItems: WeeklyMenu) {
        this.saleItems = saleItems;
    }

    public addRoute(app: Express): void {
        app.get(CS571AllFeaturedItemsRoute.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'public, max-age=60').send(this.saleItems);
        })
    }

    public getRouteName(): string {
        return CS571AllFeaturedItemsRoute.ROUTE_NAME;
    }
}