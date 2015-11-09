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
                "line": 4,
                "column": 6
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n	greeting: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [0]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["content", "greeting", ["loc", [null, [2, 11], [2, 23]]]], ["content", "second-comp", ["loc", [null, [3, 1], [3, 16]]]]],
          locals: [],
          templates: []
        };
      })()));
    }
  };
});