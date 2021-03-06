(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Arrays = function() { };
$hxClasses["Arrays"] = Arrays;
Arrays.__name__ = ["Arrays"];
Arrays.addIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	return arr;
};
Arrays.add = function(arr,value) {
	arr.push(value);
	return arr;
};
Arrays["delete"] = function(arr,value) {
	HxOverrides.remove(arr,value);
	return arr;
};
Arrays.removef = function(arr,f) {
	var index = -1;
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(f(arr[i])) {
			index = i;
			break;
		}
	}
	if(index < 0) return false;
	arr.splice(index,1);
	return true;
};
Arrays.deletef = function(arr,f) {
	Arrays.removef(arr,f);
	return arr;
};
Arrays.filter = function(arr,f) {
	var result = [];
	var _g = 0;
	while(_g < arr.length) {
		var i = arr[_g];
		++_g;
		if(f(i)) result.push(i);
	}
	return result;
};
Arrays.min = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0];
		var p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) > 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a1 = f(arr[0]);
		var p1 = 0;
		var b;
		var _g11 = 1;
		var _g2 = arr.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(a1 > (b = f(arr[i1]))) {
				a1 = b;
				p1 = i1;
			}
		}
		return arr[p1];
	}
};
Arrays.floatMin = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]);
	var b;
	var _g1 = 1;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
	}
	return a;
};
Arrays.bounds = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0];
		var p = 0;
		var b = arr[0];
		var q = 0;
		var _g1 = 1;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var comp = Dynamics.comparef(a);
			if(comp(a,arr[i]) > 0) a = arr[p = i];
			if(comp(b,arr[i]) < 0) b = arr[q = i];
		}
		return [arr[p],arr[q]];
	} else {
		var a1 = f(arr[0]);
		var p1 = 0;
		var b1;
		var c = f(arr[0]);
		var q1 = 0;
		var d;
		var _g11 = 1;
		var _g2 = arr.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(a1 > (b1 = f(arr[i1]))) {
				a1 = b1;
				p1 = i1;
			}
		}
		var _g12 = 1;
		var _g3 = arr.length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			if(c < (d = f(arr[i2]))) {
				c = d;
				q1 = i2;
			}
		}
		return [arr[p1],arr[q1]];
	}
};
Arrays.boundsFloat = function(arr,f) {
	if(arr.length == 0) return null;
	var a = f(arr[0]);
	var b;
	var c = f(arr[0]);
	var d;
	var _g1 = 1;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
		if(c < (d = f(arr[i]))) c = d;
	}
	return [a,c];
};
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0];
		var p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) < 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a1 = f(arr[0]);
		var p1 = 0;
		var b;
		var _g11 = 1;
		var _g2 = arr.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(a1 < (b = f(arr[i1]))) {
				a1 = b;
				p1 = i1;
			}
		}
		return arr[p1];
	}
};
Arrays.floatMax = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]);
	var b;
	var _g1 = 1;
	var _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a < (b = f(arr[i]))) a = b;
	}
	return a;
};
Arrays.flatten = function(arr) {
	var r = [];
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		r = r.concat(v);
	}
	return r;
};
Arrays.map = function(arr,f) {
	return Iterators.map(HxOverrides.iter(arr),f);
};
Arrays.reduce = function(arr,f,initialValue) {
	return arr.reduce(f,initialValue);
};
Arrays.order = function(arr,f) {
	arr.sort(null == f?Dynamics.compare:f);
	return arr;
};
Arrays.orderMultiple = function(arr,f,rest) {
	var swap = true;
	var t;
	HxOverrides.remove(rest,arr);
	while(swap) {
		swap = false;
		var _g1 = 0;
		var _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			if(f(arr[i],arr[i + 1]) > 0) {
				swap = true;
				t = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = t;
				var _g2 = 0;
				while(_g2 < rest.length) {
					var a = rest[_g2];
					++_g2;
					t = a[i];
					a[i] = a[i + 1];
					a[i + 1] = t;
				}
			}
		}
	}
};
Arrays.split = function(arr,f) {
	if(null == f) f = function(v,_) {
		return v == null;
	};
	var arrays = [];
	var i = -1;
	var values = [];
	var value;
	var _g1 = 0;
	var _g = arr.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		if(f(value = arr[i1],i1)) values = []; else {
			if(values.length == 0) arrays.push(values);
			values.push(value);
		}
	}
	return arrays;
};
Arrays.exists = function(arr,value,f) {
	if(null != f) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(f(v)) return true;
		}
	} else {
		var _g1 = 0;
		while(_g1 < arr.length) {
			var v1 = arr[_g1];
			++_g1;
			if(v1 == value) return true;
		}
	}
	return false;
};
Arrays.format = function(v,param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty;
			if(null == params[1]) empty = "[]"; else empty = params[1];
			return empty;
		}
		var sep;
		if(null == params[2]) sep = ", "; else sep = params[2];
		var max;
		if(params[3] == null) max = null; else if("" == params[3]) max = null; else max = Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis;
			if(null == params[4]) elipsis = " ..."; else elipsis = params[4];
			return Arrays.map(v.slice().splice(0,max),function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep) + elipsis;
		} else return Iterators.map(HxOverrides.iter(v),function(d1,i1) {
			return Dynamics.format(d1,params[0],null,null,culture);
		}).join(sep);
		break;
	case "C":
		return Ints.format(v.length,"I",[],culture);
	default:
		throw "Unsupported array format: " + format;
	}
};
Arrays.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		return function(v) {
			if(v.length == 0) {
				var empty;
				if(null == params[1]) empty = "[]"; else empty = params[1];
				return empty;
			}
			var sep;
			if(null == params[2]) sep = ", "; else sep = params[2];
			var max;
			if(params[3] == null) max = null; else if("" == params[3]) max = null; else max = Std.parseInt(params[3]);
			if(null != max && max < v.length) {
				var elipsis;
				if(null == params[4]) elipsis = " ..."; else elipsis = params[4];
				return Arrays.map(v.slice().splice(0,max),function(d,i) {
					return Dynamics.format(d,params[0],null,null,culture);
				}).join(sep) + elipsis;
			} else return Iterators.map(HxOverrides.iter(v),function(d1,i1) {
				return Dynamics.format(d1,params[0],null,null,culture);
			}).join(sep);
		};
	case "C":
		var f = Ints.formatf("I",[],culture);
		return function(v1) {
			return f(v1.length);
		};
	default:
		throw "Unsupported array format: " + format;
	}
};
Arrays.interpolate = function(v,a,b,equation) {
	return (Arrays.interpolatef(a,b,equation))(v);
};
Arrays.interpolatef = function(a,b,equation) {
	var functions = [];
	var i = 0;
	var min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Floats.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v1 = [b[i]];
		functions.push((function(v1) {
			return function(_1) {
				return v1[0];
			};
		})(v1));
		i++;
	}
	return function(t) {
		return Iterators.map(HxOverrides.iter(functions),function(f,_2) {
			return f(t);
		});
	};
};
Arrays.interpolateStrings = function(v,a,b,equation) {
	return (Arrays.interpolateStringsf(a,b,equation))(v);
};
Arrays.interpolateStringsf = function(a,b,equation) {
	var functions = [];
	var i = 0;
	var min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Strings.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v1 = [b[i]];
		functions.push((function(v1) {
			return function(_1) {
				return v1[0];
			};
		})(v1));
		i++;
	}
	return function(t) {
		return Iterators.map(HxOverrides.iter(functions),function(f,_2) {
			return f(t);
		});
	};
};
Arrays.interpolateInts = function(v,a,b,equation) {
	return (Arrays.interpolateIntsf(a,b,equation))(v);
};
Arrays.interpolateIntsf = function(a,b,equation) {
	var functions = [];
	var i = 0;
	var min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Ints.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v1 = [b[i]];
		functions.push((function(v1) {
			return function(_1) {
				return v1[0];
			};
		})(v1));
		i++;
	}
	return function(t) {
		return Iterators.map(HxOverrides.iter(functions),function(f,_2) {
			return f(t);
		});
	};
};
Arrays.indexOf = function(arr,el) {
	return HxOverrides.indexOf(arr,el,0);
};
Arrays.every = function(arr,f) {
	return arr.every(f);
};
Arrays.each = function(arr,f) {
	arr.forEach(f);
};
Arrays.any = function(arr,f) {
	return Iterators.any(HxOverrides.iter(arr),f);
};
Arrays.all = function(arr,f) {
	return Iterators.all(HxOverrides.iter(arr),f);
};
Arrays.random = function(arr) {
	return arr[Std.random(arr.length)];
};
Arrays.string = function(arr) {
	return "[" + Iterators.map(HxOverrides.iter(arr),function(v,_) {
		return Dynamics.string(v);
	}).join(", ") + "]";
};
Arrays.last = function(arr) {
	return arr[arr.length - 1];
};
Arrays.lastf = function(arr,f) {
	var i = arr.length;
	while(--i >= 0) if(f(arr[i])) return arr[i];
	return null;
};
Arrays.first = function(arr) {
	return arr[0];
};
Arrays.firstf = function(arr,f) {
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		if(f(v)) return v;
	}
	return null;
};
Arrays.bisect = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	return Arrays.bisectRight(a,x,lo,hi);
};
Arrays.bisectRight = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(x < a[mid]) hi = mid; else lo = mid + 1;
	}
	return lo;
};
Arrays.bisectLeft = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(a[mid] < x) lo = mid + 1; else hi = mid;
	}
	return lo;
};
Arrays.nearest = function(a,x,f) {
	var delta = [];
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		delta.push({ i : i, v : Math.abs(f(a[i]) - x)});
	}
	delta.sort(function(a1,b) {
		return Floats.compare(a1.v,b.v);
	});
	return a[delta[0].i];
};
Arrays.compare = function(a,b) {
	var v;
	if((v = a.length - b.length) != 0) return v;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = Dynamics.compare(a[i],b[i])) != 0) return v;
	}
	return 0;
};
Arrays.product = function(a) {
	if(a.length == 0) return [];
	var arr = a.slice();
	var result = [];
	var temp;
	var _g = 0;
	var _g1 = arr[0];
	while(_g < _g1.length) {
		var value = _g1[_g];
		++_g;
		result.push([value]);
	}
	var _g11 = 1;
	var _g2 = arr.length;
	while(_g11 < _g2) {
		var i = _g11++;
		temp = [];
		var _g21 = 0;
		while(_g21 < result.length) {
			var acc = result[_g21];
			++_g21;
			var _g3 = 0;
			var _g4 = arr[i];
			while(_g3 < _g4.length) {
				var value1 = _g4[_g3];
				++_g3;
				temp.push(acc.slice().concat([value1]));
			}
		}
		result = temp;
	}
	return result;
};
Arrays.rotate = function(a) {
	if(a.length == 0) return [];
	var result = [];
	var _g1 = 0;
	var _g = a[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		result[i] = [];
	}
	var _g11 = 0;
	var _g2 = a.length;
	while(_g11 < _g2) {
		var j = _g11++;
		var _g3 = 0;
		var _g21 = a[0].length;
		while(_g3 < _g21) {
			var i1 = _g3++;
			result[i1][j] = a[j][i1];
		}
	}
	return result;
};
Arrays.shuffle = function(a) {
	var t = Ints.range(a.length);
	var arr = [];
	while(t.length > 0) {
		var pos = Std.random(t.length);
		var index = t[pos];
		t.splice(pos,1);
		arr.push(a[index]);
	}
	return arr;
};
Arrays.scanf = function(arr,weightf,incremental) {
	if(incremental == null) incremental = true;
	var tot = 0.0;
	var weights = [];
	if(incremental) {
		var _g1 = 0;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			weights[i] = tot += weightf(arr[i],i);
		}
	} else {
		var _g11 = 0;
		var _g2 = arr.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			weights[i1] = weightf(arr[i1],i1);
		}
		tot = weights[weights.length - 1];
	}
	var scan;
	var scan1 = null;
	scan1 = function(v,start,end) {
		if(start == end) return arr[start];
		var mid = Math.floor((end - start) / 2) + start;
		var value = weights[mid];
		if(v < value) return scan1(v,start,mid); else return scan1(v,mid + 1,end);
	};
	scan = scan1;
	return function(v1) {
		if(v1 < 0 || v1 > tot) return null;
		return scan(v1,0,weights.length - 1);
	};
};
var Bools = function() { };
$hxClasses["Bools"] = Bools;
Bools.__name__ = ["Bools"];
Bools.format = function(v,param,params,culture) {
	return (Bools.formatf(param,params,culture))(v);
};
Bools.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"B");
	var format = params.shift();
	switch(format) {
	case "B":
		return function(v) {
			if(v) return "true"; else return "false";
		};
	case "N":
		return function(v1) {
			if(v1) return "1"; else return "0";
		};
	case "R":
		if(params.length != 2) throw "bool format R requires 2 parameters";
		return function(v2) {
			if(v2) return params[0]; else return params[1];
		};
	default:
		throw "Unsupported bool format: " + format;
	}
};
Bools.interpolate = function(v,a,b,equation) {
	return (Bools.interpolatef(a,b,equation))(v);
};
Bools.interpolatef = function(a,b,equation) {
	if(a == b) return function(_) {
		return a;
	}; else {
		var f = Floats.interpolatef(0,1,equation);
		return function(v) {
			if(f(v) < 0.5) return a; else return b;
		};
	}
};
Bools.canParse = function(s) {
	s = s.toLowerCase();
	return s == "true" || s == "false";
};
Bools.parse = function(s) {
	return s.toLowerCase() == "true";
};
Bools.compare = function(a,b) {
	if(a == b) return 0; else if(a) return -1; else return 1;
};
var CompileTime = function() { };
$hxClasses["CompileTime"] = CompileTime;
CompileTime.__name__ = ["CompileTime"];
var CompileTimeClassList = function() { };
$hxClasses["CompileTimeClassList"] = CompileTimeClassList;
CompileTimeClassList.__name__ = ["CompileTimeClassList"];
CompileTimeClassList.get = function(id) {
	if(CompileTimeClassList.lists == null) CompileTimeClassList.initialise();
	return CompileTimeClassList.lists.get(id);
};
CompileTimeClassList.getTyped = function(id,type) {
	return CompileTimeClassList.get(id);
};
CompileTimeClassList.initialise = function() {
	CompileTimeClassList.lists = new haxe.ds.StringMap();
	var m = haxe.rtti.Meta.getType(CompileTimeClassList);
	if(m.classLists != null) {
		var _g = 0;
		var _g1 = m.classLists;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			var array = item;
			var listID = array[0];
			var list = new List();
			var _g2 = 0;
			var _g3 = array[1].split(",");
			while(_g2 < _g3.length) {
				var typeName = _g3[_g2];
				++_g2;
				var type = Type.resolveClass(typeName);
				if(type != null) list.push(type);
			}
			CompileTimeClassList.lists.set(listID,list);
		}
	}
};
var DateTools = function() { };
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.delta = function(d,t) {
	var t1 = d.getTime() + t;
	var d1 = new Date();
	d1.setTime(t1);
	return d1;
};
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	if(isB) return 29; else return 28;
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,map: function(s,f) {
		var offset = 0;
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.add(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.add(HxOverrides.substr(s,offset,p.pos - offset));
			buf.add(f(this));
			if(p.len == 0) {
				buf.add(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.add(HxOverrides.substr(s,offset,null));
		return buf.b;
	}
	,__class__: EReg
};
var Dates = function() { };
$hxClasses["Dates"] = Dates;
Dates.__name__ = ["Dates"];
Dates.format = function(d,param,params,culture) {
	return (Dates.formatf(param,params,culture))(d);
};
Dates.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		};
	case "DS":
		return function(d1) {
			return thx.culture.FormatDate.dateShort(d1,culture);
		};
	case "DST":
		return function(d2) {
			return thx.culture.FormatDate.dateShort(d2,culture) + " " + thx.culture.FormatDate.time(d2,culture);
		};
	case "DSTS":
		return function(d3) {
			return thx.culture.FormatDate.dateShort(d3,culture) + " " + thx.culture.FormatDate.timeShort(d3,culture);
		};
	case "DTS":
		return function(d4) {
			return thx.culture.FormatDate.date(d4,culture) + " " + thx.culture.FormatDate.timeShort(d4,culture);
		};
	case "Y":
		return function(d5) {
			return thx.culture.FormatDate.year(d5,culture);
		};
	case "YM":
		return function(d6) {
			return thx.culture.FormatDate.yearMonth(d6,culture);
		};
	case "M":
		return function(d7) {
			return thx.culture.FormatDate.month(d7,culture);
		};
	case "MN":
		return function(d8) {
			return thx.culture.FormatDate.monthName(d8,culture);
		};
	case "MS":
		return function(d9) {
			return thx.culture.FormatDate.monthNameShort(d9,culture);
		};
	case "MD":
		return function(d10) {
			return thx.culture.FormatDate.monthDay(d10,culture);
		};
	case "MDS":
		return function(d11) {
			return thx.culture.FormatDate.monthDayShort(d11,culture);
		};
	case "WD":
		return function(d12) {
			return thx.culture.FormatDate.weekDay(d12,culture);
		};
	case "WDN":
		return function(d13) {
			return thx.culture.FormatDate.weekDayName(d13,culture);
		};
	case "WDS":
		return function(d14) {
			return thx.culture.FormatDate.weekDayNameShort(d14,culture);
		};
	case "R":
		return function(d15) {
			return thx.culture.FormatDate.dateRfc(d15,culture);
		};
	case "DT":
		return function(d16) {
			return thx.culture.FormatDate.dateTime(d16,culture);
		};
	case "U":
		return function(d17) {
			return thx.culture.FormatDate.universal(d17,culture);
		};
	case "S":
		return function(d18) {
			return thx.culture.FormatDate.sortable(d18,culture);
		};
	case "T":
		return function(d19) {
			return thx.culture.FormatDate.time(d19,culture);
		};
	case "TS":
		return function(d20) {
			return thx.culture.FormatDate.timeShort(d20,culture);
		};
	case "C":
		var f = params[0];
		if(null == f) return function(d21) {
			return thx.culture.FormatDate.date(d21,culture);
		}; else return function(d22) {
			return thx.culture.FormatDate.format(d22,f,culture,params[1] != null?params[1] == "true":true);
		};
		break;
	default:
		return function(d23) {
			return thx.culture.FormatDate.format(d23,format,culture,params[0] != null?params[0] == "true":true);
		};
	}
};
Dates.interpolate = function(f,a,b,equation) {
	return (Dates.interpolatef(a,b,equation))(f);
};
Dates.interpolatef = function(a,b,equation) {
	var f = Floats.interpolatef(a.getTime(),b.getTime(),equation);
	return function(v) {
		var t = f(v);
		var d = new Date();
		d.setTime(t);
		return d;
	};
};
Dates.snap = function(time,period,mode) {
	var mode1;
	if(mode != null) mode1 = mode; else mode1 = SnapMode.Round;
	switch(mode1[1]) {
	case 1:
		switch(period[1]) {
		case 0:
			return Math.floor(time / 1000.0) * 1000.0;
		case 1:
			return Math.floor(time / 60000.0) * 60000.0;
		case 2:
			return Math.floor(time / 3600000.0) * 3600000.0;
		case 3:
			var d;
			var d1 = new Date();
			d1.setTime(time);
			d = d1;
			return new Date(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0).getTime();
		case 4:
			return Math.floor(time / 604800000.) * 604800000.;
		case 5:
			var d2;
			var d3 = new Date();
			d3.setTime(time);
			d2 = d3;
			return new Date(d2.getFullYear(),d2.getMonth(),1,0,0,0).getTime();
		case 6:
			var d4;
			var d5 = new Date();
			d5.setTime(time);
			d4 = d5;
			return new Date(d4.getFullYear(),0,1,0,0,0).getTime();
		}
		break;
	case 0:
		switch(period[1]) {
		case 0:
			return Math.ceil(time / 1000.0) * 1000.0;
		case 1:
			return Math.ceil(time / 60000.0) * 60000.0;
		case 2:
			return Math.ceil(time / 3600000.0) * 3600000.0;
		case 3:
			var d6;
			var d7 = new Date();
			d7.setTime(time);
			d6 = d7;
			return new Date(d6.getFullYear(),d6.getMonth(),d6.getDate() + 1,0,0,0).getTime();
		case 4:
			return Math.ceil(time / 604800000.) * 604800000.;
		case 5:
			var d8;
			var d9 = new Date();
			d9.setTime(time);
			d8 = d9;
			return new Date(d8.getFullYear(),d8.getMonth() + 1,1,0,0,0).getTime();
		case 6:
			var d10;
			var d11 = new Date();
			d11.setTime(time);
			d10 = d11;
			return new Date(d10.getFullYear() + 1,0,1,0,0,0).getTime();
		}
		break;
	case 2:
		switch(period[1]) {
		case 0:
			return Math.round(time / 1000.0) * 1000.0;
		case 1:
			return Math.round(time / 60000.0) * 60000.0;
		case 2:
			return Math.round(time / 3600000.0) * 3600000.0;
		case 3:
			var d12;
			var d13 = new Date();
			d13.setTime(time);
			d12 = d13;
			var mod;
			if(d12.getHours() >= 12) mod = 1; else mod = 0;
			return new Date(d12.getFullYear(),d12.getMonth(),d12.getDate() + mod,0,0,0).getTime();
		case 4:
			return Math.round(time / 604800000.) * 604800000.;
		case 5:
			var d14;
			var d15 = new Date();
			d15.setTime(time);
			d14 = d15;
			var mod1;
			if(d14.getDate() > Math.round(DateTools.getMonthDays(d14) / 2)) mod1 = 1; else mod1 = 0;
			return new Date(d14.getFullYear(),d14.getMonth() + mod1,1,0,0,0).getTime();
		case 6:
			var d16;
			var d17 = new Date();
			d17.setTime(time);
			d16 = d17;
			var mod2;
			if(time > new Date(d16.getFullYear(),6,2,0,0,0).getTime()) mod2 = 1; else mod2 = 0;
			return new Date(d16.getFullYear() + mod2,0,1,0,0,0).getTime();
		}
		break;
	}
};
Dates.snapToWeekDay = function(time,day,snapMode,firstDayOfWk) {
	var snapMode1;
	if(snapMode != null) snapMode1 = snapMode; else snapMode1 = SnapMode.Round;
	if(firstDayOfWk == null) firstDayOfWk = 0;
	var d = ((function($this) {
		var $r;
		var d1 = new Date();
		d1.setTime(time);
		$r = d1;
		return $r;
	}(this))).getDay();
	var s = day;
	if(s == -1) throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 251, className : "Dates", methodName : "snapToWeekDay"});
	switch(snapMode1[1]) {
	case 1:
		if(s > d) s = s - 7;
		return time - (d - s) * 24 * 60 * 60 * 1000;
	case 0:
		if(s < d) s = s + 7;
		return time + (s - d) * 24 * 60 * 60 * 1000;
	case 2:
		if(s < firstDayOfWk) s = s + 7;
		if(d < firstDayOfWk) d = d + 7;
		return time + (s - d) * 24 * 60 * 60 * 1000;
	}
};
Dates.isLeapYear = function(year) {
	if(year % 4 != 0) return false;
	if(year % 100 == 0) return year % 400 == 0;
	return true;
};
Dates.isInLeapYear = function(d) {
	return Dates.isLeapYear(d.getFullYear());
};
Dates.numDaysInMonth = function(month,year) {
	switch(month) {
	case 0:case 2:case 4:case 6:case 7:case 9:case 11:
		return 31;
	case 3:case 5:case 8:case 10:
		return 30;
	case 1:
		if(Dates.isLeapYear(year)) return 29; else return 28;
		break;
	default:
		throw new thx.error.Error("Invalid month '{0}'.  Month should be a number, Jan=0, Dec=11",null,month,{ fileName : "Dates.hx", lineNumber : 316, className : "Dates", methodName : "numDaysInMonth"});
		return 0;
	}
};
Dates.numDaysInThisMonth = function(d) {
	return Dates.numDaysInMonth(d.getMonth(),d.getFullYear());
};
Dates.dateBasedDelta = function(d,yearDelta,monthDelta,dayDelta,hourDelta,minDelta,secDelta,msDelta) {
	if(msDelta == null) msDelta = 0;
	if(secDelta == null) secDelta = 0;
	if(minDelta == null) minDelta = 0;
	if(hourDelta == null) hourDelta = 0;
	if(dayDelta == null) dayDelta = 0;
	if(monthDelta == null) monthDelta = 0;
	if(yearDelta == null) yearDelta = 0;
	var year = d.getFullYear() + yearDelta;
	var month = d.getMonth() + monthDelta;
	var day = d.getDate() + dayDelta;
	var hour = d.getHours() + hourDelta;
	var min = d.getMinutes() + minDelta;
	var sec = d.getSeconds() + secDelta;
	while(sec > 60) {
		sec -= 60;
		min++;
	}
	while(min > 60) {
		min -= 60;
		hour++;
	}
	while(hour > 23) {
		hour -= 24;
		day++;
	}
	while(hour > 23) {
		hour -= 24;
		day++;
	}
	var daysInMonth = Dates.numDaysInMonth(month,year);
	while(day > daysInMonth || month > 11) {
		if(day > daysInMonth) {
			day -= daysInMonth;
			month++;
		}
		if(month > 11) {
			month -= 12;
			year++;
		}
		daysInMonth = Dates.numDaysInMonth(month,year);
	}
	var d1 = new Date(year,month,day,hour,min,sec);
	return DateTools.delta(d1,msDelta);
};
Dates.deltaSec = function(d,numSec) {
	return DateTools.delta(d,numSec * 1000);
};
Dates.deltaMin = function(d,numMin) {
	return DateTools.delta(d,numMin * 60 * 1000);
};
Dates.deltaHour = function(d,numHrs) {
	return DateTools.delta(d,numHrs * 60 * 60 * 1000);
};
Dates.deltaDay = function(d,numDays) {
	return Dates.dateBasedDelta(d,0,0,numDays);
};
Dates.deltaWeek = function(d,numWks) {
	return Dates.dateBasedDelta(d,0,0,numWks * 7);
};
Dates.deltaMonth = function(d,numMonths) {
	return Dates.dateBasedDelta(d,0,numMonths);
};
Dates.deltaYear = function(d,numYrs) {
	return Dates.dateBasedDelta(d,numYrs);
};
Dates.prevYear = function(d) {
	return Dates.dateBasedDelta(d,-1);
};
Dates.nextYear = function(d) {
	return Dates.dateBasedDelta(d,1);
};
Dates.prevMonth = function(d) {
	return Dates.dateBasedDelta(d,0,-1);
};
Dates.nextMonth = function(d) {
	return Dates.dateBasedDelta(d,0,1);
};
Dates.prevWeek = function(d) {
	return Dates.dateBasedDelta(d,0,0,-7);
};
Dates.nextWeek = function(d) {
	return Dates.dateBasedDelta(d,0,0,7);
};
Dates.prevDay = function(d) {
	return Dates.dateBasedDelta(d,0,0,-1);
};
Dates.nextDay = function(d) {
	return Dates.dateBasedDelta(d,0,0,1);
};
Dates.canParse = function(s) {
	return Dates._reparse.match(s);
};
Dates.parse = function(s) {
	var parts = s.split(".");
	var date;
	var s1 = StringTools.replace(parts[0],"T"," ");
	date = HxOverrides.strDate(s1);
	if(parts.length > 1) {
		var t = date.getTime() + Std.parseInt(parts[1]);
		var d = new Date();
		d.setTime(t);
		date = d;
	}
	return date;
};
Dates.compare = function(a,b) {
	return Floats.compare(a.getTime(),b.getTime());
};
var _Dates = {};
_Dates.Weekday_Impl_ = function() { };
$hxClasses["_Dates.Weekday_Impl_"] = _Dates.Weekday_Impl_;
_Dates.Weekday_Impl_.__name__ = ["_Dates","Weekday_Impl_"];
_Dates.Month_Impl_ = function() { };
$hxClasses["_Dates.Month_Impl_"] = _Dates.Month_Impl_;
_Dates.Month_Impl_.__name__ = ["_Dates","Month_Impl_"];
var TimePeriod = $hxClasses["TimePeriod"] = { __ename__ : ["TimePeriod"], __constructs__ : ["Second","Minute","Hour","Day","Week","Month","Year"] };
TimePeriod.Second = ["Second",0];
TimePeriod.Second.toString = $estr;
TimePeriod.Second.__enum__ = TimePeriod;
TimePeriod.Minute = ["Minute",1];
TimePeriod.Minute.toString = $estr;
TimePeriod.Minute.__enum__ = TimePeriod;
TimePeriod.Hour = ["Hour",2];
TimePeriod.Hour.toString = $estr;
TimePeriod.Hour.__enum__ = TimePeriod;
TimePeriod.Day = ["Day",3];
TimePeriod.Day.toString = $estr;
TimePeriod.Day.__enum__ = TimePeriod;
TimePeriod.Week = ["Week",4];
TimePeriod.Week.toString = $estr;
TimePeriod.Week.__enum__ = TimePeriod;
TimePeriod.Month = ["Month",5];
TimePeriod.Month.toString = $estr;
TimePeriod.Month.__enum__ = TimePeriod;
TimePeriod.Year = ["Year",6];
TimePeriod.Year.toString = $estr;
TimePeriod.Year.__enum__ = TimePeriod;
TimePeriod.__empty_constructs__ = [TimePeriod.Second,TimePeriod.Minute,TimePeriod.Hour,TimePeriod.Day,TimePeriod.Week,TimePeriod.Month,TimePeriod.Year];
var SnapMode = $hxClasses["SnapMode"] = { __ename__ : ["SnapMode"], __constructs__ : ["Up","Down","Round"] };
SnapMode.Up = ["Up",0];
SnapMode.Up.toString = $estr;
SnapMode.Up.__enum__ = SnapMode;
SnapMode.Down = ["Down",1];
SnapMode.Down.toString = $estr;
SnapMode.Down.__enum__ = SnapMode;
SnapMode.Round = ["Round",2];
SnapMode.Round.toString = $estr;
SnapMode.Round.__enum__ = SnapMode;
SnapMode.__empty_constructs__ = [SnapMode.Up,SnapMode.Down,SnapMode.Round];
var Dynamics = function() { };
$hxClasses["Dynamics"] = Dynamics;
Dynamics.__name__ = ["Dynamics"];
Dynamics.format = function(v,param,params,nullstring,culture) {
	return (Dynamics.formatf(param,params,nullstring,culture))(v);
};
Dynamics.formatf = function(param,params,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	return function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				return nullstring;
			case 1:
				return Ints.format(v,param,params,culture);
			case 2:
				return Floats.format(v,param,params,culture);
			case 3:
				return Bools.format(v,param,params,culture);
			case 6:
				var c = _g[2];
				if(c == String) return Strings.formatOne(v,param,params,culture); else if(c == Array) return Arrays.format(v,param,params,culture); else if(c == Date) return Dates.format(v,param,params,culture); else return Objects.format(v,param,params,culture);
				break;
			case 4:
				return Objects.format(v,param,params,culture);
			case 5:
				return "function()";
			default:
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 46, className : "Dynamics", methodName : "formatf"});
			}
		}
	};
};
Dynamics.interpolate = function(v,a,b,equation) {
	return (Dynamics.interpolatef(a,b,equation))(v);
};
Dynamics.interpolatef = function(a,b,equation) {
	var ta = Type["typeof"](a);
	var tb = Type["typeof"](b);
	if(!((typeof(a) == "number" || ((a | 0) === a)) && (typeof(b) == "number" || ((b | 0) === b))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 61, className : "Dynamics", methodName : "interpolatef"});
	switch(ta[1]) {
	case 0:
		return function(_) {
			return null;
		};
	case 1:
		if(((b | 0) === b)) return Ints.interpolatef(a,b,equation); else return Floats.interpolatef(a,b,equation);
		break;
	case 2:
		return Floats.interpolatef(a,b,equation);
	case 3:
		return Bools.interpolatef(a,b,equation);
	case 4:
		return Objects.interpolatef(a,b,equation);
	case 6:
		var c = ta[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			return Strings.interpolatef(a,b,equation);
		case "Date":
			return Dates.interpolatef(a,b,equation);
		default:
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 79, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 81, className : "Dynamics", methodName : "interpolatef"});
	}
};
Dynamics.string = function(v) {
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:
			return "null";
		case 1:
			return Ints.format(v);
		case 2:
			return Floats.format(v);
		case 3:
			return Bools.format(v);
		case 4:
			var keys = Objects.keys(v);
			var result = [];
			var _g1 = 0;
			while(_g1 < keys.length) {
				var key = keys[_g1];
				++_g1;
				result.push(key + " : " + Dynamics.string(Reflect.field(v,key)));
			}
			return "{" + result.join(", ") + "}";
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				return Arrays.string(v);
			case "String":
				var s = v;
				if(s.indexOf("\"") < 0) return "\"" + s + "\""; else if(s.indexOf("'") < 0) return "'" + s + "'"; else return "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
				break;
			case "Date":
				return Dates.format(v);
			default:
				return Std.string(v);
			}
			break;
		case 7:
			return Enums.string(v);
		case 8:
			return "<unknown>";
		case 5:
			return "<function>";
		}
	}
};
Dynamics.compare = function(a,b) {
	if(null == a && null == b) return 0;
	if(null == a) return -1;
	if(null == b) return 1;
	{
		var _g = Type["typeof"](a);
		switch(_g[1]) {
		case 1:case 2:
			return Floats.compare(a,b);
		case 3:
			return Bools.compare(a,b);
		case 4:
			return Objects.compare(a,b);
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				return Arrays.compare(a,b);
			case "String":
				return Strings.compare(a,b);
			case "Date":
				return Dates.compare(a,b);
			default:
				return Strings.compare(Std.string(a),Std.string(b));
			}
			break;
		case 7:
			return Enums.compare(a,b);
		default:
			return 0;
		}
	}
};
Dynamics.comparef = function(sample) {
	{
		var _g = Type["typeof"](sample);
		switch(_g[1]) {
		case 1:case 2:
			return Floats.compare;
		case 3:
			return Bools.compare;
		case 4:
			return Objects.compare;
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				return Arrays.compare;
			case "String":
				return Strings.compare;
			case "Date":
				return Dates.compare;
			default:
				return function(a,b) {
					return Strings.compare(Std.string(a),Std.string(b));
				};
			}
			break;
		case 7:
			return Enums.compare;
		default:
			return Dynamics.compare;
		}
	}
};
Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:
			return null;
		case 1:case 2:case 3:case 7:case 8:case 5:
			return v;
		case 4:
			var o = { };
			Objects.copyTo(v,o);
			return o;
		case 6:
			var c = _g[2];
			var name = Type.getClassName(c);
			switch(name) {
			case "Array":
				var src = v;
				var a = [];
				var _g1 = 0;
				while(_g1 < src.length) {
					var i = src[_g1];
					++_g1;
					a.push(Dynamics.clone(i));
				}
				return a;
			case "String":case "Date":
				return v;
			default:
				if(cloneInstances) {
					var o1 = Type.createEmptyInstance(c);
					var _g11 = 0;
					var _g2 = Reflect.fields(v);
					while(_g11 < _g2.length) {
						var field = _g2[_g11];
						++_g11;
						Reflect.setField(o1,field,Dynamics.clone(Reflect.field(v,field)));
					}
					return o1;
				} else return v;
			}
			break;
		}
	}
};
Dynamics.same = function(a,b) {
	var ta = Types.typeName(a);
	var tb = Types.typeName(b);
	if(ta != tb) return false;
	{
		var _g = Type["typeof"](a);
		switch(_g[1]) {
		case 2:
			return Floats.equals(a,b);
		case 0:case 1:case 3:
			return a == b;
		case 5:
			return Reflect.compareMethods(a,b);
		case 6:
			var c = _g[2];
			var ca = Type.getClassName(c);
			var cb = Type.getClassName(Type.getClass(b));
			if(ca != cb) return false;
			if(typeof(a) == "string" && a != b) return false;
			if((a instanceof Array) && a.__enum__ == null) {
				var aa = a;
				var ab = b;
				if(aa.length != ab.length) return false;
				var _g2 = 0;
				var _g1 = aa.length;
				while(_g2 < _g1) {
					var i = _g2++;
					if(!Dynamics.same(aa[i],ab[i])) return false;
				}
				return true;
			}
			if(js.Boot.__instanceof(a,Date)) return a.getTime() == b.getTime();
			if(js.Boot.__instanceof(a,haxe.ds.StringMap) || js.Boot.__instanceof(a,haxe.ds.IntMap)) {
				var ha = a;
				var hb = b;
				var ka = Iterators.array(ha.keys());
				var kb = Iterators.array(hb.keys());
				if(ka.length != kb.length) return false;
				var _g11 = 0;
				while(_g11 < ka.length) {
					var key = ka[_g11];
					++_g11;
					if(!hb.exists(key) || !Dynamics.same(ha.get(key),hb.get(key))) return false;
				}
				return true;
			}
			var t = false;
			if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
				var va;
				if(t) va = Iterators.array(a); else va = Iterators.array($iterator(a)());
				var vb;
				if(t) vb = Iterators.array(b); else vb = Iterators.array($iterator(b)());
				if(va.length != vb.length) return false;
				var _g21 = 0;
				var _g12 = va.length;
				while(_g21 < _g12) {
					var i1 = _g21++;
					if(!Dynamics.same(va[i1],vb[i1])) return false;
				}
				return true;
			}
			var fields = Type.getInstanceFields(Type.getClass(a));
			var _g13 = 0;
			while(_g13 < fields.length) {
				var field = fields[_g13];
				++_g13;
				var va1 = Reflect.field(a,field);
				if(Reflect.isFunction(va1)) continue;
				var vb1 = Reflect.field(b,field);
				if(!Dynamics.same(va1,vb1)) return false;
			}
			return true;
		case 7:
			var e = _g[2];
			var ea = Type.getEnumName(e);
			var teb = Type.getEnum(b);
			var eb = Type.getEnumName(teb);
			if(ea != eb) return false;
			if(a[1] != b[1]) return false;
			var pa = a.slice(2);
			var pb = b.slice(2);
			var _g22 = 0;
			var _g14 = pa.length;
			while(_g22 < _g14) {
				var i2 = _g22++;
				if(!Dynamics.same(pa[i2],pb[i2])) return false;
			}
			return true;
		case 4:
			var fa = Reflect.fields(a);
			var fb = Reflect.fields(b);
			var _g15 = 0;
			while(_g15 < fa.length) {
				var field1 = fa[_g15];
				++_g15;
				HxOverrides.remove(fb,field1);
				if(!Object.prototype.hasOwnProperty.call(b,field1)) return false;
				var va2 = Reflect.field(a,field1);
				if(Reflect.isFunction(va2)) continue;
				var vb2 = Reflect.field(b,field1);
				if(!Dynamics.same(va2,vb2)) return false;
			}
			if(fb.length > 0) return false;
			var t1 = false;
			if((t1 = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
				if(t1 && !Iterators.isIterator(b)) return false;
				if(!t1 && !Iterables.isIterable(b)) return false;
				var aa1;
				if(t1) aa1 = Iterators.array(a); else aa1 = Iterators.array($iterator(a)());
				var ab1;
				if(t1) ab1 = Iterators.array(b); else ab1 = Iterators.array($iterator(b)());
				if(aa1.length != ab1.length) return false;
				var _g23 = 0;
				var _g16 = aa1.length;
				while(_g23 < _g16) {
					var i3 = _g23++;
					if(!Dynamics.same(aa1[i3],ab1[i3])) return false;
				}
				return true;
			}
			return true;
		case 8:
			throw "Unable to compare two unknown types";
			break;
		}
	}
	throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 371, className : "Dynamics", methodName : "same"});
};
Dynamics.number = function(v) {
	return Number(v);
};
var DynamicsT = function() { };
$hxClasses["DynamicsT"] = DynamicsT;
DynamicsT.__name__ = ["DynamicsT"];
DynamicsT.toHash = function(ob) {
	var Map = new haxe.ds.StringMap();
	return DynamicsT.copyToHash(ob,Map);
};
DynamicsT.copyToHash = function(ob,hash) {
	var _g = 0;
	var _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var value = Reflect.field(ob,field);
		hash.set(field,value);
	}
	return hash;
};
var Enums = function() { };
$hxClasses["Enums"] = Enums;
Enums.__name__ = ["Enums"];
Enums.string = function(e) {
	var cons = Type.enumConstructor(e);
	var params = [];
	var _g = 0;
	var _g1 = Type.enumParameters(e);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.string(param));
	}
	return cons + (params.length == 0?"":"(" + params.join(", ") + ")");
};
Enums.compare = function(a,b) {
	var v;
	if((v = Ints.compare(Type.enumIndex(a),Type.enumIndex(b))) != 0) return v;
	return Arrays.compare(Type.enumParameters(a),Type.enumParameters(b));
};
var Floats = function() { };
$hxClasses["Floats"] = Floats;
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	if(v < 0.0) return 0.0; else if(v > 1.0) return 1.0; else return v;
};
Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
Floats.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
};
Floats.range = function(start,stop,step,inclusive) {
	if(inclusive == null) inclusive = false;
	if(step == null) step = 1.0;
	if(null == stop) {
		stop = start;
		start = 0.0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Floats.hx", lineNumber : 50, className : "Floats", methodName : "range"});
	var range = [];
	var i = -1.0;
	var j;
	if(inclusive) {
		if(step < 0) while((j = start + step * ++i) >= stop) range.push(j); else while((j = start + step * ++i) <= stop) range.push(j);
	} else if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
};
Floats.sign = function(v) {
	if(v < 0) return -1; else return 1;
};
Floats.abs = function(a) {
	if(a < 0) return -a; else return a;
};
Floats.min = function(a,b) {
	if(a < b) return a; else return b;
};
Floats.max = function(a,b) {
	if(a > b) return a; else return b;
};
Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
};
Floats.circularWrap = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
};
Floats.interpolate = function(f,a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return a + equation(f) * (b - a);
};
Floats.interpolatef = function(a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = b - a;
	return function(f) {
		return a + equation(f) * d;
	};
};
Floats.interpolateClampf = function(min,max,equation) {
	if(null == equation) equation = thx.math.Equations.linear;
	return function(a,b) {
		var d = b - a;
		return function(f) {
			return a + equation(Floats.clamp(f,min,max)) * d;
		};
	};
};
Floats.format = function(v,param,params,culture) {
	return (Floats.formatf(param,params,culture))(v);
};
Floats.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals;
	if(params.length > 0) decimals = Std.parseInt(params[0]); else decimals = null;
	switch(format) {
	case "D":
		return function(v) {
			return thx.culture.FormatNumber.decimal(v,decimals,culture);
		};
	case "I":
		return function(v1) {
			return thx.culture.FormatNumber["int"](v1,culture);
		};
	case "C":
		var s;
		if(params.length > 1) s = params[1]; else s = null;
		return function(v2) {
			return thx.culture.FormatNumber.currency(v2,s,decimals,culture);
		};
	case "P":
		return function(v3) {
			return thx.culture.FormatNumber.percent(v3,decimals,culture);
		};
	case "M":
		return function(v4) {
			return thx.culture.FormatNumber.permille(v4,decimals,culture);
		};
	default:
		throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 152, className : "Floats", methodName : "formatf"});
	}
};
Floats.canParse = function(s,strict) {
	if(strict == null) strict = false;
	if(strict) return Floats._reparseStrict.match(s); else return Floats._reparse.match(s);
};
Floats.parse = function(s) {
	if(HxOverrides.substr(s,0,1) == "+") s = HxOverrides.substr(s,1,null);
	return Std.parseFloat(s);
};
Floats.compare = function(a,b) {
	if(a < b) return -1; else if(a > b) return 1; else return 0;
};
Floats.isNumeric = function(v) {
	return typeof(v) == "number" || ((v | 0) === v);
};
Floats.equals = function(a,b,approx) {
	if(approx == null) approx = 1e-5;
	if(Math.isNaN(a)) return Math.isNaN(b); else if(Math.isNaN(b)) return false; else if(!Math.isFinite(a) && !Math.isFinite(b)) return a > 0 == b > 0;
	return Math.abs(b - a) < approx;
};
Floats.uninterpolatef = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return (x - a) * b;
	};
};
Floats.uninterpolateClampf = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return Floats.clamp((x - a) * b,0.0,1.0);
	};
};
Floats.round = function(number,precision) {
	if(precision == null) precision = 2;
	number *= Math.pow(10,precision);
	return Math.round(number) / Math.pow(10,precision);
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Ints = function() { };
$hxClasses["Ints"] = Ints;
Ints.__name__ = ["Ints"];
Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Ints.hx", lineNumber : 19, className : "Ints", methodName : "range"});
	var range = [];
	var i = -1;
	var j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
};
Ints.sign = function(v) {
	if(v < 0) return -1; else return 1;
};
Ints.abs = function(a) {
	if(a < 0) return -a; else return a;
};
Ints.min = function(a,b) {
	if(a < b) return a; else return b;
};
Ints.max = function(a,b) {
	if(a > b) return a; else return b;
};
Ints.wrap = function(v,min,max) {
	return Math.round(Floats.wrap(v,min,max));
};
Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
Ints.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
};
Ints.interpolate = function(f,min,max,equation) {
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return Math.round(min + equation(f) * (max - min));
};
Ints.interpolatef = function(min,max,equation) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = max - min;
	return function(f) {
		return Math.round(min + equation(f) * d);
	};
};
Ints.format = function(v,param,params,culture) {
	return (Ints.formatf(param,params,culture))(v);
};
Ints.formatf = function(param,params,culture) {
	return Floats.formatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
};
Ints.canParse = function(s) {
	return Ints._reparse.match(s);
};
Ints.parse = function(s) {
	if(HxOverrides.substr(s,0,1) == "+") s = HxOverrides.substr(s,1,null);
	return Std.parseInt(s);
};
Ints.compare = function(a,b) {
	return a - b;
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,keys: null
	,__class__: IMap
};
var haxe = {};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			if(i == null) s.b += "null"; else s.b += "" + i;
			s.b += " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe.ds.StringMap
};
var Iso = function() { };
$hxClasses["Iso"] = Iso;
Iso.__name__ = ["Iso"];
Iso.setUI = function(uri) {
	var menu = dtx.Tools.find("#menu");
	var $it0 = dtx.single.Traversing.children(menu.getNode(0)).iterator();
	while( $it0.hasNext() ) {
		var item = $it0.next();
		var href = dtx.single.ElementManipulation.attr(dtx.single.Traversing.children(item).first(),"href");
		if(href == uri) {
			if(!dtx.single.ElementManipulation.hasClass(item,"active")) dtx.single.ElementManipulation.addClass(item,"active");
		} else dtx.single.ElementManipulation.removeClass(item,"active");
	}
};
Iso.setLoadinfoLabel = function(text,clss) {
	dtx.collection.ElementManipulation.setText(dtx.Tools.find("#load-type"),text);
	dtx.collection.ElementManipulation.setAttr(dtx.Tools.find("#load-type"),"class",clss);
};
Iso.isFirstRequest = function() {
	return ++Iso.stateChangeCount <= 1;
};
Iso.addFirstRequestToCache = function() {
	var contentEl = window.document.getElementById("content");
	if(contentEl == null) {
		throw "Could not init contentCache on first request";
		return;
	}
	var content = contentEl.innerHTML;
	var url = window.location.pathname;
	Iso.contentCache.set(url,content);
};
var ufront = {};
ufront.web = {};
ufront.web.result = {};
ufront.web.result.ActionResult = function() { };
$hxClasses["ufront.web.result.ActionResult"] = ufront.web.result.ActionResult;
ufront.web.result.ActionResult.__name__ = ["ufront","web","result","ActionResult"];
ufront.web.result.ActionResult.wrap = function(resultValue) {
	if(resultValue == null) return new ufront.web.result.EmptyResult(); else {
		var actionResultValue = Types["as"](resultValue,ufront.web.result.ActionResult);
		if(actionResultValue == null) actionResultValue = new ufront.web.result.ContentResult(Std.string(resultValue));
		return actionResultValue;
	}
};
ufront.web.result.ActionResult.prototype = {
	executeResult: function(actionContext) {
		return ufront.core.Sync.success();
	}
	,__class__: ufront.web.result.ActionResult
};
var IsoResult = function(content) {
	this.content = content;
};
$hxClasses["IsoResult"] = IsoResult;
IsoResult.__name__ = ["IsoResult"];
IsoResult.__super__ = ufront.web.result.ActionResult;
IsoResult.prototype = $extend(ufront.web.result.ActionResult.prototype,{
	content: null
	,executeResult: function(actionContext) {
		var content = this.getContent(actionContext);
		actionContext.httpContext.response.write(content);
		return ufront.core.Sync.success();
	}
	,getContent: function(actionContext) {
		return this.content;
	}
	,__class__: IsoResult
});
var Iterables = function() { };
$hxClasses["Iterables"] = Iterables;
Iterables.__name__ = ["Iterables"];
Iterables.count = function(it) {
	return Iterators.count($iterator(it)());
};
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf($iterator(it)(),v,f);
};
Iterables.contains = function(it,v,f) {
	return Iterators.contains($iterator(it)(),v,f);
};
Iterables.array = function(it) {
	return Iterators.array($iterator(it)());
};
Iterables.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.join($iterator(it)(),glue);
};
Iterables.map = function(it,f) {
	return Iterators.map($iterator(it)(),f);
};
Iterables.each = function(it,f) {
	return Iterators.each($iterator(it)(),f);
};
Iterables.filter = function(it,f) {
	return Iterators.filter($iterator(it)(),f);
};
Iterables.reduce = function(it,f,initialValue) {
	return Iterators.reduce($iterator(it)(),f,initialValue);
};
Iterables.random = function(it) {
	return Arrays.random(Iterators.array($iterator(it)()));
};
Iterables.any = function(it,f) {
	return Iterators.any($iterator(it)(),f);
};
Iterables.all = function(it,f) {
	return Iterators.all($iterator(it)(),f);
};
Iterables.last = function(it) {
	return Iterators.last($iterator(it)());
};
Iterables.lastf = function(it,f) {
	return Iterators.lastf($iterator(it)(),f);
};
Iterables.first = function(it) {
	return Iterators.first($iterator(it)());
};
Iterables.firstf = function(it,f) {
	return Iterators.firstf($iterator(it)(),f);
};
Iterables.order = function(it,f) {
	return Iterators.order($iterator(it)(),f);
};
Iterables.isIterable = function(v) {
	var fields;
	if(Reflect.isObject(v) && null == Type.getClass(v)) fields = Reflect.fields(v); else fields = Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
};
var Iterators = function() { };
$hxClasses["Iterators"] = Iterators;
Iterators.__name__ = ["Iterators"];
Iterators.count = function(it) {
	var i = 0;
	while( it.hasNext() ) {
		var _ = it.next();
		i++;
	}
	return i;
};
Iterators.indexOf = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return c; else c++;
	}
	return -1;
};
Iterators.contains = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return true;
	}
	return false;
};
Iterators.array = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
};
Iterators.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it).join(glue);
};
Iterators.map = function(it,f) {
	var result = [];
	var i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		result.push(f(v,i++));
	}
	return result;
};
Iterators.each = function(it,f) {
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		f(o,i++);
	}
};
Iterators.filter = function(it,f) {
	var result = [];
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) result.push(i);
	}
	return result;
};
Iterators.reduce = function(it,f,initialValue) {
	var accumulator = initialValue;
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		accumulator = f(accumulator,o,i++);
	}
	return accumulator;
};
Iterators.random = function(it) {
	return Arrays.random(Iterators.array(it));
};
Iterators.any = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return true;
	}
	return false;
};
Iterators.all = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) return false;
	}
	return true;
};
Iterators.last = function(it) {
	var o = null;
	while(it.hasNext()) o = it.next();
	return o;
};
Iterators.lastf = function(it,f) {
	var rev = Iterators.array(it);
	rev.reverse();
	return Arrays.lastf(rev,f);
};
Iterators.first = function(it) {
	return it.next();
};
Iterators.firstf = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return v;
	}
	return null;
};
Iterators.order = function(it,f) {
	return Arrays.order(Iterators.array(it),f);
};
Iterators.isIterator = function(v) {
	var fields;
	if(Reflect.isObject(v) && null == Type.getClass(v)) fields = Reflect.fields(v); else fields = Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		if(this.h == null) return null; else return this.h[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var Main = function() { };
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	Main.initApplication();
	pushstate.PushState.init();
	pushstate.PushState.addEventListener(null,function(url) {
		if(!Iso.isFirstRequest()) Main.app.execute(new ufront.web.context.HttpContext(new ClientRequest(),new ClientResponse()));
		Iso.setUI(window.location.pathname);
	});
	Iso.addFirstRequestToCache();
};
Main.initApplication = function() {
	if(Main.app == null) {
		var config = { indexController : MainController, basePath : "/"};
		Main.app = new ufront.app.UfrontApplication(config);
	}
};
ufront.web.context = {};
ufront.web.context.HttpRequest = function() { };
$hxClasses["ufront.web.context.HttpRequest"] = ufront.web.context.HttpRequest;
ufront.web.context.HttpRequest.__name__ = ["ufront","web","context","HttpRequest"];
ufront.web.context.HttpRequest.create = function() {
	throw new thx.error.NotImplemented({ fileName : "HttpRequest.hx", lineNumber : 34, className : "ufront.web.context.HttpRequest", methodName : "create"});
};
ufront.web.context.HttpRequest.prototype = {
	params: null
	,get_params: function() {
		if(null == this.params) this.params = ufront.core._MultiValueMap.MultiValueMap_Impl_.combine([this.get_cookies(),this.get_query(),this.get_post()]);
		return this.params;
	}
	,queryString: null
	,get_queryString: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 65, className : "ufront.web.context.HttpRequest", methodName : "get_queryString"});
	}
	,postString: null
	,get_postString: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 73, className : "ufront.web.context.HttpRequest", methodName : "get_postString"});
	}
	,query: null
	,get_query: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 79, className : "ufront.web.context.HttpRequest", methodName : "get_query"});
	}
	,post: null
	,get_post: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 92, className : "ufront.web.context.HttpRequest", methodName : "get_post"});
	}
	,files: null
	,get_files: function() {
		if(null == this.files) this.files = new haxe.ds.StringMap();
		return this.files;
	}
	,cookies: null
	,get_cookies: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 111, className : "ufront.web.context.HttpRequest", methodName : "get_cookies"});
	}
	,hostName: null
	,get_hostName: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 117, className : "ufront.web.context.HttpRequest", methodName : "get_hostName"});
	}
	,clientIP: null
	,get_clientIP: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 123, className : "ufront.web.context.HttpRequest", methodName : "get_clientIP"});
	}
	,uri: null
	,get_uri: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 132, className : "ufront.web.context.HttpRequest", methodName : "get_uri"});
	}
	,clientHeaders: null
	,get_clientHeaders: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 139, className : "ufront.web.context.HttpRequest", methodName : "get_clientHeaders"});
	}
	,userAgent: null
	,get_userAgent: function() {
		if(this.userAgent == null) this.userAgent = ufront.web.UserAgent.fromString(ufront.core._MultiValueMap.MultiValueMap_Impl_.get(this.get_clientHeaders(),"User-Agent"));
		return this.userAgent;
	}
	,httpMethod: null
	,get_httpMethod: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 159, className : "ufront.web.context.HttpRequest", methodName : "get_httpMethod"});
	}
	,scriptDirectory: null
	,get_scriptDirectory: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 171, className : "ufront.web.context.HttpRequest", methodName : "get_scriptDirectory"});
	}
	,authorization: null
	,get_authorization: function() {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 183, className : "ufront.web.context.HttpRequest", methodName : "get_authorization"});
	}
	,isMultipart: function() {
		return (function($this) {
			var $r;
			var this1 = $this.get_clientHeaders();
			$r = this1.exists("Content-Type");
			return $r;
		}(this)) && StringTools.startsWith(ufront.core._MultiValueMap.MultiValueMap_Impl_.get(this.get_clientHeaders(),"Content-Type"),"multipart/form-data");
	}
	,parseMultipart: function(onPart,onData,onEndPart) {
		throw new thx.error.AbstractMethod({ fileName : "HttpRequest.hx", lineNumber : 219, className : "ufront.web.context.HttpRequest", methodName : "parseMultipart"});
	}
	,__class__: ufront.web.context.HttpRequest
	,__properties__: {get_authorization:"get_authorization",get_scriptDirectory:"get_scriptDirectory",get_httpMethod:"get_httpMethod",get_userAgent:"get_userAgent",get_clientHeaders:"get_clientHeaders",get_uri:"get_uri",get_clientIP:"get_clientIP",get_hostName:"get_hostName",get_cookies:"get_cookies",get_files:"get_files",get_post:"get_post",get_query:"get_query",get_postString:"get_postString",get_queryString:"get_queryString",get_params:"get_params"}
};
var ClientRequest = function() {
};
$hxClasses["ClientRequest"] = ClientRequest;
ClientRequest.__name__ = ["ClientRequest"];
ClientRequest.__super__ = ufront.web.context.HttpRequest;
ClientRequest.prototype = $extend(ufront.web.context.HttpRequest.prototype,{
	get_uri: function() {
		return window.location.pathname;
	}
	,get_scriptDirectory: function() {
		return null;
	}
	,get_httpMethod: function() {
		return "GET";
	}
	,get_clientHeaders: function() {
		return new haxe.ds.StringMap();
	}
	,get_cookies: function() {
		return new haxe.ds.StringMap();
	}
	,get_query: function() {
		return new haxe.ds.StringMap();
	}
	,get_post: function() {
		return new haxe.ds.StringMap();
	}
	,__class__: ClientRequest
});
ufront.web.context.HttpResponse = function() {
	this.clear();
	this._flushed = false;
};
$hxClasses["ufront.web.context.HttpResponse"] = ufront.web.context.HttpResponse;
ufront.web.context.HttpResponse.__name__ = ["ufront","web","context","HttpResponse"];
ufront.web.context.HttpResponse.create = function() {
	return new ufront.web.context.HttpResponse();
};
ufront.web.context.HttpResponse.prototype = {
	charset: null
	,status: null
	,_buff: null
	,_headers: null
	,_cookies: null
	,_flushed: null
	,preventFlush: function() {
		this._flushed = true;
	}
	,flush: function() {
		throw new thx.error.NotImplemented({ fileName : "HttpResponse.hx", lineNumber : 108, className : "ufront.web.context.HttpResponse", methodName : "flush"});
	}
	,clear: function() {
		this.clearCookies();
		this.clearHeaders();
		this.clearContent();
		this.set_contentType(null);
		this.charset = "utf-8";
		this.status = 200;
	}
	,clearCookies: function() {
		this._cookies = new haxe.ds.StringMap();
	}
	,clearContent: function() {
		this._buff = new StringBuf();
	}
	,clearHeaders: function() {
		this._headers = new thx.collection.HashList();
	}
	,write: function(s) {
		if(null != s) if(s == null) this._buff.b += "null"; else this._buff.b += "" + s;
	}
	,writeChar: function(c) {
		this._buff.b += String.fromCharCode(c);
	}
	,writeBytes: function(b,pos,len) {
		this._buff.add(b.getString(pos,len));
	}
	,setHeader: function(name,value) {
		if(null == name) throw new thx.error.NullArgument("name","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpResponse.hx", lineNumber : 169, className : "ufront.web.context.HttpResponse", methodName : "setHeader"});
		if(null == value) throw new thx.error.NullArgument("value","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpResponse.hx", lineNumber : 170, className : "ufront.web.context.HttpResponse", methodName : "setHeader"});
		this._headers.set(name,value);
	}
	,setCookie: function(cookie) {
		this._cookies.set(cookie.name,cookie);
	}
	,getBuffer: function() {
		return this._buff.b;
	}
	,getCookies: function() {
		return this._cookies;
	}
	,getHeaders: function() {
		return this._headers;
	}
	,redirect: function(url) {
		this.status = 302;
		this.set_redirectLocation(url);
	}
	,setOk: function() {
		this.status = 200;
	}
	,setUnauthorized: function() {
		this.status = 401;
	}
	,requireAuthentication: function(message) {
		this.setUnauthorized();
		this.setHeader("WWW-Authenticate","Basic realm=\"" + message + "\"");
	}
	,setNotFound: function() {
		this.status = 404;
	}
	,setInternalError: function() {
		this.status = 500;
	}
	,permanentRedirect: function(url) {
		this.status = 301;
		this.set_redirectLocation(url);
	}
	,isRedirect: function() {
		return Math.floor(this.status / 100) == 3;
	}
	,isPermanentRedirect: function() {
		return this.status == 301;
	}
	,get_contentType: function() {
		return this._headers.get("Content-type");
	}
	,set_contentType: function(v) {
		if(null == v) this._headers.set("Content-type","text/html"); else this._headers.set("Content-type",v);
		return v;
	}
	,get_redirectLocation: function() {
		return this._headers.get("Location");
	}
	,set_redirectLocation: function(v) {
		if(null == v) this._headers.remove("Location"); else this._headers.set("Location",v);
		return v;
	}
	,__class__: ufront.web.context.HttpResponse
	,__properties__: {set_redirectLocation:"set_redirectLocation",get_redirectLocation:"get_redirectLocation",set_contentType:"set_contentType",get_contentType:"get_contentType"}
};
var ClientResponse = function() {
	ufront.web.context.HttpResponse.call(this);
	Iso.setLoadinfoLabel("PushState","label label-success");
};
$hxClasses["ClientResponse"] = ClientResponse;
ClientResponse.__name__ = ["ClientResponse"];
ClientResponse.__super__ = ufront.web.context.HttpResponse;
ClientResponse.prototype = $extend(ufront.web.context.HttpResponse.prototype,{
	flush: function() {
		var contentHtml = this._buff.b;
		window.document.getElementById("content").innerHTML = contentHtml;
	}
	,__class__: ClientResponse
});
ufront.web.Controller = function() {
};
$hxClasses["ufront.web.Controller"] = ufront.web.Controller;
ufront.web.Controller.__name__ = ["ufront","web","Controller"];
ufront.web.Controller.prototype = {
	context: null
	,baseUri: null
	,execute: function() {
		return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(ufront.web.HttpError.internalServerError("Field execute() in ufront.web.Controller is an abstract method, please override it in " + this.toString() + " ",null,{ fileName : "Controller.hx", lineNumber : 134, className : "ufront.web.Controller", methodName : "execute"})));
	}
	,executeSubController: function(controller) {
		return this.context.injector.instantiate(controller).execute();
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,ufTrace: function(msg,pos) {
		if(this.context != null) this.context.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Trace}); else haxe.Log.trace("" + Std.string(msg),pos);
	}
	,ufLog: function(msg,pos) {
		if(this.context != null) this.context.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Log}); else haxe.Log.trace("Log: " + Std.string(msg),pos);
	}
	,ufWarn: function(msg,pos) {
		if(this.context != null) this.context.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Warning}); else haxe.Log.trace("Warning: " + Std.string(msg),pos);
	}
	,ufError: function(msg,pos) {
		if(this.context != null) this.context.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Error}); else haxe.Log.trace("Error: " + Std.string(msg),pos);
	}
	,setBaseUri: function(uriPartsBeforeRouting) {
		var remainingUri = haxe.io.Path.addTrailingSlash(uriPartsBeforeRouting.join("/"));
		var fullUri = haxe.io.Path.addTrailingSlash(this.context.getRequestUri());
		this.baseUri = haxe.io.Path.addTrailingSlash(HxOverrides.substr(fullUri,0,fullUri.length - remainingUri.length));
	}
	,wrapResult: function(result,wrappingRequired) {
		if(result == null) {
			var actionResult = new ufront.web.result.EmptyResult(true);
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(actionResult));
		} else {
			var future;
			if((wrappingRequired & 1 << ufront.web.WrapRequired.WRFuture[1]) != 0) future = this.wrapInFuture(result); else future = result;
			var surprise;
			if((wrappingRequired & 1 << ufront.web.WrapRequired.WROutcome[1]) != 0) surprise = this.wrapInOutcome(future); else surprise = future;
			var finalResult;
			if((wrappingRequired & 1 << ufront.web.WrapRequired.WRResultOrError[1]) != 0) finalResult = this.wrapResultOrError(surprise); else finalResult = surprise;
			return finalResult;
		}
	}
	,wrapInFuture: function(result) {
		return tink.core._Future.Future_Impl_.sync(result);
	}
	,wrapInOutcome: function(future) {
		return tink.core._Future.Future_Impl_.map(future,function(result) {
			return tink.core.Outcome.Success(result);
		});
	}
	,wrapResultOrError: function(surprise) {
		return tink.core._Future.Future_Impl_.map(surprise,function(outcome) {
			switch(outcome[1]) {
			case 0:
				var result = outcome[2];
				return tink.core.Outcome.Success(ufront.web.result.ActionResult.wrap(result));
			case 1:
				var error = outcome[2];
				return tink.core.Outcome.Failure(ufront.web.HttpError.wrap(error,null,{ fileName : "Controller.hx", lineNumber : 228, className : "ufront.web.Controller", methodName : "wrapResultOrError"}));
			}
		});
	}
	,setContextActionResultWhenFinished: function(result) {
		var _g = this;
		result(function(outcome) {
			switch(outcome[1]) {
			case 0:
				var ar = outcome[2];
				_g.context.actionContext.actionResult = ar;
				break;
			default:
			}
		});
	}
	,__class__: ufront.web.Controller
};
var MainController = function() {
	ufront.web.Controller.call(this);
};
$hxClasses["MainController"] = MainController;
MainController.__name__ = ["MainController"];
MainController.__super__ = ufront.web.Controller;
MainController.prototype = $extend(ufront.web.Controller.prototype,{
	index: function() {
		return this.loadContent(this.context.request.get_uri());
	}
	,home: function() {
		return this.index();
	}
	,noPS: function() {
		return new IsoResult("<div class=\"page-header\"><h1>No pushstate</h1></div><p>This is a standard request - no pushstate is used here</p>");
	}
	,info: function() {
		return this.loadContent(this.context.request.get_uri());
	}
	,contact: function() {
		return new IsoResult("<div class='page-header'><h1>Contact</h1></div><p>The form submit is handled just as a normal server request - no pushstate or isometric stuff.</p><form method='POST' action='/contact/'><div class='col-xs-3'><p>Name:<br/><input name='name' class='form-control'/></p><p>Age:<br/><input name='age' class='form-control' /></p><input type='submit'/></div></form>");
	}
	,contactPost: function(args) {
		return new IsoResult("<div class='page-header'><h1>Contact Post</h1></div>" + Std.string(args));
	}
	,loadContent: function(uri) {
		this.ufTrace(uri,{ fileName : "MainController.hx", lineNumber : 33, className : "MainController", methodName : "loadContent"});
		var f = new tink.core.FutureTrigger();
		if(Iso.contentCache.exists(uri)) {
			var cachedContent = Iso.contentCache.get(uri);
			var content = cachedContent;
			f.trigger(tink.core.Outcome.Success(new IsoResult(content)));
			Iso.setLoadinfoLabel("PushState - Loaded from cache","label label-warning");
		} else {
			this.ufTrace("Load from " + uri,{ fileName : "MainController.hx", lineNumber : 49, className : "MainController", methodName : "loadContent"});
			var request = new XMLHttpRequest();
			request.open("GET",uri);
			request.setRequestHeader(Iso.REQUEST_TYPE,Iso.AJAX);
			request.onload = function(e) {
				var requestResponse = request.response;
				var content1 = requestResponse;
				Iso.contentCache.set(uri,requestResponse);
				f.trigger(tink.core.Outcome.Success(new IsoResult(content1)));
				Iso.setLoadinfoLabel("PushState - Loaded using ajax","label label-success");
			};
			request.onerror = function(e1) {
				f.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"Can' load from " + uri,{ fileName : "MainController.hx", lineNumber : 63, className : "MainController", methodName : "loadContent"})));
			};
			request.send(null);
		}
		return f.future;
	}
	,execute: function() {
		var uriParts = this.context.actionContext.get_uriParts();
		this.setBaseUri(uriParts);
		var params = this.context.request.get_params();
		var method = this.context.request.get_httpMethod();
		this.context.actionContext.controller = this;
		this.context.actionContext.action = "execute";
		try {
			if(0 == uriParts.length) {
				this.context.actionContext.action = "index";
				this.context.actionContext.args = [];
				this.context.actionContext.get_uriParts().splice(0,0);
				var wrappingRequired = haxe.rtti.Meta.getFields(MainController).index.wrapResult[0];
				var result = this.wrapResult(this.index(),wrappingRequired);
				this.setContextActionResultWhenFinished(result);
				return result;
			} else if(1 == uriParts.length && uriParts[0] == "home") {
				this.context.actionContext.action = "home";
				this.context.actionContext.args = [];
				this.context.actionContext.get_uriParts().splice(0,1);
				var wrappingRequired1 = haxe.rtti.Meta.getFields(MainController).home.wrapResult[0];
				var result1 = this.wrapResult(this.home(),wrappingRequired1);
				this.setContextActionResultWhenFinished(result1);
				return result1;
			} else if(1 == uriParts.length && uriParts[0] == "nops") {
				this.context.actionContext.action = "noPS";
				this.context.actionContext.args = [];
				this.context.actionContext.get_uriParts().splice(0,1);
				var wrappingRequired2 = haxe.rtti.Meta.getFields(MainController).noPS.wrapResult[0];
				var result2 = this.wrapResult(this.noPS(),wrappingRequired2);
				this.setContextActionResultWhenFinished(result2);
				return result2;
			} else if(1 == uriParts.length && uriParts[0] == "info") {
				this.context.actionContext.action = "info";
				this.context.actionContext.args = [];
				this.context.actionContext.get_uriParts().splice(0,1);
				var wrappingRequired3 = haxe.rtti.Meta.getFields(MainController).info.wrapResult[0];
				var result3 = this.wrapResult(this.info(),wrappingRequired3);
				this.setContextActionResultWhenFinished(result3);
				return result3;
			} else if(method.toLowerCase() == "get" && 1 == uriParts.length && uriParts[0] == "contact") {
				this.context.actionContext.action = "contact";
				this.context.actionContext.args = [];
				this.context.actionContext.get_uriParts().splice(0,1);
				var wrappingRequired4 = haxe.rtti.Meta.getFields(MainController).contact.wrapResult[0];
				var result4 = this.wrapResult(this.contact(),wrappingRequired4);
				this.setContextActionResultWhenFinished(result4);
				return result4;
			} else if(method.toLowerCase() == "post" && 1 == uriParts.length && uriParts[0] == "contact") {
				var _param_tmp_name = ufront.core._MultiValueMap.MultiValueMap_Impl_.get(params,"name");
				var _param_tmp_age = Std.parseInt(ufront.core._MultiValueMap.MultiValueMap_Impl_.get(params,"age"));
				var args = { name : _param_tmp_name, age : _param_tmp_age};
				this.context.actionContext.action = "contactPost";
				this.context.actionContext.args = [args];
				this.context.actionContext.get_uriParts().splice(0,1);
				var wrappingRequired5 = haxe.rtti.Meta.getFields(MainController).contactPost.wrapResult[0];
				var result5 = this.wrapResult(this.contactPost(args),wrappingRequired5);
				this.setContextActionResultWhenFinished(result5);
				return result5;
			}
			throw ufront.web.HttpError.pageNotFound({ fileName : "ControllerMacros.hx", lineNumber : 433, className : "MainController", methodName : "execute"});
		} catch( e ) {
			return ufront.core.Sync.httpError("Uncaught error while executing " + Std.string(this.context.actionContext.controller) + "." + this.context.actionContext.action + "()",e,{ fileName : "ControllerMacros.hx", lineNumber : 436, className : "MainController", methodName : "execute"});
		}
	}
	,__class__: MainController
});
Math.__name__ = ["Math"];
var Objects = function() { };
$hxClasses["Objects"] = Objects;
Objects.__name__ = ["Objects"];
Objects.field = function(o,fieldname,alt) {
	if(Object.prototype.hasOwnProperty.call(o,fieldname)) return Reflect.field(o,fieldname); else return alt;
};
Objects.keys = function(o) {
	return Reflect.fields(o);
};
Objects.values = function(o) {
	var arr = [];
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push(Reflect.field(o,key));
	}
	return arr;
};
Objects.entries = function(o) {
	var arr = [];
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push({ key : key, value : Reflect.field(o,key)});
	}
	return arr;
};
Objects.each = function(o,handler) {
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		handler(key,Reflect.field(o,key));
	}
};
Objects.map = function(o,handler) {
	var results = [];
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		results.push(handler(key,Reflect.field(o,key)));
	}
	return results;
};
Objects["with"] = function(ob,f) {
	f(ob);
	return ob;
};
Objects.toHash = function(ob) {
	var Map = new haxe.ds.StringMap();
	return Objects.copyToHash(ob,Map);
};
Objects.copyToHash = function(ob,Map) {
	var _g = 0;
	var _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var value = Reflect.field(ob,field);
		Map.set(field,value);
	}
	return Map;
};
Objects.interpolate = function(v,a,b,equation) {
	return (Objects.interpolatef(a,b,equation))(v);
};
Objects.interpolatef = function(a,b,equation) {
	var i = { };
	var c = { };
	var keys = Reflect.fields(a);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(Object.prototype.hasOwnProperty.call(b,key)) {
			var va = Reflect.field(a,key);
			Reflect.setField(i,key,Dynamics.interpolatef(va,Reflect.field(b,key)));
		} else Reflect.setField(c,key,Reflect.field(a,key));
	}
	keys = Reflect.fields(b);
	var _g1 = 0;
	while(_g1 < keys.length) {
		var key1 = keys[_g1];
		++_g1;
		if(!Object.prototype.hasOwnProperty.call(a,key1)) Reflect.setField(c,key1,Reflect.field(b,key1));
	}
	return function(t) {
		var _g2 = 0;
		var _g11 = Reflect.fields(i);
		while(_g2 < _g11.length) {
			var k = _g11[_g2];
			++_g2;
			Reflect.setField(c,k,Reflect.callMethod(i,Reflect.field(i,k),[t]));
		}
		return c;
	};
};
Objects.copyTo = function(src,dst) {
	var _g = 0;
	var _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = Dynamics.clone(Reflect.field(src,field));
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	return dst;
};
Objects.clone = function(src) {
	var dst = { };
	return Objects.copyTo(src,dst);
};
Objects.mergef = function(ob,new_ob,f) {
	var _g = 0;
	var _g1 = Reflect.fields(new_ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var new_val = Reflect.field(new_ob,field);
		if(Object.prototype.hasOwnProperty.call(ob,field)) {
			var old_val = Reflect.field(ob,field);
			Reflect.setField(ob,field,f(field,old_val,new_val));
		} else ob[field] = new_val;
	}
};
Objects.merge = function(ob,new_ob) {
	Objects.mergef(ob,new_ob,function(key,old_v,new_v) {
		return new_v;
	});
};
Objects._flatten = function(src,cum,arr,levels,level) {
	var _g = 0;
	var _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var clone = Objects.clone(cum);
		var v = Reflect.field(src,field);
		clone.fields.push(field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && (levels == 0 || level + 1 < levels)) Objects._flatten(v,clone,arr,levels,level + 1); else {
			clone.value = v;
			arr.push(clone);
		}
	}
};
Objects.flatten = function(src,levels) {
	if(levels == null) levels = 0;
	var arr = [];
	var _g = 0;
	var _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var v = Reflect.field(src,field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && levels != 1) {
			var item = { fields : [field], value : null};
			Objects._flatten(v,item,arr,levels,1);
		} else arr.push({ fields : [field], value : v});
	}
	return arr;
};
Objects.compare = function(a,b) {
	var v;
	var fields;
	if((v = Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) return v;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) return v;
	}
	return 0;
};
Objects.addFields = function(o,fields,values) {
	var _g1 = 0;
	var _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		Objects.addField(o,fields[i],values[i]);
	}
	return o;
};
Objects.addField = function(o,field,value) {
	o[field] = value;
	return o;
};
Objects.format = function(v,param,params,culture) {
	return (Objects.formatf(param,params,culture))(v);
};
Objects.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		return function(v) {
			if(v == null) return "null"; else return "" + v;
		};
	case "R":
		return function(v1) {
			var buf = [];
			var _g = 0;
			var _g1 = Reflect.fields(v1);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + Dynamics.format(Reflect.field(v1,field),null,null,null,culture));
			}
			return "{" + buf.join(",") + "}";
		};
	default:
		throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 242, className : "Objects", methodName : "formatf"});
	}
};
var Random = function() { };
$hxClasses["Random"] = Random;
Random.__name__ = ["Random"];
Random.bool = function() {
	return Math.random() < 0.5;
};
Random["int"] = function(from,to) {
	return from + Math.floor((to - from + 1) * Math.random());
};
Random["float"] = function(from,to) {
	return from + (to - from) * Math.random();
};
Random.string = function(length,charactersToUse) {
	if(charactersToUse == null) charactersToUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var str = "";
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		str += charactersToUse.charAt(Math.floor((charactersToUse.length - 1 + 1) * Math.random()));
	}
	return str;
};
Random.date = function(earliest,latest) {
	var t = Random["float"](earliest.getTime(),latest.getTime());
	var d = new Date();
	d.setTime(t);
	return d;
};
Random.fromArray = function(arr) {
	if(arr != null && arr.length > 0) return arr[Math.floor((arr.length - 1 + 1) * Math.random())]; else return null;
};
Random.shuffle = function(arr) {
	if(arr != null) {
		var _g1 = 0;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var j = Math.floor((arr.length - 1 + 1) * Math.random());
			var a = arr[i];
			var b = arr[j];
			arr[i] = b;
			arr[j] = a;
		}
	}
	return arr;
};
Random.fromIterable = function(it) {
	if(it != null) return Random.fromArray(Lambda.array(it)); else return null;
};
Random.enumConstructor = function(e) {
	if(e != null) return Random.fromArray(Type.allEnums(e)); else return null;
};
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&quot;").join("\"").split("&#039;").join("'").split("&amp;").join("&");
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Strings = function() { };
$hxClasses["Strings"] = Strings;
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	if(null == values || 0 == values.length) return pattern;
	return (Strings.formatf(pattern,nullstring,culture))(values);
};
Strings.formatf = function(pattern,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	var buf = [];
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.push((function() {
				return function(_) {
					return pattern;
				};
			})());
			break;
		}
		var pos = Std.parseInt(Strings._reFormat.matched(1));
		var format = Strings._reFormat.matched(2);
		if(format == "") format = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = Strings._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		var left = [Strings._reFormat.matchedLeft()];
		buf.push((function(left) {
			return function(_1) {
				return left[0];
			};
		})(left));
		var df = [Dynamics.formatf(format,params,nullstring,culture)];
		buf.push(((function() {
			return function(f,i1) {
				return (function() {
					return function(v) {
						return f(i1,v);
					};
				})();
			};
		})())((function(df) {
			return function(i2,v1) {
				return df[0](v1[i2]);
			};
		})(df),pos));
		pattern = Strings._reFormat.matchedRight();
	}
	return function(values) {
		if(null == values) values = [];
		return buf.map(function(df1) {
			return df1(values);
		}).join("");
	};
};
Strings.formatOne = function(v,param,params,culture) {
	return (Strings.formatOnef(param,params,culture))(v);
};
Strings.formatOnef = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		return function(v) {
			return v;
		};
	case "T":
		var len;
		if(params.length < 1) len = 20; else len = Std.parseInt(params[0]);
		var ellipsis;
		if(params.length < 2) ellipsis = "..."; else ellipsis = params[1];
		return Strings.ellipsisf(len,ellipsis);
	case "PR":
		var len1;
		if(params.length < 1) len1 = 10; else len1 = Std.parseInt(params[0]);
		var pad;
		if(params.length < 2) pad = " "; else pad = params[1];
		return function(v1) {
			return StringTools.rpad(v1,pad,len1);
		};
	case "PL":
		var len2;
		if(params.length < 1) len2 = 10; else len2 = Std.parseInt(params[0]);
		var pad1;
		if(params.length < 2) pad1 = " "; else pad1 = params[1];
		return function(v2) {
			return StringTools.lpad(v2,pad1,len2);
		};
	default:
		throw "Unsupported string format: " + format;
	}
};
Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return HxOverrides.substr(value,0,pos);
};
Strings.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return HxOverrides.substr(value,pos + searchFor.length,null);
};
Strings.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = HxOverrides.substr(value,len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return HxOverrides.substr(value,0,len);
};
Strings.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = HxOverrides.substr(value,start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return HxOverrides.substr(value,start,null);
};
Strings.trim = function(value,charlist) {
	return Strings.rtrim(Strings.ltrim(value,charlist),charlist);
};
Strings.collapse = function(value) {
	return Strings._reCollapse.replace(StringTools.trim(value)," ");
};
Strings.ucfirst = function(value) {
	if(value == null) return null; else return value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null);
};
Strings.lcfirst = function(value) {
	if(value == null) return null; else return value.charAt(0).toLowerCase() + HxOverrides.substr(value,1,null);
};
Strings.empty = function(value) {
	return value == null || value == "";
};
Strings.isAlphaNum = function(value) {
	if(value == null) return false; else return Strings.__alphaNumPattern.match(value);
};
Strings.digitsOnly = function(value) {
	if(value == null) return false; else return Strings.__digitsPattern.match(value);
};
Strings.ucwords = function(value) {
	return Strings.__ucwordsPattern.map(value == null?null:value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null),Strings.__upperMatch);
};
Strings.ucwordsws = function(value) {
	return Strings.__ucwordswsPattern.map(value == null?null:value.charAt(0).toUpperCase() + HxOverrides.substr(value,1,null),Strings.__upperMatch);
};
Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
};
Strings.humanize = function(s) {
	return StringTools.replace(Strings.underscore(s),"_"," ");
};
Strings.capitalize = function(s) {
	return HxOverrides.substr(s,0,1).toUpperCase() + HxOverrides.substr(s,1,null);
};
Strings.succ = function(s) {
	return HxOverrides.substr(s,0,-1) + String.fromCharCode((function($this) {
		var $r;
		var _this = HxOverrides.substr(s,-1,null);
		$r = HxOverrides.cca(_this,0);
		return $r;
	}(this)) + 1);
};
Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
};
Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
};
Strings.repeat = function(s,times) {
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	return b.join("");
};
Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	var parts = Strings._reSplitWC.split(s);
	var result = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		result.push(Strings._wrapColumns(StringTools.trim(Strings._reReduceWS.replace(part," ")),columns,indent,newline));
	}
	return result.join(newline);
};
Strings._wrapColumns = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(HxOverrides.substr(s,pos,null));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(HxOverrides.substr(s,pos,columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(HxOverrides.substr(s,pos,columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
};
Strings.stripTags = function(s) {
	return Strings._reStripTags.replace(s,"");
};
Strings.interpolate = function(v,a,b,equation) {
	return (Strings.interpolatef(a,b,equation))(v);
};
Strings.interpolatef = function(a,b,equation) {
	var extract = function(value,s,f) {
		while(Strings._reInterpolateNumber.match(value)) {
			var left = Strings._reInterpolateNumber.matchedLeft();
			if(!Strings.empty(left)) {
				s.push(left);
				f.push(null);
			}
			s.push(null);
			f.push(Std.parseFloat(Strings._reInterpolateNumber.matched(0)));
			value = Strings._reInterpolateNumber.matchedRight();
		}
		if(!Strings.empty(value)) {
			s.push(value);
			f.push(null);
		}
	};
	var decimals = function(v) {
		var s1 = "" + v;
		var p = s1.indexOf(".");
		if(p < 0) return 0;
		return s1.length - p - 1;
	};
	var sa = [];
	var fa = [];
	var sb = [];
	var fb = [];
	extract(a,sa,fa);
	extract(b,sb,fb);
	var functions = [];
	var i = 0;
	var min = Ints.min(sa.length,sb.length);
	while(i < min) {
		if(sa[i] != sb[i]) break;
		if(null == sa[i]) {
			if(fa[i] == fb[i]) {
				var s2 = ["" + fa[i]];
				functions.push((function(s2) {
					return function(_) {
						return s2[0];
					};
				})(s2));
			} else {
				var f1 = [Floats.interpolatef(fa[i],fb[i],equation)];
				var dec = [Math.pow(10,Ints.max(decimals(fa[i]),decimals(fb[i])))];
				functions.push((function(dec,f1) {
					return function(t) {
						return "" + Math.round(f1[0](t) * dec[0]) / dec[0];
					};
				})(dec,f1));
			}
		} else {
			var s3 = [sa[i]];
			functions.push((function(s3) {
				return function(_1) {
					return s3[0];
				};
			})(s3));
		}
		i++;
	}
	var rest = "";
	while(i < sb.length) {
		if(null != sb[i]) rest += sb[i]; else rest += fb[i];
		i++;
	}
	if("" != rest) functions.push(function(_2) {
		return rest;
	});
	return function(t1) {
		return Iterators.map(HxOverrides.iter(functions),function(f2,_3) {
			return f2(t1);
		}).join("");
	};
};
Strings.interpolateChars = function(v,a,b,equation) {
	return (Strings.interpolateCharsf(a,b,equation))(v);
};
Strings.interpolateCharsf = function(a,b,equation) {
	var aa = a.split("");
	var ab = b.split("");
	while(aa.length > ab.length) ab.splice(0,0," ");
	while(ab.length > aa.length) aa.splice(0,0," ");
	var ai = [];
	var _g1 = 0;
	var _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = Strings.interpolateCharf(aa[i],ab[i]);
	}
	return function(v) {
		var r = [];
		var _g11 = 0;
		var _g2 = ai.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			r[i1] = ai[i1](v);
		}
		return StringTools.trim(r.join(""));
	};
};
Strings.interpolateChar = function(v,a,b,equation) {
	return (Strings.interpolateCharf(a,b,equation))(v);
};
Strings.interpolateCharf = function(a,b,equation) {
	if(new EReg("^\\d","").match(b) && a == " ") a = "0";
	var r = new EReg("^[^a-zA-Z0-9]","");
	if(r.match(b) && a == " ") a = r.matched(0);
	var ca = HxOverrides.cca(a,0);
	var cb = HxOverrides.cca(b,0);
	var i = Ints.interpolatef(ca,cb,equation);
	return function(v) {
		return String.fromCharCode(i(v));
	};
};
Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return (function($this) {
		var $r;
		var len = Ints.max(symbol.length,maxlen - symbol.length);
		$r = HxOverrides.substr(s,0,len);
		return $r;
	}(this)) + symbol; else return s;
};
Strings.ellipsisf = function(maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	return function(s) {
		if(s.length > maxlen) return (function($this) {
			var $r;
			var len = Ints.max(symbol.length,maxlen - symbol.length);
			$r = HxOverrides.substr(s,0,len);
			return $r;
		}(this)) + symbol; else return s;
	};
};
Strings.compare = function(a,b) {
	if(a < b) return -1; else if(a > b) return 1; else return 0;
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
ValueType.__empty_constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TUnknown];
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		return false;
	}
	return true;
};
Type.enumConstructor = function(e) {
	return e[0];
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
};
Type.allEnums = function(e) {
	return e.__empty_constructs__;
};
var Types = function() { };
$hxClasses["Types"] = Types;
Types.__name__ = ["Types"];
Types.className = function(o) {
	return Type.getClassName(Type.getClass(o)).split(".").pop();
};
Types.fullName = function(o) {
	return Type.getClassName(Type.getClass(o));
};
Types.typeName = function(o) {
	{
		var _g = Type["typeof"](o);
		switch(_g[1]) {
		case 0:
			return "null";
		case 1:
			return "Int";
		case 2:
			return "Float";
		case 3:
			return "Bool";
		case 5:
			return "function";
		case 6:
			var c = _g[2];
			return Type.getClassName(c);
		case 7:
			var e = _g[2];
			return Type.getEnumName(e);
		case 4:
			return "Object";
		case 8:
			return "Unknown";
		}
	}
};
Types.hasSuperClass = function(type,sup) {
	while(null != type) {
		if(type == sup) return true;
		type = Type.getSuperClass(type);
	}
	return false;
};
Types.isAnonymous = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
};
Types["as"] = function(value,type) {
	if(js.Boot.__instanceof(value,type)) return value; else return null;
};
Types.ifIs = function(value,type,handler) {
	if(js.Boot.__instanceof(value,type)) handler(value);
	return value;
};
Types.of = function(type,value) {
	if(js.Boot.__instanceof(value,type)) return value; else return null;
};
Types.sameType = function(a,b) {
	if(null == a && b == null) return true;
	if(null == a || b == null) return false;
	var tb = Type["typeof"](b);
	switch(tb[1]) {
	case 6:
		var c = tb[2];
		return js.Boot.__instanceof(a,c);
	case 7:
		var e = tb[2];
		return js.Boot.__instanceof(a,e);
	default:
		return Type["typeof"](a) == tb;
	}
};
Types.isPrimitive = function(v) {
	{
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:case 1:case 2:case 3:
			return true;
		case 5:case 7:case 4:case 8:
			return false;
		case 6:
			var c = _g[2];
			return Type.getClassName(c) == "String";
		}
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] };
XmlType.__empty_constructs__ = [];
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	nodeType: null
	,_nodeName: null
	,_nodeValue: null
	,_attributes: null
	,_children: null
	,_parent: null
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,iterator: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			return this.cur < this.x.length;
		}, next : function() {
			return this.x[this.cur++];
		}};
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,toString: function() {
		if(this.nodeType == Xml.PCData) return StringTools.htmlEscape(this._nodeValue);
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.ProcessingInstruction) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += "<";
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += " ";
				if(k == null) s.b += "null"; else s.b += "" + k;
				s.b += "=\"";
				s.add(this._attributes.get(k));
				s.b += "\"";
			}
			if(this._children.length == 0) {
				s.b += "/>";
				return s.b;
			}
			s.b += ">";
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.add(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += "</";
			s.b += Std.string(this._nodeName);
			s.b += ">";
		}
		return s.b;
	}
	,__class__: Xml
	,__properties__: {set_nodeValue:"set_nodeValue",set_nodeName:"set_nodeName",get_nodeName:"get_nodeName"}
};
var dtx = {};
dtx.DOMCollection = function(nodes) {
	this.collection = [];
	if(nodes != null) {
		var $it0 = $iterator(nodes)();
		while( $it0.hasNext() ) {
			var n = $it0.next();
			if(n != null) this.collection.push(n);
		}
	}
};
$hxClasses["dtx.DOMCollection"] = dtx.DOMCollection;
dtx.DOMCollection.__name__ = ["dtx","DOMCollection"];
dtx.DOMCollection.prototype = {
	collection: null
	,length: null
	,iterator: function() {
		return HxOverrides.iter(this.collection);
	}
	,getNode: function(i) {
		if(i == null) i = 0;
		if(this.collection.length > i && i >= 0) return this.collection[i]; else return null;
	}
	,eq: function(i) {
		if(i == null) i = 0;
		return new dtx.DOMCollection().add(this.getNode(i));
	}
	,first: function() {
		return this.getNode(0);
	}
	,last: function() {
		return this.getNode(this.collection.length - 1);
	}
	,add: function(node,pos) {
		if(pos == null) pos = -1;
		if(pos < 0 || pos > this.collection.length) pos = this.collection.length;
		if(node != null) {
			if(HxOverrides.indexOf(this.collection,node,0) == -1) this.collection.splice(pos,0,node);
		}
		return this;
	}
	,addCollection: function(collection,elementsOnly) {
		if(elementsOnly == null) elementsOnly = false;
		if(collection != null) {
			var $it0 = $iterator(collection)();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(elementsOnly == false || dtx.single.ElementManipulation.isElement(node)) this.add(node);
			}
		}
		return this;
	}
	,addNodeList: function(nodeList,elementsOnly) {
		if(elementsOnly == null) elementsOnly = false;
		if(nodeList != null) {
			var _g1 = 0;
			var _g = nodeList.length;
			while(_g1 < _g) {
				var i = _g1++;
				var node = nodeList.item(i);
				if(elementsOnly == false || dtx.single.ElementManipulation.isElement(node)) this.add(node);
			}
		}
		return this;
	}
	,removeFromCollection: function(node,nodeCollection) {
		if(node != null) this.removeNode(node);
		if(nodeCollection != null) {
			var $it0 = $iterator(nodeCollection)();
			while( $it0.hasNext() ) {
				var n = $it0.next();
				this.removeNode(n);
			}
		}
		return this;
	}
	,removeNode: function(n) {
		HxOverrides.remove(this.collection,n);
	}
	,each: function(f) {
		if(f != null) {
			var _g = 0;
			var _g1 = this.collection;
			while(_g < _g1.length) {
				var n = _g1[_g];
				++_g;
				f(n);
			}
		}
		return this;
	}
	,filter: function(f) {
		var newCollection;
		if(f != null) {
			var filtered = this.collection.filter(f);
			newCollection = new dtx.DOMCollection(filtered);
		} else newCollection = new dtx.DOMCollection(this.collection);
		return newCollection;
	}
	,clone: function() {
		var q = new dtx.DOMCollection();
		var $it0 = HxOverrides.iter(this.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			q.add(node.cloneNode(true));
		}
		return q;
	}
	,get_length: function() {
		return this.collection.length;
	}
	,__class__: dtx.DOMCollection
	,__properties__: {get_length:"get_length"}
};
dtx.DOMType = function() { };
$hxClasses["dtx.DOMType"] = dtx.DOMType;
dtx.DOMType.__name__ = ["dtx","DOMType"];
dtx.Tools = function() { };
$hxClasses["dtx.Tools"] = dtx.Tools;
dtx.Tools.__name__ = ["dtx","Tools"];
dtx.Tools.__properties__ = {get_window:"get_window",get_body:"get_body",get_document:"get_document"}
dtx.Tools.get_document = function() {
	if(dtx.Tools.document == null) dtx.Tools.document = document;
	return dtx.Tools.document;
};
dtx.Tools.get_body = function() {
	return dtx.Tools.get_document().body;
};
dtx.Tools.get_window = function() {
	return window;
};
dtx.Tools.toCollection = function(n) {
	return new dtx.DOMCollection([n]);
};
dtx.Tools.find = function(selector) {
	return dtx.single.Traversing.find(dtx.Tools.get_document(),selector);
};
dtx.Tools.create = function(tagName) {
	var elm = null;
	if(tagName != null) try {
		elm = document.createElement(tagName);
	} catch( e ) {
		elm = null;
	}
	return elm;
};
dtx.Tools.parse = function(xml) {
	var q;
	if(xml != null && xml != "") {
		var parentTag = "div";
		if(dtx.Tools.firstTag.match(xml)) {
			var tagName = dtx.Tools.firstTag.matched(1);
			switch(tagName) {
			case "tbody":
				parentTag = "table";
				break;
			case "tfoot":
				parentTag = "table";
				break;
			case "thead":
				parentTag = "table";
				break;
			case "colgroup":
				parentTag = "table";
				break;
			case "col":
				parentTag = "colgroup";
				break;
			case "tr":
				parentTag = "tbody";
				break;
			case "th":
				parentTag = "tr";
				break;
			case "td":
				parentTag = "tr";
				break;
			default:
				parentTag = "div";
			}
		}
		var n = dtx.Tools.create(parentTag);
		dtx.single.ElementManipulation.setInnerHTML(n,xml);
		q = dtx.single.Traversing.children(n,false);
	} else q = new dtx.DOMCollection();
	return q;
};
dtx.Tools.setDocument = function(newDocument) {
	if(newDocument != null) {
		if(newDocument.nodeType == dtx.DOMType.DOCUMENT_NODE || newDocument.nodeType == dtx.DOMType.ELEMENT_NODE) dtx.Tools.document = newDocument;
	}
};
dtx.Tools.toDetox = function(x) {
	if(x != null) return dtx.Tools.parse(x.toString()); else return new dtx.DOMCollection();
};
dtx.Tools.toNode = function(eventHandler) {
	if(eventHandler != null && js.Boot.__instanceof(eventHandler,Node)) return eventHandler; else return null;
};
dtx.Tools.ready = function(f) {
	(function(h,a,c,k){if(h[a]==null&&h[c]){h[a]="loading";h[c](k,c=function(){h[a]="complete";h.removeEventListener(k,c,!1)},!1)}})(document,"readyState","addEventListener","DOMContentLoaded");
	Reflect.setField(window,"checkReady",dtx.Tools.checkReady);
	if(f != null) dtx.Tools.checkReady(f);
};
dtx.Tools.checkReady = function(f) {
	/in/.test(document.readyState) ? setTimeout(function () { checkReady(f) }, 9) : f();
};
dtx.Tools.includeSizzle = function() {
};
dtx.Tools.includeJQuery = function() {
};
dtx.collection = {};
dtx.collection.DOMManipulation = function() { };
$hxClasses["dtx.collection.DOMManipulation"] = dtx.collection.DOMManipulation;
dtx.collection.DOMManipulation.__name__ = ["dtx","collection","DOMManipulation"];
dtx.collection.DOMManipulation.append = function(parentCollection,childNode,childCollection) {
	var firstChildUsed = false;
	if(parentCollection != null) {
		var $it0 = HxOverrides.iter(parentCollection.collection);
		while( $it0.hasNext() ) {
			var parent = $it0.next();
			if(firstChildUsed && childNode != null) childNode = childNode.cloneNode(true); else childNode = childNode;
			if(firstChildUsed && childCollection != null) childCollection = childCollection.clone(); else childCollection = childCollection;
			dtx.single.DOMManipulation.append(parent,childNode,childCollection);
			firstChildUsed = true;
		}
	}
	return parentCollection;
};
dtx.collection.DOMManipulation.prepend = function(parentCollection,childNode,childCollection) {
	var firstChildUsed = false;
	if(parentCollection != null) {
		var $it0 = HxOverrides.iter(parentCollection.collection);
		while( $it0.hasNext() ) {
			var parent = $it0.next();
			if(firstChildUsed == false) firstChildUsed = true; else {
				if(childNode != null) childNode = childNode.cloneNode(true);
				if(childCollection != null) childCollection = childCollection.clone();
			}
			dtx.single.DOMManipulation.prepend(parent,childNode,childCollection);
		}
	}
	return parentCollection;
};
dtx.collection.DOMManipulation.appendTo = function(children,parentNode,parentCollection) {
	if(parentNode != null) dtx.single.DOMManipulation.append(parentNode,null,children);
	if(parentCollection != null) {
		var childrenToAppend;
		if(parentNode != null) childrenToAppend = children.clone(); else childrenToAppend = children;
		dtx.collection.DOMManipulation.append(parentCollection,null,childrenToAppend);
	}
	return children;
};
dtx.collection.DOMManipulation.prependTo = function(children,parentNode,parentCollection) {
	if(children != null) {
		var childArray = children.collection.slice();
		childArray.reverse();
		var _g = 0;
		while(_g < childArray.length) {
			var child = childArray[_g];
			++_g;
			dtx.single.DOMManipulation.prependTo(child,parentNode,parentCollection);
		}
	}
	return children;
};
dtx.collection.DOMManipulation.insertThisBefore = function(content,targetNode,targetCollection) {
	if(content != null) {
		var firstChildUsed = false;
		if(targetNode != null) {
			firstChildUsed = true;
			var $it0 = HxOverrides.iter(content.collection);
			while( $it0.hasNext() ) {
				var childToAdd = $it0.next();
				dtx.single.DOMManipulation.insertThisBefore(childToAdd,targetNode);
			}
		}
		if(targetCollection != null) {
			var childCollection = content;
			var $it1 = HxOverrides.iter(targetCollection.collection);
			while( $it1.hasNext() ) {
				var target = $it1.next();
				if(firstChildUsed) childCollection = childCollection.clone(); else childCollection = childCollection;
				dtx.collection.DOMManipulation.insertThisBefore(childCollection,target);
				firstChildUsed = true;
			}
		}
	}
	return content;
};
dtx.collection.DOMManipulation.insertThisAfter = function(content,targetNode,targetCollection) {
	if(content != null) {
		var firstChildUsed = false;
		if(targetNode != null) {
			firstChildUsed = true;
			var currentTarget = targetNode;
			var $it0 = HxOverrides.iter(content.collection);
			while( $it0.hasNext() ) {
				var childToAdd = $it0.next();
				dtx.single.DOMManipulation.insertThisAfter(childToAdd,currentTarget);
				currentTarget = childToAdd;
			}
		}
		if(targetCollection != null) {
			var childCollection = content;
			var $it1 = HxOverrides.iter(targetCollection.collection);
			while( $it1.hasNext() ) {
				var target = $it1.next();
				if(firstChildUsed) childCollection = childCollection.clone(); else childCollection = childCollection;
				dtx.collection.DOMManipulation.insertThisAfter(childCollection,target);
				firstChildUsed = true;
			}
		}
	}
	return content;
};
dtx.collection.DOMManipulation.beforeThisInsert = function(target,contentNode,contentCollection) {
	if(contentNode != null) dtx.single.DOMManipulation.insertThisBefore(contentNode,null,target);
	if(contentCollection != null) dtx.collection.DOMManipulation.insertThisBefore(contentCollection,null,target);
	return target;
};
dtx.collection.DOMManipulation.afterThisInsert = function(target,contentNode,contentCollection) {
	if(contentNode != null) dtx.single.DOMManipulation.insertThisAfter(contentNode,null,target);
	if(contentCollection != null) dtx.collection.DOMManipulation.insertThisAfter(contentCollection,null,target);
	return target;
};
dtx.collection.DOMManipulation.remove = function(nodesToRemove) {
	if(nodesToRemove != null) {
		var $it0 = HxOverrides.iter(nodesToRemove.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.DOMManipulation.remove(node);
		}
	}
	return nodesToRemove;
};
dtx.collection.DOMManipulation.removeFromDOM = function(nodesToRemove) {
	return dtx.collection.DOMManipulation.remove(nodesToRemove);
};
dtx.collection.DOMManipulation.removeChildren = function(parents,childToRemove,childrenToRemove) {
	if(parents != null) {
		var $it0 = HxOverrides.iter(parents.collection);
		while( $it0.hasNext() ) {
			var parent = $it0.next();
			dtx.single.DOMManipulation.removeChildren(parent,childToRemove,childrenToRemove);
		}
	}
	return parents;
};
dtx.collection.DOMManipulation.replaceWith = function(target,contentNode,contentCollection) {
	dtx.collection.DOMManipulation.afterThisInsert(target,contentNode,contentCollection);
	dtx.collection.DOMManipulation.remove(target);
	return target;
};
dtx.collection.DOMManipulation.empty = function(parents) {
	if(parents != null) {
		var $it0 = HxOverrides.iter(parents.collection);
		while( $it0.hasNext() ) {
			var parent = $it0.next();
			while(parent.hasChildNodes()) parent.removeChild(parent.firstChild);
		}
	}
	return parents;
};
dtx.collection.ElementManipulation = function() { };
$hxClasses["dtx.collection.ElementManipulation"] = dtx.collection.ElementManipulation;
dtx.collection.ElementManipulation.__name__ = ["dtx","collection","ElementManipulation"];
dtx.collection.ElementManipulation.index = function(c) {
	if(c != null) return dtx.single.ElementManipulation.index(c.getNode()); else return -1;
};
dtx.collection.ElementManipulation.attr = function(collection,attName) {
	if(collection != null) return dtx.single.ElementManipulation.attr(collection.getNode(),attName); else return "";
};
dtx.collection.ElementManipulation.setAttr = function(collection,attName,attValue) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.setAttr(node,attName,attValue);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.removeAttr = function(collection,attName) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.removeAttr(node,attName);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.hasClass = function(collection,className) {
	var result = false;
	if(collection != null && collection.collection.length > 0) {
		result = true;
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(dtx.single.ElementManipulation.hasClass(node,className) == false) {
				result = false;
				break;
			}
		}
	}
	return result;
};
dtx.collection.ElementManipulation.addClass = function(collection,className) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.addClass(node,className);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.removeClass = function(collection,className) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.removeClass(node,className);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.toggleClass = function(collection,className) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.toggleClass(node,className);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.tagName = function(collection) {
	if(collection != null) return dtx.single.ElementManipulation.tagName(collection.getNode()); else return "";
};
dtx.collection.ElementManipulation.val = function(collection) {
	if(collection != null) return dtx.single.ElementManipulation.val(collection.getNode()); else return "";
};
dtx.collection.ElementManipulation.setVal = function(collection,value) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.setVal(node,value);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.text = function(collection) {
	var text = "";
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			text = text + dtx.single.ElementManipulation.text(node);
		}
	}
	return text;
};
dtx.collection.ElementManipulation.setText = function(collection,text) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.setText(node,text);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.innerHTML = function(collection) {
	var sb = new StringBuf();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			sb.add(dtx.single.ElementManipulation.innerHTML(node));
		}
	}
	return sb.b;
};
dtx.collection.ElementManipulation.setInnerHTML = function(collection,html) {
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.ElementManipulation.setInnerHTML(node,html);
		}
	}
	return collection;
};
dtx.collection.ElementManipulation.html = function(collection) {
	var sb = new StringBuf();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			sb.add(dtx.single.ElementManipulation.html(node));
		}
	}
	return sb.b;
};
dtx.collection.EventManagement = function() { };
$hxClasses["dtx.collection.EventManagement"] = dtx.collection.EventManagement;
dtx.collection.EventManagement.__name__ = ["dtx","collection","EventManagement"];
dtx.collection.EventManagement.trigger = function(targetCollection,eventType) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var target = $it0.next();
			if(target != null && eventType != null) bean.fire(target,eventType);
			target;
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.on = function(targetCollection,eventType,selector,listener) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var target = $it0.next();
			dtx.single.EventManagement.on(target,eventType,selector,listener);
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.off = function(targetCollection,eventType,listener) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var target = $it0.next();
			dtx.single.EventManagement.off(target,eventType,listener);
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.one = function(targetCollection,eventType,selector,listener) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var target = $it0.next();
			dtx.single.EventManagement.one(target,eventType,selector,listener);
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.mousedown = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mousedown",selector,listener);
};
dtx.collection.EventManagement.mouseenter = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mouseenter",selector,listener);
};
dtx.collection.EventManagement.mouseleave = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mouseleave",selector,listener);
};
dtx.collection.EventManagement.mousemove = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mousemove",selector,listener);
};
dtx.collection.EventManagement.mouseout = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mouseout",selector,listener);
};
dtx.collection.EventManagement.mouseover = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mouseover",selector,listener);
};
dtx.collection.EventManagement.mouseup = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"mouseup",selector,listener);
};
dtx.collection.EventManagement.keydown = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"keydown",selector,listener);
};
dtx.collection.EventManagement.keypress = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"keypress",selector,listener);
};
dtx.collection.EventManagement.keyup = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"keyup",selector,listener);
};
dtx.collection.EventManagement.hover = function(targetCollection,selector,listener1,listener2) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.EventManagement.hover(node,selector,listener1,listener2);
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.submit = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"submit",selector,listener);
};
dtx.collection.EventManagement.toggleClick = function(targetCollection,selector,listenerFirstClick,listenerSecondClick) {
	if(targetCollection != null) {
		var $it0 = HxOverrides.iter(targetCollection.collection);
		while( $it0.hasNext() ) {
			var target = $it0.next();
			dtx.single.EventManagement.toggleClick(target,selector,listenerFirstClick,listenerSecondClick);
		}
	}
	return targetCollection;
};
dtx.collection.EventManagement.blur = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"blur",selector,listener);
};
dtx.collection.EventManagement.change = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"change",selector,listener);
};
dtx.collection.EventManagement.click = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"click",selector,listener);
};
dtx.collection.EventManagement.dblclick = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"dblclick",selector,listener);
};
dtx.collection.EventManagement.focus = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"focus",selector,listener);
};
dtx.collection.EventManagement.focusIn = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"focusIn",selector,listener);
};
dtx.collection.EventManagement.focusOut = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"focusOut",selector,listener);
};
dtx.collection.EventManagement.resize = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"resize",selector,listener);
};
dtx.collection.EventManagement.scroll = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"scroll",selector,listener);
};
dtx.collection.EventManagement.wheel = function(target,selector,listener) {
	if(target != null) {
		var $it0 = HxOverrides.iter(target.collection);
		while( $it0.hasNext() ) {
			var n = $it0.next();
			dtx.single.EventManagement.wheel(n,selector,listener);
		}
	}
	return target;
};
dtx.collection.EventManagement.select = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"select",selector,listener);
};
dtx.collection.EventManagement.load = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"load",selector,listener);
};
dtx.collection.EventManagement.unload = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"unload",selector,listener);
};
dtx.collection.EventManagement.error = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"error",selector,listener);
};
dtx.collection.EventManagement.ready = function(target,selector,listener) {
	return dtx.collection.EventManagement.on(target,"ready",selector,listener);
};
dtx.collection.Style = function() { };
$hxClasses["dtx.collection.Style"] = dtx.collection.Style;
dtx.collection.Style.__name__ = ["dtx","collection","Style"];
dtx.collection.Style.getStyle = function(c) {
	if(c != null) return dtx.single.Style.getStyle(c.getNode(0)); else return null;
};
dtx.collection.Style.getComputedStyle = function(c) {
	if(c != null) return dtx.single.Style.getComputedStyle(c.getNode(0)); else return null;
};
dtx.collection.Style.css = function(c,property) {
	if(c != null) return dtx.single.Style.css(c.getNode(0),property); else return null;
};
dtx.collection.Style.setCSS = function(c,prop,val,important) {
	if(important == null) important = false;
	if(c != null) {
		var $it0 = HxOverrides.iter(c.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.Style.setCSS(node,prop,val,important);
		}
	}
	return c;
};
dtx.collection.Style.removeCSS = function(c,prop) {
	if(c != null) {
		var $it0 = HxOverrides.iter(c.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			dtx.single.Style.removeCSS(node,prop);
		}
	}
	return c;
};
dtx.collection.Style.show = function(c) {
	return dtx.collection.Style.removeCSS(c,"display");
};
dtx.collection.Style.hide = function(c) {
	return dtx.collection.Style.setCSS(c,"display","none",true);
};
dtx.collection.Style.pos = function(c) {
	return dtx.single.Style.pos(c.getNode(0));
};
dtx.collection.Traversing = function() { };
$hxClasses["dtx.collection.Traversing"] = dtx.collection.Traversing;
dtx.collection.Traversing.__name__ = ["dtx","collection","Traversing"];
dtx.collection.Traversing.children = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var children = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(dtx.single.ElementManipulation.isElement(node)) children.addNodeList(node.childNodes,elementsOnly);
		}
	}
	return children;
};
dtx.collection.Traversing.firstChildren = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var children = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(dtx.single.ElementManipulation.isElement(node)) {
				var e = node.firstChild;
				while(elementsOnly == true && e != null && dtx.single.ElementManipulation.isElement(e) == false) e = e.nextSibling;
				if(e != null) children.add(e);
			}
		}
	}
	return children;
};
dtx.collection.Traversing.lastChildren = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var children = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(dtx.single.ElementManipulation.isElement(node)) {
				var e = node.lastChild;
				while(elementsOnly == true && e != null && dtx.single.ElementManipulation.isElement(e) == false) e = e.previousSibling;
				if(e != null) children.add(e);
			}
		}
	}
	return children;
};
dtx.collection.Traversing.parent = function(collection) {
	var parents = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.parentNode != null && node != dtx.Tools.get_document()) parents.add(node.parentNode);
		}
	}
	return parents;
};
dtx.collection.Traversing.parents = function(collection) {
	return dtx.collection.Traversing.parent(collection);
};
dtx.collection.Traversing.ancestors = function(collection) {
	var ancestorList = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var p = dtx.single.Traversing.parent(node);
			while(p != null) {
				ancestorList.add(p);
				p = dtx.single.Traversing.parent(p);
			}
		}
	}
	return ancestorList;
};
dtx.collection.Traversing.descendants = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var descendantList = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var l = dtx.single.Traversing.descendants(node,elementsOnly);
			descendantList.addCollection(l);
		}
	}
	return descendantList;
};
dtx.collection.Traversing.next = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var siblings = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var sibling = node.nextSibling;
			while(sibling != null && sibling.nodeType != dtx.DOMType.ELEMENT_NODE && elementsOnly) sibling = sibling.nextSibling;
			if(sibling != null) siblings.add(sibling);
		}
	}
	return siblings;
};
dtx.collection.Traversing.prev = function(collection,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var siblings = new dtx.DOMCollection();
	if(collection != null) {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var sibling = node.previousSibling;
			while(sibling != null && sibling.nodeType != dtx.DOMType.ELEMENT_NODE && elementsOnly) sibling = sibling.previousSibling;
			if(sibling != null) siblings.add(sibling);
		}
	}
	return siblings;
};
dtx.collection.Traversing.find = function(collection,selector) {
	var newDOMCollection = new dtx.DOMCollection();
	if(collection != null && selector != null && selector != "") {
		var $it0 = HxOverrides.iter(collection.collection);
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(dtx.single.ElementManipulation.isElement(node) || dtx.single.ElementManipulation.isDocument(node)) {
				var element = node;
				if(document.querySelectorAll) {
					var results = element.querySelectorAll(selector);
					newDOMCollection.addNodeList(results);
				} else {
					var engine = 
								(('undefined' != typeof Sizzle && Sizzle) || 
								(('undefined' != typeof jQuery) && jQuery.find) ||
								(('undefined' != typeof $) && $.find))
							;
					var results1 = engine(selector,node);
					newDOMCollection.addCollection(results1);
				}
			}
		}
	}
	return newDOMCollection;
};
dtx.single = {};
dtx.single.DOMManipulation = function() { };
$hxClasses["dtx.single.DOMManipulation"] = dtx.single.DOMManipulation;
dtx.single.DOMManipulation.__name__ = ["dtx","single","DOMManipulation"];
dtx.single.DOMManipulation.append = function(parent,childNode,childCollection) {
	if(parent != null) {
		if(childNode != null) parent.appendChild(childNode);
		if(childCollection != null) {
			var $it0 = HxOverrides.iter(childCollection.collection);
			while( $it0.hasNext() ) {
				var child = $it0.next();
				parent.appendChild(child);
			}
		}
	}
	return parent;
};
dtx.single.DOMManipulation.prepend = function(parent,childNode,childCollection) {
	if(parent != null) {
		if(childNode != null) {
			if(parent.hasChildNodes()) dtx.single.DOMManipulation.insertThisBefore(childNode,parent.firstChild); else dtx.single.DOMManipulation.append(parent,childNode);
		}
		if(childCollection != null) dtx.collection.DOMManipulation.insertThisBefore(childCollection,parent.firstChild);
	}
	return parent;
};
dtx.single.DOMManipulation.appendTo = function(child,parentNode,parentCollection) {
	if(parentNode != null) dtx.single.DOMManipulation.append(parentNode,child);
	if(parentCollection != null) {
		var childToInsert;
		if(parentNode != null) {
			if(child == null) childToInsert = null; else childToInsert = child.cloneNode(true);
		} else childToInsert = child;
		dtx.collection.DOMManipulation.append(parentCollection,childToInsert);
	}
	return child;
};
dtx.single.DOMManipulation.prependTo = function(child,parentNode,parentCollection) {
	if(parentNode != null) {
		if(parentNode.hasChildNodes()) dtx.single.DOMManipulation.insertThisBefore(child,parentNode.firstChild,parentCollection); else dtx.single.DOMManipulation.append(parentNode,child);
	}
	if(parentCollection != null) {
		var childToInsert;
		if(parentNode != null) {
			if(child == null) childToInsert = null; else childToInsert = child.cloneNode(true);
		} else childToInsert = child;
		dtx.collection.DOMManipulation.prepend(parentCollection,childToInsert);
	}
	return child;
};
dtx.single.DOMManipulation.insertThisBefore = function(content,targetNode,targetCollection) {
	if(content != null) {
		var firstChildUsed = false;
		if(targetNode != null) {
			var parent = targetNode.parentNode;
			if(parent != null) {
				firstChildUsed = true;
				parent.insertBefore(content,targetNode);
			}
		}
		if(targetCollection != null) {
			var $it0 = HxOverrides.iter(targetCollection.collection);
			while( $it0.hasNext() ) {
				var target = $it0.next();
				var childToInsert;
				if(firstChildUsed) childToInsert = content.cloneNode(true); else childToInsert = content;
				var parent1 = target.parentNode;
				if(parent1 != null) parent1.insertBefore(childToInsert,target);
				firstChildUsed = true;
			}
		}
	}
	return content;
};
dtx.single.DOMManipulation.insertThisAfter = function(content,targetNode,targetCollection) {
	if(content != null) {
		var firstChildUsed = false;
		if(targetNode != null) {
			var next = targetNode.nextSibling;
			var parent = targetNode.parentNode;
			if(parent != null) {
				firstChildUsed = true;
				if(next != null) parent.insertBefore(content,next); else parent.appendChild(content);
			}
		}
		if(targetCollection != null) {
			var $it0 = HxOverrides.iter(targetCollection.collection);
			while( $it0.hasNext() ) {
				var target = $it0.next();
				var childToInsert;
				if(firstChildUsed) childToInsert = content.cloneNode(true); else childToInsert = content;
				var next1 = target.nextSibling;
				if(next1 != null) {
					var parent1 = target.parentNode;
					if(parent1 != null) parent1.insertBefore(childToInsert,next1);
				} else dtx.single.DOMManipulation.append(target.parentNode,childToInsert);
				firstChildUsed = true;
			}
		}
	}
	return content;
};
dtx.single.DOMManipulation.beforeThisInsert = function(target,contentNode,contentCollection) {
	if(target != null) {
		if(contentNode != null) dtx.single.DOMManipulation.insertThisBefore(contentNode,target);
		if(contentCollection != null) dtx.collection.DOMManipulation.insertThisBefore(contentCollection,target);
	}
	return target;
};
dtx.single.DOMManipulation.afterThisInsert = function(target,contentNode,contentCollection) {
	if(target != null) {
		if(contentNode != null) dtx.single.DOMManipulation.insertThisAfter(contentNode,target);
		if(contentCollection != null) dtx.collection.DOMManipulation.insertThisAfter(contentCollection,target);
	}
	return target;
};
dtx.single.DOMManipulation.remove = function(childToRemove) {
	if(childToRemove != null) {
		var parent = childToRemove.parentNode;
		if(parent != null) parent.removeChild(childToRemove);
	}
	return childToRemove;
};
dtx.single.DOMManipulation.removeFromDOM = function(nodesToRemove) {
	return dtx.single.DOMManipulation.remove(nodesToRemove);
};
dtx.single.DOMManipulation.removeChildren = function(parent,childToRemove,childrenToRemove) {
	if(parent != null) {
		if(childToRemove != null && childToRemove.parentNode == parent) parent.removeChild(childToRemove);
		if(childrenToRemove != null) {
			var $it0 = HxOverrides.iter(childrenToRemove.collection);
			while( $it0.hasNext() ) {
				var child = $it0.next();
				if(child.parentNode == parent) parent.removeChild(child);
			}
		}
	}
	return parent;
};
dtx.single.DOMManipulation.replaceWith = function(target,contentNode,contentCollection) {
	dtx.single.DOMManipulation.afterThisInsert(target,contentNode,contentCollection);
	dtx.single.DOMManipulation.remove(target);
	return target;
};
dtx.single.DOMManipulation.empty = function(parent) {
	if(parent != null) while(parent.hasChildNodes()) parent.removeChild(parent.firstChild);
	return parent;
};
dtx.single.ElementManipulation = function() { };
$hxClasses["dtx.single.ElementManipulation"] = dtx.single.ElementManipulation;
dtx.single.ElementManipulation.__name__ = ["dtx","single","ElementManipulation"];
dtx.single.ElementManipulation.isElement = function(node) {
	return node != null && node.nodeType == dtx.DOMType.ELEMENT_NODE;
};
dtx.single.ElementManipulation.isComment = function(node) {
	return node != null && node.nodeType == dtx.DOMType.COMMENT_NODE;
};
dtx.single.ElementManipulation.isTextNode = function(node) {
	return node != null && node.nodeType == dtx.DOMType.TEXT_NODE;
};
dtx.single.ElementManipulation.isDocument = function(node) {
	return node != null && node.nodeType == dtx.DOMType.DOCUMENT_NODE;
};
dtx.single.ElementManipulation.index = function(n) {
	return Lambda.indexOf(dtx.single.Traversing.children(dtx.single.Traversing.parent(n),false),n);
};
dtx.single.ElementManipulation.attr = function(elm,attName) {
	var ret = "";
	if(dtx.single.ElementManipulation.isElement(elm) && attName != null) {
		var element = elm;
		ret = element.getAttribute(attName);
		if(ret == null) ret = "";
	}
	return ret;
};
dtx.single.ElementManipulation.setAttr = function(elm,attName,attValue) {
	if(elm != null && elm.nodeType == dtx.DOMType.ELEMENT_NODE && attName != null) {
		if(attValue == null) attValue = "";
		var element = elm;
		element.setAttribute(attName,attValue);
	}
	return elm;
};
dtx.single.ElementManipulation.removeAttr = function(elm,attName) {
	if(elm != null && elm.nodeType == dtx.DOMType.ELEMENT_NODE && attName != null) {
		var element = elm;
		element.removeAttribute(attName);
	}
	return elm;
};
dtx.single.ElementManipulation.testForClass = function(elm,className) {
	return (function($this) {
		var $r;
		var _this = dtx.single.ElementManipulation.attr(elm,"class").split(" ");
		$r = HxOverrides.indexOf(_this,className,0);
		return $r;
	}(this)) > -1;
};
dtx.single.ElementManipulation.hasClass = function(elm,className) {
	var hasClass = false;
	if(dtx.single.ElementManipulation.isElement(elm) && className != null && className != "") {
		hasClass = true;
		var _g = 0;
		var _g1 = className.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			if(name != "" && dtx.single.ElementManipulation.testForClass(elm,name) == false) {
				hasClass = false;
				break;
			}
		}
	}
	return hasClass;
};
dtx.single.ElementManipulation.addClass = function(elm,className) {
	if(className != null) {
		var _g = 0;
		var _g1 = className.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			if(name != "" && dtx.single.ElementManipulation.hasClass(elm,name) == false) {
				var oldClassAttr = dtx.single.ElementManipulation.attr(elm,"class");
				var newClassAttr;
				if(oldClassAttr == "") newClassAttr = name; else newClassAttr = "" + oldClassAttr + " " + name;
				dtx.single.ElementManipulation.setAttr(elm,"class",newClassAttr);
			}
		}
	}
	return elm;
};
dtx.single.ElementManipulation.removeClass = function(elm,className) {
	var classes = dtx.single.ElementManipulation.attr(elm,"class").split(" ");
	if(className != null) {
		var _g = 0;
		var _g1 = className.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			HxOverrides.remove(classes,name);
		}
	}
	var newClassValue = classes.join(" ");
	dtx.single.ElementManipulation.setAttr(elm,"class",newClassValue);
	return elm;
};
dtx.single.ElementManipulation.toggleClass = function(elm,className) {
	if(className != null) {
		var _g = 0;
		var _g1 = className.split(" ");
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			if(dtx.single.ElementManipulation.hasClass(elm,name)) dtx.single.ElementManipulation.removeClass(elm,name); else dtx.single.ElementManipulation.addClass(elm,name);
		}
	}
	return elm;
};
dtx.single.ElementManipulation.tagName = function(elm) {
	if(elm == null) return ""; else return elm.nodeName.toLowerCase();
};
dtx.single.ElementManipulation.val = function(node) {
	var val = "";
	if(node != null) {
		var _g = node.nodeType;
		switch(_g) {
		case dtx.DOMType.ELEMENT_NODE:
			if(node.nodeName.toLowerCase() == "input" && dtx.single.ElementManipulation.attr(node,"type") == "checkbox") {
				if(Reflect.field(node,"checked")) {
					val = dtx.single.ElementManipulation.attr(node,"value");
					if(val == "") val = "checked";
				} else "";
			} else {
				val = Reflect.field(node,"value");
				if(val == null) val = dtx.single.ElementManipulation.attr(node,"value");
			}
			break;
		default:
			val = node.nodeValue;
		}
	}
	return val;
};
dtx.single.ElementManipulation.setVal = function(node,val) {
	if(node != null) {
		var _g = node.nodeType;
		switch(_g) {
		case dtx.DOMType.ELEMENT_NODE:
			node.value = val;
			break;
		default:
			node.nodeValue = val;
		}
	}
	return node;
};
dtx.single.ElementManipulation.text = function(elm) {
	var text = "";
	if(elm != null) {
		if(dtx.single.ElementManipulation.isElement(elm) || dtx.single.ElementManipulation.isDocument(elm)) text = elm.textContent; else text = elm.nodeValue;
	}
	return text;
};
dtx.single.ElementManipulation.setText = function(elm,text) {
	if(text == null) text = "";
	if(elm != null) {
		if(dtx.single.ElementManipulation.isElement(elm) || dtx.single.ElementManipulation.isDocument(elm)) elm.textContent = text; else elm.nodeValue = text;
	}
	return elm;
};
dtx.single.ElementManipulation.innerHTML = function(elm) {
	var ret = "";
	if(dtx.single.ElementManipulation.isElement(elm) || dtx.single.ElementManipulation.isDocument(elm)) {
		var sb = new StringBuf();
		var $it0 = new dtx.DOMCollection().addNodeList(elm.childNodes,false).iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			dtx.single.ElementManipulation.printHtml(child,sb,false);
		}
		ret = sb.b;
	} else if(elm != null) ret = elm.textContent;
	return ret;
};
dtx.single.ElementManipulation.setInnerHTML = function(elm,html) {
	if(html == null) html = "";
	if(elm != null) {
		var _g = elm.nodeType;
		switch(_g) {
		case dtx.DOMType.ELEMENT_NODE:
			var element = elm;
			element.innerHTML = html;
			break;
		default:
			elm.textContent = html;
		}
	}
	return elm;
};
dtx.single.ElementManipulation.clone = function(elm) {
	if(elm == null) return null; else return elm.cloneNode(true);
};
dtx.single.ElementManipulation.html = function(node) {
	if(node == null) return "";
	var sb = new StringBuf();
	dtx.single.ElementManipulation.printHtml(node,sb,false);
	return sb.b;
};
dtx.single.ElementManipulation.printHtml = function(n,sb,preserveTagNameCase) {
	if(dtx.single.ElementManipulation.isElement(n)) {
		var elmName;
		if(preserveTagNameCase) elmName = n.nodeName; else elmName = n.nodeName.toLowerCase();
		sb.b += Std.string("<" + elmName);
		var _g1 = 0;
		var _g = n.attributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var attNode = n.attributes[i];
			sb.b += Std.string(" " + attNode.nodeName + "=\"");
			dtx.single.ElementManipulation.addHtmlEscapedString(attNode.nodeValue,sb,true);
			sb.b += "\"";
		}
		var children = new dtx.DOMCollection().addNodeList(n.childNodes,false);
		if(children.collection.length > 0) {
			sb.b += ">";
			var $it0 = HxOverrides.iter(children.collection);
			while( $it0.hasNext() ) {
				var child = $it0.next();
				dtx.single.ElementManipulation.printHtml(child,sb,preserveTagNameCase);
			}
			sb.b += Std.string("</" + elmName + ">");
		} else if(Lambda.has(dtx.single.ElementManipulation.selfClosingElms,elmName)) sb.b += " />"; else sb.b += Std.string("></" + elmName + ">");
	} else if(dtx.single.ElementManipulation.isDocument(n)) {
		var $it1 = dtx.single.Traversing.children(n,false).iterator();
		while( $it1.hasNext() ) {
			var child1 = $it1.next();
			dtx.single.ElementManipulation.printHtml(child1,sb,preserveTagNameCase);
		}
	} else if(dtx.single.ElementManipulation.isTextNode(n)) dtx.single.ElementManipulation.addHtmlEscapedString(n.nodeValue,sb,false); else if(dtx.single.ElementManipulation.isComment(n)) {
		sb.b += "<!--";
		if(n.nodeValue == null) sb.b += "null"; else sb.b += "" + n.nodeValue;
		sb.b += "-->";
	}
};
dtx.single.ElementManipulation.addHtmlEscapedString = function(str,sb,encodeQuotes) {
	var _g1 = 0;
	var _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		var charCode = str.charCodeAt(i);
		if(charCode == 38) {
			var peekIndex = i + 1;
			var isEntity = false;
			while(peekIndex < str.length) {
				var c = str.charCodeAt(peekIndex);
				if(c == 59) {
					isEntity = peekIndex > i + 1;
					break;
				}
				if(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 35) {
					peekIndex++;
					continue;
				} else break;
			}
			if(isEntity) sb.b += "&"; else sb.b += "&amp;";
		} else if(charCode == 60) sb.b += "&lt;"; else if(charCode == 62) sb.b += "&gt;"; else if(charCode == 160) sb.b += "&nbsp;"; else if(encodeQuotes && charCode == 39) sb.b += "&#039;"; else if(encodeQuotes && charCode == 34) sb.b += "&quot;"; else if(charCode < 161) sb.b += String.fromCharCode(charCode); else sb.b += Std.string("&#" + charCode + ";");
	}
};
dtx.single.EventManagement = function() { };
$hxClasses["dtx.single.EventManagement"] = dtx.single.EventManagement;
dtx.single.EventManagement.__name__ = ["dtx","single","EventManagement"];
dtx.single.EventManagement.trigger = function(target,eventName) {
	if(target != null && eventName != null) bean.fire(target,eventName);
	return target;
};
dtx.single.EventManagement.on = function(target,eventType,selector,listener) {
	if(target != null && eventType != null) {
		if(listener != null) {
			if(selector != null) bean.on(target,eventType,selector,listener); else bean.on(target,eventType,listener);
		} else {
			if(target != null && eventType != null) bean.fire(target,eventType);
			target;
		}
	}
	return target;
};
dtx.single.EventManagement.off = function(target,eventType,listener) {
	if(target != null) {
		if(eventType != null && listener != null) bean.off(target,eventType,listener); else if(eventType != null) bean.off(target,eventType); else if(listener != null) bean.off(target,listener); else bean.off(target);
	}
	return target;
};
dtx.single.EventManagement.one = function(target,eventType,selector,listener) {
	if(target != null) {
		if(selector != null) bean.one(target,eventType,selector,listener); else bean.one(target,eventType,listener);
	}
	return target;
};
dtx.single.EventManagement.mousedown = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mousedown",selector,listener);
};
dtx.single.EventManagement.mouseenter = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mouseover",selector,listener);
};
dtx.single.EventManagement.mouseleave = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mouseout",selector,listener);
};
dtx.single.EventManagement.mousemove = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mousemove",selector,listener);
};
dtx.single.EventManagement.mouseout = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mouseout",selector,listener);
};
dtx.single.EventManagement.mouseover = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mouseover",selector,listener);
};
dtx.single.EventManagement.mouseup = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"mouseup",selector,listener);
};
dtx.single.EventManagement.keydown = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"keydown",selector,listener);
};
dtx.single.EventManagement.keypress = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"keypress",selector,listener);
};
dtx.single.EventManagement.keyup = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"keyup",selector,listener);
};
dtx.single.EventManagement.hover = function(target,selector,listener1,listener2) {
	dtx.single.EventManagement.on(target,"mouseover",selector,listener1);
	if(listener2 == null) dtx.single.EventManagement.on(target,"mouseout",selector,listener1); else dtx.single.EventManagement.on(target,"mouseout",selector,listener2);
	return target;
};
dtx.single.EventManagement.submit = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"submit",selector,listener);
};
dtx.single.EventManagement.toggleClick = function(target,selector,listenerFirstClick,listenerSecondClick) {
	var fn1 = null;
	var fn2 = null;
	fn1 = function(e) {
		listenerFirstClick(e);
		dtx.single.EventManagement.off(target,"click",fn1);
		dtx.single.EventManagement.on(target,"click",selector,fn2);
	};
	fn2 = function(e1) {
		listenerSecondClick(e1);
		dtx.single.EventManagement.off(target,"click",fn2);
		dtx.single.EventManagement.on(target,"click",selector,fn1);
	};
	dtx.single.EventManagement.on(target,"click",selector,fn1);
	return target;
};
dtx.single.EventManagement.blur = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"blur",selector,listener);
};
dtx.single.EventManagement.change = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"change",selector,listener);
};
dtx.single.EventManagement.click = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"click",selector,listener);
};
dtx.single.EventManagement.dblclick = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"dblclick",selector,listener);
};
dtx.single.EventManagement.focus = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"focus",selector,listener);
};
dtx.single.EventManagement.focusIn = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"focusIn",selector,listener);
};
dtx.single.EventManagement.focusOut = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"focusOut",selector,listener);
};
dtx.single.EventManagement.resize = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"resize",selector,listener);
};
dtx.single.EventManagement.scroll = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"scroll",selector,listener);
};
dtx.single.EventManagement.wheel = function(target,selector,listener) {
	target.addEventListener("wheel",listener);
	return target;
};
dtx.single.EventManagement.select = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"select",selector,listener);
};
dtx.single.EventManagement.load = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"load",selector,listener);
};
dtx.single.EventManagement.unload = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"unload",selector,listener);
};
dtx.single.EventManagement.error = function(target,selector,listener) {
	return dtx.single.EventManagement.on(target,"error",selector,listener);
};
dtx.single.Style = function() { };
$hxClasses["dtx.single.Style"] = dtx.single.Style;
dtx.single.Style.__name__ = ["dtx","single","Style"];
dtx.single.Style.getStyle = function(node) {
	var style = null;
	if(dtx.single.ElementManipulation.isElement(node)) {
		var elm = node;
		style = elm.style;
	}
	return style;
};
dtx.single.Style.getComputedStyle = function(node) {
	var style = null;
	if(dtx.single.ElementManipulation.isElement(node)) style = window.getComputedStyle(node);
	return style;
};
dtx.single.Style.css = function(node,prop) {
	var style = dtx.single.Style.getComputedStyle(node);
	if(style != null && prop != null) return style.getPropertyValue(prop); else return null;
};
dtx.single.Style.setCSS = function(node,prop,val,important) {
	if(important == null) important = false;
	if(dtx.single.ElementManipulation.isElement(node) && prop != null) {
		var style = dtx.single.Style.getStyle(node);
		var priority;
		if(important) priority = "important"; else priority = "";
		style.setProperty(prop,val,priority);
	}
	return node;
};
dtx.single.Style.removeCSS = function(node,prop) {
	if(dtx.single.ElementManipulation.isElement(node) && prop != null) {
		var style = dtx.single.Style.getStyle(node);
		style.removeProperty(prop);
	}
	return node;
};
dtx.single.Style.show = function(n) {
	return dtx.single.Style.removeCSS(n,"display");
};
dtx.single.Style.hide = function(n) {
	return dtx.single.Style.setCSS(n,"display","none",true);
};
dtx.single.Style.pos = function(node) {
	var pos = { top : -1, left : -1, width : 0, height : 0};
	if(dtx.single.ElementManipulation.isElement(node)) {
		var e = node;
		return { top : e.offsetTop, left : e.offsetLeft, width : e.offsetWidth, height : e.offsetHeight};
	}
	return pos;
};
dtx.single.Traversing = function() { };
$hxClasses["dtx.single.Traversing"] = dtx.single.Traversing;
dtx.single.Traversing.__name__ = ["dtx","single","Traversing"];
dtx.single.Traversing.unsafeGetChildren = function(elm,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	return new dtx.DOMCollection().addNodeList(elm.childNodes,elementsOnly);
};
dtx.single.Traversing.children = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	if(node != null && dtx.single.ElementManipulation.isElement(node)) return new dtx.DOMCollection().addNodeList(node.childNodes,elementsOnly); else return new dtx.DOMCollection();
};
dtx.single.Traversing.firstChildren = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var firstChild = null;
	if(node != null && dtx.single.ElementManipulation.isElement(node)) {
		var e = node.firstChild;
		while(elementsOnly == true && e != null && dtx.single.ElementManipulation.isElement(e) == false) e = e.nextSibling;
		if(e != null) firstChild = e;
	}
	return firstChild;
};
dtx.single.Traversing.lastChildren = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var lastChild = null;
	if(node != null && dtx.single.ElementManipulation.isElement(node)) {
		var e = node.lastChild;
		while(elementsOnly == true && e != null && dtx.single.ElementManipulation.isElement(e) == false) e = e.previousSibling;
		if(e != null) lastChild = e;
	}
	return lastChild;
};
dtx.single.Traversing.parent = function(node) {
	var p = null;
	if(node != null && node != dtx.Tools.get_document()) p = node.parentNode;
	return p;
};
dtx.single.Traversing.parents = function(node) {
	return dtx.single.Traversing.parent(node);
};
dtx.single.Traversing.ancestors = function(node) {
	var ancestorList = new dtx.DOMCollection();
	var p = dtx.single.Traversing.parent(node);
	while(p != null) {
		ancestorList.add(p);
		p = dtx.single.Traversing.parent(p);
	}
	return ancestorList;
};
dtx.single.Traversing.descendants = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var descendantList = new dtx.DOMCollection();
	var $it0 = dtx.single.Traversing.children(node,elementsOnly).iterator();
	while( $it0.hasNext() ) {
		var child = $it0.next();
		descendantList.add(child);
		descendantList.addCollection(dtx.single.Traversing.descendants(child,elementsOnly));
	}
	return descendantList;
};
dtx.single.Traversing.next = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var sibling;
	if(node != null) sibling = node.nextSibling; else sibling = null;
	while(sibling != null && elementsOnly && sibling.nodeType != dtx.DOMType.ELEMENT_NODE) sibling = sibling.nextSibling;
	return sibling;
};
dtx.single.Traversing.prev = function(node,elementsOnly) {
	if(elementsOnly == null) elementsOnly = true;
	var sibling;
	if(node != null) sibling = node.previousSibling; else sibling = null;
	while(sibling != null && elementsOnly && sibling.nodeType != dtx.DOMType.ELEMENT_NODE) sibling = sibling.previousSibling;
	return sibling;
};
dtx.single.Traversing.find = function(node,selector) {
	var newDOMCollection = new dtx.DOMCollection();
	if(node != null && dtx.single.ElementManipulation.isElement(node) || dtx.single.ElementManipulation.isDocument(node)) {
		var element = node;
		if(document.querySelectorAll) {
			var results = element.querySelectorAll(selector);
			newDOMCollection.addNodeList(results);
		} else {
			var engine = 
						(('undefined' != typeof Sizzle && Sizzle) || 
						(('undefined' != typeof jQuery) && jQuery.find) || 
						(('undefined' != typeof $) && $.find))
					;
			var results1 = engine(selector,node);
			newDOMCollection.addCollection(results1);
		}
	}
	return newDOMCollection;
};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.__empty_constructs__ = [haxe.StackItem.CFunction];
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
};
haxe.Serializer.prototype = {
	buf: null
	,cache: null
	,shash: null
	,scount: null
	,useCache: null
	,useEnumIndex: null
	,toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe.ds.StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe.io.Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe.Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,serializeException: function(e) {
		this.buf.b += "x";
		this.serialize(e);
	}
	,__class__: haxe.Serializer
};
haxe._Template = {};
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] };
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.__empty_constructs__ = [];
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	expr: null
	,context: null
	,macros: null
	,stack: null
	,buf: null
	,execute: function(context,macros) {
		if(macros == null) this.macros = { }; else this.macros = macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,resolve: function(v) {
		if(Object.prototype.hasOwnProperty.call(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Object.prototype.hasOwnProperty.call(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			var params = [];
			var part = "";
			while(true) {
				var c = HxOverrides.cca(data,parp);
				parp++;
				if(c == 40) npar++; else if(c == 41) {
					npar--;
					if(npar <= 0) break;
				} else if(c == null) throw "Unclosed macro parenthesis";
				if(c == 44 && npar == 1) {
					params.push(part);
					part = "";
				} else part += String.fromCharCode(c);
			}
			params.push(part);
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0;
			var _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e1 = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t2 = tokens.pop();
			if(t2 == null || t2.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e1,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		var _g = p.p;
		switch(_g) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			var _g1 = p1.p;
			switch(_g1) {
			case "+":
				return function() {
					return e1() + e2();
				};
			case "-":
				return function() {
					return e1() - e2();
				};
			case "*":
				return function() {
					return e1() * e2();
				};
			case "/":
				return function() {
					return e1() / e2();
				};
			case ">":
				return function() {
					return e1() > e2();
				};
			case "<":
				return function() {
					return e1() < e2();
				};
			case ">=":
				return function() {
					return e1() >= e2();
				};
			case "<=":
				return function() {
					return e1() <= e2();
				};
			case "==":
				return function() {
					return e1() == e2();
				};
			case "!=":
				return function() {
					return e1() != e2();
				};
			case "&&":
				return function() {
					return e1() && e2();
				};
			case "||":
				return function() {
					return e1() || e2();
				};
			default:
				throw "Unknown operation " + p1.p;
			}
			break;
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,run: function(e) {
		switch(e[1]) {
		case 0:
			var v = e[2];
			this.buf.add(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = e[2];
			this.buf.add(Std.string(e1()));
			break;
		case 2:
			var eelse = e[4];
			var eif = e[3];
			var e2 = e[2];
			var v1 = e2();
			if(v1 == null || v1 == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = e[2];
			if(str == null) this.buf.b += "null"; else this.buf.b += "" + str;
			break;
		case 4:
			var l = e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e3 = $it0.next();
				this.run(e3);
			}
			break;
		case 5:
			var loop = e[3];
			var e4 = e[2];
			var v2 = e4();
			try {
				var x = $iterator(v2)();
				if(x.hasNext == null) throw null;
				v2 = x;
			} catch( e5 ) {
				try {
					if(v2.hasNext == null) throw null;
				} catch( e6 ) {
					throw "Cannot iter on " + Std.string(v2);
				}
			}
			this.stack.push(this.context);
			var v3 = v2;
			while( v3.hasNext() ) {
				var ctx = v3.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = e[3];
			var m = e[2];
			var v4 = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				switch(p[1]) {
				case 0:
					var v5 = p[2];
					pl.push(this.resolve(v5));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.add(Std.string(v4.apply(this.macros,pl)));
			} catch( e7 ) {
				var plstr;
				try {
					plstr = pl.join(",");
				} catch( e8 ) {
					plstr = "???";
				}
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e7) + ")";
				throw msg;
			}
			break;
		}
	}
	,__class__: haxe.Template
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.prototype = {
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.Option = $hxClasses["haxe.ds.Option"] = { __ename__ : ["haxe","ds","Option"], __constructs__ : ["Some","None"] };
haxe.ds.Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe.ds.Option; $x.toString = $estr; return $x; };
haxe.ds.Option.None = ["None",1];
haxe.ds.Option.None.toString = $estr;
haxe.ds.Option.None.__enum__ = haxe.ds.Option;
haxe.ds.Option.__empty_constructs__ = [haxe.ds.Option.None];
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Error.__empty_constructs__ = [haxe.io.Error.Blocked,haxe.io.Error.Overflow,haxe.io.Error.OutsideBounds];
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutDirectory = function(path) {
	var s = new haxe.io.Path(path);
	s.dir = null;
	return s.toString();
};
haxe.io.Path.extension = function(path) {
	var s = new haxe.io.Path(path);
	if(s.ext == null) return "";
	return s.ext;
};
haxe.io.Path.withExtension = function(path,ext) {
	var s = new haxe.io.Path(path);
	s.ext = ext;
	return s.toString();
};
haxe.io.Path.addTrailingSlash = function(path) {
	if(path.length == 0) return "/";
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) return path + "\\"; else return path;
	} else if(c1 != path.length - 1) return path + "/"; else return path;
};
haxe.io.Path.prototype = {
	dir: null
	,file: null
	,ext: null
	,backslash: null
	,toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.macro = {};
haxe.macro.Constant = $hxClasses["haxe.macro.Constant"] = { __ename__ : ["haxe","macro","Constant"], __constructs__ : ["CInt","CFloat","CString","CIdent","CRegexp"] };
haxe.macro.Constant.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CIdent = function(s) { var $x = ["CIdent",3,s]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.CRegexp = function(r,opt) { var $x = ["CRegexp",4,r,opt]; $x.__enum__ = haxe.macro.Constant; $x.toString = $estr; return $x; };
haxe.macro.Constant.__empty_constructs__ = [];
haxe.macro.Binop = $hxClasses["haxe.macro.Binop"] = { __ename__ : ["haxe","macro","Binop"], __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe.macro.Binop.OpAdd = ["OpAdd",0];
haxe.macro.Binop.OpAdd.toString = $estr;
haxe.macro.Binop.OpAdd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMult = ["OpMult",1];
haxe.macro.Binop.OpMult.toString = $estr;
haxe.macro.Binop.OpMult.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpDiv = ["OpDiv",2];
haxe.macro.Binop.OpDiv.toString = $estr;
haxe.macro.Binop.OpDiv.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpSub = ["OpSub",3];
haxe.macro.Binop.OpSub.toString = $estr;
haxe.macro.Binop.OpSub.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssign = ["OpAssign",4];
haxe.macro.Binop.OpAssign.toString = $estr;
haxe.macro.Binop.OpAssign.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpEq = ["OpEq",5];
haxe.macro.Binop.OpEq.toString = $estr;
haxe.macro.Binop.OpEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpNotEq = ["OpNotEq",6];
haxe.macro.Binop.OpNotEq.toString = $estr;
haxe.macro.Binop.OpNotEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGt = ["OpGt",7];
haxe.macro.Binop.OpGt.toString = $estr;
haxe.macro.Binop.OpGt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGte = ["OpGte",8];
haxe.macro.Binop.OpGte.toString = $estr;
haxe.macro.Binop.OpGte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLt = ["OpLt",9];
haxe.macro.Binop.OpLt.toString = $estr;
haxe.macro.Binop.OpLt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLte = ["OpLte",10];
haxe.macro.Binop.OpLte.toString = $estr;
haxe.macro.Binop.OpLte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAnd = ["OpAnd",11];
haxe.macro.Binop.OpAnd.toString = $estr;
haxe.macro.Binop.OpAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpOr = ["OpOr",12];
haxe.macro.Binop.OpOr.toString = $estr;
haxe.macro.Binop.OpOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpXor = ["OpXor",13];
haxe.macro.Binop.OpXor.toString = $estr;
haxe.macro.Binop.OpXor.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe.macro.Binop.OpBoolAnd.toString = $estr;
haxe.macro.Binop.OpBoolAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolOr = ["OpBoolOr",15];
haxe.macro.Binop.OpBoolOr.toString = $estr;
haxe.macro.Binop.OpBoolOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShl = ["OpShl",16];
haxe.macro.Binop.OpShl.toString = $estr;
haxe.macro.Binop.OpShl.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShr = ["OpShr",17];
haxe.macro.Binop.OpShr.toString = $estr;
haxe.macro.Binop.OpShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpUShr = ["OpUShr",18];
haxe.macro.Binop.OpUShr.toString = $estr;
haxe.macro.Binop.OpUShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMod = ["OpMod",19];
haxe.macro.Binop.OpMod.toString = $estr;
haxe.macro.Binop.OpMod.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe.macro.Binop; $x.toString = $estr; return $x; };
haxe.macro.Binop.OpInterval = ["OpInterval",21];
haxe.macro.Binop.OpInterval.toString = $estr;
haxe.macro.Binop.OpInterval.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpArrow = ["OpArrow",22];
haxe.macro.Binop.OpArrow.toString = $estr;
haxe.macro.Binop.OpArrow.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.__empty_constructs__ = [haxe.macro.Binop.OpAdd,haxe.macro.Binop.OpMult,haxe.macro.Binop.OpDiv,haxe.macro.Binop.OpSub,haxe.macro.Binop.OpAssign,haxe.macro.Binop.OpEq,haxe.macro.Binop.OpNotEq,haxe.macro.Binop.OpGt,haxe.macro.Binop.OpGte,haxe.macro.Binop.OpLt,haxe.macro.Binop.OpLte,haxe.macro.Binop.OpAnd,haxe.macro.Binop.OpOr,haxe.macro.Binop.OpXor,haxe.macro.Binop.OpBoolAnd,haxe.macro.Binop.OpBoolOr,haxe.macro.Binop.OpShl,haxe.macro.Binop.OpShr,haxe.macro.Binop.OpUShr,haxe.macro.Binop.OpMod,haxe.macro.Binop.OpInterval,haxe.macro.Binop.OpArrow];
haxe.macro.Unop = $hxClasses["haxe.macro.Unop"] = { __ename__ : ["haxe","macro","Unop"], __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe.macro.Unop.OpIncrement = ["OpIncrement",0];
haxe.macro.Unop.OpIncrement.toString = $estr;
haxe.macro.Unop.OpIncrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpDecrement = ["OpDecrement",1];
haxe.macro.Unop.OpDecrement.toString = $estr;
haxe.macro.Unop.OpDecrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNot = ["OpNot",2];
haxe.macro.Unop.OpNot.toString = $estr;
haxe.macro.Unop.OpNot.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNeg = ["OpNeg",3];
haxe.macro.Unop.OpNeg.toString = $estr;
haxe.macro.Unop.OpNeg.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNegBits = ["OpNegBits",4];
haxe.macro.Unop.OpNegBits.toString = $estr;
haxe.macro.Unop.OpNegBits.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.__empty_constructs__ = [haxe.macro.Unop.OpIncrement,haxe.macro.Unop.OpDecrement,haxe.macro.Unop.OpNot,haxe.macro.Unop.OpNeg,haxe.macro.Unop.OpNegBits];
haxe.macro.ExprDef = $hxClasses["haxe.macro.ExprDef"] = { __ename__ : ["haxe","macro","ExprDef"], __constructs__ : ["EConst","EArray","EBinop","EField","EParenthesis","EObjectDecl","EArrayDecl","ECall","ENew","EUnop","EVars","EFunction","EBlock","EFor","EIn","EIf","EWhile","ESwitch","ETry","EReturn","EBreak","EContinue","EUntyped","EThrow","ECast","EDisplay","EDisplayNew","ETernary","ECheckType","EMeta"] };
haxe.macro.ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArray = function(e1,e2) { var $x = ["EArray",1,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",2,op,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EField = function(e,field) { var $x = ["EField",3,e,field]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EParenthesis = function(e) { var $x = ["EParenthesis",4,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EObjectDecl = function(fields) { var $x = ["EObjectDecl",5,fields]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EArrayDecl = function(values) { var $x = ["EArrayDecl",6,values]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECall = function(e,params) { var $x = ["ECall",7,e,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ENew = function(t,params) { var $x = ["ENew",8,t,params]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EUnop = function(op,postFix,e) { var $x = ["EUnop",9,op,postFix,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EVars = function(vars) { var $x = ["EVars",10,vars]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFunction = function(name,f) { var $x = ["EFunction",11,name,f]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBlock = function(exprs) { var $x = ["EBlock",12,exprs]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EFor = function(it,expr) { var $x = ["EFor",13,it,expr]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIn = function(e1,e2) { var $x = ["EIn",14,e1,e2]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EIf = function(econd,eif,eelse) { var $x = ["EIf",15,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EWhile = function(econd,e,normalWhile) { var $x = ["EWhile",16,econd,e,normalWhile]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ESwitch = function(e,cases,edef) { var $x = ["ESwitch",17,e,cases,edef]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETry = function(e,catches) { var $x = ["ETry",18,e,catches]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EReturn = function(e) { var $x = ["EReturn",19,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EBreak = ["EBreak",20];
haxe.macro.ExprDef.EBreak.toString = $estr;
haxe.macro.ExprDef.EBreak.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EContinue = ["EContinue",21];
haxe.macro.ExprDef.EContinue.toString = $estr;
haxe.macro.ExprDef.EContinue.__enum__ = haxe.macro.ExprDef;
haxe.macro.ExprDef.EUntyped = function(e) { var $x = ["EUntyped",22,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EThrow = function(e) { var $x = ["EThrow",23,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECast = function(e,t) { var $x = ["ECast",24,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplay = function(e,isCall) { var $x = ["EDisplay",25,e,isCall]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EDisplayNew = function(t) { var $x = ["EDisplayNew",26,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ETernary = function(econd,eif,eelse) { var $x = ["ETernary",27,econd,eif,eelse]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.ECheckType = function(e,t) { var $x = ["ECheckType",28,e,t]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.EMeta = function(s,e) { var $x = ["EMeta",29,s,e]; $x.__enum__ = haxe.macro.ExprDef; $x.toString = $estr; return $x; };
haxe.macro.ExprDef.__empty_constructs__ = [haxe.macro.ExprDef.EBreak,haxe.macro.ExprDef.EContinue];
haxe.macro.ComplexType = $hxClasses["haxe.macro.ComplexType"] = { __ename__ : ["haxe","macro","ComplexType"], __constructs__ : ["TPath","TFunction","TAnonymous","TParent","TExtend","TOptional"] };
haxe.macro.ComplexType.TPath = function(p) { var $x = ["TPath",0,p]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TFunction = function(args,ret) { var $x = ["TFunction",1,args,ret]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TAnonymous = function(fields) { var $x = ["TAnonymous",2,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TParent = function(t) { var $x = ["TParent",3,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TExtend = function(p,fields) { var $x = ["TExtend",4,p,fields]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.TOptional = function(t) { var $x = ["TOptional",5,t]; $x.__enum__ = haxe.macro.ComplexType; $x.toString = $estr; return $x; };
haxe.macro.ComplexType.__empty_constructs__ = [];
haxe.remoting = {};
haxe.remoting.Context = function() {
	this.objects = new haxe.ds.StringMap();
};
$hxClasses["haxe.remoting.Context"] = haxe.remoting.Context;
haxe.remoting.Context.__name__ = ["haxe","remoting","Context"];
haxe.remoting.Context.prototype = {
	objects: null
	,addObject: function(name,obj,recursive) {
		this.objects.set(name,{ obj : obj, rec : recursive});
	}
	,call: function(path,params) {
		if(path.length < 2) throw "Invalid path '" + path.join(".") + "'";
		var inf = this.objects.get(path[0]);
		if(inf == null) throw "No such object " + path[0];
		var o = inf.obj;
		var m = Reflect.field(o,path[1]);
		if(path.length > 2) {
			if(!inf.rec) throw "Can't access " + path.join(".");
			var _g1 = 2;
			var _g = path.length;
			while(_g1 < _g) {
				var i = _g1++;
				o = m;
				m = Reflect.field(o,path[i]);
			}
		}
		if(!Reflect.isFunction(m)) throw "No such method " + path.join(".");
		return m.apply(o,params);
	}
	,__class__: haxe.remoting.Context
};
haxe.remoting.RemotingError = $hxClasses["haxe.remoting.RemotingError"] = { __ename__ : ["haxe","remoting","RemotingError"], __constructs__ : ["HttpError","ServerSideException","ClientCallbackException","UnserializeFailed","NoRemotingResult","ApiFailure","UnknownException"] };
haxe.remoting.RemotingError.HttpError = function(remotingCallString,responseCode,responseData) { var $x = ["HttpError",0,remotingCallString,responseCode,responseData]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.ServerSideException = function(remotingCallString,e,stack) { var $x = ["ServerSideException",1,remotingCallString,e,stack]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.ClientCallbackException = function(remotingCallString,e) { var $x = ["ClientCallbackException",2,remotingCallString,e]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.UnserializeFailed = function(remotingCallString,troubleLine,err) { var $x = ["UnserializeFailed",3,remotingCallString,troubleLine,err]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.NoRemotingResult = function(remotingCallString,responseData) { var $x = ["NoRemotingResult",4,remotingCallString,responseData]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.ApiFailure = function(remotingCallString,data) { var $x = ["ApiFailure",5,remotingCallString,data]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.UnknownException = function(e) { var $x = ["UnknownException",6,e]; $x.__enum__ = haxe.remoting.RemotingError; $x.toString = $estr; return $x; };
haxe.remoting.RemotingError.__empty_constructs__ = [];
haxe.remoting.RemotingUtil = function() { };
$hxClasses["haxe.remoting.RemotingUtil"] = haxe.remoting.RemotingUtil;
haxe.remoting.RemotingUtil.__name__ = ["haxe","remoting","RemotingUtil"];
haxe.remoting.RemotingUtil.processResponse = function(response,onResult,onError,remotingCallString) {
	var ret = null;
	var stack = null;
	var hxrFound = false;
	var errors = [];
	var _g = 0;
	var _g1 = response.split("\n");
	while(_g < _g1.length) {
		var line = _g1[_g];
		++_g;
		if(line == "") continue;
		try {
			var _g2 = HxOverrides.substr(line,0,3);
			switch(_g2) {
			case "hxr":
				var s = new haxe.Unserializer(HxOverrides.substr(line,3,null));
				try {
					ret = s.unserialize();
				} catch( e ) {
					throw haxe.remoting.RemotingError.UnserializeFailed(remotingCallString,HxOverrides.substr(line,3,null),"" + Std.string(e));
				}
				hxrFound = true;
				break;
			case "hxt":
				var s1 = new haxe.Unserializer(HxOverrides.substr(line,3,null));
				var m;
				try {
					m = s1.unserialize();
				} catch( e1 ) {
					throw haxe.remoting.RemotingError.UnserializeFailed(remotingCallString,HxOverrides.substr(line,3,null),"" + Std.string(e1));
				}
				var extras;
				if(m.pos != null && m.pos.customParams != null) extras = " " + m.pos.customParams.join(" "); else extras = "";
				var msg = "[R]" + m.pos.className + "." + m.pos.methodName + "(" + m.pos.lineNumber + "): " + Std.string(m.msg) + extras;
				var c = window.console;
				var _g3 = m.type;
				switch(_g3[1]) {
				case 0:
					c.log(msg);
					break;
				case 1:
					c.info(msg);
					break;
				case 2:
					c.warn(msg);
					break;
				case 3:
					c.error(msg);
					break;
				}
				break;
			case "hxs":
				var s2 = new haxe.Unserializer(HxOverrides.substr(line,3,null));
				try {
					stack = s2.unserialize();
				} catch( e2 ) {
					throw haxe.remoting.RemotingError.UnserializeFailed(remotingCallString,HxOverrides.substr(line,3,null),"" + Std.string(e2));
				}
				break;
			case "hxe":
				var s3 = new haxe.Unserializer(HxOverrides.substr(line,3,null));
				try {
					ret = s3.unserialize();
				} catch( e3 ) {
					throw haxe.remoting.RemotingError.ServerSideException(remotingCallString,e3,stack);
				}
				break;
			default:
				throw haxe.remoting.RemotingError.UnserializeFailed(remotingCallString,line,"Invalid line in response");
			}
		} catch( err ) {
			errors.push(err);
		}
	}
	if(errors.length == 0) {
		if(false == hxrFound) throw haxe.remoting.RemotingError.NoRemotingResult(remotingCallString,response);
		try {
			onResult(ret);
		} catch( e4 ) {
			onError(haxe.remoting.RemotingError.ClientCallbackException(remotingCallString,e4));
		}
	} else {
		var _g4 = 0;
		while(_g4 < errors.length) {
			var err1 = errors[_g4];
			++_g4;
			onError(err1);
		}
	}
};
haxe.remoting.RemotingUtil.wrapErrorHandler = function(errorHandler) {
	return function(e) {
		if(js.Boot.__instanceof(e,haxe.remoting.RemotingError)) errorHandler(e); else errorHandler(haxe.remoting.RemotingError.UnknownException(e));
	};
};
haxe.rtti = {};
haxe.rtti.Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe.rtti.Meta;
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.obj == null) return { }; else return meta.obj;
};
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	if(meta == null || meta.fields == null) return { }; else return meta.fields;
};
haxe.web = {};
haxe.web.MatchRule = $hxClasses["haxe.web.MatchRule"] = { __ename__ : ["haxe","web","MatchRule"], __constructs__ : ["MRInt","MRBool","MRFloat","MRString","MREnum","MRDispatch","MRSpod","MROpt"] };
haxe.web.MatchRule.MRInt = ["MRInt",0];
haxe.web.MatchRule.MRInt.toString = $estr;
haxe.web.MatchRule.MRInt.__enum__ = haxe.web.MatchRule;
haxe.web.MatchRule.MRBool = ["MRBool",1];
haxe.web.MatchRule.MRBool.toString = $estr;
haxe.web.MatchRule.MRBool.__enum__ = haxe.web.MatchRule;
haxe.web.MatchRule.MRFloat = ["MRFloat",2];
haxe.web.MatchRule.MRFloat.toString = $estr;
haxe.web.MatchRule.MRFloat.__enum__ = haxe.web.MatchRule;
haxe.web.MatchRule.MRString = ["MRString",3];
haxe.web.MatchRule.MRString.toString = $estr;
haxe.web.MatchRule.MRString.__enum__ = haxe.web.MatchRule;
haxe.web.MatchRule.MREnum = function(e) { var $x = ["MREnum",4,e]; $x.__enum__ = haxe.web.MatchRule; $x.toString = $estr; return $x; };
haxe.web.MatchRule.MRDispatch = ["MRDispatch",5];
haxe.web.MatchRule.MRDispatch.toString = $estr;
haxe.web.MatchRule.MRDispatch.__enum__ = haxe.web.MatchRule;
haxe.web.MatchRule.MRSpod = function(c,lock) { var $x = ["MRSpod",6,c,lock]; $x.__enum__ = haxe.web.MatchRule; $x.toString = $estr; return $x; };
haxe.web.MatchRule.MROpt = function(r) { var $x = ["MROpt",7,r]; $x.__enum__ = haxe.web.MatchRule; $x.toString = $estr; return $x; };
haxe.web.MatchRule.__empty_constructs__ = [haxe.web.MatchRule.MRInt,haxe.web.MatchRule.MRBool,haxe.web.MatchRule.MRFloat,haxe.web.MatchRule.MRString,haxe.web.MatchRule.MRDispatch];
haxe.web.DispatchRule = $hxClasses["haxe.web.DispatchRule"] = { __ename__ : ["haxe","web","DispatchRule"], __constructs__ : ["DRMatch","DRMult","DRArgs","DRMeta"] };
haxe.web.DispatchRule.DRMatch = function(r) { var $x = ["DRMatch",0,r]; $x.__enum__ = haxe.web.DispatchRule; $x.toString = $estr; return $x; };
haxe.web.DispatchRule.DRMult = function(r) { var $x = ["DRMult",1,r]; $x.__enum__ = haxe.web.DispatchRule; $x.toString = $estr; return $x; };
haxe.web.DispatchRule.DRArgs = function(r,args,opt) { var $x = ["DRArgs",2,r,args,opt]; $x.__enum__ = haxe.web.DispatchRule; $x.toString = $estr; return $x; };
haxe.web.DispatchRule.DRMeta = function(r) { var $x = ["DRMeta",3,r]; $x.__enum__ = haxe.web.DispatchRule; $x.toString = $estr; return $x; };
haxe.web.DispatchRule.__empty_constructs__ = [];
haxe.web.DispatchError = $hxClasses["haxe.web.DispatchError"] = { __ename__ : ["haxe","web","DispatchError"], __constructs__ : ["DENotFound","DEInvalidValue","DEMissing","DEMissingParam","DETooManyValues"] };
haxe.web.DispatchError.DENotFound = function(part) { var $x = ["DENotFound",0,part]; $x.__enum__ = haxe.web.DispatchError; $x.toString = $estr; return $x; };
haxe.web.DispatchError.DEInvalidValue = ["DEInvalidValue",1];
haxe.web.DispatchError.DEInvalidValue.toString = $estr;
haxe.web.DispatchError.DEInvalidValue.__enum__ = haxe.web.DispatchError;
haxe.web.DispatchError.DEMissing = ["DEMissing",2];
haxe.web.DispatchError.DEMissing.toString = $estr;
haxe.web.DispatchError.DEMissing.__enum__ = haxe.web.DispatchError;
haxe.web.DispatchError.DEMissingParam = function(p) { var $x = ["DEMissingParam",3,p]; $x.__enum__ = haxe.web.DispatchError; $x.toString = $estr; return $x; };
haxe.web.DispatchError.DETooManyValues = ["DETooManyValues",4];
haxe.web.DispatchError.DETooManyValues.toString = $estr;
haxe.web.DispatchError.DETooManyValues.__enum__ = haxe.web.DispatchError;
haxe.web.DispatchError.__empty_constructs__ = [haxe.web.DispatchError.DEInvalidValue,haxe.web.DispatchError.DEMissing,haxe.web.DispatchError.DETooManyValues];
haxe.web.Redirect = function() { };
$hxClasses["haxe.web.Redirect"] = haxe.web.Redirect;
haxe.web.Redirect.__name__ = ["haxe","web","Redirect"];
haxe.web.Dispatch = function(url,params) {
	this.parts = url.split("/");
	if(this.parts[0] == "") this.parts.shift();
	this.params = params;
};
$hxClasses["haxe.web.Dispatch"] = haxe.web.Dispatch;
haxe.web.Dispatch.__name__ = ["haxe","web","Dispatch"];
haxe.web.Dispatch.prototype = {
	parts: null
	,params: null
	,name: null
	,cfg: null
	,subDispatch: null
	,onMeta: function(v,args) {
	}
	,match: function(v,r,opt) {
		switch(r[1]) {
		case 0:
			if(v == null) throw haxe.web.DispatchError.DEMissing;
			if(opt && v == "") return null;
			var v1 = Std.parseInt(v);
			if(v1 == null) throw haxe.web.DispatchError.DEInvalidValue;
			return v1;
		case 2:
			if(v == null) throw haxe.web.DispatchError.DEMissing;
			if(opt && v == "") return null;
			var v2 = Std.parseFloat(v);
			if(Math.isNaN(v2)) throw haxe.web.DispatchError.DEInvalidValue;
			return v2;
		case 3:
			if(v == null) throw haxe.web.DispatchError.DEMissing;
			return v;
		case 1:
			return v != null && v != "0" && v != "false" && v != "null";
		case 4:
			var e = r[2];
			if(v == null) throw haxe.web.DispatchError.DEMissing;
			if(opt && v == "") return null;
			if(v == "") throw haxe.web.DispatchError.DEMissing;
			var en = Type.resolveEnum(e);
			if(en == null) throw "assert";
			var ev;
			if(HxOverrides.cca(v,0) >= 48 && HxOverrides.cca(v,0) <= 57) ev = Type.createEnumIndex(en,Std.parseInt(v)); else ev = Type.createEnum(en,v);
			return ev;
		case 5:
			if(v != null) this.parts.unshift(v);
			this.subDispatch = true;
			return this;
		case 6:
			var lock = r[3];
			var c = r[2];
			if(v == null) throw haxe.web.DispatchError.DEMissing;
			var v3 = Std.parseInt(v);
			if(v3 == null) throw haxe.web.DispatchError.DEInvalidValue;
			var cl = Type.resolveClass(c);
			if(cl == null) throw "assert";
			var o;
			o = cl.manager.unsafeGet(v3,lock);
			if(o == null) throw haxe.web.DispatchError.DEInvalidValue;
			return o;
		case 7:
			var r1 = r[2];
			if(v == null) return null;
			return this.match(v,r1,true);
		}
	}
	,checkParams: function(params,opt) {
		var po = { };
		var _g = 0;
		while(_g < params.length) {
			var p = params[_g];
			++_g;
			var v = this.params.get(p.name);
			if(v == null) {
				if(p.opt) continue;
				if(opt) return null;
				throw haxe.web.DispatchError.DEMissingParam(p.name);
			}
			Reflect.setField(po,p.name,this.match(v,p.rule,p.opt));
		}
		return po;
	}
	,loop: function(args,r) {
		switch(r[1]) {
		case 2:
			var opt = r[4];
			var params = r[3];
			var r1 = r[2];
			this.loop(args,r1);
			args.push(this.checkParams(params,opt));
			break;
		case 0:
			var r2 = r[2];
			args.push(this.match(this.parts.shift(),r2,false));
			break;
		case 1:
			var rl = r[2];
			var _g = 0;
			while(_g < rl.length) {
				var r3 = rl[_g];
				++_g;
				args.push(this.match(this.parts.shift(),r3,false));
			}
			break;
		case 3:
			var r4 = r[2];
			this.loop(args,r4);
			var c = Type.getClass(this.cfg.obj);
			var m;
			do {
				if(c == null) throw "assert";
				m = Reflect.field(haxe.rtti.Meta.getFields(c),this.name);
				c = Type.getSuperClass(c);
			} while(m == null);
			var _g1 = 0;
			var _g11 = Reflect.fields(m);
			while(_g1 < _g11.length) {
				var mv = _g11[_g1];
				++_g1;
				this.onMeta(mv,Reflect.field(m,mv));
			}
			break;
		}
	}
	,__class__: haxe.web.Dispatch
};
haxe.xml = {};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = StringTools.htmlUnescape(HxOverrides.substr(str,start + 1,p - start - 1));
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
haxe.xml.Parser.isValidChar = function(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45;
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
var minject = {};
minject.ClassMap = function() {
	this.map = new haxe.ds.StringMap();
};
$hxClasses["minject.ClassMap"] = minject.ClassMap;
minject.ClassMap.__name__ = ["minject","ClassMap"];
minject.ClassMap.__interfaces__ = [IMap];
minject.ClassMap.prototype = {
	map: null
	,get: function(k) {
		var key = Type.getClassName(k);
		return this.map.get(key);
	}
	,set: function(k,v) {
		var key = Type.getClassName(k);
		this.map.set(key,v);
	}
	,exists: function(k) {
		var key = Type.getClassName(k);
		return this.map.exists(key);
	}
	,remove: function(k) {
		var key = Type.getClassName(k);
		return this.map.remove(key);
	}
	,keys: function() {
		var _this;
		var _g = [];
		var $it0 = this.map.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			_g.push(Type.resolveClass(k));
		}
		_this = _g;
		return HxOverrides.iter(_this);
	}
	,iterator: function() {
		return this.map.iterator();
	}
	,toString: function() {
		return this.map.toString();
	}
	,getKey: function(k) {
		return Type.getClassName(k);
	}
	,__class__: minject.ClassMap
};
minject.InjectionConfig = function(request,injectionName) {
	this.request = request;
	this.injectionName = injectionName;
};
$hxClasses["minject.InjectionConfig"] = minject.InjectionConfig;
minject.InjectionConfig.__name__ = ["minject","InjectionConfig"];
minject.InjectionConfig.prototype = {
	request: null
	,injectionName: null
	,injector: null
	,result: null
	,getResponse: function(injector) {
		if(this.injector != null) injector = this.injector;
		if(this.result != null) return this.result.getResponse(injector);
		var parentConfig = injector.getAncestorMapping(this.request,this.injectionName);
		if(parentConfig != null) return parentConfig.getResponse(injector);
		return null;
	}
	,hasResponse: function(injector) {
		return this.result != null;
	}
	,hasOwnResponse: function() {
		return this.result != null;
	}
	,setResult: function(result) {
		this.result = result;
	}
	,setInjector: function(injector) {
		this.injector = injector;
	}
	,toString: function() {
		var named;
		if(this.injectionName != null && this.injectionName != "") named = " named \"" + this.injectionName + "\" and"; else named = "";
		return "rule: [" + Type.getClassName(this.request) + ("]" + named + " mapped to [" + Std.string(this.result) + "]");
	}
	,__class__: minject.InjectionConfig
};
minject.Injector = function() {
	this.injectionConfigs = new haxe.ds.StringMap();
	this.injecteeDescriptions = new minject.ClassMap();
	this.attendedToInjectees = new minject.InjecteeSet();
	this.children = [];
};
$hxClasses["minject.Injector"] = minject.Injector;
minject.Injector.__name__ = ["minject","Injector"];
minject.Injector.prototype = {
	attendedToInjectees: null
	,parentInjector: null
	,children: null
	,injectionConfigs: null
	,injecteeDescriptions: null
	,mapValue: function(whenAskedFor,useValue,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectValueResult(useValue));
		return config;
	}
	,mapClass: function(whenAskedFor,instantiateClass,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectClassResult(instantiateClass));
		return config;
	}
	,mapSingleton: function(whenAskedFor,named) {
		if(named == null) named = "";
		return this.mapSingletonOf(whenAskedFor,whenAskedFor,named);
	}
	,mapSingletonOf: function(whenAskedFor,useSingletonOf,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectSingletonResult(useSingletonOf));
		return config;
	}
	,mapRule: function(whenAskedFor,useRule,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject.result.InjectOtherRuleResult(useRule));
		return useRule;
	}
	,getMapping: function(forClass,named) {
		if(named == null) named = "";
		var requestName = minject.RequestHasher.resolveRequest(forClass,named);
		var config = new minject.InjectionConfig(forClass,named);
		this.setConfig(requestName,config);
		return config;
	}
	,setConfig: function(requestName,v) {
		this.injectionConfigs.set(requestName,v);
		var _g1 = 0;
		var _g = this.children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var child = this.children[i];
			if(!child.hasConfig(requestName)) child.setConfig(requestName,v);
		}
	}
	,getConfig: function(requestName) {
		return this.injectionConfigs.get(requestName);
	}
	,hasConfig: function(requestName) {
		return this.injectionConfigs.exists(requestName);
	}
	,injectInto: function(target) {
		if(this.attendedToInjectees.contains(target)) return;
		this.attendedToInjectees.add(target);
		var targetClass = Type.getClass(target);
		var injecteeDescription = null;
		if(this.injecteeDescriptions.exists(targetClass)) injecteeDescription = this.injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
		if(injecteeDescription == null) return;
		var injectionPoints = injecteeDescription.injectionPoints;
		var length = injectionPoints.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var injectionPoint = injectionPoints[i];
			injectionPoint.applyInjection(target,this);
		}
	}
	,construct: function(theClass) {
		var injecteeDescription;
		if(this.injecteeDescriptions.exists(theClass)) injecteeDescription = this.injecteeDescriptions.get(theClass); else injecteeDescription = this.getInjectionPoints(theClass);
		var injectionPoint = injecteeDescription.ctor;
		return injectionPoint.applyInjection(theClass,this);
	}
	,instantiate: function(theClass) {
		var instance = this.construct(theClass);
		this.injectInto(instance);
		return instance;
	}
	,unmap: function(theClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(theClass,named);
		if(mapping == null) throw "Error while removing an injector mapping: No mapping defined for class " + minject.RequestHasher.getClassName(theClass) + ", named \"" + named + "\"";
		mapping.setResult(null);
	}
	,hasMapping: function(forClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(forClass,named);
		if(mapping == null) return false;
		return mapping.hasResponse(this);
	}
	,getInstance: function(ofClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(ofClass,named);
		if(mapping == null || !mapping.hasResponse(this)) throw "Error while getting mapping response: No mapping defined for class " + minject.RequestHasher.getClassName(ofClass) + ", named \"" + named + "\"";
		return mapping.getResponse(this);
	}
	,createChildInjector: function() {
		var child = new minject.Injector();
		child.set_parentInjector(this);
		return child;
	}
	,getAncestorMapping: function(forClass,named) {
		var parent = this.parentInjector;
		while(parent != null) {
			var parentConfig = parent.getConfigurationForRequest(forClass,named);
			if(parentConfig != null && parentConfig.hasOwnResponse()) return parentConfig;
			parent = parent.parentInjector;
		}
		return null;
	}
	,getInjectionPoints: function(forClass) {
		var typeMeta = haxe.rtti.Meta.getType(forClass);
		var fieldsMeta = this.getFields(forClass);
		var ctorInjectionPoint = null;
		var injectionPoints = [];
		var postConstructMethodPoints = [];
		var _g = 0;
		var _g1 = Reflect.fields(fieldsMeta);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var fieldMeta = Reflect.field(fieldsMeta,field);
			var inject = Object.prototype.hasOwnProperty.call(fieldMeta,"inject");
			var post = Object.prototype.hasOwnProperty.call(fieldMeta,"post");
			var type = Reflect.field(fieldMeta,"type");
			var args = Reflect.field(fieldMeta,"args");
			if(field == "_") {
				if(args.length > 0) ctorInjectionPoint = new minject.point.ConstructorInjectionPoint(fieldMeta.args);
			} else if(Object.prototype.hasOwnProperty.call(fieldMeta,"args")) {
				if(inject) {
					var point = new minject.point.MethodInjectionPoint(field,fieldMeta.args);
					injectionPoints.push(point);
				} else if(post) {
					var order;
					if(fieldMeta.post == null) order = 0; else order = fieldMeta.post[0];
					var point1 = new minject.point.PostConstructInjectionPoint(field,order);
					postConstructMethodPoints.push(point1);
				}
			} else if(type != null) {
				var name;
				if(fieldMeta.inject == null) name = null; else name = fieldMeta.inject[0];
				var typeString = fieldMeta.type[0];
				var klass = Type.resolveClass(typeString);
				var point2 = new minject.point.PropertyInjectionPoint(field,klass,name);
				injectionPoints.push(point2);
			}
		}
		if(postConstructMethodPoints.length > 0) {
			postConstructMethodPoints.sort(function(a,b) {
				return a.order - b.order;
			});
			var _g2 = 0;
			while(_g2 < postConstructMethodPoints.length) {
				var point3 = postConstructMethodPoints[_g2];
				++_g2;
				injectionPoints.push(point3);
			}
		}
		if(ctorInjectionPoint == null) ctorInjectionPoint = new minject.point.NoParamsConstructorInjectionPoint();
		var injecteeDescription = new minject.InjecteeDescription(ctorInjectionPoint,injectionPoints);
		this.injecteeDescriptions.set(forClass,injecteeDescription);
		return injecteeDescription;
	}
	,getConfigurationForRequest: function(forClass,named) {
		var requestName = minject.RequestHasher.resolveRequest(forClass,named);
		return this.injectionConfigs.get(requestName);
	}
	,set_parentInjector: function(value) {
		if(this.parentInjector != null && value == null) this.attendedToInjectees = new minject.InjecteeSet();
		this.parentInjector = value;
		this.parentInjector.children.push(this);
		var $it0 = this.parentInjector.injectionConfigs.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			if(!this.injectionConfigs.exists(key)) this.setConfig(key,this.parentInjector.injectionConfigs.get(key));
		}
		if(this.parentInjector != null) this.attendedToInjectees = this.parentInjector.attendedToInjectees;
		return this.parentInjector;
	}
	,getFields: function(type) {
		var meta = { };
		while(type != null) {
			var typeMeta = haxe.rtti.Meta.getFields(type);
			var _g = 0;
			var _g1 = Reflect.fields(typeMeta);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				Reflect.setField(meta,field,Reflect.field(typeMeta,field));
			}
			type = Type.getSuperClass(type);
		}
		return meta;
	}
	,__class__: minject.Injector
	,__properties__: {set_parentInjector:"set_parentInjector"}
};
minject.InjecteeSet = function() {
};
$hxClasses["minject.InjecteeSet"] = minject.InjecteeSet;
minject.InjecteeSet.__name__ = ["minject","InjecteeSet"];
minject.InjecteeSet.prototype = {
	add: function(value) {
		value.__injected__ = true;
	}
	,contains: function(value) {
		return value.__injected__ == true;
	}
	,remove: function(value) {
		Reflect.deleteField(value,"__injected__");
	}
	,'delete': function(value) {
		this.remove(value);
	}
	,iterator: function() {
		return HxOverrides.iter([]);
	}
	,__class__: minject.InjecteeSet
};
minject.InjecteeDescription = function(ctor,injectionPoints) {
	this.ctor = ctor;
	this.injectionPoints = injectionPoints;
};
$hxClasses["minject.InjecteeDescription"] = minject.InjecteeDescription;
minject.InjecteeDescription.__name__ = ["minject","InjecteeDescription"];
minject.InjecteeDescription.prototype = {
	ctor: null
	,injectionPoints: null
	,__class__: minject.InjecteeDescription
};
minject.RequestHasher = function() { };
$hxClasses["minject.RequestHasher"] = minject.RequestHasher;
minject.RequestHasher.__name__ = ["minject","RequestHasher"];
minject.RequestHasher.resolveRequest = function(forClass,named) {
	if(named == null) named = "";
	return "" + minject.RequestHasher.getClassName(forClass) + "#" + named;
};
minject.RequestHasher.getClassName = function(forClass) {
	if(forClass == null) return "Dynamic"; else return Type.getClassName(forClass);
};
minject.point = {};
minject.point.InjectionPoint = function() { };
$hxClasses["minject.point.InjectionPoint"] = minject.point.InjectionPoint;
minject.point.InjectionPoint.__name__ = ["minject","point","InjectionPoint"];
minject.point.InjectionPoint.prototype = {
	applyInjection: null
	,__class__: minject.point.InjectionPoint
};
minject.point.MethodInjectionPoint = function(name,args) {
	this.name = name;
	this.args = args;
	this.makeRequestNames();
};
$hxClasses["minject.point.MethodInjectionPoint"] = minject.point.MethodInjectionPoint;
minject.point.MethodInjectionPoint.__name__ = ["minject","point","MethodInjectionPoint"];
minject.point.MethodInjectionPoint.__interfaces__ = [minject.point.InjectionPoint];
minject.point.MethodInjectionPoint.prototype = {
	name: null
	,args: null
	,requestNames: null
	,makeRequestNames: function() {
		this.requestNames = [];
		var _g1 = 0;
		var _g = this.args.length;
		while(_g1 < _g) {
			var i = _g1++;
			var arg = this.args[i];
			var requestName = minject.RequestHasher.resolveRequest(Type.resolveClass(arg.type),arg.name);
			this.requestNames.push(requestName);
		}
	}
	,applyInjection: function(target,injector) {
		Reflect.callMethod(target,Reflect.field(target,this.name),this.gatherArgs(target,injector));
		return target;
	}
	,gatherArgs: function(target,injector) {
		var values = [];
		var _g1 = 0;
		var _g = this.args.length;
		while(_g1 < _g) {
			var i = _g1++;
			var arg = this.args[i];
			var name;
			if(arg.name == null) name = ""; else name = arg.name;
			var config = injector.getConfig(this.requestNames[i]);
			if(arg.opt && config == null) {
				values.push(null);
				continue;
			}
			var injection = config.getResponse(injector);
			values.push(injection);
		}
		return values;
	}
	,__class__: minject.point.MethodInjectionPoint
};
minject.point.ConstructorInjectionPoint = function(args) {
	minject.point.MethodInjectionPoint.call(this,"new",args);
};
$hxClasses["minject.point.ConstructorInjectionPoint"] = minject.point.ConstructorInjectionPoint;
minject.point.ConstructorInjectionPoint.__name__ = ["minject","point","ConstructorInjectionPoint"];
minject.point.ConstructorInjectionPoint.__super__ = minject.point.MethodInjectionPoint;
minject.point.ConstructorInjectionPoint.prototype = $extend(minject.point.MethodInjectionPoint.prototype,{
	applyInjection: function(target,injector) {
		return Type.createInstance(target,this.gatherArgs(target,injector));
	}
	,__class__: minject.point.ConstructorInjectionPoint
});
minject.point.NoParamsConstructorInjectionPoint = function() {
};
$hxClasses["minject.point.NoParamsConstructorInjectionPoint"] = minject.point.NoParamsConstructorInjectionPoint;
minject.point.NoParamsConstructorInjectionPoint.__name__ = ["minject","point","NoParamsConstructorInjectionPoint"];
minject.point.NoParamsConstructorInjectionPoint.__interfaces__ = [minject.point.InjectionPoint];
minject.point.NoParamsConstructorInjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		return Type.createInstance(target,[]);
	}
	,__class__: minject.point.NoParamsConstructorInjectionPoint
};
minject.point.PostConstructInjectionPoint = function(name,order) {
	if(order == null) order = 0;
	this.name = name;
	this.order = order;
};
$hxClasses["minject.point.PostConstructInjectionPoint"] = minject.point.PostConstructInjectionPoint;
minject.point.PostConstructInjectionPoint.__name__ = ["minject","point","PostConstructInjectionPoint"];
minject.point.PostConstructInjectionPoint.__interfaces__ = [minject.point.InjectionPoint];
minject.point.PostConstructInjectionPoint.prototype = {
	name: null
	,order: null
	,applyInjection: function(target,injector) {
		Reflect.callMethod(target,Reflect.field(target,this.name),[]);
		return target;
	}
	,__class__: minject.point.PostConstructInjectionPoint
};
minject.point.PropertyInjectionPoint = function(name,type,injectionName) {
	this.name = name;
	this.type = type;
	this.injectionName = injectionName;
	this.requestName = minject.RequestHasher.resolveRequest(type,injectionName);
};
$hxClasses["minject.point.PropertyInjectionPoint"] = minject.point.PropertyInjectionPoint;
minject.point.PropertyInjectionPoint.__name__ = ["minject","point","PropertyInjectionPoint"];
minject.point.PropertyInjectionPoint.__interfaces__ = [minject.point.InjectionPoint];
minject.point.PropertyInjectionPoint.prototype = {
	name: null
	,type: null
	,injectionName: null
	,requestName: null
	,applyInjection: function(target,injector) {
		var config = injector.getConfig(this.requestName);
		Reflect.setProperty(target,this.name,config.getResponse(injector));
		return target;
	}
	,__class__: minject.point.PropertyInjectionPoint
};
minject.result = {};
minject.result.InjectionResult = function() {
};
$hxClasses["minject.result.InjectionResult"] = minject.result.InjectionResult;
minject.result.InjectionResult.__name__ = ["minject","result","InjectionResult"];
minject.result.InjectionResult.prototype = {
	getResponse: function(injector) {
		return null;
	}
	,toString: function() {
		return "";
	}
	,__class__: minject.result.InjectionResult
};
minject.result.InjectClassResult = function(responseType) {
	minject.result.InjectionResult.call(this);
	this.responseType = responseType;
};
$hxClasses["minject.result.InjectClassResult"] = minject.result.InjectClassResult;
minject.result.InjectClassResult.__name__ = ["minject","result","InjectClassResult"];
minject.result.InjectClassResult.__super__ = minject.result.InjectionResult;
minject.result.InjectClassResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	responseType: null
	,getResponse: function(injector) {
		return injector.instantiate(this.responseType);
	}
	,toString: function() {
		return "class " + Type.getClassName(this.responseType);
	}
	,__class__: minject.result.InjectClassResult
});
minject.result.InjectOtherRuleResult = function(rule) {
	minject.result.InjectionResult.call(this);
	this.rule = rule;
};
$hxClasses["minject.result.InjectOtherRuleResult"] = minject.result.InjectOtherRuleResult;
minject.result.InjectOtherRuleResult.__name__ = ["minject","result","InjectOtherRuleResult"];
minject.result.InjectOtherRuleResult.__super__ = minject.result.InjectionResult;
minject.result.InjectOtherRuleResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	rule: null
	,getResponse: function(injector) {
		return this.rule.getResponse(injector);
	}
	,toString: function() {
		return this.rule.toString();
	}
	,__class__: minject.result.InjectOtherRuleResult
});
minject.result.InjectSingletonResult = function(responseType) {
	minject.result.InjectionResult.call(this);
	this.responseType = responseType;
};
$hxClasses["minject.result.InjectSingletonResult"] = minject.result.InjectSingletonResult;
minject.result.InjectSingletonResult.__name__ = ["minject","result","InjectSingletonResult"];
minject.result.InjectSingletonResult.__super__ = minject.result.InjectionResult;
minject.result.InjectSingletonResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	responseType: null
	,response: null
	,getResponse: function(injector) {
		if(this.response == null) {
			this.response = this.createResponse(injector);
			injector.injectInto(this.response);
		}
		return this.response;
	}
	,createResponse: function(injector) {
		return injector.construct(this.responseType);
	}
	,toString: function() {
		return "singleton " + Type.getClassName(this.responseType);
	}
	,__class__: minject.result.InjectSingletonResult
});
minject.result.InjectValueResult = function(value) {
	minject.result.InjectionResult.call(this);
	this.value = value;
};
$hxClasses["minject.result.InjectValueResult"] = minject.result.InjectValueResult;
minject.result.InjectValueResult.__name__ = ["minject","result","InjectValueResult"];
minject.result.InjectValueResult.__super__ = minject.result.InjectionResult;
minject.result.InjectValueResult.prototype = $extend(minject.result.InjectionResult.prototype,{
	value: null
	,getResponse: function(injector) {
		return this.value;
	}
	,toString: function() {
		return "instance of " + Type.getClassName(Type.getClass(this.value));
	}
	,__class__: minject.result.InjectValueResult
});
var pushstate = {};
pushstate.PushState = function() { };
$hxClasses["pushstate.PushState"] = pushstate.PushState;
pushstate.PushState.__name__ = ["pushstate","PushState"];
pushstate.PushState.init = function(basePath) {
	if(basePath == null) basePath = "";
	pushstate.PushState.listeners = [];
	pushstate.PushState.preventers = [];
	pushstate.PushState.history = window.history;
	pushstate.PushState.basePath = basePath;
	dtx.Tools.ready(function() {
		pushstate.PushState.handleOnPopState(null);
		dtx.single.EventManagement.on(dtx.Tools.get_document(),"click","a[rel=pushstate]",function(e) {
			var link = e.target;
			while((link == null?"":link.nodeName.toLowerCase()) != "a" && dtx.single.Traversing.parent(link) != null) link = dtx.single.Traversing.parent(link);
			if((link == null?"":link.nodeName.toLowerCase()) == "a") {
				pushstate.PushState.push(dtx.single.ElementManipulation.attr(link,"href"));
				e.preventDefault();
			}
		});
		window.onpopstate = pushstate.PushState.handleOnPopState;
	});
};
pushstate.PushState.handleOnPopState = function(e) {
	var path = pushstate.PushState.stripURL(window.document.location.pathname);
	var state;
	if(e != null) state = e.state; else state = null;
	if(e != null) {
		var _g = 0;
		var _g1 = pushstate.PushState.preventers;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(!p(path,e.state)) {
				e.preventDefault();
				pushstate.PushState.history.replaceState(pushstate.PushState.currentState,"",pushstate.PushState.currentPath);
				return;
			}
		}
	}
	pushstate.PushState.currentPath = path;
	pushstate.PushState.currentState = state;
	pushstate.PushState.dispatch(path,state);
	return;
};
pushstate.PushState.stripURL = function(path) {
	if(HxOverrides.substr(path,0,pushstate.PushState.basePath.length) == pushstate.PushState.basePath) path = HxOverrides.substr(path,pushstate.PushState.basePath.length,null);
	return path;
};
pushstate.PushState.addEventListener = function(l,s) {
	if(l != null) pushstate.PushState.listeners.push(l); else if(s != null) {
		l = function(url,_) {
			return s(url);
		};
		pushstate.PushState.listeners.push(l);
	}
	return l;
};
pushstate.PushState.removeEventListener = function(l) {
	HxOverrides.remove(pushstate.PushState.listeners,l);
};
pushstate.PushState.clearEventListeners = function() {
	while(pushstate.PushState.listeners.length > 0) pushstate.PushState.listeners.pop();
};
pushstate.PushState.addPreventer = function(p,s) {
	if(p != null) pushstate.PushState.preventers.push(p); else if(s != null) {
		p = function(url,_) {
			return s(url);
		};
		pushstate.PushState.preventers.push(p);
	}
	return p;
};
pushstate.PushState.removePreventer = function(p) {
	HxOverrides.remove(pushstate.PushState.preventers,p);
};
pushstate.PushState.clearPreventers = function() {
	while(pushstate.PushState.preventers.length > 0) pushstate.PushState.preventers.pop();
};
pushstate.PushState.dispatch = function(url,state) {
	var _g = 0;
	var _g1 = pushstate.PushState.listeners;
	while(_g < _g1.length) {
		var l = _g1[_g];
		++_g;
		l(url,state);
	}
};
pushstate.PushState.push = function(url,state) {
	if(state == null) state = { };
	var _g = 0;
	var _g1 = pushstate.PushState.preventers;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(!p(url,state)) return false;
	}
	pushstate.PushState.history.pushState(state,"",url);
	pushstate.PushState.currentPath = url;
	pushstate.PushState.currentState = state;
	pushstate.PushState.dispatch(url,state);
	return true;
};
pushstate.PushState.replace = function(url,state) {
	if(state == null) state = Dynamic;
	var _g = 0;
	var _g1 = pushstate.PushState.preventers;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(!p(url,state)) return false;
	}
	pushstate.PushState.history.replaceState(state,"",url);
	pushstate.PushState.currentPath = url;
	pushstate.PushState.currentState = state;
	pushstate.PushState.dispatch(url,state);
	return true;
};
var thx = {};
thx.collection = {};
thx.collection.HashList = function() {
	this.length = 0;
	this.__keys = [];
	this.__hash = new haxe.ds.StringMap();
};
$hxClasses["thx.collection.HashList"] = thx.collection.HashList;
thx.collection.HashList.__name__ = ["thx","collection","HashList"];
thx.collection.HashList.prototype = {
	length: null
	,set: function(key,value) {
		if(!this.__hash.exists(key)) {
			this.__keys.push(key);
			this.length++;
		}
		this.__hash.set(key,value);
	}
	,setAt: function(index,key,value) {
		this.remove(key);
		this.__keys.splice(index,0,key);
		this.__hash.set(key,value);
		this.length++;
	}
	,get: function(key) {
		return this.__hash.get(key);
	}
	,getAt: function(index) {
		return this.__hash.get(this.__keys[index]);
	}
	,indexOf: function(key) {
		if(!this.__hash.exists(key)) return -1;
		var _g1 = 0;
		var _g = this.__keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__keys[i] == key) return i;
		}
		throw "this should never happen";
	}
	,exists: function(key) {
		return this.__hash.exists(key);
	}
	,remove: function(key) {
		var item = this.__hash.get(key);
		if(item == null) return null;
		this.__hash.remove(key);
		HxOverrides.remove(this.__keys,key);
		this.length--;
		return item;
	}
	,removeAt: function(index) {
		var key = this.__keys[index];
		if(key == null) return null;
		var item = this.__hash.get(key);
		this.__hash.remove(key);
		HxOverrides.remove(this.__keys,key);
		this.length--;
		return item;
	}
	,keyAt: function(index) {
		return this.__keys[index];
	}
	,keys: function() {
		return HxOverrides.iter(this.__keys);
	}
	,iterator: function() {
		var _this = this.array();
		return HxOverrides.iter(_this);
	}
	,clear: function() {
		this.__hash = new haxe.ds.StringMap();
		this.__keys = [];
		this.length = 0;
	}
	,array: function() {
		var values = [];
		var _g = 0;
		var _g1 = this.__keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			values.push(this.__hash.get(k));
		}
		return values;
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			if(i == null) s.b += "null"; else s.b += "" + i;
			s.b += " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__keys: null
	,__hash: null
	,__class__: thx.collection.HashList
};
thx.culture = {};
thx.culture.Info = function() { };
$hxClasses["thx.culture.Info"] = thx.culture.Info;
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype = {
	name: null
	,'native': null
	,english: null
	,iso2: null
	,iso3: null
	,pluralRule: null
	,toString: function() {
		return this["native"] + " (" + this.english + ")";
	}
	,__class__: thx.culture.Info
};
thx.culture.Culture = function() { };
$hxClasses["thx.culture.Culture"] = thx.culture.Culture;
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__properties__ = {set_defaultCulture:"set_defaultCulture",get_defaultCulture:"get_defaultCulture",get_cultures:"get_cultures"}
thx.culture.Culture.get_cultures = function() {
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new haxe.ds.StringMap();
	return thx.culture.Culture.cultures;
};
thx.culture.Culture.get = function(name) {
	var this1 = thx.culture.Culture.get_cultures();
	var key = name.toLowerCase();
	return this1.get(key);
};
thx.culture.Culture.names = function() {
	var this1 = thx.culture.Culture.get_cultures();
	return this1.keys();
};
thx.culture.Culture.exists = function(culture) {
	var this1 = thx.culture.Culture.get_cultures();
	var key = culture.toLowerCase();
	return this1.exists(key);
};
thx.culture.Culture.get_defaultCulture = function() {
	if(null == thx.culture.Culture._defaultCulture) return thx.cultures.EnUS.get_culture(); else return thx.culture.Culture._defaultCulture;
};
thx.culture.Culture.set_defaultCulture = function(culture) {
	return thx.culture.Culture._defaultCulture = culture;
};
thx.culture.Culture.add = function(culture) {
	if(null == thx.culture.Culture._defaultCulture) thx.culture.Culture._defaultCulture = culture;
	var name = culture.name.toLowerCase();
	if(!(function($this) {
		var $r;
		var this1 = thx.culture.Culture.get_cultures();
		$r = this1.exists(name);
		return $r;
	}(this))) {
		var this2 = thx.culture.Culture.get_cultures();
		this2.set(name,culture);
	}
};
thx.culture.Culture.loadAll = function() {
};
thx.culture.Culture.__super__ = thx.culture.Info;
thx.culture.Culture.prototype = $extend(thx.culture.Info.prototype,{
	language: null
	,date: null
	,englishCurrency: null
	,nativeCurrency: null
	,currencySymbol: null
	,currencyIso: null
	,englishRegion: null
	,nativeRegion: null
	,isMetric: null
	,digits: null
	,signNeg: null
	,signPos: null
	,symbolNaN: null
	,symbolPercent: null
	,symbolPermille: null
	,symbolNegInf: null
	,symbolPosInf: null
	,number: null
	,currency: null
	,percent: null
	,__class__: thx.culture.Culture
});
thx.culture.FormatDate = function() { };
$hxClasses["thx.culture.FormatDate"] = thx.culture.FormatDate;
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(date,pattern,culture,leadingspace) {
	if(leadingspace == null) leadingspace = true;
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			if(c == null) buf.b += "null"; else buf.b += "" + c;
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.add(info.abbrDays[date.getDay()]);
			break;
		case "A":
			buf.add(info.days[date.getDay()]);
			break;
		case "b":case "h":
			buf.add(info.abbrMonths[date.getMonth()]);
			break;
		case "B":
			buf.add(info.months[date.getMonth()]);
			break;
		case "c":
			buf.add(thx.culture.FormatDate.dateTime(date,culture));
			break;
		case "C":
			buf.add(thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture));
			break;
		case "d":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture));
			break;
		case "D":
			buf.add(thx.culture.FormatDate.format(date,"%m/%d/%y",culture));
			break;
		case "e":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture));
			break;
		case "f":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture));
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture));
			break;
		case "i":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture));
			break;
		case "I":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture));
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture));
			break;
		case "l":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture));
			break;
		case "m":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture));
			break;
		case "M":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture));
			break;
		case "n":
			buf.b += "\n";
			break;
		case "p":
			buf.add(date.getHours() > 11?info.pm:info.am);
			break;
		case "P":
			buf.add((date.getHours() > 11?info.pm:info.am).toLowerCase());
			break;
		case "q":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture));
			break;
		case "r":
			buf.add(thx.culture.FormatDate.format(date,"%I:%M:%S %p",culture));
			break;
		case "R":
			buf.add(thx.culture.FormatDate.format(date,"%H:%M",culture));
			break;
		case "s":
			buf.add("" + Std["int"](date.getTime() / 1000));
			break;
		case "S":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture));
			break;
		case "t":
			buf.b += "\t";
			break;
		case "T":
			buf.add(thx.culture.FormatDate.format(date,"%H:%M:%S",culture));
			break;
		case "u":
			var d = date.getDay();
			buf.add(thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture));
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.add(thx.culture.FormatNumber.digits("" + date.getDay(),culture));
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.add(thx.culture.FormatDate.date(date,culture));
			break;
		case "X":
			buf.add(thx.culture.FormatDate.time(date,culture));
			break;
		case "y":
			buf.add(thx.culture.FormatNumber.digits((function($this) {
				var $r;
				var _this = "" + date.getFullYear();
				$r = HxOverrides.substr(_this,-2,null);
				return $r;
			}(this)),culture));
			break;
		case "Y":
			buf.add(thx.culture.FormatNumber.digits("" + date.getFullYear(),culture));
			break;
		case "z":
			buf.b += "+0000";
			break;
		case "Z":
			buf.b += "GMT";
			break;
		case "%":
			buf.b += "%";
			break;
		default:
			buf.b += Std.string("%" + c);
		}
		pos++;
	}
	return buf.b;
};
thx.culture.FormatDate.getMHours = function(date) {
	var v = date.getHours();
	if(v > 12) return v - 12; else return v;
};
thx.culture.FormatDate.yearMonth = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternYearMonth,culture,false);
};
thx.culture.FormatDate.monthDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternMonthDay,culture,false);
};
thx.culture.FormatDate.monthDayShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,"%b %d",culture,false);
};
thx.culture.FormatDate.dateYMD = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,"%Y-%m-%d",culture,false);
};
thx.culture.FormatDate.date = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternDate,culture,false);
};
thx.culture.FormatDate.dateShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternDateShort,culture,false);
};
thx.culture.FormatDate.dateShortTime = function(d,culture) {
	return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
};
thx.culture.FormatDate.dateShortTimeShort = function(d,culture) {
	return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
};
thx.culture.FormatDate.dateTimeShort = function(d,culture) {
	return thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
};
thx.culture.FormatDate.dateRfc = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternDateRfc,culture,false);
};
thx.culture.FormatDate.dateTime = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternDateTime,culture,false);
};
thx.culture.FormatDate.universal = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternUniversal,culture,false);
};
thx.culture.FormatDate.sortable = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternSortable,culture,false);
};
thx.culture.FormatDate.time = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternTime,culture,false);
};
thx.culture.FormatDate.timeShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatDate.format(date,culture.date.patternTimeShort,culture,false);
};
thx.culture.FormatDate.hourShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	if(null == culture.date.am) return thx.culture.FormatDate.format(date,"%H",culture,false); else return thx.culture.FormatDate.format(date,"%l %p",culture,false);
};
thx.culture.FormatDate.year = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
};
thx.culture.FormatDate.month = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
};
thx.culture.FormatDate.monthName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return culture.date.months[date.getMonth()];
};
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return culture.date.abbrMonths[date.getMonth()];
};
thx.culture.FormatDate.weekDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
};
thx.culture.FormatDate.weekDayName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return culture.date.days[date.getDay()];
};
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return culture.date.abbrDays[date.getDay()];
};
thx.culture.FormatDate.weekDayNameFromNum = function(weekDayNum,firstDayOfWk,culture) {
	if(firstDayOfWk == null) firstDayOfWk = 0;
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	firstDayOfWk = Ints.wrap(firstDayOfWk,0,6);
	var nameIndex = Ints.wrap(weekDayNum + firstDayOfWk,0,6);
	return culture.date.days[nameIndex];
};
thx.culture.FormatDate.weekDayShortNameFromNum = function(weekDayNum,firstDayOfWk,culture) {
	if(firstDayOfWk == null) firstDayOfWk = 0;
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	firstDayOfWk = Ints.wrap(firstDayOfWk,0,6);
	var nameIndex = Ints.wrap(weekDayNum + firstDayOfWk,0,6);
	return culture.date.abbrDays[nameIndex];
};
thx.culture.FormatDate.weekDayNumFromName = function(weekDayName,firstDayOfWk,culture) {
	if(firstDayOfWk == null) firstDayOfWk = 0;
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	if(weekDayName != null) weekDayName = weekDayName.toLowerCase(); else weekDayName = "";
	var dayNames = culture.date.days.map(function(d) {
		return d.toLowerCase();
	});
	var abbrDayNames = culture.date.abbrDays.map(function(d1) {
		return d1.toLowerCase();
	});
	var index = Lambda.indexOf(dayNames,weekDayName);
	if(index == -1) index = Lambda.indexOf(abbrDayNames,weekDayName);
	if(index != -1) {
		firstDayOfWk = Ints.wrap(firstDayOfWk,0,6);
		index = Ints.wrap(index - firstDayOfWk,0,6);
	}
	return index;
};
thx.culture.FormatNumber = function() { };
$hxClasses["thx.culture.FormatNumber"] = thx.culture.FormatNumber;
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
};
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
};
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
};
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
};
thx.culture.FormatNumber["int"] = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.decimal(v,0,culture);
};
thx.culture.FormatNumber.digits = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.get_defaultCulture();
	return thx.culture.FormatNumber.processDigits(v,culture.digits);
};
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	if(Math.isNaN(v)) return culture.symbolNaN; else if(!Math.isFinite(v)) if(v == Math.NEGATIVE_INFINITY) return culture.symbolNegInf; else return culture.symbolPosInf;
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) return StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace); else return StringTools.replace(v < 0?negative:positive,"n",fv);
};
thx.culture.FormatNumber.processDigits = function(s,digits) {
	if(digits == null) return s;
	var o = [];
	var _g1 = 0;
	var _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(HxOverrides.substr(s,i,1))]);
	}
	return o.join("");
};
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
	var fv = "" + Math.abs(v);
	var pos = fv.indexOf("E");
	if(pos > 0) {
		var e = Std.parseInt(HxOverrides.substr(fv,pos + 1,null));
		var ispos = true;
		if(e < 0) {
			ispos = false;
			e = -e;
		}
		var s = StringTools.replace(HxOverrides.substr(fv,0,pos),".","");
		if(ispos) fv = StringTools.rpad(s,"0",e + 1); else fv = "0" + StringTools.rpad(".","0",e) + s;
	}
	var parts = fv.split(".");
	var temp = parts[0];
	var intparts = [];
	var group = 0;
	while(true) {
		if(temp.length == 0) break;
		var len = info.groups[group];
		if(temp.length <= len) {
			intparts.unshift(thx.culture.FormatNumber.processDigits(temp,digits));
			break;
		}
		intparts.unshift(thx.culture.FormatNumber.processDigits(HxOverrides.substr(temp,-len,null),digits));
		temp = HxOverrides.substr(temp,0,-len);
		if(group < info.groups.length - 1) group++;
	}
	var intpart = intparts.join(info.groupsSeparator);
	if(decimals > 0) {
		var decpart;
		if(parts.length == 1) decpart = StringTools.lpad("","0",decimals); else if(parts[1].length > decimals) decpart = HxOverrides.substr(parts[1],0,decimals); else decpart = StringTools.rpad(parts[1],"0",decimals);
		return intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
	} else return intpart;
};
thx.culture.FormatParams = function() { };
$hxClasses["thx.culture.FormatParams"] = thx.culture.FormatParams;
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	if(p.length <= 1) return p;
	var f = HxOverrides.substr(p,0,1);
	if(("\"" == f || "'" == f) && HxOverrides.substr(p,-1,null) == f) return HxOverrides.substr(p,1,p.length - 2); else return p;
};
thx.culture.FormatParams.params = function(p,ps,alt) {
	if(null != ps && null != p) return [p].concat(ps);
	if((null == ps || ps.length == 0) && null == p) return [alt];
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		return [parts[0]].concat(parts.length == 1?[]:Arrays.map(parts[1].split(","),function(s,i) {
			if(0 == i) return s; else return thx.culture.FormatParams.cleanQuotes(s);
		}));
	}
	return ps;
};
thx.culture.Language = function() { };
$hxClasses["thx.culture.Language"] = thx.culture.Language;
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__properties__ = {get_languages:"get_languages"}
thx.culture.Language.get_languages = function() {
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new haxe.ds.StringMap();
	return thx.culture.Language.languages;
};
thx.culture.Language.get = function(name) {
	var this1 = thx.culture.Language.get_languages();
	var key = name.toLowerCase();
	return this1.get(key);
};
thx.culture.Language.names = function() {
	var this1 = thx.culture.Language.get_languages();
	return this1.keys();
};
thx.culture.Language.add = function(language) {
	if(!(function($this) {
		var $r;
		var this1 = thx.culture.Language.get_languages();
		$r = this1.exists(language.iso2);
		return $r;
	}(this))) {
		var this2 = thx.culture.Language.get_languages();
		this2.set(language.iso2,language);
	}
};
thx.culture.Language.__super__ = thx.culture.Info;
thx.culture.Language.prototype = $extend(thx.culture.Info.prototype,{
	__class__: thx.culture.Language
});
thx.culture.core = {};
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	this.months = months;
	this.abbrMonths = abbrMonths;
	this.days = days;
	this.abbrDays = abbrDays;
	this.shortDays = shortDays;
	this.am = am;
	this.pm = pm;
	this.separatorDate = separatorDate;
	this.separatorTime = separatorTime;
	this.firstWeekDay = firstWeekDay;
	this.patternYearMonth = patternYearMonth;
	this.patternMonthDay = patternMonthDay;
	this.patternDate = patternDate;
	this.patternDateShort = patternDateShort;
	this.patternDateRfc = patternDateRfc;
	this.patternDateTime = patternDateTime;
	this.patternUniversal = patternUniversal;
	this.patternSortable = patternSortable;
	this.patternTime = patternTime;
	this.patternTimeShort = patternTimeShort;
};
$hxClasses["thx.culture.core.DateTimeInfo"] = thx.culture.core.DateTimeInfo;
thx.culture.core.DateTimeInfo.__name__ = ["thx","culture","core","DateTimeInfo"];
thx.culture.core.DateTimeInfo.prototype = {
	months: null
	,abbrMonths: null
	,days: null
	,abbrDays: null
	,shortDays: null
	,am: null
	,pm: null
	,separatorDate: null
	,separatorTime: null
	,firstWeekDay: null
	,patternYearMonth: null
	,patternMonthDay: null
	,patternDate: null
	,patternDateShort: null
	,patternDateRfc: null
	,patternDateTime: null
	,patternUniversal: null
	,patternSortable: null
	,patternTime: null
	,patternTimeShort: null
	,__class__: thx.culture.core.DateTimeInfo
};
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
};
$hxClasses["thx.culture.core.NumberInfo"] = thx.culture.core.NumberInfo;
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype = {
	decimals: null
	,decimalsSeparator: null
	,groups: null
	,groupsSeparator: null
	,patternNegative: null
	,patternPositive: null
	,__class__: thx.culture.core.NumberInfo
};
thx.languages = {};
thx.languages.En = function() {
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
};
$hxClasses["thx.languages.En"] = thx.languages.En;
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__properties__ = {get_language:"get_language"}
thx.languages.En.get_language = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
};
thx.languages.En.__super__ = thx.culture.Language;
thx.languages.En.prototype = $extend(thx.culture.Language.prototype,{
	__class__: thx.languages.En
});
thx.cultures = {};
thx.cultures.EnUS = function() {
	this.language = thx.languages.En.get_language();
	this.name = "en-US";
	this.english = "English (United States)";
	this["native"] = "English (United States)";
	this.date = new thx.culture.core.DateTimeInfo(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p");
	this.symbolNaN = "NaN";
	this.symbolPercent = "%";
	this.symbolPermille = "‰";
	this.signNeg = "-";
	this.signPos = "+";
	this.symbolNegInf = "-Infinity";
	this.symbolPosInf = "Infinity";
	this.number = new thx.culture.core.NumberInfo(2,".",[3],",","-n","n");
	this.currency = new thx.culture.core.NumberInfo(2,".",[3],",","($n)","$n");
	this.percent = new thx.culture.core.NumberInfo(2,".",[3],",","-n %","n %");
	this.pluralRule = 1;
	this.englishCurrency = "US Dollar";
	this.nativeCurrency = "US Dollar";
	this.currencySymbol = "$";
	this.currencyIso = "USD";
	this.englishRegion = "United States";
	this.nativeRegion = "United States";
	this.iso2 = "US";
	this.iso3 = "USA";
	this.isMetric = false;
	thx.culture.Culture.add(this);
};
$hxClasses["thx.cultures.EnUS"] = thx.cultures.EnUS;
thx.cultures.EnUS.__name__ = ["thx","cultures","EnUS"];
thx.cultures.EnUS.__properties__ = {get_culture:"get_culture"}
thx.cultures.EnUS.get_culture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
};
thx.cultures.EnUS.__super__ = thx.culture.Culture;
thx.cultures.EnUS.prototype = $extend(thx.culture.Culture.prototype,{
	__class__: thx.cultures.EnUS
});
thx.util = {};
thx.util.Message = function(message,params,param) {
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
};
$hxClasses["thx.util.Message"] = thx.util.Message;
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype = {
	message: null
	,params: null
	,toString: function() {
		return Strings.format(this.message,this.params);
	}
	,translatef: function(translator) {
		return Strings.format(translator(this.message),this.params);
	}
	,translate: function(translator,domain) {
		if(null == domain) domain = translator.get_domain();
		var culture = thx.culture.Culture.get(domain);
		if(this.params.length == 1 && js.Boot.__instanceof(this.params[0],Int)) return Strings.format(translator.plural(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator.singular(this.message,domain),this.params,null,culture);
	}
	,__class__: thx.util.Message
};
thx.error = {};
thx.error.Error = function(message,params,param,pos) {
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
};
$hxClasses["thx.error.Error"] = thx.error.Error;
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
thx.error.Error.prototype = $extend(thx.util.Message.prototype,{
	pos: null
	,inner: null
	,setInner: function(inner) {
		this.inner = inner;
		return this;
	}
	,toStringError: function(pattern) {
		var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
		return prefix + this.toString();
	}
	,toString: function() {
		try {
			return Strings.format(this.message,this.params);
		} catch( e ) {
			var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
			haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 42, className : "thx.error.Error", methodName : "toString"});
			return "";
		}
	}
	,__class__: thx.error.Error
});
thx.error.AbstractMethod = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
};
$hxClasses["thx.error.AbstractMethod"] = thx.error.AbstractMethod;
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
thx.error.AbstractMethod.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.AbstractMethod
});
thx.error.NotImplemented = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "thx.error.NotImplemented", methodName : "new"});
};
$hxClasses["thx.error.NotImplemented"] = thx.error.NotImplemented;
thx.error.NotImplemented.__name__ = ["thx","error","NotImplemented"];
thx.error.NotImplemented.__super__ = thx.error.Error;
thx.error.NotImplemented.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NotImplemented
});
thx.error.NullArgument = function(argumentName,message,posInfo) {
	if(null == message) message = "invalid null or empty argument '{0}' for method {1}.{2}()";
	thx.error.Error.call(this,message,[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 16, className : "thx.error.NullArgument", methodName : "new"});
};
$hxClasses["thx.error.NullArgument"] = thx.error.NullArgument;
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
thx.error.NullArgument.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NullArgument
});
thx.math = {};
thx.math.Equations = function() { };
$hxClasses["thx.math.Equations"] = thx.math.Equations;
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	return v;
};
thx.math.Equations.polynomial = function(t,e) {
	return Math.pow(t,e);
};
thx.math.Equations.quadratic = function(t) {
	return thx.math.Equations.polynomial(t,2);
};
thx.math.Equations.cubic = function(t) {
	return thx.math.Equations.polynomial(t,3);
};
thx.math.Equations.sin = function(t) {
	return 1 - Math.cos(t * Math.PI / 2);
};
thx.math.Equations.exponential = function(t) {
	if(t != 0) return Math.pow(2,10 * (t - 1)) - 1e-3; else return 0;
};
thx.math.Equations.circle = function(t) {
	return 1 - Math.sqrt(1 - t * t);
};
thx.math.Equations.elastic = function(t,a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
};
thx.math.Equations.elasticf = function(a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return function(t) {
		return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
	};
};
thx.math.Equations.back = function(t,s) {
	if(null == s) s = 1.70158;
	return t * t * ((s + 1) * t - s);
};
thx.math.Equations.backf = function(s) {
	if(null == s) s = 1.70158;
	return function(t) {
		return t * t * ((s + 1) * t - s);
	};
};
thx.math.Equations.bounce = function(t) {
	if(t < 0.36363636363636365) return 7.5625 * t * t; else if(t < 0.72727272727272729) return 7.5625 * (t -= 0.54545454545454541) * t + .75; else if(t < 0.90909090909090906) return 7.5625 * (t -= 0.81818181818181823) * t + .9375; else return 7.5625 * (t -= 0.95454545454545459) * t + .984375;
};
thx.math.Equations.polynomialf = function(e) {
	return function(t) {
		thx.math.Equations.polynomial(t,e);
	};
};
thx.translation = {};
thx.translation.ITranslation = function() { };
$hxClasses["thx.translation.ITranslation"] = thx.translation.ITranslation;
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype = {
	singular: null
	,plural: null
	,__class__: thx.translation.ITranslation
};
var tink = {};
tink.core = {};
tink.core._Callback = {};
tink.core._Callback.Callback_Impl_ = function() { };
$hxClasses["tink.core._Callback.Callback_Impl_"] = tink.core._Callback.Callback_Impl_;
tink.core._Callback.Callback_Impl_.__name__ = ["tink","core","_Callback","Callback_Impl_"];
tink.core._Callback.Callback_Impl_._new = function(f) {
	return f;
};
tink.core._Callback.Callback_Impl_.invoke = function(this1,data) {
	this1(data);
};
tink.core._Callback.Callback_Impl_.fromNiladic = function(f) {
	return function(r) {
		f();
	};
};
tink.core._Callback.Callback_Impl_.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			callback(v);
		}
	};
};
tink.core._Callback.CallbackLink_Impl_ = function() { };
$hxClasses["tink.core._Callback.CallbackLink_Impl_"] = tink.core._Callback.CallbackLink_Impl_;
tink.core._Callback.CallbackLink_Impl_.__name__ = ["tink","core","_Callback","CallbackLink_Impl_"];
tink.core._Callback.CallbackLink_Impl_._new = function(link) {
	return link;
};
tink.core._Callback.CallbackLink_Impl_.dissolve = function(this1) {
	if(this1 != null) this1();
};
tink.core._Callback.CallbackLink_Impl_.toCallback = function(this1) {
	var f = this1;
	return function(r) {
		f();
	};
};
tink.core._Callback.CallbackLink_Impl_.fromFunction = function(f) {
	return f;
};
tink.core._Callback.CallbackLink_Impl_.fromMany = function(callbacks) {
	return function() {
		var _g = 0;
		while(_g < callbacks.length) {
			var cb = callbacks[_g];
			++_g;
			if(cb != null) cb();
		}
	};
};
tink.core._Callback.Cell = function() {
};
$hxClasses["tink.core._Callback.Cell"] = tink.core._Callback.Cell;
tink.core._Callback.Cell.__name__ = ["tink","core","_Callback","Cell"];
tink.core._Callback.Cell.get = function() {
	if(tink.core._Callback.Cell.pool.length > 0) return tink.core._Callback.Cell.pool.pop(); else return new tink.core._Callback.Cell();
};
tink.core._Callback.Cell.prototype = {
	cb: null
	,free: function() {
		this.cb = null;
		tink.core._Callback.Cell.pool.push(this);
	}
	,__class__: tink.core._Callback.Cell
};
tink.core._Callback.CallbackList_Impl_ = function() { };
$hxClasses["tink.core._Callback.CallbackList_Impl_"] = tink.core._Callback.CallbackList_Impl_;
tink.core._Callback.CallbackList_Impl_.__name__ = ["tink","core","_Callback","CallbackList_Impl_"];
tink.core._Callback.CallbackList_Impl_.__properties__ = {get_length:"get_length"}
tink.core._Callback.CallbackList_Impl_._new = function() {
	return [];
};
tink.core._Callback.CallbackList_Impl_.get_length = function(this1) {
	return this1.length;
};
tink.core._Callback.CallbackList_Impl_.add = function(this1,cb) {
	var cell;
	if(tink.core._Callback.Cell.pool.length > 0) cell = tink.core._Callback.Cell.pool.pop(); else cell = new tink.core._Callback.Cell();
	cell.cb = cb;
	this1.push(cell);
	return function() {
		if(HxOverrides.remove(this1,cell)) {
			cell.cb = null;
			tink.core._Callback.Cell.pool.push(cell);
		}
		cell = null;
	};
};
tink.core._Callback.CallbackList_Impl_.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell.cb != null) cell.cb(data);
	}
};
tink.core._Callback.CallbackList_Impl_.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell.cb = null;
		tink.core._Callback.Cell.pool.push(cell);
	}
};
tink.core.Either = $hxClasses["tink.core.Either"] = { __ename__ : ["tink","core","Either"], __constructs__ : ["Left","Right"] };
tink.core.Either.Left = function(a) { var $x = ["Left",0,a]; $x.__enum__ = tink.core.Either; $x.toString = $estr; return $x; };
tink.core.Either.Right = function(b) { var $x = ["Right",1,b]; $x.__enum__ = tink.core.Either; $x.toString = $estr; return $x; };
tink.core.Either.__empty_constructs__ = [];
tink.core._Error = {};
tink.core._Error.ErrorCode_Impl_ = function() { };
$hxClasses["tink.core._Error.ErrorCode_Impl_"] = tink.core._Error.ErrorCode_Impl_;
tink.core._Error.ErrorCode_Impl_.__name__ = ["tink","core","_Error","ErrorCode_Impl_"];
tink.core.TypedError = function(code,message,pos) {
	if(code == null) code = 500;
	this.code = code;
	this.message = message;
	this.pos = pos;
};
$hxClasses["tink.core.TypedError"] = tink.core.TypedError;
tink.core.TypedError.__name__ = ["tink","core","TypedError"];
tink.core.TypedError.withData = function(code,message,data,pos) {
	if(code == null) code = 500;
	var ret = new tink.core.TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink.core.TypedError.prototype = {
	message: null
	,code: null
	,data: null
	,pos: null
	,printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error: " + this.message;
		if(this.pos != null) ret += " " + this.printPos();
		return ret;
	}
	,throwSelf: function() {
		throw this;
	}
	,__class__: tink.core.TypedError
};
tink.core._Future = {};
tink.core._Future.Future_Impl_ = function() { };
$hxClasses["tink.core._Future.Future_Impl_"] = tink.core._Future.Future_Impl_;
tink.core._Future.Future_Impl_.__name__ = ["tink","core","_Future","Future_Impl_"];
tink.core._Future.Future_Impl_._new = function(f) {
	return f;
};
tink.core._Future.Future_Impl_.handle = function(this1,callback) {
	return this1(callback);
};
tink.core._Future.Future_Impl_.gather = function(this1) {
	var op = new tink.core.FutureTrigger();
	var self = this1;
	return tink.core._Future.Future_Impl_._new(function(cb) {
		if(self != null) {
			this1($bind(op,op.trigger));
			self = null;
		}
		return op.future(cb);
	});
};
tink.core._Future.Future_Impl_.first = function(this1,other) {
	return tink.core._Future.Future_Impl_.async(function(cb) {
		this1(cb);
		other(cb);
	});
};
tink.core._Future.Future_Impl_.map = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = tink.core._Future.Future_Impl_._new(function(callback) {
		return this1(function(result) {
			var data = f(result);
			callback(data);
		});
	});
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.flatMap = function(this1,next,gather) {
	if(gather == null) gather = true;
	var ret = tink.core._Future.Future_Impl_.flatten(tink.core._Future.Future_Impl_.map(this1,next,gather));
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.merge = function(this1,other,merger,gather) {
	if(gather == null) gather = true;
	return tink.core._Future.Future_Impl_.flatMap(this1,function(t) {
		return tink.core._Future.Future_Impl_.map(other,function(a) {
			return merger(t,a);
		},false);
	},gather);
};
tink.core._Future.Future_Impl_.flatten = function(f) {
	return tink.core._Future.Future_Impl_._new(function(callback) {
		var ret = null;
		ret = f(function(next) {
			ret = next(function(result) {
				callback(result);
			});
		});
		return ret;
	});
};
tink.core._Future.Future_Impl_.fromTrigger = function(trigger) {
	return trigger.future;
};
tink.core._Future.Future_Impl_.ofMany = function(futures,gather) {
	if(gather == null) gather = true;
	var ret = tink.core._Future.Future_Impl_.sync([]);
	var _g = 0;
	while(_g < futures.length) {
		var f = [futures[_g]];
		++_g;
		ret = tink.core._Future.Future_Impl_.flatMap(ret,(function(f) {
			return function(results) {
				return tink.core._Future.Future_Impl_.map(f[0],(function() {
					return function(result) {
						return results.concat([result]);
					};
				})(),false);
			};
		})(f),false);
	}
	if(gather) return tink.core._Future.Future_Impl_.gather(ret); else return ret;
};
tink.core._Future.Future_Impl_.fromMany = function(futures) {
	return tink.core._Future.Future_Impl_.ofMany(futures);
};
tink.core._Future.Future_Impl_.lazy = function(l) {
	return tink.core._Future.Future_Impl_._new(function(cb) {
		var data = l();
		cb(data);
		return null;
	});
};
tink.core._Future.Future_Impl_.sync = function(v) {
	return tink.core._Future.Future_Impl_._new(function(callback) {
		callback(v);
		return null;
	});
};
tink.core._Future.Future_Impl_.async = function(f,lazy) {
	if(lazy == null) lazy = false;
	if(lazy) return tink.core._Future.Future_Impl_.flatten(tink.core._Future.Future_Impl_.lazy(tink.core._Lazy.Lazy_Impl_.ofFunc((function(f1,f2,a1) {
		return function() {
			return f1(f2,a1);
		};
	})(tink.core._Future.Future_Impl_.async,f,false)))); else {
		var op = new tink.core.FutureTrigger();
		f($bind(op,op.trigger));
		return op.future;
	}
};
tink.core._Future.Future_Impl_.or = function(a,b) {
	return tink.core._Future.Future_Impl_.first(a,b);
};
tink.core._Future.Future_Impl_.either = function(a,b) {
	return tink.core._Future.Future_Impl_.first(tink.core._Future.Future_Impl_.map(a,tink.core.Either.Left,false),tink.core._Future.Future_Impl_.map(b,tink.core.Either.Right,false));
};
tink.core._Future.Future_Impl_.and = function(a,b) {
	return tink.core._Future.Future_Impl_.merge(a,b,function(a1,b1) {
		return { a : a1, b : b1};
	});
};
tink.core._Future.Future_Impl_._tryFailingFlatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return map(d);
		case 1:
			var f1 = o[2];
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(f1));
		}
	});
};
tink.core._Future.Future_Impl_._tryFlatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return tink.core._Future.Future_Impl_.map(map(d),tink.core.Outcome.Success);
		case 1:
			var f1 = o[2];
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(f1));
		}
	});
};
tink.core._Future.Future_Impl_._tryFailingMap = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,function(o) {
		return tink.core.OutcomeTools.flatMap(o,tink.core._Outcome.OutcomeMapper_Impl_.withSameError(map));
	});
};
tink.core._Future.Future_Impl_._tryMap = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,function(o) {
		return tink.core.OutcomeTools.map(o,map);
	});
};
tink.core._Future.Future_Impl_._flatMap = function(f,map) {
	return tink.core._Future.Future_Impl_.flatMap(f,map);
};
tink.core._Future.Future_Impl_._map = function(f,map) {
	return tink.core._Future.Future_Impl_.map(f,map);
};
tink.core._Future.Future_Impl_.trigger = function() {
	return new tink.core.FutureTrigger();
};
tink.core.FutureTrigger = function() {
	var _g = this;
	this.list = [];
	this.future = tink.core._Future.Future_Impl_._new(function(callback) {
		if(_g.list == null) {
			callback(_g.result);
			return null;
		} else return tink.core._Callback.CallbackList_Impl_.add(_g.list,callback);
	});
};
$hxClasses["tink.core.FutureTrigger"] = tink.core.FutureTrigger;
tink.core.FutureTrigger.__name__ = ["tink","core","FutureTrigger"];
tink.core.FutureTrigger.prototype = {
	result: null
	,list: null
	,future: null
	,asFuture: function() {
		return this.future;
	}
	,trigger: function(result) {
		if(this.list == null) return false; else {
			var list = this.list;
			this.list = null;
			this.result = result;
			tink.core._Callback.CallbackList_Impl_.invoke(list,result);
			tink.core._Callback.CallbackList_Impl_.clear(list);
			return true;
		}
	}
	,__class__: tink.core.FutureTrigger
};
tink.core._Lazy = {};
tink.core._Lazy.Lazy_Impl_ = function() { };
$hxClasses["tink.core._Lazy.Lazy_Impl_"] = tink.core._Lazy.Lazy_Impl_;
tink.core._Lazy.Lazy_Impl_.__name__ = ["tink","core","_Lazy","Lazy_Impl_"];
tink.core._Lazy.Lazy_Impl_._new = function(r) {
	return r;
};
tink.core._Lazy.Lazy_Impl_.get = function(this1) {
	return this1();
};
tink.core._Lazy.Lazy_Impl_.ofFunc = function(f) {
	var result = null;
	return function() {
		if(f != null) {
			result = f();
			f = null;
		}
		return result;
	};
};
tink.core._Lazy.Lazy_Impl_.map = function(this1,f) {
	return tink.core._Lazy.Lazy_Impl_.ofFunc(function() {
		return f(this1());
	});
};
tink.core._Lazy.Lazy_Impl_.flatMap = function(this1,f) {
	return tink.core._Lazy.Lazy_Impl_.ofFunc(function() {
		var this2 = f(this1());
		return this2();
	});
};
tink.core._Lazy.Lazy_Impl_.ofConst = function(c) {
	return function() {
		return c;
	};
};
tink.core.Noise = $hxClasses["tink.core.Noise"] = { __ename__ : ["tink","core","Noise"], __constructs__ : ["Noise"] };
tink.core.Noise.Noise = ["Noise",0];
tink.core.Noise.Noise.toString = $estr;
tink.core.Noise.Noise.__enum__ = tink.core.Noise;
tink.core.Noise.__empty_constructs__ = [tink.core.Noise.Noise];
tink.core.Outcome = $hxClasses["tink.core.Outcome"] = { __ename__ : ["tink","core","Outcome"], __constructs__ : ["Success","Failure"] };
tink.core.Outcome.Success = function(data) { var $x = ["Success",0,data]; $x.__enum__ = tink.core.Outcome; $x.toString = $estr; return $x; };
tink.core.Outcome.Failure = function(failure) { var $x = ["Failure",1,failure]; $x.__enum__ = tink.core.Outcome; $x.toString = $estr; return $x; };
tink.core.Outcome.__empty_constructs__ = [];
tink.core.OutcomeTools = function() { };
$hxClasses["tink.core.OutcomeTools"] = tink.core.OutcomeTools;
tink.core.OutcomeTools.__name__ = ["tink","core","OutcomeTools"];
tink.core.OutcomeTools.sure = function(outcome) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data;
	case 1:
		var failure = outcome[2];
		if(js.Boot.__instanceof(failure,tink.core.TypedError)) return failure.throwSelf(); else throw failure;
		break;
	}
};
tink.core.OutcomeTools.toOption = function(outcome) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return haxe.ds.Option.Some(data);
	case 1:
		return haxe.ds.Option.None;
	}
};
tink.core.OutcomeTools.toOutcome = function(option,pos) {
	switch(option[1]) {
	case 0:
		var value = option[2];
		return tink.core.Outcome.Success(value);
	case 1:
		return tink.core.Outcome.Failure(new tink.core.TypedError(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "Outcome.hx", lineNumber : 37, className : "tink.core.OutcomeTools", methodName : "toOutcome"}));
	}
};
tink.core.OutcomeTools.orUse = function(outcome,fallback) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data;
	case 1:
		return fallback();
	}
};
tink.core.OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome[1]) {
	case 0:
		return outcome;
	case 1:
		return fallback();
	}
};
tink.core.OutcomeTools.equals = function(outcome,to) {
	switch(outcome[1]) {
	case 0:
		var data = outcome[2];
		return data == to;
	case 1:
		return false;
	}
};
tink.core.OutcomeTools.map = function(outcome,transform) {
	switch(outcome[1]) {
	case 0:
		var a = outcome[2];
		return tink.core.Outcome.Success(transform(a));
	case 1:
		var f = outcome[2];
		return tink.core.Outcome.Failure(f);
	}
};
tink.core.OutcomeTools.isSuccess = function(outcome) {
	switch(outcome[1]) {
	case 0:
		return true;
	default:
		return false;
	}
};
tink.core.OutcomeTools.flatMap = function(o,mapper) {
	return tink.core._Outcome.OutcomeMapper_Impl_.apply(mapper,o);
};
tink.core._Outcome = {};
tink.core._Outcome.OutcomeMapper_Impl_ = function() { };
$hxClasses["tink.core._Outcome.OutcomeMapper_Impl_"] = tink.core._Outcome.OutcomeMapper_Impl_;
tink.core._Outcome.OutcomeMapper_Impl_.__name__ = ["tink","core","_Outcome","OutcomeMapper_Impl_"];
tink.core._Outcome.OutcomeMapper_Impl_._new = function(f) {
	return { f : f};
};
tink.core._Outcome.OutcomeMapper_Impl_.apply = function(this1,o) {
	return this1.f(o);
};
tink.core._Outcome.OutcomeMapper_Impl_.withSameError = function(f) {
	return tink.core._Outcome.OutcomeMapper_Impl_._new(function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			return f(d);
		case 1:
			var f1 = o[2];
			return tink.core.Outcome.Failure(f1);
		}
	});
};
tink.core._Outcome.OutcomeMapper_Impl_.withEitherError = function(f) {
	return tink.core._Outcome.OutcomeMapper_Impl_._new(function(o) {
		switch(o[1]) {
		case 0:
			var d = o[2];
			{
				var _g = f(d);
				switch(_g[1]) {
				case 0:
					var d1 = _g[2];
					return tink.core.Outcome.Success(d1);
				case 1:
					var f1 = _g[2];
					return tink.core.Outcome.Failure(tink.core.Either.Right(f1));
				}
			}
			break;
		case 1:
			var f2 = o[2];
			return tink.core.Outcome.Failure(tink.core.Either.Left(f2));
		}
	});
};
tink.core._Pair = {};
tink.core._Pair.Pair_Impl_ = function() { };
$hxClasses["tink.core._Pair.Pair_Impl_"] = tink.core._Pair.Pair_Impl_;
tink.core._Pair.Pair_Impl_.__name__ = ["tink","core","_Pair","Pair_Impl_"];
tink.core._Pair.Pair_Impl_.__properties__ = {get_b:"get_b",get_a:"get_a"}
tink.core._Pair.Pair_Impl_._new = function(a,b) {
	return { a : a, b : b};
};
tink.core._Pair.Pair_Impl_.get_a = function(this1) {
	return this1.a;
};
tink.core._Pair.Pair_Impl_.get_b = function(this1) {
	return this1.b;
};
tink.core._Pair.Pair_Impl_.toBool = function(this1) {
	return this1 != null;
};
tink.core._Pair.Pair_Impl_.isNil = function(this1) {
	return this1 == null;
};
tink.core._Pair.Pair_Impl_.nil = function() {
	return null;
};
tink.core._Pair.MPair_Impl_ = function() { };
$hxClasses["tink.core._Pair.MPair_Impl_"] = tink.core._Pair.MPair_Impl_;
tink.core._Pair.MPair_Impl_.__name__ = ["tink","core","_Pair","MPair_Impl_"];
tink.core._Pair.MPair_Impl_.__properties__ = {set_b:"set_b",get_b:"get_b",set_a:"set_a",get_a:"get_a"}
tink.core._Pair.MPair_Impl_._new = function(a,b) {
	return { a : a, b : b};
};
tink.core._Pair.MPair_Impl_.get_a = function(this1) {
	return this1.a;
};
tink.core._Pair.MPair_Impl_.get_b = function(this1) {
	return this1.b;
};
tink.core._Pair.MPair_Impl_.set_a = function(this1,v) {
	return this1.a = v;
};
tink.core._Pair.MPair_Impl_.set_b = function(this1,v) {
	return this1.b = v;
};
tink.core._Ref = {};
tink.core._Ref.Ref_Impl_ = function() { };
$hxClasses["tink.core._Ref.Ref_Impl_"] = tink.core._Ref.Ref_Impl_;
tink.core._Ref.Ref_Impl_.__name__ = ["tink","core","_Ref","Ref_Impl_"];
tink.core._Ref.Ref_Impl_.__properties__ = {set_value:"set_value",get_value:"get_value"}
tink.core._Ref.Ref_Impl_._new = function() {
	var this1;
	this1 = new Array(1);
	return this1;
};
tink.core._Ref.Ref_Impl_.get_value = function(this1) {
	return this1[0];
};
tink.core._Ref.Ref_Impl_.set_value = function(this1,param) {
	return this1[0] = param;
};
tink.core._Ref.Ref_Impl_.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink.core._Ref.Ref_Impl_.to = function(v) {
	var ret;
	var this1;
	this1 = new Array(1);
	ret = this1;
	ret[0] = v;
	return ret;
};
tink.core._Signal = {};
tink.core._Signal.Signal_Impl_ = function() { };
$hxClasses["tink.core._Signal.Signal_Impl_"] = tink.core._Signal.Signal_Impl_;
tink.core._Signal.Signal_Impl_.__name__ = ["tink","core","_Signal","Signal_Impl_"];
tink.core._Signal.Signal_Impl_._new = function(f) {
	return f;
};
tink.core._Signal.Signal_Impl_.handle = function(this1,handler) {
	return this1(handler);
};
tink.core._Signal.Signal_Impl_.map = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			var data = f(result);
			cb(data);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.flatMap = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			var this2 = f(result);
			this2(cb);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.filter = function(this1,f,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return this1(function(result) {
			if(f(result)) cb(result);
		});
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.join = function(this1,other,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		return tink.core._Callback.CallbackLink_Impl_.fromMany([this1(cb),other(cb)]);
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.Signal_Impl_.next = function(this1) {
	var ret = new tink.core.FutureTrigger();
	var handler = tink.core._Callback.CallbackLink_Impl_.toCallback(this1($bind(ret,ret.trigger)));
	this1(handler);
	return ret.future;
};
tink.core._Signal.Signal_Impl_.noise = function(this1) {
	return tink.core._Signal.Signal_Impl_.map(this1,function(_) {
		return tink.core.Noise.Noise;
	});
};
tink.core._Signal.Signal_Impl_.gather = function(this1) {
	var ret = tink.core._Signal.Signal_Impl_.trigger();
	this1(function(x) {
		tink.core._Callback.CallbackList_Impl_.invoke(ret,x);
	});
	return tink.core._Signal.SignalTrigger_Impl_.asSignal(ret);
};
tink.core._Signal.Signal_Impl_.trigger = function() {
	return [];
};
tink.core._Signal.Signal_Impl_.ofClassical = function(add,remove,gather) {
	if(gather == null) gather = true;
	var ret = function(cb) {
		var f = function(a) {
			cb(a);
		};
		add(f);
		var f1 = (function(f2,a1) {
			return function() {
				return f2(a1);
			};
		})(remove,f);
		return f1;
	};
	if(gather) return tink.core._Signal.Signal_Impl_.gather(ret); else return ret;
};
tink.core._Signal.SignalTrigger_Impl_ = function() { };
$hxClasses["tink.core._Signal.SignalTrigger_Impl_"] = tink.core._Signal.SignalTrigger_Impl_;
tink.core._Signal.SignalTrigger_Impl_.__name__ = ["tink","core","_Signal","SignalTrigger_Impl_"];
tink.core._Signal.SignalTrigger_Impl_._new = function() {
	return [];
};
tink.core._Signal.SignalTrigger_Impl_.trigger = function(this1,event) {
	tink.core._Callback.CallbackList_Impl_.invoke(this1,event);
};
tink.core._Signal.SignalTrigger_Impl_.getLength = function(this1) {
	return this1.length;
};
tink.core._Signal.SignalTrigger_Impl_.asSignal = function(this1) {
	var f = (function(_e) {
		return function(cb) {
			return tink.core._Callback.CallbackList_Impl_.add(_e,cb);
		};
	})(this1);
	return f;
};
ufront.api = {};
ufront.api.ApiReturnType = $hxClasses["ufront.api.ApiReturnType"] = { __ename__ : ["ufront","api","ApiReturnType"], __constructs__ : ["ARTFuture","ARTOutcome","ARTVoid"] };
ufront.api.ApiReturnType.ARTFuture = ["ARTFuture",0];
ufront.api.ApiReturnType.ARTFuture.toString = $estr;
ufront.api.ApiReturnType.ARTFuture.__enum__ = ufront.api.ApiReturnType;
ufront.api.ApiReturnType.ARTOutcome = ["ARTOutcome",1];
ufront.api.ApiReturnType.ARTOutcome.toString = $estr;
ufront.api.ApiReturnType.ARTOutcome.__enum__ = ufront.api.ApiReturnType;
ufront.api.ApiReturnType.ARTVoid = ["ARTVoid",2];
ufront.api.ApiReturnType.ARTVoid.toString = $estr;
ufront.api.ApiReturnType.ARTVoid.__enum__ = ufront.api.ApiReturnType;
ufront.api.ApiReturnType.__empty_constructs__ = [ufront.api.ApiReturnType.ARTFuture,ufront.api.ApiReturnType.ARTOutcome,ufront.api.ApiReturnType.ARTVoid];
ufront.api.UFApi = function() {
};
$hxClasses["ufront.api.UFApi"] = ufront.api.UFApi;
ufront.api.UFApi.__name__ = ["ufront","api","UFApi"];
ufront.api.UFApi.prototype = {
	auth: null
	,messages: null
	,ufTrace: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Trace});
	}
	,ufLog: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Log});
	}
	,ufWarn: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Warning});
	}
	,ufError: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Error});
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,__class__: ufront.api.UFApi
};
ufront.api.UFAsyncApi = function() { };
$hxClasses["ufront.api.UFAsyncApi"] = ufront.api.UFAsyncApi;
ufront.api.UFAsyncApi.__name__ = ["ufront","api","UFAsyncApi"];
ufront.api.UFAsyncApi.prototype = {
	className: null
	,_makeApiCall: function(method,args,flags) {
		var remotingCallString = "" + this.className + "." + method + "(" + args.join(",") + ")";
		return null;
	}
	,__class__: ufront.api.UFAsyncApi
};
ufront.api.UFApiContext = function() {
};
$hxClasses["ufront.api.UFApiContext"] = ufront.api.UFApiContext;
ufront.api.UFApiContext.__name__ = ["ufront","api","UFApiContext"];
ufront.api.UFApiContext.prototype = {
	injector: null
	,__class__: ufront.api.UFApiContext
};
ufront.app = {};
ufront.app.HttpApplication = function() {
	this.pathToContentDir = null;
	this.injector = new minject.Injector();
	this.injector.mapValue(minject.Injector,this.injector);
	this.requestMiddleware = [];
	this.requestHandlers = [];
	this.responseMiddleware = [];
	this.logHandlers = [];
	this.errorHandlers = [];
	this.urlFilters = [];
	this.messages = [];
};
$hxClasses["ufront.app.HttpApplication"] = ufront.app.HttpApplication;
ufront.app.HttpApplication.__name__ = ["ufront","app","HttpApplication"];
ufront.app.HttpApplication.prototype = {
	injector: null
	,requestMiddleware: null
	,requestHandlers: null
	,responseMiddleware: null
	,logHandlers: null
	,errorHandlers: null
	,urlFilters: null
	,messages: null
	,modulesReady: null
	,currentModule: null
	,pathToContentDir: null
	,inject: function(cl,val,cl2,singleton,named) {
		if(singleton == null) singleton = false;
		ufront.core.InjectionTools.inject(this.injector,cl,val,cl2,singleton,named);
		return this;
	}
	,init: function() {
		if(this.modulesReady == null) {
			var futures = [];
			var _g = 0;
			var _g1 = this.getModulesThatRequireInit();
			while(_g < _g1.length) {
				var module = _g1[_g];
				++_g;
				futures.push(module.init(this));
			}
			this.modulesReady = tink.core._Future.Future_Impl_.map(tink.core._Future.Future_Impl_.ofMany(futures),function(outcomes) {
				var _g2 = 0;
				while(_g2 < outcomes.length) {
					var o = outcomes[_g2];
					++_g2;
					switch(o[1]) {
					case 1:
						var err = o[2];
						return tink.core.Outcome.Failure(err);
					case 0:
						break;
					}
				}
				return tink.core.Outcome.Success(tink.core.Noise.Noise);
			});
		}
		return this.modulesReady;
	}
	,dispose: function() {
		var _g = this;
		var futures = [];
		var _g1 = 0;
		var _g11 = this.getModulesThatRequireInit();
		while(_g1 < _g11.length) {
			var module = _g11[_g1];
			++_g1;
			futures.push(module.dispose(this));
		}
		return tink.core._Future.Future_Impl_.map(tink.core._Future.Future_Impl_.ofMany(futures),function(outcomes) {
			_g.modulesReady = null;
			var _g12 = 0;
			while(_g12 < outcomes.length) {
				var o = outcomes[_g12];
				++_g12;
				switch(o[1]) {
				case 1:
					return o;
				case 0:
					break;
				}
			}
			return tink.core.Outcome.Success(tink.core.Noise.Noise);
		});
	}
	,getModulesThatRequireInit: function() {
		var moduleSets = [this.requestMiddleware,this.requestHandlers,this.responseMiddleware,this.logHandlers,this.errorHandlers];
		var modules = [];
		var _g = 0;
		while(_g < moduleSets.length) {
			var set = moduleSets[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < set.length) {
				var module = set[_g1];
				++_g1;
				if(js.Boot.__instanceof(module,ufront.app.UFInitRequired)) modules.push(module);
			}
		}
		return modules;
	}
	,addRequestMiddleware: function(middlewareItem,middleware,first) {
		if(first == null) first = false;
		return this.addModule(this.requestMiddleware,middlewareItem,middleware,first);
	}
	,addRequestHandler: function(handler,handlers,first) {
		if(first == null) first = false;
		return this.addModule(this.requestHandlers,handler,handlers,first);
	}
	,addErrorHandler: function(handler,handlers,first) {
		if(first == null) first = false;
		return this.addModule(this.errorHandlers,handler,handlers,first);
	}
	,addResponseMiddleware: function(middlewareItem,middleware,first) {
		if(first == null) first = false;
		return this.addModule(this.responseMiddleware,middlewareItem,middleware,first);
	}
	,addLogHandler: function(logger,loggers,first) {
		if(first == null) first = false;
		return this.addModule(this.logHandlers,logger,loggers,first);
	}
	,addModule: function(modulesArr,newModule,newModules,first) {
		if(newModule != null) {
			this.injector.injectInto(newModule);
			if(first) modulesArr.unshift(newModule); else modulesArr.push(newModule);
		}
		if(newModules != null) {
			var $it0 = $iterator(newModules)();
			while( $it0.hasNext() ) {
				var newModule1 = $it0.next();
				this.injector.injectInto(newModule1);
				if(first) modulesArr.unshift(newModule1); else modulesArr.push(newModule1);
			}
		}
		return this;
	}
	,execute: function(httpContext) {
		var _g = this;
		httpContext.setUrlFilters(this.urlFilters);
		var reqMidModules = this.requestMiddleware.map(function(m) {
			var a = (function(f) {
				return function(a1) {
					return f(a1);
				};
			})($bind(m,m.requestIn));
			var b = { methodName : "requestIn", lineNumber : -1, fileName : "", customParams : [], className : Type.getClassName(Type.getClass(m))};
			return { a : a, b : b};
		});
		var reqHandModules = this.requestHandlers.map(function(m1) {
			var a2 = (function(f1) {
				return function(a11) {
					return f1(a11);
				};
			})($bind(m1,m1.handleRequest));
			var b1 = { methodName : "handleRequest", lineNumber : -1, fileName : "", customParams : [], className : Type.getClassName(Type.getClass(m1))};
			return { a : a2, b : b1};
		});
		var resMidModules = this.responseMiddleware.map(function(m2) {
			var a3 = (function(f2) {
				return function(a12) {
					return f2(a12);
				};
			})($bind(m2,m2.responseOut));
			var b2 = { methodName : "responseOut", lineNumber : -1, fileName : "", customParams : [], className : Type.getClassName(Type.getClass(m2))};
			return { a : a3, b : b2};
		});
		var logHandModules = this.logHandlers.map(function(m3) {
			var a4 = (function(f3,a21) {
				return function(a13) {
					return f3(a13,a21);
				};
			})($bind(m3,m3.log),_g.messages);
			var b3 = ufront.web.HttpError.fakePosition(m3,"log",["{HttpContext}",{ pos : { fileName : "f:\\_haxelib/ufront-mvc/1,0,0-rc,9/src/ufront/app/HttpApplication.hx", lineNumber : 281, className : ""}, expr : haxe.macro.ExprDef.EConst(haxe.macro.Constant.CIdent("messages"))}]);
			return { a : a4, b : b3};
		});
		var allDone = tink.core._Future.Future_Impl_._tryFailingFlatMap(this.init(),function(n) {
			return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(reqMidModules,httpContext,ufront.web.context.RequestCompletion.CRequestMiddlewareComplete),function(n1) {
				return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(reqHandModules,httpContext,ufront.web.context.RequestCompletion.CRequestHandlersComplete),function(n2) {
					return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(resMidModules,httpContext,ufront.web.context.RequestCompletion.CResponseMiddlewareComplete),function(n3) {
						return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(logHandModules,httpContext,ufront.web.context.RequestCompletion.CLogHandlersComplete),function(n4) {
							return tink.core._Future.Future_Impl_._tryMap(_g.clearMessages(),function(n5) {
								return _g.flush(httpContext);
							});
						});
					});
				});
			});
		});
		allDone(function(r) {
			null;
		});
		return allDone;
	}
	,executeModules: function(modules,ctx,flag) {
		var _g = this;
		var done = new tink.core.FutureTrigger();
		var runNext;
		var runNext1 = null;
		runNext1 = function() {
			var m = modules.shift();
			if(flag != null && (ctx.completion & 1 << flag[1]) != 0) done.trigger(tink.core.Outcome.Success(tink.core.Noise.Noise)); else if(m == null) {
				if(flag != null) ctx.completion |= 1 << flag[1];
				done.trigger(tink.core.Outcome.Success(tink.core.Noise.Noise));
			} else {
				var moduleCb = m.a;
				_g.currentModule = m.b;
				var moduleResult;
				try {
					moduleResult = moduleCb(ctx);
				} catch( e ) {
					ctx.ufLog("Caught error " + Std.string(e) + " while executing module " + _g.currentModule.className + "." + _g.currentModule.methodName + " in HttpApplication.executeModules()",{ fileName : "HttpApplication.hx", lineNumber : 345, className : "ufront.app.HttpApplication", methodName : "executeModules"});
					moduleResult = tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(ufront.web.HttpError.wrap(e,null,_g.currentModule)));
				}
				moduleResult(function(result) {
					switch(result[1]) {
					case 0:
						runNext1();
						break;
					case 1:
						var e1 = result[2];
						_g.handleError(e1,ctx,done);
						break;
					}
				});
			}
		};
		runNext = runNext1;
		runNext();
		return done.future;
	}
	,handleError: function(err,ctx,doneTrigger) {
		var _g = this;
		if(!((ctx.completion & 1 << ufront.web.context.RequestCompletion.CErrorHandlersComplete[1]) != 0)) {
			var errHandlerModules = this.errorHandlers.map(function(m) {
				var a = (function(f,a1) {
					return function(a2) {
						return f(a1,a2);
					};
				})($bind(m,m.handleError),err);
				var b = ufront.web.HttpError.fakePosition(m,"handleError",[{ pos : { fileName : "f:\\_haxelib/ufront-mvc/1,0,0-rc,9/src/ufront/app/HttpApplication.hx", lineNumber : 368, className : ""}, expr : haxe.macro.ExprDef.EConst(haxe.macro.Constant.CIdent("err"))}]);
				return { a : a, b : b};
			});
			var resMidModules = this.responseMiddleware.map(function(m1) {
				var a3 = (function(f1) {
					return function(a11) {
						return f1(a11);
					};
				})($bind(m1,m1.responseOut));
				var b1 = { methodName : "responseOut", lineNumber : -1, fileName : "", customParams : [], className : Type.getClassName(Type.getClass(m1))};
				return { a : a3, b : b1};
			});
			var logHandModules = this.logHandlers.map(function(m2) {
				var a4 = (function(f2,a21) {
					return function(a12) {
						return f2(a12,a21);
					};
				})($bind(m2,m2.log),_g.messages);
				var b2 = ufront.web.HttpError.fakePosition(m2,"log",["{HttpContext}",{ pos : { fileName : "f:\\_haxelib/ufront-mvc/1,0,0-rc,9/src/ufront/app/HttpApplication.hx", lineNumber : 370, className : ""}, expr : haxe.macro.ExprDef.EConst(haxe.macro.Constant.CIdent("messages"))}]);
				return { a : a4, b : b2};
			});
			var allDone = tink.core._Future.Future_Impl_._tryFailingFlatMap(tink.core._Future.Future_Impl_._tryFailingFlatMap(this.executeModules(errHandlerModules,ctx,ufront.web.context.RequestCompletion.CErrorHandlersComplete),function(n) {
				ctx.completion |= 1 << ufront.web.context.RequestCompletion.CRequestHandlersComplete[1];
				return ufront.core.Sync.success();
			}),function(n1) {
				return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(resMidModules,ctx,ufront.web.context.RequestCompletion.CResponseMiddlewareComplete),function(n2) {
					return tink.core._Future.Future_Impl_._tryFailingFlatMap(_g.executeModules(logHandModules,ctx,ufront.web.context.RequestCompletion.CLogHandlersComplete),function(n3) {
						return tink.core._Future.Future_Impl_._tryMap(_g.clearMessages(),function(n4) {
							return _g.flush(ctx);
						});
					});
				});
			});
			var callback;
			var f3 = (function(f4,a13) {
				return function() {
					return f4(a13);
				};
			})($bind(doneTrigger,doneTrigger.trigger),tink.core.Outcome.Failure(err));
			callback = function(r) {
				f3();
			};
			allDone(callback);
		} else {
			var msg = "You had an error after your error handler had already run.  Last active module: " + Std.string(this.currentModule) + ".";
			throw "" + msg + "  " + Std.string(err) + ". Error data: " + Std.string(err.data);
		}
	}
	,clearMessages: function() {
		var _g1 = 0;
		var _g = this.messages.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.messages.pop();
		}
		return ufront.core.Sync.success();
	}
	,flush: function(ctx) {
		if(!((ctx.completion & 1 << ufront.web.context.RequestCompletion.CFlushComplete[1]) != 0)) {
			ctx.response.flush();
			ctx.completion |= 1 << ufront.web.context.RequestCompletion.CFlushComplete[1];
		}
		return tink.core.Noise.Noise;
	}
	,useModNekoCache: function() {
	}
	,addUrlFilter: function(filter) {
		if(null == filter) throw new thx.error.NullArgument("filter","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpApplication.hx", lineNumber : 479, className : "ufront.app.HttpApplication", methodName : "addUrlFilter"});
		this.urlFilters.push(filter);
	}
	,clearUrlFilters: function() {
		this.urlFilters = [];
	}
	,setContentDirectory: function(relativePath) {
		this.pathToContentDir = relativePath;
	}
	,__class__: ufront.app.HttpApplication
};
ufront.app.HttpApplicationMacros = function() { };
$hxClasses["ufront.app.HttpApplicationMacros"] = ufront.app.HttpApplicationMacros;
ufront.app.HttpApplicationMacros.__name__ = ["ufront","app","HttpApplicationMacros"];
ufront.app.UFErrorHandler = function() { };
$hxClasses["ufront.app.UFErrorHandler"] = ufront.app.UFErrorHandler;
ufront.app.UFErrorHandler.__name__ = ["ufront","app","UFErrorHandler"];
ufront.app.UFErrorHandler.prototype = {
	handleError: null
	,__class__: ufront.app.UFErrorHandler
};
ufront.app.UFInitRequired = function() { };
$hxClasses["ufront.app.UFInitRequired"] = ufront.app.UFInitRequired;
ufront.app.UFInitRequired.__name__ = ["ufront","app","UFInitRequired"];
ufront.app.UFInitRequired.prototype = {
	init: null
	,dispose: null
	,__class__: ufront.app.UFInitRequired
};
ufront.app.UFLogHandler = function() { };
$hxClasses["ufront.app.UFLogHandler"] = ufront.app.UFLogHandler;
ufront.app.UFLogHandler.__name__ = ["ufront","app","UFLogHandler"];
ufront.app.UFLogHandler.prototype = {
	log: null
	,__class__: ufront.app.UFLogHandler
};
ufront.app.UFResponseMiddleware = function() { };
$hxClasses["ufront.app.UFResponseMiddleware"] = ufront.app.UFResponseMiddleware;
ufront.app.UFResponseMiddleware.__name__ = ["ufront","app","UFResponseMiddleware"];
ufront.app.UFResponseMiddleware.prototype = {
	responseOut: null
	,__class__: ufront.app.UFResponseMiddleware
};
ufront.app.UFRequestMiddleware = function() { };
$hxClasses["ufront.app.UFRequestMiddleware"] = ufront.app.UFRequestMiddleware;
ufront.app.UFRequestMiddleware.__name__ = ["ufront","app","UFRequestMiddleware"];
ufront.app.UFRequestMiddleware.prototype = {
	requestIn: null
	,__class__: ufront.app.UFRequestMiddleware
};
ufront.app.UFMiddleware = function() { };
$hxClasses["ufront.app.UFMiddleware"] = ufront.app.UFMiddleware;
ufront.app.UFMiddleware.__name__ = ["ufront","app","UFMiddleware"];
ufront.app.UFMiddleware.__interfaces__ = [ufront.app.UFResponseMiddleware,ufront.app.UFRequestMiddleware];
ufront.app.UFRequestHandler = function() { };
$hxClasses["ufront.app.UFRequestHandler"] = ufront.app.UFRequestHandler;
ufront.app.UFRequestHandler.__name__ = ["ufront","app","UFRequestHandler"];
ufront.app.UFRequestHandler.prototype = {
	handleRequest: null
	,toString: null
	,__class__: ufront.app.UFRequestHandler
};
ufront.app.UfrontApplication = function(optionsIn) {
	this.appTemplatingEngines = new List();
	this.firstRun = true;
	ufront.app.HttpApplication.call(this);
	this.configuration = ufront.web.DefaultUfrontConfiguration.get();
	Objects.merge(this.configuration,optionsIn);
	this.mvcHandler = new ufront.handler.MVCHandler();
	this.remotingHandler = new ufront.handler.RemotingHandler();
	var $it0 = $iterator(this.configuration.controllers)();
	while( $it0.hasNext() ) {
		var controller = $it0.next();
		ufront.core.InjectionTools.inject(this.injector,controller);
	}
	var $it1 = $iterator(this.configuration.apis)();
	while( $it1.hasNext() ) {
		var api = $it1.next();
		ufront.core.InjectionTools.inject(this.injector,api);
	}
	this.addModule(this.requestMiddleware,null,this.configuration.requestMiddleware,false);
	this.addModule(this.requestHandlers,null,[this.remotingHandler,this.mvcHandler],false);
	this.addModule(this.responseMiddleware,null,this.configuration.responseMiddleware,false);
	this.addModule(this.errorHandlers,null,this.configuration.errorHandlers,false);
	if(!this.configuration.disableBrowserTrace) {
		this.addLogHandler(new ufront.log.BrowserConsoleLogger(),null,null);
		this.addLogHandler(new ufront.log.RemotingLogger(),null,null);
	}
	if(null != this.configuration.logFile) this.addLogHandler(new ufront.log.FileLogger(this.configuration.logFile),null,null);
	var path = Strings.rtrim(Strings.ltrim(this.configuration.basePath,"/"),"/");
	if(path.length > 0) ufront.app.HttpApplication.prototype.addUrlFilter.call(this,new ufront.web.url.filter.DirectoryUrlFilter(path));
	if(this.configuration.urlRewrite != true) ufront.app.HttpApplication.prototype.addUrlFilter.call(this,new ufront.web.url.filter.PathInfoUrlFilter());
	if(this.configuration.sessionImplementation != null) this.inject(ufront.web.session.UFHttpSession,null,this.configuration.sessionImplementation);
	if(this.configuration.authImplementation != null) this.inject(ufront.auth.UFAuthHandler,null,this.configuration.authImplementation);
	if(this.configuration.viewEngine != null) {
		this.inject(String,this.configuration.viewPath,null,null,"viewPath");
		this.inject(ufront.view.UFViewEngine,null,this.configuration.viewEngine,true);
	}
	if(this.configuration.contentDirectory != null) this.setContentDirectory(this.configuration.contentDirectory);
	if(this.configuration.defaultLayout != null) this.inject(String,this.configuration.defaultLayout,null,null,"defaultLayout");
	var _g = 0;
	var _g1 = this.configuration.templatingEngines;
	while(_g < _g1.length) {
		var te = _g1[_g];
		++_g;
		this.addTemplatingEngine(te);
	}
};
$hxClasses["ufront.app.UfrontApplication"] = ufront.app.UfrontApplication;
ufront.app.UfrontApplication.__name__ = ["ufront","app","UfrontApplication"];
ufront.app.UfrontApplication.__super__ = ufront.app.HttpApplication;
ufront.app.UfrontApplication.prototype = $extend(ufront.app.HttpApplication.prototype,{
	configuration: null
	,mvcHandler: null
	,remotingHandler: null
	,viewEngine: null
	,execute: function(httpContext) {
		if(null == httpContext) throw new thx.error.NullArgument("httpContext","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "UfrontApplication.hx", lineNumber : 166, className : "ufront.app.UfrontApplication", methodName : "execute"});
		if(this.firstRun) this.initOnFirstExecute(httpContext);
		return ufront.app.HttpApplication.prototype.execute.call(this,httpContext);
	}
	,firstRun: null
	,initOnFirstExecute: function(httpContext) {
		this.firstRun = false;
		this.inject(String,httpContext.request.get_scriptDirectory(),null,null,"scriptDirectory");
		this.inject(String,httpContext.get_contentDirectory(),null,null,"contentDirectory");
		if(this.configuration.viewEngine != null) try {
			this.inject(this.configuration.viewEngine);
			this.viewEngine = this.injector.getInstance(ufront.view.UFViewEngine);
			var $it0 = this.appTemplatingEngines.iterator();
			while( $it0.hasNext() ) {
				var te = $it0.next();
				this.viewEngine.engines.push(te);
			}
		} catch( e ) {
			httpContext.ufWarn("Failed to load view engine " + Type.getClassName(this.configuration.viewEngine) + ": " + Std.string(e),{ fileName : "UfrontApplication.hx", lineNumber : 190, className : "ufront.app.UfrontApplication", methodName : "initOnFirstExecute"});
		}
	}
	,loadApiContext: function(apiContext) {
		this.remotingHandler.apiContexts.push(apiContext);
		return this;
	}
	,appTemplatingEngines: null
	,addTemplatingEngine: function(engine) {
		this.appTemplatingEngines.add(engine);
		if(this.viewEngine != null) this.viewEngine.engines.push(engine);
		return this;
	}
	,inject: function(cl,val,cl2,singleton,named) {
		if(singleton == null) singleton = false;
		return ufront.app.HttpApplication.prototype.inject.call(this,cl,val,cl2,singleton,named);
	}
	,__class__: ufront.app.UfrontApplication
});
ufront.auth = {};
ufront.auth.AuthError = $hxClasses["ufront.auth.AuthError"] = { __ename__ : ["ufront","auth","AuthError"], __constructs__ : ["NotLoggedIn","LoginFailed","NotLoggedInAs","NoPermission"] };
ufront.auth.AuthError.NotLoggedIn = ["NotLoggedIn",0];
ufront.auth.AuthError.NotLoggedIn.toString = $estr;
ufront.auth.AuthError.NotLoggedIn.__enum__ = ufront.auth.AuthError;
ufront.auth.AuthError.LoginFailed = function(msg) { var $x = ["LoginFailed",1,msg]; $x.__enum__ = ufront.auth.AuthError; $x.toString = $estr; return $x; };
ufront.auth.AuthError.NotLoggedInAs = function(u) { var $x = ["NotLoggedInAs",2,u]; $x.__enum__ = ufront.auth.AuthError; $x.toString = $estr; return $x; };
ufront.auth.AuthError.NoPermission = function(p) { var $x = ["NoPermission",3,p]; $x.__enum__ = ufront.auth.AuthError; $x.toString = $estr; return $x; };
ufront.auth.AuthError.__empty_constructs__ = [ufront.auth.AuthError.NotLoggedIn];
ufront.auth.UFAuthHandler = function() { };
$hxClasses["ufront.auth.UFAuthHandler"] = ufront.auth.UFAuthHandler;
ufront.auth.UFAuthHandler.__name__ = ["ufront","auth","UFAuthHandler"];
ufront.auth.UFAuthHandler.prototype = {
	isLoggedIn: null
	,requireLogin: null
	,isLoggedInAs: null
	,requireLoginAs: null
	,hasPermission: null
	,hasPermissions: null
	,requirePermission: null
	,requirePermissions: null
	,getUserByID: null
	,setCurrentUser: null
	,toString: null
	,__class__: ufront.auth.UFAuthHandler
};
ufront.auth.NobodyAuthHandler = function() {
};
$hxClasses["ufront.auth.NobodyAuthHandler"] = ufront.auth.NobodyAuthHandler;
ufront.auth.NobodyAuthHandler.__name__ = ["ufront","auth","NobodyAuthHandler"];
ufront.auth.NobodyAuthHandler.__interfaces__ = [ufront.auth.UFAuthHandler];
ufront.auth.NobodyAuthHandler.prototype = {
	isLoggedIn: function() {
		return false;
	}
	,requireLogin: function() {
		throw ufront.auth.AuthError.NotLoggedIn;
	}
	,isLoggedInAs: function(user) {
		return false;
	}
	,requireLoginAs: function(user) {
		throw ufront.auth.AuthError.NotLoggedInAs(user);
	}
	,hasPermission: function(permission) {
		return false;
	}
	,hasPermissions: function(permissions) {
		return false;
	}
	,requirePermission: function(permission) {
		throw ufront.auth.AuthError.NoPermission(permission);
	}
	,requirePermissions: function(permissions) {
		var $it0 = $iterator(permissions)();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			throw ufront.auth.AuthError.NoPermission(p);
		}
	}
	,getUserByID: function(id) {
		return null;
	}
	,setCurrentUser: function(u) {
		throw "Nobodies cannot become somebodies. It's against the rules!";
	}
	,toString: function() {
		return "NobodyAuthHandler";
	}
	,get_currentUser: function() {
		return null;
	}
	,__class__: ufront.auth.NobodyAuthHandler
	,__properties__: {get_currentUser:"get_currentUser"}
};
ufront.auth.UFAuthUser = function() { };
$hxClasses["ufront.auth.UFAuthUser"] = ufront.auth.UFAuthUser;
ufront.auth.UFAuthUser.__name__ = ["ufront","auth","UFAuthUser"];
ufront.auth.UFAuthUser.prototype = {
	can: null
	,userID: null
	,__class__: ufront.auth.UFAuthUser
};
ufront.auth.YesBossAuthHandler = function() {
};
$hxClasses["ufront.auth.YesBossAuthHandler"] = ufront.auth.YesBossAuthHandler;
ufront.auth.YesBossAuthHandler.__name__ = ["ufront","auth","YesBossAuthHandler"];
ufront.auth.YesBossAuthHandler.__interfaces__ = [ufront.auth.UFAuthHandler];
ufront.auth.YesBossAuthHandler.prototype = {
	isLoggedIn: function() {
		return true;
	}
	,requireLogin: function() {
	}
	,isLoggedInAs: function(user) {
		return true;
	}
	,requireLoginAs: function(user) {
	}
	,hasPermission: function(permission) {
		return true;
	}
	,hasPermissions: function(permissions) {
		return true;
	}
	,requirePermission: function(permission) {
	}
	,requirePermissions: function(permissions) {
	}
	,getUserByID: function(id) {
		return new ufront.auth.BossUser();
	}
	,setCurrentUser: function(u) {
	}
	,toString: function() {
		return "YesBossAuthHandler";
	}
	,get_currentUser: function() {
		return new ufront.auth.BossUser();
	}
	,__class__: ufront.auth.YesBossAuthHandler
	,__properties__: {get_currentUser:"get_currentUser"}
};
ufront.auth.BossUser = function() {
};
$hxClasses["ufront.auth.BossUser"] = ufront.auth.BossUser;
ufront.auth.BossUser.__name__ = ["ufront","auth","BossUser"];
ufront.auth.BossUser.__interfaces__ = [ufront.auth.UFAuthUser];
ufront.auth.BossUser.prototype = {
	userID: null
	,can: function(p,ps) {
		return true;
	}
	,get_userID: function() {
		return "The Boss";
	}
	,__class__: ufront.auth.BossUser
	,__properties__: {get_userID:"get_userID"}
};
ufront.core = {};
ufront.core.InjectionRef = function(v) {
	this.value = v;
};
$hxClasses["ufront.core.InjectionRef"] = ufront.core.InjectionRef;
ufront.core.InjectionRef.__name__ = ["ufront","core","InjectionRef"];
ufront.core.InjectionRef.of = function(v) {
	if(ufront.core.InjectionRef.pool.length > 0) {
		var r = ufront.core.InjectionRef.pool.shift();
		r.value = v;
		return r;
	} else return new ufront.core.InjectionRef(v);
};
ufront.core.InjectionRef.prototype = {
	value: null
	,get: function() {
		var v = this.value;
		this.value = null;
		ufront.core.InjectionRef.pool.push(this);
		return v;
	}
	,__class__: ufront.core.InjectionRef
};
ufront.core.InjectionTools = function() { };
$hxClasses["ufront.core.InjectionTools"] = ufront.core.InjectionTools;
ufront.core.InjectionTools.__name__ = ["ufront","core","InjectionTools"];
ufront.core.InjectionTools.inject = function(injector,cl,val,cl2,singleton,named) {
	if(singleton == null) singleton = false;
	if(cl != null) {
		var existingMapping = injector.getMapping(cl,named);
		if(existingMapping != null) existingMapping.setResult(null);
		if(val != null) {
			injector.mapValue(cl,val,named);
			var implementationClass = Type.getClass(val);
			if(implementationClass != cl) {
				var existingMapping1 = injector.getMapping(implementationClass,named);
				if(existingMapping1 != null) existingMapping1.setResult(null);
				injector.mapValue(implementationClass,val,named);
			}
		} else if(singleton && cl2 != null) injector.mapSingletonOf(cl,cl2,named); else if(singleton && cl2 == null) injector.mapSingleton(cl,named); else if(cl2 != null) injector.mapClass(cl,cl2,named); else injector.mapClass(cl,cl,named);
	}
	return injector;
};
ufront.core.InjectionTools.listMappings = function(injector,arr,prefix) {
	if(prefix == null) prefix = "";
	if(arr == null) arr = [];
	if(injector.parentInjector != null) ufront.core.InjectionTools.listMappings(injector.parentInjector,arr,"(parent)" + prefix);
	var $it0 = injector.injectionConfigs.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		arr.push(prefix + c.toString());
	}
	return arr;
};
ufront.core._MultiValueMap = {};
ufront.core._MultiValueMap.MultiValueMap_Impl_ = function() { };
$hxClasses["ufront.core._MultiValueMap.MultiValueMap_Impl_"] = ufront.core._MultiValueMap.MultiValueMap_Impl_;
ufront.core._MultiValueMap.MultiValueMap_Impl_.__name__ = ["ufront","core","_MultiValueMap","MultiValueMap_Impl_"];
ufront.core._MultiValueMap.MultiValueMap_Impl_._new = function() {
	return new haxe.ds.StringMap();
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.keys = function(this1) {
	return this1.keys();
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.exists = function(this1,name) {
	return this1.exists(name);
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.iterator = function(this1) {
	var _this;
	var _g = [];
	var $it0 = this1.iterator();
	while( $it0.hasNext() ) {
		var arr = $it0.next();
		var _g1 = 0;
		while(_g1 < arr.length) {
			var v = arr[_g1];
			++_g1;
			_g.push(v);
		}
	}
	_this = _g;
	return HxOverrides.iter(_this);
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.get = function(this1,name) {
	if(this1.exists(name)) {
		var arr = this1.get(name);
		return arr[arr.length - 1];
	} else return null;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.getAll = function(this1,name) {
	if(this1.exists(name)) return this1.get(name); else return [];
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.set = function(this1,name,value) {
	if(value != null) {
		if(StringTools.endsWith(name,"[]")) name = HxOverrides.substr(name,0,name.length - 2); else name = name;
		this1.set(name,[value]);
	}
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.add = function(this1,name,value) {
	if(value != null) {
		if(name != null) {
			if(StringTools.endsWith(name,"[]")) name = HxOverrides.substr(name,0,name.length - 2); else name = name;
		} else name = "";
		if(this1.exists(name)) this1.get(name).push(value); else this1.set(name,[value]);
	}
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.remove = function(this1,key) {
	return this1.remove(key);
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.clone = function(this1) {
	var newMap = new haxe.ds.StringMap();
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		var _g = 0;
		var _g1 = this1.get(k);
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			ufront.core._MultiValueMap.MultiValueMap_Impl_.add(newMap,k,v);
		}
	}
	return newMap;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.toString = function(this1) {
	var sb = new StringBuf();
	sb.b += "[";
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		sb.b += Std.string("\n\t" + key + " = [");
		sb.add(ufront.core._MultiValueMap.MultiValueMap_Impl_.getAll(this1,key).join(", "));
		sb.b += "]";
	}
	if(sb.b.length > 1) sb.b += "\n";
	sb.b += "]";
	return sb.b;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.stripArrayFromName = function(this1,name) {
	if(StringTools.endsWith(name,"[]")) return HxOverrides.substr(name,0,name.length - 2); else return name;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.toMapOfArrays = function(this1) {
	return this1;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.fromMapOfArrays = function(map) {
	return map;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.toStringMap = function(this1) {
	var sm = new haxe.ds.StringMap();
	var $it0 = this1.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		sm.set(key,ufront.core._MultiValueMap.MultiValueMap_Impl_.get(this1,key));
	}
	return sm;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.toMap = function(this1) {
	return ufront.core._MultiValueMap.MultiValueMap_Impl_.toStringMap(this1);
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.fromStringMap = function(stringMap) {
	var qm = new haxe.ds.StringMap();
	if(stringMap != null) {
		var $it0 = stringMap.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			ufront.core._MultiValueMap.MultiValueMap_Impl_.set(qm,key,stringMap.get(key));
		}
	}
	return qm;
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.fromMap = function(map) {
	return ufront.core._MultiValueMap.MultiValueMap_Impl_.fromStringMap(map);
};
ufront.core._MultiValueMap.MultiValueMap_Impl_.combine = function(maps) {
	var qm = new haxe.ds.StringMap();
	var _g = 0;
	while(_g < maps.length) {
		var map = maps[_g];
		++_g;
		var $it0 = map.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var _g1 = 0;
			var _g2 = ufront.core._MultiValueMap.MultiValueMap_Impl_.getAll(map,key);
			while(_g1 < _g2.length) {
				var val = _g2[_g1];
				++_g1;
				ufront.core._MultiValueMap.MultiValueMap_Impl_.add(qm,key,val);
			}
		}
	}
	return qm;
};
ufront.core.Sync = function() { };
$hxClasses["ufront.core.Sync"] = ufront.core.Sync;
ufront.core.Sync.__name__ = ["ufront","core","Sync"];
ufront.core.Sync.success = function() {
	if(ufront.core.Sync.s == null) ufront.core.Sync.s = tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(tink.core.Noise.Noise));
	return ufront.core.Sync.s;
};
ufront.core.Sync.httpError = function(msg,err,p) {
	return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(ufront.web.HttpError.wrap(err,msg,p)));
};
ufront.core.Sync.of = function(v) {
	return tink.core._Future.Future_Impl_.sync(v);
};
ufront.handler = {};
ufront.handler.ErrorPageHandler = function() {
	this.catchErrors = true;
};
$hxClasses["ufront.handler.ErrorPageHandler"] = ufront.handler.ErrorPageHandler;
ufront.handler.ErrorPageHandler.__name__ = ["ufront","handler","ErrorPageHandler"];
ufront.handler.ErrorPageHandler.__interfaces__ = [ufront.app.UFErrorHandler];
ufront.handler.ErrorPageHandler.errorStackItems = function(stack) {
	var arr = [];
	var arr1 = haxe.CallStack.toString(stack).split("\n");
	return arr1;
};
ufront.handler.ErrorPageHandler.prototype = {
	catchErrors: null
	,handleError: function(httpError,ctx) {
		var callStack = "";
		var inner;
		if(httpError != null && httpError.data != null) inner = " (" + Std.string(httpError.data) + ")"; else inner = "";
		ctx.ufError("Handling error: " + Std.string(httpError) + inner + " " + callStack,{ fileName : "ErrorPageHandler.hx", lineNumber : 53, className : "ufront.handler.ErrorPageHandler", methodName : "handleError"});
		if(!((ctx.completion & 1 << ufront.web.context.RequestCompletion.CRequestHandlersComplete[1]) != 0)) {
			var showStack = false;
			ctx.response.clear();
			ctx.response.status = httpError.code;
			ctx.response.set_contentType("text/html");
			ctx.response.write(this.renderError(httpError,showStack));
			ctx.completion |= 1 << ufront.web.context.RequestCompletion.CRequestHandlersComplete[1];
		}
		if(!this.catchErrors) throw httpError;
		return ufront.core.Sync.success();
	}
	,renderErrorContent: function(error,showStack) {
		if(showStack == null) showStack = false;
		var inner;
		if(null != error.data) inner = "<p class=\"error-data\">" + Std.string(error.data) + "</p>"; else inner = "";
		var pos;
		if(showStack) pos = "<p class=\"error-pos\">&gt; " + error.printPos() + "</p>"; else pos = "";
		var exceptionStackItems = ufront.handler.ErrorPageHandler.errorStackItems(haxe.CallStack.exceptionStack());
		var exceptionStack;
		if(showStack && exceptionStackItems.length > 0) exceptionStack = "<div class=\"error-exception-stack\"><h3>Exception Stack:</h3>\n\t\t\t\t\t<pre><code>" + exceptionStackItems.join("\n") + "</pre></code>\n\t\t\t\t</div>"; else exceptionStack = "";
		var content = "\n\t\t\t<summary class=\"error-summary\"><h1 class=\"error-message\">" + error.message + "</h1></summary>\n\t\t\t<details class=\"error-details\"> " + inner + " " + pos + " " + exceptionStack + "</details>\n\t\t";
		return content;
	}
	,renderErrorPage: function(title,content) {
		return "<!DOCTYPE html>\n<html>\n<head>\n\t<title>" + title + "</title>\n\t<style>\n\t\tbody {\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\t.container {\n\t\t\tmax-width: 800px;\n\t\t\tmargin: 30px auto;\n\t\t}\n\t\t.jumbotron {\n\t\t\tpadding: 30px;\n\t\t\tborder-radius: 30px;\n\t\t\tbackground-color: rgb(230,230,230);\n\t\t}\n\t\tp[frown] {\n\t\t\ttext-align: center;\n\t\t}\n\t\tp[frown] span { \n\t\t\ttransform: rotate(90deg); \n\t\t\tdisplay: inline-block; \n\t\t\tcolor: #bbb; \n\t\t\tfont-size: 3em;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t<p frown><span>:(</span></p>\n\t\t\t" + content + "\n\t\t</div>\n\t</div>\n</body>\n</html>";
	}
	,renderError: function(error,showStack) {
		var content = this.renderErrorContent(error,showStack);
		return this.renderErrorPage(error.toString(),content);
	}
	,__class__: ufront.handler.ErrorPageHandler
};
ufront.handler.MVCHandler = function() {
};
$hxClasses["ufront.handler.MVCHandler"] = ufront.handler.MVCHandler;
ufront.handler.MVCHandler.__name__ = ["ufront","handler","MVCHandler"];
ufront.handler.MVCHandler.__interfaces__ = [ufront.app.UFInitRequired,ufront.app.UFRequestHandler];
ufront.handler.MVCHandler.prototype = {
	indexController: null
	,init: function(application) {
		var ufApp;
		if((application instanceof ufront.app.UfrontApplication)) ufApp = application; else ufApp = null;
		if(ufApp != null) this.indexController = ufApp.configuration.indexController;
		return ufront.core.Sync.success();
	}
	,dispose: function(app) {
		this.indexController = null;
		return ufront.core.Sync.success();
	}
	,handleRequest: function(ctx) {
		var _g = this;
		return tink.core._Future.Future_Impl_._tryFailingFlatMap(this.processRequest(ctx),function(r) {
			return _g.executeResult(ctx);
		});
	}
	,processRequest: function(context) {
		context.actionContext.handler = this;
		var controller = context.injector.instantiate(this.indexController);
		var resultFuture = tink.core._Future.Future_Impl_._tryMap(controller.execute(),function(result) {
			context.actionContext.actionResult = result;
			return tink.core.Noise.Noise;
		});
		return resultFuture;
	}
	,executeResult: function(context) {
		try {
			return context.actionContext.actionResult.executeResult(context.actionContext);
		} catch( e ) {
			var p_methodName = "executeResult";
			var p_lineNumber = -1;
			var p_fileName = "";
			var p_customParams = ["actionContext"];
			var p_className = Type.getClassName(Type.getClass(context.actionContext));
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(ufront.web.HttpError.wrap(e,null,{ fileName : "MVCHandler.hx", lineNumber : 84, className : "ufront.handler.MVCHandler", methodName : "executeResult"})));
		}
	}
	,toString: function() {
		return "ufront.handler.MVCHandler";
	}
	,__class__: ufront.handler.MVCHandler
};
ufront.handler.RemotingHandler = function() {
	this.apiContexts = new List();
	this.apis = new List();
};
$hxClasses["ufront.handler.RemotingHandler"] = ufront.handler.RemotingHandler;
ufront.handler.RemotingHandler.__name__ = ["ufront","handler","RemotingHandler"];
ufront.handler.RemotingHandler.__interfaces__ = [ufront.app.UFInitRequired,ufront.app.UFRequestHandler];
ufront.handler.RemotingHandler.prototype = {
	apiContexts: null
	,apis: null
	,context: null
	,loadApi: function(api) {
		this.apis.push(api);
	}
	,loadApis: function(newAPIs) {
		var $it0 = $iterator(newAPIs)();
		while( $it0.hasNext() ) {
			var api = $it0.next();
			this.apis.push(api);
		}
	}
	,loadApiContext: function(apiContext) {
		this.apiContexts.push(apiContext);
	}
	,init: function(app) {
		var ufApp;
		if((app instanceof ufront.app.UfrontApplication)) ufApp = app; else ufApp = null;
		if(ufApp != null) {
			var $it0 = $iterator(ufApp.configuration.apis)();
			while( $it0.hasNext() ) {
				var api = $it0.next();
				this.apis.push(api);
			}
			this.apiContexts.push(ufApp.configuration.remotingApi);
		}
		return ufront.core.Sync.success();
	}
	,dispose: function(app) {
		this.apiContexts = null;
		return ufront.core.Sync.success();
	}
	,handleRequest: function(httpContext) {
		var doneTrigger = new tink.core.FutureTrigger();
		if((function($this) {
			var $r;
			var this1 = httpContext.request.get_clientHeaders();
			$r = this1.exists("X-Haxe-Remoting");
			return $r;
		}(this))) {
			var r = httpContext.response;
			var remotingResponse;
			r.setOk();
			try {
				this.initializeContext(httpContext.injector);
				var params = httpContext.request.get_params();
				if(!params.exists("__x")) throw "Remoting call did not have parameter `__x` which describes which API call to make.  Aborting";
				var u = new haxe.Unserializer(ufront.core._MultiValueMap.MultiValueMap_Impl_.get(params,"__x"));
				var path = u.unserialize();
				var args = u.unserialize();
				var apiCallFinished = this.executeApiCall(path,args,this.context,httpContext.actionContext);
				remotingResponse = tink.core._Future.Future_Impl_.map(apiCallFinished,function(data) {
					var s = new haxe.Serializer();
					s.serialize(data);
					return "hxr" + s.toString();
				});
			} catch( e ) {
				r.setInternalError();
				remotingResponse = tink.core._Future.Future_Impl_.sync(this.remotingError(e,httpContext));
			}
			remotingResponse(function(response) {
				r.set_contentType("application/x-haxe-remoting");
				r.clearContent();
				r.write(response);
				httpContext.completion |= 1 << ufront.web.context.RequestCompletion.CRequestHandlersComplete[1];
				doneTrigger.trigger(tink.core.Outcome.Success(tink.core.Noise.Noise));
			});
		} else doneTrigger.trigger(tink.core.Outcome.Success(tink.core.Noise.Noise));
		return doneTrigger.future;
	}
	,initializeContext: function(injector) {
		this.context = new haxe.remoting.Context();
		var $it0 = this.apiContexts.iterator();
		while( $it0.hasNext() ) {
			var apiContextClass = $it0.next();
			var apiContext = injector.instantiate(apiContextClass);
			var _g = 0;
			var _g1 = Reflect.fields(apiContext);
			while(_g < _g1.length) {
				var fieldName = _g1[_g];
				++_g;
				var api = Reflect.field(apiContext,fieldName);
				if(Reflect.isObject(api)) this.context.addObject(fieldName,api);
			}
		}
		var $it1 = this.apis.iterator();
		while( $it1.hasNext() ) {
			var apiClass = $it1.next();
			var className = Type.getClassName(apiClass);
			var api1 = injector.instantiate(apiClass);
			this.context.addObject(className,api1);
		}
	}
	,executeApiCall: function(path,args,remotingContext,actionContext) {
		actionContext.handler = this;
		actionContext.action = path[path.length - 1];
		actionContext.controller = remotingContext.objects.get(path[0]).obj;
		actionContext.args = args;
		var returnType;
		try {
			var fieldsMeta = haxe.rtti.Meta.getFields(Type.getClass(actionContext.controller));
			var actionMeta = Reflect.field(fieldsMeta,actionContext.action);
			returnType = actionMeta.returnType[0];
		} catch( e ) {
			returnType = 0;
		}
		var flags = returnType;
		var result = remotingContext.call(path,args);
		if((flags & 1 << ufront.api.ApiReturnType.ARTFuture[1]) != 0) return result; else if((flags & 1 << ufront.api.ApiReturnType.ARTVoid[1]) != 0) return tink.core._Future.Future_Impl_.sync(null); else return tink.core._Future.Future_Impl_.sync(result);
	}
	,remotingError: function(e,httpContext) {
		httpContext.messages.push({ msg : e, pos : { fileName : "RemotingHandler.hx", lineNumber : 182, className : "ufront.handler.RemotingHandler", methodName : "remotingError"}, type : ufront.log.MessageType.Error});
		var s = new haxe.Serializer();
		s.serializeException(e);
		var serializedException = "hxe" + s.toString();
		return serializedException;
	}
	,toString: function() {
		return "ufront.handler.RemotingHandler";
	}
	,__class__: ufront.handler.RemotingHandler
};
ufront.log = {};
ufront.log.BrowserConsoleLogger = function() {
};
$hxClasses["ufront.log.BrowserConsoleLogger"] = ufront.log.BrowserConsoleLogger;
ufront.log.BrowserConsoleLogger.__name__ = ["ufront","log","BrowserConsoleLogger"];
ufront.log.BrowserConsoleLogger.__interfaces__ = [ufront.app.UFLogHandler];
ufront.log.BrowserConsoleLogger.formatMessage = function(m) {
	var type;
	var _g = m.type;
	switch(_g[1]) {
	case 0:
		type = "log";
		break;
	case 1:
		type = "info";
		break;
	case 2:
		type = "warn";
		break;
	case 3:
		type = "error";
		break;
	}
	var extras;
	if(m.pos != null && m.pos.customParams != null) extras = ", " + m.pos.customParams.join(", "); else extras = "";
	var msg = "" + m.pos.className + "." + m.pos.methodName + "(" + m.pos.lineNumber + "): " + Std.string(m.msg) + extras;
	return "console." + type + "(decodeURIComponent(\"" + encodeURIComponent(msg) + "\"))";
};
ufront.log.BrowserConsoleLogger.prototype = {
	log: function(ctx,appMessages) {
		if(ctx.response.get_contentType() == "text/html") {
			var results = [];
			var _g = 0;
			var _g1 = ctx.messages;
			while(_g < _g1.length) {
				var msg = _g1[_g];
				++_g;
				results.push(ufront.log.BrowserConsoleLogger.formatMessage(msg));
			}
			if(results.length > 0) ctx.response.write("\n<script type=\"text/javascript\">\n" + results.join("\n") + "\n</script>");
		}
		return ufront.core.Sync.success();
	}
	,__class__: ufront.log.BrowserConsoleLogger
};
ufront.log.FileLogger = function(path) {
	this.path = path;
};
$hxClasses["ufront.log.FileLogger"] = ufront.log.FileLogger;
ufront.log.FileLogger.__name__ = ["ufront","log","FileLogger"];
ufront.log.FileLogger.__interfaces__ = [ufront.app.UFInitRequired,ufront.app.UFLogHandler];
ufront.log.FileLogger.format = function(msg) {
	var text = ufront.log.FileLogger.REMOVENL.replace(Dynamics.string(msg.msg),"\\n");
	var type = msg.type[0];
	var pos = msg.pos;
	return "[" + type + "] " + pos.className + "." + pos.methodName + "(" + pos.lineNumber + "): " + text;
};
ufront.log.FileLogger.prototype = {
	path: null
	,init: function(app) {
		return ufront.core.Sync.success();
	}
	,dispose: function(app) {
		this.path = null;
		return ufront.core.Sync.success();
	}
	,log: function(context,appMessages) {
		var logFile = context.get_contentDirectory() + this.path;
		var req = context.request;
		var res = context.response;
		var userDetails = req.get_clientIP();
		if((null != context.session?context.session.get_id():null) != null) userDetails += " " + (null != context.session?context.session.get_id():null);
		if((context.auth != null && context.auth.get_currentUser() != null?context.auth.get_currentUser().get_userID():null) != null) userDetails += " " + (context.auth != null && context.auth.get_currentUser() != null?context.auth.get_currentUser().get_userID():null);
		var content = "" + Std.string(new Date()) + " [" + req.get_httpMethod() + "] [" + req.get_uri() + "] from [" + userDetails + "], response: [" + res.status + " " + res.get_contentType() + "]\n";
		var _g = 0;
		var _g1 = context.messages;
		while(_g < _g1.length) {
			var msg = _g1[_g];
			++_g;
			content += "\t" + ufront.log.FileLogger.format(msg) + "\n";
		}
		if(appMessages != null) {
			var _g2 = 0;
			while(_g2 < appMessages.length) {
				var msg1 = appMessages[_g2];
				++_g2;
				content += "\t" + ufront.log.FileLogger.format(msg1) + "\n";
			}
		}
		throw "Not implemented";
	}
	,__class__: ufront.log.FileLogger
};
ufront.log.MessageType = $hxClasses["ufront.log.MessageType"] = { __ename__ : ["ufront","log","MessageType"], __constructs__ : ["Trace","Log","Warning","Error"] };
ufront.log.MessageType.Trace = ["Trace",0];
ufront.log.MessageType.Trace.toString = $estr;
ufront.log.MessageType.Trace.__enum__ = ufront.log.MessageType;
ufront.log.MessageType.Log = ["Log",1];
ufront.log.MessageType.Log.toString = $estr;
ufront.log.MessageType.Log.__enum__ = ufront.log.MessageType;
ufront.log.MessageType.Warning = ["Warning",2];
ufront.log.MessageType.Warning.toString = $estr;
ufront.log.MessageType.Warning.__enum__ = ufront.log.MessageType;
ufront.log.MessageType.Error = ["Error",3];
ufront.log.MessageType.Error.toString = $estr;
ufront.log.MessageType.Error.__enum__ = ufront.log.MessageType;
ufront.log.MessageType.__empty_constructs__ = [ufront.log.MessageType.Trace,ufront.log.MessageType.Log,ufront.log.MessageType.Warning,ufront.log.MessageType.Error];
ufront.log.MessageList = function(messages,onMessage) {
	this.messages = messages;
	this.onMessage = onMessage;
};
$hxClasses["ufront.log.MessageList"] = ufront.log.MessageList;
ufront.log.MessageList.__name__ = ["ufront","log","MessageList"];
ufront.log.MessageList.prototype = {
	messages: null
	,onMessage: null
	,push: function(m) {
		if(this.messages != null) this.messages.push(m);
		if(this.onMessage != null) this.onMessage(m);
	}
	,__class__: ufront.log.MessageList
};
ufront.log.RemotingLogger = function() {
};
$hxClasses["ufront.log.RemotingLogger"] = ufront.log.RemotingLogger;
ufront.log.RemotingLogger.__name__ = ["ufront","log","RemotingLogger"];
ufront.log.RemotingLogger.__interfaces__ = [ufront.app.UFLogHandler];
ufront.log.RemotingLogger.formatMessage = function(m) {
	m.msg = "" + Std.string(m.msg);
	if(m.pos.customParams != null) {
		var _g = [];
		var _g1 = 0;
		var _g2 = m.pos.customParams;
		while(_g1 < _g2.length) {
			var p = _g2[_g1];
			++_g1;
			_g.push("" + Std.string(p));
		}
		m.pos.customParams = _g;
	}
	return "hxt" + haxe.Serializer.run(m);
};
ufront.log.RemotingLogger.prototype = {
	log: function(httpContext,appMessages) {
		if(httpContext.response.get_contentType() == "application/x-haxe-remoting") {
			var results = [];
			var _g = 0;
			var _g1 = httpContext.messages;
			while(_g < _g1.length) {
				var msg = _g1[_g];
				++_g;
				results.push(ufront.log.RemotingLogger.formatMessage(msg));
			}
			if(results.length > 0) httpContext.response.write("\n" + results.join("\n"));
		}
		return ufront.core.Sync.success();
	}
	,__class__: ufront.log.RemotingLogger
};
ufront.middleware = {};
ufront.middleware.InlineSessionMiddleware = function() {
};
$hxClasses["ufront.middleware.InlineSessionMiddleware"] = ufront.middleware.InlineSessionMiddleware;
ufront.middleware.InlineSessionMiddleware.__name__ = ["ufront","middleware","InlineSessionMiddleware"];
ufront.middleware.InlineSessionMiddleware.__interfaces__ = [ufront.app.UFMiddleware];
ufront.middleware.InlineSessionMiddleware.prototype = {
	requestIn: function(ctx) {
		if(ufront.middleware.InlineSessionMiddleware.alwaysStart || ctx.session.get_id() != null) return tink.core._Future.Future_Impl_.map(ctx.session.init(),function(outcome) {
			switch(outcome[1]) {
			case 0:
				var s = outcome[2];
				return tink.core.Outcome.Success(s);
			case 1:
				var f = outcome[2];
				return tink.core.Outcome.Failure(ufront.web.HttpError.internalServerError(f,null,{ fileName : "InlineSessionMiddleware.hx", lineNumber : 35, className : "ufront.middleware.InlineSessionMiddleware", methodName : "requestIn"}));
			}
		});
		return ufront.core.Sync.success();
	}
	,responseOut: function(ctx) {
		if(ctx.session != null) return tink.core._Future.Future_Impl_._map(ctx.session.commit(),function(outcome) {
			switch(outcome[1]) {
			case 0:
				var s = outcome[2];
				return tink.core.Outcome.Success(s);
			case 1:
				var f = outcome[2];
				return tink.core.Outcome.Failure(ufront.web.HttpError.internalServerError(f,null,{ fileName : "InlineSessionMiddleware.hx", lineNumber : 50, className : "ufront.middleware.InlineSessionMiddleware", methodName : "responseOut"}));
			}
		}); else return ufront.core.Sync.success();
	}
	,__class__: ufront.middleware.InlineSessionMiddleware
};
ufront.sys = {};
ufront.sys.SysUtil = function() { };
$hxClasses["ufront.sys.SysUtil"] = ufront.sys.SysUtil;
ufront.sys.SysUtil.__name__ = ["ufront","sys","SysUtil"];
ufront.view = {};
ufront.view.UFViewEngine = function(cachingEnabled) {
	if(cachingEnabled == null) cachingEnabled = true;
	if(cachingEnabled) this.cache = new haxe.ds.StringMap();
	this.engines = [];
};
$hxClasses["ufront.view.UFViewEngine"] = ufront.view.UFViewEngine;
ufront.view.UFViewEngine.__name__ = ["ufront","view","UFViewEngine"];
ufront.view.UFViewEngine.prototype = {
	engines: null
	,cache: null
	,getTemplate: function(path,templatingEngine) {
		var _g = this;
		if(this.cache != null && this.cache.exists(path)) {
			var cached = this.cache.get(path);
			if(templatingEngine == null || templatingEngine.type == cached.a) return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(cached.b));
		}
		var tplStrReady = new tink.core.FutureTrigger();
		var ext = haxe.io.Path.extension(path);
		var finalPath = null;
		if(templatingEngine != null && ext != "") {
			finalPath = path;
			var this1 = this.getTemplateString(finalPath);
			this1(function(result) {
				switch(result[1]) {
				case 1:
					var err = result[2];
					tplStrReady.trigger(tink.core.Outcome.Failure(err));
					break;
				case 0:
					switch(result[2][1]) {
					case 0:
						var tpl = result[2][2];
						tplStrReady.trigger(tink.core.Outcome.Success(tpl));
						break;
					case 1:
						tplStrReady.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"Template " + path + " not found",{ fileName : "UFViewEngine.hx", lineNumber : 103, className : "ufront.view.UFViewEngine", methodName : "getTemplate"})));
						break;
					}
					break;
				}
			});
		} else if(templatingEngine != null && ext == "") {
			var exts = templatingEngine.extensions.slice();
			var testNextExtension;
			var testNextExtension1 = null;
			testNextExtension1 = function() {
				if(exts.length > 0) {
					var ext1 = exts.shift();
					finalPath = haxe.io.Path.withExtension(path,ext1);
					var this2 = _g.getTemplateString(finalPath);
					this2(function(result1) {
						switch(result1[1]) {
						case 1:
							var err1 = result1[2];
							tplStrReady.trigger(tink.core.Outcome.Failure(err1));
							break;
						case 0:
							switch(result1[2][1]) {
							case 0:
								var tpl1 = result1[2][2];
								tplStrReady.trigger(tink.core.Outcome.Success(tpl1));
								break;
							case 1:
								testNextExtension1();
								break;
							}
							break;
						}
					});
				} else tplStrReady.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"No template found for " + path + " with extensions " + Std.string(templatingEngine.extensions),{ fileName : "UFViewEngine.hx", lineNumber : 119, className : "ufront.view.UFViewEngine", methodName : "getTemplate"})));
			};
			testNextExtension = testNextExtension1;
			testNextExtension();
		} else if(templatingEngine == null && ext != "") {
			var tplEngines = this.engines.slice();
			var testNextEngine;
			var testNextEngine1 = null;
			testNextEngine1 = function() {
				if(tplEngines.length > 0) {
					var engine = tplEngines.shift();
					if(Lambda.has(engine.extensions,ext)) {
						finalPath = path;
						var this3 = _g.getTemplateString(finalPath);
						this3(function(result2) {
							switch(result2[1]) {
							case 1:
								var err2 = result2[2];
								tplStrReady.trigger(tink.core.Outcome.Failure(err2));
								break;
							case 0:
								switch(result2[2][1]) {
								case 0:
									var tpl2 = result2[2][2];
									templatingEngine = engine;
									tplStrReady.trigger(tink.core.Outcome.Success(tpl2));
									break;
								case 1:
									tplStrReady.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"Template " + path + " not found",{ fileName : "UFViewEngine.hx", lineNumber : 135, className : "ufront.view.UFViewEngine", methodName : "getTemplate"})));
									break;
								}
								break;
							}
						});
					} else testNextEngine1();
				} else tplStrReady.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"No templating engine found for " + path + " (None support extension " + ext + ")",{ fileName : "UFViewEngine.hx", lineNumber : 139, className : "ufront.view.UFViewEngine", methodName : "getTemplate"})));
			};
			testNextEngine = testNextEngine1;
			testNextEngine();
		} else if(templatingEngine == null && ext == "") {
			var tplEngines1 = this.engines.slice();
			var engine1 = null;
			var extensions = [];
			var extensionsUsed = [];
			var ext2 = null;
			var testNextEngineOrExtension;
			var testNextEngineOrExtension1 = null;
			testNextEngineOrExtension1 = function() {
				if(extensions.length == 0 && tplEngines1.length == 0) {
					tplStrReady.trigger(tink.core.Outcome.Failure(new tink.core.TypedError(null,"No template found for " + path + " with extensions " + Std.string(extensionsUsed),{ fileName : "UFViewEngine.hx", lineNumber : 153, className : "ufront.view.UFViewEngine", methodName : "getTemplate"})));
					return;
				} else if(extensions.length == 0) {
					engine1 = tplEngines1.shift();
					extensions = engine1.extensions.slice();
					ext2 = extensions.shift();
				} else ext2 = extensions.shift();
				extensionsUsed.push(ext2);
				finalPath = haxe.io.Path.withExtension(path,ext2);
				var this4 = _g.getTemplateString(finalPath);
				this4(function(result3) {
					switch(result3[1]) {
					case 1:
						var err3 = result3[2];
						tplStrReady.trigger(tink.core.Outcome.Failure(err3));
						break;
					case 0:
						switch(result3[2][1]) {
						case 0:
							var tpl3 = result3[2][2];
							templatingEngine = engine1;
							tplStrReady.trigger(tink.core.Outcome.Success(tpl3));
							break;
						case 1:
							testNextEngineOrExtension1();
							break;
						}
						break;
					}
				});
				return;
			};
			testNextEngineOrExtension = testNextEngineOrExtension1;
			testNextEngineOrExtension();
		}
		return tink.core._Future.Future_Impl_._tryFailingMap(tplStrReady.future,function(tplStr) {
			try {
				var tpl4 = templatingEngine.factory(tplStr);
				var v = { a : templatingEngine.type, b : tpl4};
				_g.cache.set(path,v);
				v;
				return tink.core.Outcome.Success(tpl4);
			} catch( e ) {
				return tink.core.Outcome.Failure(tink.core.TypedError.withData(null,"Failed to pass template " + finalPath + " using " + templatingEngine.type,e,{ fileName : "UFViewEngine.hx", lineNumber : 192, className : "ufront.view.UFViewEngine", methodName : "getTemplate"}));
			}
		});
	}
	,getTemplateString: function(path) {
		return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(new tink.core.TypedError(null,"Attempting to fetch template " + path + " with UFViewEngine.  This is an abstract class, you must use one of the ViewEngine implementations.",{ fileName : "UFViewEngine.hx", lineNumber : 214, className : "ufront.view.UFViewEngine", methodName : "getTemplateString"})));
	}
	,addTemplatingEngine: function(engine) {
		this.engines.push(engine);
	}
	,__class__: ufront.view.UFViewEngine
};
ufront.view.FileViewEngine = function(cachingEnabled) {
	ufront.view.UFViewEngine.call(this,cachingEnabled);
};
$hxClasses["ufront.view.FileViewEngine"] = ufront.view.FileViewEngine;
ufront.view.FileViewEngine.__name__ = ["ufront","view","FileViewEngine"];
ufront.view.FileViewEngine.__super__ = ufront.view.UFViewEngine;
ufront.view.FileViewEngine.prototype = $extend(ufront.view.UFViewEngine.prototype,{
	scriptDir: null
	,path: null
	,isPathAbsolute: null
	,viewDirectory: null
	,get_viewDirectory: function() {
		if(this.get_isPathAbsolute()) return haxe.io.Path.addTrailingSlash(this.path); else return this.scriptDir + haxe.io.Path.addTrailingSlash(this.path);
	}
	,getTemplateString: function(viewRelativePath) {
		var fullPath = this.get_viewDirectory() + viewRelativePath;
		try {
			throw "No implementation for non-sys platforms in FileViewEngine.getTemplateString().";
		} catch( e ) {
			return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Failure(tink.core.TypedError.withData(null,"Failed to load template " + viewRelativePath,e,{ fileName : "FileViewEngine.hx", lineNumber : 49, className : "ufront.view.FileViewEngine", methodName : "getTemplateString"})));
		}
	}
	,get_isPathAbsolute: function() {
		return StringTools.startsWith(this.path,"/");
	}
	,__class__: ufront.view.FileViewEngine
	,__properties__: {get_viewDirectory:"get_viewDirectory",get_isPathAbsolute:"get_isPathAbsolute"}
});
ufront.view._TemplateData = {};
ufront.view._TemplateData.TemplateData_Impl_ = function() { };
$hxClasses["ufront.view._TemplateData.TemplateData_Impl_"] = ufront.view._TemplateData.TemplateData_Impl_;
ufront.view._TemplateData.TemplateData_Impl_.__name__ = ["ufront","view","_TemplateData","TemplateData_Impl_"];
ufront.view._TemplateData.TemplateData_Impl_._new = function(obj) {
	if(obj != null) return obj; else return { };
};
ufront.view._TemplateData.TemplateData_Impl_.toObject = function(this1) {
	return this1;
};
ufront.view._TemplateData.TemplateData_Impl_.toMap = function(this1) {
	var ret = new haxe.ds.StringMap();
	var _g = 0;
	var _g1 = Reflect.fields(this1);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		var v = Reflect.field(this1,k);
		ret.set(k,v);
		v;
	}
	return ret;
};
ufront.view._TemplateData.TemplateData_Impl_.toStringMap = function(this1) {
	return ufront.view._TemplateData.TemplateData_Impl_.toMap(this1);
};
ufront.view._TemplateData.TemplateData_Impl_.get = function(this1,key) {
	return Reflect.field(this1,key);
};
ufront.view._TemplateData.TemplateData_Impl_.exists = function(this1,key) {
	return Object.prototype.hasOwnProperty.call(this1,key);
};
ufront.view._TemplateData.TemplateData_Impl_.set = function(this1,key,val) {
	this1[key] = val;
	if(this1 != null) return this1; else return { };
};
ufront.view._TemplateData.TemplateData_Impl_.array_set = function(this1,key,val) {
	this1[key] = val;
	return val;
};
ufront.view._TemplateData.TemplateData_Impl_.setMap = function(this1,map) {
	var $it0 = map.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		ufront.view._TemplateData.TemplateData_Impl_.set(this1,k,map.get(k));
	}
	if(this1 != null) return this1; else return { };
};
ufront.view._TemplateData.TemplateData_Impl_.setObject = function(this1,d) {
	var _g = 0;
	var _g1 = Reflect.fields(d);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		ufront.view._TemplateData.TemplateData_Impl_.set(this1,k,Reflect.field(d,k));
	}
	if(this1 != null) return this1; else return { };
};
ufront.view._TemplateData.TemplateData_Impl_.fromMap = function(d) {
	var m;
	var obj = { };
	if(obj != null) m = obj; else m = { };
	ufront.view._TemplateData.TemplateData_Impl_.setMap(m,d);
	return m;
};
ufront.view._TemplateData.TemplateData_Impl_.fromStringMap = function(d) {
	return ufront.view._TemplateData.TemplateData_Impl_.fromMap(d);
};
ufront.view._TemplateData.TemplateData_Impl_.fromMany = function(dataSets) {
	var combined;
	var obj = { };
	if(obj != null) combined = obj; else combined = { };
	var $it0 = $iterator(dataSets)();
	while( $it0.hasNext() ) {
		var d = $it0.next();
		if(js.Boot.__instanceof(d,haxe.ds.StringMap)) {
			var map = d;
			ufront.view._TemplateData.TemplateData_Impl_.setMap(combined,map);
		} else {
			var obj1 = d;
			ufront.view._TemplateData.TemplateData_Impl_.setObject(combined,obj1);
		}
	}
	return combined;
};
ufront.view._TemplateData.TemplateData_Impl_.fromObject = function(d) {
	if(d != null) return d; else return { };
};
ufront.view.TemplatingEngines = function() { };
$hxClasses["ufront.view.TemplatingEngines"] = ufront.view.TemplatingEngines;
ufront.view.TemplatingEngines.__name__ = ["ufront","view","TemplatingEngines"];
ufront.view.TemplatingEngines.__properties__ = {get_haxe:"get_haxe"}
ufront.view.TemplatingEngines.get_haxe = function() {
	return { factory : function(tplString) {
		var t = new haxe.Template(tplString);
		return function(data) {
			return t.execute(data);
		};
	}, type : "haxe.Template", extensions : ["html","tpl"]};
};
ufront.view._UFTemplate = {};
ufront.view._UFTemplate.UFTemplate_Impl_ = function() { };
$hxClasses["ufront.view._UFTemplate.UFTemplate_Impl_"] = ufront.view._UFTemplate.UFTemplate_Impl_;
ufront.view._UFTemplate.UFTemplate_Impl_.__name__ = ["ufront","view","_UFTemplate","UFTemplate_Impl_"];
ufront.view._UFTemplate.UFTemplate_Impl_._new = function(cb) {
	return cb;
};
ufront.view._UFTemplate.UFTemplate_Impl_.execute = function(this1,data) {
	var cb = this1;
	return cb(data);
};
ufront.web.WrapRequired = $hxClasses["ufront.web.WrapRequired"] = { __ename__ : ["ufront","web","WrapRequired"], __constructs__ : ["WRFuture","WROutcome","WRResultOrError"] };
ufront.web.WrapRequired.WRFuture = ["WRFuture",0];
ufront.web.WrapRequired.WRFuture.toString = $estr;
ufront.web.WrapRequired.WRFuture.__enum__ = ufront.web.WrapRequired;
ufront.web.WrapRequired.WROutcome = ["WROutcome",1];
ufront.web.WrapRequired.WROutcome.toString = $estr;
ufront.web.WrapRequired.WROutcome.__enum__ = ufront.web.WrapRequired;
ufront.web.WrapRequired.WRResultOrError = ["WRResultOrError",2];
ufront.web.WrapRequired.WRResultOrError.toString = $estr;
ufront.web.WrapRequired.WRResultOrError.__enum__ = ufront.web.WrapRequired;
ufront.web.WrapRequired.__empty_constructs__ = [ufront.web.WrapRequired.WRFuture,ufront.web.WrapRequired.WROutcome,ufront.web.WrapRequired.WRResultOrError];
ufront.web.Dispatch = function(url,params,method) {
	haxe.web.Dispatch.call(this,url,params);
	this.onProcessDispatchRequestTrigger = tink.core._Signal.Signal_Impl_.trigger();
	this.onProcessDispatchRequest = tink.core._Signal.SignalTrigger_Impl_.asSignal(this.onProcessDispatchRequestTrigger);
	if(method != null) this.method = method.toLowerCase(); else this.method = null;
	this.controller = null;
	this.action = null;
	this["arguments"] = null;
};
$hxClasses["ufront.web.Dispatch"] = ufront.web.Dispatch;
ufront.web.Dispatch.__name__ = ["ufront","web","Dispatch"];
ufront.web.Dispatch.__super__ = haxe.web.Dispatch;
ufront.web.Dispatch.prototype = $extend(haxe.web.Dispatch.prototype,{
	method: null
	,controller: null
	,action: null
	,'arguments': null
	,onProcessDispatchRequest: null
	,onProcessDispatchRequestTrigger: null
	,resolveNames: function(name) {
		var arr = [];
		if(this.method != null) arr.push(this.method + "_" + name);
		arr.push(name);
		return arr;
	}
	,processDispatchRequest: function(cfg) {
		var partName = this.parts.shift();
		if(partName == null || partName == "") partName = "default";
		var names = this.resolveNames("do" + partName);
		this.cfg = cfg;
		var name = null;
		var r = null;
		var _g = 0;
		while(_g < names.length) {
			var n = names[_g];
			++_g;
			var _g1 = 0;
			var _g2 = Reflect.fields(cfg.rules);
			while(_g1 < _g2.length) {
				var fieldName = _g2[_g1];
				++_g1;
				var lcName = fieldName.toLowerCase();
				if(lcName == n.toLowerCase()) {
					r = Reflect.field(cfg.rules,fieldName);
					name = fieldName;
					break;
				}
			}
			if(name != null) break;
		}
		if(r == null) {
			r = Reflect.field(cfg.rules,"doDefault");
			if(r == null) throw haxe.web.DispatchError.DENotFound(name);
			this.parts.unshift(partName);
			name = "doDefault";
		}
		var args = [];
		this.subDispatch = false;
		this.loop(args,r);
		if(this.parts.length > 0 && !this.subDispatch) {
			if(this.parts.length == 1 && this.parts[this.parts.length - 1] == "") this.parts.pop(); else throw haxe.web.DispatchError.DETooManyValues;
		}
		this.controller = cfg.obj;
		this.action = name;
		this["arguments"] = args;
		tink.core._Callback.CallbackList_Impl_.invoke(this.onProcessDispatchRequestTrigger,null);
	}
	,executeDispatchRequest: function() {
		if(this.controller == null || this.action == null || this["arguments"] == null) throw haxe.web.DispatchError.DEMissing;
		var actionMethod = Reflect.field(this.controller,this.action);
		return actionMethod.apply(this.controller,this["arguments"]);
	}
	,runtimeDispatch: function(cfg) {
		this.runtimeReturnDispatch(cfg);
	}
	,runtimeReturnDispatch: function(cfg) {
		this.processDispatchRequest(cfg);
		try {
			return this.executeDispatchRequest();
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.web.Redirect) ) {
				this.processDispatchRequest(cfg);
				return this.executeDispatchRequest();
			} else throw(e);
		}
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,__class__: ufront.web.Dispatch
});
ufront.web.HttpCookie = function(name,value,expires,domain,path,secure,httpOnly) {
	if(httpOnly == null) httpOnly = false;
	if(secure == null) secure = false;
	this.name = name;
	this.set_value(value);
	this.expires = expires;
	this.domain = domain;
	this.path = path;
	this.secure = secure;
	this.httpOnly = httpOnly;
};
$hxClasses["ufront.web.HttpCookie"] = ufront.web.HttpCookie;
ufront.web.HttpCookie.__name__ = ["ufront","web","HttpCookie"];
ufront.web.HttpCookie.addPair = function(buf,name,value,allowNullValue) {
	if(allowNullValue == null) allowNullValue = false;
	if(!allowNullValue && null == value) return;
	buf.b += "; ";
	if(name == null) buf.b += "null"; else buf.b += "" + name;
	if(null == value) return;
	buf.b += "=";
	if(value == null) buf.b += "null"; else buf.b += "" + value;
};
ufront.web.HttpCookie.prototype = {
	domain: null
	,expires: null
	,name: null
	,path: null
	,secure: null
	,httpOnly: null
	,value: null
	,expireNow: function() {
		var d = new Date();
		d.setTime(0);
		this.expires = d;
	}
	,toString: function() {
		return "" + this.name + ": " + this.get_description();
	}
	,setName: function(v) {
		if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpCookie.hx", lineNumber : 60, className : "ufront.web.HttpCookie", methodName : "setName"});
		return this.name = v;
	}
	,set_value: function(v) {
		if(null == v) throw new thx.error.NullArgument("v","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpCookie.hx", lineNumber : 65, className : "ufront.web.HttpCookie", methodName : "set_value"});
		return this.value = v;
	}
	,get_description: function() {
		var buf = new StringBuf();
		buf.b += Std.string(this.value);
		if(this.expires != null) ufront.web.HttpCookie.addPair(buf,"expires",Dates.format(this.expires,"%a, %d-%b-%Y %T %Z"));
		ufront.web.HttpCookie.addPair(buf,"domain",this.domain);
		ufront.web.HttpCookie.addPair(buf,"path",this.path);
		if(this.secure) ufront.web.HttpCookie.addPair(buf,"secure",null,true);
		return buf.b;
	}
	,__class__: ufront.web.HttpCookie
	,__properties__: {get_description:"get_description",set_value:"set_value"}
};
ufront.web.HttpError = function() { };
$hxClasses["ufront.web.HttpError"] = ufront.web.HttpError;
ufront.web.HttpError.__name__ = ["ufront","web","HttpError"];
ufront.web.HttpError.wrap = function(e,msg,pos) {
	if(msg == null) msg = "Internal Server Error";
	if(js.Boot.__instanceof(e,tink.core.TypedError)) return e; else return tink.core.TypedError.withData(500,msg,e,pos);
};
ufront.web.HttpError.badRequest = function(reason,pos) {
	var message = "Bad Request";
	if(reason != null) message += ": " + reason;
	return new tink.core.TypedError(400,message,pos);
};
ufront.web.HttpError.internalServerError = function(msg,inner,pos) {
	if(msg == null) msg = "Internal Server Error";
	return tink.core.TypedError.withData(500,msg,inner,pos);
};
ufront.web.HttpError.methodNotAllowed = function(pos) {
	return new tink.core.TypedError(405,"Method Not Allowed",pos);
};
ufront.web.HttpError.pageNotFound = function(pos) {
	return new tink.core.TypedError(404,"Page Not Found",pos);
};
ufront.web.HttpError.unauthorized = function(pos) {
	return new tink.core.TypedError(401,"Unauthorized Access",pos);
};
ufront.web.HttpError.unprocessableEntity = function(pos) {
	return new tink.core.TypedError(422,"Unprocessable Entity",pos);
};
ufront.web.HttpError.fakePosition = function(obj,method,args) {
	return { methodName : method, lineNumber : -1, fileName : "", customParams : args, className : Type.getClassName(Type.getClass(obj))};
};
ufront.web.DefaultUfrontConfiguration = function() { };
$hxClasses["ufront.web.DefaultUfrontConfiguration"] = ufront.web.DefaultUfrontConfiguration;
ufront.web.DefaultUfrontConfiguration.__name__ = ["ufront","web","DefaultUfrontConfiguration"];
ufront.web.DefaultUfrontConfiguration.get = function() {
	var inlineSession = new ufront.middleware.InlineSessionMiddleware();
	var uploadMiddleware = new ufront.web.upload.TmpFileUploadMiddleware();
	return { indexController : ufront.web.DefaultUfrontController, remotingApi : null, urlRewrite : true, basePath : "/", contentDirectory : "uf-content", logFile : null, disableBrowserTrace : false, controllers : CompileTimeClassList.get("null,true,ufront.web.Controller"), apis : CompileTimeClassList.get("null,true,ufront.api.UFApi"), viewEngine : ufront.view.FileViewEngine, templatingEngines : [ufront.view.TemplatingEngines.get_haxe()], viewPath : "view/", defaultLayout : null, sessionImplementation : ufront.web.session.FileSession, requestMiddleware : [uploadMiddleware,inlineSession], responseMiddleware : [inlineSession,uploadMiddleware], errorHandlers : [new ufront.handler.ErrorPageHandler()], authImplementation : ufront.auth.YesBossAuthHandler};
};
ufront.web.DefaultUfrontController = function() {
	ufront.web.Controller.call(this);
};
$hxClasses["ufront.web.DefaultUfrontController"] = ufront.web.DefaultUfrontController;
ufront.web.DefaultUfrontController.__name__ = ["ufront","web","DefaultUfrontController"];
ufront.web.DefaultUfrontController.__super__ = ufront.web.Controller;
ufront.web.DefaultUfrontController.prototype = $extend(ufront.web.Controller.prototype,{
	showMessage: function() {
		this.ufTrace("Your Ufront App is almost ready.",{ fileName : "UfrontConfiguration.hx", lineNumber : 254, className : "ufront.web.DefaultUfrontController", methodName : "showMessage"});
		return "<!DOCTYPE html>\n<html>\n<head>\n\t<title>New Ufront App</title>\n\t<link href=\"http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" />\n</head>\n<body style=\"padding-top: 30px;\">\n\t<div class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t<h1>Almost done!</h1>\n\t\t\t<p>Your new Ufront App is almost ready to go. You will need to add some routes and let ufront know about them:</p>\n\t\t\t<pre><code>\n\tapp = new UfrontApplication({\n\t\tindexController: MySiteController,\n\t});\n\tapp.execute();\n\t\t\t</code></pre>\n\t\t\t<p>See the Getting Started tutorial for more information.</p>\n\t\t</div>\n\t</div>\n</body>\n</html>";
	}
	,execute: function() {
		var uriParts = this.context.actionContext.get_uriParts();
		this.setBaseUri(uriParts);
		var params = this.context.request.get_params();
		var method = this.context.request.get_httpMethod();
		this.context.actionContext.controller = this;
		this.context.actionContext.action = "execute";
		try {
			this.context.actionContext.action = "showMessage";
			this.context.actionContext.args = [];
			this.context.actionContext.get_uriParts().splice(0,0);
			var wrappingRequired = haxe.rtti.Meta.getFields(ufront.web.DefaultUfrontController).showMessage.wrapResult[0];
			var result = this.wrapResult(this.showMessage(),wrappingRequired);
			this.setContextActionResultWhenFinished(result);
			return result;
			throw ufront.web.HttpError.pageNotFound({ fileName : "ControllerMacros.hx", lineNumber : 433, className : "ufront.web.DefaultUfrontController", methodName : "execute"});
		} catch( e ) {
			return ufront.core.Sync.httpError("Uncaught error while executing " + Std.string(this.context.actionContext.controller) + "." + this.context.actionContext.action + "()",e,{ fileName : "ControllerMacros.hx", lineNumber : 436, className : "ufront.web.DefaultUfrontController", methodName : "execute"});
		}
	}
	,__class__: ufront.web.DefaultUfrontController
});
ufront.web.UserAgent = function(browser,version,majorVersion,minorVersion,platform) {
	this.browser = browser;
	this.version = version;
	this.majorVersion = majorVersion;
	this.minorVersion = minorVersion;
	this.platform = platform;
};
$hxClasses["ufront.web.UserAgent"] = ufront.web.UserAgent;
ufront.web.UserAgent.__name__ = ["ufront","web","UserAgent"];
ufront.web.UserAgent.fromString = function(s) {
	var ua = new ufront.web.UserAgent("unknown","",0,0,"unknown");
	var info = ufront.web.UserAgent.searchString(ufront.web.UserAgent.dataBrowser,s);
	if(null != info) {
		ua.browser = info.app;
		var version = ufront.web.UserAgent.extractVersion(info.versionString,s);
		if(null != version) {
			ua.version = version.version;
			ua.majorVersion = version.majorVersion;
			ua.minorVersion = version.minorVersion;
		}
	}
	var info1 = ufront.web.UserAgent.searchString(ufront.web.UserAgent.dataOS,s);
	if(null != info1) ua.platform = info1.app;
	return ua;
};
ufront.web.UserAgent.extractVersion = function(searchString,s) {
	var index = s.indexOf(searchString);
	if(index < 0) return null;
	var re = new EReg("(\\d+)\\.(\\d+)[^ ();]*","");
	if(!re.match(HxOverrides.substr(s,index + searchString.length + 1,null))) return null;
	return { version : re.matched(0), majorVersion : Std.parseInt(re.matched(1)), minorVersion : Std.parseInt(re.matched(2))};
};
ufront.web.UserAgent.searchString = function(data,s) {
	var _g = 0;
	while(_g < data.length) {
		var d = data[_g];
		++_g;
		if(s.indexOf(d.subString) >= 0) return { app : d.identity, versionString : null == d.versionSearch?d.identity:d.versionSearch};
	}
	return null;
};
ufront.web.UserAgent.prototype = {
	browser: null
	,version: null
	,majorVersion: null
	,minorVersion: null
	,platform: null
	,toString: function() {
		return this.browser + " v." + this.majorVersion + "." + this.minorVersion + " (" + this.version + ") on " + this.platform;
	}
	,__class__: ufront.web.UserAgent
};
ufront.web.context.ActionContext = function(httpContext) {
	if(null == httpContext) throw new thx.error.NullArgument("httpContext","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "ActionContext.hx", lineNumber : 48, className : "ufront.web.context.ActionContext", methodName : "new"});
	this.httpContext = httpContext;
};
$hxClasses["ufront.web.context.ActionContext"] = ufront.web.context.ActionContext;
ufront.web.context.ActionContext.__name__ = ["ufront","web","context","ActionContext"];
ufront.web.context.ActionContext.prototype = {
	httpContext: null
	,handler: null
	,controller: null
	,action: null
	,args: null
	,actionResult: null
	,uriParts: null
	,get_uriParts: function() {
		if(this.uriParts == null) {
			this.uriParts = this.httpContext.getRequestUri().split("/");
			if(this.uriParts.length > 0 && this.uriParts[0] == "") this.uriParts.shift();
			if(this.uriParts.length > 0 && this.uriParts[this.uriParts.length - 1] == "") this.uriParts.pop();
		}
		return this.uriParts;
	}
	,toString: function() {
		return "ActionContext(" + Std.string(this.controller) + ", " + this.action + ", " + Std.string(this.args) + ")";
	}
	,__class__: ufront.web.context.ActionContext
	,__properties__: {get_uriParts:"get_uriParts"}
};
ufront.web.context.HttpContext = function(request,response,appInjector,session,auth,urlFilters,relativeContentDir) {
	if(relativeContentDir == null) relativeContentDir = "uf-content";
	if(null == response) throw new thx.error.NullArgument("response","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpContext.hx", lineNumber : 66, className : "ufront.web.context.HttpContext", methodName : "new"});
	if(null == request) throw new thx.error.NullArgument("request","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "HttpContext.hx", lineNumber : 67, className : "ufront.web.context.HttpContext", methodName : "new"});
	this.request = request;
	this.response = response;
	if(urlFilters != null) this.urlFilters = urlFilters; else this.urlFilters = [];
	this.relativeContentDir = relativeContentDir;
	this.actionContext = new ufront.web.context.ActionContext(this);
	this.messages = [];
	this.completion = 0;
	if(appInjector != null) this.injector = appInjector.createChildInjector(); else this.injector = new minject.Injector();
	this.injector.mapValue(ufront.web.context.HttpContext,this);
	this.injector.mapValue(ufront.web.context.HttpRequest,request);
	this.injector.mapValue(ufront.web.context.HttpResponse,response);
	this.injector.mapValue(ufront.web.context.ActionContext,this.actionContext);
	this.injector.mapValue(ufront.log.MessageList,new ufront.log.MessageList(this.messages));
	if(session != null) this.session = session;
	if(this.session == null) try {
		this.session = this.injector.getInstance(ufront.web.session.UFHttpSession);
	} catch( e ) {
		this.ufLog("Failed to load UFHttpSession: " + Std.string(e) + ". Using VoidSession instead.",{ fileName : "HttpContext.hx", lineNumber : 86, className : "ufront.web.context.HttpContext", methodName : "new"});
	}
	if(this.session == null) this.session = new ufront.web.session.VoidSession();
	ufront.core.InjectionTools.inject(this.injector,ufront.web.session.UFHttpSession,this.session);
	if(auth != null) this.auth = auth;
	if(this.auth == null) try {
		this.auth = this.injector.getInstance(ufront.auth.UFAuthHandler);
	} catch( e1 ) {
		this.ufLog("Failed to load UFAuthHandler: " + Std.string(e1) + ". Using NobodyAuthHandler instead.",{ fileName : "HttpContext.hx", lineNumber : 93, className : "ufront.web.context.HttpContext", methodName : "new"});
	}
	if(this.auth == null) this.auth = new ufront.auth.NobodyAuthHandler();
	ufront.core.InjectionTools.inject(this.injector,ufront.auth.UFAuthHandler,this.auth);
};
$hxClasses["ufront.web.context.HttpContext"] = ufront.web.context.HttpContext;
ufront.web.context.HttpContext.__name__ = ["ufront","web","context","HttpContext"];
ufront.web.context.HttpContext.prototype = {
	injector: null
	,request: null
	,response: null
	,session: null
	,sessionID: null
	,auth: null
	,currentUser: null
	,currentUserID: null
	,actionContext: null
	,completion: null
	,urlFilters: null
	,_requestUri: null
	,getRequestUri: function() {
		if(null == this._requestUri) {
			var url = ufront.web.url.PartialUrl.parse(this.request.get_uri());
			var $it0 = $iterator(this.urlFilters)();
			while( $it0.hasNext() ) {
				var filter = $it0.next();
				filter.filterIn(url,this.request);
			}
			this._requestUri = url.toString();
		}
		return this._requestUri;
	}
	,generateUri: function(uri) {
		var uriOut = ufront.web.url.VirtualUrl.parse(uri);
		var filters = this.urlFilters;
		var i = filters.length - 1;
		while(i >= 0) filters[i--].filterOut(uriOut,this.request);
		return uriOut.toString();
	}
	,setUrlFilters: function(filters) {
		if(filters != null) this.urlFilters = filters; else this.urlFilters = [];
		this._requestUri = null;
	}
	,contentDirectory: null
	,relativeContentDir: null
	,_contentDir: null
	,get_contentDirectory: function() {
		if(this._contentDir == null) {
			if(this.request.get_scriptDirectory() != null) this._contentDir = haxe.io.Path.addTrailingSlash(this.request.get_scriptDirectory()) + haxe.io.Path.addTrailingSlash(this.relativeContentDir); else this._contentDir = haxe.io.Path.addTrailingSlash(this.relativeContentDir);
		}
		return this._contentDir;
	}
	,commitSession: function() {
		if(this.session != null) return this.session.commit(); else return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(tink.core.Noise.Noise));
	}
	,ufTrace: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Trace});
	}
	,ufLog: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Log});
	}
	,ufWarn: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Warning});
	}
	,ufError: function(msg,pos) {
		this.messages.push({ msg : msg, pos : pos, type : ufront.log.MessageType.Error});
	}
	,messages: null
	,get_sessionID: function() {
		if(null != this.session) return this.session.get_id(); else return null;
	}
	,get_currentUser: function() {
		if(null != this.auth) return this.auth.get_currentUser(); else return null;
	}
	,get_currentUserID: function() {
		if(this.auth != null && this.auth.get_currentUser() != null) return this.auth.get_currentUser().get_userID(); else return null;
	}
	,__class__: ufront.web.context.HttpContext
	,__properties__: {get_contentDirectory:"get_contentDirectory",get_currentUserID:"get_currentUserID",get_currentUser:"get_currentUser",get_sessionID:"get_sessionID"}
};
ufront.web.context.RequestCompletion = $hxClasses["ufront.web.context.RequestCompletion"] = { __ename__ : ["ufront","web","context","RequestCompletion"], __constructs__ : ["CRequestMiddlewareComplete","CRequestHandlersComplete","CResponseMiddlewareComplete","CLogHandlersComplete","CFlushComplete","CErrorHandlersComplete"] };
ufront.web.context.RequestCompletion.CRequestMiddlewareComplete = ["CRequestMiddlewareComplete",0];
ufront.web.context.RequestCompletion.CRequestMiddlewareComplete.toString = $estr;
ufront.web.context.RequestCompletion.CRequestMiddlewareComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.CRequestHandlersComplete = ["CRequestHandlersComplete",1];
ufront.web.context.RequestCompletion.CRequestHandlersComplete.toString = $estr;
ufront.web.context.RequestCompletion.CRequestHandlersComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.CResponseMiddlewareComplete = ["CResponseMiddlewareComplete",2];
ufront.web.context.RequestCompletion.CResponseMiddlewareComplete.toString = $estr;
ufront.web.context.RequestCompletion.CResponseMiddlewareComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.CLogHandlersComplete = ["CLogHandlersComplete",3];
ufront.web.context.RequestCompletion.CLogHandlersComplete.toString = $estr;
ufront.web.context.RequestCompletion.CLogHandlersComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.CFlushComplete = ["CFlushComplete",4];
ufront.web.context.RequestCompletion.CFlushComplete.toString = $estr;
ufront.web.context.RequestCompletion.CFlushComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.CErrorHandlersComplete = ["CErrorHandlersComplete",5];
ufront.web.context.RequestCompletion.CErrorHandlersComplete.toString = $estr;
ufront.web.context.RequestCompletion.CErrorHandlersComplete.__enum__ = ufront.web.context.RequestCompletion;
ufront.web.context.RequestCompletion.__empty_constructs__ = [ufront.web.context.RequestCompletion.CRequestMiddlewareComplete,ufront.web.context.RequestCompletion.CRequestHandlersComplete,ufront.web.context.RequestCompletion.CResponseMiddlewareComplete,ufront.web.context.RequestCompletion.CLogHandlersComplete,ufront.web.context.RequestCompletion.CFlushComplete,ufront.web.context.RequestCompletion.CErrorHandlersComplete];
ufront.web.result.ContentResult = function(content,contentType) {
	this.content = content;
	this.contentType = contentType;
};
$hxClasses["ufront.web.result.ContentResult"] = ufront.web.result.ContentResult;
ufront.web.result.ContentResult.__name__ = ["ufront","web","result","ContentResult"];
ufront.web.result.ContentResult.__super__ = ufront.web.result.ActionResult;
ufront.web.result.ContentResult.prototype = $extend(ufront.web.result.ActionResult.prototype,{
	content: null
	,contentType: null
	,executeResult: function(actionContext) {
		if(null != this.contentType) actionContext.httpContext.response.set_contentType(this.contentType);
		actionContext.httpContext.response.write(this.content);
		return ufront.core.Sync.success();
	}
	,__class__: ufront.web.result.ContentResult
});
ufront.web.result.EmptyResult = function(preventFlush) {
	if(preventFlush == null) preventFlush = false;
	this.preventFlush = preventFlush;
};
$hxClasses["ufront.web.result.EmptyResult"] = ufront.web.result.EmptyResult;
ufront.web.result.EmptyResult.__name__ = ["ufront","web","result","EmptyResult"];
ufront.web.result.EmptyResult.__super__ = ufront.web.result.ActionResult;
ufront.web.result.EmptyResult.prototype = $extend(ufront.web.result.ActionResult.prototype,{
	preventFlush: null
	,executeResult: function(actionContext) {
		if(this.preventFlush) actionContext.httpContext.response.preventFlush();
		return ufront.core.Sync.success();
	}
	,__class__: ufront.web.result.EmptyResult
});
ufront.web.session = {};
ufront.web.session.UFHttpSession = function() { };
$hxClasses["ufront.web.session.UFHttpSession"] = ufront.web.session.UFHttpSession;
ufront.web.session.UFHttpSession.__name__ = ["ufront","web","session","UFHttpSession"];
ufront.web.session.UFHttpSession.prototype = {
	id: null
	,init: null
	,clear: null
	,get: null
	,set: null
	,exists: null
	,remove: null
	,isActive: null
	,close: null
	,setExpiry: null
	,commit: null
	,triggerCommit: null
	,regenerateID: null
	,__class__: ufront.web.session.UFHttpSession
};
ufront.web.session.FileSession = function() {
	this.started = false;
	this.commitFlag = false;
	this.closeFlag = false;
	this.regenerateFlag = false;
	this.expiryFlag = false;
	this.sessionData = null;
	this.sessionID = null;
	this.oldSessionID = null;
};
$hxClasses["ufront.web.session.FileSession"] = ufront.web.session.FileSession;
ufront.web.session.FileSession.__name__ = ["ufront","web","session","FileSession"];
ufront.web.session.FileSession.__interfaces__ = [ufront.web.session.UFHttpSession];
ufront.web.session.FileSession.testValidId = function(id) {
	if(id != null) {
		if(!ufront.web.session.FileSession.validID.match(id)) throw "Invalid session ID.";
	}
};
ufront.web.session.FileSession.prototype = {
	started: null
	,commitFlag: null
	,closeFlag: null
	,regenerateFlag: null
	,expiryFlag: null
	,sessionID: null
	,oldSessionID: null
	,sessionData: null
	,context: null
	,injectConfig: function() {
		if(this.context.injector.hasMapping(String,"sessionName")) this.sessionName = this.context.injector.getInstance(String,"sessionName"); else this.sessionName = ufront.web.session.FileSession.defaultSessionName;
		if(this.context.injector.hasMapping(ufront.core.InjectionRef,"sessionExpiry")) this.expiry = this.context.injector.getInstance(ufront.core.InjectionRef,"sessionExpiry").get(); else this.expiry = ufront.web.session.FileSession.defaultExpiry;
		if(this.context.injector.hasMapping(String,"sessionSavePath")) this.savePath = this.context.injector.getInstance(String,"sessionSavePath"); else this.savePath = ufront.web.session.FileSession.defaultSavePath;
		this.savePath = haxe.io.Path.addTrailingSlash(this.savePath);
		if(!StringTools.startsWith(this.savePath,"/")) this.savePath = this.context.get_contentDirectory() + this.savePath;
	}
	,sessionName: null
	,expiry: null
	,savePath: null
	,setExpiry: function(e) {
		this.expiry = e;
	}
	,init: function() {
		throw "Not implemented";
	}
	,setCookie: function(id,expiryLength) {
		var expireAt;
		if(expiryLength <= 0) expireAt = null; else expireAt = DateTools.delta(new Date(),1000.0 * expiryLength);
		var path = "/";
		var domain = null;
		var secure = false;
		var sessionCookie = new ufront.web.HttpCookie(this.sessionName,id,expireAt,domain,path,secure);
		if(expiryLength < 0) sessionCookie.expireNow();
		this.context.response.setCookie(sessionCookie);
	}
	,commit: function() {
		throw "Not implemented";
	}
	,get: function(name) {
		if(!this.started) throw "Trying to access session data before calling init()";
		if(this.sessionData != null) return this.sessionData.get(name); else return null;
	}
	,set: function(name,value) {
		this.init();
		if(this.sessionData != null) {
			this.sessionData.set(name,value);
			this.commitFlag = true;
		}
	}
	,exists: function(name) {
		if(!(this.started && this.get_id() != null)) return false;
		if(!this.started) throw "Trying to access session data before calling init()";
		return this.sessionData != null && this.sessionData.exists(name);
	}
	,remove: function(name) {
		if(!this.started) throw "Trying to access session data before calling init()";
		if(this.sessionData != null) {
			this.sessionData.remove(name);
			this.commitFlag = true;
		}
	}
	,clear: function() {
		if(this.sessionData != null && (this.started && this.get_id() != null)) {
			this.sessionData = new haxe.ds.StringMap();
			this.commitFlag = true;
		}
	}
	,triggerCommit: function() {
		this.commitFlag = true;
	}
	,regenerateID: function() {
		var t = new tink.core.FutureTrigger();
		this.oldSessionID = this.sessionID;
		this.sessionID = Random.string(40);
		this.regenerateFlag = true;
		t.trigger(tink.core.Outcome.Success(this.sessionID));
		return t.future;
	}
	,isActive: function() {
		return this.started && this.get_id() != null;
	}
	,get_id: function() {
		if(this.sessionID == null) this.sessionID = ufront.core._MultiValueMap.MultiValueMap_Impl_.get(this.context.request.get_cookies(),this.sessionName);
		if(this.sessionID == null) this.sessionID = ufront.core._MultiValueMap.MultiValueMap_Impl_.get(this.context.request.get_params(),this.sessionName);
		return this.sessionID;
	}
	,close: function() {
		this.init();
		this.sessionData = null;
		this.closeFlag = true;
	}
	,toString: function() {
		if(this.sessionData != null) return this.sessionData.toString(); else return "{}";
	}
	,getSessionFilePath: function(id) {
		return "" + this.savePath + id + ".sess";
	}
	,generateSessionID: function() {
		return Random.string(40);
	}
	,checkStarted: function() {
		if(!this.started) throw "Trying to access session data before calling init()";
	}
	,__class__: ufront.web.session.FileSession
	,__properties__: {get_id:"get_id"}
};
ufront.web.session.VoidSession = function() {
};
$hxClasses["ufront.web.session.VoidSession"] = ufront.web.session.VoidSession;
ufront.web.session.VoidSession.__name__ = ["ufront","web","session","VoidSession"];
ufront.web.session.VoidSession.__interfaces__ = [ufront.web.session.UFHttpSession];
ufront.web.session.VoidSession.prototype = {
	id: null
	,setExpiry: function(e) {
	}
	,init: function() {
		return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(tink.core.Noise.Noise));
	}
	,commit: function() {
		return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(tink.core.Noise.Noise));
	}
	,triggerCommit: function() {
	}
	,isActive: function() {
		return false;
	}
	,get: function(name) {
		return null;
	}
	,set: function(name,value) {
	}
	,exists: function(name) {
		return false;
	}
	,remove: function(name) {
	}
	,clear: function() {
	}
	,regenerateID: function() {
		return tink.core._Future.Future_Impl_.sync(tink.core.Outcome.Success(""));
	}
	,close: function() {
	}
	,get_id: function() {
		return "";
	}
	,__class__: ufront.web.session.VoidSession
	,__properties__: {get_id:"get_id"}
};
ufront.web.upload = {};
ufront.web.upload.FileUpload = function() { };
$hxClasses["ufront.web.upload.FileUpload"] = ufront.web.upload.FileUpload;
ufront.web.upload.FileUpload.__name__ = ["ufront","web","upload","FileUpload"];
ufront.web.upload.FileUpload.prototype = {
	postName: null
	,originalFileName: null
	,size: null
	,getBytes: null
	,getString: null
	,writeToFile: null
	,process: null
	,__class__: ufront.web.upload.FileUpload
};
ufront.web.upload.TmpFileUploadMiddleware = function() {
	this.files = [];
};
$hxClasses["ufront.web.upload.TmpFileUploadMiddleware"] = ufront.web.upload.TmpFileUploadMiddleware;
ufront.web.upload.TmpFileUploadMiddleware.__name__ = ["ufront","web","upload","TmpFileUploadMiddleware"];
ufront.web.upload.TmpFileUploadMiddleware.__interfaces__ = [ufront.app.UFMiddleware];
ufront.web.upload.TmpFileUploadMiddleware.prototype = {
	files: null
	,requestIn: function(ctx) {
		if(ctx.request.get_httpMethod().toLowerCase() == "post" && ctx.request.isMultipart()) throw "Not implemented"; else return ufront.core.Sync.success();
	}
	,responseOut: function(ctx) {
		if(ctx.request.get_httpMethod().toLowerCase() == "post" && ctx.request.isMultipart()) {
			var errors = [];
			var _g = 0;
			var _g1 = this.files;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				{
					var _g2 = f.deleteTemporaryFile();
					switch(_g2[1]) {
					case 1:
						var e = _g2[2];
						errors.push(e);
						break;
					default:
					}
				}
			}
			if(errors.length > 0) return ufront.core.Sync.httpError("Failed to delete one or more temporary upload files",errors,{ fileName : "TmpFileUploadMiddleware.hx", lineNumber : 123, className : "ufront.web.upload.TmpFileUploadMiddleware", methodName : "responseOut"});
		}
		return ufront.core.Sync.success();
	}
	,__class__: ufront.web.upload.TmpFileUploadMiddleware
};
ufront.web.upload.TmpFileUploadSync = function(tmpFileName,postName,originalFileName,size) {
	this.postName = postName;
	this.originalFileName = haxe.io.Path.withoutDirectory(originalFileName);
	this.size = size;
	this.tmpFileName = tmpFileName;
};
$hxClasses["ufront.web.upload.TmpFileUploadSync"] = ufront.web.upload.TmpFileUploadSync;
ufront.web.upload.TmpFileUploadSync.__name__ = ["ufront","web","upload","TmpFileUploadSync"];
ufront.web.upload.TmpFileUploadSync.__interfaces__ = [ufront.web.upload.FileUpload];
ufront.web.upload.TmpFileUploadSync.prototype = {
	postName: null
	,originalFileName: null
	,size: null
	,tmpFileName: null
	,getBytes: function() {
		throw "Not implemented";
	}
	,getString: function() {
		throw "Not implemented";
	}
	,writeToFile: function(newFilePath) {
		throw "Not implemented";
	}
	,process: function(onData,partSize) {
		throw "Not implemented";
	}
	,deleteTemporaryFile: function() {
		throw "Not implemented";
	}
	,__class__: ufront.web.upload.TmpFileUploadSync
};
ufront.web.url = {};
ufront.web.url.PartialUrl = function() {
	this.segments = [];
	this.query = new thx.collection.HashList();
	this.fragment = null;
};
$hxClasses["ufront.web.url.PartialUrl"] = ufront.web.url.PartialUrl;
ufront.web.url.PartialUrl.__name__ = ["ufront","web","url","PartialUrl"];
ufront.web.url.PartialUrl.parse = function(url) {
	var u = new ufront.web.url.PartialUrl();
	ufront.web.url.PartialUrl.feed(u,url);
	return u;
};
ufront.web.url.PartialUrl.feed = function(u,url) {
	var parts = url.split("#");
	if(parts.length > 1) u.fragment = parts[1];
	parts = parts[0].split("?");
	if(parts.length > 1) {
		var pairs = parts[1].split("&");
		var _g = 0;
		while(_g < pairs.length) {
			var s = pairs[_g];
			++_g;
			var pair = s.split("=");
			u.query.set(pair[0],{ value : pair[1], encoded : true});
		}
	}
	var segments = parts[0].split("/");
	if(segments[0] == "") segments.shift();
	if(segments.length == 1 && segments[0] == "") segments.pop();
	u.segments = segments;
};
ufront.web.url.PartialUrl.prototype = {
	segments: null
	,query: null
	,fragment: null
	,queryString: function() {
		var params = [];
		var $it0 = this.query.keys();
		while( $it0.hasNext() ) {
			var param = $it0.next();
			var item = this.query.get(param);
			params.push(param + "=" + (item.encoded?item.value:encodeURIComponent(item.value)));
		}
		return params.join("&");
	}
	,toString: function() {
		var url = "/" + this.segments.join("/");
		var qs = this.queryString();
		if(qs.length > 0) url += "?" + qs;
		if(null != this.fragment) url += "#" + this.fragment;
		return url;
	}
	,__class__: ufront.web.url.PartialUrl
};
ufront.web.url.UrlDirection = $hxClasses["ufront.web.url.UrlDirection"] = { __ename__ : ["ufront","web","url","UrlDirection"], __constructs__ : ["IncomingUrlRequest","UrlGeneration"] };
ufront.web.url.UrlDirection.IncomingUrlRequest = ["IncomingUrlRequest",0];
ufront.web.url.UrlDirection.IncomingUrlRequest.toString = $estr;
ufront.web.url.UrlDirection.IncomingUrlRequest.__enum__ = ufront.web.url.UrlDirection;
ufront.web.url.UrlDirection.UrlGeneration = ["UrlGeneration",1];
ufront.web.url.UrlDirection.UrlGeneration.toString = $estr;
ufront.web.url.UrlDirection.UrlGeneration.__enum__ = ufront.web.url.UrlDirection;
ufront.web.url.UrlDirection.__empty_constructs__ = [ufront.web.url.UrlDirection.IncomingUrlRequest,ufront.web.url.UrlDirection.UrlGeneration];
ufront.web.url.VirtualUrl = function() {
	ufront.web.url.PartialUrl.call(this);
	this.isPhysical = false;
};
$hxClasses["ufront.web.url.VirtualUrl"] = ufront.web.url.VirtualUrl;
ufront.web.url.VirtualUrl.__name__ = ["ufront","web","url","VirtualUrl"];
ufront.web.url.VirtualUrl.parse = function(url) {
	var u = new ufront.web.url.VirtualUrl();
	ufront.web.url.VirtualUrl.feed(u,url);
	return u;
};
ufront.web.url.VirtualUrl.feed = function(u,url) {
	ufront.web.url.PartialUrl.feed(u,url);
	if(u.segments[0] == "~") {
		u.segments.shift();
		if(u.segments.length == 1 && u.segments[0] == "") u.segments.pop();
		u.isPhysical = true;
	} else u.isPhysical = false;
};
ufront.web.url.VirtualUrl.__super__ = ufront.web.url.PartialUrl;
ufront.web.url.VirtualUrl.prototype = $extend(ufront.web.url.PartialUrl.prototype,{
	isPhysical: null
	,__class__: ufront.web.url.VirtualUrl
});
ufront.web.url.filter = {};
ufront.web.url.filter.UFUrlFilter = function() { };
$hxClasses["ufront.web.url.filter.UFUrlFilter"] = ufront.web.url.filter.UFUrlFilter;
ufront.web.url.filter.UFUrlFilter.__name__ = ["ufront","web","url","filter","UFUrlFilter"];
ufront.web.url.filter.UFUrlFilter.prototype = {
	filterIn: null
	,filterOut: null
	,__class__: ufront.web.url.filter.UFUrlFilter
};
ufront.web.url.filter.DirectoryUrlFilter = function(directory) {
	if(StringTools.endsWith(directory,"/")) directory = HxOverrides.substr(directory,0,directory.length - 1);
	this.directory = directory;
	this.segments = directory.split("/");
};
$hxClasses["ufront.web.url.filter.DirectoryUrlFilter"] = ufront.web.url.filter.DirectoryUrlFilter;
ufront.web.url.filter.DirectoryUrlFilter.__name__ = ["ufront","web","url","filter","DirectoryUrlFilter"];
ufront.web.url.filter.DirectoryUrlFilter.__interfaces__ = [ufront.web.url.filter.UFUrlFilter];
ufront.web.url.filter.DirectoryUrlFilter.prototype = {
	directory: null
	,segments: null
	,filterIn: function(url,request) {
		var pos = 0;
		while(url.segments.length > 0 && url.segments[0] == this.segments[pos++]) url.segments.shift();
	}
	,filterOut: function(url,request) {
		url.segments = this.segments.concat(url.segments);
	}
	,__class__: ufront.web.url.filter.DirectoryUrlFilter
};
ufront.web.url.filter.PathInfoUrlFilter = function(frontScript,useCleanRoot) {
	if(useCleanRoot == null) useCleanRoot = true;
	if(null == frontScript) throw new thx.error.Error("target not implemented, always pass a value for frontScript",null,null,{ fileName : "PathInfoUrlFilter.hx", lineNumber : 33, className : "ufront.web.url.filter.PathInfoUrlFilter", methodName : "new"});
	this.frontScript = frontScript;
	this.useCleanRoot = useCleanRoot;
};
$hxClasses["ufront.web.url.filter.PathInfoUrlFilter"] = ufront.web.url.filter.PathInfoUrlFilter;
ufront.web.url.filter.PathInfoUrlFilter.__name__ = ["ufront","web","url","filter","PathInfoUrlFilter"];
ufront.web.url.filter.PathInfoUrlFilter.__interfaces__ = [ufront.web.url.filter.UFUrlFilter];
ufront.web.url.filter.PathInfoUrlFilter.prototype = {
	frontScript: null
	,useCleanRoot: null
	,filterIn: function(url,request) {
		if(url.segments[0] == this.frontScript) url.segments.shift();
	}
	,filterOut: function(url,request) {
		if(url.isPhysical || url.segments.length == 0 && this.useCleanRoot) {
		} else url.segments.unshift(this.frontScript);
	}
	,__class__: ufront.web.url.filter.PathInfoUrlFilter
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
thx.languages.En.get_language();
thx.cultures.EnUS.get_culture();
CompileTimeClassList.__meta__ = { obj : { classLists : [["null,true,ufront.web.Controller","MainController,ufront.web.DefaultUfrontController"],["null,true,ufront.api.UFApi",""]]}};
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
_Dates.Weekday_Impl_.Sunday = 0;
_Dates.Weekday_Impl_.Monday = 1;
_Dates.Weekday_Impl_.Tuesday = 2;
_Dates.Weekday_Impl_.Wednesday = 3;
_Dates.Weekday_Impl_.Thursday = 4;
_Dates.Weekday_Impl_.Friday = 5;
_Dates.Weekday_Impl_.Saturday = 6;
_Dates.Month_Impl_.January = 0;
_Dates.Month_Impl_.February = 1;
_Dates.Month_Impl_.March = 2;
_Dates.Month_Impl_.April = 3;
_Dates.Month_Impl_.May = 4;
_Dates.Month_Impl_.June = 5;
_Dates.Month_Impl_.July = 6;
_Dates.Month_Impl_.August = 7;
_Dates.Month_Impl_.September = 8;
_Dates.Month_Impl_.October = 9;
_Dates.Month_Impl_.November = 10;
_Dates.Month_Impl_.December = 11;
Floats._reparse = new EReg("^[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?","");
Floats._reparseStrict = new EReg("^[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?$","");
Ints._reparse = new EReg("^([+-])?\\d+$","");
IMap.__meta__ = { obj : { 'interface' : null}};
Iso.REQUEST_TYPE = "UF_ISO_TYPE";
Iso.AJAX = "AJAX";
Iso.REQ_TYPE_SERVER = "SERVER";
Iso.stateChangeCount = 0;
Iso.contentCache = new haxe.ds.StringMap();
ufront.web.context.HttpResponse.CONTENT_TYPE = "Content-type";
ufront.web.context.HttpResponse.LOCATION = "Location";
ufront.web.context.HttpResponse.DEFAULT_CONTENT_TYPE = "text/html";
ufront.web.context.HttpResponse.DEFAULT_CHARSET = "utf-8";
ufront.web.context.HttpResponse.DEFAULT_STATUS = 200;
ufront.web.context.HttpResponse.MOVED_PERMANENTLY = 301;
ufront.web.context.HttpResponse.FOUND = 302;
ufront.web.context.HttpResponse.UNAUTHORIZED = 401;
ufront.web.context.HttpResponse.NOT_FOUND = 404;
ufront.web.context.HttpResponse.INTERNAL_SERVER_ERROR = 500;
ufront.web.Controller.__meta__ = { fields : { context : { type : ["ufront.web.context.HttpContext"], inject : null}}};
MainController.__meta__ = { fields : { index : { wrapResult : [4]}, home : { wrapResult : [4]}, noPS : { wrapResult : [3]}, info : { wrapResult : [4]}, contact : { wrapResult : [3]}, contactPost : { wrapResult : [3]}}};
Strings._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
Strings._reReduceWS = new EReg("\\s+","");
Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings._reCollapse = new EReg("\\s+","g");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","g");
Strings.__ucwordswsPattern = new EReg("\\s([a-z])","g");
Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
Strings.__digitsPattern = new EReg("^[0-9]+$","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
dtx.DOMType.DOCUMENT_NODE = 9;
dtx.DOMType.ELEMENT_NODE = 1;
dtx.DOMType.TEXT_NODE = 3;
dtx.DOMType.COMMENT_NODE = 8;
dtx.Tools.firstTag = new EReg("<([a-z]+)[ />]","");
dtx.single.ElementManipulation.NodeTypeElement = 1;
dtx.single.ElementManipulation.NodeTypeAttribute = 2;
dtx.single.ElementManipulation.NodeTypeText = 3;
dtx.single.ElementManipulation.NodeTypeComment = 8;
dtx.single.ElementManipulation.NodeTypeDocument = 9;
dtx.single.ElementManipulation.selfClosingElms = ["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
minject.point.InjectionPoint.__meta__ = { obj : { 'interface' : null}};
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
thx.translation.ITranslation.__meta__ = { obj : { 'interface' : null}};
tink.core._Callback.Cell.pool = [];
tink.core._Error.ErrorCode_Impl_.BadRequest = 400;
tink.core._Error.ErrorCode_Impl_.Unauthorized = 401;
tink.core._Error.ErrorCode_Impl_.PaymentRequired = 402;
tink.core._Error.ErrorCode_Impl_.Forbidden = 403;
tink.core._Error.ErrorCode_Impl_.NotFound = 404;
tink.core._Error.ErrorCode_Impl_.MethodNotAllowed = 405;
tink.core._Error.ErrorCode_Impl_.Gone = 410;
tink.core._Error.ErrorCode_Impl_.NotAcceptable = 406;
tink.core._Error.ErrorCode_Impl_.Timeout = 408;
tink.core._Error.ErrorCode_Impl_.Conflict = 409;
tink.core._Error.ErrorCode_Impl_.OutOfRange = 416;
tink.core._Error.ErrorCode_Impl_.ExpectationFailed = 417;
tink.core._Error.ErrorCode_Impl_.I_am_a_Teapot = 418;
tink.core._Error.ErrorCode_Impl_.AuthenticationTimeout = 419;
tink.core._Error.ErrorCode_Impl_.UnprocessableEntity = 422;
tink.core._Error.ErrorCode_Impl_.InternalError = 500;
tink.core._Error.ErrorCode_Impl_.NotImplemented = 501;
tink.core._Error.ErrorCode_Impl_.ServiceUnavailable = 503;
tink.core._Error.ErrorCode_Impl_.InsufficientStorage = 507;
tink.core._Error.ErrorCode_Impl_.BandwidthLimitExceeded = 509;
ufront.api.UFApi.__meta__ = { fields : { auth : { type : ["ufront.auth.UFAuthHandler"], inject : null}, messages : { type : ["ufront.log.MessageList"], inject : null}}};
ufront.app.UFErrorHandler.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFInitRequired.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFLogHandler.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFResponseMiddleware.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFRequestMiddleware.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFMiddleware.__meta__ = { obj : { 'interface' : null}};
ufront.app.UFRequestHandler.__meta__ = { obj : { 'interface' : null}};
ufront.auth.UFAuthHandler.__meta__ = { obj : { 'interface' : null}};
ufront.auth.UFAuthUser.__meta__ = { obj : { 'interface' : null}};
ufront.core.InjectionRef.pool = [];
ufront.log.FileLogger.REMOVENL = new EReg("[\n\r]","g");
ufront.middleware.InlineSessionMiddleware.alwaysStart = false;
ufront.view.FileViewEngine.__meta__ = { fields : { scriptDir : { type : ["String"], inject : ["scriptDirectory"]}, path : { type : ["String"], inject : ["viewPath"]}}};
ufront.web.DefaultUfrontController.__meta__ = { fields : { showMessage : { wrapResult : [7]}}};
ufront.web.UserAgent.dataBrowser = [{ subString : "Chrome", identity : "Chrome"},{ subString : "OmniWeb", versionSearch : "OmniWeb/", identity : "OmniWeb"},{ subString : "Apple", identity : "Safari", versionSearch : "Version"},{ subString : "Opera", versionSearch : "Version", identity : "Opera"},{ subString : "iCab", identity : "iCab"},{ subString : "KDE", identity : "Konqueror"},{ subString : "Firefox", identity : "Firefox"},{ subString : "Camino", identity : "Camino"},{ subString : "Netscape", identity : "Netscape"},{ subString : "MSIE", identity : "Explorer", versionSearch : "MSIE"},{ subString : "Gecko", identity : "Mozilla", versionSearch : "rv"},{ subString : "Mozilla", identity : "Netscape", versionSearch : "Mozilla"}];
ufront.web.UserAgent.dataOS = [{ subString : "Win", identity : "Windows"},{ subString : "Mac", identity : "Mac"},{ subString : "iPhone", identity : "iPhone/iPod"},{ subString : "Linux", identity : "Linux"}];
ufront.web.session.UFHttpSession.__meta__ = { obj : { 'interface' : null}};
ufront.web.session.FileSession.__meta__ = { fields : { context : { type : ["ufront.web.context.HttpContext"], inject : null}, injectConfig : { args : null, post : null}}};
ufront.web.session.FileSession.defaultSessionName = "UfrontSessionID";
ufront.web.session.FileSession.defaultSavePath = "sessions/";
ufront.web.session.FileSession.defaultExpiry = 0;
ufront.web.session.FileSession.validID = new EReg("^[a-zA-Z0-9]+$","");
ufront.web.upload.FileUpload.__meta__ = { obj : { 'interface' : null}};
ufront.web.upload.TmpFileUploadMiddleware.subDir = "uf-upload-tmp";
ufront.web.url.filter.UFUrlFilter.__meta__ = { obj : { 'interface' : null}};
Main.main();
})();
