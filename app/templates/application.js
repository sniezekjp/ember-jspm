"use strict";

System.register(["ember"], function (_export) {
  var Ember;
  return {
    setters: [function (_ember) {
      Ember = _ember.default;
    }],
    execute: function () {
      _export("default", Ember.HTMLBars.template((function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.0.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 1
                },
                "end": {
                  "line": 4,
                  "column": 24
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("APP");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.0.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 1
                },
                "end": {
                  "line": 5,
                  "column": 29
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("HOME!");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.0.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 1
                },
                "end": {
                  "line": 6,
                  "column": 27
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("other!");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

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
                "line": 8,
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
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("--- start below --");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [0]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(element0, 3, 3);
            morphs[1] = dom.createMorphAt(element0, 5, 5);
            morphs[2] = dom.createMorphAt(element0, 9, 9);
            morphs[3] = dom.createMorphAt(element0, 13, 13);
            morphs[4] = dom.createMorphAt(fragment, 2, 2, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "first-comp", [], ["greeting", "Greeting override!!"], ["loc", [null, [3, 1], [3, 46]]]], ["block", "link-to", ["index"], [], 0, null, ["loc", [null, [4, 1], [4, 36]]]], ["block", "link-to", ["homepage"], [], 1, null, ["loc", [null, [5, 1], [5, 41]]]], ["block", "link-to", ["other"], [], 2, null, ["loc", [null, [6, 1], [6, 39]]]], ["content", "outlet", ["loc", [null, [8, 0], [8, 10]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })()));
    }
  };
});