import { Express } from 'express';

import { CS571Route } from "@cs571/su24-api-framework/src/interfaces/route";
import { SaleItem } from '../model/sale-item';
import { CS571FeaturedSaleItemMapper } from '../model/services/feature-mapper';

export class CS571FeaturedSaleItemRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/rest/su24/hw3/featured-sale-item';

    private readonly featureMapper: CS571FeaturedSaleItemMapper;

    public constructor(featureMapper: CS571FeaturedSaleItemMapper) {
        this.featureMapper = featureMapper;
    }

    public addRoute(app: Express): void {
        app.get(CS571FeaturedSaleItemRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send(this.featureMapper.getFeaturedSaleItem());
        })
    }

    public getRouteName(): string {
        return CS571FeaturedSaleItemRoute.ROUTE_NAME;
    }


}