"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var flux_lite_1 = require('flux-lite');
var action_1 = require('../stores/action');
var ScrollPositionStore = (function (_super) {
    __extends(ScrollPositionStore, _super);
    function ScrollPositionStore(dispatcher) {
        _super.call(this, dispatcher);
    }
    ScrollPositionStore.prototype.getCurrentIndex = function () {
        var state = this.getState();
        if (state === null) {
            return '#';
        }
        var cardName = this.getState().toLowerCase();
        if (cardName >= 'a' && cardName <= 'z') {
            return cardName[0];
        }
        return '#';
    };
    ScrollPositionStore.prototype.getInitialState = function () {
        return null;
    };
    ScrollPositionStore.prototype.reduce = function (state, action) {
        if (action.type === action_1.TYPE_CARD_SCROLL_POSITION) {
            return action['cardName'];
        }
        return state;
    };
    ScrollPositionStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [flux_lite_1.Dispatcher])
    ], ScrollPositionStore);
    return ScrollPositionStore;
}(flux_lite_1.FluxReduceStore));
exports.ScrollPositionStore = ScrollPositionStore;
