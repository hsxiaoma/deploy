import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import projects from './modules/projects';
import project from './modules/project';
import diff from './modules/diff';
import codeMark from './modules/code_mark';
import deploy from './modules/deploy';
import log from './modules/log';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    projects,
    project,
    diff,
    codeMark,
    deploy,
    log
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});