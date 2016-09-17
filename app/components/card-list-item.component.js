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
var core_1 = require('@angular/core');
var card_1 = require('../model/card');
var selected_card_service_1 = require('../services/selected-card.service');
var CardListItemComponent = (function () {
    function CardListItemComponent(selectedCardService) {
        this.selectedCardService = selectedCardService;
    }
    Object.defineProperty(CardListItemComponent.prototype, "isSelected", {
        get: function () {
            return this.selectedCardService.isSelected(this.card);
        },
        enumerable: true,
        configurable: true
    });
    CardListItemComponent.prototype.selectCard = function () {
        this.selectedCardService.selectCard(this.card);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', card_1.Card)
    ], CardListItemComponent.prototype, "card", void 0);
    CardListItemComponent = __decorate([
        core_1.Component({
            selector: 'card-list-item',
            template: "\n      <card-expanded *ngIf=\"isSelected\" [card]=\"card\"></card-expanded>\n      <card-collapsed *ngIf=\"!isSelected\" [card]=\"card\" (click)=\"selectCard()\">\n      </card-collapsed>"
        }), 
        __metadata('design:paramtypes', [selected_card_service_1.SelectedCardService])
    ], CardListItemComponent);
    return CardListItemComponent;
}());
exports.CardListItemComponent = CardListItemComponent;
