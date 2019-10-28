import { StateEntityActions } from '../../../../state/utils/index';
import { CONFIGURATION_UI_DATA } from '../configuration-state';
import * as ConfiguratorUiActions from './configurator-ui.action';

const PRODUCT_CODE = 'CONF_LAPTOP';
const GROUP_ID = '15468-5464-9852-54682';
const PAYLOAD = {
  currentGroup: GROUP_ID,
};

describe('ConfiguratorUiActions', () => {
  describe('SetUiState Actions', () => {
    it('Should create the action', () => {
      const action = new ConfiguratorUiActions.SetUiState(
        PRODUCT_CODE,
        PAYLOAD
      );
      expect({ ...action }).toEqual({
        type: ConfiguratorUiActions.SET_UI_STATE,
        payload: PAYLOAD,
        meta: StateEntityActions.entityMeta(
          CONFIGURATION_UI_DATA,
          PRODUCT_CODE
        ),
      });
    });

    describe('CreateUiState Action', () => {
      it('Should create the action', () => {
        const action = new ConfiguratorUiActions.CreateUiState(PRODUCT_CODE);
        expect({ ...action }).toEqual({
          type: ConfiguratorUiActions.CREATE_UI_STATE,
          meta: StateEntityActions.entityMeta(
            CONFIGURATION_UI_DATA,
            PRODUCT_CODE
          ),
        });
      });
    });

    describe('RemoveUiState Action', () => {
      it('Should create the action', () => {
        const action = new ConfiguratorUiActions.RemoveUiState(PRODUCT_CODE);
        expect({ ...action }).toEqual({
          type: ConfiguratorUiActions.REMOVE_UI_STATE,
          meta: StateEntityActions.entityRemoveMeta(
            CONFIGURATION_UI_DATA,
            PRODUCT_CODE
          ),
        });
      });
    });
  });
});