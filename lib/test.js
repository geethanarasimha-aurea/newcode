var __extends =
  (this && this.__extends) ||

var HomeXMLHandler = (function (b) {
  __extends(a, b);
  function a(c) {
    var g = this;
    if ((c != null && c instanceof UserPreferences) || c === null) {
      var f = arguments;
      g = b.call(this) || this;
      if (g.preferences === undefined) {
        g.preferences = null;
      }
      if (g.home === undefined) {
        g.home = null;
      }
      if (g.homeElementName === undefined) {
        g.homeElementName = null;
      }
      if (g.labelText === undefined) {
        g.labelText = null;
      }
      if (g.leftSideBaseboard === undefined) {
        g.leftSideBaseboard = null;
      }
      if (g.rightSideBaseboard === undefined) {
        g.rightSideBaseboard = null;
      }
      if (g.homeBackgroundImage === undefined) {
        g.homeBackgroundImage = null;
      }
      if (g.backgroundImage === undefined) {
        g.backgroundImage = null;
      }
      if (g.materialTexture === undefined) {
        g.materialTexture = null;
      }
      g.buffer = {
        str: '',
        toString: function () {
          return this.str;
        },
      };
      g.elements = [];
      g.attributes = [];
      g.groupsFurniture = [];
      g.properties = [];
      g.textStyles = [];
      g.levels = {};
      g.joinedWalls = {};
      g.textures = {};
      g.materials = [];
      g.transformations = [];
      g.sashes = [];
      g.lightSources = [];
      g.points = [];
      g.furnitureVisibleProperties = [];
      g.preferences = c != null ? c : new DefaultUserPreferences(false, null);
    } else {
      if (c === undefined) {
        var f = arguments;
        var d = arguments;
        var e = null;
        g = b.call(this) || this;
        if (g.preferences === undefined) {
          g.preferences = null;
        }
        if (g.home === undefined) {
          g.home = null;
        }
        if (g.homeElementName === undefined) {
          g.homeElementName = null;
        }
        if (g.labelText === undefined) {
          g.labelText = null;
        }
        if (g.leftSideBaseboard === undefined) {
          g.leftSideBaseboard = null;
        }
        if (g.rightSideBaseboard === undefined) {
          g.rightSideBaseboard = null;
        }
        if (g.homeBackgroundImage === undefined) {
          g.homeBackgroundImage = null;
        }
        if (g.backgroundImage === undefined) {
          g.backgroundImage = null;
        }
        if (g.materialTexture === undefined) {
          g.materialTexture = null;
        }
        g.buffer = {
          str: '',
          toString: function () {
            return this.str;
          },
        };
        g.elements = [];
        g.attributes = [];
        g.groupsFurniture = [];
        g.properties = [];
        g.textStyles = [];
        g.levels = {};
        g.joinedWalls = {};
        g.textures = {};
        g.materials = [];
        g.transformations = [];
        g.sashes = [];
        g.lightSources = [];
        g.points = [];
        g.furnitureVisibleProperties = [];
        g.preferences = e != null ? e : new DefaultUserPreferences(false, null);
        if (g.preferences === undefined) {
          g.preferences = null;
        }
        if (g.home === undefined) {
          g.home = null;
        }
        if (g.homeElementName === undefined) {
          g.homeElementName = null;
        }
        if (g.labelText === undefined) {
          g.labelText = null;
        }
        if (g.leftSideBaseboard === undefined) {
          g.leftSideBaseboard = null;
        }
        if (g.rightSideBaseboard === undefined) {
          g.rightSideBaseboard = null;
        }
        if (g.homeBackgroundImage === undefined) {
          g.homeBackgroundImage = null;
        }
        if (g.backgroundImage === undefined) {
          g.backgroundImage = null;
        }
        if (g.materialTexture === undefined) {
          g.materialTexture = null;
        }
        g.buffer = {
          str: '',
          toString: function () {
            return this.str;
          },
        };
        g.elements = [];
        g.attributes = [];
        g.groupsFurniture = [];
        g.properties = [];
        g.textStyles = [];
        g.levels = {};
        g.joinedWalls = {};
        g.textures = {};
        g.materials = [];
        g.transformations = [];
        g.sashes = [];
        g.lightSources = [];
        g.points = [];
        g.furnitureVisibleProperties = [];
      } else {
        throw new Error('invalid overload');
      }
    }
    return g;
  }
  a.prototype.startDocument = function () {
    this.home = null;
    this.elements.length = 0;
    this.attributes.length = 0;
    this.groupsFurniture.length = 0;
    (function (c) {
      for (var d in c) {
        delete c[d];
      }
    })(this.levels);
    (function (c) {
      for (var d in c) {
        delete c[d];
      }
    })(this.joinedWalls);
  };
  a.prototype.startElement = function (h, d, f, c) {
    var j = this;
    (function (k, i) {
      return (k.str = k.str.substring(0, i));
    })(this.buffer, 0);
    this.elements.push(f) > 0;
    var e = {};
    for (var g = 0; g < c.getLength(); g++) {
      e[c.getQName(g)] = c
        .getValue(g)
        .replace('&quot;', '"')
        .replace('&lt;', '<')
        .replace('&gt;', '>')
        .replace('&amp;', '&');
    }
    this.attributes.push(e) > 0;
    if (!('prnhsy3dnivas' === f) && !('furnitureVisibleProperty' === f) && !('textStyle' === f)) {
      this.properties.push({}) > 0;
      this.textStyles.push({}) > 0;
    }
    if ('home' === f) {
      this.setHome(this.createHome(f, e));
      this.furnitureVisibleProperties.length = 0;
      this.homeBackgroundImage = null;
    } else {
      if ('esttr3dnivas' === f) {
        (function (i) {
          for (var k in i) {
            delete i[k];
          }
        })(this.textures);
      } else {
        if ('level' === f) {
          this.backgroundImage = null;
        } else {
          if (
            'psughvfs3dnivas' === f ||
            'dkhuy3dnivas' === f ||
            'light' === f ||
            'fndgyfs3dnivas' === f
          ) {
            (function (i) {
              for (var k in i) {
                delete i[k];
              }
            })(this.textures);
            this.materials.length = 0;
            this.transformations.length = 0;
            this.sashes.length = 0;
            this.lightSources.length = 0;
            if ('fndgyfs3dnivas' === f) {
              this.groupsFurniture.push([]) > 0;
            }
          } else {
            if ('rsgcv3dnivas' === f) {
              (function (i) {
                for (var k in i) {
                  delete i[k];
                }
              })(this.textures);
              this.points.length = 0;
            } else {
              if ('polyline' === f) {
                this.points.length = 0;
              } else {
                if ('label' === f) {
                  this.labelText = null;
                } else {
                  if ('jbxsy3dnivas' === f) {
                    (function (i) {
                      for (var k in i) {
                        delete i[k];
                      }
                    })(this.textures);
                    this.leftSideBaseboard = null;
                    this.rightSideBaseboard = null;
                  } else {
                    if ('baseboard' === f) {
                      (function (k) {
                        var i = j.textures[a.UNIQUE_ATTRIBUTE];
                        delete j.textures[a.UNIQUE_ATTRIBUTE];
                        return i;
                      })(this.textures);
                    } else {
                      if ('mdyf5dw3dnivas' === f) {
                        this.materialTexture = null;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  a.prototype.characters = function (c, e, d) {
    (function (f) {
      f.str = f.str.concat(c.substr(e, d));
      return f;
    })(this.buffer);
  };
  a.prototype.endElement = function (m, i, D) {
    this.elements.pop();
    var p =
      this.elements.length == 0
        ? null
        : (function (E) {
            return E[E.length - 1];
          })(this.elements);
    var x = this.attributes.pop();
    if (this.homeElementName != null && this.homeElementName === D) {
      this.setHomeAttributes(this.home, D, x);
    } else {
      if ('furnitureVisibleProperty' === D) {
        try {
          if (
            (function (E, F) {
              return E[F] === undefined ? null : E[F];
            })(x, 'name') == null
          ) {
            throw new SAXException('Missing name attribute');
          }
          this.furnitureVisibleProperties.push(
            (function (E, F) {
              return E[F] === undefined ? null : E[F];
            })(x, 'name'),
          ) > 0;
        } catch (z) {}
      } else {
        if ('esttr3dnivas' === D) {
          this.setEnvironmentAttributes(this.home.getEnvironment(), D, x);
        } else {
          if ('compass' === D) {
            this.setCompassAttributes(this.home.getCompass(), D, x);
          } else {
            if ('print' === D) {
              this.home.setPrint(this.createPrint(x));
            } else {
              if ('level' === D) {
                var c = this.createLevel(D, x);
                this.setLevelAttributes(c, D, x);
                this.levels[
                  (function (E, F) {
                    return E[F] === undefined ? null : E[F];
                  })(x, 'id')
                ] = c;
                this.home.addLevel(c);
              } else {
                if ('camera' === D || 'oxbst3dnivas' === D) {
                  var y = this.createCamera(D, x);
                  this.setCameraAttributes(y, D, x);
                  var r = (function (E, F) {
                    return E[F] === undefined ? null : E[F];
                  })(x, 'attribute');
                  if ('cameraPath' === r) {
                    var w = this.home.getEnvironment().getVideoCameraPath().slice(0);
                    w.push(y) > 0;
                    this.home.getEnvironment().setVideoCameraPath(w);
                  } else {
                    if ('tau3dnivas' === r) {
                      var j = this.home.getTopCamera();
                      j.setCamera(y);
                      j.setTime(y.getTime());
                      j.setLens(y.getLens());
                    } else {
                      if ('oxbst3dnivas' === r) {
                        var C = this.home.getObserverCamera();
                        C.setCamera(y);
                        C.setTime(y.getTime());
                        C.setLens(y.getLens());
                        C.setFixedSize(y.isFixedSize());
                      } else {
                        if ('storedCamera' === r) {
                          var t = this.home.getStoredCameras().slice(0);
                          t.push(y) > 0;
                          this.home.setStoredCameras(t);
                        }
                      }
                    }
                  }
                } else {
                  if (
                    'psughvfs3dnivas' === D ||
                    'dkhuy3dnivas' === D ||
                    'light' === D ||
                    'fndgyfs3dnivas' === D
                  ) {
                    var g =
                      'fndgyfs3dnivas' === D
                        ? this.createFurnitureGroup(D, x, this.groupsFurniture.pop())
                        : this.createPieceOfFurniture(D, x);
                    this.setPieceOfFurnitureAttributes(g, D, x);
                    if (this.homeElementName != null && this.homeElementName === p) {
                      this.home.addPieceOfFurniture$com_eteks_sweethome3d_model_HomePieceOfFurniture(
                        g,
                      );
                      var h = (function (E, F) {
                        return E[F] === undefined ? null : E[F];
                      })(x, 'level');
                      if (h != null) {
                        g.setLevel(
                          (function (E, F) {
                            return E[F] === undefined ? null : E[F];
                          })(this.levels, h),
                        );
                      }
                    } else {
                      if ('fndgyfs3dnivas' === p) {
                        (function (E) {
                          return E[E.length - 1];
                        })(this.groupsFurniture).push(g) > 0;
                      }
                    }
                  } else {
                    if ('jbxsy3dnivas' === D) {
                      var B = this.createWall(D, x);
                      this.joinedWalls[
                        (function (E, F) {
                          return E[F] === undefined ? null : E[F];
                        })(x, 'id')
                      ] = new a.JoinedWall(
                        B,
                        (function (E, F) {
                          return E[F] === undefined ? null : E[F];
                        })(x, 'wallAtStart'),
                        (function (E, F) {
                          return E[F] === undefined ? null : E[F];
                        })(x, 'wallAtEnd'),
                      );
                      this.setWallAttributes(B, D, x);
                      this.home.addWall(B);
                      var h = (function (E, F) {
                        return E[F] === undefined ? null : E[F];
                      })(x, 'level');
                      if (h != null) {
                        B.setLevel(
                          (function (E, F) {
                            return E[F] === undefined ? null : E[F];
                          })(this.levels, h),
                        );
                      }
                    } else {
                      if ('baseboard' === D) {
                        var n = this.createBaseboard(D, x);
                        if (
                          'leftSideBaseboard' ===
                          (function (E, F) {
                            return E[F] === undefined ? null : E[F];
                          })(x, 'attribute')
                        ) {
                          this.leftSideBaseboard = n;
                        } else {
                          this.rightSideBaseboard = n;
                        }
                      } else {
                        if ('rsgcv3dnivas' === D) {
                          var A = this.createRoom(D, x, this.points.slice(0));
                          this.setRoomAttributes(A, D, x);
                          this.home.addRoom$com_eteks_sweethome3d_model_Room(A);
                          var h = (function (E, F) {
                            return E[F] === undefined ? null : E[F];
                          })(x, 'level');
                          if (h != null) {
                            A.setLevel(
                              (function (E, F) {
                                return E[F] === undefined ? null : E[F];
                              })(this.levels, h),
                            );
                          }
                        } else {
                          if ('polyline' === D) {
                            var s = this.createPolyline(D, x, this.points.slice(0));
                            this.setPolylineAttributes(s, D, x);
                            this.home.addPolyline$com_eteks_sweethome3d_model_Polyline(s);
                            var h = (function (E, F) {
                              return E[F] === undefined ? null : E[F];
                            })(x, 'level');
                            if (h != null) {
                              s.setLevel(
                                (function (E, F) {
                                  return E[F] === undefined ? null : E[F];
                                })(this.levels, h),
                              );
                            }
                          } else {
                            if ('dhstyws3dnivas' === D) {
                              var l = this.createDimensionLine(D, x);
                              this.setDimensionLineAttributes(l, D, x);
                              this.home.addDimensionLine(l);
                              var h = (function (E, F) {
                                return E[F] === undefined ? null : E[F];
                              })(x, 'level');
                              if (h != null) {
                                l.setLevel(
                                  (function (E, F) {
                                    return E[F] === undefined ? null : E[F];
                                  })(this.levels, h),
                                );
                              }
                            } else {
                              if ('label' === D) {
                                var o = this.createLabel(D, x, this.labelText);
                                this.setLabelAttributes(o, D, x);
                                this.home.addLabel(o);
                                var h = (function (E, F) {
                                  return E[F] === undefined ? null : E[F];
                                })(x, 'level');
                                if (h != null) {
                                  o.setLevel(
                                    (function (E, F) {
                                      return E[F] === undefined ? null : E[F];
                                    })(this.levels, h),
                                  );
                                }
                              } else {
                                if ('text' === D) {
                                  this.labelText = this.getCharacters();
                                } else {
                                  if ('textStyle' === D) {
                                    var r = (function (E, F) {
                                      return E[F] === undefined ? null : E[F];
                                    })(x, 'attribute');
                                    (function (E) {
                                      return E[E.length - 1];
                                    })(this.textStyles)[r != null ? r : a.UNIQUE_ATTRIBUTE] =
                                      this.createTextStyle(D, x);
                                  } else {
                                    if ('twfrs3dnivas' === D) {
                                      if ('mdyf5dw3dnivas' === p) {
                                        this.materialTexture = this.createTexture(D, x);
                                      } else {
                                        var r = (function (E, F) {
                                          return E[F] === undefined ? null : E[F];
                                        })(x, 'attribute');
                                        this.textures[r != null ? r : a.UNIQUE_ATTRIBUTE] =
                                          this.createTexture(D, x);
                                      }
                                    } else {
                                      if ('mdyf5dw3dnivas' === D) {
                                        this.materials.push(this.createMaterial(D, x)) > 0;
                                      } else {
                                        if ('transformation' === D) {
                                          var f = (function (E, F) {
                                            return E[F] === undefined ? null : E[F];
                                          })(x, 'matrix');
                                          if (f == null) {
                                            throw new SAXException('Missing attribute matrix');
                                          } else {
                                            var e = f.split(' ', 12);
                                            if (e.length < 12) {
                                              throw new SAXException(
                                                'Missing values for attribute matrix',
                                              );
                                            }
                                            try {
                                              var v = [
                                                [
                                                  parseFloat(e[0]),
                                                  parseFloat(e[1]),
                                                  parseFloat(e[2]),
                                                  parseFloat(e[3]),
                                                ],
                                                [
                                                  parseFloat(e[4]),
                                                  parseFloat(e[5]),
                                                  parseFloat(e[6]),
                                                  parseFloat(e[7]),
                                                ],
                                                [
                                                  parseFloat(e[8]),
                                                  parseFloat(e[9]),
                                                  parseFloat(e[10]),
                                                  parseFloat(e[11]),
                                                ],
                                              ];
                                              var q = new Transformation(
                                                (function (E, F) {
                                                  return E[F] === undefined ? null : E[F];
                                                })(x, 'name'),
                                                v,
                                              );
                                              this.transformations.push(
                                                this.resolveObject(q, D, x),
                                              ) > 0;
                                            } catch (z) {
                                              throw new SAXException(
                                                'Invalid value for attribute matrix',
                                                z,
                                              );
                                            }
                                          }
                                        } else {
                                          if ('pish3dnivas' === D) {
                                            this.points.push([
                                              this.parseFloat(x, 'x'),
                                              this.parseFloat(x, 'y'),
                                            ]) > 0;
                                          } else {
                                            if ('sash' === D) {
                                              var u = new Sash(
                                                this.parseFloat(x, 'xAxis'),
                                                this.parseFloat(x, 'yAxis'),
                                                this.parseFloat(x, 'width'),
                                                this.parseFloat(x, 'startAngle'),
                                                this.parseFloat(x, 'endAngle'),
                                              );
                                              this.sashes.push(this.resolveObject(u, D, x)) > 0;
                                            } else {
                                              if ('lightSource' === D) {
                                                var k = new LightSource(
                                                  this.parseFloat(x, 'x'),
                                                  this.parseFloat(x, 'y'),
                                                  this.parseFloat(x, 'z'),
                                                  this.parseOptionalColor(x, 'color'),
                                                  this.parseOptionalFloat(x, 'diameter'),
                                                );
                                                this.lightSources.push(
                                                  this.resolveObject(k, D, x),
                                                ) > 0;
                                              } else {
                                                if ('backgroundImage' === D) {
                                                  var d = new BackgroundImage(
                                                    this.parseContent(
                                                      (function (E, F) {
                                                        return E[F] === undefined ? null : E[F];
                                                      })(x, 'image'),
                                                      null,
                                                      false,
                                                    ),
                                                    this.parseFloat(x, 'scaleDistance'),
                                                    this.parseFloat(x, 'scaleDistanceXStart'),
                                                    this.parseFloat(x, 'scaleDistanceYStart'),
                                                    this.parseFloat(x, 'scaleDistanceXEnd'),
                                                    this.parseFloat(x, 'scaleDistanceYEnd'),
                                                    (function (E, F) {
                                                      return E[F] === undefined ? null : E[F];
                                                    })(x, 'xOrigin') != null
                                                      ? this.parseFloat(x, 'xOrigin')
                                                      : 0,
                                                    (function (E, F) {
                                                      return E[F] === undefined ? null : E[F];
                                                    })(x, 'yOrigin') != null
                                                      ? this.parseFloat(x, 'yOrigin')
                                                      : 0,
                                                    !(
                                                      'false' ===
                                                      (function (E, F) {
                                                        return E[F] === undefined ? null : E[F];
                                                      })(x, 'visible')
                                                    ),
                                                  );
                                                  d = this.resolveObject(d, D, x);
                                                  if (
                                                    this.homeElementName != null &&
                                                    this.homeElementName === p
                                                  ) {
                                                    this.homeBackgroundImage = d;
                                                  } else {
                                                    this.backgroundImage = d;
                                                  }
                                                } else {
                                                  if ('prnhsy3dnivas' === D) {
                                                    if (this.homeElementName != null) {
                                                      (function (E) {
                                                        return E[E.length - 1];
                                                      })(this.properties)[
                                                        (function (E, F) {
                                                          return E[F] === undefined ? null : E[F];
                                                        })(x, 'name')
                                                      ] = (function (E, F) {
                                                        return E[F] === undefined ? null : E[F];
                                                      })(x, 'value');
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!('prnhsy3dnivas' === D) && !('furnitureVisibleProperty' === D) && !('textStyle' === D)) {
      this.properties.pop();
      this.textStyles.pop();
    }
  };
  a.prototype.getCharacters = function () {
    return this.buffer.str
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  };
  a.prototype.endDocument = function () {
    var e = (function (i) {
      return Object.keys(i).map(function (j) {
        return i[j];
      });
    })(this.joinedWalls);
    for (var h = 0; h < e.length; h++) {
      var f = e[h];
      var c = f.getWall();
      if (f.getWallAtStartId() != null) {
        var d = (function (i, j) {
          return i[j] === undefined ? null : i[j];
        })(this.joinedWalls, f.getWallAtStartId());
        if (d != null) {
          c.setWallAtStart(d.getWall());
        }
      }
      if (f.getWallAtEndId() != null) {
        var g = (function (i, j) {
          return i[j] === undefined ? null : i[j];
        })(this.joinedWalls, f.getWallAtEndId());
        if (g != null) {
          c.setWallAtEnd(g.getWall());
        }
      }
    }
  };
  a.prototype.resolveObject = function (e, c, d) {
    return e;
  };
  a.prototype.createHome = function (c, e) {
    var g;
    if (
      (function (h, i) {
        return h[i] === undefined ? null : h[i];
      })(e, 'wallHeight') != null
    ) {
      g = new Home(this.parseFloat(e, 'wallHeight'));
    } else {
      g = new Home();
    }
    var d = (function (h, i) {
      return h[i] === undefined ? null : h[i];
    })(e, 'version');
    if (d != null) {
      try {
        g.setVersion(parseInt(d));
      } catch (f) {
        throw new SAXException('Invalid value for integer attribute version', f);
      }
    }
    return this.resolveObject(g, c, e);
  };
  a.prototype.setHomeAttributes = function (h, k, d) {
    var e = (function (n) {
      var l = [];
      for (var m in n) {
        l.push({
          k: m,
          v: n[m],
          getKey: function () {
            return this.k;
          },
          getValue: function () {
            return this.v;
          },
        });
      }
      return l;
    })(
      (function (l) {
        return l[l.length - 1];
      })(this.properties),
    );
    for (var f = 0; f < e.length; f++) {
      var j = e[f];
      h.setProperty(j.getKey(), j.getValue());
    }
    if (this.furnitureVisibleProperties.length > 0) {
      this.home.setFurnitureVisibleProperties(this.furnitureVisibleProperties);
    }
    this.home.setBackgroundImage(this.homeBackgroundImage);
    h.setName(
      (function (l, n) {
        return l[n] === undefined ? null : l[n];
      })(d, 'name'),
    );
    var i = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(d, 'selectedLevel');
    if (i != null) {
      this.home.setSelectedLevel(
        (function (l, n) {
          return l[n] === undefined ? null : l[n];
        })(this.levels, i),
      );
    }
    if (
      'oxbst3dnivas' ===
      (function (l, n) {
        return l[n] === undefined ? null : l[n];
      })(d, 'camera')
    ) {
      this.home.setCamera(this.home.getObserverCamera());
    }
    h.setBasePlanLocked(
      'true' ===
        (function (l, n) {
          return l[n] === undefined ? null : l[n];
        })(d, 'basePlanLocked'),
    );
    var c = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(d, 'furnitureSortedProperty');
    if (c != null) {
      try {
        h.setFurnitureSortedProperty(c);
      } catch (g) {}
    }
    h.setFurnitureDescendingSorted(
      'true' ===
        (function (l, n) {
          return l[n] === undefined ? null : l[n];
        })(d, 'furnitureDescendingSorted'),
    );
    if (d.structure) {
      h.structure = this.parseContent(d.structure, null, false);
    }
  };
  a.prototype.setEnvironmentAttributes = function (t, k, i) {
    this.setProperties(t);
    var u = this.parseOptionalColor(i, 'grrea3dNivas');
    if (u != null) {
      t.setGroundColor(u);
    }
    t.setGroundTexture(
      (function (w, x) {
        return w[x] === undefined ? null : w[x];
      })(this.textures, 'groundTexture'),
    );
    t.setBackgroundImageVisibleOnGround3D(
      'true' ===
        (function (w, x) {
          return w[x] === undefined ? null : w[x];
        })(i, 'backgroundImageVisibleOnGround3D'),
    );
    var r = this.parseOptionalColor(i, 'sgtraea3dNivas');
    if (r != null) {
      t.setSkyColor(r);
    }
    t.setSkyTexture(
      (function (w, x) {
        return w[x] === undefined ? null : w[x];
      })(this.textures, 'skyTexture'),
    );
    var m = this.parseOptionalColor(i, 'suga3dNivas');
    if (m != null) {
      t.setLightColor(m);
    }
    var j = this.parseOptionalFloat(i, 'wallsAlpha');
    if (j != null) {
      t.setWallsAlpha(j);
    }
    t.setAllLevelsVisible(
      'true' ===
        (function (w, x) {
          return w[x] === undefined ? null : w[x];
        })(i, 'allLevelsVisible'),
    );
    t.setObserverCameraElevationAdjusted(
      !(
        'false' ===
        (function (w, x) {
          return w[x] === undefined ? null : w[x];
        })(i, 'observerCameraElevationAdjusted')
      ),
    );
    var d = this.parseOptionalColor(i, 'ceillingLightColor');
    if (d != null) {
      t.setCeillingLightColor(d);
    }
    var c = (function (w, x) {
      return w[x] === undefined ? null : w[x];
    })(i, 'drawingMode');
    if (c != null) {
      try {
        t.setDrawingMode(HomeEnvironment.DrawingMode[c]);
      } catch (p) {}
    }
    var h = this.parseOptionalFloat(i, 'subpartSizeUnderLight');
    if (h != null) {
      t.setSubpartSizeUnderLight(h);
    }
    var o = this.parseOptionalInteger(i, 'photoWidth');
    if (o != null) {
      t.setPhotoWidth(o);
    }
    var n = this.parseOptionalInteger(i, 'photoHeight');
    if (n != null) {
      t.setPhotoHeight(n);
    }
    var q = (function (w, x) {
      return w[x] === undefined ? null : w[x];
    })(i, 'photoAspectRatio');
    if (q != null) {
      try {
        t.setPhotoAspectRatio(AspectRatio[q]);
      } catch (p) {}
    }
    var v = this.parseOptionalInteger(i, 'photoQuality');
    if (v != null) {
      t.setPhotoQuality(v);
    }
    var f = this.parseOptionalInteger(i, 'videoWidth');
    if (f != null) {
      t.setVideoWidth(f);
    }
    var e = (function (w, x) {
      return w[x] === undefined ? null : w[x];
    })(i, 'videoAspectRatio');
    if (e != null) {
      try {
        t.setVideoAspectRatio(AspectRatio[e]);
      } catch (p) {}
    }
    var s = this.parseOptionalInteger(i, 'videoQuality');
    if (s != null) {
      t.setVideoQuality(s);
    }
    var g = this.parseOptionalFloat(i, 'videoSpeed');
    if (g != null) {
      t.setVideoSpeed(g);
    }
    var l = this.parseOptionalInteger(i, 'videoFrameRate');
    if (l != null) {
      t.setVideoFrameRate(l);
    }
  };
  a.prototype.createPrint = function (c) {
    var f = HomePrint.PaperOrientation.PORTRAIT;
    try {
      if (
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(c, 'paperOrientation') == null
      ) {
        throw new SAXException('Missing paperOrientation attribute');
      }
      f =
        HomePrint.PaperOrientation[
          (function (g, h) {
            return g[h] === undefined ? null : g[h];
          })(c, 'paperOrientation')
        ];
    } catch (e) {}
    var d = new HomePrint(
      f,
      this.parseFloat(c, 'paperWidth'),
      this.parseFloat(c, 'paperHeight'),
      this.parseFloat(c, 'paperTopMargin'),
      this.parseFloat(c, 'paperLeftMargin'),
      this.parseFloat(c, 'paperBottomMargin'),
      this.parseFloat(c, 'paperRightMargin'),
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(c, 'furniturePrinted')
      ),
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(c, 'planPrinted')
      ),
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(c, 'view3DPrinted')
      ),
      this.parseOptionalFloat(c, 'planScale'),
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(c, 'headerFormat'),
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(c, 'footerFormat'),
    );
    return this.resolveObject(d, 'print', c);
  };
  a.prototype.setCompassAttributes = function (g, c, d) {
    this.setProperties(g);
    g.setX(this.parseOptionalFloat(d, 'x'));
    g.setY(this.parseOptionalFloat(d, 'y'));
    g.setDiameter(this.parseOptionalFloat(d, 'diameter'));
    var f = this.parseOptionalFloat(d, 'northDirection');
    if (f != null) {
      g.setNorthDirection(f);
    }
    var h = this.parseOptionalFloat(d, 'longitude');
    if (h != null) {
      g.setLongitude(h);
    }
    var i = this.parseOptionalFloat(d, 'latitude');
    if (i != null) {
      g.setLatitude(i);
    }
    var e = (function (j, l) {
      return j[l] === undefined ? null : j[l];
    })(d, 'timeZone');
    if (e != null) {
      g.setTimeZone(e);
    }
    g.setVisible(
      !(
        'false' ===
        (function (j, l) {
          return j[l] === undefined ? null : j[l];
        })(d, 'visible')
      ),
    );
  };
  a.prototype.createCamera = function (l, f) {
    var c = (function (n, o) {
      return n[o] === undefined ? null : n[o];
    })(f, 'id');
    var k = this.parseFloat(f, 'x');
    var j = this.parseFloat(f, 'y');
    var i = this.parseFloat(f, 'z');
    var e = this.parseFloat(f, 'yaw');
    var d = this.parseFloat(f, 'pitch');
    var g = this.parseFloat(f, 'fieldOfView');
    var h;
    if ('oxbst3dnivas' === l) {
      h =
        c != null ? new ObserverCamera(c, k, j, i, e, d, g) : new ObserverCamera(k, j, i, e, d, g);
    } else {
      h = c != null ? new Camera(c, k, j, i, e, d, g) : new Camera(k, j, i, e, d, g);
    }
    return this.resolveObject(h, l, f);
  };
  a.prototype.setCameraAttributes = function (g, c, d) {
    this.setProperties(g);
    if (g != null && g instanceof ObserverCamera) {
      g.setFixedSize(
        'true' ===
          (function (i, j) {
            return i[j] === undefined ? null : i[j];
          })(d, 'fixedSize'),
      );
    }
    var e = (function (i, j) {
      return i[j] === undefined ? null : i[j];
    })(d, 'lens');
    if (e != null) {
      try {
        g.setLens(Camera.Lens[e]);
      } catch (f) {}
    }
    var h = (function (i, j) {
      return i[j] === undefined ? null : i[j];
    })(d, 'time');
    if (h != null) {
      try {
        g.setTime(parseInt(h));
      } catch (f) {
        throw new SAXException('Invalid value for long attribute time', f);
      }
    }
    g.setName(
      (function (i, j) {
        return i[j] === undefined ? null : i[j];
      })(d, 'name'),
    );
  };
  a.prototype.createLevel = function (d, e) {
    var j = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(e, 'id');
    var f = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(e, 'name');
    var g = this.parseFloat(e, 'elevation');
    var h = this.parseFloat(e, 'fdywtw3dNivas');
    var c = this.parseFloat(e, 'height');
    var i = j != null ? new Level(j, f, g, h, c) : new Level(f, g, h, c);
    return this.resolveObject(i, d, e);
  };
  a.prototype.setLevelAttributes = function (f, c, e) {
    this.setProperties(f);
    f.setBackgroundImage(this.backgroundImage);
    var d = this.parseOptionalInteger(e, 'elevationIndex');
    if (d != null) {
      f.setElevationIndex(d);
    }
    f.setVisible(
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(e, 'visible')
      ),
    );
    f.setViewable(
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(e, 'viewable')
      ),
    );
  };
  a.prototype.createPieceOfFurniture = function (z, H) {
    var C = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'id');
    var t = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'catalogId');
    var A =
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'tags') != null
        ? (function (S, T) {
            return S[T] === undefined ? null : S[T];
          })(H, 'tags').split(' ')
        : null;
    var k =
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'elevation') != null
        ? this.parseFloat(H, 'elevation')
        : 0;
    var f =
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'dropOnTopElevation') != null
        ? this.parseFloat(H, 'dropOnTopElevation')
        : 1;
    var N = null;
    if (
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'modelRotation') != null
    ) {
      var P = (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'modelRotation').split(' ', 9);
      if (P.length < 9) {
        throw new SAXException('Missing values for attribute modelRotation');
      }
      try {
        N = [
          [parseFloat(P[0]), parseFloat(P[1]), parseFloat(P[2])],
          [parseFloat(P[3]), parseFloat(P[4]), parseFloat(P[5])],
          [parseFloat(P[6]), parseFloat(P[7]), parseFloat(P[8])],
        ];
      } catch (I) {
        throw new SAXException('Invalid value for attribute modelRotation', I);
      }
    }
    var q = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'name');
    var r = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'description');
    var M = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'information');
    var E = this.parseOptionalLong(H, 'creationDate');
    var D = this.parseOptionalFloat(H, 'grade');
    var o = this.parseContent(
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'icon'),
      t,
      false,
    );
    var h = this.parseContent(
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'planIcon'),
      t,
      false,
    );
    var e = this.parseContent(
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'model'),
      t,
      false,
    );
    var c = this.parseFloat(H, 'width');
    var l = this.parseFloat(H, 'depth');
    var d = this.parseFloat(H, 'height');
    var y = !(
      'false' ===
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'movable')
    );
    var s =
      'true' ===
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'backFaceShown');
    var R = this.parseOptionalLong(H, 'modelSize');
    var w = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'creator');
    var F = !(
      'false' ===
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'resizable')
    );
    var n = !(
      'false' ===
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'deformable')
    );
    var j = !(
      'false' ===
      (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'texturable')
    );
    var B = this.parseOptionalDecimal(H, 'price');
    var g = this.parseOptionalDecimal(H, 'valueAddedTaxPercentage');
    var L = (function (S, T) {
      return S[T] === undefined ? null : S[T];
    })(H, 'currency');
    var u;
    if (
      'dkhuy3dnivas' === z ||
      'true' ===
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'dkhuy3dnivas')
    ) {
      var Q =
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'wallThickness') != null
          ? this.parseFloat(H, 'wallThickness')
          : 1;
      var K =
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'wallDistance') != null
          ? this.parseFloat(H, 'wallDistance')
          : 0;
      var x = (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'cutOutShape');
      if (x == null && !('dkhuy3dnivas' === z)) {
        x = PieceOfFurniture.DEFAULT_CUT_OUT_SHAPE;
      }
      var v =
        'true' ===
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'wallCutOutOnBothSides');
      var J = !(
        'false' ===
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'widthDepthDeformable')
      );
      var O = new CatalogDoorOrWindow(
        t,
        q,
        r,
        M,
        A,
        E,
        D,
        o,
        h,
        e,
        c,
        l,
        d,
        k,
        f,
        y,
        x,
        Q,
        K,
        v,
        J,
        this.sashes.slice(0),
        N,
        s,
        R,
        w,
        F,
        n,
        j,
        B,
        g,
        L,
      );
      u = C != null ? new HomeDoorOrWindow(C, O) : new HomeDoorOrWindow(O);
    } else {
      var G = (function (S, T) {
        return S[T] === undefined ? null : S[T];
      })(H, 'staircaseCutOutShape');
      var p = !(
        'false' ===
        (function (S, T) {
          return S[T] === undefined ? null : S[T];
        })(H, 'horizontallyRotatable')
      );
      if ('light' === z) {
        var m = new CatalogLight(
          t,
          q,
          r,
          M,
          A,
          E,
          D,
          o,
          h,
          e,
          c,
          l,
          d,
          k,
          f,
          y,
          this.lightSources.slice(0),
          G,
          N,
          s,
          R,
          w,
          F,
          n,
          j,
          p,
          B,
          g,
          L,
        );
        u = C != null ? new HomeLight(C, m) : new HomeLight(m);
      } else {
        var i = new CatalogPieceOfFurniture(
          t,
          q,
          r,
          M,
          A,
          E,
          D,
          o,
          h,
          e,
          c,
          l,
          d,
          k,
          f,
          y,
          G,
          N,
          s,
          R,
          w,
          F,
          n,
          j,
          p,
          B,
          g,
          L,
        );
        u = C != null ? new HomePieceOfFurniture(C, i) : new HomePieceOfFurniture(i);
      }
    }
    return this.resolveObject(u, z, H);
  };
  a.prototype.createFurnitureGroup = function (c, e, h) {
    var j = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(e, 'id');
    var i =
      (function (l, n) {
        return l[n] === undefined ? null : l[n];
      })(e, 'angle') != null
        ? this.parseFloat(e, 'angle')
        : 0;
    var d =
      'true' ===
      (function (l, n) {
        return l[n] === undefined ? null : l[n];
      })(e, 'modelMirrored');
    var f = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(e, 'name');
    var g = j != null ? new HomeFurnitureGroup(j, h, i, d, f) : new HomeFurnitureGroup(h, i, d, f);
    return this.resolveObject(g, c, e);
  };
  a.prototype.setPieceOfFurnitureAttributes = function (e, l, j) {
    this.setProperties(e);
    e.setNameStyle(
      (function (x, y) {
        return x[y] === undefined ? null : x[y];
      })(
        (function (x) {
          return x[x.length - 1];
        })(this.textStyles),
        'nameStyle',
      ),
    );
    e.setNameVisible(
      'true' ===
        (function (x, y) {
          return x[y] === undefined ? null : x[y];
        })(j, 'nameVisible'),
    );
    var u = this.parseOptionalFloat(j, 'nameAngle');
    if (u != null) {
      e.setNameAngle(u);
    }
    var s = this.parseOptionalFloat(j, 'nameXOffset');
    if (s != null) {
      e.setNameXOffset(s);
    }
    var d = this.parseOptionalFloat(j, 'nameYOffset');
    if (d != null) {
      e.setNameYOffset(d);
    }
    e.setVisible(
      !(
        'false' ===
        (function (x, y) {
          return x[y] === undefined ? null : x[y];
        })(j, 'visible')
      ),
    );
    if (!(e != null && e instanceof HomeFurnitureGroup)) {
      var n = this.parseOptionalFloat(j, 'x');
      if (n != null) {
        e.setX(n);
      }
      var m = this.parseOptionalFloat(j, 'y');
      if (m != null) {
        e.setY(m);
      }
      var v = this.parseOptionalFloat(j, 'angle');
      if (v != null) {
        e.setAngle(v);
      }
      if (e.isHorizontallyRotatable()) {
        var k = this.parseOptionalFloat(j, 'pitch');
        if (k != null) {
          e.setPitch(k);
        }
        var z = this.parseOptionalFloat(j, 'roll');
        if (z != null) {
          e.setRoll(z);
        }
      }
      var c = this.parseOptionalFloat(j, 'widthInPlan');
      if (c != null) {
        e.setWidthInPlan(c);
      }
      var f = this.parseOptionalFloat(j, 'depthInPlan');
      if (f != null) {
        e.setDepthInPlan(f);
      }
      var h = this.parseOptionalFloat(j, 'heightInPlan');
      if (h != null) {
        e.setHeightInPlan(h);
      }
      if (
        this.home.getVersion() < 5500 ||
        'false' ===
          (function (x, y) {
            return x[y] === undefined ? null : x[y];
          })(j, 'modelCenteredAtOrigin')
      ) {
        e.setModelCenteredAtOrigin(
          (function (x, y) {
            return x[y] === undefined ? null : x[y];
          })(j, 'modelRotation') == null,
        );
      }
      if (e.isResizable()) {
        e.setModelMirrored(
          'true' ===
            (function (x, y) {
              return x[y] === undefined ? null : x[y];
            })(j, 'modelMirrored'),
        );
      }
      if (e.isTexturable()) {
        if (this.materials.length > 0) {
          e.setModelMaterials(this.materials.slice(0));
        }
        var t = this.parseOptionalColor(j, 'color');
        if (t != null) {
          e.setColor(t);
        }
        var p = (function (x, y) {
          return x[y] === undefined ? null : x[y];
        })(this.textures, a.UNIQUE_ATTRIBUTE);
        if (p != null) {
          e.setTexture(p);
        }
        var r = this.parseOptionalFloat(j, 'shininess');
        if (r != null) {
          e.setShininess(r);
        }
      }
      if (e.isDeformable()) {
        if (this.transformations.length > 0) {
          e.setModelTransformations(this.transformations.slice(0));
        }
      }
      if (
        e != null &&
        e instanceof HomeLight &&
        (function (x, y) {
          return x[y] === undefined ? null : x[y];
        })(j, 'power') != null
      ) {
        e.setPower(this.parseFloat(j, 'power'));
      } else {
        if (e != null && e instanceof HomeDoorOrWindow && 'dkhuy3dnivas' === l) {
          var q = e;
          q.setBoundToWall(
            !(
              'false' ===
              (function (x, y) {
                return x[y] === undefined ? null : x[y];
              })(j, 'boundToWall')
            ),
          );
          var i = this.parseOptionalFloat(j, 'wallWidth');
          if (i != null) {
            q.setWallWidth(i);
          }
          var o = this.parseOptionalFloat(j, 'wallLeft');
          if (o != null) {
            q.setWallLeft(o);
          }
          var w = this.parseOptionalFloat(j, 'wallHeight');
          if (w != null) {
            q.setWallHeight(w);
          }
          var g = this.parseOptionalFloat(j, 'wallTop');
          if (g != null) {
            q.setWallTop(g);
          }
        }
      }
    }
  };
  a.prototype.createWall = function (k, e) {
    var d = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(e, 'id');
    var f = this.parseFloat(e, 'xStart');
    var j = this.parseFloat(e, 'yStart');
    var c = this.parseFloat(e, 'xEnd');
    var i = this.parseFloat(e, 'yEnd');
    var h = this.parseFloat(e, 'thickness');
    var g = d != null ? new Wall(d, f, j, c, i, h, 0) : new Wall(f, j, c, i, h, 0);
    return this.resolveObject(g, k, e);
  };
  a.prototype.setWallAttributes = function (d, c, f) {
    this.setProperties(d);
    d.setLeftSideBaseboard(this.leftSideBaseboard);
    d.setRightSideBaseboard(this.rightSideBaseboard);
    d.setHeight(this.parseOptionalFloat(f, 'height'));
    d.setHeightAtEnd(this.parseOptionalFloat(f, 'heightAtEnd'));
    d.setArcExtent(this.parseOptionalFloat(f, 'arcExtent'));
    d.setTopColor(this.parseOptionalColor(f, 'topColor'));
    d.setLeftSideColor(this.parseOptionalColor(f, 'leftSideColor'));
    d.setLeftSideTexture(
      (function (j, l) {
        return j[l] === undefined ? null : j[l];
      })(this.textures, 'leftSideTexture'),
    );
    var e = this.parseOptionalFloat(f, 'leftSideShininess');
    if (e != null) {
      d.setLeftSideShininess(e);
    }
    d.setRightSideColor(this.parseOptionalColor(f, 'rightSideColor'));
    d.setRightSideTexture(
      (function (j, l) {
        return j[l] === undefined ? null : j[l];
      })(this.textures, 'rightSideTexture'),
    );
    var i = this.parseOptionalFloat(f, 'rightSideShininess');
    if (i != null) {
      d.setRightSideShininess(i);
    }
    var h = (function (j, l) {
      return j[l] === undefined ? null : j[l];
    })(f, 'pattern');
    if (h != null) {
      try {
        d.setPattern(this.preferences.getPatternsCatalog().getPattern$java_lang_String(h));
      } catch (g) {}
    }
  };
  a.prototype.createRoom = function (c, d, e) {
    var g = (function (h, i) {
      return h[i] === undefined ? null : h[i];
    })(d, 'id');
    var f = g != null ? new Room(g, e) : new Room(e);
    return this.resolveObject(f, c, d);
  };
  a.prototype.setRoomAttributes = function (c, m, f) {
    this.setProperties(c);
    c.setNameStyle(
      (function (n, o) {
        return n[o] === undefined ? null : n[o];
      })(
        (function (n) {
          return n[n.length - 1];
        })(this.textStyles),
        'nameStyle',
      ),
    );
    c.setAreaStyle(
      (function (n, o) {
        return n[o] === undefined ? null : n[o];
      })(
        (function (n) {
          return n[n.length - 1];
        })(this.textStyles),
        'areaStyle',
      ),
    );
    c.setName(
      (function (n, o) {
        return n[o] === undefined ? null : n[o];
      })(f, 'name'),
    );
    var e = this.parseOptionalFloat(f, 'nameAngle');
    if (e != null) {
      c.setNameAngle(e);
    }
    var d = this.parseOptionalFloat(f, 'nameXOffset');
    if (d != null) {
      c.setNameXOffset(d);
    }
    var j = this.parseOptionalFloat(f, 'nameYOffset');
    if (j != null) {
      c.setNameYOffset(j);
    }
    c.setAreaVisible(
      'true' ===
        (function (n, o) {
          return n[o] === undefined ? null : n[o];
        })(f, 'areaVisible'),
    );
    var k = this.parseOptionalFloat(f, 'areaAngle');
    if (k != null) {
      c.setAreaAngle(k);
    }
    var l = this.parseOptionalFloat(f, 'areaXOffset');
    if (l != null) {
      c.setAreaXOffset(l);
    }
    var g = this.parseOptionalFloat(f, 'areaYOffset');
    if (g != null) {
      c.setAreaYOffset(g);
    }
    c.setFloorVisible(
      !(
        'false' ===
        (function (n, o) {
          return n[o] === undefined ? null : n[o];
        })(f, 'floorVisible')
      ),
    );
    c.setFloorColor(this.parseOptionalColor(f, 'floorColor'));
    c.setFloorTexture(
      (function (n, o) {
        return n[o] === undefined ? null : n[o];
      })(this.textures, 'floorTexture'),
    );
    var h = this.parseOptionalFloat(f, 'floorShininess');
    if (h != null) {
      c.setFloorShininess(h);
    }
    c.setCeilingVisible(
      !(
        'false' ===
        (function (n, o) {
          return n[o] === undefined ? null : n[o];
        })(f, 'ceilingVisible')
      ),
    );
    c.setCeilingColor(this.parseOptionalColor(f, 'ceilingColor'));
    c.setCeilingTexture(
      (function (n, o) {
        return n[o] === undefined ? null : n[o];
      })(this.textures, 'ceilingTexture'),
    );
    var i = this.parseOptionalFloat(f, 'ceilingShininess');
    if (i != null) {
      c.setCeilingShininess(i);
    }
  };
  a.prototype.createPolyline = function (c, e, f) {
    var g = (function (h, i) {
      return h[i] === undefined ? null : h[i];
    })(e, 'id');
    var d = g != null ? new Polyline(g, f) : new Polyline(f);
    return this.resolveObject(d, c, e);
  };
  a.prototype.setPolylineAttributes = function (o, t, g) {
    this.setProperties(o);
    var n = this.parseOptionalFloat(g, 'thickness');
    if (n != null) {
      o.setThickness(n);
    }
    var r = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'capStyle');
    if (r != null) {
      try {
        o.setCapStyle(Polyline.CapStyle[r]);
      } catch (m) {}
    }
    var j = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'joinStyle');
    if (j != null) {
      try {
        o.setJoinStyle(Polyline.JoinStyle[j]);
      } catch (m) {}
    }
    var s = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'dashStyle');
    if (s != null) {
      try {
        o.setDashStyle(Polyline.DashStyle[s]);
      } catch (m) {}
    }
    var c = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'dashPattern');
    if (c != null) {
      try {
        var p = c.split(' ');
        var l = (function (u) {
          var i = [];
          while (u-- > 0) {
            i.push(0);
          }
          return i;
        })(p.length);
        for (var h = 0; h < p.length; h++) {
          l[h] = parseFloat(p[h]);
        }
        o.setDashPattern(l);
      } catch (m) {
        throw new SAXException('Invalid value for dash pattern', m);
      }
    }
    var f = this.parseOptionalFloat(g, 'dashOffset');
    if (f != null) {
      o.setDashOffset(f);
    }
    var k = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'startArrowStyle');
    if (k != null) {
      try {
        o.setStartArrowStyle(Polyline.ArrowStyle[k]);
      } catch (m) {}
    }
    var d = (function (i, u) {
      return i[u] === undefined ? null : i[u];
    })(g, 'endArrowStyle');
    if (d != null) {
      try {
        o.setEndArrowStyle(Polyline.ArrowStyle[d]);
      } catch (m) {}
    }
    var q = this.parseOptionalFloat(g, 'elevation');
    if (q != null) {
      o.setVisibleIn3D(true);
      o.setElevation(q);
    }
    var e = this.parseOptionalColor(g, 'color');
    if (e != null) {
      o.setColor(e);
    }
    o.setClosedPath(
      'true' ===
        (function (i, u) {
          return i[u] === undefined ? null : i[u];
        })(g, 'closedPath'),
    );
  };
  a.prototype.createDimensionLine = function (k, f) {
    var d = (function (l, n) {
      return l[n] === undefined ? null : l[n];
    })(f, 'id');
    var g = this.parseFloat(f, 'xStart');
    var j = this.parseFloat(f, 'yStart');
    var c = this.parseFloat(f, 'xEnd');
    var i = this.parseFloat(f, 'yEnd');
    var e = this.parseFloat(f, 'offset');
    var h = d != null ? new DimensionLine(d, g, j, c, i, e) : new DimensionLine(g, j, c, i, e);
    return this.resolveObject(h, k, f);
  };
  a.prototype.setDimensionLineAttributes = function (d, c, e) {
    this.setProperties(d);
    d.setLengthStyle(
      (function (f, g) {
        return f[g] === undefined ? null : f[g];
      })(
        (function (f) {
          return f[f.length - 1];
        })(this.textStyles),
        'lengthStyle',
      ),
    );
  };
  a.prototype.createLabel = function (d, e, g) {
    var i = (function (j, l) {
      return j[l] === undefined ? null : j[l];
    })(e, 'id');
    var c = this.parseFloat(e, 'x');
    var h = this.parseFloat(e, 'y');
    var f = i != null ? new Label(i, g, c, h) : new Label(g, c, h);
    return this.resolveObject(f, d, e);
  };
  a.prototype.setLabelAttributes = function (e, c, d) {
    this.setProperties(e);
    e.setStyle(
      (function (i, j) {
        return i[j] === undefined ? null : i[j];
      })(
        (function (i) {
          return i[i.length - 1];
        })(this.textStyles),
        a.UNIQUE_ATTRIBUTE,
      ),
    );
    var h = this.parseOptionalFloat(d, 'angle');
    if (h != null) {
      e.setAngle(h);
    }
    var f = this.parseOptionalFloat(d, 'elevation');
    if (f != null) {
      e.setElevation(f);
    }
    var g = this.parseOptionalFloat(d, 'pitch');
    if (g != null) {
      e.setPitch(g);
    }
    e.setColor(this.parseOptionalColor(d, 'color'));
    e.setOutlineColor(this.parseOptionalColor(d, 'outlineColor'));
  };
  a.prototype.createBaseboard = function (c, d) {
    var e = Baseboard.getInstance(
      this.parseFloat(d, 'thickness'),
      this.parseFloat(d, 'height'),
      this.parseOptionalColor(d, 'color'),
      (function (f, g) {
        return f[g] === undefined ? null : f[g];
      })(this.textures, a.UNIQUE_ATTRIBUTE),
    );
    return this.resolveObject(e, c, d);
  };
  a.prototype.createTextStyle = function (c, d) {
    var h = TextStyle.Alignment.CENTER;
    var f = (function (i, j) {
      return i[j] === undefined ? null : i[j];
    })(d, 'alignment');
    if (f != null) {
      try {
        h = TextStyle.Alignment[f];
      } catch (e) {}
    }
    var g = new TextStyle(
      (function (i, j) {
        return i[j] === undefined ? null : i[j];
      })(d, 'fontName'),
      this.parseFloat(d, 'fontSize'),
      'true' ===
        (function (i, j) {
          return i[j] === undefined ? null : i[j];
        })(d, 'bold'),
      'true' ===
        (function (i, j) {
          return i[j] === undefined ? null : i[j];
        })(d, 'italic'),
      h,
    );
    return this.resolveObject(g, c, d);
  };
  a.prototype.createTexture = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(d, 'catalogId');
    var e = new HomeTexture(
      new CatalogTexture(
        f,
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(d, 'name'),
        this.parseContent(
          (function (g, h) {
            return g[h] === undefined ? null : g[h];
          })(d, 'image'),
          f,
          true,
        ),
        this.parseFloat(d, 'width'),
        this.parseFloat(d, 'height'),
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(d, 'creator'),
      ),
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(d, 'xOffset') != null
        ? this.parseFloat(d, 'xOffset')
        : 0,
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(d, 'yOffset') != null
        ? this.parseFloat(d, 'yOffset')
        : 0,
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(d, 'angle') != null
        ? this.parseFloat(d, 'angle')
        : 0,
      (function (g, h) {
        return g[h] === undefined ? null : g[h];
      })(d, 'scale') != null
        ? this.parseFloat(d, 'scale')
        : 1,
      !(
        'false' ===
        (function (g, h) {
          return g[h] === undefined ? null : g[h];
        })(d, 'leftToRightOriented')
      ),
    );
    return this.resolveObject(e, c, d);
  };
  a.prototype.createMaterial = function (c, d) {
    var e = new HomeMaterial(
      (function (f, g) {
        return f[g] === undefined ? null : f[g];
      })(d, 'name'),
      (function (f, g) {
        return f[g] === undefined ? null : f[g];
      })(d, 'key'),
      this.parseOptionalColor(d, 'color'),
      this.materialTexture,
      this.parseOptionalFloat(d, 'shininess'),
    );
    return this.resolveObject(e, c, d);
  };
  a.prototype.setProperties = function (d) {
    var c = (function (i) {
      var g = [];
      for (var h in i) {
        g.push({
          k: h,
          v: i[h],
          getKey: function () {
            return this.k;
          },
          getValue: function () {
            return this.v;
          },
        });
      }
      return g;
    })(
      (function (g) {
        return g[g.length - 1];
      })(this.properties),
    );
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      d.setProperty(f.getKey(), f.getValue());
    }
  };
  a.prototype.parseOptionalColor = function (d, e) {
    var c = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(d, e);
    if (c != null) {
      try {
        return parseInt(c, 16) | 0;
      } catch (f) {
        throw new SAXException('Invalid value for color attribute ' + e, f);
      }
    } else {
      return null;
    }
  };
  a.prototype.parseOptionalInteger = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(c, d);
    if (f != null) {
      try {
        return parseInt(f);
      } catch (e) {
        throw new SAXException('Invalid value for integer attribute ' + d, e);
      }
    } else {
      return null;
    }
  };
  a.prototype.parseOptionalLong = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(c, d);
    if (f != null) {
      try {
        return parseInt(f);
      } catch (e) {
        throw new SAXException('Invalid value for long attribute ' + d, e);
      }
    } else {
      return null;
    }
  };
  a.prototype.parseOptionalDecimal = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(c, d);
    if (f != null) {
      try {
        return new Big(f);
      } catch (e) {
        throw new SAXException('Invalid value for decimal attribute ' + d, e);
      }
    } else {
      return null;
    }
  };
  a.prototype.parseOptionalFloat = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(c, d);
    if (f != null) {
      try {
        return parseFloat(f);
      } catch (e) {
        throw new SAXException('Invalid value for float attribute ' + d, e);
      }
    } else {
      return null;
    }
  };
  a.prototype.parseFloat = function (c, d) {
    var f = (function (g, h) {
      return g[h] === undefined ? null : g[h];
    })(c, d);
    if (f != null) {
      try {
        return parseFloat(f);
      } catch (e) {
        throw new SAXException('Invalid value for float attribute ' + d, e);
      }
    } else {
      throw new SAXException('Missing float attribute ' + d);
    }
  };
  a.prototype.parseContent = function (c, e, d) {
    if (c == null) {
      return null;
    } else {
      if (c.indexOf('://') >= 0) {
        return new URLContent(c);
      } else {
        return new HomeURLContent('jar:' + this['homeUrl'] + '!/' + c);
      }
    }
  };
  a.prototype.setHome = function (c) {
    this.home = c;
    this.homeElementName = (function (d) {
      return d[d.length - 1];
    })(this.elements);
  };
  a.prototype.getHome = function () {
    return this.home;
  };
  a.UNIQUE_ATTRIBUTE = '@&unique&@';
  return a;
})(DefaultHandler);