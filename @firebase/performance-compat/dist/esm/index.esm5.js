import firebase from '@firebase/app-compat';
import { Component } from '@firebase/component';
import { trace } from '@firebase/performance';

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PerformanceCompatImpl = /** @class */ (function () {
    function PerformanceCompatImpl(app, _delegate) {
        this.app = app;
        this._delegate = _delegate;
    }
    Object.defineProperty(PerformanceCompatImpl.prototype, "instrumentationEnabled", {
        get: function () {
            return this._delegate.instrumentationEnabled;
        },
        set: function (val) {
            this._delegate.instrumentationEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerformanceCompatImpl.prototype, "dataCollectionEnabled", {
        get: function () {
            return this._delegate.dataCollectionEnabled;
        },
        set: function (val) {
            this._delegate.dataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    PerformanceCompatImpl.prototype.trace = function (traceName) {
        return trace(this._delegate, traceName);
    };
    return PerformanceCompatImpl;
}());

var name = "@firebase/performance-compat";
var version = "0.1.12";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerPerformanceCompat(firebaseInstance) {
    firebaseInstance.INTERNAL.registerComponent(new Component('performance-compat', performanceFactory, "PUBLIC" /* PUBLIC */));
    firebaseInstance.registerVersion(name, version);
}
function performanceFactory(container) {
    var app = container.getProvider('app-compat').getImmediate();
    // The following call will always succeed.
    var performance = container.getProvider('performance').getImmediate();
    return new PerformanceCompatImpl(app, performance);
}
registerPerformanceCompat(firebase);
//# sourceMappingURL=index.esm5.js.map
