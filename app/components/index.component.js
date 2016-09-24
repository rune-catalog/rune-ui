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
var flux_lite_1 = require('flux-lite');
var action_1 = require('../stores/action');
var core_1 = require('@angular/core');
var IndexComponent = (function () {
    function IndexComponent(dispatcher) {
        this.dispatcher = dispatcher;
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }
    IndexComponent.prototype.onClick = function (letter) {
        this.dispatcher.dispatch({
            type: action_1.TYPE_CARD_SCROLL_POSITION,
            cardName: letter
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], IndexComponent.prototype, "index", void 0);
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'rune-index',
            template: "\n    <ol>\n      <li\n        *ngFor=\"let letter of letters\"\n        [ngClass]=\"{ active: letter === index }\"\n        (click)=\"onClick(letter)\">{{ letter }}</li>\n    </ol>"
        }), 
        __metadata('design:paramtypes', [flux_lite_1.Dispatcher])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
