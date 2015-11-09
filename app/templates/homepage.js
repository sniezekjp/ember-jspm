"use strict";

System.register(["ember"], function (_export) {
  var Ember;
  return {
    setters: [function (_ember) {
      Ember = _ember.default;
    }],
    execute: function () {
      _export("default", Ember.HTMLBars.template((function () {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 10
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("homepage");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
          locals: [],
          templates: []
        };
      })()));
    }
  };
});