(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var objectWithoutProperties = __webpack_require__(8),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Button = __webpack_require__(679),
        taggedTemplateLiteral = __webpack_require__(4),
        objectSpread2 = __webpack_require__(206),
        slicedToArray = __webpack_require__(27),
        styled_components_browser_esm = __webpack_require__(5);
      function _templateObject5() {
        var data = Object(taggedTemplateLiteral.a)(["\n  ", ";\n"]);
        return (
          (_templateObject5 = function _templateObject5() {
            return data;
          }),
          data
        );
      }
      function _templateObject4() {
        var data = Object(taggedTemplateLiteral.a)(["\n  ", ";\n"]);
        return (
          (_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function _templateObject3() {
        var data = Object(taggedTemplateLiteral.a)(["\n  ", ";\n"]);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        var data = Object(taggedTemplateLiteral.a)(["\n  ", ";\n"]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)(["\n  ", ";\n"]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var ContentContext = Object(react.createContext)({
          lang: "",
          setLang: function setLang() {},
          theme: {},
          contentNodes: {},
          addContentNodes: function addContentNodes() {}
        }),
        Content_ContentProvider = function ContentProvider(_ref) {
          var children = _ref.children,
            defaultLang = _ref.lang,
            content = _ref.content,
            defaultContentNodes = content.contentNodes,
            theme = content.theme,
            _useState = Object(react.useState)(defaultLang || "en"),
            _useState2 = Object(slicedToArray.a)(_useState, 2),
            lang = _useState2[0],
            setLang = _useState2[1],
            _useState3 = Object(react.useState)(defaultContentNodes || {}),
            _useState4 = Object(slicedToArray.a)(_useState3, 2),
            contentNodes = _useState4[0],
            setContentNodes = _useState4[1];
          return react_default.a.createElement(
            ContentContext.Provider,
            {
              value: {
                lang: lang,
                setLang: setLang,
                contentNodes: contentNodes,
                addContentNodes: function addContentNodes(nodes) {
                  setContentNodes(
                    Object(objectSpread2.a)({}, contentNodes, {}, nodes)
                  );
                },
                theme: theme
              }
            },
            children
          );
        };
      var Content_withContent = function withContent(WrappedComponent) {
          return Object(react.forwardRef)(function(_ref2, ref) {
            var style = _ref2.style,
              contentKey = _ref2.contentKey,
              _ref2$contentParams = _ref2.contentParams,
              contentParams =
                void 0 === _ref2$contentParams ? {} : _ref2$contentParams,
              render = _ref2.render,
              children = _ref2.children,
              rest = Object(objectWithoutProperties.a)(_ref2, [
                "style",
                "contentKey",
                "contentParams",
                "render",
                "children"
              ]),
              _useContext = Object(react.useContext)(ContentContext),
              lang = _useContext.lang,
              contentNodes = _useContext.contentNodes,
              theme = _useContext.theme,
              copyToRender = (function interpolate(string, params) {
                return string.split(/\${|}/gm).reduce(function(prev, curr, i) {
                  return i % 2 == 0 ? prev + curr : prev + params[curr];
                }, "");
              })(contentNodes[contentKey].copy[lang], contentParams);
            return react_default.a.createElement(
              WrappedComponent,
              Object.assign(
                {
                  ref: ref,
                  style: Object(objectSpread2.a)(
                    {},
                    contentNodes[contentKey].style,
                    {},
                    style
                  ),
                  theme: theme
                },
                rest
              ),
              render ? render(copyToRender) : copyToRender,
              children
            );
          });
        },
        Content_useContent = function useContent() {
          return Object(react.useContext)(ContentContext);
        },
        baseTextStyles = Object(styled_components_browser_esm.a)(
          _templateObject(),
          function(props) {
            return props.centered && "\n    text-align: center;\n  ";
          }
        ),
        H1 = Content_withContent(
          styled_components_browser_esm.b.h1(_templateObject2(), baseTextStyles)
        ),
        P =
          (Content_withContent(
            styled_components_browser_esm.b.h2(
              _templateObject3(),
              baseTextStyles
            )
          ),
          Content_withContent(
            styled_components_browser_esm.b.p(
              _templateObject4(),
              baseTextStyles
            )
          )),
        colors_GRAY =
          (Content_withContent(
            styled_components_browser_esm.b.span(
              _templateObject5(),
              baseTextStyles
            )
          ),
          Content_withContent(function(_ref) {
            var children = _ref.children,
              rest = Object(objectWithoutProperties.a)(_ref, ["children"]);
            return react_default.a.createElement(Button.a, rest, children);
          }),
          "#A4A4A4"),
        colors_DISABLED_GRAY = "#d5d5d5",
        colors_BLUE = "#7fabff",
        colors_BATTLESHIP_GREY = "#74777a",
        colors_PALE_GREY = "#f5f6fa";
      function ButtonPrimary_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  color: ",
          ";\n  background-color: ",
          ";\n  line-height: 36px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: bold;\n  border: none;\n  border-radius: 28px !important;\n  padding: 1px 24px 0;\n  text-align: center;\n  cursor: ",
          ";\n"
        ]);
        return (
          (ButtonPrimary_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var StyledButton = styled_components_browser_esm.b.button(
          ButtonPrimary_templateObject(),
          function(props) {
            return props.disabled
              ? colors_BATTLESHIP_GREY
              : props.themeObj.colors.primary.dark;
          },
          function(props) {
            return props.disabled
              ? colors_DISABLED_GRAY
              : props.themeObj.colors.primary.light;
          },
          function(props) {
            return props.disabled ? "not-allowed" : "pointer";
          }
        ),
        ButtonPrimary = Content_withContent(function(_ref) {
          var children = _ref.children,
            theme = _ref.theme,
            rest = Object(objectWithoutProperties.a)(_ref, [
              "children",
              "theme"
            ]);
          return react_default.a.createElement(
            StyledButton,
            Object.assign({}, rest, { themeObj: theme }),
            children
          );
        }),
        Dialog = __webpack_require__(680),
        DialogState = __webpack_require__(318),
        Tabbable = __webpack_require__(317),
        index_esm = __webpack_require__(321);
      function mediaHelper_templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n    @media (max-width: ",
          "px) {\n      ",
          "\n    }\n  "
        ]);
        return (
          (mediaHelper_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      var sizes_mobile = 749,
        device_mobile = function mobile() {
          return Object(styled_components_browser_esm.a)(
            mediaHelper_templateObject3(),
            sizes_mobile,
            styled_components_browser_esm.a.apply(void 0, arguments)
          );
        };
      function _templateObject7() {
        var data = Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n"]);
        return (
          (_templateObject7 = function _templateObject7() {
            return data;
          }),
          data
        );
      }
      function _templateObject6() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n    display: none;\n  "
        ]);
        return (
          (_templateObject6 = function _templateObject6() {
            return data;
          }),
          data
        );
      }
      function DialogFullScreen_templateObject5() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  display: block;\n  margin-top: 8px;\n  color: ",
          ";\n  ",
          ";\n"
        ]);
        return (
          (DialogFullScreen_templateObject5 = function _templateObject5() {
            return data;
          }),
          data
        );
      }
      function DialogFullScreen_templateObject4() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n    top: 28px;\n    right: 28px;\n  "
        ]);
        return (
          (DialogFullScreen_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function DialogFullScreen_templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  position: absolute;\n  top: 62px;\n  right: 62px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n  border: none;\n  ",
          "\n"
        ]);
        return (
          (DialogFullScreen_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function DialogFullScreen_templateObject2() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n    padding: 28px;\n  "
        ]);
        return (
          (DialogFullScreen_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function DialogFullScreen_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",
          ";\n  padding: 62px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n  ",
          "\n"
        ]);
        return (
          (DialogFullScreen_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var StyledDialog = Object(styled_components_browser_esm.b)(Dialog.a)(
          DialogFullScreen_templateObject(),
          colors_PALE_GREY,
          device_mobile(DialogFullScreen_templateObject2())
        ),
        StyledCloseContainer = Object(styled_components_browser_esm.b)(
          Tabbable.a
        )(
          DialogFullScreen_templateObject3(),
          device_mobile(DialogFullScreen_templateObject4())
        ),
        StyledCloseText = styled_components_browser_esm.b.span(
          DialogFullScreen_templateObject5(),
          colors_GRAY,
          device_mobile(_templateObject6())
        ),
        StyledChildrenContainer = styled_components_browser_esm.b.div(
          _templateObject7()
        ),
        closeCopy = { en: "esc", fr: "fermer" },
        DialogFullScreen_DialogFullScreen = function DialogFullScreen(_ref) {
          var _theme$colors,
            _theme$colors$primary,
            label = _ref.label,
            children = _ref.children,
            baseId = _ref.baseId,
            visible = _ref.visible,
            hide = _ref.hide,
            hideOnClickOutside = _ref.hideOnClickOutside,
            rest = Object(objectWithoutProperties.a)(_ref, [
              "label",
              "children",
              "baseId",
              "visible",
              "hide",
              "hideOnClickOutside"
            ]),
            _useContent = Content_useContent(),
            lang = _useContent.lang,
            theme = _useContent.theme;
          return react_default.a.createElement(
            StyledDialog,
            Object.assign(
              {
                "aria-label": label,
                baseId: baseId,
                visible: visible,
                hide: hide,
                hideOnClickOutside: hideOnClickOutside || !1
              },
              rest
            ),
            visible &&
              react_default.a.createElement(
                StyledChildrenContainer,
                null,
                children
              ),
            react_default.a.createElement(
              StyledCloseContainer,
              { onClick: hide },
              react_default.a.createElement(index_esm.a, {
                size: "24px",
                color:
                  (null === (_theme$colors = theme.colors) ||
                  void 0 === _theme$colors
                    ? void 0
                    : null ===
                        (_theme$colors$primary = _theme$colors.primary) ||
                      void 0 === _theme$colors$primary
                    ? void 0
                    : _theme$colors$primary.dark) || colors_BLUE
              }),
              react_default.a.createElement(
                StyledCloseText,
                null,
                closeCopy[lang]
              )
            )
          );
        },
        useDialog = DialogState.a;
      function RadioCards_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  box-shadow: ",
          ";\n  background-color: ",
          ";\n  border-width: 2px;\n  border-style: solid;\n  border-color: ",
          ";\n  border-radius: 16px;\n  padding: 16px;\n  margin-top: 8px;\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-bottom: 32px;\n  cursor: pointer;\n"
        ]);
        return (
          (RadioCards_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var StyledCard = Object(styled_components_browser_esm.b)(Button.a)(
          RadioCards_templateObject(),
          "0 2px 23px 0 rgba(0, 0, 0, 0.12)",
          function(props) {
            return props.selected ? props.theme.colors.primary.light : "#fff";
          },
          function(props) {
            return props.selected
              ? props.theme.colors.primary.dark
              : "transparent";
          }
        ),
        RadioContext = Object(react.createContext)({
          name: "",
          value: "",
          setValue: function setValue() {}
        }),
        RadioCards_RadioCards = function RadioCards(_ref) {
          var name = _ref.name,
            value = _ref.value,
            setFieldValue = _ref.setFieldValue,
            children = _ref.children;
          return react_default.a.createElement(
            RadioContext.Provider,
            {
              value: {
                name: name,
                value: value,
                setValue: function setValue(value) {
                  return setFieldValue(name, value);
                }
              }
            },
            children
          );
        },
        RadioCards_RadioCard = function RadioCard(_ref2) {
          var value = _ref2.value,
            children = _ref2.children,
            rest = Object(objectWithoutProperties.a)(_ref2, [
              "value",
              "children"
            ]),
            _useContext = Object(react.useContext)(RadioContext),
            selectedValue = _useContext.value,
            setValue = _useContext.setValue,
            handleClick = Object(react.useCallback)(
              function(e) {
                e.preventDefault(), setValue(value);
              },
              [value]
            ),
            theme = Content_useContent().theme,
            selected = value === selectedValue;
          return react_default.a.createElement(
            StyledCard,
            Object.assign({ selected: selected, theme: theme }, rest, {
              role: "radio",
              onClick: handleClick
            }),
            children({ selected: selected })
          );
        };
      function Input_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  width: ",
          ";\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid ",
          ";\n  font-size: 1rem;\n  &:focus {\n    outline: none;\n    border-color: ",
          ";\n  }\n"
        ]);
        return (
          (Input_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var StyledInput = styled_components_browser_esm.b.input(
          Input_templateObject(),
          function(props) {
            return props.width || "100%";
          },
          function(props) {
            return props.theme.colors.primary.light;
          },
          function(props) {
            return props.theme.colors.primary.dark;
          }
        ),
        Input_Input = function Input(_ref) {
          var contentKey = _ref.contentKey,
            rest = Object(objectWithoutProperties.a)(_ref, ["contentKey"]),
            _useContent = Content_useContent(),
            lang = _useContent.lang,
            contentNodes = _useContent.contentNodes,
            theme = _useContent.theme,
            placeholder = contentNodes[contentKey].copy[lang];
          return react_default.a.createElement(
            StyledInput,
            Object.assign({ placeholder: placeholder, theme: theme }, rest)
          );
        },
        getWidth = function getWidth() {
          return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
          );
        };
      function Carousel_templateObject4() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  width: 100%;\n  display: ",
          ";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (Carousel_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function Carousel_templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  width: ",
          ";\n  visibility: ",
          ";\n"
        ]);
        return (
          (Carousel_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function Carousel_templateObject2() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  width: ",
          ";\n  transform: ",
          ";\n  display: ",
          ";\n  transition: 0.2s all;\n"
        ]);
        return (
          (Carousel_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function Carousel_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  width: 100%;\n  position: relative;\n  overflow-x: hidden;\n"
        ]);
        return (
          (Carousel_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      var StyledContainer = styled_components_browser_esm.b.div(
          Carousel_templateObject()
        ),
        StyledInner = styled_components_browser_esm.b.div(
          Carousel_templateObject2(),
          function(props) {
            return props.pageWidth * props.count + "px";
          },
          function(props) {
            return "translateX(-".concat(
              props.pageWidth * props.pageIndex,
              "px)"
            );
          },
          function(props) {
            return 0 === props.pageWidth ? "none" : "flex";
          }
        ),
        Carousel_useCarousel = function useCarousel(_ref) {
          var numOfPages = _ref.numOfPages,
            _useState = Object(react.useState)(0),
            _useState2 = Object(slicedToArray.a)(_useState, 2),
            pageIndex = _useState2[0],
            setPageIndex = _useState2[1];
          return {
            pageIndex: pageIndex,
            goTo: function goTo(index) {
              return setPageIndex(index);
            },
            back: function back() {
              return pageIndex > 0 && setPageIndex(pageIndex - 1);
            },
            forward: function forward() {
              return pageIndex < numOfPages - 1 && setPageIndex(pageIndex + 1);
            }
          };
        },
        Carousel_Carousel = function Carousel(_ref2) {
          var pageIndex = _ref2.pageIndex,
            pages = _ref2.pages,
            rest = Object(objectWithoutProperties.a)(_ref2, [
              "pageIndex",
              "pages"
            ]),
            _useState3 = Object(react.useState)(0),
            _useState4 = Object(slicedToArray.a)(_useState3, 2),
            pageWidth = _useState4[0],
            setPageWidth = _useState4[1],
            windowWidth = (function useWindowWidth() {
              var _useState = Object(react.useState)(getWidth()),
                _useState2 = Object(slicedToArray.a)(_useState, 2),
                width = _useState2[0],
                setWidth = _useState2[1];
              return (
                Object(react.useEffect)(function() {
                  var timeoutId = null,
                    resizeListener = function resizeListener() {
                      clearTimeout(timeoutId),
                        (timeoutId = setTimeout(function() {
                          return setWidth(getWidth());
                        }, 100));
                    };
                  return (
                    window.addEventListener("resize", resizeListener),
                    function() {
                      window.removeEventListener("resize", resizeListener);
                    }
                  );
                }, []),
                width
              );
            })(),
            container = Object(react.useRef)();
          return (
            Object(react.useEffect)(
              function() {
                !(function getClientWidth(ref, cb) {
                  ref.current && ref.current.clientWidth > 0
                    ? cb(ref.current.clientWidth)
                    : window.requestAnimationFrame(function() {
                        return getClientWidth(ref, cb);
                      });
                })(container, function(clientWidth) {
                  setPageWidth(clientWidth);
                });
              },
              [windowWidth]
            ),
            react_default.a.createElement(
              StyledContainer,
              Object.assign({ ref: container }, rest),
              react_default.a.createElement(
                StyledInner,
                {
                  count: pages.length,
                  pageIndex: pageIndex,
                  pageWidth: pageWidth
                },
                pages.map(function(page, i) {
                  return react_default.a.createElement(
                    Carousel_CarouselPage,
                    { pageWidth: pageWidth, shouldRender: pageIndex === i },
                    page
                  );
                })
              )
            )
          );
        },
        StyledPageContainer = styled_components_browser_esm.b.div(
          Carousel_templateObject3(),
          function(props) {
            return props.pageWidth + "px" || !1;
          },
          function(props) {
            return props.shouldRender ? "visible" : "hidden";
          }
        ),
        StyledPageInner = styled_components_browser_esm.b.div(
          Carousel_templateObject4(),
          function(props) {
            return props.shouldRender ? "flex" : "none";
          }
        ),
        Carousel_CarouselPage = function CarouselPage(_ref3) {
          var pageWidth = _ref3.pageWidth,
            shouldRender = _ref3.shouldRender,
            children = _ref3.children;
          return react_default.a.createElement(
            StyledPageContainer,
            { pageWidth: pageWidth, shouldRender: shouldRender },
            react_default.a.createElement(
              StyledPageInner,
              { shouldRender: shouldRender },
              children
            )
          );
        };
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return ButtonPrimary;
      }),
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return Content_ContentProvider;
        }),
        __webpack_require__.d(__webpack_exports__, "k", function() {
          return Content_useContent;
        }),
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return H1;
        }),
        __webpack_require__.d(__webpack_exports__, "g", function() {
          return P;
        }),
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return DialogFullScreen_DialogFullScreen;
        }),
        __webpack_require__.d(__webpack_exports__, "l", function() {
          return useDialog;
        }),
        __webpack_require__.d(__webpack_exports__, "i", function() {
          return RadioCards_RadioCards;
        }),
        __webpack_require__.d(__webpack_exports__, "h", function() {
          return RadioCards_RadioCard;
        }),
        __webpack_require__.d(__webpack_exports__, "f", function() {
          return Input_Input;
        }),
        __webpack_require__.d(__webpack_exports__, "j", function() {
          return Carousel_useCarousel;
        }),
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return Carousel_Carousel;
        });
    },
    324: function(module, exports, __webpack_require__) {
      __webpack_require__(325),
        __webpack_require__(471),
        (module.exports = __webpack_require__(472));
    },
    389: function(module, exports) {},
    472: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            312
          );
          (module._StorybookPreserveDecorators = !0),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
              [__webpack_require__(651)],
              module
            );
        }.call(this, __webpack_require__(126)(module));
    },
    651: function(module, exports, __webpack_require__) {
      var map = {
        "./0-Welcome.stories.tsx": 652,
        "./components/Button/Button.stories.tsx": 673,
        "./components/Carousel/Carousel.stories.tsx": 674,
        "./components/Content/Content.stories.tsx": 675,
        "./components/Dialog.stories.tsx": 668,
        "./components/Input.stories.tsx": 669,
        "./components/RadioCards.stories.tsx": 670,
        "./recipes/CarouselInDialog.stories.tsx": 671,
        "./recipes/Wizard.stories.tsx": 672
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 651);
    },
    652: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "ToStorybook", function() {
          return ToStorybook;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          313
        ),
        _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          204
        ),
        addSourceDecorator =
          (__webpack_require__(17).withSource,
          __webpack_require__(17).addSource);
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              "import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",
            locationsMap: {
              "welcome--to-storybook": {
                startLoc: { col: 27, line: 10 },
                endLoc: { col: 71, line: 10 },
                startBody: { col: 27, line: 10 },
                endBody: { col: 71, line: 10 }
              }
            }
          }
        },
        title: "Welcome",
        component: _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome
      };
      var ToStorybook = addSourceDecorator(
        function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,
            {
              showApp: Object(
                _storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo
              )("Button")
            }
          );
        },
        {
          __STORY__:
            "import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",
          __ADDS_MAP__: {
            "welcome--to-storybook": {
              startLoc: { col: 27, line: 10 },
              endLoc: { col: 71, line: 10 },
              startBody: { col: 27, line: 10 },
              endBody: { col: 71, line: 10 }
            }
          },
          __MAIN_FILE_LOCATION__: "/0-Welcome.stories.tsx",
          __MODULE_DEPENDENCIES__: [],
          __LOCAL_DEPENDENCIES__: {},
          __SOURCE_PREFIX__: "/Users/jyoo/Documents/projects/yuhui/stories",
          __IDS_TO_FRAMEWORKS__: {}
        }
      );
      ToStorybook.story = { name: "to Storybook" };
    },
    668: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "FullscreenDialog",
          function() {
            return FullscreenDialog;
          }
        );
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        addSourceDecorator =
          (__webpack_require__(17).withSource,
          __webpack_require__(17).addSource);
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import React from "react";\nimport {\n  ContentProvider,\n  DialogFullScreen,\n  useDialog,\n  ButtonPrimary,\n  P\n} from "../../src";\n\nexport default {\n  title: "Components/Dialog"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  },\n  "demo.P": {\n    copy: {\n      en: "Hello",\n      fr: "Bounjour"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const FullscreenDialog = () => (\n  <ContentProvider lang="en" content={content}>\n    <Dialogs />\n  </ContentProvider>\n);\n\nconst Dialogs = () => {\n  const dialog = useDialog();\n  return (\n    <div>\n      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />\n      <DialogFullScreen label="Hello" {...dialog}>\n        <P contentKey="demo.P" centered />\n      </DialogFullScreen>\n    </div>\n  );\n};\n',
            locationsMap: {
              "components-dialog--fullscreen-dialog": {
                startLoc: { col: 32, line: 43 },
                endLoc: { col: 1, line: 47 },
                startBody: { col: 32, line: 43 },
                endBody: { col: 1, line: 47 }
              }
            }
          }
        },
        title: "Components/Dialog"
      };
      var content = {
          contentNodes: {
            "demo.Button": {
              copy: { en: "Toggle Dialog", fr: "Toggle Dialog" }
            },
            "demo.P": { copy: { en: "Hello", fr: "Bounjour" } }
          },
          theme: { colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } } }
        },
        FullscreenDialog = addSourceDecorator(
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_1__.c,
              { lang: "en", content: content },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Dialogs,
                null
              )
            );
          },
          {
            __STORY__:
              'import React from "react";\nimport {\n  ContentProvider,\n  DialogFullScreen,\n  useDialog,\n  ButtonPrimary,\n  P\n} from "../../src";\n\nexport default {\n  title: "Components/Dialog"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  },\n  "demo.P": {\n    copy: {\n      en: "Hello",\n      fr: "Bounjour"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const FullscreenDialog = () => (\n  <ContentProvider lang="en" content={content}>\n    <Dialogs />\n  </ContentProvider>\n);\n\nconst Dialogs = () => {\n  const dialog = useDialog();\n  return (\n    <div>\n      <ButtonPrimary contentKey="demo.Button" onClick={dialog.toggle} />\n      <DialogFullScreen label="Hello" {...dialog}>\n        <P contentKey="demo.P" centered />\n      </DialogFullScreen>\n    </div>\n  );\n};\n',
            __ADDS_MAP__: {
              "components-dialog--fullscreen-dialog": {
                startLoc: { col: 32, line: 43 },
                endLoc: { col: 1, line: 47 },
                startBody: { col: 32, line: 43 },
                endBody: { col: 1, line: 47 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Dialog.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components",
            __IDS_TO_FRAMEWORKS__: {}
          }
        ),
        Dialogs = function Dialogs() {
          var dialog = Object(_src__WEBPACK_IMPORTED_MODULE_1__.l)();
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_1__.a,
              { contentKey: "demo.Button", onClick: dialog.toggle }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_1__.d,
              Object.assign({ label: "Hello" }, dialog),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_1__.g,
                { contentKey: "demo.P", centered: !0 }
              )
            )
          );
        };
    },
    669: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Inputs", function() {
          return Inputs;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        addSourceDecorator =
          (__webpack_require__(17).withSource,
          __webpack_require__(17).addSource);
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import React from "react";\n\nimport { ContentProvider, Input } from "../../src";\n\nexport default {\n  title: "Components/Input"\n};\n\nconst contentNodes = {\n  "demo.placeholder": {\n    copy: {\n      en: "placeholder value",\n      fr: "placeholder value"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Inputs = () => (\n  <ContentProvider lang="en" content={content}>\n    <Input type="text" contentKey="demo.placeholder" />\n  </ContentProvider>\n);\n',
            locationsMap: {
              "components-input--inputs": {
                startLoc: { col: 22, line: 32 },
                endLoc: { col: 1, line: 36 },
                startBody: { col: 22, line: 32 },
                endBody: { col: 1, line: 36 }
              }
            }
          }
        },
        title: "Components/Input"
      };
      var content = {
          contentNodes: {
            "demo.placeholder": {
              copy: { en: "placeholder value", fr: "placeholder value" }
            }
          },
          theme: { colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } } }
        },
        Inputs = addSourceDecorator(
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_1__.c,
              { lang: "en", content: content },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_1__.f,
                { type: "text", contentKey: "demo.placeholder" }
              )
            );
          },
          {
            __STORY__:
              'import React from "react";\n\nimport { ContentProvider, Input } from "../../src";\n\nexport default {\n  title: "Components/Input"\n};\n\nconst contentNodes = {\n  "demo.placeholder": {\n    copy: {\n      en: "placeholder value",\n      fr: "placeholder value"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Inputs = () => (\n  <ContentProvider lang="en" content={content}>\n    <Input type="text" contentKey="demo.placeholder" />\n  </ContentProvider>\n);\n',
            __ADDS_MAP__: {
              "components-input--inputs": {
                startLoc: { col: 22, line: 32 },
                endLoc: { col: 1, line: 36 },
                startBody: { col: 22, line: 32 },
                endBody: { col: 1, line: 36 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Input.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components",
            __IDS_TO_FRAMEWORKS__: {}
          }
        );
    },
    670: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Radio_Cards", function() {
          return Radio_Cards;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22),
        _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
        addSourceDecorator =
          (__webpack_require__(17).withSource,
          __webpack_require__(17).addSource);
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import React from "react";\nimport { Formik, Form } from "formik";\n\nimport { ContentProvider, RadioCards, RadioCard } from "../../src";\n\nexport default {\n  title: "Components/Input"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Radio_Cards = () => (\n  <ContentProvider lang="en" content={content}>\n    <RadioInputs />\n  </ContentProvider>\n);\n\nconst RadioInputs = () => {\n  return (\n    <Formik\n      initialValues={{\n        choice: "",\n        number: ""\n      }}\n      onSubmit={values => console.log(values)}\n    >\n      {({ values, setFieldValue }) => (\n        <Form name="form_1">\n          <RadioCards\n            name="choice"\n            setFieldValue={setFieldValue}\n            value={values.choice}\n          >\n            <RadioCard value="hello">\n              {({ selected }) => (\n                <div>\n                  <p>Hello {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n            <RadioCard value="world">\n              {({ selected }) => (\n                <div>\n                  <p>World {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n          </RadioCards>\n          <RadioCards\n            name="number"\n            setFieldValue={setFieldValue}\n            value={values.number}\n          >\n            <RadioCard value="1">\n              {({ selected }) => (\n                <div>\n                  <p>1 {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n            <RadioCard value="2">\n              {({ selected }) => (\n                <div>\n                  <p>2 {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n          </RadioCards>\n          <div>\n            form values\n            {JSON.stringify(values)}\n          </div>\n        </Form>\n      )}\n    </Formik>\n  );\n};\n',
            locationsMap: {
              "components-input--radio-cards": {
                startLoc: { col: 27, line: 33 },
                endLoc: { col: 1, line: 37 },
                startBody: { col: 27, line: 33 },
                endBody: { col: 1, line: 37 }
              }
            }
          }
        },
        title: "Components/Input"
      };
      var content = {
          contentNodes: {
            "demo.Button": {
              copy: { en: "Toggle Dialog", fr: "Toggle Dialog" }
            }
          },
          theme: { colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } } }
        },
        Radio_Cards = addSourceDecorator(
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_2__.c,
              { lang: "en", content: content },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                RadioInputs,
                null
              )
            );
          },
          {
            __STORY__:
              'import React from "react";\nimport { Formik, Form } from "formik";\n\nimport { ContentProvider, RadioCards, RadioCard } from "../../src";\n\nexport default {\n  title: "Components/Input"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Radio_Cards = () => (\n  <ContentProvider lang="en" content={content}>\n    <RadioInputs />\n  </ContentProvider>\n);\n\nconst RadioInputs = () => {\n  return (\n    <Formik\n      initialValues={{\n        choice: "",\n        number: ""\n      }}\n      onSubmit={values => console.log(values)}\n    >\n      {({ values, setFieldValue }) => (\n        <Form name="form_1">\n          <RadioCards\n            name="choice"\n            setFieldValue={setFieldValue}\n            value={values.choice}\n          >\n            <RadioCard value="hello">\n              {({ selected }) => (\n                <div>\n                  <p>Hello {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n            <RadioCard value="world">\n              {({ selected }) => (\n                <div>\n                  <p>World {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n          </RadioCards>\n          <RadioCards\n            name="number"\n            setFieldValue={setFieldValue}\n            value={values.number}\n          >\n            <RadioCard value="1">\n              {({ selected }) => (\n                <div>\n                  <p>1 {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n            <RadioCard value="2">\n              {({ selected }) => (\n                <div>\n                  <p>2 {selected && "*"}</p>\n                </div>\n              )}\n            </RadioCard>\n          </RadioCards>\n          <div>\n            form values\n            {JSON.stringify(values)}\n          </div>\n        </Form>\n      )}\n    </Formik>\n  );\n};\n',
            __ADDS_MAP__: {
              "components-input--radio-cards": {
                startLoc: { col: 27, line: 33 },
                endLoc: { col: 1, line: 37 },
                startBody: { col: 27, line: 33 },
                endBody: { col: 1, line: 37 }
              }
            },
            __MAIN_FILE_LOCATION__: "/RadioCards.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components",
            __IDS_TO_FRAMEWORKS__: {}
          }
        ),
        RadioInputs = function RadioInputs() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_1__.c,
            {
              initialValues: { choice: "", number: "" },
              onSubmit: function onSubmit(values) {
                return console.log(values);
              }
            },
            function(_ref) {
              var values = _ref.values,
                setFieldValue = _ref.setFieldValue;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__.b,
                { name: "form_1" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_2__.i,
                  {
                    name: "choice",
                    setFieldValue: setFieldValue,
                    value: values.choice
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_2__.h,
                    { value: "hello" },
                    function(_ref2) {
                      var selected = _ref2.selected;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "p",
                          null,
                          "Hello ",
                          selected && "*"
                        )
                      );
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_2__.h,
                    { value: "world" },
                    function(_ref3) {
                      var selected = _ref3.selected;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "p",
                          null,
                          "World ",
                          selected && "*"
                        )
                      );
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_2__.i,
                  {
                    name: "number",
                    setFieldValue: setFieldValue,
                    value: values.number
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_2__.h,
                    { value: "1" },
                    function(_ref4) {
                      var selected = _ref4.selected;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "p",
                          null,
                          "1 ",
                          selected && "*"
                        )
                      );
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_2__.h,
                    { value: "2" },
                    function(_ref5) {
                      var selected = _ref5.selected;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "p",
                          null,
                          "2 ",
                          selected && "*"
                        )
                      );
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "div",
                  null,
                  "form values",
                  JSON.stringify(values)
                )
              );
            }
          );
        };
    },
    671: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "CarouselInDialog",
          function() {
            return CarouselInDialog;
          }
        );
      var _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          4
        ),
        _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          27
        ),
        _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          8
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
      function _templateObject2() {
        var data = Object(
          _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )(["\n  padding: 8px;\n  margin-bottom: 16px;\n"]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        var data = Object(
          _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )([
          "\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ",
          ";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      __webpack_require__(17).withSource;
      var addSourceDecorator = __webpack_require__(17).addSource;
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import React, { useState } from "react";\nimport { Formik, Form, Field } from "formik";\nimport styled from "styled-components";\nimport {\n  DialogFullScreen,\n  useDialog,\n  Carousel,\n  useCarousel,\n  ContentProvider,\n  ButtonPrimary,\n  H1\n} from "../../src";\n\nexport default {\n  title: "Recipes/Carousel in Dialog"\n};\n\nconst contentNodes = {\n  "demo.ForwardButton": {\n    copy: {\n      en: "Next",\n      fr: "Next"\n    }\n  },\n  "demo.BackButton": {\n    copy: {\n      en: "Back",\n      fr: "Back"\n    }\n  },\n  "demo.ToggleButton": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  },\n  "demo.H1FirstPage": {\n    copy: {\n      en: "Let\'s get started",\n      fr: "Let\'s get started"\n    }\n  },\n  "demo.H1SecondPage": {\n    copy: {\n      en: "Hi",\n      fr: "Bonjour"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const CarouselInDialog = () => {\n  const dialog = useDialog();\n\n  return (\n    <ContentProvider lang="en" content={content}>\n      <ButtonPrimary contentKey="demo.ToggleButton" onClick={dialog.toggle} />\n      <DialogFullScreen label="Hello" {...dialog}>\n        <CarouselDemo />\n      </DialogFullScreen>\n    </ContentProvider>\n  );\n};\n\nconst CarouselDemo = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 2\n  });\n  const [name, setName] = useState("");\n\n  return (\n    <Carousel\n      pageIndex={pageIndex}\n      pages={[\n        <Page1 forward={forward} setName={setName} />,\n        <Page2 back={back} goTo={goTo} name={name} />\n      ]}\n    />\n  );\n};\n\nconst StyledForm = styled(Form)`\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ${props => (props.hide ? "hidden" : "visible")};\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\n\nconst StyledField = styled(Field)`\n  padding: 8px;\n  margin-bottom: 16px;\n`;\n\nconst Page1 = ({ forward, setName, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{\n        name: ""\n      }}\n      onSubmit={values => {\n        setName(values.name);\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FirstPage" />\n          <StyledField\n            required\n            type="text"\n            name="name"\n            placeholder="Your name"\n          />\n          <div>\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page2 = ({ back, name, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        console.log(values);\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1\n            centered\n            contentKey="demo.H1SecondPage"\n            render={copy => `${copy}, ${name}`}\n          />\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n',
            locationsMap: {
              "recipes-carousel-in-dialog--carousel-in-dialog": {
                startLoc: { col: 32, line: 65 },
                endLoc: { col: 1, line: 76 },
                startBody: { col: 32, line: 65 },
                endBody: { col: 1, line: 76 }
              }
            }
          }
        },
        title: "Recipes/Carousel in Dialog"
      };
      var content = {
          contentNodes: {
            "demo.ForwardButton": { copy: { en: "Next", fr: "Next" } },
            "demo.BackButton": { copy: { en: "Back", fr: "Back" } },
            "demo.ToggleButton": {
              copy: { en: "Toggle Dialog", fr: "Toggle Dialog" }
            },
            "demo.H1FirstPage": {
              copy: { en: "Let's get started", fr: "Let's get started" }
            },
            "demo.H1SecondPage": { copy: { en: "Hi", fr: "Bonjour" } }
          },
          theme: { colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } } }
        },
        CarouselInDialog = addSourceDecorator(
          function() {
            var dialog = Object(_src__WEBPACK_IMPORTED_MODULE_6__.l)();
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_6__.c,
              { lang: "en", content: content },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_6__.a,
                { contentKey: "demo.ToggleButton", onClick: dialog.toggle }
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_6__.d,
                Object.assign({ label: "Hello" }, dialog),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  CarouselDemo,
                  null
                )
              )
            );
          },
          {
            __STORY__:
              'import React, { useState } from "react";\nimport { Formik, Form, Field } from "formik";\nimport styled from "styled-components";\nimport {\n  DialogFullScreen,\n  useDialog,\n  Carousel,\n  useCarousel,\n  ContentProvider,\n  ButtonPrimary,\n  H1\n} from "../../src";\n\nexport default {\n  title: "Recipes/Carousel in Dialog"\n};\n\nconst contentNodes = {\n  "demo.ForwardButton": {\n    copy: {\n      en: "Next",\n      fr: "Next"\n    }\n  },\n  "demo.BackButton": {\n    copy: {\n      en: "Back",\n      fr: "Back"\n    }\n  },\n  "demo.ToggleButton": {\n    copy: {\n      en: "Toggle Dialog",\n      fr: "Toggle Dialog"\n    }\n  },\n  "demo.H1FirstPage": {\n    copy: {\n      en: "Let\'s get started",\n      fr: "Let\'s get started"\n    }\n  },\n  "demo.H1SecondPage": {\n    copy: {\n      en: "Hi",\n      fr: "Bonjour"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const CarouselInDialog = () => {\n  const dialog = useDialog();\n\n  return (\n    <ContentProvider lang="en" content={content}>\n      <ButtonPrimary contentKey="demo.ToggleButton" onClick={dialog.toggle} />\n      <DialogFullScreen label="Hello" {...dialog}>\n        <CarouselDemo />\n      </DialogFullScreen>\n    </ContentProvider>\n  );\n};\n\nconst CarouselDemo = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 2\n  });\n  const [name, setName] = useState("");\n\n  return (\n    <Carousel\n      pageIndex={pageIndex}\n      pages={[\n        <Page1 forward={forward} setName={setName} />,\n        <Page2 back={back} goTo={goTo} name={name} />\n      ]}\n    />\n  );\n};\n\nconst StyledForm = styled(Form)`\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ${props => (props.hide ? "hidden" : "visible")};\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\n\nconst StyledField = styled(Field)`\n  padding: 8px;\n  margin-bottom: 16px;\n`;\n\nconst Page1 = ({ forward, setName, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{\n        name: ""\n      }}\n      onSubmit={values => {\n        setName(values.name);\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FirstPage" />\n          <StyledField\n            required\n            type="text"\n            name="name"\n            placeholder="Your name"\n          />\n          <div>\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page2 = ({ back, name, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        console.log(values);\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1\n            centered\n            contentKey="demo.H1SecondPage"\n            render={copy => `${copy}, ${name}`}\n          />\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n',
            __ADDS_MAP__: {
              "recipes-carousel-in-dialog--carousel-in-dialog": {
                startLoc: { col: 32, line: 65 },
                endLoc: { col: 1, line: 76 },
                startBody: { col: 32, line: 65 },
                endBody: { col: 1, line: 76 }
              }
            },
            __MAIN_FILE_LOCATION__: "/CarouselInDialog.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/recipes",
            __IDS_TO_FRAMEWORKS__: {}
          }
        ),
        CarouselDemo = function CarouselDemo() {
          var _useCarousel = Object(_src__WEBPACK_IMPORTED_MODULE_6__.j)({
              numOfPages: 2
            }),
            pageIndex = _useCarousel.pageIndex,
            goTo = _useCarousel.goTo,
            back = _useCarousel.back,
            forward = _useCarousel.forward,
            _useState =
              (Object(
                _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
              )(_useCarousel, ["pageIndex", "goTo", "back", "forward"]),
              Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("")),
            _useState2 = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a
            )(_useState, 2),
            name = _useState2[0],
            setName = _useState2[1];
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            _src__WEBPACK_IMPORTED_MODULE_6__.b,
            {
              pageIndex: pageIndex,
              pages: [
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  Page1,
                  { forward: forward, setName: setName }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  Page2,
                  { back: back, goTo: goTo, name: name }
                )
              ]
            }
          );
        },
        StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.b)(
          formik__WEBPACK_IMPORTED_MODULE_4__.b
        )(_templateObject(), function(props) {
          return props.hide ? "hidden" : "visible";
        }),
        StyledField = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.b)(
          formik__WEBPACK_IMPORTED_MODULE_4__.a
        )(_templateObject2()),
        Page1 = function Page1(_ref) {
          var forward = _ref.forward,
            setName = _ref.setName,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref, ["forward", "setName"]);
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: { name: "" },
              onSubmit: function onSubmit(values) {
                setName(values.name), forward();
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                rest,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  { centered: !0, contentKey: "demo.H1FirstPage" }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  StyledField,
                  {
                    required: !0,
                    type: "text",
                    name: "name",
                    placeholder: "Your name"
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { contentKey: "demo.ForwardButton" }
                  )
                )
              );
            }
          );
        },
        Page2 = function Page2(_ref2) {
          var back = _ref2.back,
            name = _ref2.name,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref2, ["back", "name"]),
            handleClickBack = function handleClickBack(e) {
              e.preventDefault(), back();
            };
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: {},
              onSubmit: function onSubmit(values) {
                console.log(values);
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                rest,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  {
                    centered: !0,
                    contentKey: "demo.H1SecondPage",
                    render: function render(copy) {
                      return "".concat(copy, ", ").concat(name);
                    }
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { onClick: handleClickBack, contentKey: "demo.BackButton" }
                  )
                )
              );
            }
          );
        };
    },
    672: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "FormWizard", function() {
          return FormWizard;
        });
      var _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          4
        ),
        _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          27
        ),
        _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          8
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
      function _templateObject2() {
        var data = Object(
          _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )(["\n  padding: 8px;\n  margin-bottom: 16px;\n"]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        var data = Object(
          _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )([
          "\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ",
          ";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      __webpack_require__(17).withSource;
      var addSourceDecorator = __webpack_require__(17).addSource;
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import React, { useState } from "react";\nimport { Formik, Form, Field } from "formik";\nimport styled from "styled-components";\nimport {\n  Carousel,\n  useCarousel,\n  ContentProvider,\n  ButtonPrimary,\n  H1\n} from "../../src";\n\nexport default {\n  title: "Recipes/Wizard"\n};\n\nconst contentNodes = {\n  "demo.ForwardButton": {\n    copy: {\n      en: "Next",\n      fr: "Next"\n    }\n  },\n  "demo.BackButton": {\n    copy: {\n      en: "Back",\n      fr: "Back"\n    }\n  },\n  "demo.H1FirstPage": {\n    copy: {\n      en: "Let\'s get started",\n      fr: "Let\'s get started"\n    }\n  },\n  "demo.H1SecondPage": {\n    copy: {\n      en: "Hi",\n      fr: "Bonjour"\n    }\n  },\n  "demo.H1ThirdPage": {\n    copy: {\n      en: "Third Page",\n      fr: "Third Page"\n    }\n  },\n  "demo.H1FourthPage": {\n    copy: {\n      en: "Last Page",\n      fr: "Last Page"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const FormWizard = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 4\n  });\n  const [name, setName] = useState("");\n  const [interested, setInterested] = useState(false);\n\n  return (\n    <ContentProvider lang="en" content={content}>\n      <h1>Carousel</h1>\n      <div\n        style={{\n          width: "80%",\n          margin: "16px auto",\n          border: "1px solid teal"\n        }}\n      >\n        <Carousel pageIndex={pageIndex} {...rest}>\n          <Page1 forward={forward} setName={setName} />\n          <Page2\n            back={back}\n            goTo={goTo}\n            name={name}\n            interested={interested}\n            setInterested={setInterested}\n          />\n          <Page3 back={back} forward={forward} interested={interested} />\n          <Page4 goTo={goTo} interested={interested} />\n        </Carousel>\n      </div>\n    </ContentProvider>\n  );\n};\n\nconst StyledForm = styled(Form)`\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ${props => (props.hide ? "hidden" : "visible")};\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\n\nconst StyledField = styled(Field)`\n  padding: 8px;\n  margin-bottom: 16px;\n`;\n\nconst Page1 = ({ forward, setName, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{\n        name: ""\n      }}\n      onSubmit={values => {\n        setName(values.name);\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FirstPage" />\n          <StyledField\n            required\n            type="text"\n            name="name"\n            placeholder="Your name"\n          />\n          <div>\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page2 = ({ goTo, back, name, interested, setInterested, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{\n        interested: interested\n      }}\n      onSubmit={values => {\n        setInterested(values.interested);\n        if (values.interested) {\n          goTo(2);\n        } else {\n          goTo(3);\n        }\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1\n            centered\n            contentKey="demo.H1SecondPage"\n            render={copy => `${copy}, ${name}`}\n          />\n          <label>\n            <StyledField type="checkbox" name="interested" />\n            Are you interested in seeing the third page?\n          </label>\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page3 = ({ forward, back, interested, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm hide={!interested} {...rest}>\n          <H1 centered contentKey="demo.H1ThirdPage" />\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page4 = ({ goTo, interested, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        if (interested) {\n          goTo(2);\n        } else {\n          goTo(1);\n        }\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FourthPage" />\n          <ButtonPrimary contentKey="demo.BackButton" />\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n',
            locationsMap: {
              "recipes-wizard--form-wizard": {
                startLoc: { col: 26, line: 69 },
                endLoc: { col: 1, line: 101 },
                startBody: { col: 26, line: 69 },
                endBody: { col: 1, line: 101 }
              }
            }
          }
        },
        title: "Recipes/Wizard"
      };
      var content = {
          contentNodes: {
            "demo.ForwardButton": { copy: { en: "Next", fr: "Next" } },
            "demo.BackButton": { copy: { en: "Back", fr: "Back" } },
            "demo.H1FirstPage": {
              copy: { en: "Let's get started", fr: "Let's get started" }
            },
            "demo.H1SecondPage": { copy: { en: "Hi", fr: "Bonjour" } },
            "demo.H1ThirdPage": {
              copy: { en: "Third Page", fr: "Third Page" }
            },
            "demo.H1FourthPage": { copy: { en: "Last Page", fr: "Last Page" } }
          },
          theme: { colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } } }
        },
        FormWizard = addSourceDecorator(
          function() {
            var _useCarousel = Object(_src__WEBPACK_IMPORTED_MODULE_6__.j)({
                numOfPages: 4
              }),
              pageIndex = _useCarousel.pageIndex,
              goTo = _useCarousel.goTo,
              back = _useCarousel.back,
              forward = _useCarousel.forward,
              rest = Object(
                _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
              )(_useCarousel, ["pageIndex", "goTo", "back", "forward"]),
              _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(
                ""
              ),
              _useState2 = Object(
                _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a
              )(_useState, 2),
              name = _useState2[0],
              setName = _useState2[1],
              _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(
                !1
              ),
              _useState4 = Object(
                _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a
              )(_useState3, 2),
              interested = _useState4[0],
              setInterested = _useState4[1];
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_6__.c,
              { lang: "en", content: content },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "h1",
                null,
                "Carousel"
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "div",
                {
                  style: {
                    width: "80%",
                    margin: "16px auto",
                    border: "1px solid teal"
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.b,
                  Object.assign({ pageIndex: pageIndex }, rest),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    Page1,
                    { forward: forward, setName: setName }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    Page2,
                    {
                      back: back,
                      goTo: goTo,
                      name: name,
                      interested: interested,
                      setInterested: setInterested
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    Page3,
                    { back: back, forward: forward, interested: interested }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    Page4,
                    { goTo: goTo, interested: interested }
                  )
                )
              )
            );
          },
          {
            __STORY__:
              'import React, { useState } from "react";\nimport { Formik, Form, Field } from "formik";\nimport styled from "styled-components";\nimport {\n  Carousel,\n  useCarousel,\n  ContentProvider,\n  ButtonPrimary,\n  H1\n} from "../../src";\n\nexport default {\n  title: "Recipes/Wizard"\n};\n\nconst contentNodes = {\n  "demo.ForwardButton": {\n    copy: {\n      en: "Next",\n      fr: "Next"\n    }\n  },\n  "demo.BackButton": {\n    copy: {\n      en: "Back",\n      fr: "Back"\n    }\n  },\n  "demo.H1FirstPage": {\n    copy: {\n      en: "Let\'s get started",\n      fr: "Let\'s get started"\n    }\n  },\n  "demo.H1SecondPage": {\n    copy: {\n      en: "Hi",\n      fr: "Bonjour"\n    }\n  },\n  "demo.H1ThirdPage": {\n    copy: {\n      en: "Third Page",\n      fr: "Third Page"\n    }\n  },\n  "demo.H1FourthPage": {\n    copy: {\n      en: "Last Page",\n      fr: "Last Page"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const FormWizard = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 4\n  });\n  const [name, setName] = useState("");\n  const [interested, setInterested] = useState(false);\n\n  return (\n    <ContentProvider lang="en" content={content}>\n      <h1>Carousel</h1>\n      <div\n        style={{\n          width: "80%",\n          margin: "16px auto",\n          border: "1px solid teal"\n        }}\n      >\n        <Carousel pageIndex={pageIndex} {...rest}>\n          <Page1 forward={forward} setName={setName} />\n          <Page2\n            back={back}\n            goTo={goTo}\n            name={name}\n            interested={interested}\n            setInterested={setInterested}\n          />\n          <Page3 back={back} forward={forward} interested={interested} />\n          <Page4 goTo={goTo} interested={interested} />\n        </Carousel>\n      </div>\n    </ContentProvider>\n  );\n};\n\nconst StyledForm = styled(Form)`\n  width: 100%;\n  height: 400px;\n  display: flex;\n  visibility: ${props => (props.hide ? "hidden" : "visible")};\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\n\nconst StyledField = styled(Field)`\n  padding: 8px;\n  margin-bottom: 16px;\n`;\n\nconst Page1 = ({ forward, setName, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{\n        name: ""\n      }}\n      onSubmit={values => {\n        setName(values.name);\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FirstPage" />\n          <StyledField\n            required\n            type="text"\n            name="name"\n            placeholder="Your name"\n          />\n          <div>\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page2 = ({ goTo, back, name, interested, setInterested, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{\n        interested: interested\n      }}\n      onSubmit={values => {\n        setInterested(values.interested);\n        if (values.interested) {\n          goTo(2);\n        } else {\n          goTo(3);\n        }\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1\n            centered\n            contentKey="demo.H1SecondPage"\n            render={copy => `${copy}, ${name}`}\n          />\n          <label>\n            <StyledField type="checkbox" name="interested" />\n            Are you interested in seeing the third page?\n          </label>\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page3 = ({ forward, back, interested, ...rest }) => {\n  const handleClickBack = e => {\n    e.preventDefault();\n    back();\n  };\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        forward();\n      }}\n    >\n      {() => (\n        <StyledForm hide={!interested} {...rest}>\n          <H1 centered contentKey="demo.H1ThirdPage" />\n          <div>\n            <ButtonPrimary\n              onClick={handleClickBack}\n              contentKey="demo.BackButton"\n            />\n            <ButtonPrimary contentKey="demo.ForwardButton" />\n          </div>\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n\nconst Page4 = ({ goTo, interested, ...rest }) => {\n  return (\n    <Formik\n      initialValues={{}}\n      onSubmit={values => {\n        if (interested) {\n          goTo(2);\n        } else {\n          goTo(1);\n        }\n      }}\n    >\n      {() => (\n        <StyledForm {...rest}>\n          <H1 centered contentKey="demo.H1FourthPage" />\n          <ButtonPrimary contentKey="demo.BackButton" />\n        </StyledForm>\n      )}\n    </Formik>\n  );\n};\n',
            __ADDS_MAP__: {
              "recipes-wizard--form-wizard": {
                startLoc: { col: 26, line: 69 },
                endLoc: { col: 1, line: 101 },
                startBody: { col: 26, line: 69 },
                endBody: { col: 1, line: 101 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Wizard.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/recipes",
            __IDS_TO_FRAMEWORKS__: {}
          }
        ),
        StyledForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.b)(
          formik__WEBPACK_IMPORTED_MODULE_4__.b
        )(_templateObject(), function(props) {
          return props.hide ? "hidden" : "visible";
        }),
        StyledField = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.b)(
          formik__WEBPACK_IMPORTED_MODULE_4__.a
        )(_templateObject2()),
        Page1 = function Page1(_ref) {
          var forward = _ref.forward,
            setName = _ref.setName,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref, ["forward", "setName"]);
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: { name: "" },
              onSubmit: function onSubmit(values) {
                setName(values.name), forward();
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                rest,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  { centered: !0, contentKey: "demo.H1FirstPage" }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  StyledField,
                  {
                    required: !0,
                    type: "text",
                    name: "name",
                    placeholder: "Your name"
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { contentKey: "demo.ForwardButton" }
                  )
                )
              );
            }
          );
        },
        Page2 = function Page2(_ref2) {
          var goTo = _ref2.goTo,
            back = _ref2.back,
            name = _ref2.name,
            interested = _ref2.interested,
            setInterested = _ref2.setInterested,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref2, ["goTo", "back", "name", "interested", "setInterested"]),
            handleClickBack = function handleClickBack(e) {
              e.preventDefault(), back();
            };
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: { interested: interested },
              onSubmit: function onSubmit(values) {
                setInterested(values.interested),
                  values.interested ? goTo(2) : goTo(3);
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                rest,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  {
                    centered: !0,
                    contentKey: "demo.H1SecondPage",
                    render: function render(copy) {
                      return "".concat(copy, ", ").concat(name);
                    }
                  }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "label",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    StyledField,
                    { type: "checkbox", name: "interested" }
                  ),
                  "Are you interested in seeing the third page?"
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { onClick: handleClickBack, contentKey: "demo.BackButton" }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { contentKey: "demo.ForwardButton" }
                  )
                )
              );
            }
          );
        },
        Page3 = function Page3(_ref3) {
          var forward = _ref3.forward,
            back = _ref3.back,
            interested = _ref3.interested,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref3, ["forward", "back", "interested"]),
            handleClickBack = function handleClickBack(e) {
              e.preventDefault(), back();
            };
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: {},
              onSubmit: function onSubmit(values) {
                forward();
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                Object.assign({ hide: !interested }, rest),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  { centered: !0, contentKey: "demo.H1ThirdPage" }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { onClick: handleClickBack, contentKey: "demo.BackButton" }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src__WEBPACK_IMPORTED_MODULE_6__.a,
                    { contentKey: "demo.ForwardButton" }
                  )
                )
              );
            }
          );
        },
        Page4 = function Page4(_ref4) {
          var goTo = _ref4.goTo,
            interested = _ref4.interested,
            rest = Object(
              _Users_jyoo_Documents_projects_yuhui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
            )(_ref4, ["goTo", "interested"]);
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            formik__WEBPACK_IMPORTED_MODULE_4__.c,
            {
              initialValues: {},
              onSubmit: function onSubmit(values) {
                goTo(interested ? 2 : 1);
              }
            },
            function() {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                StyledForm,
                rest,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.e,
                  { centered: !0, contentKey: "demo.H1FourthPage" }
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_6__.a,
                  { contentKey: "demo.BackButton" }
                )
              );
            }
          );
        };
    },
    673: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(1);
      __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() {
        return PrimaryButton;
      });
      __webpack_require__(17).withSource;
      var addSourceDecorator = __webpack_require__(17).addSource,
        content =
          ((__webpack_exports__.default = {
            parameters: {
              storySource: {
                source:
                  'import React from "react";\n\nimport markdown from "./Button.md";\nimport { ContentProvider, useContent, ButtonPrimary } from "../../../src";\n\nexport default {\n  title: "Components/Button"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Switch to English",\n      fr: "Passer à l\'anglais"\n    }\n  },\n  "demo.ButtonWithRender": {\n    copy: {\n      en: "Switch to French",\n      fr: "Passer au français"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const PrimaryButton = () => {\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <Buttons />\n    </ContentProvider>\n  );\n};\nPrimaryButton.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n\nconst Buttons = () => {\n  const { lang, setLang } = useContent();\n\n  return (\n    <div>\n      <p>Language code: {lang}</p>\n      <ButtonPrimary contentKey="demo.Button" onClick={() => setLang("en")} />\n      <ButtonPrimary\n        onClick={() => setLang("fr")}\n        contentKey="demo.ButtonWithRender"\n        render={copy => (\n          <span>\n            <b>{copy}</b> with render()\n          </span>\n        )}\n      />\n    </div>\n  );\n};\n',
                locationsMap: {
                  "components-button--primary-button": {
                    startLoc: { col: 29, line: 39 },
                    endLoc: { col: 1, line: 45 },
                    startBody: { col: 29, line: 39 },
                    endBody: { col: 1, line: 45 }
                  }
                }
              }
            },
            title: "Components/Button"
          }),
          {
            contentNodes: {
              "demo.Button": {
                copy: { en: "Switch to English", fr: "Passer à l'anglais" }
              },
              "demo.ButtonWithRender": {
                copy: { en: "Switch to French", fr: "Passer au français" }
              }
            },
            theme: {
              colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } }
            }
          }),
        PrimaryButton = addSourceDecorator(
          function() {
            return react_default.a.createElement(
              src.c,
              { lang: "fr", content: content },
              react_default.a.createElement(Button_stories_Buttons, null)
            );
          },
          {
            __STORY__:
              'import React from "react";\n\nimport markdown from "./Button.md";\nimport { ContentProvider, useContent, ButtonPrimary } from "../../../src";\n\nexport default {\n  title: "Components/Button"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Switch to English",\n      fr: "Passer à l\'anglais"\n    }\n  },\n  "demo.ButtonWithRender": {\n    copy: {\n      en: "Switch to French",\n      fr: "Passer au français"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const PrimaryButton = () => {\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <Buttons />\n    </ContentProvider>\n  );\n};\nPrimaryButton.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n\nconst Buttons = () => {\n  const { lang, setLang } = useContent();\n\n  return (\n    <div>\n      <p>Language code: {lang}</p>\n      <ButtonPrimary contentKey="demo.Button" onClick={() => setLang("en")} />\n      <ButtonPrimary\n        onClick={() => setLang("fr")}\n        contentKey="demo.ButtonWithRender"\n        render={copy => (\n          <span>\n            <b>{copy}</b> with render()\n          </span>\n        )}\n      />\n    </div>\n  );\n};\n',
            __ADDS_MAP__: {
              "components-button--primary-button": {
                startLoc: { col: 29, line: 39 },
                endLoc: { col: 1, line: 45 },
                startBody: { col: 29, line: 39 },
                endBody: { col: 1, line: 45 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Button.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components/Button",
            __IDS_TO_FRAMEWORKS__: {}
          }
        );
      PrimaryButton.story = {
        parameters: {
          notes: {
            markdown:
              '# Buttons\n\nAccessible buttons.\n\n**Available components**:\n\n- [ButtonPrimary](#buttonprimary)\n\n**How it is built**\n\n- Uses `reakit/Button` ([link](https://reakit.io/docs/button/)) under the hood.\n- Wrapped in `withContent`.\n\n## ButtonPrimary\n\n### Example\n\n```javascript\n<ButtonPrimary contentKey="demo.Button" onClick={() => setLang("en")} />\n```\n'
          }
        }
      };
      var Button_stories_Buttons = function Buttons() {
        var _useContent = Object(src.k)(),
          lang = _useContent.lang,
          setLang = _useContent.setLang;
        return react_default.a.createElement(
          "div",
          null,
          react_default.a.createElement("p", null, "Language code: ", lang),
          react_default.a.createElement(src.a, {
            contentKey: "demo.Button",
            onClick: function onClick() {
              return setLang("en");
            }
          }),
          react_default.a.createElement(src.a, {
            onClick: function onClick() {
              return setLang("fr");
            },
            contentKey: "demo.ButtonWithRender",
            render: function render(copy) {
              return react_default.a.createElement(
                "span",
                null,
                react_default.a.createElement("b", null, copy),
                " with render()"
              );
            }
          })
        );
      };
    },
    674: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var objectWithoutProperties = __webpack_require__(8),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(1);
      __webpack_require__.d(__webpack_exports__, "Carousels", function() {
        return Carousels;
      });
      __webpack_require__(17).withSource;
      var addSourceDecorator = __webpack_require__(17).addSource,
        content =
          ((__webpack_exports__.default = {
            parameters: {
              storySource: {
                source:
                  'import React from "react";\n\nimport markdown from "./Carousel.md";\nimport { Carousel, useCarousel, ContentProvider } from "../../../src";\n\nexport default {\n  title: "Components/Carousel"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Switch to English",\n      fr: "Passer à l\'anglais"\n    }\n  },\n  "demo.ButtonWithRender": {\n    copy: {\n      en: "Switch to French",\n      fr: "Passer au français"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Carousels = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 3\n  });\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <h1>Carousel</h1>\n      <Carousel\n        pageIndex={pageIndex}\n        pages={[\n          <div style={{ width: "100%" }}>\n            <p>Page 1</p>\n          </div>,\n          <div style={{ width: "100%" }}>\n            <p>Page 2</p>\n          </div>,\n          <div style={{ width: "100%" }}>\n            <p>Page 3</p>\n          </div>\n        ]}\n      />\n      <div>\n        <button onClick={back}>Back</button>\n        <button onClick={forward}>Forward</button>\n      </div>\n    </ContentProvider>\n  );\n};\n\nCarousels.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n',
                locationsMap: {
                  "components-carousel--carousels": {
                    startLoc: { col: 25, line: 39 },
                    endLoc: { col: 1, line: 66 },
                    startBody: { col: 25, line: 39 },
                    endBody: { col: 1, line: 66 }
                  }
                }
              }
            },
            title: "Components/Carousel"
          }),
          {
            contentNodes: {
              "demo.Button": {
                copy: { en: "Switch to English", fr: "Passer à l'anglais" }
              },
              "demo.ButtonWithRender": {
                copy: { en: "Switch to French", fr: "Passer au français" }
              }
            },
            theme: {
              colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } }
            }
          }),
        Carousels = addSourceDecorator(
          function() {
            var _useCarousel = Object(src.j)({ numOfPages: 3 }),
              pageIndex = _useCarousel.pageIndex,
              back = (_useCarousel.goTo, _useCarousel.back),
              forward = _useCarousel.forward;
            Object(objectWithoutProperties.a)(_useCarousel, [
              "pageIndex",
              "goTo",
              "back",
              "forward"
            ]);
            return react_default.a.createElement(
              src.c,
              { lang: "fr", content: content },
              react_default.a.createElement("h1", null, "Carousel"),
              react_default.a.createElement(src.b, {
                pageIndex: pageIndex,
                pages: [
                  react_default.a.createElement(
                    "div",
                    { style: { width: "100%" } },
                    react_default.a.createElement("p", null, "Page 1")
                  ),
                  react_default.a.createElement(
                    "div",
                    { style: { width: "100%" } },
                    react_default.a.createElement("p", null, "Page 2")
                  ),
                  react_default.a.createElement(
                    "div",
                    { style: { width: "100%" } },
                    react_default.a.createElement("p", null, "Page 3")
                  )
                ]
              }),
              react_default.a.createElement(
                "div",
                null,
                react_default.a.createElement(
                  "button",
                  { onClick: back },
                  "Back"
                ),
                react_default.a.createElement(
                  "button",
                  { onClick: forward },
                  "Forward"
                )
              )
            );
          },
          {
            __STORY__:
              'import React from "react";\n\nimport markdown from "./Carousel.md";\nimport { Carousel, useCarousel, ContentProvider } from "../../../src";\n\nexport default {\n  title: "Components/Carousel"\n};\n\nconst contentNodes = {\n  "demo.Button": {\n    copy: {\n      en: "Switch to English",\n      fr: "Passer à l\'anglais"\n    }\n  },\n  "demo.ButtonWithRender": {\n    copy: {\n      en: "Switch to French",\n      fr: "Passer au français"\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Carousels = () => {\n  const { pageIndex, goTo, back, forward, ...rest } = useCarousel({\n    numOfPages: 3\n  });\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <h1>Carousel</h1>\n      <Carousel\n        pageIndex={pageIndex}\n        pages={[\n          <div style={{ width: "100%" }}>\n            <p>Page 1</p>\n          </div>,\n          <div style={{ width: "100%" }}>\n            <p>Page 2</p>\n          </div>,\n          <div style={{ width: "100%" }}>\n            <p>Page 3</p>\n          </div>\n        ]}\n      />\n      <div>\n        <button onClick={back}>Back</button>\n        <button onClick={forward}>Forward</button>\n      </div>\n    </ContentProvider>\n  );\n};\n\nCarousels.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n',
            __ADDS_MAP__: {
              "components-carousel--carousels": {
                startLoc: { col: 25, line: 39 },
                endLoc: { col: 1, line: 66 },
                startBody: { col: 25, line: 39 },
                endBody: { col: 1, line: 66 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Carousel.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components/Carousel",
            __IDS_TO_FRAMEWORKS__: {}
          }
        );
      Carousels.story = {
        parameters: {
          notes: {
            markdown:
              "# Carousel\n\n**Available components**:\n\n- [useCarousel](#usecarousel)\n- [Carousel](#carousel)\n\n**How it is built**\n\n- No use of external component libraries.\n- Use React's `useState` under the hood.\n\n## useCarousel\n\nA React hook that powers the `<Carousel />` component. Takes in an `option` parameter.\n\n### Options\n\n| name       | type    | default | description                                     |\n| ---------- | ------- | ------- | ----------------------------------------------- |\n| numOfPages | integer |         | **Required.** Number of total (possible) pages. |\n\n### Returned value\n\n| name      | type            | default | description                                                |\n| --------- | --------------- | ------- | ---------------------------------------------------------- |\n| pageIndex | integer         |         | Current page index. Must be passed into `<Carousel />`     |\n| goTo      | integer => void |         | A function that sets `pageIndex` to the given index value. |\n| back      | () => void      |         | A function that decrements `pageIndex` by 1.               |\n| forward   | () => void      |         | A function that increments `pageIndex` by 1.               |\n\n## Carousel\n\nMust have `numOfPages` from `useCarousel` passed in as prop.\n\n### Props\n\n| name      | type        | default | description             |\n| --------- | ----------- | ------- | ----------------------- |\n| pageIndex | integer     |         | From `useCarousel`      |\n| pages     | ReactNode[] |         | An array of React nodes |\n\n### Example\n\n```javascript\nconst carousel = useCarousel({ numOfPages: 2 })\n\n<Carousel\n    pageIndex={carousel.pageIndex}\n    pages={[\n        <div>\n            <p>Page 1</p>\n            <button onClick={carousel.forward}>next</button>\n        </div>,\n        <div>\n            <p>Page 2</p>\n            <button onClick={carousel.back}>back</button>\n        </div>\n    ]}\n/>\n```\n"
          }
        }
      };
    },
    675: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src = __webpack_require__(1);
      __webpack_require__.d(__webpack_exports__, "Content", function() {
        return Content_stories_Content;
      });
      __webpack_require__(17).withSource;
      var addSourceDecorator = __webpack_require__(17).addSource,
        content =
          ((__webpack_exports__.default = {
            parameters: {
              storySource: {
                source:
                  'import React from "react";\n\nimport markdown from "./Content.md";\nimport { ContentProvider, H1 } from "../../../src";\n\nexport default {\n  title: "Components/Content"\n};\n\nconst contentNodes = {\n  "demo.H1": {\n    copy: {\n      en: \'View docs by clicking "Notes"\',\n      fr: \'View docs by clicking "Notes"\'\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Content = () => {\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <H1 contentKey="demo.H1" />\n    </ContentProvider>\n  );\n};\nContent.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n',
                locationsMap: {
                  "components-content--content": {
                    startLoc: { col: 23, line: 33 },
                    endLoc: { col: 1, line: 39 },
                    startBody: { col: 23, line: 33 },
                    endBody: { col: 1, line: 39 }
                  }
                }
              }
            },
            title: "Components/Content"
          }),
          {
            contentNodes: {
              "demo.H1": {
                copy: {
                  en: 'View docs by clicking "Notes"',
                  fr: 'View docs by clicking "Notes"'
                }
              }
            },
            theme: {
              colors: { primary: { light: "#d0dbfd", dark: "#230cc2" } }
            }
          }),
        Content_stories_Content = addSourceDecorator(
          function() {
            return react_default.a.createElement(
              src.c,
              { lang: "fr", content: content },
              react_default.a.createElement(src.e, { contentKey: "demo.H1" })
            );
          },
          {
            __STORY__:
              'import React from "react";\n\nimport markdown from "./Content.md";\nimport { ContentProvider, H1 } from "../../../src";\n\nexport default {\n  title: "Components/Content"\n};\n\nconst contentNodes = {\n  "demo.H1": {\n    copy: {\n      en: \'View docs by clicking "Notes"\',\n      fr: \'View docs by clicking "Notes"\'\n    }\n  }\n};\n\nconst theme = {\n  colors: {\n    primary: {\n      light: "#d0dbfd",\n      dark: "#230cc2"\n    }\n  }\n};\n\nconst content = {\n  contentNodes,\n  theme\n};\n\nexport const Content = () => {\n  return (\n    <ContentProvider lang="fr" content={content}>\n      <H1 contentKey="demo.H1" />\n    </ContentProvider>\n  );\n};\nContent.story = {\n  parameters: {\n    notes: { markdown }\n  }\n};\n',
            __ADDS_MAP__: {
              "components-content--content": {
                startLoc: { col: 23, line: 33 },
                endLoc: { col: 1, line: 39 },
                startBody: { col: 23, line: 33 },
                endBody: { col: 1, line: 39 }
              }
            },
            __MAIN_FILE_LOCATION__: "/Content.stories.tsx",
            __MODULE_DEPENDENCIES__: [],
            __LOCAL_DEPENDENCIES__: {},
            __SOURCE_PREFIX__:
              "/Users/jyoo/Documents/projects/yuhui/stories/components/Content",
            __IDS_TO_FRAMEWORKS__: {}
          }
        );
      Content_stories_Content.story = {
        parameters: {
          notes: {
            markdown:
              '# Content\n\nFunctions exported from `Content.tsx` is in large part what makes this component library what it is. Many of the components in this library is wrapped in `useContent()` which gets its content (copy and styles) from `<ContentProvider />`\n\n**Available components**:\n\n- [ContentProvider](#contentprovider)\n- [withContent](#withcontent)\n- [Basic text components](#basic-text-components)\n\n**How it is built**\n\n- No use of external component libraries.\n- Uses React\'s `context` under the hood.\n\n## ContentProvider\n\n### Props\n\n| name     | type      | default | description                    |\n| -------- | --------- | ------- | ------------------------------ |\n| lang     | string    | "en"    | Language code                  |\n| content  | Content   |         | **Required.** `Content` object |\n| children | ReactNode |         |                                |\n\n### Types\n\n```javascript\ninterface Content {\n  contentNodes: ContentNodes;\n  theme: any;\n}\n\ninterface ContentNodes {\n  [key: string]: ContentNode;\n}\n\ninterface ContentNode {\n  copy: Copy;\n  style?: any;\n  render?: any;\n  [key: string]: any;\n}\n```\n\n### Example\n\n```javascript\nconst content = {\n  contentNodes: {\n      {\n      "demo.Button": {\n        copy: {\n          en: "Switch to English",\n          fr: "Passer à l\'anglais"\n        }\n      }\n    }\n  },\n  theme: {\n    colors: {\n      primary: {\n        light: "#d0dbfd",\n        dark: "#230cc2"\n      }\n    }\n  }\n};\n\n...\n\n<ContentProvider lang="en" content={content}>\n    ...\n</ContentProvider>\n```\n\n## withContent\n\nA higher-order component which adds the following props.\n\n### Props\n\n| name          | type                  | default | description                                                                  |\n| ------------- | --------------------- | ------- | ---------------------------------------------------------------------------- |\n| contentKey    | string                |         | **Required.** Name of the corresponding key in `contentNodes` from `Content` |\n| contentParams | object                |         | Object with key value pairs to be interpolated into the copy string.         |\n| style         | Style                 |         | Style object. Overwrites styles for the root element.                        |\n| render        | (string) => ReactNode |         | A render prop that exposes the interpolated copy string                      |\n| children      | ReactNode             |         | An escape hatch for rendering content that is not part of `Content`.         |\n\n### Examples\n\n```javascript\nconst H1 = withContent(({children, ...rest}) => <h1 {...rest}>{children}</h1>);\n\n// Below will render copy from content.contentNodes[\'demo.Button\']\n<H1 contentKey="demo.Button" />\n\n// You can have more control with the render prop\n<H1\n  render={copy => `${copy} !!`}\n/>\n\n// If we have copy with variables\nconst content = {\n  contentNodes: {\n      {\n      "demo.P": {\n        copy: {\n          en: "Hello ${name}",\n          fr: "Bounjour ${name}"\n        }\n      }\n    }\n  },\n  theme: { /* */ }\n};\n\n<P\n  contentKey="demo.P"\n  contentParams={{name: nameFromSomeState}}\n/>\n```\n\n## Basic Text Components\n\nBasic text components are all wrapped with `withContent`\n\n- `H1`\n- `H2`\n- `P`\n- `Span`\n'
          }
        }
      };
    }
  },
  [[324, 1, 2]]
]);
//# sourceMappingURL=main.1403f4f5c72dc305090a.bundle.js.map
