define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'bootstrap-datepicker', './aurelia-bootstrap-datepicker.css'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AureliaBootstrapDatepicker = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var AureliaBootstrapDatepicker = exports.AureliaBootstrapDatepicker = (_dec = (0, _aureliaFramework.customElement)('bootstrap-datepicker'), _dec2 = (0, _aureliaFramework.bindable)('value'), _dec3 = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function AureliaBootstrapDatepicker(eventAggregator) {
      _classCallCheck(this, AureliaBootstrapDatepicker);

      _initDefineProp(this, 'dpOptions', _descriptor, this);

      this.eventAggregator = eventAggregator;
    }

    AureliaBootstrapDatepicker.prototype.attached = function attached() {
      var self = this;
      $(this.datepicker).datepicker(this.dpOptions).on('changeDate', function (e) {
        self.eventAggregator.publish('DATEPICKER:changeDate', { event: e });
      });
    };

    return AureliaBootstrapDatepicker;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dpOptions', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});