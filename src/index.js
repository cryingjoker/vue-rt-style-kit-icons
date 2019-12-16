import Vue from "vue";
import Global from "./variables.json";
import Project from "../package.json";
import * as svgicon from 'vue-svgicon';
import styles from "./css/vue-rt-style-kit-icons.styl";
import {
  Logo,
  LogoCoBranding,
  Icon,
  ValidationIcon,
} from "./components";

import 'element-closest-polyfill';
import 'nodelist-foreach-polyfill';
import 'element-remove';
const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyleKitIcons) {

      Vue.use(svgicon);
      Vue.component(Icon.name, Icon);
      Vue.component(Logo.name,Logo)
      Vue.component(LogoCoBranding.name,LogoCoBranding)
      Vue.component(ValidationIcon.name, ValidationIcon.component);

      Vue.RtStyleKitIcons = true;
      Vue.config.test = true;
    }
  }
};

/**
 * Глобальные настройки библиотеки
 * -Для добавления своих настроек, создайте объект
 * с названием из Global.globalSettingsKey и положите перед подключением либы
 */
const settingsKey = Global.globalSettingsKey;
const version = Project.version;
if (settingsKey) {
  if (!window[settingsKey]) window[settingsKey] = {}
  if (!window[settingsKey].segment) window[settingsKey].segment = Global.defaultSegment
  window[settingsKey].version = version;
}

// @Deprecated
window.RTK_STYLE_KIT_ICON_VER = version;
VueRtStyle.version = version;

export default VueRtStyle;
