eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"ember-cats/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'ember-cats\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'ember-cats\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=ember-cats/app.js");

;eval("define(\"ember-cats/config/environment\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=ember-cats/config/environment.js");

;eval("define(\"ember-cats/models/cats\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      name: DS.attr(\'string\')\n    });\n  });//# sourceURL=ember-cats/models/cats.js");

;eval("define(\"ember-cats/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: EmberCatsENV.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=ember-cats/router.js");

;eval("define(\"ember-cats/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h2 id=\'title\'>Welcome to Ember.js</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-cats/templates/application.js");

;eval("define(\"ember-cats/templates/cats\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n    <p>Hello \");\n      stack1 = helpers._triageMustache.call(depth0, \"name\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</p>\\n  \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<div>\\n  \");\n      stack1 = helpers.each.call(depth0, \"cat\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=ember-cats/templates/cats.js");

;eval("define(\"ember-cats/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/app.jshint.js");

;eval("define(\"ember-cats/tests/ember-cats/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cats/tests/helpers\');\n    test(\'ember-cats/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'ember-cats/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/ember-cats/tests/helpers/resolver.jshint.js");

;eval("define(\"ember-cats/tests/ember-cats/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cats/tests/helpers\');\n    test(\'ember-cats/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'ember-cats/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/ember-cats/tests/helpers/start-app.jshint.js");

;eval("define(\"ember-cats/tests/ember-cats/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cats/tests\');\n    test(\'ember-cats/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'ember-cats/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/ember-cats/tests/test-helper.jshint.js");

;eval("define(\"ember-cats/tests/ember-cats/tests/unit/models/cats-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cats/tests/unit/models\');\n    test(\'ember-cats/tests/unit/models/cats-test.js should pass jshint\', function() { \n      ok(true, \'ember-cats/tests/unit/models/cats-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/ember-cats/tests/unit/models/cats-test.jshint.js");

;eval("define(\"ember-cats/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'ember-cats\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=ember-cats/tests/helpers/resolver.js");

;eval("define(\"ember-cats/tests/helpers/start-app\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global require */\n\n    var Application = require(\'ember-cats/app\')[\'default\'];\n    var Router = require(\'ember-cats/router\')[\'default\'];\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION: false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=ember-cats/tests/helpers/start-app.js");

;eval("define(\"ember-cats/tests/models/cats.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/cats.js should pass jshint\', function() { \n      ok(true, \'models/cats.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/models/cats.jshint.js");

;eval("define(\"ember-cats/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=ember-cats/tests/router.jshint.js");

;eval("define(\"ember-cats/tests/test-helper\", \n  [\"ember-cats/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    if (QUnit.urlParams.nocontainer) {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'hidden\';\n    } else {\n      document.getElementById(\'ember-testing-container\').style.visibility = \'visible\';\n    }\n  });//# sourceURL=ember-cats/tests/test-helper.js");

;eval("define(\"ember-cats/tests/unit/models/cats-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'cats\', \'Cats\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=ember-cats/tests/unit/models/cats-test.js");
