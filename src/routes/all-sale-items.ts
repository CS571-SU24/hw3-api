import { Express } from 'express';

import { CS571Route } from "@cs571/su24-api-framework/src/interfaces/route";
import { SaleItem } from '../model/sale-item';
import { CS571FeaturedSaleItemMapper } from '../model/services/feature-mapper';

export class CS571AllSaleItemsRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/rest/su24/hw3/all-sale-items';

    private readonly saleItems: SaleItem[];
    private readonly featureMapper: CS571FeaturedSaleItemMapper;

    public constructor(saleItems: SaleItem[], featureMapper: CS571FeaturedSaleItemMapper) {
        this.saleItems = [...saleItems];
        this.featureMapper = featureMapper;
    }

    public addRoute(app: Express): void {
        app.get(CS571AllSaleItemsRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send([...this.saleItems, { ...this.featureMapper.getFeaturedSaleItem(), featured: true }]);
        })
    }

    public getRouteName(): string {
        return CS571AllSaleItemsRoute.ROUTE_NAME;
    }
}