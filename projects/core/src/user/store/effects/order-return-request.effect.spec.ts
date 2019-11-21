import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import {
  ReturnRequestEntryInputList,
  ReturnRequest,
  ReturnRequestList,
} from '../../../model/order.model';
import { UserOrderAdapter } from '../../connectors/order/user-order.adapter';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as fromOrderReturnRequestEffect from './order-return-request.effect';

const mockReturnRequest: ReturnRequest = { rma: '000000' };

const returnRequestInput: ReturnRequestEntryInputList = {
  returnRequestEntryInputs: [{ orderEntryNumber: 0, quantity: 1 }],
};

const mockReturnRequestList: ReturnRequestList = {
  returnRequests: [{ rma: '01' }, { rma: '02' }],
  pagination: {
    totalPages: 13,
  },
  sorts: [{ selected: true }, { selected: false }],
};

describe('Order Return Request effect', () => {
  let orderReturnRequestEffect: fromOrderReturnRequestEffect.OrderReturnRequestEffect;
  let orderConnector: UserOrderConnector;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        fromOrderReturnRequestEffect.OrderReturnRequestEffect,
        { provide: UserOrderAdapter, useValue: {} },
        provideMockActions(() => actions$),
      ],
    });

    actions$ = TestBed.get(Actions as Type<Actions>);
    orderReturnRequestEffect = TestBed.get(
      fromOrderReturnRequestEffect.OrderReturnRequestEffect as Type<
        fromOrderReturnRequestEffect.OrderReturnRequestEffect
      >
    );
    orderConnector = TestBed.get(UserOrderConnector as Type<
      UserOrderConnector
    >);
  });

  describe('createReturnRequest$', () => {
    it('should create order return request', () => {
      spyOn(orderConnector, 'return').and.returnValue(of(mockReturnRequest));
      const action = new UserActions.CreateOrderReturnRequest({
        userId: 'userId',
        orderCode: 'orderCode',
        returnRequestInput,
      });

      const completion = new UserActions.CreateOrderReturnRequestSuccess(
        mockReturnRequest
      );

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(orderReturnRequestEffect.createReturnRequest$).toBeObservable(
        expected
      );
    });

    it('should handle failures for load order details', () => {
      spyOn(orderConnector, 'return').and.returnValue(throwError('Error'));
      const action = new UserActions.CreateOrderReturnRequest({
        userId: 'userId',
        orderCode: 'orderCode',
        returnRequestInput,
      });

      const completion = new UserActions.CreateOrderReturnRequestFail('Error');

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(orderReturnRequestEffect.createReturnRequest$).toBeObservable(
        expected
      );
    });
  });

  describe('loadReturnRequestList$', () => {
    it('should load return request list', () => {
      spyOn(orderConnector, 'getReturnRequestList').and.returnValue(
        of(mockReturnRequestList)
      );
      const action = new UserActions.LoadOrderReturnRequestList({
        userId: 'test@sap.com',
        pageSize: 5,
      });

      const completion = new UserActions.LoadOrderReturnRequestListSuccess(
        mockReturnRequestList
      );

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(orderReturnRequestEffect.loadReturnRequestList$).toBeObservable(
        expected
      );
    });

    it('should handle failures for load return request list', () => {
      spyOn(orderConnector, 'getReturnRequestList').and.returnValue(
        throwError('Error')
      );
      const action = new UserActions.LoadOrderReturnRequestList({
        userId: 'test@sap.com',
        pageSize: 5,
      });

      const completion = new UserActions.LoadOrderReturnRequestListFail(
        'Error'
      );

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(orderReturnRequestEffect.loadReturnRequestList$).toBeObservable(
        expected
      );
    });
  });
});