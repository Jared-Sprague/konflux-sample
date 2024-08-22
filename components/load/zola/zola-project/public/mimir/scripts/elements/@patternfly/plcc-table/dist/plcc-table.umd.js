(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../../../@patternfly/pfelement/dist/pfelement.umd'), require('../../../@patternfly/pfe-progress-indicator/dist/pfe-progress-indicator.umd'), require('../../../@patternfly/pfe-datetime/dist/pfe-datetime.umd')) :
  typeof define === 'function' && define.amd ? define(['../../../@patternfly/pfelement/dist/pfelement.umd', '../../../@patternfly/pfe-progress-indicator/dist/pfe-progress-indicator.umd', '../../../@patternfly/pfe-datetime/dist/pfe-datetime.umd'], factory) :
  (global.PlccTable = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
   * PatternFly Elements: PlccTable 2.1.5
   * @license
   * Copyright 2020 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PlccTable = function (_PFElement) {
    inherits(PlccTable, _PFElement);
    createClass(PlccTable, [{
      key: "html",
      get: function get$$1() {
        return "<style>.product-lifecycle-info__table thead,.sr-only{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host{display:block}:host([hidden]){display:none}:host([loading]) article{display:none}article{display:block;font-size:16px;line-height:1.5;color:#151515}#loading{justify-content:center;align-items:center;min-height:100px}#loading.loading{display:flex}.u-no-break{white-space:nowrap}*{box-sizing:border-box}.icon-close{position:relative;width:1.5em;height:1.5em;margin:0;padding:0;border:0;font-size:2rem;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.icon-close__inner1{position:absolute;top:50%;left:50%;width:0;height:0;font-size:4rem;transform:translate(-50%,-50%) scale(.125)}.icon-close__inner1:after,.icon-close__inner1:before{content:\"\";position:absolute;top:0;left:0;display:block;width:.3em;height:2em;background:#000}.icon-close:focus .icon-close__inner1:after,.icon-close:focus .icon-close__inner1:before,.icon-close:hover .icon-close__inner1:after,.icon-close:hover .icon-close__inner1:before{background:#06c}.icon-close__inner1:before{transform:translate(-50%,-50%) rotate(-45deg)}.icon-close__inner1:after{transform:translate(-50%,-50%) rotate(45deg)}article{font-size:1rem;line-height:1.5;color:#151515}.product-lifecycle__wrapper{position:relative}.product-lifecycle__wrapper--listing{border:1px solid #d2d2d2}.product-lifecycle__header{padding:1.125rem}@media (min-width:650px){.product-lifecycle__header{display:flex;align-items:baseline;flex-wrap:wrap;padding:1rem}}.product-lifecycle__header--more-info{display:flex;flex-direction:column}@media (min-width:1080px){.product-lifecycle__header--more-info{flex-direction:row}}.product-lifecycle__header--more-info>*{margin-bottom:.5em}@media (min-width:1080px){.product-lifecycle__header--more-info>*{margin-right:1.5rem}}.product-lifecycle__header--more-info>:last-child{margin-right:0}.product-lifecycle-info__product-name{font-size:1.25em;font-weight:400;width:100%}.product-lifecycle__header--less-info .product-lifecycle-info__product-name{margin-right:auto;width:auto}.product-lifecycle-info__detailed-info{margin-right:auto}.product-lifecycle__header--more-info .product-lifecycle-info__detailed-info{margin-bottom:1em}[type=checkbox]{margin-right:.25em}.product-lifecycle__close{position:absolute;top:0;right:0;cursor:pointer}table{min-width:100%;border:0}@media (min-width:650px){table{position:relative;margin-left:0;margin-right:0}}.product-lifecycle-info__table-headers{position:sticky;top:0;z-index:999;display:none;background:#fff}@media (min-width:1000px){.product-lifecycle-info__table-headers{display:table}}.product-lifecycle-info__table{border-top:0}caption,td,th{padding:1.125rem;border:0;text-align:left}caption *,td *,th *{margin:0;padding:0}th{font-weight:700;vertical-align:middle}@media (min-width:1000px){td:nth-last-child(2):first-child~td,td:nth-last-child(2):first-child~th,th:nth-last-child(2):first-child~td,th:nth-last-child(2):first-child~th{width:50%}}@media (min-width:1000px){td:nth-last-child(3):first-child~td,td:nth-last-child(3):first-child~th,th:nth-last-child(3):first-child~td,th:nth-last-child(3):first-child~th{width:33.33333%}}@media (min-width:1000px){td:nth-last-child(4):first-child~td,td:nth-last-child(4):first-child~th,th:nth-last-child(4):first-child~td,th:nth-last-child(4):first-child~th{width:25%}}@media (min-width:1000px){td:nth-last-child(5):first-child~td,td:nth-last-child(5):first-child~th,th:nth-last-child(5):first-child~td,th:nth-last-child(5):first-child~th{width:20%}}@media (min-width:1000px){td:nth-last-child(6):first-child~td,td:nth-last-child(6):first-child~th,th:nth-last-child(6):first-child~td,th:nth-last-child(6):first-child~th{width:16.66667%}}@media (min-width:1000px){td:nth-last-child(7):first-child~td,td:nth-last-child(7):first-child~th,th:nth-last-child(7):first-child~td,th:nth-last-child(7):first-child~th{width:14.28571%}}@media (min-width:1000px){td:nth-last-child(8):first-child~td,td:nth-last-child(8):first-child~th,th:nth-last-child(8):first-child~td,th:nth-last-child(8):first-child~th{width:12.5%}}@media (min-width:1000px){td:nth-last-child(9):first-child~td,td:nth-last-child(9):first-child~th,th:nth-last-child(9):first-child~td,th:nth-last-child(9):first-child~th{width:11.11111%}}th{margin-top:1rem;border-top:4px solid #d2d2d2;border-bottom:1px solid #d2d2d2}tbody tr:first-child th{border-top:0;margin-top:0}@media (min-width:1000px){th{margin-top:0;border-top:0}}th[scope=row]{font-weight:inherit}td{padding:.5rem 1.125rem;border:0}@media (min-width:1000px){td{border-bottom:1px solid #d2d2d2}}@media (min-width:1000px){td,th{padding:1rem}}caption{border-bottom:3px solid #d2d2d2}.responsive-table--row-strategy thead{display:none}@media (min-width:1000px){.responsive-table--row-strategy thead{display:table-header-group}}.responsive-table--row-strategy td,.responsive-table--row-strategy th{display:block}@media (min-width:1000px){.responsive-table--row-strategy td,.responsive-table--row-strategy th{display:table-cell}}.responsive-table--row-strategy td:before,.responsive-table--row-strategy th:before{content:attr(data-label) \": \";font-weight:700}@media (min-width:1000px){.responsive-table--row-strategy td:before,.responsive-table--row-strategy th:before{content:none}}.responsive-table--column-strategy{display:none}@media (min-width:1000px){.responsive-table--column-strategy{display:table}}@media (min-width:1000px){.responsive-table__wrapper--column-strategy .responsive-table__mobile-alternative{display:none}}.responsive-table__wrapper--scroll-strategy{overflow-x:auto}@media (min-width:1000px){.responsive-table__wrapper--scroll-strategy{overflow:hidden}}:host([pfe-c-style=compact]) .lifecycle-table__product-name,:host([pfe-c-style=compact]) table{font-size:.875rem;line-height:1.5}:host([pfe-c-style=compact]) .product-lifecycle-info__table-headers{border:0}:host([pfe-c-style=compact]) caption,:host([pfe-c-style=compact]) td,:host([pfe-c-style=compact]) th{padding:.57143em}:host([pfe-c-style=compact]) caption:first-child,:host([pfe-c-style=compact]) td:first-child,:host([pfe-c-style=compact]) th:first-child{padding-left:1.14286em}:host([pfe-c-style=compact]) caption:last-child,:host([pfe-c-style=compact]) td:last-child,:host([pfe-c-style=compact]) th:last-child{padding-right:1.14286em}:host([pfe-c-style=compact]) th{border-top-width:2px;padding-top:.85714em}:host([pfe-c-style=compact]) caption{padding-top:1.14286em;border-bottom-width:1px}.toggle-arrow-default{float:left;cursor:pointer;margin-right:1rem}.toggle-arrow-composable{transform:rotate(-90deg)}.product-content-hidden{display:none}#plcc-footer-note p{white-space:pre-wrap}.header-icon-wrap,.version-icon-wrap{position:relative;text-align:left;cursor:pointer}.header-icon-wrap>svg,.version-icon-wrap>svg{position:absolute}.header-icon-wrap .tooltip,.version-icon-wrap .tooltip{display:none;width:250px;padding:10px;box-sizing:border-box;box-shadow:0 .5rem 1rem 0 rgba(3,3,3,.16),0 0 .375rem 0 rgba(3,3,3,.08);background-color:#fff;color:#151515;font-size:14px;word-wrap:break-word;z-index:2000;position:absolute;left:50%;bottom:160%;transform:translateX(-43%);transition:ease-in-out 1s}.header-icon-wrap a,.version-icon-wrap a{color:#06c}.header-icon-wrap .expand-arrow,.version-icon-wrap .expand-arrow{display:inline-block;width:120px;height:16px;position:absolute;top:-60%;left:-50px}.header-icon-wrap .tooltip::after,.version-icon-wrap .tooltip::after{display:none;content:\"\";border-width:8px 8px 8px 8px;border-style:solid;border-color:#fff transparent transparent transparent;position:absolute;left:44%;top:100%}.version-name-icon-wrap .tooltip{display:none;padding:10px;text-align:left;position:absolute;left:30%;bottom:160%;transform:translateX(-38%);transition:ease-in-out 1s;transition-delay:1s;box-shadow:0 .5rem 1rem 0 rgba(3,3,3,.16),0 0 .375rem 0 rgba(3,3,3,.08)}.version-name-icon-wrap .tooltip::after{display:none;content:\"\";border-width:8px 8px 8px 8px;border-style:solid;border-color:#fff transparent transparent transparent;position:absolute;left:39%;top:100%}.expand-arrow:hover .tooltip,.expand-arrow:hover .tooltip::after,.header-icon-wrap:hover .tooltip,.header-icon-wrap:hover .tooltip::after,.version-icon-wrap:hover .tooltip,.version-icon-wrap:hover .tooltip::after{display:block}\n/*# sourceMappingURL=plcc-table.min.css.map */\n</style><div id=\"loading\" hidden>\n  <pfe-progress-indicator></pfe-progress-indicator>\n</div>\n<article\n  class=\"product-lifecycle__wrapper\"\n  id=\"product-lifecycle__wrapper--listing\"\n>\n  <button\n    class=\"product-lifecycle__close icon-close application\"\n    id=\"close-btn\"\n    aria-label=\"Closes Red Hat OpenStack Platform Table\"\n    hidden\n  >\n    <div class=\"icon-close__inner1\"></div>\n  </button>\n  <h2 class=\"product-lifecycle-info__product-name sr-only\"></h2>\n  <div id=\"product-lifecycle-toggle-eol-checkbox\">\n    <input type=\"checkbox\" name=\"toggle-eol\" id=\"toggle-eol\" />\n    <label for=\"toggle-eol\">Include unsupported versions</label>\n  </div>\n\n\n  <table\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table-headers\"\n    aria-hidden\n  >\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n  </table>\n\n  <table\n    id=\"product-lifecycle-full-support\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table product-lifecycle-info__table--supported responsive-table responsive-table--row-strategy\"\n  >\n    <caption>\n      <div class=\"toggle-arrow-default toggle-arrow-expandable\">\n        <svg\n          style=\"vertical-align: -0.125em\"\n          fill=\"currentColor\"\n          height=\"1em\"\n          width=\"1em\"\n          viewBox=\"0 0 320 512\"\n          aria-hidden=\"true\"\n          role=\"img\"\n        >\n          <path\n            d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </div>\n      <h3 class=\"lifecycle-table__product-name\">\n        Full support <span class=\"sr-only\"></span>\n      </h3>\n    </caption>\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n    <tbody class=\"product-lifecycle-info__table_content\"></tbody>\n  </table>\n\n  <table\n    id=\"product-lifecycle-maintenance-support\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table product-lifecycle-info__table--purgatory responsive-table responsive-table--row-strategy\"\n  >\n    <caption>\n      <div class=\"toggle-arrow-default toggle-arrow-expandable\">\n        <svg\n          style=\"vertical-align: -0.125em\"\n          fill=\"currentColor\"\n          height=\"1em\"\n          width=\"1em\"\n          viewBox=\"0 0 320 512\"\n          aria-hidden=\"true\"\n          role=\"img\"\n        >\n          <path\n            d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </div>\n      <h3 class=\"lifecycle-table__product-name\">\n        Maintenance support <span class=\"sr-only\"></span>\n      </h3>\n    </caption>\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n    <tbody class=\"product-lifecycle-info__table_content\"></tbody>\n  </table>\n\n  <table\n    id=\"product-lifecycle-extended-support\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table product-lifecycle-info__table--purgatory responsive-table responsive-table--row-strategy\"\n  >\n    <caption>\n      <div class=\"toggle-arrow-default toggle-arrow-expandable\">\n        <svg\n          style=\"vertical-align: -0.125em\"\n          fill=\"currentColor\"\n          height=\"1em\"\n          width=\"1em\"\n          viewBox=\"0 0 320 512\"\n          aria-hidden=\"true\"\n          role=\"img\"\n        >\n          <path\n            d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </div>\n      <h3 class=\"lifecycle-table__product-name\">\n        Extended support <span class=\"sr-only\"></span>\n      </h3>\n    </caption>\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n    <tbody class=\"product-lifecycle-info__table_content\"></tbody>\n  </table>\n\n  <table\n    id=\"product-lifecycle-end-of-maintenance\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table product-lifecycle-info__table--unsupported responsive-table responsive-table--row-strategy\"\n  >\n    <caption>\n      <div class=\"toggle-arrow-default toggle-arrow-expandable\">\n        <svg\n          style=\"vertical-align: -0.125em\"\n          fill=\"currentColor\"\n          height=\"1em\"\n          width=\"1em\"\n          viewBox=\"0 0 320 512\"\n          aria-hidden=\"true\"\n          role=\"img\"\n        >\n          <path\n            d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </div>\n      <h3 class=\"lifecycle-table__product-name\">\n        End of maintenance <span class=\"sr-only\"></span>\n      </h3>\n    </caption>\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n    <tbody class=\"product-lifecycle-info__table_content\"></tbody>\n  </table>\n\n  <table\n    id=\"product-lifecycle-end-of-life\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"product-lifecycle-info__table product-lifecycle-info__table--unsupported responsive-table responsive-table--row-strategy\"\n  >\n    <caption>\n      <div class=\"toggle-arrow-default toggle-arrow-expandable\">\n        <svg\n          style=\"vertical-align: -0.125em\"\n          fill=\"currentColor\"\n          height=\"1em\"\n          width=\"1em\"\n          viewBox=\"0 0 320 512\"\n          aria-hidden=\"true\"\n          role=\"img\"\n        >\n          <path\n            d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </div>\n      <h3 class=\"lifecycle-table__product-name\">\n        End of life <span class=\"sr-only\"></span>\n      </h3>\n    </caption>\n    <thead>\n      <tr class=\"product-phases\"></tr>\n    </thead>\n    <tbody class=\"product-lifecycle-info__table_content\"></tbody>\n  </table>\n  <p id=\"plcc-release-cadence\"></p>\n  <p id=\"plcc-former-names\"></p>\n  <div id=\"plcc-footer-note\"></div>\n  <p id=\"plcc-disclaimer\">\n    All future dates mentioned are close approximations, non definitive, and\n    subject to change.\n  </p>\n</article>";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "plcc-table.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "plcc-table.css";
      }
    }, {
      key: "app",
      get: function get$$1() {
        return this.getAttribute("app");
      }
    }, {
      key: "hideEOL",
      get: function get$$1() {
        return this.getAttribute("hide-eol");
      }
    }, {
      key: "expandable",
      get: function get$$1() {
        return this.getAttribute("expandable");
      }
    }, {
      key: "toggleEOL",
      get: function get$$1() {
        return this.getAttribute("toggle-eol");
      }
    }, {
      key: "originRelative",
      get: function get$$1() {
        return this.hasAttribute("origin-relative");
      }
    }, {
      key: "loading",
      get: function get$$1() {
        return this.hasAttribute("loading");
      },
      set: function set$$1(val) {
        if (val) {
          this._loadingIndicator.removeAttribute("hidden");
          this._loadingIndicator.classList.add("loading");
          this.setAttribute("loading", true);
        } else {
          this._loadingIndicator.setAttribute("hidden", true);
          this._loadingIndicator.classList.remove("loading");
          this.removeAttribute("loading");
        }
      }
    }, {
      key: "tableData",
      get: function get$$1() {
        return this._data;
      },
      set: function set$$1(data) {
        if (!data) {
          return;
        }

        this.loading = true;
        this._data = data;
        var displayHeaders = this._getDisplayHeaders(this._data);
        var displayPhases = this._getDisplayPhases(this._data);
        var headers = this._getHeaders(this._data);
        this._construct(this._data, displayHeaders, displayPhases, headers);
        this.loading = false;
      }

      // Declare the type of this component

    }], [{
      key: "version",
      get: function get$$1() {
        return "2.1.5";
      }
    }, {
      key: "tag",
      get: function get$$1() {
        return "plcc-table";
      }
    }, {
      key: "events",
      get: function get$$1() {
        return {
          close: this.tag + ":close"
        };
      }
    }, {
      key: "properties",
      get: function get$$1() {
        return {
          _lang: {
            title: "Language support",
            attr: "lang",
            default: "en",
            type: String
          },
          productName: {
            title: "Name of product required for api",
            attr: "product-name",
            type: String
          },
          hideEol: {
            title: "Hide end-of-life section",
            attr: "hide-eol",
            type: Boolean,
            observer: "_hideEolChange"
          },
          app: {
            title: "Toggle application version",
            attr: "app",
            type: String
          },
          expandable: {
            title: "Toggle version category",
            attr: "expandable",
            default: false,
            type: Boolean
          },
          toggleEOL: {
            title: "Toggle end-of-life checkbox",
            attr: "toggle-eol",
            type: Boolean,
            observer: "_toggleEolChange"
          }
        };
      }
    }, {
      key: "slots",
      get: function get$$1() {
        return {};
      }
    }, {
      key: "PfeType",
      get: function get$$1() {
        return PFElement.PfeTypes.Component;
      }
    }]);

    function PlccTable() {
      classCallCheck(this, PlccTable);

      var _this = possibleConstructorReturn(this, (PlccTable.__proto__ || Object.getPrototypeOf(PlccTable)).call(this, PlccTable, { type: PlccTable.PfeType }));

      _this._handleBtnClick = _this._handleBtnClick.bind(_this);
      _this._handleToggleArrowClick = _this._handleToggleArrowClick.bind(_this);

      _this._data = null;
      _this._fullSupport = false;
      _this._maintenanceSupport = false;
      _this._extendedSupport = false;
      _this._uncategorized = false;
      _this._endOfMaintenance = false;
      _this._endOfLife = false;
      _this._plccApplication = false;
      _this._hasFormerNames = false;
      _this._hasFooterNote = false;
      _this._hasReleaseCadence = false;

      //translations for static strings
      _this._translations = {
        en: {
          full_support: "Full Support",
          maint_support: "Maintenance Support",
          ext_support: "Extended Support",
          uncategorized: "Uncategorized",
          end_maintenance: "End of maintenance",
          end_life: "End of life",
          version: "Version",
          tier: "Tier",
          openShift_compatibility: "OpenShift Compatibility",
          releaseCadenceText: "Estimated release cadence: ",
          formerNamesText: "The former names of this product are: ",
          final_minor: "Final minor release",
          not_applicable: "N/A",
          disclaimer: "All future dates mentioned are close approximations, non definitive, and subject to change."
        },
        ja: {
          full_support: "フルサポート",
          maint_support: "メンテナンスサポート",
          ext_support: "延長サポート",
          uncategorized: "未分類",
          end_maintenance: "メンテナンスサポートの終了日",
          end_life: "ライフサイクルの終了日",
          version: "バージョン",
          tier: "階層",
          openShift_compatibility: "OpenShift との互換性",
          releaseCadenceText: "推定されるリリース頻度: ",
          formerNamesText: "旧製品名: ",
          final_minor: "最終マイナーリリース",
          not_applicable: "該当なし",
          disclaimer: "記載されている将来の日付はすべて概算であり、決定的なものではなく、変更される可能性があります。"
        },
        ko: {
          full_support: "완전 지원",
          maint_support: "유지 관리 지원",
          ext_support: "연장 지원",
          uncategorized: "범주화되지 않음",
          end_maintenance: "유지 관리 지원 종료",
          end_life: "종료일",
          version: "버전",
          tier: "계층",
          openShift_compatibility: "OpenShift와의 호환성",
          releaseCadenceText: "예상되는 릴리스 빈도: ",
          formerNamesText: "이 제품의 이전 이름: ",
          final_minor: "마지막 마이너 릴리스",
          not_applicable: "해당 없음",
          disclaimer: "언급된 모든 향후 날짜는 확정되지 않은 예상 날짜이며 변경될 수 있습니다."
        },
        zh_CN: {
          full_support: "完全支持",
          maint_support: "维护支持",
          ext_support: "延长的支持",
          uncategorized: "未分类",
          end_maintenance: "维护结束",
          end_life: "生命周期结束",
          version: "版本",
          tier: "层级",
          openShift_compatibility: "OpenShift 兼容性",
          releaseCadenceText: "预计发行节奏: ",
          formerNamesText: "此产品以前的名称: ",
          final_minor: "最后的次发行版本",
          not_applicable: "不适用",
          disclaimer: "所有提到的未来日期均为近似日期，未完全确定，可能随时更改。"
        }
      };

      _this._disclaimer = _this.shadowRoot.querySelector("#plcc-disclaimer");
      _this._article = _this.shadowRoot.querySelector("article");
      _this._header = _this.shadowRoot.querySelector("header");
      _this._links = _this.shadowRoot.querySelectorAll("a");
      _this._appMarkup = _this.shadowRoot.querySelectorAll(".application");
      _this._fullSupportTable = _this.shadowRoot.querySelector("#product-lifecycle-full-support");
      _this._maintenanceSupportTable = _this.shadowRoot.querySelector("#product-lifecycle-maintenance-support");
      _this._extendedSupportTable = _this.shadowRoot.querySelector("#product-lifecycle-extended-support");
      _this._endOfMaintenanceTable = _this.shadowRoot.querySelector("#product-lifecycle-end-of-maintenance");
      _this._endOfLifeTable = _this.shadowRoot.querySelector("#product-lifecycle-end-of-life");
      // this._uncategorizedTable = this.shadowRoot.querySelector(
      //   "#product-lifecycle-uncategorized"
      // );
      _this._fullSupportBody = _this.shadowRoot.querySelector("#product-lifecycle-full-support tbody");
      _this._maintenanceSupportBody = _this.shadowRoot.querySelector("#product-lifecycle-maintenance-support tbody");
      _this._extendedSupportBody = _this.shadowRoot.querySelector("#product-lifecycle-extended-support tbody");
      _this._endOfMaintenanceBody = _this.shadowRoot.querySelector("#product-lifecycle-end-of-maintenance tbody");
      _this._endOfLifeBody = _this.shadowRoot.querySelector("#product-lifecycle-end-of-life tbody");
      // this._uncategorizedBody = this.shadowRoot.querySelector(
      //   "#product-lifecycle-uncategorized tbody"
      // );
      _this._caption = _this.shadowRoot.querySelector("caption");
      _this._phaseRow = _this.shadowRoot.querySelectorAll(".product-phases");
      _this._versionToggleRow = _this.shadowRoot.querySelectorAll("version-toggle-row");
      _this._versionToggle = _this.shadowRoot.querySelector("#unsupported-versions");
      _this._closeBtn = _this.shadowRoot.querySelector("#close-btn");
      _this._loadingIndicator = _this.shadowRoot.querySelector("#loading");

      _this._formerNames = _this.shadowRoot.querySelector("#plcc-former-names");

      _this._toggleArrowBtnList = _this.shadowRoot.querySelectorAll(".toggle-arrow-default");
      _this._productTableContentList = _this.shadowRoot.querySelectorAll(".product-lifecycle-info__table_content");

      _this._toggleEolCheckboxWrap = _this.shadowRoot.querySelector("#product-lifecycle-toggle-eol-checkbox");
      // this._closeBtn.addEventListener("click", this._handleBtnClick);

      _this._toggleEolCheckbox = _this.shadowRoot.querySelector("#toggle-eol");
      _this._toggleEolCheckbox.addEventListener("change", function (event) {
        return _this._handleToggleEolCheckboxChange(event);
      });

      _this._footerNote = _this.shadowRoot.querySelector("#plcc-footer-note");
      _this._releaseCadence = _this.shadowRoot.querySelector("#plcc-release-cadence");
      _this.loading = false;
      return _this;
    }

    createClass(PlccTable, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(PlccTable.prototype.__proto__ || Object.getPrototypeOf(PlccTable.prototype), "connectedCallback", this).call(this);

        //check for lang attribute on html tag
        // if (document.querySelector("html").hasAttribute("lang")) {
        //   this._lang = document.querySelector("html").getAttribute("lang");
        // }
        //check for lang attribute from cookie
        var rh_locale_match = document.cookie.match(/rh_locale=(en|ja|ko|fr|zh_CN)/i);
        if (rh_locale_match && rh_locale_match[1]) {
          this._lang = rh_locale_match[1];
        }

        this._translateStrings();
        this._requestProduct();
        this._handleVersionCategoryExpandable();
        this._handleToggleEolCheckboxShow();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._closeBtn.removeEventListener("click", this._handleBtnClick);
      }
    }, {
      key: "_hideEolChange",
      value: function _hideEolChange() {
        this._handleHideEOL(this.hasAttribute("hide-eol"));
      }
    }, {
      key: "_toggleEolChange",
      value: function _toggleEolChange() {
        this._handleToggleEOL(this.hasAttribute("toggle-eol"));
      }
    }, {
      key: "_requestProduct",
      value: function _requestProduct(oldVal, newVal) {
        var _this2 = this;

        this.loading = true;
        var query = "";
        var product = this.productName;
        var lang = this._lang;

        if (!!product && product !== "") {
          var origin = this.originRelative ? "" : "https://access.redhat.com";
          if (this.lang === "en") {
            query = origin + "/product-life-cycles/api/v1/products?name=" + product;
          } else {
            query = origin + "/product-life-cycles/api/v1/products?name=" + product + "&lng=" + lang;
          }
        }

        var promise = new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", query);
          xhr.responseType = "json";

          xhr.onload = function () {
            if (xhr.status >= 400) {
              reject(xhr.response);
            } else {
              resolve(xhr.response);
            }

            _this2.loading = false;
          };

          xhr.onerror = function (err) {
            reject(err, "Something went wrong.");
            _this2.loading = false;
          };

          xhr.send();
        }).then(function (data) {
          _this2.tableData = data;
        }).catch(function (err) {
          console.error(err);
        });
      }
    }, {
      key: "_translateStrings",
      value: function _translateStrings() {
        //translate static strings
        this.shadowRoot.querySelector("#product-lifecycle-full-support h3").firstChild.nodeValue = this._translations[this._lang].full_support;

        this.shadowRoot.querySelector("#product-lifecycle-maintenance-support h3").firstChild.nodeValue = this._translations[this._lang].maint_support;

        this.shadowRoot.querySelector("#product-lifecycle-extended-support h3").firstChild.nodeValue = this._translations[this._lang].ext_support;

        this.shadowRoot.querySelector("#product-lifecycle-end-of-maintenance h3").firstChild.nodeValue = this._translations[this._lang].end_maintenance;

        this.shadowRoot.querySelector("#product-lifecycle-end-of-life h3").firstChild.nodeValue = this._translations[this._lang].end_life;

        // this.shadowRoot.querySelector(
        //   "#product-lifecycle-uncategorized h3"
        // ).firstChild.nodeValue = this._translations[this._lang].uncategorized;

        this.shadowRoot.querySelector("#plcc-disclaimer").textContent = this._translations[this._lang].disclaimer;
      }

      //get products phases for table headers

    }, {
      key: "_getDisplayHeaders",
      value: function _getDisplayHeaders(data) {
        var displayHeaders = [];
        if (data.data[0].is_operator && data.data[0].show_openshift_compatibility) {
          displayHeaders.push(this._translations[this._lang].openShift_compatibility);
        }
        if (data.data[0].is_layered_product) {
          displayHeaders = displayHeaders.concat(data.data[0].product_extra_headers);
        }
        // data.data[0].all_phases.forEach((item) => {
        //   displayHeaders.push(item.display_name);
        // });
        return displayHeaders;
      }
    }, {
      key: "_getDisplayPhases",
      value: function _getDisplayPhases(data) {
        var displayPhases = data.data[0].all_phases.map(function (item) {
          return {
            display_name: item.display_name,
            additional_text: item.additional_text || ""
          };
        });
        return displayPhases;
      }
    }, {
      key: "_getHeaders",
      value: function _getHeaders(data) {
        var headers = [];
        if (data.data[0].is_layered_product) {
          headers = headers.concat(data.data[0].product_extra_headers);
        }
        data.data[0].all_phases.forEach(function (item) {
          headers.push(item.name);
        });

        return headers;
      }
    }, {
      key: "_getFormerNames",
      value: function _getFormerNames(data) {
        var formerNames = "";
        if (data.data[0].former_names && data.data[0].former_names.length > 0) {
          formerNames = data.data[0].former_names.join(", ");
        }

        return formerNames;
      }
    }, {
      key: "_convertHyperlinkToHtml",
      value: function _convertHyperlinkToHtml(hyperlinkString) {
        // const regex1 =
        //   /\[(.*)\]\(((https?):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)\)/;
        // const regex2 =
        //   /\[(.*)\|((https?):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)\]/;
        // const regex3 =
        //   /\[((https?):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)\]/;

        var regex1 = /\[(.*?)\]\((.*?)\)/g;
        var regex2 = /\[(.*?)\|(.*?)\]/g;
        var regex3 = /\[(.*?)\]/g;

        var resString = hyperlinkString.replace(regex1, function ($0, $1, $2) {
          return "<a href=" + $2 + " target=_blank>" + $1 + "</a>";
        });
        var resString2 = resString.replace(regex2, function ($0, $1, $2) {
          return "<a href=" + $2 + " target=_blank>" + $1 + "</a>";
        });

        var aHtmlString = resString2.replace(regex3, function ($0, $1) {
          return "<a href=" + $1 + " target=_blank>" + $1 + "</a>";
        });

        return aHtmlString;
      }
    }, {
      key: "_encodeHTMLEntities",
      value: function _encodeHTMLEntities(text) {
        var textArea = document.createElement("textarea");
        textArea.innerText = text;
        var encodedOutput = textArea.innerHTML;
        var arr = encodedOutput.split("<br>");
        encodedOutput = arr.join("\n");
        return encodedOutput;
      }
    }, {
      key: "_createQuestionIcon",
      value: function _createQuestionIcon(tooltip, className, styleCss) {
        if (!tooltip) return "";
        var newToolTip = this._convertHyperlinkToHtml(this._encodeHTMLEntities(tooltip));
        return "<span class=\"version-icon-wrap " + className + "\" style=" + styleCss + ">\n    <span class=\"tooltip\">" + newToolTip + "</span>\n    <span class=\"expand-arrow\"></span>\n    <svg\n    t=\"1684932112993\"\n    class=\"icon\"\n    viewBox=\"0 0 1024 1024\"\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    p-id=\"2538\"\n    width=\"1.4em\"\n    height=\"1.4em\"\n    >\n    <path\n      d=\"M512 896a384 384 0 1 1 384-384 384.426667 384.426667 0 0 1-384 384z m0-718.72A334.72 334.72 0 1 0 846.72 512 335.146667 335.146667 0 0 0 512 177.28z m-27.52 520.362667a30.805333 30.805333 0 1 1 61.610667 0 30.805333 30.805333 0 0 1-61.610667 0z m29.781333-66.986667a24.661333 24.661333 0 0 1-24.661333-24.618667v-38.997333a92.586667 92.586667 0 0 1 41.088-76.202667c16.213333-9.386667 31.274667-20.821333 44.8-33.877333 13.141333-14.08 20.48-32.64 20.48-51.925333a80.298667 80.298667 0 0 0-82.133333-78.890667 78.250667 78.250667 0 0 0-82.133334 76.629333 24.661333 24.661333 0 1 1-49.28 0 130.816 130.816 0 0 1 261.418667 2.261334 125.866667 125.866667 0 0 1-34.304 86.186666c-16.938667 16.64-35.882667 31.104-56.448 42.965334-11.733333 6.357333-15.018667 27.093333-15.402667 33.877333v38.186667a24.661333 24.661333 0 0 1-23.466666 24.448z\"\n      fill=\"#000000\"\n      p-id=\"2539\"\n    ></path>\n    </svg></span>";
      }

      //construct table headers and rows based on data and append to html

    }, {
      key: "_construct",
      value: function _construct(data, displayHeaders, displayPhases, headers) {
        var _this3 = this;

        var allFullSupportRows = "";
        var allMaintenanceSupportRows = "";
        var allExtendedSupportRows = "";
        var allEndOfLifeRows = "";
        var allEndOfMaintenanceRows = "";
        var allHeaders = "<th scope=\"col\">" + this._translations[this._lang].version + "</th>";
        var versions = data.data[0].versions;
        var showMinor = data.data[0].show_final_minor_release;
        var layeredProduct = data.data[0].is_layered_product;
        var formerNames = this._getFormerNames(data);
        var footerNote = data.data[0].footnote || "";
        var releaseCadence = data.data[0].release_cadence || "";
        var isOperator = data.data[0].is_operator;
        var show_openshift_compatibility = data.data[0].show_openshift_compatibility;

        if (releaseCadence !== "") {
          this._hasReleaseCadence = true;
          this.shadowRoot.querySelector("#plcc-release-cadence").textContent = this._translations[this._lang].releaseCadenceText + releaseCadence;
        }

        if (formerNames !== "") {
          this._hasFormerNames = true;
          this.shadowRoot.querySelector("#plcc-former-names").textContent = this._translations[this._lang].formerNamesText + formerNames;
        }

        if (footerNote !== "") {
          this._hasFooterNote = true;
          this.shadowRoot.querySelector("#plcc-footer-note").innerHTML = footerNote;
        }

        //set product name
        this.shadowRoot.querySelector(".product-lifecycle-info__product-name").innerText = data.data[0].name;
        this.shadowRoot.querySelectorAll(".sr-only").forEach(function (item) {
          return item.innerText = "" + data.data[0].name;
        });

        // create operator product tier
        if (isOperator) {
          var tierHeader = "<th scope=\"col\">" + this._translations[this._lang].tier + "</th>";
          allHeaders += tierHeader;
        }

        //create table headers
        displayHeaders.forEach(function (item) {
          var theader = "<th scope=\"col\">" + item + "</th>";
          allHeaders += theader;
        });

        displayPhases.forEach(function (item) {
          var theader = "<th scope=\"col\">" + item.display_name + _this3._createQuestionIcon(item.additional_text, "header-icon-wrap") + "</th>";
          allHeaders += theader;
        });

        //check if minor version column should display
        if (showMinor) {
          allHeaders += "<th scope=\"col\">" + this._translations[this._lang].final_minor + "</th>";
        }

        versions.forEach(function (item, index) {
          var fullSupportRow = "";
          var maintenanceSupportRow = "";
          var extendedSupportRow = "";
          var endOfLifeRow = "";
          var endOfMaintenanceRow = "";
          var uncategorizedRow = "";

          //if version is tagged latest, create row for full support
          if (item.type === "Full Support") {
            _this3._fullSupport = true;
            fullSupportRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\"> " + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "\n        </th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "\n        " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\"> " + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + "\n                " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          //if version is tagged supported, create row for maintenance support
          if (item.type === "Maintenance Support") {
            _this3._maintenanceSupport = true;

            maintenanceSupportRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\">" + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "</th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "   " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\">\n                " + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + " " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          //if version is tagged extended support, create row for extended support
          if (item.type === "Extended Support") {
            _this3._extendedSupport = true;

            extendedSupportRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\">" + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "</th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "\n        " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\">" + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + "\n                " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          if (item.type === "End of Maintenance") {
            _this3._endOfMaintenance = true;

            endOfMaintenanceRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\">" + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "</th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "\n        " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\">" + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + "\n                " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          //if version is tagged old, create row for end of life
          if (item.type === "End of life") {
            _this3._endOfLife = true;

            endOfLifeRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\">" + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "</th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "\n        " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\">" + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + "\n                " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          //if version is tagged latest, create row for full support
          if (item.type === "" || item.type === null) {
            _this3._uncategorized = true;

            uncategorizedRow = "\n        <tr>\n          <th scope=\"row\" data-label=\"" + _this3._translations[_this3._lang].version + "\">" + item.name + (item.additional_text ? _this3._createQuestionIcon(item.additional_text, "version-name-icon-wrap") : "") + "</th>\n        " + (isOperator ? "<td data-label=\"" + item.tier + "\">" + item.tier + "</td>" : "") + "\n        " + (isOperator && show_openshift_compatibility ? "<td data-label=\"" + item.openshift_compatibility + "\">" + item.openshift_compatibility + "</td>" : "") + "\n          " + (layeredProduct ? item.extra_dependences.map(function (dependent_value, index) {
              if (dependent_value !== null) {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">" + dependent_value + "</td>";
              } else {
                return "<td data-label=\"" + data.data[0].product_extra_headers[index] + "\">N/A</td>";
              }
            }).join("") : "") + "\n          " + item.phases.map(function (phase) {
              if (headers.includes(phase.name)) {
                return "<td data-label=\"" + phase.name + "\">" + _this3._parseDate(phase.date, phase.date_format) + "\n                  " + _this3._parseSuperscript(phase.superscript) + "\n                " + _this3._createQuestionIcon(phase.additional_text, "version-icon-wrap") + "\n                </td>";
              } else {
                return "<td data-label=\"" + phase.name + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>";
              }
            }).join("") + "\n          " + (showMinor ? item.final_minor_release !== null ? "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + item.final_minor_release + "</td>" : "<td data-label=\"" + _this3._translations[_this3._lang].final_minor + "\">" + _this3._translations[_this3._lang].not_applicable + "</td>" : "") + "\n        </tr>\n        ";
          }

          allFullSupportRows += fullSupportRow;
          allMaintenanceSupportRows += maintenanceSupportRow;
          allExtendedSupportRows += extendedSupportRow;
          allEndOfLifeRows += endOfLifeRow;
          allEndOfMaintenanceRows += endOfMaintenanceRow;
        });

        if (!this._fullSupport) {
          this._fullSupportTable.setAttribute("hidden", true);
        } else {
          this._fullSupportTable.removeAttribute("hidden");
        }

        if (!this._maintenanceSupport) {
          this._maintenanceSupportTable.setAttribute("hidden", true);
        } else {
          this._maintenanceSupportTable.removeAttribute("hidden");
        }

        if (!this._extendedSupport) {
          this._extendedSupportTable.setAttribute("hidden", true);
        } else {
          this._extendedSupportTable.removeAttribute("hidden");
        }

        if (!this._endOfMaintenance) {
          this._endOfMaintenanceTable.setAttribute("hidden", true);
        } else {
          this._endOfMaintenanceTable.removeAttribute("hidden");
        }

        //if there are 0 of type "old" hide the end of life table
        //if they exist but were in app, hide the table by default (toggle with checkbox)
        if (!this._endOfLife) {
          this._endOfLifeTable.setAttribute("hidden", true);
          // this.shadowRoot.querySelector(".u-no-break").setAttribute("hidden", true);
        } else if (this._endOfLife && this._plccApplication) {
          this._endOfLifeTable.setAttribute("hidden", true);
        }

        // if (!this._uncategorized) {
        //   this._uncategorizedTable.setAttribute("hidden", true);
        // } else {
        //   this._uncategorizedTable.removeAttribute("hidden");
        // }

        if (!this._hasReleaseCadence) {
          this._releaseCadence.setAttribute("hidden", true);
        } else {
          this._releaseCadence.removeAttribute("hidden");
        }

        if (!this._hasFormerNames) {
          this._formerNames.setAttribute("hidden", true);
        } else {
          this._formerNames.removeAttribute("hidden");
        }

        if (!this._hasFooterNote) {
          this._footerNote.setAttribute("hidden", true);
        } else {
          this._footerNote.removeAttribute("hidden");
        }

        //append headers to all <thead>s
        this._phaseRow.forEach(function (item) {
          item.innerHTML = allHeaders;
        });

        //append rows to all <tbody>s
        this._fullSupportBody.innerHTML = allFullSupportRows;
        this._maintenanceSupportBody.innerHTML = allMaintenanceSupportRows;
        this._extendedSupportBody.innerHTML = allExtendedSupportRows;
        this._endOfLifeBody.innerHTML = allEndOfLifeRows;
        this._endOfMaintenanceBody.innerHTML = allEndOfMaintenanceRows;
        // this._uncategorizedBody.innerHTML = allUncategorizedRows;
      }

      //check for valid date

    }, {
      key: "_parseDate",
      value: function _parseDate(date, format) {
        if (format === "string") {
          return date;
        } else {
          return "<pfe-datetime datetime=" + date + " day=\"numeric\" month=\"long\" year=\"numeric\" time-zone=\"UTC\" locale=\"" + (this._lang !== "zh_CN" ? this._lang : "zh-Hans-CN") + "\"></pfe-datetime>";
        }
      }

      //check for superscript
      //only render the superscript if it's not in app and has superscript value

    }, {
      key: "_parseSuperscript",
      value: function _parseSuperscript(data) {
        if (!this.hasAttribute("app") && typeof data !== "undefined") {
          return "<sup>" + data + "</sup>";
        } else {
          return "";
        }
      }

      //handle toggle attr

    }, {
      key: "_handleHideEOL",
      value: function _handleHideEOL(val) {
        if (val) {
          this._endOfLifeTable.setAttribute("hidden", true);
        } else {
          this._endOfLifeTable.removeAttribute("hidden");
        }
      }
    }, {
      key: "_handleToggleEolCheckboxChange",
      value: function _handleToggleEolCheckboxChange(event) {
        if (event.currentTarget.checked) {
          this._endOfLifeTable.removeAttribute("hidden");
        } else {
          this._endOfLifeTable.setAttribute("hidden", true);
        }
      }
    }, {
      key: "_handleToggleEOL",
      value: function _handleToggleEOL(val) {
        if (val) {
          this._toggleEolCheckboxWrap.removeAttribute("hidden");
        } else {
          this._toggleEolCheckboxWrap.setAttribute("hidden", true);
        }
      }
    }, {
      key: "_handleToggleEolCheckboxShow",
      value: function _handleToggleEolCheckboxShow() {
        if (this.hasAttribute("toggle-eol")) {
          this._toggleEolCheckboxWrap.removeAttribute("hidden");
          if (!this.hasAttribute("hide-eol")) {
            this._toggleEolCheckbox.setAttribute("checked", true);
          }
        } else {
          this._toggleEolCheckboxWrap.setAttribute("hidden", true);
        }
      }

      //emit close button event

    }, {
      key: "_handleBtnClick",
      value: function _handleBtnClick(event) {
        this.emitEvent(PlccTable.events.close);
      }
    }, {
      key: "_handleVersionCategoryExpandable",
      value: function _handleVersionCategoryExpandable() {
        var _this4 = this;

        if (this.hasAttribute("expandable")) {
          this._toggleArrowBtnList.forEach(function (btnItem, index) {
            btnItem.setAttribute("index", index);
            btnItem.addEventListener("click", _this4._handleToggleArrowClick);
          });
          this._productTableContentList.forEach(function (contentItem, index) {
            contentItem.setAttribute("index", index);
          });
        } else {
          this._toggleArrowBtnList.forEach(function (arrowBtn) {
            arrowBtn.setAttribute("hidden", true);
          });
        }
      }
    }, {
      key: "_handleToggleArrowClick",
      value: function _handleToggleArrowClick(event) {
        var index = event.currentTarget.getAttribute("index");
        var eleClassList = this._toggleArrowBtnList[index].classList.value;
        if (!eleClassList.includes("toggle-arrow-composable")) {
          this._toggleArrowBtnList[index].classList.add("toggle-arrow-composable");
          this._productTableContentList[index].classList.add("product-content-hidden");
        } else {
          this._toggleArrowBtnList[index].classList.remove("toggle-arrow-composable");
          this._productTableContentList[index].classList.remove("product-content-hidden");
        }
      }
    }]);
    return PlccTable;
  }(PFElement);

  PFElement.create(PlccTable);

  return PlccTable;

})));
//# sourceMappingURL=plcc-table.umd.js.map
