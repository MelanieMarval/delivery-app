import { Injectable } from '@angular/core';
import { Place } from '../core/api/places/place';
import { User } from '../core/api/users/user';
import { Claim } from '../core/api/claim/claim';


@Injectable({
    providedIn: 'root'
})
export class AdminIntentProvider {

    private _placeToView: Place;
    private _placeToAccept: Place;
    private _placeToEdit: Place;
    private _placeEdited: Place;
    private _returnPlaceToAccept: Place;
    private _claimToVerified: Claim;
    private _returnClaimToVerified: Claim;
    private _userToEdit: User;
    private _userToView: User;
    private _showNotification: boolean;
    private _needToUpdate = false;

    // Place
    get placeToView(): Place {
        return this._placeToView;
    }

    set placeToView(value: Place) {
        this._placeToView = value;
    }

    get placeToEdit(): Place {
        return this._placeToEdit;
    }

    set placeToEdit(value: Place) {
        this._placeToEdit = value;
    }

    get placeEdited(): Place {
        return this._placeEdited;
    }

    set placeEdited(value: Place) {
        this._placeEdited = value;
    }

    get placeToAccept(): Place {
        return this._placeToAccept;
    }

    set placeToAccept(value: Place) {
        this._placeToAccept = value;
    }

    get returnPlaceToAccept(): Place {
        return this._returnPlaceToAccept;
    }

    set returnPlaceToAccept(value: Place) {
        this._returnPlaceToAccept = value;
    }

    // Claim
    get claimToVerified(): Claim {
        return this._claimToVerified;
    }

    set claimToVerified(value: Claim) {
        this._claimToVerified = value;
    }

    get returnClaimToVerified(): Claim {
        return this._returnClaimToVerified;
    }

    set returnClaimToVerified(value: Claim) {
        this._returnClaimToVerified = value;
    }

    // User
    get userToView(): User {
        return this._userToView;
    }

    set userToView(value: User) {
        this._userToView = value;
    }

    get userToEdit(): User {
        return this._userToEdit;
    }

    set userToEdit(value: User) {
        this._userToEdit = value;
    }

    // For Actions
    get showNotification(): boolean {
        return this._showNotification;
    }

    set showNotification(value: boolean) {
        this._showNotification = value;
    }

    get needToUpdate(): boolean {
        return this._needToUpdate;
    }

    set needToUpdate(value: boolean) {
        this._needToUpdate = value;
    }
}
