import {describe, it, beforeEach} from "mocha";
import Vuetify from 'vuetify'
import {shallowMount, createLocalVue} from '@vue/test-utils';
import App from '../../src/App.vue'; // TODO: make paths absolute

const localVue = createLocalVue();

describe('App.vue', () => {

  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    localVue.use(Vuetify)
  });

  it('mounts with store', async () => {
    shallowMount(App, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          state: {}
        }
      }
    });
  })
});
