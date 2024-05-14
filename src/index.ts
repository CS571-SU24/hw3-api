import fs from 'fs'

import express, { Express } from 'express';
import cookies from "cookie-parser";

import { CS571DefaultSecretConfig, CS571Initializer } from '@cs571/su24-api-framework'
import { CS571AllSaleItemsRoute } from './routes/all-sale-items';
import { CS571FeaturedSaleItemRoute } from './routes/featured-sale-item';
import { CS571FeaturedSaleItemMapper } from './model/services/feature-mapper';
import { SaleItem } from './model/sale-item';

console.log("Welcome to HW3!");

const app: Express = express();

app.use(cookies());

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

const saleItems = JSON.parse(fs.readFileSync("includes/sale-items.json").toString()).map((good: SaleItem) => { return {...good, featured: false}})
const featuredSaleItems = JSON.parse(fs.readFileSync("includes/featured-sale-items.json").toString())

const featureMapper = new CS571FeaturedSaleItemMapper(featuredSaleItems);

appBundle.router.addRoutes([
  new CS571AllSaleItemsRoute(saleItems, featureMapper),
  new CS571FeaturedSaleItemRoute(featureMapper)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
