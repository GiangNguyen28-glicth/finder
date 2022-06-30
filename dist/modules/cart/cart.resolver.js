"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entities_1 = require("../product/entities/product.entities");
const cart_service_1 = require("./cart.service");
let CartResolver = class CartResolver {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addItemToCart(productId, req, res) {
        return this.cartService.addItemToCart(req, res, productId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => [product_entities_1.Product]),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Context)('req')),
    __param(2, (0, graphql_1.Context)('res')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "addItemToCart", null);
CartResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartResolver);
exports.CartResolver = CartResolver;
//# sourceMappingURL=cart.resolver.js.map