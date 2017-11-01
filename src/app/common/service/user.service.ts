import {Injectable} from '@angular/core';
import {Constant} from "../constant";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  get passport(): string {
    return this._passport;
  }

  set passport(value: string) {
    this._passport = value;
  }
  get businessCode(): string {
    return this._businessCode;
  }

  set businessCode(value: string) {
    this._businessCode = value;
  }

  get contactPerson(): string {
    return this._contactPerson;
  }

  set contactPerson(value: string) {
    this._contactPerson = value;
  }

  get organizationType(): string {
    return this._organizationType;
  }

  set organizationType(value: string) {
    this._organizationType = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get phonePostal(): string {
    return this._phonePostal;
  }

  set phonePostal(value: string) {
    this._phonePostal = value;
  }

  get profilePicture(): string {
    return this._profilePicture;
  }

  set profilePicture(value: string) {
    this._profilePicture = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get bankAccounts(): any[] {
    return this._bankAccounts;
  }

  set bankAccounts(value: any[]) {
    this._bankAccounts = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get userType(): string {
    return this._userType;
  }

  set userType(value: string) {
    this._userType = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _id: number = null;
  private _code: string= null;
  private _name: string = null;
  private _address: string = null;
  private _email: string = null;
  private _userType: string = null;
  private _status: string = null;
  private _passport: string = null;
  private _country: string = null;
  private _bankAccounts: any[] = [];
  private _businessCode: string = null;
  private _contactPerson: string = null;
  private _organizationType: string = null;
  private _phone: string = null;
  private _phonePostal: string = null;
  private _profilePicture: string = null;
  private _website: string = null;

  setProfile(profile) {
    this.id = profile.id;
    this.code = profile.code;
    this.name = profile.name;
    this.address = profile.address;
    this.email = profile.email;
    this.userType = profile.userType;
    this.status = profile.status;
    localStorage.setItem(Constant.key_local_status,this.status);
    this.passport = profile.passport;
    this.country = profile.country;
    this.bankAccounts = profile.bankAccounts;
    this.businessCode = profile.businessCode;
    this.contactPerson = profile.contactPerson;
    this.organizationType = profile.organizationType;
    this.phone = profile.phone;
    this.phonePostal = profile.phonePostal;
    this.profilePicture = profile.profilePicture;
    this.website = profile.website;
  }

  getProfile(): any {
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      address: this.address,
      email: this.email,
      userType: this.userType,
      status: this.status,
      passport : this.passport,
      country: this.country,
      bankAccounts: this.bankAccounts,
      businessCode: this.businessCode,
      contactPerson: this.contactPerson,
      organizationType: this.organizationType,
      phone: this.phone,
      phonePostal: this.phonePostal,
      profilePicture: this.profilePicture,
      website: this.website
    }
  }

  getProfileAPI(http:HttpClient,callBack) {
    http.get(Constant.api_user_profile)
      .subscribe((res:any)=>{
        if (res.status === Constant.success_code){
          this.setProfile(res.data);
        }
        callBack();
      },(error)=>{
        callBack(error);
      })
  }

  // authorizedFirebase(auth:AngularFireAuth) {
  //   return auth.auth.signInWithEmailAndPassword(Constant.account_firebase,Constant.password_firebase);
  // }
}
