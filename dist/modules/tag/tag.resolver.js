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
exports.TagResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const role_decorators_1 = require("../../common/decorators/role.decorators");
const at_guard_1 = require("../../common/guard/at.guard");
const role_guard_1 = require("../../common/guard/role.guard");
const enum_1 = require("../../constants/enum");
const common_dto_1 = require("../common/dto/common.dto");
const create_tag_input_1 = require("./dto/create-tag.input");
const tag_entity_1 = require("./entities/tag.entity");
const tag_service_1 = require("./tag.service");
let TagResolver = class TagResolver {
    constructor(tagService) {
        this.tagService = tagService;
    }
    createTag(createTagInput) {
        return this.tagService.create(createTagInput);
    }
    updateTag(tag_id, input) {
        return this.tagService.update(tag_id, input);
    }
    deleteTag(tag_id) {
        return this.tagService.delete(tag_id);
    }
    getAllTag(pagination, filter) {
        return this.tagService.findAll(pagination, filter);
    }
    async createMultiTag() {
        await Promise.all([
            this.tagService.createTagPassion(),
            this.tagService.createTagDiet(),
            this.tagService.createTagEducation(),
            this.tagService.createTagPersonality(),
            this.tagService.createTagZodiac(),
            this.tagService.createTagPet(),
            this.tagService.createTagSmokeQuestion(),
        ]);
        return true;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(at_guard_1.AtGuard, role_guard_1.RolesGuard),
    (0, role_decorators_1.hasRoles)(enum_1.RoleEnum.ADMIN),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_input_1.CreateTagInput]),
    __metadata("design:returntype", void 0)
], TagResolver.prototype, "createTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(at_guard_1.AtGuard, role_guard_1.RolesGuard),
    (0, role_decorators_1.hasRoles)(enum_1.RoleEnum.ADMIN),
    __param(0, (0, graphql_1.Args)('tag_id', { type: () => graphql_scalars_1.GraphQLObjectID })),
    __param(1, (0, graphql_1.Args)('input', { type: () => create_tag_input_1.UpdateTagInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_tag_input_1.UpdateTagInput]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "updateTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(at_guard_1.AtGuard, role_guard_1.RolesGuard),
    (0, role_decorators_1.hasRoles)(enum_1.RoleEnum.ADMIN),
    __param(0, (0, graphql_1.Args)('tag_id', { type: () => graphql_scalars_1.GraphQLObjectID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "deleteTag", null);
__decorate([
    (0, graphql_1.Query)(() => tag_entity_1.TagResult),
    __param(0, (0, graphql_1.Args)('pagination', { type: () => common_dto_1.PaginationInput, nullable: true })),
    __param(1, (0, graphql_1.Args)('filter', { type: () => create_tag_input_1.FilterGetAllTag, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.PaginationInput,
        create_tag_input_1.FilterGetAllTag]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "getAllTag", null);
__decorate([
    (0, graphql_1.Query)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "createMultiTag", null);
TagResolver = __decorate([
    (0, graphql_1.Resolver)(() => tag_entity_1.Tag),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagResolver);
exports.TagResolver = TagResolver;
//# sourceMappingURL=tag.resolver.js.map