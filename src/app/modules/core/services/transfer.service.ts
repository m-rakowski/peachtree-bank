import { Injectable } from '@angular/core';
import { Transfer } from '../../../../mock-data/transfer.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TransferDto } from '../models/transfer';
import {MockedBackendService} from "./mocked-backend.service";
import {AccountAmountCurrency} from "../models/account-amount-currency";

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  transfers: Transfer[] = [];

  constructor(private httpClient: HttpClient,
              private mockedBackendService: MockedBackendService) {}

  getAll(): Observable<Transfer[]> {
    return this.mockedBackendService.getAllTransfers();
  }

  addTransfer(value: TransferDto): Observable<{ transfer: Transfer, account: AccountAmountCurrency }> {
    return this.mockedBackendService.postTransfer(value);
  }
}
