module.exports =
webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	module.exports = __webpack_require__(154);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(40)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(15);
	module.exports = __webpack_require__(1).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['CloseCurlyDoubleQuote', [8221]], ['CloseCurlyQuote', [8217]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
	
	var alphaIndex = {};
	var charIndex = {};
	
	createIndexes(alphaIndex, charIndex);
	
	/**
	 * @constructor
	 */
	function Html5Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1) === 'x' ?
	                parseInt(entity.substr(2).toLowerCase(), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.decode = function(str) {
	    return new Html5Entities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var charInfo = charIndex[str.charCodeAt(i)];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        result += str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encode = function(str) {
	    return new Html5Entities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var charInfo = charIndex[c];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonUTF = function(str) {
	    return new Html5Entities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonASCII = function(str) {
	    return new Html5Entities().encodeNonASCII(str);
	 };
	
	/**
	 * @param {Object} alphaIndex Passed by reference.
	 * @param {Object} charIndex Passed by reference.
	 */
	function createIndexes(alphaIndex, charIndex) {
	    var i = ENTITIES.length;
	    var _results = [];
	    while (i--) {
	        var e = ENTITIES[i];
	        var alpha = e[0];
	        var chars = e[1];
	        var chr = chars[0];
	        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
	        var charInfo;
	        if (addChar) {
	            charInfo = charIndex[chr] = charIndex[chr] || {};
	        }
	        if (chars[1]) {
	            var chr2 = chars[1];
	            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
	            _results.push(addChar && (charInfo[chr2] = alpha));
	        } else {
	            alphaIndex[alpha] = String.fromCharCode(chr);
	            _results.push(addChar && (charInfo[''] = alpha));
	        }
	    }
	}
	
	module.exports = Html5Entities;


/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(33);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(60);
	module.exports = __webpack_require__(1).Array.from;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	__webpack_require__(26);
	module.exports = __webpack_require__(59);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(28)
	  , TAG = __webpack_require__(2)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(5)
	  , createDesc      = __webpack_require__(20);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(15)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(4);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(4)
	  , get      = __webpack_require__(25);
	module.exports = __webpack_require__(1).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(29)
	  , $export        = __webpack_require__(6)
	  , toObject       = __webpack_require__(21)
	  , call           = __webpack_require__(45)
	  , isArrayIter    = __webpack_require__(44)
	  , toLength       = __webpack_require__(55)
	  , createProperty = __webpack_require__(41)
	  , getIterFn      = __webpack_require__(25);
	
	$export($export.S + $export.F * !__webpack_require__(46)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(21)
	  , $keys    = __webpack_require__(19);
	
	__webpack_require__(50)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(65),
	  Html4Entities: __webpack_require__(64),
	  Html5Entities: __webpack_require__(27),
	  AllHtmlEntities: __webpack_require__(27)
	};


/***/ },
/* 64 */
/***/ function(module, exports) {

	var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'Oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'oelig', 'oelig', 'scaron', 'scaron', 'yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
	var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
	
	var alphaIndex = {};
	var numIndex = {};
	
	var i = 0;
	var length = HTML_ALPHA.length;
	while (i < length) {
	    var a = HTML_ALPHA[i];
	    var c = HTML_CODES[i];
	    alphaIndex[a] = String.fromCharCode(c);
	    numIndex[c] = a;
	    i++;
	}
	
	/**
	 * @constructor
	 */
	function Html4Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1).toLowerCase() === 'x' ?
	                parseInt(entity.substr(2), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.decode = function(str) {
	    return new Html4Entities().decode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var alpha = numIndex[str.charCodeAt(i)];
	        result += alpha ? "&" + alpha + ";" : str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encode = function(str) {
	    return new Html4Entities().encode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var cc = str.charCodeAt(i);
	        var alpha = numIndex[cc];
	        if (alpha) {
	            result += "&" + alpha + ";";
	        } else if (cc < 32 || cc > 126) {
	            result += "&#" + cc + ";";
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonUTF = function(str) {
	    return new Html4Entities().encodeNonUTF(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonASCII = function(str) {
	    return new Html4Entities().encodeNonASCII(str);
	};
	
	module.exports = Html4Entities;


/***/ },
/* 65 */
/***/ function(module, exports) {

	var ALPHA_INDEX = {
	    '&lt': '<',
	    '&gt': '>',
	    '&quot': '"',
	    '&apos': '\'',
	    '&amp': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&apos;': '\'',
	    '&amp;': '&'
	};
	
	var CHAR_INDEX = {
	    60: 'lt',
	    62: 'gt',
	    34: 'quot',
	    39: 'apos',
	    38: 'amp'
	};
	
	var CHAR_S_INDEX = {
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    '\'': '&apos;',
	    '&': '&amp;'
	};
	
	/**
	 * @constructor
	 */
	function XmlEntities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/<|>|"|'|&/g, function(s) {
	        return CHAR_S_INDEX[s];
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encode = function(str) {
	    return new XmlEntities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
	        if (s.charAt(1) === '#') {
	            var code = s.charAt(2).toLowerCase() === 'x' ?
	                parseInt(s.substr(3), 16) :
	                parseInt(s.substr(2));
	
	            if (isNaN(code) || code < -32768 || code > 65535) {
	                return '';
	            }
	            return String.fromCharCode(code);
	        }
	        return ALPHA_INDEX[s] || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.decode = function(str) {
	    return new XmlEntities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var alpha = CHAR_INDEX[c];
	        if (alpha) {
	            result += "&" + alpha + ";";
	            i++;
	            continue;
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonUTF = function(str) {
	    return new XmlEntities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonASCII = function(str) {
	    var strLenght = str.length;
	    if (strLenght === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLenght) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonASCII = function(str) {
	    return new XmlEntities().encodeNonASCII(str);
	 };
	
	module.exports = XmlEntities;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(36);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(35);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(34);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(72);
	
	var _clientOverlayFalseReloadTrue2 = _interopRequireDefault(_clientOverlayFalseReloadTrue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var handlers = {
	  reload: function reload(route) {
	    if (route === '/_error') {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(next.router.components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var r = _step.value;
	          var Component = next.router.components[r].Component;
	
	          if (Component.__route === '/_error-debug') {
	            // reload all '/_error-debug'
	            // which are expected to be errors of '/_error' routes
	            next.router.reload(r);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return;
	    }
	
	    next.router.reload(route);
	  },
	  change: function change(route) {
	    var _ref = next.router.components[route] || {},
	        Component = _ref.Component;
	
	    if (Component && Component.__route === '/_error-debug') {
	      // reload to recover from runtime errors
	      next.router.reload(route);
	    }
	  }
	}; /* global next */
	
	
	_clientOverlayFalseReloadTrue2.default.subscribe(function (obj) {
	  var fn = handlers[obj.action];
	  if (fn) {
	    var data = obj.data || [];
	    fn.apply(undefined, (0, _toConsumableArray3.default)(data));
	  } else {
	    throw new Error('Unexpected action ' + obj.action);
	  }
	});

/***/ },
/* 67 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 68 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(67);
	exports.encode = exports.stringify = __webpack_require__(68);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(32)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	var styles = {
	  background: 'rgba(0,0,0,0.85)',
	  color: '#E8E8E8',
	  lineHeight: '1.2',
	  whiteSpace: 'pre',
	  fontFamily: 'Menlo, Consolas, monospace',
	  fontSize: '13px',
	  position: 'fixed',
	  zIndex: 9999,
	  padding: '10px',
	  left: 0,
	  right: 0,
	  top: 0,
	  bottom: 0,
	  overflow: 'auto',
	  dir: 'ltr'
	};
	for (var key in styles) {
	  clientOverlay.style[key] = styles[key];
	}
	
	var ansiHTML = __webpack_require__(31);
	var colors = {
	  reset: ['transparent', 'transparent'],
	  black: '181818',
	  red: 'E36049',
	  green: 'B3CB74',
	  yellow: 'FFD080',
	  blue: '7CAFC2',
	  magenta: '7FACCA',
	  cyan: 'C3C2EF',
	  lightgrey: 'EBE7E3',
	  darkgrey: '6D7891'
	};
	ansiHTML.setColors(colors);
	
	var Entities = __webpack_require__(63).AllHtmlEntities;
	var entities = new Entities();
	
	exports.showProblems =
	function showProblems(type, lines) {
	  clientOverlay.innerHTML = '';
	  lines.forEach(function(msg) {
	    msg = ansiHTML(entities.encode(msg));
	    var div = document.createElement('div');
	    div.style.marginBottom = '26px';
	    div.innerHTML = problemType(type) + ' in ' + msg;
	    clientOverlay.appendChild(div);
	  });
	  if (document.body) {
	    document.body.appendChild(clientOverlay);
	  }
	};
	
	exports.clear =
	function clear() {
	  if (document.body && clientOverlay.parentNode) {
	    document.body.removeChild(clientOverlay);
	  }
	};
	
	var problemColors = {
	  errors: colors.red,
	  warnings: colors.yellow
	};
	
	function problemType (type) {
	  var color = problemColors[type] || colors.red;
	  return (
	    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
	      type.slice(0, -1).toUpperCase() +
	    '</span>'
	  );
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
	/*global __resourceQuery __webpack_public_path__*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (true) {
	  var querystring = __webpack_require__(69);
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	  if (overrides.dynamicPublicPath) {
	    options.path = __webpack_require__.p + options.path;
	  }
	}
	
	if (typeof window === 'undefined') {
	  // do nothing
	} else if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect(window.EventSource);
	}
	
	function connect(EventSource) {
	  var source = new EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(function() { connect(EventSource); }, options.timeout);
	  }
	
	}
	
	var reporter;
	// the reporter needs to be a singleton on the page
	// in case the client is being used by mutliple bundles
	// we only want to report once.
	// all the errors will go to all clients
	var singletonKey = '__webpack_hot_middleware_reporter__';
	if (typeof window !== 'undefined' && !window[singletonKey]) {
	  reporter = window[singletonKey] = createReporter();
	}
	
	function createReporter() {
	  var strip = __webpack_require__(70);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(71);
	  }
	
	  return {
	    problems: function(type, obj) {
	      if (options.warn) {
	        console.warn("[HMR] bundle has " + type + ":");
	        obj[type].forEach(function(msg) {
	          console.warn("[HMR] " + strip(msg));
	        });
	      }
	      if (overlay && type !== 'warnings') overlay.showProblems(type, obj[type]);
	    },
	    success: function() {
	      if (overlay) overlay.clear();
	    },
	    useCustomOverlay: function(customOverlay) {
	      overlay = customOverlay;
	    }
	  };
	}
	
	var processUpdate = __webpack_require__(73);
	
	var customHandler;
	var subscribeAllHandler;
	function processMessage(obj) {
	  switch(obj.action) {
	    case "building":
	      if (options.log) console.log("[HMR] bundle rebuilding");
	      break;
	    case "built":
	      if (options.log) {
	        console.log(
	          "[HMR] bundle " + (obj.name ? obj.name + " " : "") +
	          "rebuilt in " + obj.time + "ms"
	        );
	      }
	      // fall through
	    case "sync":
	      if (obj.errors.length > 0) {
	        if (reporter) reporter.problems('errors', obj);
	      } else {
	        if (reporter) {
	          if (obj.warnings.length > 0) reporter.problems('warnings', obj);
	          reporter.success();
	        }
	        processUpdate(obj.hash, obj.modules, options);
	      }
	      break;
	    default:
	      if (customHandler) {
	        customHandler(obj);
	      }
	  }
	
	  if (subscribeAllHandler) {
	    subscribeAllHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribeAll: function subscribeAll(handler) {
	      subscribeAllHandler = handler;
	    },
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    },
	    useCustomOverlay: function useCustomOverlay(customOverlay) {
	      if (reporter) reporter.useCustomOverlay(customOverlay);
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(74)(module)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var hmrDocsUrl = "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"; // eslint-disable-line max-len
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    var cb = function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      var applyCallback = function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      };
	
	      var applyResult = module.hot.apply(applyOptions, applyCallback);
	      // webpack 2 promise
	      if (applyResult && applyResult.then) {
	        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
	        applyResult.then(function(outdatedModules) {
	          applyCallback(null, outdatedModules);
	        });
	        applyResult.catch(applyCallback);
	      }
	
	    };
	
	    var result = module.hot.check(false, cb);
	    // webpack 2 promise
	    if (result && result.then) {
	        result.then(function(updatedModules) {
	            cb(null, updatedModules);
	        });
	        result.catch(cb);
	    }
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)\n" +
	          "This is usually because the modules which have changed " +
	          "(and their parents) do not know how to hot reload themselves. " +
	          "See " + hmrDocsUrl + " for more details."
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(127);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processStyleName = undefined;
	exports.createMarkupForStyles = createMarkupForStyles;
	
	var _camelizeStyleName = __webpack_require__(126);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _dangerousStyleValue = __webpack_require__(132);
	
	var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
	
	var _hyphenateStyleName = __webpack_require__(129);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _memoizeStringOnly = __webpack_require__(130);
	
	var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);
	
	var _warning = __webpack_require__(86);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
	                                                                                                                   * Copyright 2013-present, Facebook, Inc.
	                                                                                                                   * All rights reserved.
	                                                                                                                   *
	                                                                                                                   * This source code is licensed under the BSD-style license found in the
	                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
	                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
	                                                                                                                   *
	                                                                                                                   * @providesModule CSSPropertyOperations
	                                                                                                                   */
	
	if (process.env.NODE_ENV !== 'production') {
	  var warnValidStyle;
	
	  (function () {
	    // 'msTransform' is correct, but the other prefixes should be capitalized
	    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	    // style values shouldn't contain a semicolon
	    var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	    var warnedStyleNames = {};
	    var warnedStyleValues = {};
	    var warnedForNaNValue = false;
	
	    var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
	      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	        return;
	      }
	
	      warnedStyleNames[name] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
	    };
	
	    var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
	      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	        return;
	      }
	
	      warnedStyleNames[name] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	    };
	
	    var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
	      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	        return;
	      }
	
	      warnedStyleValues[value] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	    };
	
	    var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
	      if (warnedForNaNValue) {
	        return;
	      }
	
	      warnedForNaNValue = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	    };
	
	    var checkRenderMessage = function checkRenderMessage(owner) {
	      if (owner) {
	        var name = owner.getName();
	        if (name) {
	          return ' Check the render method of `' + name + '`.';
	        }
	      }
	      return '';
	    };
	
	    /**
	     * @param {string} name
	     * @param {*} value
	     * @param {ReactDOMComponent} component
	     */
	
	    warnValidStyle = function warnValidStyle(name, value, component) {
	      //eslint-disable-line no-var
	      var owner = void 0;
	      if (component) {
	        owner = component._currentElement._owner;
	      }
	      if (name.indexOf('-') > -1) {
	        warnHyphenatedStyleName(name, owner);
	      } else if (badVendoredStyleNamePattern.test(name)) {
	        warnBadVendoredStyleName(name, owner);
	      } else if (badStyleValueWithSemicolonPattern.test(value)) {
	        warnStyleValueWithSemicolon(name, value, owner);
	      }
	
	      if (typeof value === 'number' && isNaN(value)) {
	        warnStyleValueIsNaN(name, value, owner);
	      }
	    };
	  })();
	}
	
	/**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	
	function createMarkupForStyles(styles, component) {
	  var serialized = '';
	  for (var styleName in styles) {
	    var isCustomProp = styleName.indexOf('--') === 0;
	    if (!styles.hasOwnProperty(styleName)) {
	      continue;
	    }
	    var styleValue = styles[styleName];
	    if (process.env.NODE_ENV !== 'production' && !isCustomProp) {
	      warnValidStyle(styleName, styleValue, component);
	    }
	    if (styleValue != null) {
	      if (isCustomProp) {
	        serialized += styleName + ':' + styleValue + ';';
	      } else {
	        serialized += processStyleName(styleName) + ':';
	        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
	      }
	    }
	  }
	  return serialized || null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("next/link");

/***/ },
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(125);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(128);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
	
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	exports.default = CSSProperty;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CSSProperty = __webpack_require__(131);
	
	var _CSSProperty2 = _interopRequireDefault(_CSSProperty);
	
	var _warning = __webpack_require__(86);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */
	
	var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
	var styleWarnings = {};
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      // Allow '0' to pass through without warning. 0 is already special and
	      // doesn't require units, so we don't need to warn about it.
	      if (component && value !== '0') {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	exports.default = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = clean;
	// Returns true for null, false, undefined and {}
	function isFalsy(value) {
	  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
	}
	
	function cleanObject(object) {
	  if (isFalsy(object)) return null;
	  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;
	
	  var acc = {},
	      keys = Object.keys(object),
	      hasFalsy = false;
	  for (var i = 0; i < keys.length; i++) {
	    var value = object[keys[i]];
	    var filteredValue = clean(value);
	    if (filteredValue === null || filteredValue !== value) {
	      hasFalsy = true;
	    }
	    if (filteredValue !== null) {
	      acc[keys[i]] = filteredValue;
	    }
	  }
	  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
	}
	
	function cleanArray(rules) {
	  var hasFalsy = false;
	  var filtered = [];
	  rules.forEach(function (rule) {
	    var filteredRule = clean(rule);
	    if (filteredRule === null || filteredRule !== rule) {
	      hasFalsy = true;
	    }
	    if (filteredRule !== null) {
	      filtered.push(filteredRule);
	    }
	  });
	  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
	}
	
	// Takes style array or object provided by user and clears all the falsy data 
	// If there is no styles left after filtration returns null
	function clean(input) {
	  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
	}

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
	exports.speedy = speedy;
	exports.simulations = simulations;
	exports.simulate = simulate;
	exports.cssLabels = cssLabels;
	exports.isLikeRule = isLikeRule;
	exports.idFor = idFor;
	exports.css = css;
	exports.rehydrate = rehydrate;
	exports.flush = flush;
	exports.select = select;
	exports.parent = parent;
	exports.media = media;
	exports.pseudo = pseudo;
	exports.active = active;
	exports.any = any;
	exports.checked = checked;
	exports.disabled = disabled;
	exports.empty = empty;
	exports.enabled = enabled;
	exports._default = _default;
	exports.first = first;
	exports.firstChild = firstChild;
	exports.firstOfType = firstOfType;
	exports.fullscreen = fullscreen;
	exports.focus = focus;
	exports.hover = hover;
	exports.indeterminate = indeterminate;
	exports.inRange = inRange;
	exports.invalid = invalid;
	exports.lastChild = lastChild;
	exports.lastOfType = lastOfType;
	exports.left = left;
	exports.link = link;
	exports.onlyChild = onlyChild;
	exports.onlyOfType = onlyOfType;
	exports.optional = optional;
	exports.outOfRange = outOfRange;
	exports.readOnly = readOnly;
	exports.readWrite = readWrite;
	exports.required = required;
	exports.right = right;
	exports.root = root;
	exports.scope = scope;
	exports.target = target;
	exports.valid = valid;
	exports.visited = visited;
	exports.dir = dir;
	exports.lang = lang;
	exports.not = not;
	exports.nthChild = nthChild;
	exports.nthLastChild = nthLastChild;
	exports.nthLastOfType = nthLastOfType;
	exports.nthOfType = nthOfType;
	exports.after = after;
	exports.before = before;
	exports.firstLetter = firstLetter;
	exports.firstLine = firstLine;
	exports.selection = selection;
	exports.backdrop = backdrop;
	exports.placeholder = placeholder;
	exports.cssFor = cssFor;
	exports.attribsFor = attribsFor;
	
	var _sheet = __webpack_require__(138);
	
	var _CSSPropertyOperations = __webpack_require__(87);
	
	var _clean = __webpack_require__(133);
	
	var _clean2 = _interopRequireDefault(_clean);
	
	var _plugins = __webpack_require__(137);
	
	var _hash = __webpack_require__(134);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* stylesheet */
	
	
	var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
	// an isomorphic StyleSheet shim. hides all the nitty gritty.
	
	// /**************** LIFTOFF IN 3... 2... 1... ****************/
	styleSheet.inject(); //eslint-disable-line indent
	// /****************      TO THE MOOOOOOON     ****************/
	
	// convenience function to toggle speedy
	function speedy(bool) {
	  return styleSheet.speedy(bool);
	}
	
	// plugins
	// we include these by default
	var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet(_plugins.prefixes, _plugins.fallbacks);
	plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
	plugins.fontFace = new _plugins.PluginSet();
	plugins.keyframes = new _plugins.PluginSet(_plugins.prefixes);
	
	// define some constants
	
	var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
	var isTest = process.env.NODE_ENV === 'test';
	
	/**** simulations  ****/
	
	// a flag to enable simulation meta tags on dom nodes
	// defaults to true in dev mode. recommend *not* to
	// toggle often.
	var canSimulate = isDev;
	
	// we use these flags for issuing warnings when simulate is called
	// in prod / in incorrect order
	var warned1 = false,
	    warned2 = false;
	
	// toggles simulation activity. shouldn't be needed in most cases
	function simulations() {
	  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  canSimulate = !!bool;
	}
	
	// use this on dom nodes to 'simulate' pseudoclasses
	// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
	// you can even send in some weird ones, as long as it's in simple format
	// and matches an existing rule on the element
	// eg simulate('nthChild2', ':hover:active') etc
	function simulate() {
	  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
	    pseudos[_key] = arguments[_key];
	  }
	
	  pseudos = (0, _clean2.default)(pseudos);
	  if (!pseudos) return {};
	  if (!canSimulate) {
	    if (!warned1) {
	      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
	      warned1 = true;
	    }
	    if (!isDev && !isTest && !warned2) {
	      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
	      warned2 = true;
	    }
	    return {};
	  }
	  return pseudos.reduce(function (o, p) {
	    return o['data-simulate-' + simple(p)] = '', o;
	  }, {});
	}
	
	/**** labels ****/
	// toggle for debug labels.
	// *shouldn't* have to mess with this manually
	var hasLabels = isDev;
	
	function cssLabels(bool) {
	  hasLabels = !!bool;
	}
	
	// takes a string, converts to lowercase, strips out nonalphanumeric.
	function simple(str) {
	  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
	}
	
	// hashes a string to something 'unique'
	// we use this to generate ids for styles
	
	
	function hashify() {
	  for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    objs[_key2] = arguments[_key2];
	  }
	
	  return (0, _hash2.default)(objs.map(function (x) {
	    return JSON.stringify(x);
	  }).join('')).toString(36);
	}
	
	// of shape { 'data-css-<id>': '' }
	function isLikeRule(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) {
	    return false;
	  }
	  return !!/data\-css\-([a-zA-Z0-9]+)/.exec(keys[0]);
	}
	
	// extracts id from a { 'data-css-<id>': ''} like object
	function idFor(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) throw new Error('not a rule');
	  var regex = /data\-css\-([a-zA-Z0-9]+)/;
	  var match = regex.exec(keys[0]);
	  if (!match) throw new Error('not a rule');
	  return match[1];
	}
	
	function selector(id, path) {
	
	  if (!id) {
	    return path.replace(/\&/g, '');
	  }
	  if (!path) return '.css-' + id + ',[data-css-' + id + ']';
	
	  var x = path.split(',').map(function (x) {
	    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
	    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
	  }).join(',');
	
	  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
	    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
	  }
	  return x;
	}
	
	function toCSS(_ref) {
	  var selector = _ref.selector,
	      style = _ref.style;
	
	  var result = plugins.transform({ selector: selector, style: style });
	  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	}
	
	function deconstruct(style) {
	  // we can be sure it's not infinitely nested here 
	  var plain = void 0,
	      selects = void 0,
	      medias = void 0,
	      supports = void 0;
	  Object.keys(style).forEach(function (key) {
	    if (key.indexOf('&') >= 0) {
	      selects = selects || {};
	      selects[key] = style[key];
	    } else if (key.indexOf('@media') === 0) {
	      medias = medias || {};
	      medias[key] = deconstruct(style[key]);
	    } else if (key.indexOf('@supports') === 0) {
	      supports = supports || {};
	      supports[key] = deconstruct(style[key]);
	    } else if (key === 'label') {
	      if (style.label.length > 0) {
	        plain = plain || {};
	        plain.label = style.label.join('.');
	      }
	    } else {
	      plain = plain || {};
	      plain[key] = style[key];
	    }
	  });
	  return { plain: plain, selects: selects, medias: medias, supports: supports };
	}
	
	function deconstructedStyleToCSS(id, style) {
	  var css = [];
	
	  // plugins here
	  var plain = style.plain,
	      selects = style.selects,
	      medias = style.medias,
	      supports = style.supports;
	
	  if (plain) {
	    css.push(toCSS({ style: plain, selector: selector(id) }));
	  }
	  if (selects) {
	    Object.keys(selects).forEach(function (key) {
	      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
	    });
	  }
	  if (medias) {
	    Object.keys(medias).forEach(function (key) {
	      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
	    });
	  }
	  if (supports) {
	    Object.keys(supports).forEach(function (key) {
	      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
	    });
	  }
	  return css;
	}
	
	// this cache to track which rules have
	// been inserted into the stylesheet
	var inserted = styleSheet.inserted = {};
	
	// and helpers to insert rules into said styleSheet
	function insert(spec) {
	  if (!inserted[spec.id]) {
	    inserted[spec.id] = true;
	    var deconstructed = deconstruct(spec.style);
	    deconstructedStyleToCSS(spec.id, deconstructed).map(function (cssRule) {
	      return styleSheet.insert(cssRule);
	    });
	  }
	}
	
	// a simple cache to store generated rules
	var registered = styleSheet.registered = {};
	function register(spec) {
	  if (!registered[spec.id]) {
	    registered[spec.id] = spec;
	  }
	}
	
	function _getRegistered(rule) {
	  if (isLikeRule(rule)) {
	    var ret = registered[idFor(rule)];
	    if (ret == null) {
	      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
	    }
	    return ret;
	  }
	  return rule;
	}
	
	// todo - perf
	var ruleCache = {};
	function toRule(spec) {
	  register(spec);
	  insert(spec);
	  if (ruleCache[spec.id]) {
	    return ruleCache[spec.id];
	  }
	
	  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
	  Object.defineProperty(ret, 'toString', {
	    enumerable: false, value: function value() {
	      return 'css-' + spec.id;
	    }
	  });
	  ruleCache[spec.id] = ret;
	  return ret;
	}
	
	function log() {
	  //eslint-disable-line no-unused-vars
	  console.log(this); //eslint-disable-line no-console
	  return this;
	}
	
	function isSelector(key) {
	  var possibles = [':', '.', '[', '>', ' '],
	      found = false,
	      ch = key.charAt(0);
	  for (var i = 0; i < possibles.length; i++) {
	    if (ch === possibles[i]) {
	      found = true;
	      break;
	    }
	  }
	  return found || key.indexOf('&') >= 0;
	}
	
	function joinSelectors(a, b) {
	  var as = a.split(',').map(function (a) {
	    return !(a.indexOf('&') >= 0) ? '&' + a : a;
	  });
	  var bs = b.split(',').map(function (b) {
	    return !(b.indexOf('&') >= 0) ? '&' + b : b;
	  });
	
	  return bs.reduce(function (arr, b) {
	    return arr.concat(as.map(function (a) {
	      return b.replace(/\&/g, a);
	    }));
	  }, []).join(',');
	}
	
	function joinMediaQueries(a, b) {
	  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
	}
	
	function isMediaQuery(key) {
	  return key.indexOf('@media') === 0;
	}
	
	function isSupports(key) {
	  return key.indexOf('@supports') === 0;
	}
	
	function joinSupports(a, b) {
	  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
	}
	
	// flatten a nested array
	function flatten(inArr) {
	  var arr = [];
	  for (var i = 0; i < inArr.length; i++) {
	    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
	  }
	  return arr;
	}
	
	// mutable! modifies dest.
	function build(dest, _ref2) {
	  var _ref2$selector = _ref2.selector,
	      selector = _ref2$selector === undefined ? '' : _ref2$selector,
	      _ref2$mq = _ref2.mq,
	      mq = _ref2$mq === undefined ? '' : _ref2$mq,
	      _ref2$supp = _ref2.supp,
	      supp = _ref2$supp === undefined ? '' : _ref2$supp,
	      _ref2$src = _ref2.src,
	      src = _ref2$src === undefined ? {} : _ref2$src;
	
	
	  if (!Array.isArray(src)) {
	    src = [src];
	  }
	  src = flatten(src);
	
	  src.forEach(function (_src) {
	    if (isLikeRule(_src)) {
	      var reg = _getRegistered(_src);
	      if (reg.type !== 'css') {
	        throw new Error('cannot merge this rule');
	      }
	      _src = reg.style;
	    }
	    _src = (0, _clean2.default)(_src);
	    if (_src.composes) {
	      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
	    }
	    Object.keys(_src).forEach(function (key) {
	      if (isSelector(key)) {
	        selector = selector === '::placeholder' ? '::placeholder, ::-webkit-input-placeholder, ::-moz-placeholder, ::-ms-input-placeholder' : selector;
	
	        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
	      } else if (isMediaQuery(key)) {
	        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
	      } else if (isSupports(key)) {
	        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
	      } else if (key === 'composes') {
	        // ignore, we already dealth with it
	      } else {
	        var _dest = dest;
	        if (supp) {
	          _dest[supp] = _dest[supp] || {};
	          _dest = _dest[supp];
	        }
	        if (mq) {
	          _dest[mq] = _dest[mq] || {};
	          _dest = _dest[mq];
	        }
	        if (selector) {
	          _dest[selector] = _dest[selector] || {};
	          _dest = _dest[selector];
	        }
	
	        if (key === 'label' && hasLabels) {
	          dest.label = dest.label.concat(_src.label);
	        } else {
	          _dest[key] = _src[key];
	        }
	      }
	    });
	  });
	}
	
	function _css(rules) {
	  var style = { label: [] };
	  build(style, { src: rules }); // mutative! but worth it. 
	
	  var spec = {
	    id: hashify(style),
	    style: style, label: style.label.join('.'),
	    type: 'css'
	  };
	  return toRule(spec);
	}
	
	var nullrule = {
	  // 'data-css-nil': ''
	};
	Object.defineProperty(nullrule, 'toString', {
	  enumerable: false, value: function value() {
	    return 'css-nil';
	  }
	});
	
	function css() {
	  for (var _len3 = arguments.length, rules = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    rules[_key3] = arguments[_key3];
	  }
	
	  if (rules[0] && rules[0].length && rules[0].raw) {
	    throw new Error('you forgot to include glamor/babel in your babel plugins.');
	  }
	
	  rules = (0, _clean2.default)(rules);
	  if (!rules) {
	    return nullrule; // todo - nullrule 
	  }
	
	  return _css(rules);
	}
	
	css.insert = function (css) {
	  var spec = {
	    id: hashify(css),
	    css: css,
	    type: 'raw'
	  };
	  register(spec);
	  if (!inserted[spec.id]) {
	    styleSheet.insert(spec.css);
	    inserted[spec.id] = true;
	  }
	};
	
	var insertRule = exports.insertRule = css.insert;
	
	css.global = function (selector, style) {
	  return css.insert(selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(style) + '}');
	};
	
	var insertGlobal = exports.insertGlobal = css.global;
	
	function insertKeyframe(spec) {
	  if (!inserted[spec.id]) {
	    (function () {
	      var inner = Object.keys(spec.keyframes).map(function (kf) {
	        var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
	        return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	      }).join('');
	
	      ['-webkit-', '-moz-', '-o-', ''].forEach(function (prefix) {
	        return styleSheet.insert('@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}');
	      });
	
	      inserted[spec.id] = true;
	    })();
	  }
	}
	css.keyframes = function (name, kfs) {
	  if (!kfs) {
	    kfs = name, name = 'animation';
	  }
	
	  // do not ignore empty keyframe definitions for now.
	  kfs = (0, _clean2.default)(kfs) || {};
	  var spec = {
	    id: hashify(name, kfs),
	    type: 'keyframes',
	    name: name,
	    keyframes: kfs
	  };
	  register(spec);
	  insertKeyframe(spec);
	  return name + '_' + spec.id;
	};
	
	var fontFace = exports.fontFace = css.fontFace;
	var keyframes = exports.keyframes = css.keyframes;
	
	function insertFontFace(spec) {
	  if (!inserted[spec.id]) {
	    styleSheet.insert('@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}');
	    inserted[spec.id] = true;
	  }
	}
	
	// we don't go all out for fonts as much, giving a simple font loading strategy
	// use a fancier lib if you need moar power
	css.fontFace = function (font) {
	  font = (0, _clean2.default)(font);
	  var spec = {
	    id: hashify(font),
	    type: 'font-face',
	    font: font
	  };
	  register(spec);
	  insertFontFace(spec);
	
	  return font.fontFamily;
	};
	
	// rehydrate the insertion cache with ids sent from
	// renderStatic / renderStaticOptimized
	function rehydrate(ids) {
	  // load up ids
	  Object.assign(inserted, ids.reduce(function (o, i) {
	    return o[i] = true, o;
	  }, {}));
	  // assume css loaded separately
	}
	
	// clears out the cache and empties the stylesheet
	// best for tests, though there might be some value for SSR.
	
	function flush() {
	  inserted = styleSheet.inserted = {};
	  registered = styleSheet.registered = {};
	  ruleCache = {};
	  styleSheet.flush();
	  styleSheet.inject();
	}
	
	var presets = exports.presets = {
	  mobile: '(min-width: 400px)',
	  Mobile: '@media (min-width: 400px)',
	  phablet: '(min-width: 550px)',
	  Phablet: '@media (min-width: 550px)',
	  tablet: '(min-width: 750px)',
	  Tablet: '@media (min-width: 550px)',
	  desktop: '(min-width: 1000px)',
	  Desktop: '@media (min-width: 1000px)',
	  hd: '(min-width: 1200px)',
	  Hd: '@media (min-width: 1200px)'
	};
	
	var style = exports.style = css;
	
	function select(selector) {
	  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    styles[_key4 - 1] = arguments[_key4];
	  }
	
	  if (!selector) {
	    return style(styles);
	  }
	  return css(_defineProperty({}, selector, styles));
	}
	var $ = exports.$ = select;
	
	function parent(selector) {
	  for (var _len5 = arguments.length, styles = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    styles[_key5 - 1] = arguments[_key5];
	  }
	
	  return css(_defineProperty({}, selector + ' &', styles));
	}
	
	var merge = exports.merge = css;
	var compose = exports.compose = css;
	
	function media(query) {
	  for (var _len6 = arguments.length, rules = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	    rules[_key6 - 1] = arguments[_key6];
	  }
	
	  return css(_defineProperty({}, '@media ' + query, rules));
	}
	
	function pseudo(selector) {
	  for (var _len7 = arguments.length, styles = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    styles[_key7 - 1] = arguments[_key7];
	  }
	
	  return css(_defineProperty({}, selector, styles));
	}
	
	// allllll the pseudoclasses
	
	function active(x) {
	  return pseudo(':active', x);
	}
	
	function any(x) {
	  return pseudo(':any', x);
	}
	
	function checked(x) {
	  return pseudo(':checked', x);
	}
	
	function disabled(x) {
	  return pseudo(':disabled', x);
	}
	
	function empty(x) {
	  return pseudo(':empty', x);
	}
	
	function enabled(x) {
	  return pseudo(':enabled', x);
	}
	
	function _default(x) {
	  return pseudo(':default', x); // note '_default' name
	}
	
	function first(x) {
	  return pseudo(':first', x);
	}
	
	function firstChild(x) {
	  return pseudo(':first-child', x);
	}
	
	function firstOfType(x) {
	  return pseudo(':first-of-type', x);
	}
	
	function fullscreen(x) {
	  return pseudo(':fullscreen', x);
	}
	
	function focus(x) {
	  return pseudo(':focus', x);
	}
	
	function hover(x) {
	  return pseudo(':hover', x);
	}
	
	function indeterminate(x) {
	  return pseudo(':indeterminate', x);
	}
	
	function inRange(x) {
	  return pseudo(':in-range', x);
	}
	
	function invalid(x) {
	  return pseudo(':invalid', x);
	}
	
	function lastChild(x) {
	  return pseudo(':last-child', x);
	}
	
	function lastOfType(x) {
	  return pseudo(':last-of-type', x);
	}
	
	function left(x) {
	  return pseudo(':left', x);
	}
	
	function link(x) {
	  return pseudo(':link', x);
	}
	
	function onlyChild(x) {
	  return pseudo(':only-child', x);
	}
	
	function onlyOfType(x) {
	  return pseudo(':only-of-type', x);
	}
	
	function optional(x) {
	  return pseudo(':optional', x);
	}
	
	function outOfRange(x) {
	  return pseudo(':out-of-range', x);
	}
	
	function readOnly(x) {
	  return pseudo(':read-only', x);
	}
	
	function readWrite(x) {
	  return pseudo(':read-write', x);
	}
	
	function required(x) {
	  return pseudo(':required', x);
	}
	
	function right(x) {
	  return pseudo(':right', x);
	}
	
	function root(x) {
	  return pseudo(':root', x);
	}
	
	function scope(x) {
	  return pseudo(':scope', x);
	}
	
	function target(x) {
	  return pseudo(':target', x);
	}
	
	function valid(x) {
	  return pseudo(':valid', x);
	}
	
	function visited(x) {
	  return pseudo(':visited', x);
	}
	
	// parameterized pseudoclasses
	function dir(p, x) {
	  return pseudo(':dir(' + p + ')', x);
	}
	function lang(p, x) {
	  return pseudo(':lang(' + p + ')', x);
	}
	function not(p, x) {
	  // should this be a plugin?
	  var selector = p.split(',').map(function (x) {
	    return x.trim();
	  }).map(function (x) {
	    return ':not(' + x + ')';
	  });
	  if (selector.length === 1) {
	    return pseudo(':not(' + p + ')', x);
	  }
	  return select(selector.join(''), x);
	}
	function nthChild(p, x) {
	  return pseudo(':nth-child(' + p + ')', x);
	}
	function nthLastChild(p, x) {
	  return pseudo(':nth-last-child(' + p + ')', x);
	}
	function nthLastOfType(p, x) {
	  return pseudo(':nth-last-of-type(' + p + ')', x);
	}
	function nthOfType(p, x) {
	  return pseudo(':nth-of-type(' + p + ')', x);
	}
	
	// pseudoelements
	function after(x) {
	  return pseudo('::after', x);
	}
	function before(x) {
	  return pseudo('::before', x);
	}
	function firstLetter(x) {
	  return pseudo('::first-letter', x);
	}
	function firstLine(x) {
	  return pseudo('::first-line', x);
	}
	function selection(x) {
	  return pseudo('::selection', x);
	}
	function backdrop(x) {
	  return pseudo('::backdrop', x);
	}
	function placeholder(x) {
	  // https://github.com/threepointone/glamor/issues/14
	  return css({ '::placeholder': x });
	}
	
	/*** helpers for web components ***/
	// https://github.com/threepointone/glamor/issues/16
	
	function cssFor() {
	  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	    rules[_key8] = arguments[_key8];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  return rules ? rules.map(function (r) {
	    var style = { label: [] };
	    build(style, { src: r }); // mutative! but worth it.   
	    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
	  }).join('') : '';
	}
	
	function attribsFor() {
	  for (var _len9 = arguments.length, rules = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	    rules[_key9] = arguments[_key9];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  var htmlAttributes = rules ? rules.map(function (rule) {
	    idFor(rule); // throwaway check for rule
	    var key = Object.keys(rule)[0],
	        value = rule[key];
	    return key + '="' + (value || '') + '"';
	  }).join(' ') : '';
	
	  return htmlAttributes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.InlineStylePrefixAll = factory();
	})(undefined, function () {
	  'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  babelHelpers.createClass = function () {
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
	
	  babelHelpers.defineProperty = function (obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }
	
	    return obj;
	  };
	
	  babelHelpers;
	
	  function __commonjs(fn, module) {
	    return module = { exports: {} }, fn(module, module.exports), module.exports;
	  }
	
	  var prefixProps = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	
	  // helper to capitalize strings
	  var capitalizeString = function capitalizeString(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  };
	
	  var isPrefixedProperty = function isPrefixedProperty(property) {
	    return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	  };
	
	  function sortPrefixedStyle(style) {
	    return Object.keys(style).sort(function (left, right) {
	      if (isPrefixedProperty(left) && !isPrefixedProperty(right)) {
	        return -1;
	      } else if (!isPrefixedProperty(left) && isPrefixedProperty(right)) {
	        return 1;
	      }
	      return 0;
	    }).reduce(function (sortedStyle, prop) {
	      sortedStyle[prop] = style[prop];
	      return sortedStyle;
	    }, {});
	  }
	
	  function position(property, value) {
	    if (property === 'position' && value === 'sticky') {
	      return { position: ['-webkit-sticky', 'sticky'] };
	    }
	  }
	
	  // returns a style object with a single concated prefixed value string
	  var joinPrefixedValue = function joinPrefixedValue(property, value) {
	    var replacer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (prefix, value) {
	      return prefix + value;
	    };
	    return babelHelpers.defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  };
	
	  var isPrefixedValue = function isPrefixedValue(value) {
	    if (Array.isArray(value)) value = value.join(',');
	
	    return value.match(/-webkit-|-moz-|-ms-/) !== null;
	  };
	
	  function calc(property, value) {
	    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('calc(') > -1) {
	      return joinPrefixedValue(property, value, function (prefix, value) {
	        return value.replace(/calc\(/g, prefix + 'calc(');
	      });
	    }
	  }
	
	  var values = {
	    'zoom-in': true,
	    'zoom-out': true,
	    grab: true,
	    grabbing: true
	  };
	
	  function cursor(property, value) {
	    if (property === 'cursor' && values[value]) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var values$1 = { flex: true, 'inline-flex': true };
	
	  function flex(property, value) {
	    if (property === 'display' && values$1[value]) {
	      return {
	        display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	      };
	    }
	  }
	
	  var properties = {
	    maxHeight: true,
	    maxWidth: true,
	    width: true,
	    height: true,
	    columnWidth: true,
	    minWidth: true,
	    minHeight: true
	  };
	  var values$2 = {
	    'min-content': true,
	    'max-content': true,
	    'fill-available': true,
	    'fit-content': true,
	    'contain-floats': true
	  };
	
	  function sizing(property, value) {
	    if (properties[property] && values$2[value]) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var values$3 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	  function gradient(property, value) {
	    if (typeof value === 'string' && !isPrefixedValue(value) && value.match(values$3) !== null) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var index = __commonjs(function (module) {
	    'use strict';
	
	    var uppercasePattern = /[A-Z]/g;
	    var msPattern = /^ms-/;
	    var cache = {};
	
	    function hyphenateStyleName(string) {
	      return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
	    }
	
	    module.exports = hyphenateStyleName;
	  });
	
	  var hyphenateStyleName = index && (typeof index === 'undefined' ? 'undefined' : _typeof(index)) === 'object' && 'default' in index ? index['default'] : index;
	
	  var properties$1 = {
	    transition: true,
	    transitionProperty: true,
	    WebkitTransition: true,
	    WebkitTransitionProperty: true
	  };
	
	  function transition(property, value) {
	    // also check for already prefixed transitions
	    if (typeof value === 'string' && properties$1[property]) {
	      var _ref2;
	
	      var outputValue = prefixValue(value);
	      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	        return value.match(/-moz-|-ms-/) === null;
	      }).join(',');
	
	      // if the property is already prefixed
	      if (property.indexOf('Webkit') > -1) {
	        return babelHelpers.defineProperty({}, property, webkitOutput);
	      }
	
	      return _ref2 = {}, babelHelpers.defineProperty(_ref2, 'Webkit' + capitalizeString(property), webkitOutput), babelHelpers.defineProperty(_ref2, property, outputValue), _ref2;
	    }
	  }
	
	  function prefixValue(value) {
	    if (isPrefixedValue(value)) {
	      return value;
	    }
	
	    // only split multi values, not cubic beziers
	    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	    // iterate each single value and check for transitioned properties
	    // that need to be prefixed as well
	    multipleValues.forEach(function (val, index) {
	      multipleValues[index] = Object.keys(prefixProps).reduce(function (out, prefix) {
	        var dashCasePrefix = '-' + prefix.toLowerCase() + '-';
	
	        Object.keys(prefixProps[prefix]).forEach(function (prop) {
	          var dashCaseProperty = hyphenateStyleName(prop);
	
	          if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	            // join all prefixes and create a new value
	            out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	          }
	        });
	        return out;
	      }, val);
	    });
	
	    return multipleValues.join(',');
	  }
	
	  var alternativeValues = {
	    'space-around': 'distribute',
	    'space-between': 'justify',
	    'flex-start': 'start',
	    'flex-end': 'end'
	  };
	  var alternativeProps = {
	    alignContent: 'msFlexLinePack',
	    alignSelf: 'msFlexItemAlign',
	    alignItems: 'msFlexAlign',
	    justifyContent: 'msFlexPack',
	    order: 'msFlexOrder',
	    flexGrow: 'msFlexPositive',
	    flexShrink: 'msFlexNegative',
	    flexBasis: 'msPreferredSize'
	  };
	
	  function flexboxIE(property, value) {
	    if (alternativeProps[property]) {
	      return babelHelpers.defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	
	  var alternativeValues$1 = {
	    'space-around': 'justify',
	    'space-between': 'justify',
	    'flex-start': 'start',
	    'flex-end': 'end',
	    'wrap-reverse': 'multiple',
	    wrap: 'multiple'
	  };
	
	  var alternativeProps$1 = {
	    alignItems: 'WebkitBoxAlign',
	    justifyContent: 'WebkitBoxPack',
	    flexWrap: 'WebkitBoxLines'
	  };
	
	  function flexboxOld(property, value) {
	    if (property === 'flexDirection' && typeof value === 'string') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (alternativeProps$1[property]) {
	      return babelHelpers.defineProperty({}, alternativeProps$1[property], alternativeValues$1[value] || value);
	    }
	  }
	
	  var plugins = [position, calc, cursor, sizing, gradient, transition, flexboxIE, flexboxOld, flex];
	
	  /**
	   * Returns a prefixed version of the style object using all vendor prefixes
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	  function prefixAll(styles) {
	    Object.keys(styles).forEach(function (property) {
	      var value = styles[property];
	      if (value instanceof Object && !Array.isArray(value)) {
	        // recurse through nested style objects
	        styles[property] = prefixAll(value);
	      } else {
	        Object.keys(prefixProps).forEach(function (prefix) {
	          var properties = prefixProps[prefix];
	          // add prefixes if needed
	          if (properties[property]) {
	            styles[prefix + capitalizeString(property)] = value;
	          }
	        });
	      }
	    });
	
	    Object.keys(styles).forEach(function (property) {
	      [].concat(styles[property]).forEach(function (value, index) {
	        // resolve every special plugins
	        plugins.forEach(function (plugin) {
	          return assignStyles(styles, plugin(property, value));
	        });
	      });
	    });
	
	    return sortPrefixedStyle(styles);
	  }
	
	  function assignStyles(base) {
	    var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    Object.keys(extend).forEach(function (property) {
	      var baseValue = base[property];
	      if (Array.isArray(baseValue)) {
	        [].concat(extend[property]).forEach(function (value) {
	          var valueIndex = baseValue.indexOf(value);
	          if (valueIndex > -1) {
	            base[property].splice(valueIndex, 1);
	          }
	          base[property].push(value);
	        });
	      } else {
	        base[property] = extend[property];
	      }
	    });
	  }
	
	  return prefixAll;
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PluginSet = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.fallbacks = fallbacks;
	exports.prefixes = prefixes;
	
	var _CSSPropertyOperations = __webpack_require__(87);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	
	var PluginSet = exports.PluginSet = function () {
	  function PluginSet() {
	    _classCallCheck(this, PluginSet);
	
	    for (var _len = arguments.length, initial = Array(_len), _key = 0; _key < _len; _key++) {
	      initial[_key] = arguments[_key];
	    }
	
	    this.fns = initial || [];
	  }
	
	  _createClass(PluginSet, [{
	    key: 'add',
	    value: function add() {
	      var _this = this;
	
	      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        fns[_key2] = arguments[_key2];
	      }
	
	      fns.forEach(function (fn) {
	        if (_this.fns.indexOf(fn) >= 0) {
	          if (isDev) {
	            console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
	          }
	        } else {
	          _this.fns = [fn].concat(_toConsumableArray(_this.fns));
	        }
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(fn) {
	      this.fns = this.fns.filter(function (x) {
	        return x !== fn;
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.fns = [];
	    }
	  }, {
	    key: 'transform',
	    value: function transform(o) {
	      return this.fns.reduce(function (o, fn) {
	        return fn(o);
	      }, o);
	    }
	  }]);
	
	  return PluginSet;
	}();
	
	function fallbacks(node) {
	  var hasArray = Object.keys(node.style).map(function (x) {
	    return Array.isArray(node.style[x]);
	  }).indexOf(true) >= 0;
	  if (hasArray) {
	    var _ret = function () {
	      var style = node.style,
	          rest = _objectWithoutProperties(node, ['style']);
	
	      var flattened = Object.keys(style).reduce(function (o, key) {
	        o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
	        return o;
	      }, {});
	      // todo - 
	      // flatten arrays which haven't been flattened yet 
	      return {
	        v: _extends({ style: flattened }, rest)
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return node;
	}
	
	var prefixAll = __webpack_require__(136);
	
	function prefixes(_ref) {
	  var style = _ref.style,
	      rest = _objectWithoutProperties(_ref, ['style']);
	
	  return _extends({ style: prefixAll(style) }, rest);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StyleSheet = StyleSheet;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* 
	
	high performance StyleSheet for css-in-js systems 
	
	- uses multiple style tags behind the scenes for millions of rules 
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side 
	
	
	// usage
	
	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()
	
	styleSheet.inject() 
	- 'injects' the stylesheet into the page (or into memory if on server)
	
	styleSheet.insert('#box { border: 1px solid red; }') 
	- appends a css rule into the stylesheet 
	
	styleSheet.flush() 
	- empties the stylesheet of all its contents
	
	
	*/
	
	function last(arr) {
	  return arr[arr.length - 1];
	}
	
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    return tag.sheet;
	  }
	
	  // this weirdness brought to you by firefox 
	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}
	
	var isBrowser = typeof window !== 'undefined';
	var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
	var isTest = process.env.NODE_ENV === 'test';
	
	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();
	
	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}
	
	function StyleSheet() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$speedy = _ref.speedy,
	      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
	      _ref$maxLength = _ref.maxLength,
	      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;
	
	  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	  this.sheet = undefined;
	  this.tags = [];
	  this.maxLength = maxLength;
	  this.ctr = 0;
	}
	
	Object.assign(StyleSheet.prototype, {
	  getSheet: function getSheet() {
	    return sheetForTag(last(this.tags));
	  },
	  inject: function inject() {
	    var _this = this;
	
	    if (this.injected) {
	      throw new Error('already injected stylesheet!');
	    }
	    if (isBrowser) {
	      this.tags[0] = makeStyleTag();
	    } else {
	      // server side 'polyfill'. just enough behavior to be useful.
	      this.sheet = {
	        cssRules: [],
	        insertRule: function insertRule(rule) {
	          // enough 'spec compliance' to be able to extract the rules later  
	          // in other words, just the cssText field 
	          _this.sheet.cssRules.push({ cssText: rule });
	        }
	      };
	    }
	    this.injected = true;
	  },
	  speedy: function speedy(bool) {
	    if (this.ctr !== 0) {
	      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	    }
	    this.isSpeedy = !!bool;
	  },
	  _insert: function _insert(rule) {
	    // this weirdness for perf, and chrome's weird bug 
	    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	    try {
	      var sheet = this.getSheet();
	      sheet.insertRule(rule, sheet.cssRules.length); // todo - correct index here     
	    } catch (e) {
	      if (isDev) {
	        // might need beter dx for this 
	        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	      }
	    }
	  },
	  insert: function insert(rule) {
	
	    if (isBrowser) {
	      // this is the ultrafast version, works across browsers 
	      if (this.isSpeedy && this.getSheet().insertRule) {
	        this._insert(rule);
	      }
	      // more browser weirdness. I don't even know    
	      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
	      //   this.tags::last().styleSheet.cssText+= rule
	      // }
	      else {
	          last(this.tags).appendChild(document.createTextNode(rule));
	        }
	    } else {
	      // server side is pretty simple         
	      this.sheet.insertRule(rule);
	    }
	
	    this.ctr++;
	    if (isBrowser && this.ctr % this.maxLength === 0) {
	      this.tags.push(makeStyleTag());
	    }
	    return this.ctr - 1;
	  },
	
	  // commenting this out till we decide on v3's decision 
	  // _replace(index, rule) {
	  //   // this weirdness for perf, and chrome's weird bug 
	  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	  //   try {  
	  //     let sheet = this.getSheet()        
	  //     sheet.deleteRule(index) // todo - correct index here     
	  //     sheet.insertRule(rule, index)
	  //   }
	  //   catch(e) {
	  //     if(isDev) {
	  //       // might need beter dx for this 
	  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
	  //     }          
	  //   }          
	
	  // }
	  // replace(index, rule) {
	  //   if(isBrowser) {
	  //     if(this.isSpeedy && this.getSheet().insertRule) {
	  //       this._replace(index, rule)
	  //     }
	  //     else {
	  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
	  //       let _index = (index % this.maxLength) + 1
	  //       let tag = this.tags[_slot]
	  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
	  //     }
	  //   }
	  //   else {
	  //     let rules = this.sheet.cssRules
	  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
	  //   }
	  // }
	  delete: function _delete(index) {
	    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
	    return this.replace(index, '');
	  },
	  flush: function flush() {
	    if (isBrowser) {
	      this.tags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	      });
	      this.tags = [];
	      this.sheet = null;
	      this.ctr = 0;
	      // todo - look for remnants in document.styleSheets
	    } else {
	      // simpler on server 
	      this.sheet.cssRules = [];
	    }
	    this.injected = false;
	  },
	  rules: function rules() {
	    if (!isBrowser) {
	      return this.sheet.cssRules;
	    }
	    var arr = [];
	    this.tags.forEach(function (tag) {
	      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	    });
	    return arr;
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(8);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(9);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(10);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(12);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(11);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactParticlesJs = __webpack_require__(147);
	
	var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);
	
	var _particles = __webpack_require__(155);
	
	var _particles2 = _interopRequireDefault(_particles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FullBackground = function (_React$Component) {
	  (0, _inherits3.default)(FullBackground, _React$Component);
	
	  function FullBackground() {
	    (0, _classCallCheck3.default)(this, FullBackground);
	    return (0, _possibleConstructorReturn3.default)(this, (FullBackground.__proto__ || (0, _getPrototypeOf2.default)(FullBackground)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FullBackground, [{
	    key: 'render',
	    value: function render() {
	      var style = this.props.style;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: style,
	          style: {
	            position: 'fixed',
	            width: '100%',
	            height: '100vh',
	            top: '0',
	            left: '0'
	          } },
	        _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default })
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps() {
	      return { particles: _particles2.default };
	    }
	  }]);
	  return FullBackground;
	}(_react2.default.Component);
	
	FullBackground.propTypes = {
	  style: _react.PropTypes.object
	};
	exports.default = FullBackground;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJwYXJ0aWNsZXMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7NkJBVVY7QUFBQSxVQUNDQyxLQURELEdBQ1csS0FBS0MsS0FEaEIsQ0FDQ0QsS0FERDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQSxLQUFoQjtBQUNFLGlCQUFPO0FBQ0xFLHNCQUFVLE9BREw7QUFFTEMsbUJBQU8sTUFGRjtBQUdMQyxvQkFBUSxPQUhIO0FBSUxDLGlCQUFLLEdBSkE7QUFLTEMsa0JBQU07QUFMRCxXQURUO0FBUUUsb0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLE9BQWhDLEVBQXdDLDJCQUF4QztBQVJGLE9BREY7QUFZRDs7O3NDQW5CeUI7QUFDeEIsYUFBTyxFQUFFQyw4QkFBRixFQUFQO0FBQ0Q7OztFQVJ5QyxnQkFBTUMsUzs7QUFBN0JULGMsQ0FFWlUsUyxHQUFZO0FBQ2pCVCxTQUFPLGlCQUFVVTtBQURBLEM7a0JBRkFYLGMiLCJmaWxlIjoiRnVsbEJhY2tncm91bmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBwYXJ0aWNsZXM6IHBhcnRpY2xlcyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIH19ID5cbiAgICAgICAgPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19

/***/ },
/* 140 */,
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(151);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getPrototypeOf = __webpack_require__(8);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(9);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(10);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(12);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(11);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(17);
	
	var _css2 = _interopRequireDefault(_css);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MovingText = function (_React$Component) {
	  (0, _inherits3.default)(MovingText, _React$Component);
	
	  function MovingText(props) {
	    (0, _classCallCheck3.default)(this, MovingText);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (MovingText.__proto__ || (0, _getPrototypeOf2.default)(MovingText)).call(this, props));
	
	    _this.init();
	    return _this;
	  }
	
	  (0, _createClass3.default)(MovingText, [{
	    key: 'init',
	    value: function init() {
	      this.state = { mousePos: { x: 0, y: 0 } };
	    }
	  }, {
	    key: 'mouseMove',
	    value: function mouseMove(e) {
	      this.setState({
	        mousePos: {
	          x: e.pageX - window.innerWidth / 2,
	          y: e.pageY - window.innerHeight / 2
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          beforetext = _props.beforetext,
	          aftertext = _props.aftertext,
	          movingtext = _props.movingtext,
	          style = _props.style;
	
	
	      var offset = {
	        transform: 'translate3d( ' + this.state.mousePos.x / this.props.style.animation.transform_mouse_pos_x + 'px,\n        ' + this.state.mousePos.y / this.props.style.animation.transform_mouse_pos_y + 'px, 0 )',
	        textShadow: -this.state.mousePos.x / this.props.style.animation.shadow_mouse_pos_x + 'px\n        ' + this.state.mousePos.y / this.props.style.animation.shadow_mouse_pos_y + 'px\n        ' + this.props.style.movingtitlebackground
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: style.background,
	          onMouseMove: this.mouseMove.bind(this) },
	        _react2.default.createElement(
	          'h1',
	          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
	          beforetext,
	          _react2.default.createElement(
	            'span',
	            (0, _defineProperty3.default)({ style: { display: 'inline-block',
	                willChange: 'transform' },
	              className: style.movingtitle
	            }, 'style', offset),
	            movingtext
	          ),
	          aftertext
	        )
	      );
	    }
	  }]);
	  return MovingText;
	}(_react2.default.Component);
	
	MovingText.propTypes = {
	  beforetext: _react.PropTypes.string,
	  aftertext: _react.PropTypes.string,
	  movingtext: _react.PropTypes.string.isRequired,
	  style: _react.PropTypes.object
	};
	exports.default = MovingText;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImJlZm9yZXRleHQiLCJhZnRlcnRleHQiLCJtb3Zpbmd0ZXh0Iiwic3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJ0ZXh0U2hhZG93Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsIm1vdXNlTW92ZSIsImJpbmQiLCJ3aGl0ZVNwYWNlIiwiZml4ZWR0aXRsZSIsImRpc3BsYXkiLCJ3aWxsQ2hhbmdlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFU7OztBQVNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhJQUNYQSxLQURXOztBQUVqQixVQUFLQyxJQUFMO0FBRmlCO0FBR2xCOzs7OzJCQUVNO0FBQ0wsV0FBS0MsS0FBTCxHQUFhLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxDQUFMLEVBQVFDLEdBQUcsQ0FBWCxFQUFaLEVBQWI7QUFDRDs7OzhCQUVTQyxDLEVBQUc7QUFDWCxXQUFLQyxRQUFMLENBQWM7QUFDWkosa0JBQVU7QUFDUkMsYUFBR0UsRUFBRUUsS0FBRixHQUFXQyxPQUFPQyxVQUFQLEdBQW9CLENBRDFCO0FBRVJMLGFBQUdDLEVBQUVLLEtBQUYsR0FBV0YsT0FBT0csV0FBUCxHQUFxQjtBQUYzQjtBQURFLE9BQWQ7QUFNRDs7OzZCQUVRO0FBQUEsbUJBQzhDLEtBQUtaLEtBRG5EO0FBQUEsVUFDQ2EsVUFERCxVQUNDQSxVQUREO0FBQUEsVUFDYUMsU0FEYixVQUNhQSxTQURiO0FBQUEsVUFDd0JDLFVBRHhCLFVBQ3dCQSxVQUR4QjtBQUFBLFVBQ29DQyxLQURwQyxVQUNvQ0EsS0FEcEM7OztBQUdQLFVBQUlDLFNBQVM7QUFDWEMscUNBQTJCLEtBQUtoQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXBCLEdBQXdCLEtBQUtKLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCQyxxQkFBOUUscUJBQ0ksS0FBS2xCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS0wsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJFLHFCQUR2RCxZQURXO0FBR1hDLG9CQUFlLENBQUUsS0FBS3BCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBdEIsR0FBMEIsS0FBS0osS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJJLGtCQUFwRSxvQkFDSSxLQUFLckIsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxDQUFwQixHQUF3QixLQUFLTCxLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkssa0JBRHZELG9CQUVJLEtBQUt4QixLQUFMLENBQVdnQixLQUFYLENBQWlCUztBQUxWLE9BQWI7O0FBUUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXVCxNQUFNVSxVQUF0QjtBQUNFLHVCQUFjLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQURoQjtBQUVFO0FBQUE7QUFBQSxZQUFJLE9BQU8sRUFBQ0MsWUFBWSxRQUFiLEVBQVgsRUFBbUMsV0FBV2IsTUFBTWMsVUFBcEQ7QUFDR2pCLG9CQURIO0FBR0U7QUFBQTtBQUFBLDRDQUFNLE9BQU8sRUFBQ2tCLFNBQVMsY0FBVjtBQUNMQyw0QkFBWSxXQURQLEVBQWI7QUFFRSx5QkFBV2hCLE1BQU1pQjtBQUZuQix3QkFHU2hCLE1BSFQ7QUFJR0Y7QUFKSCxXQUhGO0FBVUdEO0FBVkg7QUFGRixPQURGO0FBaUJEOzs7RUF2RHFDLGdCQUFNb0IsUzs7QUFBekJuQyxVLENBRVpvQyxTLEdBQVk7QUFDakJ0QixjQUFZLGlCQUFVdUIsTUFETDtBQUVqQnRCLGFBQVcsaUJBQVVzQixNQUZKO0FBR2pCckIsY0FBWSxpQkFBVXFCLE1BQVYsQ0FBaUJDLFVBSFo7QUFJakJyQixTQUFPLGlCQUFVc0I7QUFKQSxDO2tCQUZBdkMsVSIsImZpbGUiOiJNb3ZpbmdUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ1RleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmVmb3JldGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZnRlcnRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB7IG1vdXNlUG9zOiB7IHg6IDAsIHk6IDAgfSB9XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogZS5wYWdlWCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpLFxuICAgICAgICB5OiBlLnBhZ2VZIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJlZm9yZXRleHQsIGFmdGVydGV4dCwgbW92aW5ndGV4dCwgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBvZmZzZXQgPSB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCggJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi50cmFuc2Zvcm1fbW91c2VfcG9zX3h9cHgsXG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24udHJhbnNmb3JtX21vdXNlX3Bvc195fXB4LCAwIClgLFxuICAgICAgdGV4dFNoYWRvdzogYCR7LSB0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi5zaGFkb3dfbW91c2VfcG9zX3h9cHhcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi5zaGFkb3dfbW91c2VfcG9zX3l9cHhcbiAgICAgICAgJHt0aGlzLnByb3BzLnN0eWxlLm1vdmluZ3RpdGxlYmFja2dyb3VuZH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYWNrZ3JvdW5kfVxuICAgICAgICBvbk1vdXNlTW92ZT17IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykgfSA+XG4gICAgICAgIDxoMSBzdHlsZT17e3doaXRlU3BhY2U6ICdub3dyYXAnfX0gY2xhc3NOYW1lPXtzdHlsZS5maXhlZHRpdGxlfT5cbiAgICAgICAgICB7YmVmb3JldGV4dH1cblxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ319XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1vdmluZ3RpdGxlfVxuICAgICAgICAgICAgc3R5bGU9e29mZnNldH0+XG4gICAgICAgICAgICB7bW92aW5ndGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7YWZ0ZXJ0ZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=

/***/ },
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	!function(e, t) {
	     true ? module.exports = t(__webpack_require__(3)) : "function" == typeof define && define.amd ? define([ "react" ], t) : "object" == typeof exports ? exports.Particles = t(require("react")) : e.Particles = t(e.React);
	}(this, function(e) {
	    return function(e) {
	        function t(i) {
	            if (a[i]) return a[i].exports;
	            var r = a[i] = {
	                exports: {},
	                id: i,
	                loaded: !1
	            };
	            return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
	        }
	        var a = {};
	        return t.m = e, t.c = a, t.p = "", t(0);
	    }([ function(e, t, a) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = a(3);
	        t.Particles = i.default, t.default = i.default;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e) {
	            for (var a in e) t.hasOwnProperty(a) || (t[a] = e[a]);
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), i(a(11)), i(a(9));
	        var r = a(4);
	        t.Interact = r.default;
	        var s = a(5);
	        t.Modes = s.default;
	        var n = a(6);
	        t.Particle = n.default;
	        var o = a(7);
	        t.ParticleManager = o.default;
	        var c = a(8);
	        t.ParticlesLibrary = c.default;
	        var l = a(10);
	        t.Vendors = l.default;
	    }, function(t, a) {
	        t.exports = e;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        function r(e, t) {
	            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	            return !t || "object" != typeof t && "function" != typeof t ? e : t;
	        }
	        function s(e, t) {
	            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
	            e.prototype = Object.create(t && t.prototype, {
	                constructor: {
	                    value: e,
	                    enumerable: !1,
	                    writable: !0,
	                    configurable: !0
	                }
	            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	        }
	        var n = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var o = a(2), c = a(2), l = a(1), u = function(e) {
	            function t(e) {
	                i(this, t);
	                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
	                return a.state = {
	                    canvas: void 0,
	                    library: void 0
	                }, a.loadCanvas = a.loadCanvas.bind(a), a;
	            }
	            return s(t, e), n(t, [ {
	                key: "destroy",
	                value: function() {
	                    this.state.library.destroy();
	                }
	            }, {
	                key: "loadCanvas",
	                value: function(e) {
	                    var t = this;
	                    e && this.setState({
	                        canvas: e
	                    }, function() {
	                        t.state.library.loadCanvas(t.state.canvas), t.state.library.start();
	                    });
	                }
	            }, {
	                key: "componentWillMount",
	                value: function() {
	                    this.setState({
	                        library: new l.ParticlesLibrary(this.props.params)
	                    });
	                }
	            }, {
	                key: "componentWillUnmount",
	                value: function() {
	                    this.state.library.destroy(), this.setState({
	                        library: void 0
	                    });
	                }
	            }, {
	                key: "render",
	                value: function() {
	                    var e = this.props, t = e.width, a = e.height;
	                    return o.createElement("div", null, o.createElement("canvas", {
	                        ref: this.loadCanvas,
	                        style: l.deepExtend(this.props.style, {
	                            width: t,
	                            height: a
	                        })
	                    }));
	                }
	            } ]), t;
	        }(c.PureComponent);
	        u.defaultProps = {
	            width: "100%",
	            height: "100%",
	            params: {},
	            style: {}
	        }, t.default = u;
	    }, function(e, t) {
	        "use strict";
	        function a(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var i = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var r = function() {
	            function e(t, i) {
	                a(this, e), this.params = t, this.library = i;
	            }
	            return i(e, [ {
	                key: "linkParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), s = this.library.canvas, n = this.params.particles.line_linked;
	                    if (r <= this.params.particles.line_linked.distance) {
	                        var o = this.params.particles.line_linked.opacity - r / (1 / this.params.particles.line_linked.opacity) / this.params.particles.line_linked.distance;
	                        if (o > 0) {
	                            var c = this.params.particles.line_linked.color_rgb_line, l = c.r, u = c.g, p = c.b;
	                            s.ctx.save(), s.ctx.strokeStyle = "rgba( " + l + ", " + u + ", " + p + ", " + o + " )", 
	                            s.ctx.lineWidth = this.params.particles.line_linked.width, s.ctx.beginPath(), n.shadow.enable && (s.ctx.shadowBlur = n.shadow.blur, 
	                            s.ctx.shadowColor = n.shadow.color), s.ctx.moveTo(e.x, e.y), s.ctx.lineTo(t.x, t.y), 
	                            s.ctx.stroke(), s.ctx.closePath(), s.ctx.restore();
	                        }
	                    }
	                }
	            }, {
	                key: "attractParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i);
	                    if (r <= this.params.particles.line_linked.distance) {
	                        var s = a / (1e3 * this.params.particles.move.attract.rotateX), n = i / (1e3 * this.params.particles.move.attract.rotateY);
	                        e.vx -= s, e.vy -= n, t.vx += s, t.vy += n;
	                    }
	                }
	            }, {
	                key: "bounceParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), s = e.radius + t.radius;
	                    r <= s && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy);
	                }
	            } ]), e;
	        }();
	        t.default = r;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a) {
	                i(this, e), this.params = t, this.library = a;
	            }
	            return r(e, [ {
	                key: "pushParticles",
	                value: function(e, t) {
	                    var a = this.library, i = a.canvas, r = a.tmp, n = a.manager;
	                    r.pushing = !0;
	                    for (var o = 0; o < e; o++) this.params.particles.array.push(new s.Particle(this.params, this.library, this.params.particles.color, this.params.particles.opacity.value, {
	                        x: t ? t.pos_x : Math.random() * i.width,
	                        y: t ? t.pos_y : Math.random() * i.height
	                    })), o == e - 1 && (this.params.particles.move.enable || n.particlesDraw(), r.pushing = !1);
	                }
	            }, {
	                key: "removeParticles",
	                value: function(e) {
	                    var t = this.library.manager;
	                    this.params.particles.array.splice(0, e), this.params.particles.move.enable || t.particlesDraw();
	                }
	            }, {
	                key: "bubbleParticle",
	                value: function(e) {
	                    var t = this, a = this.library.tmp;
	                    if (this.params.interactivity.events.onhover.enable && s.isInArray("bubble", this.params.interactivity.events.onhover.mode)) {
	                        var i = e.x - this.params.interactivity.mouse.pos_x, r = e.y - this.params.interactivity.mouse.pos_y, n = Math.sqrt(i * i + r * r), o = 1 - n / this.params.interactivity.modes.bubble.distance, c = function() {
	                            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
	                        };
	                        if (n <= this.params.interactivity.modes.bubble.distance) {
	                            if (o >= 0 && "mousemove" == this.params.interactivity.status) {
	                                if (this.params.interactivity.modes.bubble.size != this.params.particles.size.value) if (this.params.interactivity.modes.bubble.size > this.params.particles.size.value) {
	                                    var l = e.radius + this.params.interactivity.modes.bubble.size * o;
	                                    l >= 0 && (e.radius_bubble = l);
	                                } else {
	                                    var u = e.radius - this.params.interactivity.modes.bubble.size, p = e.radius - u * o;
	                                    p > 0 ? e.radius_bubble = p : e.radius_bubble = 0;
	                                }
	                                if (this.params.interactivity.modes.bubble.opacity != this.params.particles.opacity.value) if (this.params.interactivity.modes.bubble.opacity > this.params.particles.opacity.value) {
	                                    var h = this.params.interactivity.modes.bubble.opacity * o;
	                                    h > e.opacity && h <= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = h);
	                                } else {
	                                    var m = e.opacity - (this.params.particles.opacity.value - this.params.interactivity.modes.bubble.opacity) * o;
	                                    m < e.opacity && m >= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = m);
	                                }
	                            }
	                        } else c();
	                        "mouseleave" == this.params.interactivity.status && c();
	                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("bubble", this.params.interactivity.events.onclick.mode) && a.bubble_clicking) {
	                        var v = e.x - this.params.interactivity.mouse.click_pos_x, d = e.y - this.params.interactivity.mouse.click_pos_y, y = Math.sqrt(v * v + d * d), b = (new Date().getTime() - this.params.interactivity.mouse.click_time) / 1e3;
	                        b > this.params.interactivity.modes.bubble.duration && (a.bubble_duration_end = !0), 
	                        b > 2 * this.params.interactivity.modes.bubble.duration && (a.bubble_clicking = !1, 
	                        a.bubble_duration_end = !1);
	                        var f = function(i, r, s, n, o) {
	                            if (i != r) if (a.bubble_duration_end) {
	                                if (void 0 != s) {
	                                    var c = n - b * (n - i) / t.params.interactivity.modes.bubble.duration, l = i - c, u = i + l;
	                                    "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u);
	                                }
	                            } else if (y <= t.params.interactivity.modes.bubble.distance) {
	                                var p = void 0;
	                                if (p = void 0 != s ? s : n, p != i) {
	                                    var h = n - b * (n - i) / t.params.interactivity.modes.bubble.duration;
	                                    "size" == o && (e.radius_bubble = h), "opacity" == o && (e.opacity_bubble = h);
	                                }
	                            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0);
	                        };
	                        a.bubble_clicking && (f(this.params.interactivity.modes.bubble.size, this.params.particles.size.value, e.radius_bubble, e.radius, "size"), 
	                        f(this.params.interactivity.modes.bubble.opacity, this.params.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
	                    }
	                }
	            }, {
	                key: "repulseParticle",
	                value: function(e) {
	                    var t = this, a = this.library, i = a.canvas, r = a.tmp;
	                    if (this.params.interactivity.events.onhover.enable && s.isInArray("repulse", this.params.interactivity.events.onhover.mode) && "mousemove" == this.params.interactivity.status) {
	                        var n = e.x - this.params.interactivity.mouse.pos_x, o = e.y - this.params.interactivity.mouse.pos_y, c = Math.sqrt(n * n + o * o), l = {
	                            x: n / c,
	                            y: o / c
	                        }, u = this.params.interactivity.modes.repulse.distance, p = 100, h = s.clamp(1 / u * (-1 * Math.pow(c / u, 2) + 1) * u * p, 0, 50), m = {
	                            x: e.x + l.x * h,
	                            y: e.y + l.y * h
	                        };
	                        "bounce" == this.params.particles.move.out_mode ? (m.x - e.radius > 0 && m.x + e.radius < i.width && (e.x = m.x), 
	                        m.y - e.radius > 0 && m.y + e.radius < i.height && (e.y = m.y)) : (e.x = m.x, e.y = m.y);
	                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("repulse", this.params.interactivity.events.onclick.mode)) if (r.repulse_finish || (r.repulse_count++, 
	                    r.repulse_count == this.params.particles.array.length && (r.repulse_finish = !0)), 
	                    r.repulse_clicking) {
	                        var v = Math.pow(this.params.interactivity.modes.repulse.distance / 6, 3), d = this.params.interactivity.mouse.click_pos_x - e.x, y = this.params.interactivity.mouse.click_pos_y - e.y, b = d * d + y * y, f = -v / b * 1, _ = function() {
	                            var a = Math.atan2(y, d);
	                            if (e.vx = f * Math.cos(a), e.vy = f * Math.sin(a), "bounce" == t.params.particles.move.out_mode) {
	                                var r = {
	                                    x: e.x + e.vx,
	                                    y: e.y + e.vy
	                                };
	                                r.x + e.radius > i.width ? e.vx = -e.vx : r.x - e.radius < 0 && (e.vx = -e.vx), 
	                                r.y + e.radius > i.height ? e.vy = -e.vy : r.y - e.radius < 0 && (e.vy = -e.vy);
	                            }
	                        };
	                        b <= v && _();
	                    } else 0 == r.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
	                }
	            }, {
	                key: "grabParticle",
	                value: function(e) {
	                    var t = this.library.canvas, a = this.params, i = a.interactivity, r = a.particles;
	                    if (i.events.onhover.enable && "mousemove" == i.status) {
	                        var s = e.x - i.mouse.pos_x, n = e.y - i.mouse.pos_y, o = Math.sqrt(s * s + n * n);
	                        if (o <= i.modes.grab.distance) {
	                            var c = i.modes.grab, l = c.line_linked.opacity - o / (1 / c.line_linked.opacity) / c.distance;
	                            if (l > 0) {
	                                var u = r.line_linked.color_rgb_line, p = u.r, h = u.g, m = u.b;
	                                t.ctx.strokeStyle = "rgba( " + p + ", " + h + ", " + m + ", " + l + " )", t.ctx.lineWidth = r.line_linked.width, 
	                                t.ctx.beginPath(), t.ctx.moveTo(e.x, e.y), t.ctx.lineTo(i.mouse.pos_x, i.mouse.pos_y), 
	                                t.ctx.stroke(), t.ctx.closePath();
	                            }
	                        }
	                    }
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	            return typeof e;
	        } : function(e) {
	            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        }, s = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var n = a(1), o = function() {
	            function e(t, a, r, s, n) {
	                i(this, e), this.params = t, this.library = a, this.setupSize(), this.setupPosition(n), 
	                this.setupColor(r), this.setupOpacity(), this.setupAnimation();
	            }
	            return s(e, [ {
	                key: "setupSize",
	                value: function() {
	                    this.radius = (this.params.particles.size.random ? Math.random() : 1) * this.params.particles.size.value, 
	                    this.params.particles.size.anim.enable && (this.size_status = !1, this.vs = this.params.particles.size.anim.speed / 100, 
	                    this.params.particles.size.anim.sync || (this.vs = this.vs * Math.random()));
	                }
	            }, {
	                key: "setupPosition",
	                value: function(e) {
	                    var t = this.library, a = t.canvas, i = t.vendors;
	                    this.x = e ? e.x : Math.random() * a.width, this.y = e ? e.y : Math.random() * a.height, 
	                    this.x > a.width - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), 
	                    this.y > a.height - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), 
	                    this.params.particles.move.bounce && i.checkOverlap(this, e);
	                }
	            }, {
	                key: "setupColor",
	                value: function(e) {
	                    this.color = n.getColor(e.value);
	                }
	            }, {
	                key: "setupOpacity",
	                value: function() {
	                    this.opacity = (this.params.particles.opacity.random ? Math.random() : 1) * this.params.particles.opacity.value, 
	                    this.params.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = this.params.particles.opacity.anim.speed / 100, 
	                    this.params.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
	                }
	            }, {
	                key: "setupAnimation",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = null;
	                    switch (this.params.particles.move.direction) {
	                      case "top":
	                        i = {
	                            x: 0,
	                            y: -1
	                        };
	                        break;
	
	                      case "top-right":
	                        i = {
	                            x: .5,
	                            y: -.5
	                        };
	                        break;
	
	                      case "right":
	                        i = {
	                            x: 1,
	                            y: 0
	                        };
	                        break;
	
	                      case "bottom-right":
	                        i = {
	                            x: .5,
	                            y: .5
	                        };
	                        break;
	
	                      case "bottom":
	                        i = {
	                            x: 0,
	                            y: 1
	                        };
	                        break;
	
	                      case "bottom-left":
	                        i = {
	                            x: -.5,
	                            y: 1
	                        };
	                        break;
	
	                      case "left":
	                        i = {
	                            x: -1,
	                            y: 0
	                        };
	                        break;
	
	                      case "top-left":
	                        i = {
	                            x: -.5,
	                            y: -.5
	                        };
	                        break;
	
	                      default:
	                        i = {
	                            x: 0,
	                            y: 0
	                        };
	                    }
	                    this.params.particles.move.straight ? (this.vx = i.x, this.vy = i.y, this.params.particles.move.random && (this.vx = this.vx * Math.random(), 
	                    this.vy = this.vy * Math.random())) : (this.vx = i.x + Math.random() - .5, this.vy = i.y + Math.random() - .5), 
	                    this.vx_i = this.vx, this.vy_i = this.vy;
	                    var s = this.params.particles.shape.type;
	                    if ("object" == ("undefined" == typeof s ? "undefined" : r(s))) {
	                        if (s instanceof Array) {
	                            var n = s[Math.floor(Math.random() * s.length)];
	                            this.shape = n;
	                        }
	                    } else this.shape = s;
	                    if ("image" == this.shape) {
	                        var o = this.params.particles.shape;
	                        this.img = {
	                            src: o.image.src,
	                            ratio: o.image.width / o.image.height
	                        }, this.img.ratio || (this.img.ratio = 1), "svg" == t.img_type && void 0 != t.source_svg && (a.createSvgImg(this), 
	                        t.pushing && (this.img.loaded = !1));
	                    }
	                }
	            }, {
	                key: "draw",
	                value: function e() {
	                    var t = this, a = this.library, i = a.canvas, r = a.tmp, s = a.vendors, n = (this.params.particles, 
	                    void 0);
	                    n = void 0 != this.radius_bubble ? this.radius_bubble : this.radius;
	                    var o = void 0;
	                    o = void 0 != this.opacity_bubble ? this.opacity_bubble : this.opacity;
	                    var c = void 0;
	                    if (this.color.rgb) {
	                        var l = this.color.rgb, u = l.r, p = l.g, h = l.b;
	                        c = "rgba( " + u + ", " + p + ", " + h + ", " + o + " )";
	                    } else {
	                        var m = this.color.hsl, v = m.h, d = m.s, y = m.l;
	                        c = "hsla( " + v + ", " + d + ", " + y + ", " + o + " )";
	                    }
	                    switch (i.ctx.fillStyle = c, i.ctx.beginPath(), this.shape) {
	                      case "circle":
	                        i.ctx.arc(this.x, this.y, n, 0, 2 * Math.PI, !1);
	                        break;
	
	                      case "edge":
	                        i.ctx.rect(this.x - n, this.y - n, 2 * n, 2 * n);
	                        break;
	
	                      case "triangle":
	                        s.drawShape(i.ctx, this.x - n, this.y + n / 1.66, 2 * n, 3, 2);
	                        break;
	
	                      case "polygon":
	                        s.drawShape(i.ctx, this.x - n / (this.params.particles.shape.polygon.nb_sides / 3.5), this.y - n / .76, 2.66 * n / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 1);
	                        break;
	
	                      case "star":
	                        s.drawShape(i.ctx, this.x - 2 * n / (this.params.particles.shape.polygon.nb_sides / 4), this.y - n / 1.52, 2 * n * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 2);
	                        break;
	
	                      case "image":
	                        var e = function(e) {
	                            i.ctx.drawImage(e, t.x - n, t.y - n, 2 * n, 2 * n / t.img.ratio);
	                        }, b = void 0;
	                        b = "svg" == r.img_type ? this.img.obj : r.img_obj, b && e(b);
	                    }
	                    i.ctx.closePath(), this.params.particles.shape.stroke.width > 0 && (i.ctx.strokeStyle = this.params.particles.shape.stroke.color, 
	                    i.ctx.lineWidth = this.params.particles.shape.stroke.width, i.ctx.stroke()), i.ctx.fill();
	                }
	            } ]), e;
	        }();
	        t.default = o;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a, r, s, n) {
	                i(this, e), this.params = t, this.interact = a, this.modes = r, this.vendors = s, 
	                this.library = n;
	            }
	            return r(e, [ {
	                key: "particlesCreate",
	                value: function() {
	                    for (var e = this.params.particles, t = e.color, a = e.opacity, i = 0; i < this.params.particles.number.value; i++) this.params.particles.array.push(new s.Particle(this.params, this.library, t, a.value));
	                }
	            }, {
	                key: "particlesUpdate",
	                value: function() {
	                    var e = this, t = this.library, a = t.canvas, i = t.interact, r = t.modes;
	                    this.params.particles.array.forEach(function(t, n) {
	                        if (e.params.particles.move.enable) {
	                            var o = e.params.particles.move.speed / 2;
	                            t.x += t.vx * o, t.y += t.vy * o;
	                        }
	                        e.params.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= e.params.particles.opacity.value && (t.opacity_status = !1), 
	                        t.opacity += t.vo) : (t.opacity <= e.params.particles.opacity.anim.opacity_min && (t.opacity_status = !0), 
	                        t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), e.params.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= e.params.particles.size.value && (t.size_status = !1), 
	                        t.radius += t.vs) : (t.radius <= e.params.particles.size.anim.size_min && (t.size_status = !0), 
	                        t.radius -= t.vs), t.radius < 0 && (t.radius = 0));
	                        var c = void 0;
	                        switch (c = "bounce" == e.params.particles.move.out_mode ? {
	                            x_left: t.radius,
	                            x_right: a.width,
	                            y_top: t.radius,
	                            y_bottom: a.height
	                        } : {
	                            x_left: -t.radius,
	                            x_right: a.width + t.radius,
	                            y_top: -t.radius,
	                            y_bottom: a.height + t.radius
	                        }, t.x - t.radius > a.width ? (t.x = c.x_left, t.y = Math.random() * a.height) : t.x + t.radius < 0 && (t.x = c.x_right, 
	                        t.y = Math.random() * a.height), t.y - t.radius > a.height ? (t.y = c.y_top, t.x = Math.random() * a.width) : t.y + t.radius < 0 && (t.y = c.y_bottom, 
	                        t.x = Math.random() * a.width), e.params.particles.move.out_mode) {
	                          case "bounce":
	                            t.x + t.radius > a.width ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), 
	                            t.y + t.radius > a.height ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
	                        }
	                        if (s.isInArray("grab", e.params.interactivity.events.onhover.mode) && r.grabParticle(t), 
	                        (s.isInArray("bubble", e.params.interactivity.events.onhover.mode) || s.isInArray("bubble", e.params.interactivity.events.onclick.mode)) && r.bubbleParticle(t), 
	                        (s.isInArray("repulse", e.params.interactivity.events.onhover.mode) || s.isInArray("repulse", e.params.interactivity.events.onclick.mode)) && r.repulseParticle(t), 
	                        e.params.particles.line_linked.enable || e.params.particles.move.attract.enable) for (var l = n + 1; l < e.params.particles.array.length; l++) {
	                            var u = e.params.particles.array[l];
	                            e.params.particles.line_linked.enable && i.linkParticles(t, u), e.params.particles.move.attract.enable && i.attractParticles(t, u), 
	                            e.params.particles.move.bounce && i.bounceParticles(t, u);
	                        }
	                    });
	                }
	            }, {
	                key: "particlesDraw",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.manager;
	                    t.ctx.clearRect(0, 0, t.width, t.height), a.particlesUpdate(), this.params.particles.array.forEach(function(e) {
	                        e.draw();
	                    });
	                }
	            }, {
	                key: "particlesEmpty",
	                value: function() {
	                    this.params.particles.array = [];
	                }
	            }, {
	                key: "particlesRefresh",
	                value: function() {
	                    var e = this.library, t = e.tmp;
	                    e.vendors;
	                    cancelAnimationFrame(t.checkAnimFrame), cancelAnimationFrame(t.drawAnimFrame), t.source_svg = void 0, 
	                    t.img_obj = void 0, t.count_svg = 0, this.particlesEmpty(), this.library.canvasClear(), 
	                    this.library.start();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t) {
	                i(this, e), this.tmp = {}, this.tmp = {}, this.loadParameters(t), this.extendParams(), 
	                this.interact = new s.Interact(this.params, this), this.modes = new s.Modes(this.params, this), 
	                this.vendors = new s.Vendors(this.params, this), this.manager = new s.ParticleManager(this.params, this.interact, this.modes, this.vendors, this);
	            }
	            return r(e, [ {
	                key: "loadParameters",
	                value: function(e) {
	                    var t = s.getDefaultParams(), a = s.deepExtend(t, e);
	                    this.params = a;
	                }
	            }, {
	                key: "loadCanvas",
	                value: function(e) {
	                    this.canvas = {
	                        element: e,
	                        width: e.offsetWidth,
	                        height: e.offsetHeight
	                    };
	                }
	            }, {
	                key: "start",
	                value: function() {
	                    var e = this.vendors;
	                    e.eventsListeners(), e.start();
	                }
	            }, {
	                key: "destroy",
	                value: function() {
	                    var e = this.tmp;
	                    this.detachListeners(), this.vendors.detachListeners(), cancelAnimationFrame(e.drawAnimFrame), 
	                    this.canvasClear();
	                }
	            }, {
	                key: "detachListeners",
	                value: function() {
	                    window.removeEventListener("resize", this.onWindowResize);
	                }
	            }, {
	                key: "extendParams",
	                value: function() {
	                    this.extendTmpDefinition(), this.onWindowResize = this.onWindowResize.bind(this);
	                }
	            }, {
	                key: "extendTmpDefinition",
	                value: function() {
	                    var e = this.tmp;
	                    e.obj = {
	                        size_value: this.params.particles.size.value,
	                        size_anim_speed: this.params.particles.size.anim.speed,
	                        move_speed: this.params.particles.move.speed,
	                        line_linked_distance: this.params.particles.line_linked.distance,
	                        line_linked_width: this.params.particles.line_linked.width,
	                        mode_grab_distance: this.params.interactivity.modes.grab.distance,
	                        mode_bubble_distance: this.params.interactivity.modes.bubble.distance,
	                        mode_bubble_size: this.params.interactivity.modes.bubble.size,
	                        mode_repulse_distance: this.params.interactivity.modes.repulse.distance
	                    };
	                }
	            }, {
	                key: "retinaInit",
	                value: function() {
	                    var e = this.canvas, t = this.tmp;
	                    this.params.retina_detect && window.devicePixelRatio > 1 ? (e.pxratio = window.devicePixelRatio, 
	                    t.retina = !0, e.width = e.element.offsetWidth * e.pxratio, e.height = e.element.offsetHeight * e.pxratio, 
	                    this.params.particles.size.value = t.obj.size_value * e.pxratio, this.params.particles.size.anim.speed = t.obj.size_anim_speed * e.pxratio, 
	                    this.params.particles.move.speed = t.obj.move_speed * e.pxratio, this.params.particles.line_linked.distance = t.obj.line_linked_distance * e.pxratio, 
	                    this.params.interactivity.modes.grab.distance = t.obj.mode_grab_distance * e.pxratio, 
	                    this.params.interactivity.modes.bubble.distance = t.obj.mode_bubble_distance * e.pxratio, 
	                    this.params.particles.line_linked.width = t.obj.line_linked_width * e.pxratio, this.params.interactivity.modes.bubble.size = t.obj.mode_bubble_size * e.pxratio, 
	                    this.params.interactivity.modes.repulse.distance = t.obj.mode_repulse_distance * e.pxratio) : (e.pxratio = 1, 
	                    t.retina = !1);
	                }
	            }, {
	                key: "canvasInit",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx = e.element.getContext("2d");
	                }
	            }, {
	                key: "canvasSize",
	                value: function() {
	                    var e = this.canvas;
	                    e.element.width = e.width, e.element.height = e.height, this.params && this.params.interactivity.events.resize && window.addEventListener("resize", this.onWindowResize);
	                }
	            }, {
	                key: "canvasPaint",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx.fillRect(0, 0, e.width, e.height);
	                }
	            }, {
	                key: "canvasClear",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx.clearRect(0, 0, e.width, e.height);
	                }
	            }, {
	                key: "onWindowResize",
	                value: function() {
	                    var e = this.canvas, t = this.manager, a = this.tmp, i = this.vendors;
	                    e.width = e.element.offsetWidth, e.height = e.element.offsetHeight, a.retina && (e.width *= e.pxratio, 
	                    e.height *= e.pxratio), e.element.width = e.width, e.element.height = e.height, 
	                    this.params.particles.move.enable || (t.particlesEmpty(), t.particlesCreate(), t.particlesDraw(), 
	                    i.densityAutoParticles()), i.densityAutoParticles();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t) {
	        "use strict";
	        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	            return typeof e;
	        } : function(e) {
	            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        };
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), t.hexToRgb = function(e) {
	            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	            e = e.replace(t, function(e, t, a, i) {
	                return t + t + a + a + i + i;
	            });
	            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	            return a ? {
	                r: parseInt(a[1], 16),
	                g: parseInt(a[2], 16),
	                b: parseInt(a[3], 16)
	            } : null;
	        }, t.clamp = function(e, t, a) {
	            return Math.min(Math.max(e, t), a);
	        }, t.isInArray = function(e, t) {
	            return t.indexOf(e) > -1;
	        }, t.deepExtend = function(e, a) {
	            for (var i in a) a[i] && a[i].constructor && a[i].constructor === Object ? (e[i] = e[i] || {}, 
	            t.deepExtend(e[i], a[i])) : e[i] = a[i];
	            return e;
	        }, t.getColor = function(e) {
	            var i = {};
	            if ("object" == ("undefined" == typeof e ? "undefined" : a(e))) if (e instanceof Array) {
	                var r = e[Math.floor(Math.random() * e.length)];
	                i.rgb = t.hexToRgb(r);
	            } else {
	                var s = e.r, n = e.g, o = e.b;
	                if (void 0 !== s && void 0 !== n && void 0 !== o) i.rgb = {
	                    r: s,
	                    g: n,
	                    b: o
	                }; else {
	                    var c = e.h, l = e.s, u = e.l;
	                    void 0 !== c && void 0 !== n && void 0 !== o && (i.hsl = {
	                        h: c,
	                        s: l,
	                        l: u
	                    });
	                }
	            } else "random" == e ? i.rgb = {
	                r: Math.floor(255 * Math.random()) + 1,
	                g: Math.floor(255 * Math.random()) + 1,
	                b: Math.floor(255 * Math.random()) + 1
	            } : "string" == typeof e && (i.rgb = t.hexToRgb(e));
	            return i;
	        };
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a) {
	                i(this, e), this.params = t, this.library = a, this.onMouseMove = this.onMouseMove.bind(this), 
	                this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this);
	            }
	            return r(e, [ {
	                key: "eventsListeners",
	                value: function() {
	                    var e = this.params.interactivity, t = this.library.canvas;
	                    "window" == e.detect_on ? e.el = window : e.el = t.element, (e.events.onhover.enable || e.events.onclick.enable) && (e.el.addEventListener("mousemove", this.onMouseMove), 
	                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick);
	                }
	            }, {
	                key: "detachListeners",
	                value: function() {
	                    var e = this.params.interactivity, t = this.library.tmp;
	                    e.el && ((e.events.onhover.enable || e.events.onclick.enable) && (e.el.removeEventListener("mousemove", this.onMouseMove), 
	                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick)), 
	                    window.cancelAnimationFrame(t.drawAnimFrame);
	                }
	            }, {
	                key: "onMouseMove",
	                value: function(e) {
	                    var t = this.library, a = t.canvas, i = t.tmp, r = this.params.interactivity, s = void 0;
	                    s = r.el == window ? {
	                        x: e.clientX,
	                        y: e.clientY
	                    } : {
	                        x: e.offsetX || e.clientX,
	                        y: e.offsetY || e.clientY
	                    }, r.mouse.pos_x = s.x, r.mouse.pos_y = s.y, i.retina && (r.mouse.pos_x *= a.pxratio, 
	                    r.mouse.pos_y *= a.pxratio), r.status = "mousemove";
	                }
	            }, {
	                key: "onMouseLeave",
	                value: function(e) {
	                    var t = this.params.interactivity;
	                    t.mouse.pos_x = null, t.mouse.pos_y = null, t.status = "mouseleave";
	                }
	            }, {
	                key: "onClick",
	                value: function() {
	                    var e = this.library, t = e.modes, a = e.tmp, i = this.params, r = i.interactivity, s = i.particles;
	                    if (r.mouse.click_pos_x = r.mouse.pos_x, r.mouse.click_pos_y = r.mouse.pos_y, r.mouse.click_time = new Date().getTime(), 
	                    r.events.onclick.enable) switch (r.events.onclick.mode) {
	                      case "push":
	                        s.move.enable ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : 1 == r.modes.push.particles_nb ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : r.modes.push.particles_nb > 1 && t.pushParticles(r.modes.push.particles_nb);
	                        break;
	
	                      case "remove":
	                        t.removeParticles(r.modes.remove.particles_nb);
	                        break;
	
	                      case "bubble":
	                        a.bubble_clicking = !0;
	                        break;
	
	                      case "repulse":
	                        a.repulse_clicking = !0, a.repulse_count = 0, a.repulse_finish = !1, setTimeout(function() {
	                            a.repulse_clicking = !1;
	                        }, 1e3 * r.modes.repulse.duration);
	                    }
	                }
	            }, {
	                key: "densityAutoParticles",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.modes, i = e.tmp, r = this.params.particles;
	                    if (r.number.density.enable) {
	                        var s = t.element.width * t.element.height / 1e3;
	                        i.retina && (s = s / t.pxratio * 2);
	                        var n = s * r.number.value / r.number.density.value_area, o = r.array.length - n;
	                        o < 0 ? a.pushParticles(Math.abs(o)) : a.removeParticles(o);
	                    }
	                }
	            }, {
	                key: "checkOverlap",
	                value: function(e, t) {
	                    var a = this.library, i = a.canvas, r = a.vendors, s = this.params.particles;
	                    s.array.forEach(function(a) {
	                        var s = a, n = e.x - s.x, o = e.y - s.y, c = Math.sqrt(n * n + o * o);
	                        c <= e.radius + s.radius && (e.x = t ? t.x : Math.random() * i.width, e.y = t ? t.y : Math.random() * i.height, 
	                        r.checkOverlap(e));
	                    });
	                }
	            }, {
	                key: "createSvgImg",
	                value: function(e) {
	                    var t = this.library.tmp, a = t.source_svg, i = /#([0-9A-F]{3,6})/gi, r = a.replace(i, function(t, a, i, r) {
	                        var s = void 0;
	                        if (e.color.rgb) {
	                            var n = e.color.rgb, o = n.r, c = n.g, l = n.b;
	                            s = "rgba( " + o + ", " + c + ", " + l + ", " + e.opacity + " )";
	                        } else {
	                            var u = e.color.hsl, p = u.h, h = u.s, m = u.l;
	                            s = "rgba( " + p + ", " + h + ", " + m + ", " + e.opacity + " )";
	                        }
	                        return s;
	                    }), s = new Blob([ r ], {
	                        type: "image/svg+xml;charset=utf-8"
	                    }), n = window.URL || window, o = n.createObjectURL(s), c = new Image();
	                    c.addEventListener("load", function() {
	                        e.img.obj = c, e.img.loaded = !0, n.revokeObjectURL(o), t.count_svg++;
	                    }), c.src = o;
	                }
	            }, {
	                key: "destroy",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.tmp;
	                    cancelAnimationFrame(a.drawAnimFrame), t.element.remove();
	                }
	            }, {
	                key: "drawShape",
	                value: function(e, t, a, i, r, s) {
	                    var n = r * s, o = r / s, c = 180 * (o - 2) / o, l = Math.PI - Math.PI * c / 180;
	                    e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
	                    for (var u = 0; u < n; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
	                    e.fill(), e.restore();
	                }
	            }, {
	                key: "exportImg",
	                value: function() {
	                    var e = this.library.canvas;
	                    window.open(e.element.toDataURL("image/png"), "_blank");
	                }
	            }, {
	                key: "loadImg",
	                value: function(e) {
	                    var t = this.library, a = t.tmp, i = t.vendors, r = this.params.particles;
	                    if (a.img_error = void 0, "" != r.shape.image.src) if ("svg" == e) {
	                        var s = new XMLHttpRequest();
	                        s.open("GET", r.shape.image.src), s.onreadystatechange = function(e) {
	                            4 == s.readyState && (200 == s.status ? (a.source_svg = e.currentTarget.response, 
	                            i.checkBeforeDraw()) : (console.log("Error react-particles-js - image not found"), 
	                            a.img_error = !0));
	                        }, s.send();
	                    } else {
	                        var n = new Image();
	                        n.addEventListener("load", function() {
	                            a.img_obj = n, i.checkBeforeDraw();
	                        }), n.src = r.shape.image.src;
	                    } else console.log("Error react-particles-js - no image.src"), a.img_error = !0;
	                }
	            }, {
	                key: "draw",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.manager, i = e.vendors, r = this.params.particles;
	                    "image" == r.shape.type ? "svg" == t.img_type ? t.count_svg >= r.number.value ? (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : void 0 != t.img_obj ? (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame));
	                }
	            }, {
	                key: "checkBeforeDraw",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
	                    if ("image" == i.shape.type) if ("svg" == t.img_type && void 0 == t.source_svg) {
	                        var r = void 0;
	                        t.checkAnimFrame = requestAnimationFrame(r);
	                    } else cancelAnimationFrame(t.checkAnimFrame), t.img_error || (a.init(), a.draw()); else a.init(), 
	                    a.draw();
	                }
	            }, {
	                key: "init",
	                value: function() {
	                    var e = this.library, t = e.manager, a = e.vendors, i = this.params.particles;
	                    e.retinaInit(), e.canvasInit(), e.canvasSize(), t.particlesCreate(), a.densityAutoParticles(), 
	                    i.line_linked.color_rgb_line = s.hexToRgb(i.line_linked.color);
	                }
	            }, {
	                key: "start",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
	                    s.isInArray("image", i.shape.type) ? (t.img_type = i.shape.image.src.substr(i.shape.image.src.length - 3), 
	                    a.loadImg(t.img_type)) : a.checkBeforeDraw();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), t.getDefaultParams = function() {
	            return {
	                particles: {
	                    number: {
	                        value: 40,
	                        density: {
	                            enable: !1,
	                            value_area: 1200
	                        }
	                    },
	                    color: {
	                        value: "#FFF"
	                    },
	                    shape: {
	                        type: "circle",
	                        stroke: {
	                            width: 0,
	                            color: "#000000"
	                        },
	                        polygon: {
	                            nb_sides: 5
	                        },
	                        image: {
	                            src: "",
	                            width: 100,
	                            height: 100
	                        }
	                    },
	                    opacity: {
	                        value: .5,
	                        random: !1,
	                        anim: {
	                            enable: !0,
	                            speed: 1,
	                            opacity_min: .1,
	                            sync: !1
	                        }
	                    },
	                    size: {
	                        value: 1,
	                        random: !1,
	                        anim: {
	                            enable: !1,
	                            speed: 40,
	                            size_min: 0,
	                            sync: !1
	                        }
	                    },
	                    line_linked: {
	                        enable: !0,
	                        distance: 150,
	                        color: "#FFF",
	                        opacity: .6,
	                        width: 1,
	                        shadow: {
	                            enable: !1,
	                            blur: 5,
	                            color: "lime"
	                        }
	                    },
	                    move: {
	                        enable: !0,
	                        speed: 3,
	                        direction: "none",
	                        random: !1,
	                        straight: !1,
	                        out_mode: "bounce",
	                        bounce: !0,
	                        attract: {
	                            enable: !1,
	                            rotateX: 3e3,
	                            rotateY: 3e3
	                        }
	                    },
	                    array: []
	                },
	                interactivity: {
	                    detect_on: "canvas",
	                    events: {
	                        onhover: {
	                            enable: !1,
	                            mode: "grab"
	                        },
	                        onclick: {
	                            enable: !1,
	                            mode: "repulse"
	                        },
	                        resize: !0
	                    },
	                    modes: {
	                        grab: {
	                            distance: 180,
	                            line_linked: {
	                                opacity: .35
	                            }
	                        },
	                        bubble: {
	                            distance: 200,
	                            size: 80,
	                            duration: .4
	                        },
	                        repulse: {
	                            distance: 100,
	                            duration: 5
	                        },
	                        push: {
	                            particles_nb: 4
	                        },
	                        remove: {
	                            particles_nb: 2
	                        }
	                    },
	                    mouse: {}
	                },
	                retina_detect: !0
	            };
	        };
	    } ]);
	});

/***/ },
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(90);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 152 */,
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(8);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(9);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(10);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(12);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(11);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(17);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _link = __webpack_require__(88);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _glamor = __webpack_require__(135);
	
	var _FullBackground = __webpack_require__(139);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _MovingText = __webpack_require__(141);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Error = function (_React$Component) {
	  (0, _inherits3.default)(Error, _React$Component);
	
	  function Error() {
	    (0, _classCallCheck3.default)(this, Error);
	    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Error, [{
	    key: 'renderError',
	    value: function renderError() {
	      return this.props.statusCode ? ' An error occurred on server.' : ' An error occurred on client.';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: centeredbox },
	        _react2.default.createElement(_FullBackground2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: centeredvert },
	          _react2.default.createElement(
	            'h2',
	            { className: errortext },
	            'The page your looking for can\'t be found.',
	            this.renderError()
	          ),
	          _react2.default.createElement(_MovingText2.default, {
	            movingtext: this.props.statusCode,
	            style: movingText }),
	          _react2.default.createElement(
	            _link2.default,
	            { href: '/' },
	            _react2.default.createElement(
	              'a',
	              { className: link },
	              'Go Back Home'
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps(_ref) {
	      var res = _ref.res,
	          jsonPageRes = _ref.jsonPageRes;
	
	      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
	      return { statusCode: statusCode };
	    }
	  }]);
	  return Error;
	}(_react2.default.Component);
	
	exports.default = Error;
	
	
	var movingText = {
	  background: (0, _glamor.style)({
	    height: '100%',
	    width: '100%'
	  }),
	  movingtitle: (0, _glamor.style)({
	    color: '#2b2b2b',
	    fontSize: '1000%',
	    '@media(max-width: 640px)': {
	      fontSize: '300%'
	    }
	  }),
	  movingtitlebackground: 'rgba(99, 231, 175, 0.8)',
	  animation: {
	    transform_mouse_pos_x: '-100',
	    transform_mouse_pos_y: '-100',
	    shadow_mouse_pos_x: '-20',
	    shadow_mouse_pos_y: '20'
	  }
	};
	
	var errortext = (0, _css2.default)({
	  fontSize: '140%',
	  padding: '0',
	  margin: '0',
	  '@media(max-width: 640px)': {
	    fontSize: '90%'
	  }
	});
	
	var errornumber = (0, _css2.default)({
	  fontSize: '2000%',
	  padding: '0',
	  margin: '0',
	  '@media(max-width: 640px)': {
	    fontSize: '600%',
	    padding: '20px 10px',
	    margin: 'auto'
	  }
	});
	
	var link = (0, _css2.default)({
	  color: '#242424',
	  textDecoration: 'none',
	  border: '3px solid #242424',
	  padding: '10px'
	});
	
	var centeredbox = (0, _css2.default)({
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  width: '100vw',
	  height: '100vh'
	});
	
	var centeredvert = (0, _css2.default)({
	  padding: '2em',
	  maxWidth: '50%',
	  textAlign: 'center',
	  zIndex: '1',
	  background: 'transparent',
	  color: '#242424'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsImNlbnRlcmVkYm94IiwiY2VudGVyZWR2ZXJ0IiwiZXJyb3J0ZXh0IiwicmVuZGVyRXJyb3IiLCJtb3ZpbmdUZXh0IiwibGluayIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibW92aW5ndGl0bGUiLCJjb2xvciIsImZvbnRTaXplIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwicGFkZGluZyIsIm1hcmdpbiIsImVycm9ybnVtYmVyIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVNMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxXQUFoQjtBQUNFLHFFQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBV0MsWUFBaEI7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFXQyxTQUFmO0FBQUE7QUFFRyxpQkFBS0MsV0FBTDtBQUZILFdBREY7QUFLRTtBQUNFLHdCQUFZLEtBQUtMLEtBQUwsQ0FBV0MsVUFEekI7QUFFRSxtQkFBT0ssVUFGVCxHQUxGO0FBUUU7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLFdBQVdDLElBQWQ7QUFBQTtBQUFBO0FBREY7QUFSRjtBQUZGLE9BREY7QUFpQkQ7OzswQ0EvQjZDO0FBQUEsVUFBcEJDLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLFVBQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFDNUMsVUFBTVIsYUFBYU8sTUFDZkEsSUFBSVAsVUFEVyxHQUVkUSxjQUFjQSxZQUFZQyxNQUExQixHQUFtQyxJQUZ4QztBQUdBLGFBQU8sRUFBRVQsc0JBQUYsRUFBUDtBQUNEOzs7RUFQZ0MsZ0JBQU1VLFM7O2tCQUFwQlosSzs7O0FBb0NyQixJQUFNTyxhQUFhO0FBQ2pCTSxjQUFZLG1CQUFNO0FBQ2hCQyxZQUFRLE1BRFE7QUFFaEJDLFdBQU87QUFGUyxHQUFOLENBREs7QUFLakJDLGVBQWEsbUJBQU07QUFDakJDLFdBQU8sU0FEVTtBQUVqQkMsY0FBVSxPQUZPO0FBR2pCLGdDQUE0QjtBQUMxQkEsZ0JBQVU7QUFEZ0I7QUFIWCxHQUFOLENBTEk7QUFZakJDLHlCQUF1Qix5QkFaTjtBQWFqQkMsYUFBVztBQUNUQywyQkFBdUIsTUFEZDtBQUVUQywyQkFBdUIsTUFGZDtBQUdUQyx3QkFBb0IsS0FIWDtBQUlUQyx3QkFBb0I7QUFKWDtBQWJNLENBQW5COztBQXFCQSxJQUFNbkIsWUFBWSxtQkFBSTtBQUNwQmEsWUFBVSxNQURVO0FBRXBCTyxXQUFTLEdBRlc7QUFHcEJDLFVBQVEsR0FIWTtBQUlwQiw4QkFBNEI7QUFDMUJSLGNBQVU7QUFEZ0I7QUFKUixDQUFKLENBQWxCOztBQVNBLElBQU1TLGNBQWMsbUJBQUk7QUFDdEJULFlBQVUsT0FEWTtBQUV0Qk8sV0FBUyxHQUZhO0FBR3RCQyxVQUFRLEdBSGM7QUFJdEIsOEJBQTRCO0FBQzFCUixjQUFVLE1BRGdCO0FBRTFCTyxhQUFTLFdBRmlCO0FBRzFCQyxZQUFRO0FBSGtCO0FBSk4sQ0FBSixDQUFwQjs7QUFXQSxJQUFNbEIsT0FBTyxtQkFBSTtBQUNmUyxTQUFPLFNBRFE7QUFFZlcsa0JBQWdCLE1BRkQ7QUFHZkMsVUFBUSxtQkFITztBQUlmSixXQUFTO0FBSk0sQ0FBSixDQUFiOztBQU9BLElBQU10QixjQUFjLG1CQUFJO0FBQ3RCMkIsV0FBUyxNQURhO0FBRXRCQyxjQUFZLFFBRlU7QUFHdEJDLGtCQUFnQixRQUhNO0FBSXRCakIsU0FBTyxPQUplO0FBS3RCRCxVQUFRO0FBTGMsQ0FBSixDQUFwQjs7QUFRQSxJQUFNVixlQUFlLG1CQUFJO0FBQ3ZCcUIsV0FBUyxLQURjO0FBRXZCUSxZQUFVLEtBRmE7QUFHdkJDLGFBQVcsUUFIWTtBQUl2QkMsVUFBUSxHQUplO0FBS3ZCdEIsY0FBWSxhQUxXO0FBTXZCSSxTQUFPO0FBTmdCLENBQUosQ0FBckIiLCJmaWxlIjoiX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkdmVydH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3J0ZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcigpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE1vdmluZ1RleHRcbiAgICAgICAgICAgIG1vdmluZ3RleHQ9e3RoaXMucHJvcHMuc3RhdHVzQ29kZX1cbiAgICAgICAgICAgIHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmt9PkdvIEJhY2sgSG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogJyMyYjJiMmInLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzMwMCUnLFxuICAgIH1cbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogJ3JnYmEoOTksIDIzMSwgMTc1LCAwLjgpJyxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9ydGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICc5MCUnLFxuICB9XG59KVxuXG5jb25zdCBlcnJvcm51bWJlciA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMjAwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnNjAwJScsXG4gICAgcGFkZGluZzogJzIwcHggMTBweCcsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gIH1cbn0pXG5cbmNvbnN0IGxpbmsgPSBjc3Moe1xuICBjb2xvcjogJyMyNDI0MjQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBib3JkZXI6ICczcHggc29saWQgIzI0MjQyNCcsXG4gIHBhZGRpbmc6ICcxMHB4Jyxcbn0pXG5cbmNvbnN0IGNlbnRlcmVkYm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnXG59KVxuXG5jb25zdCBjZW50ZXJlZHZlcnQgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgbWF4V2lkdGg6ICc1MCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6ICcjMjQyNDI0Jyxcbn0pXG4iXX0=
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/_error"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/_error") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var particles = {
	  particles: {
	    number: {
	      value: 80,
	      density: {
	        enable: true,
	        value_area: 800
	      }
	    },
	    color: {
	      value: "#000"
	    },
	    opacity: {
	      value: 0.5,
	      random: false,
	      anim: {
	        enable: false,
	        speed: 1,
	        opacity_min: 0.1,
	        sync: false
	      }
	    },
	    size: {
	      value: 3,
	      random: true,
	      anim: {
	        enable: false,
	        speed: 40,
	        size_min: 0.1,
	        sync: false
	      }
	    },
	    line_linked: {
	      enable: true,
	      distance: 150,
	      color: "#000",
	      opacity: 0.4,
	      width: 1
	    },
	    move: {
	      enable: true,
	      speed: 6,
	      direction: "none",
	      random: false,
	      straight: false,
	      out_mode: "out",
	      bounce: false,
	      attract: {
	        enable: false,
	        rotateX: 600,
	        rotateY: 1200
	      }
	    }
	  },
	  interactivity: {
	    detect_on: "canvas",
	    events: {
	      onhover: {
	        enable: true,
	        mode: "repulse"
	      },
	      onclick: {
	        enable: true,
	        mode: "push"
	      },
	      resize: true
	    },
	    modes: {
	      grab: {
	        distance: 400,
	        line_linked: {
	          opacity: 1
	        }
	      },
	      bubble: {
	        distance: 400,
	        size: 40,
	        duration: 2,
	        opacity: 8,
	        speed: 3
	      },
	      repulse: {
	        distance: 200,
	        duration: 0.4
	      },
	      push: {
	        particles_nb: 4
	      },
	      remove: {
	        particles_nb: 2
	      }
	    }
	  },
	  retina_detect: true
	};
	
	exports.default = particles;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvcGFydGljbGVzLmpzIl0sIm5hbWVzIjpbInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwid2lkdGgiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxZQUFZO0FBQ2hCQSxhQUFXO0FBQ1BDLFlBQVE7QUFDTkMsYUFBTyxFQUREO0FBRU5DLGVBQVM7QUFDUEMsZ0JBQVEsSUFERDtBQUVQQyxvQkFBWTtBQUZMO0FBRkgsS0FERDtBQVFQQyxXQUFPO0FBQ0xKLGFBQU87QUFERixLQVJBO0FBV1BLLGFBQVM7QUFDUEwsYUFBTyxHQURBO0FBRVBNLGNBQVEsS0FGRDtBQUdQQyxZQUFNO0FBQ0pMLGdCQUFRLEtBREo7QUFFSk0sZUFBTyxDQUZIO0FBR0pDLHFCQUFhLEdBSFQ7QUFJSkMsY0FBTTtBQUpGO0FBSEMsS0FYRjtBQXFCUEMsVUFBTTtBQUNKWCxhQUFPLENBREg7QUFFSk0sY0FBUSxJQUZKO0FBR0pDLFlBQU07QUFDSkwsZ0JBQVEsS0FESjtBQUVKTSxlQUFPLEVBRkg7QUFHSkksa0JBQVUsR0FITjtBQUlKRixjQUFNO0FBSkY7QUFIRixLQXJCQztBQStCUEcsaUJBQWE7QUFDWFgsY0FBUSxJQURHO0FBRVhZLGdCQUFVLEdBRkM7QUFHWFYsYUFBTyxNQUhJO0FBSVhDLGVBQVMsR0FKRTtBQUtYVSxhQUFPO0FBTEksS0EvQk47QUFzQ1BDLFVBQU07QUFDSmQsY0FBUSxJQURKO0FBRUpNLGFBQU8sQ0FGSDtBQUdKUyxpQkFBVyxNQUhQO0FBSUpYLGNBQVEsS0FKSjtBQUtKWSxnQkFBVSxLQUxOO0FBTUpDLGdCQUFVLEtBTk47QUFPSkMsY0FBUSxLQVBKO0FBUUpDLGVBQVM7QUFDUG5CLGdCQUFRLEtBREQ7QUFFUG9CLGlCQUFTLEdBRkY7QUFHUEMsaUJBQVM7QUFIRjtBQVJMO0FBdENDLEdBREs7QUFzRGRDLGlCQUFlO0FBQ2JDLGVBQVcsUUFERTtBQUViQyxZQUFRO0FBQ1JDLGVBQVM7QUFDUHpCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUREO0FBS1JDLGVBQVM7QUFDUDNCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUxEO0FBU1JFLGNBQVE7QUFUQSxLQUZLO0FBYWZDLFdBQU87QUFDTEMsWUFBTTtBQUNKbEIsa0JBQVUsR0FETjtBQUVKRCxxQkFBYTtBQUNYUixtQkFBUztBQURFO0FBRlQsT0FERDtBQU9MNEIsY0FBUTtBQUNObkIsa0JBQVUsR0FESjtBQUVOSCxjQUFNLEVBRkE7QUFHTnVCLGtCQUFVLENBSEo7QUFJTjdCLGlCQUFTLENBSkg7QUFLTkcsZUFBTztBQUxELE9BUEg7QUFjTDJCLGVBQVM7QUFDUHJCLGtCQUFVLEdBREg7QUFFUG9CLGtCQUFVO0FBRkgsT0FkSjtBQWtCTEUsWUFBTTtBQUNKQyxzQkFBYztBQURWLE9BbEJEO0FBcUJMQyxjQUFRO0FBQ05ELHNCQUFjO0FBRFI7QUFyQkg7QUFiUSxHQXRERDtBQTZGZEUsaUJBQWU7QUE3RkQsQ0FBbEI7O2tCQWdHZXpDLFMiLCJmaWxlIjoicGFydGljbGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnRpY2xlcyA9IHtcbiAgcGFydGljbGVzOiB7XG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgdmFsdWU6IDgwLFxuICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6IFwiIzAwMFwiXG4gICAgICB9LFxuICAgICAgb3BhY2l0eToge1xuICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgICBzaXplX21pbjogMC4xLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIG1vdmU6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgICAgICBvdXRfbW9kZTogXCJvdXRcIixcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgcm90YXRlWDogNjAwLFxuICAgICAgICAgIHJvdGF0ZVk6IDEyMDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICBvbmhvdmVyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgIH0sXG4gICAgICBvbmNsaWNrOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJwdXNoXCJcbiAgICAgIH0sXG4gICAgICByZXNpemU6IHRydWVcbiAgICB9LFxuICAgIG1vZGVzOiB7XG4gICAgICBncmFiOiB7XG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYnViYmxlOiB7XG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgIHNpemU6IDQwLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgb3BhY2l0eTogOCxcbiAgICAgICAgc3BlZWQ6IDNcbiAgICAgIH0sXG4gICAgICByZXB1bHNlOiB7XG4gICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgIH0sXG4gICAgICBwdXNoOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgfSxcbiAgICAgIHJlbW92ZToge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWNsZXM7XG4iXX0=

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzP2JkZDJlYWEiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/YmRkMmVhYSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/YmRkMmVhYSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzP2JkZDJlYWEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzP2JkZDJlYWEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcz9iZGQyZWFhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/YmRkMmVhYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/YmRkMmVhYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9pbmRleC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vc3RyaXAtYW5zaS9pbmRleC5qcz8yNDIyMzliIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz8yNDIyMzliIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qcz8yNDIyMzliIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvbGlua1wiPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvQ1NTUHJvcGVydHkuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2Rhbmdlcm91c1N0eWxlVmFsdWUuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvY2xlYW4uanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvaGFzaC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmRleC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9wbHVnaW5zLmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL3NoZWV0LmpzPzI0MjIzOWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW92aW5nVGV4dC5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL34vcmVhY3QtcGFydGljbGVzLWpzL2xpYi9wYXJ0aWNsZXMuanM/MjQyMjM5YiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL3BhZ2VzL19lcnJvci5qcz8yNDIyMzliIiwid2VicGFjazovLy8uL2RhdGEvcGFydGljbGVzLmpzPzI0MjIzOWIiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJwYXJ0aWNsZXMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJNb3ZpbmdUZXh0IiwiaW5pdCIsInN0YXRlIiwibW91c2VQb3MiLCJ4IiwieSIsImUiLCJzZXRTdGF0ZSIsInBhZ2VYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBhZ2VZIiwiaW5uZXJIZWlnaHQiLCJiZWZvcmV0ZXh0IiwiYWZ0ZXJ0ZXh0IiwibW92aW5ndGV4dCIsIm9mZnNldCIsInRyYW5zZm9ybSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInRleHRTaGFkb3ciLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwibW91c2VNb3ZlIiwiYmluZCIsIndoaXRlU3BhY2UiLCJmaXhlZHRpdGxlIiwiZGlzcGxheSIsIndpbGxDaGFuZ2UiLCJtb3Zpbmd0aXRsZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJFcnJvciIsInN0YXR1c0NvZGUiLCJjZW50ZXJlZGJveCIsImNlbnRlcmVkdmVydCIsImVycm9ydGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImxpbmsiLCJyZXMiLCJqc29uUGFnZVJlcyIsInN0YXR1cyIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwibWFyZ2luIiwiZXJyb3JudW1iZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsImJvcmRlciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiekluZGV4IiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9B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O0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQzlFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9EQTs7QUFFQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQWtELFlBQVksaUJBQWlCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0IsRUFBRTtBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJGQUEwRjs7QUFFMUY7QUFDQSx3QkFBdUI7QUFDdkIscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEI7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7O0FDdEpBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxFQUFFO0FBQ2IsWUFBVyxrQkFBa0I7QUFDN0IsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7QUN6RkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBO0FBQ0Esa0JBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNyRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDRDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7OztBQUdqTjtBQUNBOztBQUVBO0FBQ0EscUJBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTLFVBQVUsZUFBZSxFQUFFLEVBQUUsZ0NBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGFBQWE7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EscUVBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBa0MsbUNBQW1DO0FBQ3JFLDhCQUE2Qix3RUFBd0U7QUFDckc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxXQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CLHVDQUF1QztBQUMzRDtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsbURBQW1EO0FBQ2hGLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsMERBQTBEO0FBQ3hGLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsNERBQTREO0FBQzFGLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixrQkFBa0I7QUFDbkMsc0VBQXFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7OztBQUd4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQiw2REFBNkQ7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLDZFQUE2RTtBQUNsRyxRQUFPO0FBQ1Asc0JBQXFCLGdGQUFnRjtBQUNyRyxRQUFPO0FBQ1Asc0JBQXFCLDRFQUE0RTtBQUNqRyxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0EsZ0JBQWU7QUFDZixpQkFBZ0IsYUFBYSxFQUFFOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxzRUFBcUUsZUFBZTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWlDLGlFQUFpRTtBQUNsRzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxtREFBbUQ7QUFDckcsZ0NBQStCLHdFQUF3RTtBQUN2RyxRQUFPOztBQUVQO0FBQ0EsZ0dBQStGLGNBQWM7QUFDN0csUUFBTzs7QUFFUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFrQyxxRUFBcUU7QUFDdkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLDJGQUEwRixlQUFlO0FBQ3pHO0FBQ0E7O0FBRUEsZ0NBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwRkFBeUYsZUFBZTtBQUN4RztBQUNBOztBQUVBLGdDQUErQjtBQUMvQjs7QUFFQTtBQUNBLDJGQUEwRixlQUFlO0FBQ3pHO0FBQ0E7O0FBRUEsZ0NBQStCO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMscUJBQXFCO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBcUUsZUFBZTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsbUJBQWtCLFNBQVMsRUFBRTtBQUM3QjtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLHNFQUFxRSxlQUFlO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRTs7Ozs7OztBQ3IzQkE7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXFCLFlBQVksRUFBRTtBQUNuQzs7QUFFQSxzQkFBcUIsWUFBWSx5b0VBQXlvRSxVQUFVLHVoQkFBdWhCLFNBQVMseWdDQUF5Z0M7O0FBRTd0SDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7O0FBRUEsd0JBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxRQUFPO0FBQ1AsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQztBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLEVBQUMsRTs7Ozs7O0FDdFZEOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjtBQUNBOztBQUVBOztBQUVBLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sbUNBQWtDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRWpNLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSx1RUFBc0UsYUFBYTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQXVFLGVBQWU7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUU7QUFDbkU7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUErRDtBQUMvRDtBQUNBLFFBQU8sSUFBSTtBQUNYO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixtQkFBbUI7QUFDeEM7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsMEJBQTBCO0FBQzdDLEU7Ozs7Ozs7QUNsSEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQSxtQ0FBa0MsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsT0FBTyx3QkFBd0IsRUFBRTs7QUFFak07O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQXlCLHVCQUF1QixFQUFFO0FBQ2xEOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE0RTtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0ZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGdCQUFnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0Q7QUFDcEQsTUFBSztBQUNMO0FBQ0E7QUFDQSw2REFBNEQ7QUFDNUQ7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0EsUzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsZ0JBQWdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05EOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0tBRXFCQSxjOzs7Ozs7Ozs7OzhCQVVWO0FBQUEsV0FDQ0MsS0FERCxHQUNXLEtBQUtDLEtBRGhCLENBQ0NELEtBREQ7OztBQUdQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBV0EsS0FBaEI7QUFDRSxrQkFBTztBQUNMRSx1QkFBVSxPQURMO0FBRUxDLG9CQUFPLE1BRkY7QUFHTEMscUJBQVEsT0FISDtBQUlMQyxrQkFBSyxHQUpBO0FBS0xDLG1CQUFNO0FBTEQsWUFEVDtBQVFFLHFFQUFXLFFBQU8sT0FBbEIsRUFBMEIsT0FBTSxPQUFoQyxFQUF3QywyQkFBeEM7QUFSRixRQURGO0FBWUQ7Ozt1Q0FuQnlCO0FBQ3hCLGNBQU8sRUFBRUMsOEJBQUYsRUFBUDtBQUNEOzs7R0FSeUMsZ0JBQU1DLFM7O0FBQTdCVCxlLENBRVpVLFMsR0FBWTtBQUNqQlQsVUFBTyxpQkFBVVU7QUFEQSxFO21CQUZBWCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7S0FFcUJZLFU7OztBQVNuQix1QkFBWVYsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtJQUNYQSxLQURXOztBQUVqQixXQUFLVyxJQUFMO0FBRmlCO0FBR2xCOzs7OzRCQUVNO0FBQ0wsWUFBS0MsS0FBTCxHQUFhLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxDQUFMLEVBQVFDLEdBQUcsQ0FBWCxFQUFaLEVBQWI7QUFDRDs7OytCQUVTQyxDLEVBQUc7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDWkosbUJBQVU7QUFDUkMsY0FBR0UsRUFBRUUsS0FBRixHQUFXQyxPQUFPQyxVQUFQLEdBQW9CLENBRDFCO0FBRVJMLGNBQUdDLEVBQUVLLEtBQUYsR0FBV0YsT0FBT0csV0FBUCxHQUFxQjtBQUYzQjtBQURFLFFBQWQ7QUFNRDs7OzhCQUVRO0FBQUEsb0JBQzhDLEtBQUt0QixLQURuRDtBQUFBLFdBQ0N1QixVQURELFVBQ0NBLFVBREQ7QUFBQSxXQUNhQyxTQURiLFVBQ2FBLFNBRGI7QUFBQSxXQUN3QkMsVUFEeEIsVUFDd0JBLFVBRHhCO0FBQUEsV0FDb0MxQixLQURwQyxVQUNvQ0EsS0FEcEM7OztBQUdQLFdBQUkyQixTQUFTO0FBQ1hDLHNDQUEyQixLQUFLZixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXBCLEdBQXdCLEtBQUtkLEtBQUwsQ0FBV0QsS0FBWCxDQUFpQjZCLFNBQWpCLENBQTJCQyxxQkFBOUUscUJBQ0ksS0FBS2pCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS2YsS0FBTCxDQUFXRCxLQUFYLENBQWlCNkIsU0FBakIsQ0FBMkJFLHFCQUR2RCxZQURXO0FBR1hDLHFCQUFlLENBQUUsS0FBS25CLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBdEIsR0FBMEIsS0FBS2QsS0FBTCxDQUFXRCxLQUFYLENBQWlCNkIsU0FBakIsQ0FBMkJJLGtCQUFwRSxvQkFDSSxLQUFLcEIsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxDQUFwQixHQUF3QixLQUFLZixLQUFMLENBQVdELEtBQVgsQ0FBaUI2QixTQUFqQixDQUEyQkssa0JBRHZELG9CQUVJLEtBQUtqQyxLQUFMLENBQVdELEtBQVgsQ0FBaUJtQztBQUxWLFFBQWI7O0FBUUEsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFXbkMsTUFBTW9DLFVBQXRCO0FBQ0Usd0JBQWMsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBRGhCO0FBRUU7QUFBQTtBQUFBLGFBQUksT0FBTyxFQUFDQyxZQUFZLFFBQWIsRUFBWCxFQUFtQyxXQUFXdkMsTUFBTXdDLFVBQXBEO0FBQ0doQixxQkFESDtBQUdFO0FBQUE7QUFBQSw2Q0FBTSxPQUFPLEVBQUNpQixTQUFTLGNBQVY7QUFDTEMsNkJBQVksV0FEUCxFQUFiO0FBRUUsMEJBQVcxQyxNQUFNMkM7QUFGbkIseUJBR1NoQixNQUhUO0FBSUdEO0FBSkgsWUFIRjtBQVVHRDtBQVZIO0FBRkYsUUFERjtBQWlCRDs7O0dBdkRxQyxnQkFBTWpCLFM7O0FBQXpCRyxXLENBRVpGLFMsR0FBWTtBQUNqQmUsZUFBWSxpQkFBVW9CLE1BREw7QUFFakJuQixjQUFXLGlCQUFVbUIsTUFGSjtBQUdqQmxCLGVBQVksaUJBQVVrQixNQUFWLENBQWlCQyxVQUhaO0FBSWpCN0MsVUFBTyxpQkFBVVU7QUFKQSxFO21CQUZBQyxVOzs7Ozs7Ozs7Ozs7QUNIckI7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGNBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekIsc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxnQ0FBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTBGLHdDQUF3QztBQUNsSTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNEgscUNBQXFDO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGNBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLGtDQUFpQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULDBHQUF5RztBQUN6RztBQUNBO0FB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TTtBQUNKWixlQUFRLElBREo7QUFFSkssY0FBTyxDQUZIO0FBR0pRLGtCQUFXLE1BSFA7QUFJSlYsZUFBUSxLQUpKO0FBS0pXLGlCQUFVLEtBTE47QUFNSkMsaUJBQVUsS0FOTjtBQU9KQyxlQUFRLEtBUEo7QUFRSkMsZ0JBQVM7QUFDUGpCLGlCQUFRLEtBREQ7QUFFUGtCLGtCQUFTLEdBRkY7QUFHUEMsa0JBQVM7QUFIRjtBQVJMO0FBdENDLElBREs7QUFzRGRDLGtCQUFlO0FBQ2JDLGdCQUFXLFFBREU7QUFFYkMsYUFBUTtBQUNSQyxnQkFBUztBQUNQdkIsaUJBQVEsSUFERDtBQUVQd0IsZUFBTTtBQUZDLFFBREQ7QUFLUkMsZ0JBQVM7QUFDUHpCLGlCQUFRLElBREQ7QUFFUHdCLGVBQU07QUFGQyxRQUxEO0FBU1JFLGVBQVE7QUFUQSxNQUZLO0FBYWZDLFlBQU87QUFDTEMsYUFBTTtBQUNKakIsbUJBQVUsR0FETjtBQUVKRCxzQkFBYTtBQUNYUixvQkFBUztBQURFO0FBRlQsUUFERDtBQU9MMkIsZUFBUTtBQUNObEIsbUJBQVUsR0FESjtBQUVOSCxlQUFNLEVBRkE7QUFHTnNCLG1CQUFVLENBSEo7QUFJTjVCLGtCQUFTLENBSkg7QUFLTkcsZ0JBQU87QUFMRCxRQVBIO0FBY0wwQixnQkFBUztBQUNQcEIsbUJBQVUsR0FESDtBQUVQbUIsbUJBQVU7QUFGSCxRQWRKO0FBa0JMRSxhQUFNO0FBQ0pDLHVCQUFjO0FBRFYsUUFsQkQ7QUFxQkxDLGVBQVE7QUFDTkQsdUJBQWM7QUFEUjtBQXJCSDtBQWJRLElBdEREO0FBNkZkRSxrQkFBZTtBQTdGRCxFQUFsQjs7bUJBZ0dlcEcsUyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwidmFyIEVOVElUSUVTID0gW1snQWFjdXRlJywgWzE5M11dLCBbJ2FhY3V0ZScsIFsyMjVdXSwgWydBYnJldmUnLCBbMjU4XV0sIFsnYWJyZXZlJywgWzI1OV1dLCBbJ2FjJywgWzg3NjZdXSwgWydhY2QnLCBbODc2N11dLCBbJ2FjRScsIFs4NzY2LCA4MTldXSwgWydBY2lyYycsIFsxOTRdXSwgWydhY2lyYycsIFsyMjZdXSwgWydhY3V0ZScsIFsxODBdXSwgWydBY3knLCBbMTA0MF1dLCBbJ2FjeScsIFsxMDcyXV0sIFsnQUVsaWcnLCBbMTk4XV0sIFsnYWVsaWcnLCBbMjMwXV0sIFsnYWYnLCBbODI4OV1dLCBbJ0FmcicsIFsxMjAwNjhdXSwgWydhZnInLCBbMTIwMDk0XV0sIFsnQWdyYXZlJywgWzE5Ml1dLCBbJ2FncmF2ZScsIFsyMjRdXSwgWydhbGVmc3ltJywgWzg1MDFdXSwgWydhbGVwaCcsIFs4NTAxXV0sIFsnQWxwaGEnLCBbOTEzXV0sIFsnYWxwaGEnLCBbOTQ1XV0sIFsnQW1hY3InLCBbMjU2XV0sIFsnYW1hY3InLCBbMjU3XV0sIFsnYW1hbGcnLCBbMTA4MTVdXSwgWydhbXAnLCBbMzhdXSwgWydBTVAnLCBbMzhdXSwgWydhbmRhbmQnLCBbMTA4MzddXSwgWydBbmQnLCBbMTA4MzVdXSwgWydhbmQnLCBbODc0M11dLCBbJ2FuZGQnLCBbMTA4NDRdXSwgWydhbmRzbG9wZScsIFsxMDg0MF1dLCBbJ2FuZHYnLCBbMTA4NDJdXSwgWydhbmcnLCBbODczNl1dLCBbJ2FuZ2UnLCBbMTA2NjBdXSwgWydhbmdsZScsIFs4NzM2XV0sIFsnYW5nbXNkYWEnLCBbMTA2NjRdXSwgWydhbmdtc2RhYicsIFsxMDY2NV1dLCBbJ2FuZ21zZGFjJywgWzEwNjY2XV0sIFsnYW5nbXNkYWQnLCBbMTA2NjddXSwgWydhbmdtc2RhZScsIFsxMDY2OF1dLCBbJ2FuZ21zZGFmJywgWzEwNjY5XV0sIFsnYW5nbXNkYWcnLCBbMTA2NzBdXSwgWydhbmdtc2RhaCcsIFsxMDY3MV1dLCBbJ2FuZ21zZCcsIFs4NzM3XV0sIFsnYW5ncnQnLCBbODczNV1dLCBbJ2FuZ3J0dmInLCBbODg5NF1dLCBbJ2FuZ3J0dmJkJywgWzEwNjUzXV0sIFsnYW5nc3BoJywgWzg3MzhdXSwgWydhbmdzdCcsIFsxOTddXSwgWydhbmd6YXJyJywgWzkwODRdXSwgWydBb2dvbicsIFsyNjBdXSwgWydhb2dvbicsIFsyNjFdXSwgWydBb3BmJywgWzEyMDEyMF1dLCBbJ2FvcGYnLCBbMTIwMTQ2XV0sIFsnYXBhY2lyJywgWzEwODYzXV0sIFsnYXAnLCBbODc3Nl1dLCBbJ2FwRScsIFsxMDg2NF1dLCBbJ2FwZScsIFs4Nzc4XV0sIFsnYXBpZCcsIFs4Nzc5XV0sIFsnYXBvcycsIFszOV1dLCBbJ0FwcGx5RnVuY3Rpb24nLCBbODI4OV1dLCBbJ2FwcHJveCcsIFs4Nzc2XV0sIFsnYXBwcm94ZXEnLCBbODc3OF1dLCBbJ0FyaW5nJywgWzE5N11dLCBbJ2FyaW5nJywgWzIyOV1dLCBbJ0FzY3InLCBbMTE5OTY0XV0sIFsnYXNjcicsIFsxMTk5OTBdXSwgWydBc3NpZ24nLCBbODc4OF1dLCBbJ2FzdCcsIFs0Ml1dLCBbJ2FzeW1wJywgWzg3NzZdXSwgWydhc3ltcGVxJywgWzg3ODFdXSwgWydBdGlsZGUnLCBbMTk1XV0sIFsnYXRpbGRlJywgWzIyN11dLCBbJ0F1bWwnLCBbMTk2XV0sIFsnYXVtbCcsIFsyMjhdXSwgWydhd2NvbmludCcsIFs4NzU1XV0sIFsnYXdpbnQnLCBbMTA3NjldXSwgWydiYWNrY29uZycsIFs4NzgwXV0sIFsnYmFja2Vwc2lsb24nLCBbMTAxNF1dLCBbJ2JhY2twcmltZScsIFs4MjQ1XV0sIFsnYmFja3NpbScsIFs4NzY1XV0sIFsnYmFja3NpbWVxJywgWzg5MDldXSwgWydCYWNrc2xhc2gnLCBbODcyNl1dLCBbJ0JhcnYnLCBbMTA5ODNdXSwgWydiYXJ2ZWUnLCBbODg5M11dLCBbJ2JhcndlZCcsIFs4OTY1XV0sIFsnQmFyd2VkJywgWzg5NjZdXSwgWydiYXJ3ZWRnZScsIFs4OTY1XV0sIFsnYmJyaycsIFs5MTQxXV0sIFsnYmJya3RicmsnLCBbOTE0Ml1dLCBbJ2Jjb25nJywgWzg3ODBdXSwgWydCY3knLCBbMTA0MV1dLCBbJ2JjeScsIFsxMDczXV0sIFsnYmRxdW8nLCBbODIyMl1dLCBbJ2JlY2F1cycsIFs4NzU3XV0sIFsnYmVjYXVzZScsIFs4NzU3XV0sIFsnQmVjYXVzZScsIFs4NzU3XV0sIFsnYmVtcHR5dicsIFsxMDY3Ml1dLCBbJ2JlcHNpJywgWzEwMTRdXSwgWydiZXJub3UnLCBbODQ5Ml1dLCBbJ0Jlcm5vdWxsaXMnLCBbODQ5Ml1dLCBbJ0JldGEnLCBbOTE0XV0sIFsnYmV0YScsIFs5NDZdXSwgWydiZXRoJywgWzg1MDJdXSwgWydiZXR3ZWVuJywgWzg4MTJdXSwgWydCZnInLCBbMTIwMDY5XV0sIFsnYmZyJywgWzEyMDA5NV1dLCBbJ2JpZ2NhcCcsIFs4ODk4XV0sIFsnYmlnY2lyYycsIFs5NzExXV0sIFsnYmlnY3VwJywgWzg4OTldXSwgWydiaWdvZG90JywgWzEwNzUyXV0sIFsnYmlnb3BsdXMnLCBbMTA3NTNdXSwgWydiaWdvdGltZXMnLCBbMTA3NTRdXSwgWydiaWdzcWN1cCcsIFsxMDc1OF1dLCBbJ2JpZ3N0YXInLCBbOTczM11dLCBbJ2JpZ3RyaWFuZ2xlZG93bicsIFs5NjYxXV0sIFsnYmlndHJpYW5nbGV1cCcsIFs5NjUxXV0sIFsnYmlndXBsdXMnLCBbMTA3NTZdXSwgWydiaWd2ZWUnLCBbODg5N11dLCBbJ2JpZ3dlZGdlJywgWzg4OTZdXSwgWydia2Fyb3cnLCBbMTA1MDldXSwgWydibGFja2xvemVuZ2UnLCBbMTA3MzFdXSwgWydibGFja3NxdWFyZScsIFs5NjQyXV0sIFsnYmxhY2t0cmlhbmdsZScsIFs5NjUyXV0sIFsnYmxhY2t0cmlhbmdsZWRvd24nLCBbOTY2Ml1dLCBbJ2JsYWNrdHJpYW5nbGVsZWZ0JywgWzk2NjZdXSwgWydibGFja3RyaWFuZ2xlcmlnaHQnLCBbOTY1Nl1dLCBbJ2JsYW5rJywgWzkyNTFdXSwgWydibGsxMicsIFs5NjE4XV0sIFsnYmxrMTQnLCBbOTYxN11dLCBbJ2JsazM0JywgWzk2MTldXSwgWydibG9jaycsIFs5NjA4XV0sIFsnYm5lJywgWzYxLCA4NDIxXV0sIFsnYm5lcXVpdicsIFs4ODAxLCA4NDIxXV0sIFsnYk5vdCcsIFsxMDk4OV1dLCBbJ2Jub3QnLCBbODk3Nl1dLCBbJ0JvcGYnLCBbMTIwMTIxXV0sIFsnYm9wZicsIFsxMjAxNDddXSwgWydib3QnLCBbODg2OV1dLCBbJ2JvdHRvbScsIFs4ODY5XV0sIFsnYm93dGllJywgWzg5MDRdXSwgWydib3hib3gnLCBbMTA2OTddXSwgWydib3hkbCcsIFs5NDg4XV0sIFsnYm94ZEwnLCBbOTU1N11dLCBbJ2JveERsJywgWzk1NThdXSwgWydib3hETCcsIFs5NTU5XV0sIFsnYm94ZHInLCBbOTQ4NF1dLCBbJ2JveGRSJywgWzk1NTRdXSwgWydib3hEcicsIFs5NTU1XV0sIFsnYm94RFInLCBbOTU1Nl1dLCBbJ2JveGgnLCBbOTQ3Ml1dLCBbJ2JveEgnLCBbOTU1Ml1dLCBbJ2JveGhkJywgWzk1MTZdXSwgWydib3hIZCcsIFs5NTcyXV0sIFsnYm94aEQnLCBbOTU3M11dLCBbJ2JveEhEJywgWzk1NzRdXSwgWydib3hodScsIFs5NTI0XV0sIFsnYm94SHUnLCBbOTU3NV1dLCBbJ2JveGhVJywgWzk1NzZdXSwgWydib3hIVScsIFs5NTc3XV0sIFsnYm94bWludXMnLCBbODg2M11dLCBbJ2JveHBsdXMnLCBbODg2Ml1dLCBbJ2JveHRpbWVzJywgWzg4NjRdXSwgWydib3h1bCcsIFs5NDk2XV0sIFsnYm94dUwnLCBbOTU2M11dLCBbJ2JveFVsJywgWzk1NjRdXSwgWydib3hVTCcsIFs5NTY1XV0sIFsnYm94dXInLCBbOTQ5Ml1dLCBbJ2JveHVSJywgWzk1NjBdXSwgWydib3hVcicsIFs5NTYxXV0sIFsnYm94VVInLCBbOTU2Ml1dLCBbJ2JveHYnLCBbOTQ3NF1dLCBbJ2JveFYnLCBbOTU1M11dLCBbJ2JveHZoJywgWzk1MzJdXSwgWydib3h2SCcsIFs5NTc4XV0sIFsnYm94VmgnLCBbOTU3OV1dLCBbJ2JveFZIJywgWzk1ODBdXSwgWydib3h2bCcsIFs5NTA4XV0sIFsnYm94dkwnLCBbOTU2OV1dLCBbJ2JveFZsJywgWzk1NzBdXSwgWydib3hWTCcsIFs5NTcxXV0sIFsnYm94dnInLCBbOTUwMF1dLCBbJ2JveHZSJywgWzk1NjZdXSwgWydib3hWcicsIFs5NTY3XV0sIFsnYm94VlInLCBbOTU2OF1dLCBbJ2JwcmltZScsIFs4MjQ1XV0sIFsnYnJldmUnLCBbNzI4XV0sIFsnQnJldmUnLCBbNzI4XV0sIFsnYnJ2YmFyJywgWzE2Nl1dLCBbJ2JzY3InLCBbMTE5OTkxXV0sIFsnQnNjcicsIFs4NDkyXV0sIFsnYnNlbWknLCBbODI3MV1dLCBbJ2JzaW0nLCBbODc2NV1dLCBbJ2JzaW1lJywgWzg5MDldXSwgWydic29sYicsIFsxMDY5M11dLCBbJ2Jzb2wnLCBbOTJdXSwgWydic29saHN1YicsIFsxMDE4NF1dLCBbJ2J1bGwnLCBbODIyNl1dLCBbJ2J1bGxldCcsIFs4MjI2XV0sIFsnYnVtcCcsIFs4NzgyXV0sIFsnYnVtcEUnLCBbMTA5MjZdXSwgWydidW1wZScsIFs4NzgzXV0sIFsnQnVtcGVxJywgWzg3ODJdXSwgWydidW1wZXEnLCBbODc4M11dLCBbJ0NhY3V0ZScsIFsyNjJdXSwgWydjYWN1dGUnLCBbMjYzXV0sIFsnY2FwYW5kJywgWzEwODIwXV0sIFsnY2FwYnJjdXAnLCBbMTA4MjVdXSwgWydjYXBjYXAnLCBbMTA4MjddXSwgWydjYXAnLCBbODc0NV1dLCBbJ0NhcCcsIFs4OTE0XV0sIFsnY2FwY3VwJywgWzEwODIzXV0sIFsnY2FwZG90JywgWzEwODE2XV0sIFsnQ2FwaXRhbERpZmZlcmVudGlhbEQnLCBbODUxN11dLCBbJ2NhcHMnLCBbODc0NSwgNjUwMjRdXSwgWydjYXJldCcsIFs4MjU3XV0sIFsnY2Fyb24nLCBbNzExXV0sIFsnQ2F5bGV5cycsIFs4NDkzXV0sIFsnY2NhcHMnLCBbMTA4MjldXSwgWydDY2Fyb24nLCBbMjY4XV0sIFsnY2Nhcm9uJywgWzI2OV1dLCBbJ0NjZWRpbCcsIFsxOTldXSwgWydjY2VkaWwnLCBbMjMxXV0sIFsnQ2NpcmMnLCBbMjY0XV0sIFsnY2NpcmMnLCBbMjY1XV0sIFsnQ2NvbmludCcsIFs4NzUyXV0sIFsnY2N1cHMnLCBbMTA4MjhdXSwgWydjY3Vwc3NtJywgWzEwODMyXV0sIFsnQ2RvdCcsIFsyNjZdXSwgWydjZG90JywgWzI2N11dLCBbJ2NlZGlsJywgWzE4NF1dLCBbJ0NlZGlsbGEnLCBbMTg0XV0sIFsnY2VtcHR5dicsIFsxMDY3NF1dLCBbJ2NlbnQnLCBbMTYyXV0sIFsnY2VudGVyZG90JywgWzE4M11dLCBbJ0NlbnRlckRvdCcsIFsxODNdXSwgWydjZnInLCBbMTIwMDk2XV0sIFsnQ2ZyJywgWzg0OTNdXSwgWydDSGN5JywgWzEwNjNdXSwgWydjaGN5JywgWzEwOTVdXSwgWydjaGVjaycsIFsxMDAwM11dLCBbJ2NoZWNrbWFyaycsIFsxMDAwM11dLCBbJ0NoaScsIFs5MzVdXSwgWydjaGknLCBbOTY3XV0sIFsnY2lyYycsIFs3MTBdXSwgWydjaXJjZXEnLCBbODc5MV1dLCBbJ2NpcmNsZWFycm93bGVmdCcsIFs4NjM0XV0sIFsnY2lyY2xlYXJyb3dyaWdodCcsIFs4NjM1XV0sIFsnY2lyY2xlZGFzdCcsIFs4ODU5XV0sIFsnY2lyY2xlZGNpcmMnLCBbODg1OF1dLCBbJ2NpcmNsZWRkYXNoJywgWzg4NjFdXSwgWydDaXJjbGVEb3QnLCBbODg1N11dLCBbJ2NpcmNsZWRSJywgWzE3NF1dLCBbJ2NpcmNsZWRTJywgWzk0MTZdXSwgWydDaXJjbGVNaW51cycsIFs4ODU0XV0sIFsnQ2lyY2xlUGx1cycsIFs4ODUzXV0sIFsnQ2lyY2xlVGltZXMnLCBbODg1NV1dLCBbJ2NpcicsIFs5Njc1XV0sIFsnY2lyRScsIFsxMDY5MV1dLCBbJ2NpcmUnLCBbODc5MV1dLCBbJ2NpcmZuaW50JywgWzEwNzY4XV0sIFsnY2lybWlkJywgWzEwOTkxXV0sIFsnY2lyc2NpcicsIFsxMDY5MF1dLCBbJ0Nsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU0XV0sIFsnQ2xvc2VDdXJseURvdWJsZVF1b3RlJywgWzgyMjFdXSwgWydDbG9zZUN1cmx5UXVvdGUnLCBbODIxN11dLCBbJ2NsdWJzJywgWzk4MjddXSwgWydjbHVic3VpdCcsIFs5ODI3XV0sIFsnY29sb24nLCBbNThdXSwgWydDb2xvbicsIFs4NzU5XV0sIFsnQ29sb25lJywgWzEwODY4XV0sIFsnY29sb25lJywgWzg3ODhdXSwgWydjb2xvbmVxJywgWzg3ODhdXSwgWydjb21tYScsIFs0NF1dLCBbJ2NvbW1hdCcsIFs2NF1dLCBbJ2NvbXAnLCBbODcwNV1dLCBbJ2NvbXBmbicsIFs4NzI4XV0sIFsnY29tcGxlbWVudCcsIFs4NzA1XV0sIFsnY29tcGxleGVzJywgWzg0NTBdXSwgWydjb25nJywgWzg3NzNdXSwgWydjb25nZG90JywgWzEwODYxXV0sIFsnQ29uZ3J1ZW50JywgWzg4MDFdXSwgWydjb25pbnQnLCBbODc1MF1dLCBbJ0NvbmludCcsIFs4NzUxXV0sIFsnQ29udG91ckludGVncmFsJywgWzg3NTBdXSwgWydjb3BmJywgWzEyMDE0OF1dLCBbJ0NvcGYnLCBbODQ1MF1dLCBbJ2NvcHJvZCcsIFs4NzIwXV0sIFsnQ29wcm9kdWN0JywgWzg3MjBdXSwgWydjb3B5JywgWzE2OV1dLCBbJ0NPUFknLCBbMTY5XV0sIFsnY29weXNyJywgWzg0NzFdXSwgWydDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTVdXSwgWydjcmFycicsIFs4NjI5XV0sIFsnY3Jvc3MnLCBbMTAwMDddXSwgWydDcm9zcycsIFsxMDc5OV1dLCBbJ0NzY3InLCBbMTE5OTY2XV0sIFsnY3NjcicsIFsxMTk5OTJdXSwgWydjc3ViJywgWzEwOTU5XV0sIFsnY3N1YmUnLCBbMTA5NjFdXSwgWydjc3VwJywgWzEwOTYwXV0sIFsnY3N1cGUnLCBbMTA5NjJdXSwgWydjdGRvdCcsIFs4OTQzXV0sIFsnY3VkYXJybCcsIFsxMDU1Ml1dLCBbJ2N1ZGFycnInLCBbMTA1NDldXSwgWydjdWVwcicsIFs4OTI2XV0sIFsnY3Vlc2MnLCBbODkyN11dLCBbJ2N1bGFycicsIFs4NjMwXV0sIFsnY3VsYXJycCcsIFsxMDU1N11dLCBbJ2N1cGJyY2FwJywgWzEwODI0XV0sIFsnY3VwY2FwJywgWzEwODIyXV0sIFsnQ3VwQ2FwJywgWzg3ODFdXSwgWydjdXAnLCBbODc0Nl1dLCBbJ0N1cCcsIFs4OTE1XV0sIFsnY3VwY3VwJywgWzEwODI2XV0sIFsnY3VwZG90JywgWzg4NDVdXSwgWydjdXBvcicsIFsxMDgyMV1dLCBbJ2N1cHMnLCBbODc0NiwgNjUwMjRdXSwgWydjdXJhcnInLCBbODYzMV1dLCBbJ2N1cmFycm0nLCBbMTA1NTZdXSwgWydjdXJseWVxcHJlYycsIFs4OTI2XV0sIFsnY3VybHllcXN1Y2MnLCBbODkyN11dLCBbJ2N1cmx5dmVlJywgWzg5MTBdXSwgWydjdXJseXdlZGdlJywgWzg5MTFdXSwgWydjdXJyZW4nLCBbMTY0XV0sIFsnY3VydmVhcnJvd2xlZnQnLCBbODYzMF1dLCBbJ2N1cnZlYXJyb3dyaWdodCcsIFs4NjMxXV0sIFsnY3V2ZWUnLCBbODkxMF1dLCBbJ2N1d2VkJywgWzg5MTFdXSwgWydjd2NvbmludCcsIFs4NzU0XV0sIFsnY3dpbnQnLCBbODc1M11dLCBbJ2N5bGN0eScsIFs5MDA1XV0sIFsnZGFnZ2VyJywgWzgyMjRdXSwgWydEYWdnZXInLCBbODIyNV1dLCBbJ2RhbGV0aCcsIFs4NTA0XV0sIFsnZGFycicsIFs4NTk1XV0sIFsnRGFycicsIFs4NjA5XV0sIFsnZEFycicsIFs4NjU5XV0sIFsnZGFzaCcsIFs4MjA4XV0sIFsnRGFzaHYnLCBbMTA5ODBdXSwgWydkYXNodicsIFs4ODY3XV0sIFsnZGJrYXJvdycsIFsxMDUxMV1dLCBbJ2RibGFjJywgWzczM11dLCBbJ0RjYXJvbicsIFsyNzBdXSwgWydkY2Fyb24nLCBbMjcxXV0sIFsnRGN5JywgWzEwNDRdXSwgWydkY3knLCBbMTA3Nl1dLCBbJ2RkYWdnZXInLCBbODIyNV1dLCBbJ2RkYXJyJywgWzg2NTBdXSwgWydERCcsIFs4NTE3XV0sIFsnZGQnLCBbODUxOF1dLCBbJ0REb3RyYWhkJywgWzEwNTEzXV0sIFsnZGRvdHNlcScsIFsxMDg3MV1dLCBbJ2RlZycsIFsxNzZdXSwgWydEZWwnLCBbODcxMV1dLCBbJ0RlbHRhJywgWzkxNl1dLCBbJ2RlbHRhJywgWzk0OF1dLCBbJ2RlbXB0eXYnLCBbMTA2NzNdXSwgWydkZmlzaHQnLCBbMTA2MjNdXSwgWydEZnInLCBbMTIwMDcxXV0sIFsnZGZyJywgWzEyMDA5N11dLCBbJ2RIYXInLCBbMTA1OTddXSwgWydkaGFybCcsIFs4NjQzXV0sIFsnZGhhcnInLCBbODY0Ml1dLCBbJ0RpYWNyaXRpY2FsQWN1dGUnLCBbMTgwXV0sIFsnRGlhY3JpdGljYWxEb3QnLCBbNzI5XV0sIFsnRGlhY3JpdGljYWxEb3VibGVBY3V0ZScsIFs3MzNdXSwgWydEaWFjcml0aWNhbEdyYXZlJywgWzk2XV0sIFsnRGlhY3JpdGljYWxUaWxkZScsIFs3MzJdXSwgWydkaWFtJywgWzg5MDBdXSwgWydkaWFtb25kJywgWzg5MDBdXSwgWydEaWFtb25kJywgWzg5MDBdXSwgWydkaWFtb25kc3VpdCcsIFs5ODMwXV0sIFsnZGlhbXMnLCBbOTgzMF1dLCBbJ2RpZScsIFsxNjhdXSwgWydEaWZmZXJlbnRpYWxEJywgWzg1MThdXSwgWydkaWdhbW1hJywgWzk4OV1dLCBbJ2Rpc2luJywgWzg5NDZdXSwgWydkaXYnLCBbMjQ3XV0sIFsnZGl2aWRlJywgWzI0N11dLCBbJ2RpdmlkZW9udGltZXMnLCBbODkwM11dLCBbJ2Rpdm9ueCcsIFs4OTAzXV0sIFsnREpjeScsIFsxMDI2XV0sIFsnZGpjeScsIFsxMTA2XV0sIFsnZGxjb3JuJywgWzg5OTBdXSwgWydkbGNyb3AnLCBbODk3M11dLCBbJ2RvbGxhcicsIFszNl1dLCBbJ0RvcGYnLCBbMTIwMTIzXV0sIFsnZG9wZicsIFsxMjAxNDldXSwgWydEb3QnLCBbMTY4XV0sIFsnZG90JywgWzcyOV1dLCBbJ0RvdERvdCcsIFs4NDEyXV0sIFsnZG90ZXEnLCBbODc4NF1dLCBbJ2RvdGVxZG90JywgWzg3ODVdXSwgWydEb3RFcXVhbCcsIFs4Nzg0XV0sIFsnZG90bWludXMnLCBbODc2MF1dLCBbJ2RvdHBsdXMnLCBbODcyNF1dLCBbJ2RvdHNxdWFyZScsIFs4ODY1XV0sIFsnZG91YmxlYmFyd2VkZ2UnLCBbODk2Nl1dLCBbJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzUxXV0sIFsnRG91YmxlRG90JywgWzE2OF1dLCBbJ0RvdWJsZURvd25BcnJvdycsIFs4NjU5XV0sIFsnRG91YmxlTGVmdEFycm93JywgWzg2NTZdXSwgWydEb3VibGVMZWZ0UmlnaHRBcnJvdycsIFs4NjYwXV0sIFsnRG91YmxlTGVmdFRlZScsIFsxMDk4MF1dLCBbJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnLCBbMTAyMzJdXSwgWydEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzRdXSwgWydEb3VibGVMb25nUmlnaHRBcnJvdycsIFsxMDIzM11dLCBbJ0RvdWJsZVJpZ2h0QXJyb3cnLCBbODY1OF1dLCBbJ0RvdWJsZVJpZ2h0VGVlJywgWzg4NzJdXSwgWydEb3VibGVVcEFycm93JywgWzg2NTddXSwgWydEb3VibGVVcERvd25BcnJvdycsIFs4NjYxXV0sIFsnRG91YmxlVmVydGljYWxCYXInLCBbODc0MV1dLCBbJ0Rvd25BcnJvd0JhcicsIFsxMDUxNV1dLCBbJ2Rvd25hcnJvdycsIFs4NTk1XV0sIFsnRG93bkFycm93JywgWzg1OTVdXSwgWydEb3duYXJyb3cnLCBbODY1OV1dLCBbJ0Rvd25BcnJvd1VwQXJyb3cnLCBbODY5M11dLCBbJ0Rvd25CcmV2ZScsIFs3ODVdXSwgWydkb3duZG93bmFycm93cycsIFs4NjUwXV0sIFsnZG93bmhhcnBvb25sZWZ0JywgWzg2NDNdXSwgWydkb3duaGFycG9vbnJpZ2h0JywgWzg2NDJdXSwgWydEb3duTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc2XV0sIFsnRG93bkxlZnRUZWVWZWN0b3InLCBbMTA1OTBdXSwgWydEb3duTGVmdFZlY3RvckJhcicsIFsxMDU4Ml1dLCBbJ0Rvd25MZWZ0VmVjdG9yJywgWzg2MzddXSwgWydEb3duUmlnaHRUZWVWZWN0b3InLCBbMTA1OTFdXSwgWydEb3duUmlnaHRWZWN0b3JCYXInLCBbMTA1ODNdXSwgWydEb3duUmlnaHRWZWN0b3InLCBbODY0MV1dLCBbJ0Rvd25UZWVBcnJvdycsIFs4NjE1XV0sIFsnRG93blRlZScsIFs4ODY4XV0sIFsnZHJia2Fyb3cnLCBbMTA1MTJdXSwgWydkcmNvcm4nLCBbODk5MV1dLCBbJ2RyY3JvcCcsIFs4OTcyXV0sIFsnRHNjcicsIFsxMTk5NjddXSwgWydkc2NyJywgWzExOTk5M11dLCBbJ0RTY3knLCBbMTAyOV1dLCBbJ2RzY3knLCBbMTEwOV1dLCBbJ2Rzb2wnLCBbMTA3NDJdXSwgWydEc3Ryb2snLCBbMjcyXV0sIFsnZHN0cm9rJywgWzI3M11dLCBbJ2R0ZG90JywgWzg5NDVdXSwgWydkdHJpJywgWzk2NjNdXSwgWydkdHJpZicsIFs5NjYyXV0sIFsnZHVhcnInLCBbODY5M11dLCBbJ2R1aGFyJywgWzEwNjA3XV0sIFsnZHdhbmdsZScsIFsxMDY2Ml1dLCBbJ0RaY3knLCBbMTAzOV1dLCBbJ2R6Y3knLCBbMTExOV1dLCBbJ2R6aWdyYXJyJywgWzEwMjM5XV0sIFsnRWFjdXRlJywgWzIwMV1dLCBbJ2VhY3V0ZScsIFsyMzNdXSwgWydlYXN0ZXInLCBbMTA4NjJdXSwgWydFY2Fyb24nLCBbMjgyXV0sIFsnZWNhcm9uJywgWzI4M11dLCBbJ0VjaXJjJywgWzIwMl1dLCBbJ2VjaXJjJywgWzIzNF1dLCBbJ2VjaXInLCBbODc5MF1dLCBbJ2Vjb2xvbicsIFs4Nzg5XV0sIFsnRWN5JywgWzEwNjldXSwgWydlY3knLCBbMTEwMV1dLCBbJ2VERG90JywgWzEwODcxXV0sIFsnRWRvdCcsIFsyNzhdXSwgWydlZG90JywgWzI3OV1dLCBbJ2VEb3QnLCBbODc4NV1dLCBbJ2VlJywgWzg1MTldXSwgWydlZkRvdCcsIFs4Nzg2XV0sIFsnRWZyJywgWzEyMDA3Ml1dLCBbJ2VmcicsIFsxMjAwOThdXSwgWydlZycsIFsxMDkwNl1dLCBbJ0VncmF2ZScsIFsyMDBdXSwgWydlZ3JhdmUnLCBbMjMyXV0sIFsnZWdzJywgWzEwOTAyXV0sIFsnZWdzZG90JywgWzEwOTA0XV0sIFsnZWwnLCBbMTA5MDVdXSwgWydFbGVtZW50JywgWzg3MTJdXSwgWydlbGludGVycycsIFs5MTkxXV0sIFsnZWxsJywgWzg0NjddXSwgWydlbHMnLCBbMTA5MDFdXSwgWydlbHNkb3QnLCBbMTA5MDNdXSwgWydFbWFjcicsIFsyNzRdXSwgWydlbWFjcicsIFsyNzVdXSwgWydlbXB0eScsIFs4NzA5XV0sIFsnZW1wdHlzZXQnLCBbODcwOV1dLCBbJ0VtcHR5U21hbGxTcXVhcmUnLCBbOTcyM11dLCBbJ2VtcHR5dicsIFs4NzA5XV0sIFsnRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCBbOTY0M11dLCBbJ2Vtc3AxMycsIFs4MTk2XV0sIFsnZW1zcDE0JywgWzgxOTddXSwgWydlbXNwJywgWzgxOTVdXSwgWydFTkcnLCBbMzMwXV0sIFsnZW5nJywgWzMzMV1dLCBbJ2Vuc3AnLCBbODE5NF1dLCBbJ0VvZ29uJywgWzI4MF1dLCBbJ2VvZ29uJywgWzI4MV1dLCBbJ0VvcGYnLCBbMTIwMTI0XV0sIFsnZW9wZicsIFsxMjAxNTBdXSwgWydlcGFyJywgWzg5MTddXSwgWydlcGFyc2wnLCBbMTA3MjNdXSwgWydlcGx1cycsIFsxMDg2NV1dLCBbJ2Vwc2knLCBbOTQ5XV0sIFsnRXBzaWxvbicsIFs5MTddXSwgWydlcHNpbG9uJywgWzk0OV1dLCBbJ2Vwc2l2JywgWzEwMTNdXSwgWydlcWNpcmMnLCBbODc5MF1dLCBbJ2VxY29sb24nLCBbODc4OV1dLCBbJ2Vxc2ltJywgWzg3NzBdXSwgWydlcXNsYW50Z3RyJywgWzEwOTAyXV0sIFsnZXFzbGFudGxlc3MnLCBbMTA5MDFdXSwgWydFcXVhbCcsIFsxMDg2OV1dLCBbJ2VxdWFscycsIFs2MV1dLCBbJ0VxdWFsVGlsZGUnLCBbODc3MF1dLCBbJ2VxdWVzdCcsIFs4Nzk5XV0sIFsnRXF1aWxpYnJpdW0nLCBbODY1Ml1dLCBbJ2VxdWl2JywgWzg4MDFdXSwgWydlcXVpdkREJywgWzEwODcyXV0sIFsnZXF2cGFyc2wnLCBbMTA3MjVdXSwgWydlcmFycicsIFsxMDYwOV1dLCBbJ2VyRG90JywgWzg3ODddXSwgWydlc2NyJywgWzg0OTVdXSwgWydFc2NyJywgWzg0OTZdXSwgWydlc2RvdCcsIFs4Nzg0XV0sIFsnRXNpbScsIFsxMDg2N11dLCBbJ2VzaW0nLCBbODc3MF1dLCBbJ0V0YScsIFs5MTldXSwgWydldGEnLCBbOTUxXV0sIFsnRVRIJywgWzIwOF1dLCBbJ2V0aCcsIFsyNDBdXSwgWydFdW1sJywgWzIwM11dLCBbJ2V1bWwnLCBbMjM1XV0sIFsnZXVybycsIFs4MzY0XV0sIFsnZXhjbCcsIFszM11dLCBbJ2V4aXN0JywgWzg3MDddXSwgWydFeGlzdHMnLCBbODcwN11dLCBbJ2V4cGVjdGF0aW9uJywgWzg0OTZdXSwgWydleHBvbmVudGlhbGUnLCBbODUxOV1dLCBbJ0V4cG9uZW50aWFsRScsIFs4NTE5XV0sIFsnZmFsbGluZ2RvdHNlcScsIFs4Nzg2XV0sIFsnRmN5JywgWzEwNjBdXSwgWydmY3knLCBbMTA5Ml1dLCBbJ2ZlbWFsZScsIFs5NzkyXV0sIFsnZmZpbGlnJywgWzY0MjU5XV0sIFsnZmZsaWcnLCBbNjQyNTZdXSwgWydmZmxsaWcnLCBbNjQyNjBdXSwgWydGZnInLCBbMTIwMDczXV0sIFsnZmZyJywgWzEyMDA5OV1dLCBbJ2ZpbGlnJywgWzY0MjU3XV0sIFsnRmlsbGVkU21hbGxTcXVhcmUnLCBbOTcyNF1dLCBbJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZScsIFs5NjQyXV0sIFsnZmpsaWcnLCBbMTAyLCAxMDZdXSwgWydmbGF0JywgWzk4MzddXSwgWydmbGxpZycsIFs2NDI1OF1dLCBbJ2ZsdG5zJywgWzk2NDldXSwgWydmbm9mJywgWzQwMl1dLCBbJ0ZvcGYnLCBbMTIwMTI1XV0sIFsnZm9wZicsIFsxMjAxNTFdXSwgWydmb3JhbGwnLCBbODcwNF1dLCBbJ0ZvckFsbCcsIFs4NzA0XV0sIFsnZm9yaycsIFs4OTE2XV0sIFsnZm9ya3YnLCBbMTA5NjldXSwgWydGb3VyaWVydHJmJywgWzg0OTddXSwgWydmcGFydGludCcsIFsxMDc2NV1dLCBbJ2ZyYWMxMicsIFsxODldXSwgWydmcmFjMTMnLCBbODUzMV1dLCBbJ2ZyYWMxNCcsIFsxODhdXSwgWydmcmFjMTUnLCBbODUzM11dLCBbJ2ZyYWMxNicsIFs4NTM3XV0sIFsnZnJhYzE4JywgWzg1MzldXSwgWydmcmFjMjMnLCBbODUzMl1dLCBbJ2ZyYWMyNScsIFs4NTM0XV0sIFsnZnJhYzM0JywgWzE5MF1dLCBbJ2ZyYWMzNScsIFs4NTM1XV0sIFsnZnJhYzM4JywgWzg1NDBdXSwgWydmcmFjNDUnLCBbODUzNl1dLCBbJ2ZyYWM1NicsIFs4NTM4XV0sIFsnZnJhYzU4JywgWzg1NDFdXSwgWydmcmFjNzgnLCBbODU0Ml1dLCBbJ2ZyYXNsJywgWzgyNjBdXSwgWydmcm93bicsIFs4OTk0XV0sIFsnZnNjcicsIFsxMTk5OTVdXSwgWydGc2NyJywgWzg0OTddXSwgWydnYWN1dGUnLCBbNTAxXV0sIFsnR2FtbWEnLCBbOTE1XV0sIFsnZ2FtbWEnLCBbOTQ3XV0sIFsnR2FtbWFkJywgWzk4OF1dLCBbJ2dhbW1hZCcsIFs5ODldXSwgWydnYXAnLCBbMTA4ODZdXSwgWydHYnJldmUnLCBbMjg2XV0sIFsnZ2JyZXZlJywgWzI4N11dLCBbJ0djZWRpbCcsIFsyOTBdXSwgWydHY2lyYycsIFsyODRdXSwgWydnY2lyYycsIFsyODVdXSwgWydHY3knLCBbMTA0M11dLCBbJ2djeScsIFsxMDc1XV0sIFsnR2RvdCcsIFsyODhdXSwgWydnZG90JywgWzI4OV1dLCBbJ2dlJywgWzg4MDVdXSwgWydnRScsIFs4ODA3XV0sIFsnZ0VsJywgWzEwODkyXV0sIFsnZ2VsJywgWzg5MjNdXSwgWydnZXEnLCBbODgwNV1dLCBbJ2dlcXEnLCBbODgwN11dLCBbJ2dlcXNsYW50JywgWzEwODc4XV0sIFsnZ2VzY2MnLCBbMTA5MjFdXSwgWydnZXMnLCBbMTA4NzhdXSwgWydnZXNkb3QnLCBbMTA4ODBdXSwgWydnZXNkb3RvJywgWzEwODgyXV0sIFsnZ2VzZG90b2wnLCBbMTA4ODRdXSwgWydnZXNsJywgWzg5MjMsIDY1MDI0XV0sIFsnZ2VzbGVzJywgWzEwOTAwXV0sIFsnR2ZyJywgWzEyMDA3NF1dLCBbJ2dmcicsIFsxMjAxMDBdXSwgWydnZycsIFs4ODExXV0sIFsnR2cnLCBbODkyMV1dLCBbJ2dnZycsIFs4OTIxXV0sIFsnZ2ltZWwnLCBbODUwM11dLCBbJ0dKY3knLCBbMTAyN11dLCBbJ2dqY3knLCBbMTEwN11dLCBbJ2dsYScsIFsxMDkxN11dLCBbJ2dsJywgWzg4MjNdXSwgWydnbEUnLCBbMTA4OThdXSwgWydnbGonLCBbMTA5MTZdXSwgWydnbmFwJywgWzEwODkwXV0sIFsnZ25hcHByb3gnLCBbMTA4OTBdXSwgWydnbmUnLCBbMTA4ODhdXSwgWydnbkUnLCBbODgwOV1dLCBbJ2duZXEnLCBbMTA4ODhdXSwgWydnbmVxcScsIFs4ODA5XV0sIFsnZ25zaW0nLCBbODkzNV1dLCBbJ0dvcGYnLCBbMTIwMTI2XV0sIFsnZ29wZicsIFsxMjAxNTJdXSwgWydncmF2ZScsIFs5Nl1dLCBbJ0dyZWF0ZXJFcXVhbCcsIFs4ODA1XV0sIFsnR3JlYXRlckVxdWFsTGVzcycsIFs4OTIzXV0sIFsnR3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3XV0sIFsnR3JlYXRlckdyZWF0ZXInLCBbMTA5MTRdXSwgWydHcmVhdGVyTGVzcycsIFs4ODIzXV0sIFsnR3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzhdXSwgWydHcmVhdGVyVGlsZGUnLCBbODgxOV1dLCBbJ0dzY3InLCBbMTE5OTcwXV0sIFsnZ3NjcicsIFs4NDU4XV0sIFsnZ3NpbScsIFs4ODE5XV0sIFsnZ3NpbWUnLCBbMTA4OTRdXSwgWydnc2ltbCcsIFsxMDg5Nl1dLCBbJ2d0Y2MnLCBbMTA5MTldXSwgWydndGNpcicsIFsxMDg3NF1dLCBbJ2d0JywgWzYyXV0sIFsnR1QnLCBbNjJdXSwgWydHdCcsIFs4ODExXV0sIFsnZ3Rkb3QnLCBbODkxOV1dLCBbJ2d0bFBhcicsIFsxMDY0NV1dLCBbJ2d0cXVlc3QnLCBbMTA4NzZdXSwgWydndHJhcHByb3gnLCBbMTA4ODZdXSwgWydndHJhcnInLCBbMTA2MTZdXSwgWydndHJkb3QnLCBbODkxOV1dLCBbJ2d0cmVxbGVzcycsIFs4OTIzXV0sIFsnZ3RyZXFxbGVzcycsIFsxMDg5Ml1dLCBbJ2d0cmxlc3MnLCBbODgyM11dLCBbJ2d0cnNpbScsIFs4ODE5XV0sIFsnZ3ZlcnRuZXFxJywgWzg4MDksIDY1MDI0XV0sIFsnZ3ZuRScsIFs4ODA5LCA2NTAyNF1dLCBbJ0hhY2VrJywgWzcxMV1dLCBbJ2hhaXJzcCcsIFs4MjAyXV0sIFsnaGFsZicsIFsxODldXSwgWydoYW1pbHQnLCBbODQ1OV1dLCBbJ0hBUkRjeScsIFsxMDY2XV0sIFsnaGFyZGN5JywgWzEwOThdXSwgWydoYXJyY2lyJywgWzEwNTY4XV0sIFsnaGFycicsIFs4NTk2XV0sIFsnaEFycicsIFs4NjYwXV0sIFsnaGFycncnLCBbODYyMV1dLCBbJ0hhdCcsIFs5NF1dLCBbJ2hiYXInLCBbODQ2M11dLCBbJ0hjaXJjJywgWzI5Ml1dLCBbJ2hjaXJjJywgWzI5M11dLCBbJ2hlYXJ0cycsIFs5ODI5XV0sIFsnaGVhcnRzdWl0JywgWzk4MjldXSwgWydoZWxsaXAnLCBbODIzMF1dLCBbJ2hlcmNvbicsIFs4ODg5XV0sIFsnaGZyJywgWzEyMDEwMV1dLCBbJ0hmcicsIFs4NDYwXV0sIFsnSGlsYmVydFNwYWNlJywgWzg0NTldXSwgWydoa3NlYXJvdycsIFsxMDUzM11dLCBbJ2hrc3dhcm93JywgWzEwNTM0XV0sIFsnaG9hcnInLCBbODcwM11dLCBbJ2hvbXRodCcsIFs4NzYzXV0sIFsnaG9va2xlZnRhcnJvdycsIFs4NjE3XV0sIFsnaG9va3JpZ2h0YXJyb3cnLCBbODYxOF1dLCBbJ2hvcGYnLCBbMTIwMTUzXV0sIFsnSG9wZicsIFs4NDYxXV0sIFsnaG9yYmFyJywgWzgyMTNdXSwgWydIb3Jpem9udGFsTGluZScsIFs5NDcyXV0sIFsnaHNjcicsIFsxMTk5OTddXSwgWydIc2NyJywgWzg0NTldXSwgWydoc2xhc2gnLCBbODQ2M11dLCBbJ0hzdHJvaycsIFsyOTRdXSwgWydoc3Ryb2snLCBbMjk1XV0sIFsnSHVtcERvd25IdW1wJywgWzg3ODJdXSwgWydIdW1wRXF1YWwnLCBbODc4M11dLCBbJ2h5YnVsbCcsIFs4MjU5XV0sIFsnaHlwaGVuJywgWzgyMDhdXSwgWydJYWN1dGUnLCBbMjA1XV0sIFsnaWFjdXRlJywgWzIzN11dLCBbJ2ljJywgWzgyOTFdXSwgWydJY2lyYycsIFsyMDZdXSwgWydpY2lyYycsIFsyMzhdXSwgWydJY3knLCBbMTA0OF1dLCBbJ2ljeScsIFsxMDgwXV0sIFsnSWRvdCcsIFszMDRdXSwgWydJRWN5JywgWzEwNDVdXSwgWydpZWN5JywgWzEwNzddXSwgWydpZXhjbCcsIFsxNjFdXSwgWydpZmYnLCBbODY2MF1dLCBbJ2lmcicsIFsxMjAxMDJdXSwgWydJZnInLCBbODQ2NV1dLCBbJ0lncmF2ZScsIFsyMDRdXSwgWydpZ3JhdmUnLCBbMjM2XV0sIFsnaWknLCBbODUyMF1dLCBbJ2lpaWludCcsIFsxMDc2NF1dLCBbJ2lpaW50JywgWzg3NDldXSwgWydpaW5maW4nLCBbMTA3MTZdXSwgWydpaW90YScsIFs4NDg5XV0sIFsnSUpsaWcnLCBbMzA2XV0sIFsnaWpsaWcnLCBbMzA3XV0sIFsnSW1hY3InLCBbMjk4XV0sIFsnaW1hY3InLCBbMjk5XV0sIFsnaW1hZ2UnLCBbODQ2NV1dLCBbJ0ltYWdpbmFyeUknLCBbODUyMF1dLCBbJ2ltYWdsaW5lJywgWzg0NjRdXSwgWydpbWFncGFydCcsIFs4NDY1XV0sIFsnaW1hdGgnLCBbMzA1XV0sIFsnSW0nLCBbODQ2NV1dLCBbJ2ltb2YnLCBbODg4N11dLCBbJ2ltcGVkJywgWzQzN11dLCBbJ0ltcGxpZXMnLCBbODY1OF1dLCBbJ2luY2FyZScsIFs4NDUzXV0sIFsnaW4nLCBbODcxMl1dLCBbJ2luZmluJywgWzg3MzRdXSwgWydpbmZpbnRpZScsIFsxMDcxN11dLCBbJ2lub2RvdCcsIFszMDVdXSwgWydpbnRjYWwnLCBbODg5MF1dLCBbJ2ludCcsIFs4NzQ3XV0sIFsnSW50JywgWzg3NDhdXSwgWydpbnRlZ2VycycsIFs4NDg0XV0sIFsnSW50ZWdyYWwnLCBbODc0N11dLCBbJ2ludGVyY2FsJywgWzg4OTBdXSwgWydJbnRlcnNlY3Rpb24nLCBbODg5OF1dLCBbJ2ludGxhcmhrJywgWzEwNzc1XV0sIFsnaW50cHJvZCcsIFsxMDgxMl1dLCBbJ0ludmlzaWJsZUNvbW1hJywgWzgyOTFdXSwgWydJbnZpc2libGVUaW1lcycsIFs4MjkwXV0sIFsnSU9jeScsIFsxMDI1XV0sIFsnaW9jeScsIFsxMTA1XV0sIFsnSW9nb24nLCBbMzAyXV0sIFsnaW9nb24nLCBbMzAzXV0sIFsnSW9wZicsIFsxMjAxMjhdXSwgWydpb3BmJywgWzEyMDE1NF1dLCBbJ0lvdGEnLCBbOTIxXV0sIFsnaW90YScsIFs5NTNdXSwgWydpcHJvZCcsIFsxMDgxMl1dLCBbJ2lxdWVzdCcsIFsxOTFdXSwgWydpc2NyJywgWzExOTk5OF1dLCBbJ0lzY3InLCBbODQ2NF1dLCBbJ2lzaW4nLCBbODcxMl1dLCBbJ2lzaW5kb3QnLCBbODk0OV1dLCBbJ2lzaW5FJywgWzg5NTNdXSwgWydpc2lucycsIFs4OTQ4XV0sIFsnaXNpbnN2JywgWzg5NDddXSwgWydpc2ludicsIFs4NzEyXV0sIFsnaXQnLCBbODI5MF1dLCBbJ0l0aWxkZScsIFsyOTZdXSwgWydpdGlsZGUnLCBbMjk3XV0sIFsnSXVrY3knLCBbMTAzMF1dLCBbJ2l1a2N5JywgWzExMTBdXSwgWydJdW1sJywgWzIwN11dLCBbJ2l1bWwnLCBbMjM5XV0sIFsnSmNpcmMnLCBbMzA4XV0sIFsnamNpcmMnLCBbMzA5XV0sIFsnSmN5JywgWzEwNDldXSwgWydqY3knLCBbMTA4MV1dLCBbJ0pmcicsIFsxMjAwNzddXSwgWydqZnInLCBbMTIwMTAzXV0sIFsnam1hdGgnLCBbNTY3XV0sIFsnSm9wZicsIFsxMjAxMjldXSwgWydqb3BmJywgWzEyMDE1NV1dLCBbJ0pzY3InLCBbMTE5OTczXV0sIFsnanNjcicsIFsxMTk5OTldXSwgWydKc2VyY3knLCBbMTAzMl1dLCBbJ2pzZXJjeScsIFsxMTEyXV0sIFsnSnVrY3knLCBbMTAyOF1dLCBbJ2p1a2N5JywgWzExMDhdXSwgWydLYXBwYScsIFs5MjJdXSwgWydrYXBwYScsIFs5NTRdXSwgWydrYXBwYXYnLCBbMTAwOF1dLCBbJ0tjZWRpbCcsIFszMTBdXSwgWydrY2VkaWwnLCBbMzExXV0sIFsnS2N5JywgWzEwNTBdXSwgWydrY3knLCBbMTA4Ml1dLCBbJ0tmcicsIFsxMjAwNzhdXSwgWydrZnInLCBbMTIwMTA0XV0sIFsna2dyZWVuJywgWzMxMl1dLCBbJ0tIY3knLCBbMTA2MV1dLCBbJ2toY3knLCBbMTA5M11dLCBbJ0tKY3knLCBbMTAzNl1dLCBbJ2tqY3knLCBbMTExNl1dLCBbJ0tvcGYnLCBbMTIwMTMwXV0sIFsna29wZicsIFsxMjAxNTZdXSwgWydLc2NyJywgWzExOTk3NF1dLCBbJ2tzY3InLCBbMTIwMDAwXV0sIFsnbEFhcnInLCBbODY2Nl1dLCBbJ0xhY3V0ZScsIFszMTNdXSwgWydsYWN1dGUnLCBbMzE0XV0sIFsnbGFlbXB0eXYnLCBbMTA2NzZdXSwgWydsYWdyYW4nLCBbODQ2Nl1dLCBbJ0xhbWJkYScsIFs5MjNdXSwgWydsYW1iZGEnLCBbOTU1XV0sIFsnbGFuZycsIFsxMDIxNl1dLCBbJ0xhbmcnLCBbMTAyMThdXSwgWydsYW5nZCcsIFsxMDY0MV1dLCBbJ2xhbmdsZScsIFsxMDIxNl1dLCBbJ2xhcCcsIFsxMDg4NV1dLCBbJ0xhcGxhY2V0cmYnLCBbODQ2Nl1dLCBbJ2xhcXVvJywgWzE3MV1dLCBbJ2xhcnJiJywgWzg2NzZdXSwgWydsYXJyYmZzJywgWzEwNTI3XV0sIFsnbGFycicsIFs4NTkyXV0sIFsnTGFycicsIFs4NjA2XV0sIFsnbEFycicsIFs4NjU2XV0sIFsnbGFycmZzJywgWzEwNTI1XV0sIFsnbGFycmhrJywgWzg2MTddXSwgWydsYXJybHAnLCBbODYxOV1dLCBbJ2xhcnJwbCcsIFsxMDU1M11dLCBbJ2xhcnJzaW0nLCBbMTA2MTFdXSwgWydsYXJydGwnLCBbODYxMF1dLCBbJ2xhdGFpbCcsIFsxMDUyMV1dLCBbJ2xBdGFpbCcsIFsxMDUyM11dLCBbJ2xhdCcsIFsxMDkyM11dLCBbJ2xhdGUnLCBbMTA5MjVdXSwgWydsYXRlcycsIFsxMDkyNSwgNjUwMjRdXSwgWydsYmFycicsIFsxMDUwOF1dLCBbJ2xCYXJyJywgWzEwNTEwXV0sIFsnbGJicmsnLCBbMTAwOThdXSwgWydsYnJhY2UnLCBbMTIzXV0sIFsnbGJyYWNrJywgWzkxXV0sIFsnbGJya2UnLCBbMTA2MzVdXSwgWydsYnJrc2xkJywgWzEwNjM5XV0sIFsnbGJya3NsdScsIFsxMDYzN11dLCBbJ0xjYXJvbicsIFszMTddXSwgWydsY2Fyb24nLCBbMzE4XV0sIFsnTGNlZGlsJywgWzMxNV1dLCBbJ2xjZWRpbCcsIFszMTZdXSwgWydsY2VpbCcsIFs4OTY4XV0sIFsnbGN1YicsIFsxMjNdXSwgWydMY3knLCBbMTA1MV1dLCBbJ2xjeScsIFsxMDgzXV0sIFsnbGRjYScsIFsxMDU1MF1dLCBbJ2xkcXVvJywgWzgyMjBdXSwgWydsZHF1b3InLCBbODIyMl1dLCBbJ2xkcmRoYXInLCBbMTA1OTldXSwgWydsZHJ1c2hhcicsIFsxMDU3MV1dLCBbJ2xkc2gnLCBbODYyNl1dLCBbJ2xlJywgWzg4MDRdXSwgWydsRScsIFs4ODA2XV0sIFsnTGVmdEFuZ2xlQnJhY2tldCcsIFsxMDIxNl1dLCBbJ0xlZnRBcnJvd0JhcicsIFs4Njc2XV0sIFsnbGVmdGFycm93JywgWzg1OTJdXSwgWydMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRhcnJvdycsIFs4NjU2XV0sIFsnTGVmdEFycm93UmlnaHRBcnJvdycsIFs4NjQ2XV0sIFsnbGVmdGFycm93dGFpbCcsIFs4NjEwXV0sIFsnTGVmdENlaWxpbmcnLCBbODk2OF1dLCBbJ0xlZnREb3VibGVCcmFja2V0JywgWzEwMjE0XV0sIFsnTGVmdERvd25UZWVWZWN0b3InLCBbMTA1OTNdXSwgWydMZWZ0RG93blZlY3RvckJhcicsIFsxMDU4NV1dLCBbJ0xlZnREb3duVmVjdG9yJywgWzg2NDNdXSwgWydMZWZ0Rmxvb3InLCBbODk3MF1dLCBbJ2xlZnRoYXJwb29uZG93bicsIFs4NjM3XV0sIFsnbGVmdGhhcnBvb251cCcsIFs4NjM2XV0sIFsnbGVmdGxlZnRhcnJvd3MnLCBbODY0N11dLCBbJ2xlZnRyaWdodGFycm93JywgWzg1OTZdXSwgWydMZWZ0UmlnaHRBcnJvdycsIFs4NTk2XV0sIFsnTGVmdHJpZ2h0YXJyb3cnLCBbODY2MF1dLCBbJ2xlZnRyaWdodGFycm93cycsIFs4NjQ2XV0sIFsnbGVmdHJpZ2h0aGFycG9vbnMnLCBbODY1MV1dLCBbJ2xlZnRyaWdodHNxdWlnYXJyb3cnLCBbODYyMV1dLCBbJ0xlZnRSaWdodFZlY3RvcicsIFsxMDU3NF1dLCBbJ0xlZnRUZWVBcnJvdycsIFs4NjEyXV0sIFsnTGVmdFRlZScsIFs4ODY3XV0sIFsnTGVmdFRlZVZlY3RvcicsIFsxMDU4Nl1dLCBbJ2xlZnR0aHJlZXRpbWVzJywgWzg5MDddXSwgWydMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDNdXSwgWydMZWZ0VHJpYW5nbGUnLCBbODg4Ml1dLCBbJ0xlZnRUcmlhbmdsZUVxdWFsJywgWzg4ODRdXSwgWydMZWZ0VXBEb3duVmVjdG9yJywgWzEwNTc3XV0sIFsnTGVmdFVwVGVlVmVjdG9yJywgWzEwNTkyXV0sIFsnTGVmdFVwVmVjdG9yQmFyJywgWzEwNTg0XV0sIFsnTGVmdFVwVmVjdG9yJywgWzg2MzldXSwgWydMZWZ0VmVjdG9yQmFyJywgWzEwNTc4XV0sIFsnTGVmdFZlY3RvcicsIFs4NjM2XV0sIFsnbEVnJywgWzEwODkxXV0sIFsnbGVnJywgWzg5MjJdXSwgWydsZXEnLCBbODgwNF1dLCBbJ2xlcXEnLCBbODgwNl1dLCBbJ2xlcXNsYW50JywgWzEwODc3XV0sIFsnbGVzY2MnLCBbMTA5MjBdXSwgWydsZXMnLCBbMTA4NzddXSwgWydsZXNkb3QnLCBbMTA4NzldXSwgWydsZXNkb3RvJywgWzEwODgxXV0sIFsnbGVzZG90b3InLCBbMTA4ODNdXSwgWydsZXNnJywgWzg5MjIsIDY1MDI0XV0sIFsnbGVzZ2VzJywgWzEwODk5XV0sIFsnbGVzc2FwcHJveCcsIFsxMDg4NV1dLCBbJ2xlc3Nkb3QnLCBbODkxOF1dLCBbJ2xlc3NlcWd0cicsIFs4OTIyXV0sIFsnbGVzc2VxcWd0cicsIFsxMDg5MV1dLCBbJ0xlc3NFcXVhbEdyZWF0ZXInLCBbODkyMl1dLCBbJ0xlc3NGdWxsRXF1YWwnLCBbODgwNl1dLCBbJ0xlc3NHcmVhdGVyJywgWzg4MjJdXSwgWydsZXNzZ3RyJywgWzg4MjJdXSwgWydMZXNzTGVzcycsIFsxMDkxM11dLCBbJ2xlc3NzaW0nLCBbODgxOF1dLCBbJ0xlc3NTbGFudEVxdWFsJywgWzEwODc3XV0sIFsnTGVzc1RpbGRlJywgWzg4MThdXSwgWydsZmlzaHQnLCBbMTA2MjBdXSwgWydsZmxvb3InLCBbODk3MF1dLCBbJ0xmcicsIFsxMjAwNzldXSwgWydsZnInLCBbMTIwMTA1XV0sIFsnbGcnLCBbODgyMl1dLCBbJ2xnRScsIFsxMDg5N11dLCBbJ2xIYXInLCBbMTA1OTRdXSwgWydsaGFyZCcsIFs4NjM3XV0sIFsnbGhhcnUnLCBbODYzNl1dLCBbJ2xoYXJ1bCcsIFsxMDYwMl1dLCBbJ2xoYmxrJywgWzk2MDRdXSwgWydMSmN5JywgWzEwMzNdXSwgWydsamN5JywgWzExMTNdXSwgWydsbGFycicsIFs4NjQ3XV0sIFsnbGwnLCBbODgxMF1dLCBbJ0xsJywgWzg5MjBdXSwgWydsbGNvcm5lcicsIFs4OTkwXV0sIFsnTGxlZnRhcnJvdycsIFs4NjY2XV0sIFsnbGxoYXJkJywgWzEwNjAzXV0sIFsnbGx0cmknLCBbOTcyMl1dLCBbJ0xtaWRvdCcsIFszMTldXSwgWydsbWlkb3QnLCBbMzIwXV0sIFsnbG1vdXN0YWNoZScsIFs5MTM2XV0sIFsnbG1vdXN0JywgWzkxMzZdXSwgWydsbmFwJywgWzEwODg5XV0sIFsnbG5hcHByb3gnLCBbMTA4ODldXSwgWydsbmUnLCBbMTA4ODddXSwgWydsbkUnLCBbODgwOF1dLCBbJ2xuZXEnLCBbMTA4ODddXSwgWydsbmVxcScsIFs4ODA4XV0sIFsnbG5zaW0nLCBbODkzNF1dLCBbJ2xvYW5nJywgWzEwMjIwXV0sIFsnbG9hcnInLCBbODcwMV1dLCBbJ2xvYnJrJywgWzEwMjE0XV0sIFsnbG9uZ2xlZnRhcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdMZWZ0QXJyb3cnLCBbMTAyMjldXSwgWydMb25nbGVmdGFycm93JywgWzEwMjMyXV0sIFsnbG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjMxXV0sIFsnTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjMxXV0sIFsnTG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjM0XV0sIFsnbG9uZ21hcHN0bycsIFsxMDIzNl1dLCBbJ2xvbmdyaWdodGFycm93JywgWzEwMjMwXV0sIFsnTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzBdXSwgWydMb25ncmlnaHRhcnJvdycsIFsxMDIzM11dLCBbJ2xvb3BhcnJvd2xlZnQnLCBbODYxOV1dLCBbJ2xvb3BhcnJvd3JpZ2h0JywgWzg2MjBdXSwgWydsb3BhcicsIFsxMDYyOV1dLCBbJ0xvcGYnLCBbMTIwMTMxXV0sIFsnbG9wZicsIFsxMjAxNTddXSwgWydsb3BsdXMnLCBbMTA3OTddXSwgWydsb3RpbWVzJywgWzEwODA0XV0sIFsnbG93YXN0JywgWzg3MjddXSwgWydsb3diYXInLCBbOTVdXSwgWydMb3dlckxlZnRBcnJvdycsIFs4NjAxXV0sIFsnTG93ZXJSaWdodEFycm93JywgWzg2MDBdXSwgWydsb3onLCBbOTY3NF1dLCBbJ2xvemVuZ2UnLCBbOTY3NF1dLCBbJ2xvemYnLCBbMTA3MzFdXSwgWydscGFyJywgWzQwXV0sIFsnbHBhcmx0JywgWzEwNjQzXV0sIFsnbHJhcnInLCBbODY0Nl1dLCBbJ2xyY29ybmVyJywgWzg5OTFdXSwgWydscmhhcicsIFs4NjUxXV0sIFsnbHJoYXJkJywgWzEwNjA1XV0sIFsnbHJtJywgWzgyMDZdXSwgWydscnRyaScsIFs4ODk1XV0sIFsnbHNhcXVvJywgWzgyNDldXSwgWydsc2NyJywgWzEyMDAwMV1dLCBbJ0xzY3InLCBbODQ2Nl1dLCBbJ2xzaCcsIFs4NjI0XV0sIFsnTHNoJywgWzg2MjRdXSwgWydsc2ltJywgWzg4MThdXSwgWydsc2ltZScsIFsxMDg5M11dLCBbJ2xzaW1nJywgWzEwODk1XV0sIFsnbHNxYicsIFs5MV1dLCBbJ2xzcXVvJywgWzgyMTZdXSwgWydsc3F1b3InLCBbODIxOF1dLCBbJ0xzdHJvaycsIFszMjFdXSwgWydsc3Ryb2snLCBbMzIyXV0sIFsnbHRjYycsIFsxMDkxOF1dLCBbJ2x0Y2lyJywgWzEwODczXV0sIFsnbHQnLCBbNjBdXSwgWydMVCcsIFs2MF1dLCBbJ0x0JywgWzg4MTBdXSwgWydsdGRvdCcsIFs4OTE4XV0sIFsnbHRocmVlJywgWzg5MDddXSwgWydsdGltZXMnLCBbODkwNV1dLCBbJ2x0bGFycicsIFsxMDYxNF1dLCBbJ2x0cXVlc3QnLCBbMTA4NzVdXSwgWydsdHJpJywgWzk2NjddXSwgWydsdHJpZScsIFs4ODg0XV0sIFsnbHRyaWYnLCBbOTY2Nl1dLCBbJ2x0clBhcicsIFsxMDY0Nl1dLCBbJ2x1cmRzaGFyJywgWzEwNTcwXV0sIFsnbHVydWhhcicsIFsxMDU5OF1dLCBbJ2x2ZXJ0bmVxcScsIFs4ODA4LCA2NTAyNF1dLCBbJ2x2bkUnLCBbODgwOCwgNjUwMjRdXSwgWydtYWNyJywgWzE3NV1dLCBbJ21hbGUnLCBbOTc5NF1dLCBbJ21hbHQnLCBbMTAwMTZdXSwgWydtYWx0ZXNlJywgWzEwMDE2XV0sIFsnTWFwJywgWzEwNTAxXV0sIFsnbWFwJywgWzg2MTRdXSwgWydtYXBzdG8nLCBbODYxNF1dLCBbJ21hcHN0b2Rvd24nLCBbODYxNV1dLCBbJ21hcHN0b2xlZnQnLCBbODYxMl1dLCBbJ21hcHN0b3VwJywgWzg2MTNdXSwgWydtYXJrZXInLCBbOTY0Nl1dLCBbJ21jb21tYScsIFsxMDc5M11dLCBbJ01jeScsIFsxMDUyXV0sIFsnbWN5JywgWzEwODRdXSwgWydtZGFzaCcsIFs4MjEyXV0sIFsnbUREb3QnLCBbODc2Ml1dLCBbJ21lYXN1cmVkYW5nbGUnLCBbODczN11dLCBbJ01lZGl1bVNwYWNlJywgWzgyODddXSwgWydNZWxsaW50cmYnLCBbODQ5OV1dLCBbJ01mcicsIFsxMjAwODBdXSwgWydtZnInLCBbMTIwMTA2XV0sIFsnbWhvJywgWzg0ODddXSwgWydtaWNybycsIFsxODFdXSwgWydtaWRhc3QnLCBbNDJdXSwgWydtaWRjaXInLCBbMTA5OTJdXSwgWydtaWQnLCBbODczOV1dLCBbJ21pZGRvdCcsIFsxODNdXSwgWydtaW51c2InLCBbODg2M11dLCBbJ21pbnVzJywgWzg3MjJdXSwgWydtaW51c2QnLCBbODc2MF1dLCBbJ21pbnVzZHUnLCBbMTA3OTRdXSwgWydNaW51c1BsdXMnLCBbODcyM11dLCBbJ21sY3AnLCBbMTA5NzFdXSwgWydtbGRyJywgWzgyMzBdXSwgWydtbnBsdXMnLCBbODcyM11dLCBbJ21vZGVscycsIFs4ODcxXV0sIFsnTW9wZicsIFsxMjAxMzJdXSwgWydtb3BmJywgWzEyMDE1OF1dLCBbJ21wJywgWzg3MjNdXSwgWydtc2NyJywgWzEyMDAwMl1dLCBbJ01zY3InLCBbODQ5OV1dLCBbJ21zdHBvcycsIFs4NzY2XV0sIFsnTXUnLCBbOTI0XV0sIFsnbXUnLCBbOTU2XV0sIFsnbXVsdGltYXAnLCBbODg4OF1dLCBbJ211bWFwJywgWzg4ODhdXSwgWyduYWJsYScsIFs4NzExXV0sIFsnTmFjdXRlJywgWzMyM11dLCBbJ25hY3V0ZScsIFszMjRdXSwgWyduYW5nJywgWzg3MzYsIDg0MDJdXSwgWyduYXAnLCBbODc3N11dLCBbJ25hcEUnLCBbMTA4NjQsIDgyNF1dLCBbJ25hcGlkJywgWzg3NzksIDgyNF1dLCBbJ25hcG9zJywgWzMyOV1dLCBbJ25hcHByb3gnLCBbODc3N11dLCBbJ25hdHVyYWwnLCBbOTgzOF1dLCBbJ25hdHVyYWxzJywgWzg0NjldXSwgWyduYXR1cicsIFs5ODM4XV0sIFsnbmJzcCcsIFsxNjBdXSwgWyduYnVtcCcsIFs4NzgyLCA4MjRdXSwgWyduYnVtcGUnLCBbODc4MywgODI0XV0sIFsnbmNhcCcsIFsxMDgxOV1dLCBbJ05jYXJvbicsIFszMjddXSwgWyduY2Fyb24nLCBbMzI4XV0sIFsnTmNlZGlsJywgWzMyNV1dLCBbJ25jZWRpbCcsIFszMjZdXSwgWyduY29uZycsIFs4Nzc1XV0sIFsnbmNvbmdkb3QnLCBbMTA4NjEsIDgyNF1dLCBbJ25jdXAnLCBbMTA4MThdXSwgWydOY3knLCBbMTA1M11dLCBbJ25jeScsIFsxMDg1XV0sIFsnbmRhc2gnLCBbODIxMV1dLCBbJ25lYXJoaycsIFsxMDUzMl1dLCBbJ25lYXJyJywgWzg1OTldXSwgWyduZUFycicsIFs4NjYzXV0sIFsnbmVhcnJvdycsIFs4NTk5XV0sIFsnbmUnLCBbODgwMF1dLCBbJ25lZG90JywgWzg3ODQsIDgyNF1dLCBbJ05lZ2F0aXZlTWVkaXVtU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpY2tTcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGluU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnbmVxdWl2JywgWzg4MDJdXSwgWyduZXNlYXInLCBbMTA1MzZdXSwgWyduZXNpbScsIFs4NzcwLCA4MjRdXSwgWydOZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFs4ODExXV0sIFsnTmVzdGVkTGVzc0xlc3MnLCBbODgxMF1dLCBbJ25leGlzdCcsIFs4NzA4XV0sIFsnbmV4aXN0cycsIFs4NzA4XV0sIFsnTmZyJywgWzEyMDA4MV1dLCBbJ25mcicsIFsxMjAxMDddXSwgWyduZ0UnLCBbODgwNywgODI0XV0sIFsnbmdlJywgWzg4MTddXSwgWyduZ2VxJywgWzg4MTddXSwgWyduZ2VxcScsIFs4ODA3LCA4MjRdXSwgWyduZ2Vxc2xhbnQnLCBbMTA4NzgsIDgyNF1dLCBbJ25nZXMnLCBbMTA4NzgsIDgyNF1dLCBbJ25HZycsIFs4OTIxLCA4MjRdXSwgWyduZ3NpbScsIFs4ODIxXV0sIFsnbkd0JywgWzg4MTEsIDg0MDJdXSwgWyduZ3QnLCBbODgxNV1dLCBbJ25ndHInLCBbODgxNV1dLCBbJ25HdHYnLCBbODgxMSwgODI0XV0sIFsnbmhhcnInLCBbODYyMl1dLCBbJ25oQXJyJywgWzg2NTRdXSwgWyduaHBhcicsIFsxMDk5NF1dLCBbJ25pJywgWzg3MTVdXSwgWyduaXMnLCBbODk1Nl1dLCBbJ25pc2QnLCBbODk1NF1dLCBbJ25pdicsIFs4NzE1XV0sIFsnTkpjeScsIFsxMDM0XV0sIFsnbmpjeScsIFsxMTE0XV0sIFsnbmxhcnInLCBbODYwMl1dLCBbJ25sQXJyJywgWzg2NTNdXSwgWydubGRyJywgWzgyMjldXSwgWydubEUnLCBbODgwNiwgODI0XV0sIFsnbmxlJywgWzg4MTZdXSwgWydubGVmdGFycm93JywgWzg2MDJdXSwgWyduTGVmdGFycm93JywgWzg2NTNdXSwgWydubGVmdHJpZ2h0YXJyb3cnLCBbODYyMl1dLCBbJ25MZWZ0cmlnaHRhcnJvdycsIFs4NjU0XV0sIFsnbmxlcScsIFs4ODE2XV0sIFsnbmxlcXEnLCBbODgwNiwgODI0XV0sIFsnbmxlcXNsYW50JywgWzEwODc3LCA4MjRdXSwgWydubGVzJywgWzEwODc3LCA4MjRdXSwgWydubGVzcycsIFs4ODE0XV0sIFsnbkxsJywgWzg5MjAsIDgyNF1dLCBbJ25sc2ltJywgWzg4MjBdXSwgWyduTHQnLCBbODgxMCwgODQwMl1dLCBbJ25sdCcsIFs4ODE0XV0sIFsnbmx0cmknLCBbODkzOF1dLCBbJ25sdHJpZScsIFs4OTQwXV0sIFsnbkx0dicsIFs4ODEwLCA4MjRdXSwgWydubWlkJywgWzg3NDBdXSwgWydOb0JyZWFrJywgWzgyODhdXSwgWydOb25CcmVha2luZ1NwYWNlJywgWzE2MF1dLCBbJ25vcGYnLCBbMTIwMTU5XV0sIFsnTm9wZicsIFs4NDY5XV0sIFsnTm90JywgWzEwOTg4XV0sIFsnbm90JywgWzE3Ml1dLCBbJ05vdENvbmdydWVudCcsIFs4ODAyXV0sIFsnTm90Q3VwQ2FwJywgWzg4MTNdXSwgWydOb3REb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQyXV0sIFsnTm90RWxlbWVudCcsIFs4NzEzXV0sIFsnTm90RXF1YWwnLCBbODgwMF1dLCBbJ05vdEVxdWFsVGlsZGUnLCBbODc3MCwgODI0XV0sIFsnTm90RXhpc3RzJywgWzg3MDhdXSwgWydOb3RHcmVhdGVyJywgWzg4MTVdXSwgWydOb3RHcmVhdGVyRXF1YWwnLCBbODgxN11dLCBbJ05vdEdyZWF0ZXJGdWxsRXF1YWwnLCBbODgwNywgODI0XV0sIFsnTm90R3JlYXRlckdyZWF0ZXInLCBbODgxMSwgODI0XV0sIFsnTm90R3JlYXRlckxlc3MnLCBbODgyNV1dLCBbJ05vdEdyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4LCA4MjRdXSwgWydOb3RHcmVhdGVyVGlsZGUnLCBbODgyMV1dLCBbJ05vdEh1bXBEb3duSHVtcCcsIFs4NzgyLCA4MjRdXSwgWydOb3RIdW1wRXF1YWwnLCBbODc4MywgODI0XV0sIFsnbm90aW4nLCBbODcxM11dLCBbJ25vdGluZG90JywgWzg5NDksIDgyNF1dLCBbJ25vdGluRScsIFs4OTUzLCA4MjRdXSwgWydub3RpbnZhJywgWzg3MTNdXSwgWydub3RpbnZiJywgWzg5NTFdXSwgWydub3RpbnZjJywgWzg5NTBdXSwgWydOb3RMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDMsIDgyNF1dLCBbJ05vdExlZnRUcmlhbmdsZScsIFs4OTM4XV0sIFsnTm90TGVmdFRyaWFuZ2xlRXF1YWwnLCBbODk0MF1dLCBbJ05vdExlc3MnLCBbODgxNF1dLCBbJ05vdExlc3NFcXVhbCcsIFs4ODE2XV0sIFsnTm90TGVzc0dyZWF0ZXInLCBbODgyNF1dLCBbJ05vdExlc3NMZXNzJywgWzg4MTAsIDgyNF1dLCBbJ05vdExlc3NTbGFudEVxdWFsJywgWzEwODc3LCA4MjRdXSwgWydOb3RMZXNzVGlsZGUnLCBbODgyMF1dLCBbJ05vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzEwOTE0LCA4MjRdXSwgWydOb3ROZXN0ZWRMZXNzTGVzcycsIFsxMDkxMywgODI0XV0sIFsnbm90bmknLCBbODcxNl1dLCBbJ25vdG5pdmEnLCBbODcxNl1dLCBbJ25vdG5pdmInLCBbODk1OF1dLCBbJ25vdG5pdmMnLCBbODk1N11dLCBbJ05vdFByZWNlZGVzJywgWzg4MzJdXSwgWydOb3RQcmVjZWRlc0VxdWFsJywgWzEwOTI3LCA4MjRdXSwgWydOb3RQcmVjZWRlc1NsYW50RXF1YWwnLCBbODkyOF1dLCBbJ05vdFJldmVyc2VFbGVtZW50JywgWzg3MTZdXSwgWydOb3RSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0LCA4MjRdXSwgWydOb3RSaWdodFRyaWFuZ2xlJywgWzg5MzldXSwgWydOb3RSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODk0MV1dLCBbJ05vdFNxdWFyZVN1YnNldCcsIFs4ODQ3LCA4MjRdXSwgWydOb3RTcXVhcmVTdWJzZXRFcXVhbCcsIFs4OTMwXV0sIFsnTm90U3F1YXJlU3VwZXJzZXQnLCBbODg0OCwgODI0XV0sIFsnTm90U3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4OTMxXV0sIFsnTm90U3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWydOb3RTdWJzZXRFcXVhbCcsIFs4ODQwXV0sIFsnTm90U3VjY2VlZHMnLCBbODgzM11dLCBbJ05vdFN1Y2NlZWRzRXF1YWwnLCBbMTA5MjgsIDgyNF1dLCBbJ05vdFN1Y2NlZWRzU2xhbnRFcXVhbCcsIFs4OTI5XV0sIFsnTm90U3VjY2VlZHNUaWxkZScsIFs4ODMxLCA4MjRdXSwgWydOb3RTdXBlcnNldCcsIFs4ODM1LCA4NDAyXV0sIFsnTm90U3VwZXJzZXRFcXVhbCcsIFs4ODQxXV0sIFsnTm90VGlsZGUnLCBbODc2OV1dLCBbJ05vdFRpbGRlRXF1YWwnLCBbODc3Ml1dLCBbJ05vdFRpbGRlRnVsbEVxdWFsJywgWzg3NzVdXSwgWydOb3RUaWxkZVRpbGRlJywgWzg3NzddXSwgWydOb3RWZXJ0aWNhbEJhcicsIFs4NzQwXV0sIFsnbnBhcmFsbGVsJywgWzg3NDJdXSwgWyducGFyJywgWzg3NDJdXSwgWyducGFyc2wnLCBbMTEwMDUsIDg0MjFdXSwgWyducGFydCcsIFs4NzA2LCA4MjRdXSwgWyducG9saW50JywgWzEwNzcyXV0sIFsnbnByJywgWzg4MzJdXSwgWyducHJjdWUnLCBbODkyOF1dLCBbJ25wcmVjJywgWzg4MzJdXSwgWyducHJlY2VxJywgWzEwOTI3LCA4MjRdXSwgWyducHJlJywgWzEwOTI3LCA4MjRdXSwgWyducmFycmMnLCBbMTA1NDcsIDgyNF1dLCBbJ25yYXJyJywgWzg2MDNdXSwgWyduckFycicsIFs4NjU1XV0sIFsnbnJhcnJ3JywgWzg2MDUsIDgyNF1dLCBbJ25yaWdodGFycm93JywgWzg2MDNdXSwgWyduUmlnaHRhcnJvdycsIFs4NjU1XV0sIFsnbnJ0cmknLCBbODkzOV1dLCBbJ25ydHJpZScsIFs4OTQxXV0sIFsnbnNjJywgWzg4MzNdXSwgWyduc2NjdWUnLCBbODkyOV1dLCBbJ25zY2UnLCBbMTA5MjgsIDgyNF1dLCBbJ05zY3InLCBbMTE5OTc3XV0sIFsnbnNjcicsIFsxMjAwMDNdXSwgWyduc2hvcnRtaWQnLCBbODc0MF1dLCBbJ25zaG9ydHBhcmFsbGVsJywgWzg3NDJdXSwgWyduc2ltJywgWzg3NjldXSwgWyduc2ltZScsIFs4NzcyXV0sIFsnbnNpbWVxJywgWzg3NzJdXSwgWyduc21pZCcsIFs4NzQwXV0sIFsnbnNwYXInLCBbODc0Ml1dLCBbJ25zcXN1YmUnLCBbODkzMF1dLCBbJ25zcXN1cGUnLCBbODkzMV1dLCBbJ25zdWInLCBbODgzNl1dLCBbJ25zdWJFJywgWzEwOTQ5LCA4MjRdXSwgWyduc3ViZScsIFs4ODQwXV0sIFsnbnN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnbnN1YnNldGVxJywgWzg4NDBdXSwgWyduc3Vic2V0ZXFxJywgWzEwOTQ5LCA4MjRdXSwgWyduc3VjYycsIFs4ODMzXV0sIFsnbnN1Y2NlcScsIFsxMDkyOCwgODI0XV0sIFsnbnN1cCcsIFs4ODM3XV0sIFsnbnN1cEUnLCBbMTA5NTAsIDgyNF1dLCBbJ25zdXBlJywgWzg4NDFdXSwgWyduc3Vwc2V0JywgWzg4MzUsIDg0MDJdXSwgWyduc3Vwc2V0ZXEnLCBbODg0MV1dLCBbJ25zdXBzZXRlcXEnLCBbMTA5NTAsIDgyNF1dLCBbJ250Z2wnLCBbODgyNV1dLCBbJ050aWxkZScsIFsyMDldXSwgWydudGlsZGUnLCBbMjQxXV0sIFsnbnRsZycsIFs4ODI0XV0sIFsnbnRyaWFuZ2xlbGVmdCcsIFs4OTM4XV0sIFsnbnRyaWFuZ2xlbGVmdGVxJywgWzg5NDBdXSwgWydudHJpYW5nbGVyaWdodCcsIFs4OTM5XV0sIFsnbnRyaWFuZ2xlcmlnaHRlcScsIFs4OTQxXV0sIFsnTnUnLCBbOTI1XV0sIFsnbnUnLCBbOTU3XV0sIFsnbnVtJywgWzM1XV0sIFsnbnVtZXJvJywgWzg0NzBdXSwgWydudW1zcCcsIFs4MTk5XV0sIFsnbnZhcCcsIFs4NzgxLCA4NDAyXV0sIFsnbnZkYXNoJywgWzg4NzZdXSwgWydudkRhc2gnLCBbODg3N11dLCBbJ25WZGFzaCcsIFs4ODc4XV0sIFsnblZEYXNoJywgWzg4NzldXSwgWydudmdlJywgWzg4MDUsIDg0MDJdXSwgWydudmd0JywgWzYyLCA4NDAyXV0sIFsnbnZIYXJyJywgWzEwNTAwXV0sIFsnbnZpbmZpbicsIFsxMDcxOF1dLCBbJ252bEFycicsIFsxMDQ5OF1dLCBbJ252bGUnLCBbODgwNCwgODQwMl1dLCBbJ252bHQnLCBbNjAsIDg0MDJdXSwgWydudmx0cmllJywgWzg4ODQsIDg0MDJdXSwgWydudnJBcnInLCBbMTA0OTldXSwgWydudnJ0cmllJywgWzg4ODUsIDg0MDJdXSwgWydudnNpbScsIFs4NzY0LCA4NDAyXV0sIFsnbndhcmhrJywgWzEwNTMxXV0sIFsnbndhcnInLCBbODU5OF1dLCBbJ253QXJyJywgWzg2NjJdXSwgWydud2Fycm93JywgWzg1OThdXSwgWydud25lYXInLCBbMTA1MzVdXSwgWydPYWN1dGUnLCBbMjExXV0sIFsnb2FjdXRlJywgWzI0M11dLCBbJ29hc3QnLCBbODg1OV1dLCBbJ09jaXJjJywgWzIxMl1dLCBbJ29jaXJjJywgWzI0NF1dLCBbJ29jaXInLCBbODg1OF1dLCBbJ09jeScsIFsxMDU0XV0sIFsnb2N5JywgWzEwODZdXSwgWydvZGFzaCcsIFs4ODYxXV0sIFsnT2RibGFjJywgWzMzNl1dLCBbJ29kYmxhYycsIFszMzddXSwgWydvZGl2JywgWzEwODA4XV0sIFsnb2RvdCcsIFs4ODU3XV0sIFsnb2Rzb2xkJywgWzEwNjg0XV0sIFsnT0VsaWcnLCBbMzM4XV0sIFsnb2VsaWcnLCBbMzM5XV0sIFsnb2ZjaXInLCBbMTA2ODddXSwgWydPZnInLCBbMTIwMDgyXV0sIFsnb2ZyJywgWzEyMDEwOF1dLCBbJ29nb24nLCBbNzMxXV0sIFsnT2dyYXZlJywgWzIxMF1dLCBbJ29ncmF2ZScsIFsyNDJdXSwgWydvZ3QnLCBbMTA2ODldXSwgWydvaGJhcicsIFsxMDY3N11dLCBbJ29obScsIFs5MzddXSwgWydvaW50JywgWzg3NTBdXSwgWydvbGFycicsIFs4NjM0XV0sIFsnb2xjaXInLCBbMTA2ODZdXSwgWydvbGNyb3NzJywgWzEwNjgzXV0sIFsnb2xpbmUnLCBbODI1NF1dLCBbJ29sdCcsIFsxMDY4OF1dLCBbJ09tYWNyJywgWzMzMl1dLCBbJ29tYWNyJywgWzMzM11dLCBbJ09tZWdhJywgWzkzN11dLCBbJ29tZWdhJywgWzk2OV1dLCBbJ09taWNyb24nLCBbOTI3XV0sIFsnb21pY3JvbicsIFs5NTldXSwgWydvbWlkJywgWzEwNjc4XV0sIFsnb21pbnVzJywgWzg4NTRdXSwgWydPb3BmJywgWzEyMDEzNF1dLCBbJ29vcGYnLCBbMTIwMTYwXV0sIFsnb3BhcicsIFsxMDY3OV1dLCBbJ09wZW5DdXJseURvdWJsZVF1b3RlJywgWzgyMjBdXSwgWydPcGVuQ3VybHlRdW90ZScsIFs4MjE2XV0sIFsnb3BlcnAnLCBbMTA2ODFdXSwgWydvcGx1cycsIFs4ODUzXV0sIFsnb3JhcnInLCBbODYzNV1dLCBbJ09yJywgWzEwODM2XV0sIFsnb3InLCBbODc0NF1dLCBbJ29yZCcsIFsxMDg0NV1dLCBbJ29yZGVyJywgWzg1MDBdXSwgWydvcmRlcm9mJywgWzg1MDBdXSwgWydvcmRmJywgWzE3MF1dLCBbJ29yZG0nLCBbMTg2XV0sIFsnb3JpZ29mJywgWzg4ODZdXSwgWydvcm9yJywgWzEwODM4XV0sIFsnb3JzbG9wZScsIFsxMDgzOV1dLCBbJ29ydicsIFsxMDg0M11dLCBbJ29TJywgWzk0MTZdXSwgWydPc2NyJywgWzExOTk3OF1dLCBbJ29zY3InLCBbODUwMF1dLCBbJ09zbGFzaCcsIFsyMTZdXSwgWydvc2xhc2gnLCBbMjQ4XV0sIFsnb3NvbCcsIFs4ODU2XV0sIFsnT3RpbGRlJywgWzIxM11dLCBbJ290aWxkZScsIFsyNDVdXSwgWydvdGltZXNhcycsIFsxMDgwNl1dLCBbJ090aW1lcycsIFsxMDgwN11dLCBbJ290aW1lcycsIFs4ODU1XV0sIFsnT3VtbCcsIFsyMTRdXSwgWydvdW1sJywgWzI0Nl1dLCBbJ292YmFyJywgWzkwMjFdXSwgWydPdmVyQmFyJywgWzgyNTRdXSwgWydPdmVyQnJhY2UnLCBbOTE4Ml1dLCBbJ092ZXJCcmFja2V0JywgWzkxNDBdXSwgWydPdmVyUGFyZW50aGVzaXMnLCBbOTE4MF1dLCBbJ3BhcmEnLCBbMTgyXV0sIFsncGFyYWxsZWwnLCBbODc0MV1dLCBbJ3BhcicsIFs4NzQxXV0sIFsncGFyc2ltJywgWzEwOTk1XV0sIFsncGFyc2wnLCBbMTEwMDVdXSwgWydwYXJ0JywgWzg3MDZdXSwgWydQYXJ0aWFsRCcsIFs4NzA2XV0sIFsnUGN5JywgWzEwNTVdXSwgWydwY3knLCBbMTA4N11dLCBbJ3BlcmNudCcsIFszN11dLCBbJ3BlcmlvZCcsIFs0Nl1dLCBbJ3Blcm1pbCcsIFs4MjQwXV0sIFsncGVycCcsIFs4ODY5XV0sIFsncGVydGVuaycsIFs4MjQxXV0sIFsnUGZyJywgWzEyMDA4M11dLCBbJ3BmcicsIFsxMjAxMDldXSwgWydQaGknLCBbOTM0XV0sIFsncGhpJywgWzk2Nl1dLCBbJ3BoaXYnLCBbOTgxXV0sIFsncGhtbWF0JywgWzg0OTldXSwgWydwaG9uZScsIFs5NzQyXV0sIFsnUGknLCBbOTI4XV0sIFsncGknLCBbOTYwXV0sIFsncGl0Y2hmb3JrJywgWzg5MTZdXSwgWydwaXYnLCBbOTgyXV0sIFsncGxhbmNrJywgWzg0NjNdXSwgWydwbGFuY2toJywgWzg0NjJdXSwgWydwbGFua3YnLCBbODQ2M11dLCBbJ3BsdXNhY2lyJywgWzEwNzg3XV0sIFsncGx1c2InLCBbODg2Ml1dLCBbJ3BsdXNjaXInLCBbMTA3ODZdXSwgWydwbHVzJywgWzQzXV0sIFsncGx1c2RvJywgWzg3MjRdXSwgWydwbHVzZHUnLCBbMTA3ODldXSwgWydwbHVzZScsIFsxMDg2Nl1dLCBbJ1BsdXNNaW51cycsIFsxNzddXSwgWydwbHVzbW4nLCBbMTc3XV0sIFsncGx1c3NpbScsIFsxMDc5MF1dLCBbJ3BsdXN0d28nLCBbMTA3OTFdXSwgWydwbScsIFsxNzddXSwgWydQb2luY2FyZXBsYW5lJywgWzg0NjBdXSwgWydwb2ludGludCcsIFsxMDc3M11dLCBbJ3BvcGYnLCBbMTIwMTYxXV0sIFsnUG9wZicsIFs4NDczXV0sIFsncG91bmQnLCBbMTYzXV0sIFsncHJhcCcsIFsxMDkzNV1dLCBbJ1ByJywgWzEwOTM5XV0sIFsncHInLCBbODgyNl1dLCBbJ3ByY3VlJywgWzg4MjhdXSwgWydwcmVjYXBwcm94JywgWzEwOTM1XV0sIFsncHJlYycsIFs4ODI2XV0sIFsncHJlY2N1cmx5ZXEnLCBbODgyOF1dLCBbJ1ByZWNlZGVzJywgWzg4MjZdXSwgWydQcmVjZWRlc0VxdWFsJywgWzEwOTI3XV0sIFsnUHJlY2VkZXNTbGFudEVxdWFsJywgWzg4MjhdXSwgWydQcmVjZWRlc1RpbGRlJywgWzg4MzBdXSwgWydwcmVjZXEnLCBbMTA5MjddXSwgWydwcmVjbmFwcHJveCcsIFsxMDkzN11dLCBbJ3ByZWNuZXFxJywgWzEwOTMzXV0sIFsncHJlY25zaW0nLCBbODkzNl1dLCBbJ3ByZScsIFsxMDkyN11dLCBbJ3ByRScsIFsxMDkzMV1dLCBbJ3ByZWNzaW0nLCBbODgzMF1dLCBbJ3ByaW1lJywgWzgyNDJdXSwgWydQcmltZScsIFs4MjQzXV0sIFsncHJpbWVzJywgWzg0NzNdXSwgWydwcm5hcCcsIFsxMDkzN11dLCBbJ3BybkUnLCBbMTA5MzNdXSwgWydwcm5zaW0nLCBbODkzNl1dLCBbJ3Byb2QnLCBbODcxOV1dLCBbJ1Byb2R1Y3QnLCBbODcxOV1dLCBbJ3Byb2ZhbGFyJywgWzkwMDZdXSwgWydwcm9mbGluZScsIFs4OTc4XV0sIFsncHJvZnN1cmYnLCBbODk3OV1dLCBbJ3Byb3AnLCBbODczM11dLCBbJ1Byb3BvcnRpb25hbCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbicsIFs4NzU5XV0sIFsncHJvcHRvJywgWzg3MzNdXSwgWydwcnNpbScsIFs4ODMwXV0sIFsncHJ1cmVsJywgWzg4ODBdXSwgWydQc2NyJywgWzExOTk3OV1dLCBbJ3BzY3InLCBbMTIwMDA1XV0sIFsnUHNpJywgWzkzNl1dLCBbJ3BzaScsIFs5NjhdXSwgWydwdW5jc3AnLCBbODIwMF1dLCBbJ1FmcicsIFsxMjAwODRdXSwgWydxZnInLCBbMTIwMTEwXV0sIFsncWludCcsIFsxMDc2NF1dLCBbJ3FvcGYnLCBbMTIwMTYyXV0sIFsnUW9wZicsIFs4NDc0XV0sIFsncXByaW1lJywgWzgyNzldXSwgWydRc2NyJywgWzExOTk4MF1dLCBbJ3FzY3InLCBbMTIwMDA2XV0sIFsncXVhdGVybmlvbnMnLCBbODQ2MV1dLCBbJ3F1YXRpbnQnLCBbMTA3NzRdXSwgWydxdWVzdCcsIFs2M11dLCBbJ3F1ZXN0ZXEnLCBbODc5OV1dLCBbJ3F1b3QnLCBbMzRdXSwgWydRVU9UJywgWzM0XV0sIFsnckFhcnInLCBbODY2N11dLCBbJ3JhY2UnLCBbODc2NSwgODE3XV0sIFsnUmFjdXRlJywgWzM0MF1dLCBbJ3JhY3V0ZScsIFszNDFdXSwgWydyYWRpYycsIFs4NzMwXV0sIFsncmFlbXB0eXYnLCBbMTA2NzVdXSwgWydyYW5nJywgWzEwMjE3XV0sIFsnUmFuZycsIFsxMDIxOV1dLCBbJ3JhbmdkJywgWzEwNjQyXV0sIFsncmFuZ2UnLCBbMTA2NjFdXSwgWydyYW5nbGUnLCBbMTAyMTddXSwgWydyYXF1bycsIFsxODddXSwgWydyYXJyYXAnLCBbMTA2MTNdXSwgWydyYXJyYicsIFs4Njc3XV0sIFsncmFycmJmcycsIFsxMDUyOF1dLCBbJ3JhcnJjJywgWzEwNTQ3XV0sIFsncmFycicsIFs4NTk0XV0sIFsnUmFycicsIFs4NjA4XV0sIFsnckFycicsIFs4NjU4XV0sIFsncmFycmZzJywgWzEwNTI2XV0sIFsncmFycmhrJywgWzg2MThdXSwgWydyYXJybHAnLCBbODYyMF1dLCBbJ3JhcnJwbCcsIFsxMDU2NV1dLCBbJ3JhcnJzaW0nLCBbMTA2MTJdXSwgWydSYXJydGwnLCBbMTA1MThdXSwgWydyYXJydGwnLCBbODYxMV1dLCBbJ3JhcnJ3JywgWzg2MDVdXSwgWydyYXRhaWwnLCBbMTA1MjJdXSwgWydyQXRhaWwnLCBbMTA1MjRdXSwgWydyYXRpbycsIFs4NzU4XV0sIFsncmF0aW9uYWxzJywgWzg0NzRdXSwgWydyYmFycicsIFsxMDUwOV1dLCBbJ3JCYXJyJywgWzEwNTExXV0sIFsnUkJhcnInLCBbMTA1MTJdXSwgWydyYmJyaycsIFsxMDA5OV1dLCBbJ3JicmFjZScsIFsxMjVdXSwgWydyYnJhY2snLCBbOTNdXSwgWydyYnJrZScsIFsxMDYzNl1dLCBbJ3JicmtzbGQnLCBbMTA2MzhdXSwgWydyYnJrc2x1JywgWzEwNjQwXV0sIFsnUmNhcm9uJywgWzM0NF1dLCBbJ3JjYXJvbicsIFszNDVdXSwgWydSY2VkaWwnLCBbMzQyXV0sIFsncmNlZGlsJywgWzM0M11dLCBbJ3JjZWlsJywgWzg5NjldXSwgWydyY3ViJywgWzEyNV1dLCBbJ1JjeScsIFsxMDU2XV0sIFsncmN5JywgWzEwODhdXSwgWydyZGNhJywgWzEwNTUxXV0sIFsncmRsZGhhcicsIFsxMDYwMV1dLCBbJ3JkcXVvJywgWzgyMjFdXSwgWydyZHF1b3InLCBbODIyMV1dLCBbJ3Jkc2gnLCBbODYyN11dLCBbJ3JlYWwnLCBbODQ3Nl1dLCBbJ3JlYWxpbmUnLCBbODQ3NV1dLCBbJ3JlYWxwYXJ0JywgWzg0NzZdXSwgWydyZWFscycsIFs4NDc3XV0sIFsnUmUnLCBbODQ3Nl1dLCBbJ3JlY3QnLCBbOTY0NV1dLCBbJ3JlZycsIFsxNzRdXSwgWydSRUcnLCBbMTc0XV0sIFsnUmV2ZXJzZUVsZW1lbnQnLCBbODcxNV1dLCBbJ1JldmVyc2VFcXVpbGlicml1bScsIFs4NjUxXV0sIFsnUmV2ZXJzZVVwRXF1aWxpYnJpdW0nLCBbMTA2MDddXSwgWydyZmlzaHQnLCBbMTA2MjFdXSwgWydyZmxvb3InLCBbODk3MV1dLCBbJ3JmcicsIFsxMjAxMTFdXSwgWydSZnInLCBbODQ3Nl1dLCBbJ3JIYXInLCBbMTA1OTZdXSwgWydyaGFyZCcsIFs4NjQxXV0sIFsncmhhcnUnLCBbODY0MF1dLCBbJ3JoYXJ1bCcsIFsxMDYwNF1dLCBbJ1JobycsIFs5MjldXSwgWydyaG8nLCBbOTYxXV0sIFsncmhvdicsIFsxMDA5XV0sIFsnUmlnaHRBbmdsZUJyYWNrZXQnLCBbMTAyMTddXSwgWydSaWdodEFycm93QmFyJywgWzg2NzddXSwgWydyaWdodGFycm93JywgWzg1OTRdXSwgWydSaWdodEFycm93JywgWzg1OTRdXSwgWydSaWdodGFycm93JywgWzg2NThdXSwgWydSaWdodEFycm93TGVmdEFycm93JywgWzg2NDRdXSwgWydyaWdodGFycm93dGFpbCcsIFs4NjExXV0sIFsnUmlnaHRDZWlsaW5nJywgWzg5NjldXSwgWydSaWdodERvdWJsZUJyYWNrZXQnLCBbMTAyMTVdXSwgWydSaWdodERvd25UZWVWZWN0b3InLCBbMTA1ODldXSwgWydSaWdodERvd25WZWN0b3JCYXInLCBbMTA1ODFdXSwgWydSaWdodERvd25WZWN0b3InLCBbODY0Ml1dLCBbJ1JpZ2h0Rmxvb3InLCBbODk3MV1dLCBbJ3JpZ2h0aGFycG9vbmRvd24nLCBbODY0MV1dLCBbJ3JpZ2h0aGFycG9vbnVwJywgWzg2NDBdXSwgWydyaWdodGxlZnRhcnJvd3MnLCBbODY0NF1dLCBbJ3JpZ2h0bGVmdGhhcnBvb25zJywgWzg2NTJdXSwgWydyaWdodHJpZ2h0YXJyb3dzJywgWzg2NDldXSwgWydyaWdodHNxdWlnYXJyb3cnLCBbODYwNV1dLCBbJ1JpZ2h0VGVlQXJyb3cnLCBbODYxNF1dLCBbJ1JpZ2h0VGVlJywgWzg4NjZdXSwgWydSaWdodFRlZVZlY3RvcicsIFsxMDU4N11dLCBbJ3JpZ2h0dGhyZWV0aW1lcycsIFs4OTA4XV0sIFsnUmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNF1dLCBbJ1JpZ2h0VHJpYW5nbGUnLCBbODg4M11dLCBbJ1JpZ2h0VHJpYW5nbGVFcXVhbCcsIFs4ODg1XV0sIFsnUmlnaHRVcERvd25WZWN0b3InLCBbMTA1NzVdXSwgWydSaWdodFVwVGVlVmVjdG9yJywgWzEwNTg4XV0sIFsnUmlnaHRVcFZlY3RvckJhcicsIFsxMDU4MF1dLCBbJ1JpZ2h0VXBWZWN0b3InLCBbODYzOF1dLCBbJ1JpZ2h0VmVjdG9yQmFyJywgWzEwNTc5XV0sIFsnUmlnaHRWZWN0b3InLCBbODY0MF1dLCBbJ3JpbmcnLCBbNzMwXV0sIFsncmlzaW5nZG90c2VxJywgWzg3ODddXSwgWydybGFycicsIFs4NjQ0XV0sIFsncmxoYXInLCBbODY1Ml1dLCBbJ3JsbScsIFs4MjA3XV0sIFsncm1vdXN0YWNoZScsIFs5MTM3XV0sIFsncm1vdXN0JywgWzkxMzddXSwgWydybm1pZCcsIFsxMDk5MF1dLCBbJ3JvYW5nJywgWzEwMjIxXV0sIFsncm9hcnInLCBbODcwMl1dLCBbJ3JvYnJrJywgWzEwMjE1XV0sIFsncm9wYXInLCBbMTA2MzBdXSwgWydyb3BmJywgWzEyMDE2M11dLCBbJ1JvcGYnLCBbODQ3N11dLCBbJ3JvcGx1cycsIFsxMDc5OF1dLCBbJ3JvdGltZXMnLCBbMTA4MDVdXSwgWydSb3VuZEltcGxpZXMnLCBbMTA2MDhdXSwgWydycGFyJywgWzQxXV0sIFsncnBhcmd0JywgWzEwNjQ0XV0sIFsncnBwb2xpbnQnLCBbMTA3NzBdXSwgWydycmFycicsIFs4NjQ5XV0sIFsnUnJpZ2h0YXJyb3cnLCBbODY2N11dLCBbJ3JzYXF1bycsIFs4MjUwXV0sIFsncnNjcicsIFsxMjAwMDddXSwgWydSc2NyJywgWzg0NzVdXSwgWydyc2gnLCBbODYyNV1dLCBbJ1JzaCcsIFs4NjI1XV0sIFsncnNxYicsIFs5M11dLCBbJ3JzcXVvJywgWzgyMTddXSwgWydyc3F1b3InLCBbODIxN11dLCBbJ3J0aHJlZScsIFs4OTA4XV0sIFsncnRpbWVzJywgWzg5MDZdXSwgWydydHJpJywgWzk2NTddXSwgWydydHJpZScsIFs4ODg1XV0sIFsncnRyaWYnLCBbOTY1Nl1dLCBbJ3J0cmlsdHJpJywgWzEwNzAyXV0sIFsnUnVsZURlbGF5ZWQnLCBbMTA3NDBdXSwgWydydWx1aGFyJywgWzEwNjAwXV0sIFsncngnLCBbODQ3OF1dLCBbJ1NhY3V0ZScsIFszNDZdXSwgWydzYWN1dGUnLCBbMzQ3XV0sIFsnc2JxdW8nLCBbODIxOF1dLCBbJ3NjYXAnLCBbMTA5MzZdXSwgWydTY2Fyb24nLCBbMzUyXV0sIFsnc2Nhcm9uJywgWzM1M11dLCBbJ1NjJywgWzEwOTQwXV0sIFsnc2MnLCBbODgyN11dLCBbJ3NjY3VlJywgWzg4MjldXSwgWydzY2UnLCBbMTA5MjhdXSwgWydzY0UnLCBbMTA5MzJdXSwgWydTY2VkaWwnLCBbMzUwXV0sIFsnc2NlZGlsJywgWzM1MV1dLCBbJ1NjaXJjJywgWzM0OF1dLCBbJ3NjaXJjJywgWzM0OV1dLCBbJ3NjbmFwJywgWzEwOTM4XV0sIFsnc2NuRScsIFsxMDkzNF1dLCBbJ3NjbnNpbScsIFs4OTM3XV0sIFsnc2Nwb2xpbnQnLCBbMTA3NzFdXSwgWydzY3NpbScsIFs4ODMxXV0sIFsnU2N5JywgWzEwNTddXSwgWydzY3knLCBbMTA4OV1dLCBbJ3Nkb3RiJywgWzg4NjVdXSwgWydzZG90JywgWzg5MDFdXSwgWydzZG90ZScsIFsxMDg1NF1dLCBbJ3NlYXJoaycsIFsxMDUzM11dLCBbJ3NlYXJyJywgWzg2MDBdXSwgWydzZUFycicsIFs4NjY0XV0sIFsnc2VhcnJvdycsIFs4NjAwXV0sIFsnc2VjdCcsIFsxNjddXSwgWydzZW1pJywgWzU5XV0sIFsnc2Vzd2FyJywgWzEwNTM3XV0sIFsnc2V0bWludXMnLCBbODcyNl1dLCBbJ3NldG1uJywgWzg3MjZdXSwgWydzZXh0JywgWzEwMDM4XV0sIFsnU2ZyJywgWzEyMDA4Nl1dLCBbJ3NmcicsIFsxMjAxMTJdXSwgWydzZnJvd24nLCBbODk5NF1dLCBbJ3NoYXJwJywgWzk4MzldXSwgWydTSENIY3knLCBbMTA2NV1dLCBbJ3NoY2hjeScsIFsxMDk3XV0sIFsnU0hjeScsIFsxMDY0XV0sIFsnc2hjeScsIFsxMDk2XV0sIFsnU2hvcnREb3duQXJyb3cnLCBbODU5NV1dLCBbJ1Nob3J0TGVmdEFycm93JywgWzg1OTJdXSwgWydzaG9ydG1pZCcsIFs4NzM5XV0sIFsnc2hvcnRwYXJhbGxlbCcsIFs4NzQxXV0sIFsnU2hvcnRSaWdodEFycm93JywgWzg1OTRdXSwgWydTaG9ydFVwQXJyb3cnLCBbODU5M11dLCBbJ3NoeScsIFsxNzNdXSwgWydTaWdtYScsIFs5MzFdXSwgWydzaWdtYScsIFs5NjNdXSwgWydzaWdtYWYnLCBbOTYyXV0sIFsnc2lnbWF2JywgWzk2Ml1dLCBbJ3NpbScsIFs4NzY0XV0sIFsnc2ltZG90JywgWzEwODU4XV0sIFsnc2ltZScsIFs4NzcxXV0sIFsnc2ltZXEnLCBbODc3MV1dLCBbJ3NpbWcnLCBbMTA5MTBdXSwgWydzaW1nRScsIFsxMDkxMl1dLCBbJ3NpbWwnLCBbMTA5MDldXSwgWydzaW1sRScsIFsxMDkxMV1dLCBbJ3NpbW5lJywgWzg3NzRdXSwgWydzaW1wbHVzJywgWzEwNzg4XV0sIFsnc2ltcmFycicsIFsxMDYxMF1dLCBbJ3NsYXJyJywgWzg1OTJdXSwgWydTbWFsbENpcmNsZScsIFs4NzI4XV0sIFsnc21hbGxzZXRtaW51cycsIFs4NzI2XV0sIFsnc21hc2hwJywgWzEwODAzXV0sIFsnc21lcGFyc2wnLCBbMTA3MjRdXSwgWydzbWlkJywgWzg3MzldXSwgWydzbWlsZScsIFs4OTk1XV0sIFsnc210JywgWzEwOTIyXV0sIFsnc210ZScsIFsxMDkyNF1dLCBbJ3NtdGVzJywgWzEwOTI0LCA2NTAyNF1dLCBbJ1NPRlRjeScsIFsxMDY4XV0sIFsnc29mdGN5JywgWzExMDBdXSwgWydzb2xiYXInLCBbOTAyM11dLCBbJ3NvbGInLCBbMTA2OTJdXSwgWydzb2wnLCBbNDddXSwgWydTb3BmJywgWzEyMDEzOF1dLCBbJ3NvcGYnLCBbMTIwMTY0XV0sIFsnc3BhZGVzJywgWzk4MjRdXSwgWydzcGFkZXN1aXQnLCBbOTgyNF1dLCBbJ3NwYXInLCBbODc0MV1dLCBbJ3NxY2FwJywgWzg4NTFdXSwgWydzcWNhcHMnLCBbODg1MSwgNjUwMjRdXSwgWydzcWN1cCcsIFs4ODUyXV0sIFsnc3FjdXBzJywgWzg4NTIsIDY1MDI0XV0sIFsnU3FydCcsIFs4NzMwXV0sIFsnc3FzdWInLCBbODg0N11dLCBbJ3Nxc3ViZScsIFs4ODQ5XV0sIFsnc3FzdWJzZXQnLCBbODg0N11dLCBbJ3Nxc3Vic2V0ZXEnLCBbODg0OV1dLCBbJ3Nxc3VwJywgWzg4NDhdXSwgWydzcXN1cGUnLCBbODg1MF1dLCBbJ3Nxc3Vwc2V0JywgWzg4NDhdXSwgWydzcXN1cHNldGVxJywgWzg4NTBdXSwgWydzcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZScsIFs5NjMzXV0sIFsnU3F1YXJlSW50ZXJzZWN0aW9uJywgWzg4NTFdXSwgWydTcXVhcmVTdWJzZXQnLCBbODg0N11dLCBbJ1NxdWFyZVN1YnNldEVxdWFsJywgWzg4NDldXSwgWydTcXVhcmVTdXBlcnNldCcsIFs4ODQ4XV0sIFsnU3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4ODUwXV0sIFsnU3F1YXJlVW5pb24nLCBbODg1Ml1dLCBbJ3NxdWFyZicsIFs5NjQyXV0sIFsnc3F1JywgWzk2MzNdXSwgWydzcXVmJywgWzk2NDJdXSwgWydzcmFycicsIFs4NTk0XV0sIFsnU3NjcicsIFsxMTk5ODJdXSwgWydzc2NyJywgWzEyMDAwOF1dLCBbJ3NzZXRtbicsIFs4NzI2XV0sIFsnc3NtaWxlJywgWzg5OTVdXSwgWydzc3RhcmYnLCBbODkwMl1dLCBbJ1N0YXInLCBbODkwMl1dLCBbJ3N0YXInLCBbOTczNF1dLCBbJ3N0YXJmJywgWzk3MzNdXSwgWydzdHJhaWdodGVwc2lsb24nLCBbMTAxM11dLCBbJ3N0cmFpZ2h0cGhpJywgWzk4MV1dLCBbJ3N0cm5zJywgWzE3NV1dLCBbJ3N1YicsIFs4ODM0XV0sIFsnU3ViJywgWzg5MTJdXSwgWydzdWJkb3QnLCBbMTA5NDFdXSwgWydzdWJFJywgWzEwOTQ5XV0sIFsnc3ViZScsIFs4ODM4XV0sIFsnc3ViZWRvdCcsIFsxMDk0N11dLCBbJ3N1Ym11bHQnLCBbMTA5NDVdXSwgWydzdWJuRScsIFsxMDk1NV1dLCBbJ3N1Ym5lJywgWzg4NDJdXSwgWydzdWJwbHVzJywgWzEwOTQzXV0sIFsnc3VicmFycicsIFsxMDYxN11dLCBbJ3N1YnNldCcsIFs4ODM0XV0sIFsnU3Vic2V0JywgWzg5MTJdXSwgWydzdWJzZXRlcScsIFs4ODM4XV0sIFsnc3Vic2V0ZXFxJywgWzEwOTQ5XV0sIFsnU3Vic2V0RXF1YWwnLCBbODgzOF1dLCBbJ3N1YnNldG5lcScsIFs4ODQyXV0sIFsnc3Vic2V0bmVxcScsIFsxMDk1NV1dLCBbJ3N1YnNpbScsIFsxMDk1MV1dLCBbJ3N1YnN1YicsIFsxMDk2NV1dLCBbJ3N1YnN1cCcsIFsxMDk2M11dLCBbJ3N1Y2NhcHByb3gnLCBbMTA5MzZdXSwgWydzdWNjJywgWzg4MjddXSwgWydzdWNjY3VybHllcScsIFs4ODI5XV0sIFsnU3VjY2VlZHMnLCBbODgyN11dLCBbJ1N1Y2NlZWRzRXF1YWwnLCBbMTA5MjhdXSwgWydTdWNjZWVkc1NsYW50RXF1YWwnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzVGlsZGUnLCBbODgzMV1dLCBbJ3N1Y2NlcScsIFsxMDkyOF1dLCBbJ3N1Y2NuYXBwcm94JywgWzEwOTM4XV0sIFsnc3VjY25lcXEnLCBbMTA5MzRdXSwgWydzdWNjbnNpbScsIFs4OTM3XV0sIFsnc3VjY3NpbScsIFs4ODMxXV0sIFsnU3VjaFRoYXQnLCBbODcxNV1dLCBbJ3N1bScsIFs4NzIxXV0sIFsnU3VtJywgWzg3MjFdXSwgWydzdW5nJywgWzk4MzRdXSwgWydzdXAxJywgWzE4NV1dLCBbJ3N1cDInLCBbMTc4XV0sIFsnc3VwMycsIFsxNzldXSwgWydzdXAnLCBbODgzNV1dLCBbJ1N1cCcsIFs4OTEzXV0sIFsnc3VwZG90JywgWzEwOTQyXV0sIFsnc3VwZHN1YicsIFsxMDk2OF1dLCBbJ3N1cEUnLCBbMTA5NTBdXSwgWydzdXBlJywgWzg4MzldXSwgWydzdXBlZG90JywgWzEwOTQ4XV0sIFsnU3VwZXJzZXQnLCBbODgzNV1dLCBbJ1N1cGVyc2V0RXF1YWwnLCBbODgzOV1dLCBbJ3N1cGhzb2wnLCBbMTAxODVdXSwgWydzdXBoc3ViJywgWzEwOTY3XV0sIFsnc3VwbGFycicsIFsxMDYxOV1dLCBbJ3N1cG11bHQnLCBbMTA5NDZdXSwgWydzdXBuRScsIFsxMDk1Nl1dLCBbJ3N1cG5lJywgWzg4NDNdXSwgWydzdXBwbHVzJywgWzEwOTQ0XV0sIFsnc3Vwc2V0JywgWzg4MzVdXSwgWydTdXBzZXQnLCBbODkxM11dLCBbJ3N1cHNldGVxJywgWzg4MzldXSwgWydzdXBzZXRlcXEnLCBbMTA5NTBdXSwgWydzdXBzZXRuZXEnLCBbODg0M11dLCBbJ3N1cHNldG5lcXEnLCBbMTA5NTZdXSwgWydzdXBzaW0nLCBbMTA5NTJdXSwgWydzdXBzdWInLCBbMTA5NjRdXSwgWydzdXBzdXAnLCBbMTA5NjZdXSwgWydzd2FyaGsnLCBbMTA1MzRdXSwgWydzd2FycicsIFs4NjAxXV0sIFsnc3dBcnInLCBbODY2NV1dLCBbJ3N3YXJyb3cnLCBbODYwMV1dLCBbJ3N3bndhcicsIFsxMDUzOF1dLCBbJ3N6bGlnJywgWzIyM11dLCBbJ1RhYicsIFs5XV0sIFsndGFyZ2V0JywgWzg5ODJdXSwgWydUYXUnLCBbOTMyXV0sIFsndGF1JywgWzk2NF1dLCBbJ3RicmsnLCBbOTE0MF1dLCBbJ1RjYXJvbicsIFszNTZdXSwgWyd0Y2Fyb24nLCBbMzU3XV0sIFsnVGNlZGlsJywgWzM1NF1dLCBbJ3RjZWRpbCcsIFszNTVdXSwgWydUY3knLCBbMTA1OF1dLCBbJ3RjeScsIFsxMDkwXV0sIFsndGRvdCcsIFs4NDExXV0sIFsndGVscmVjJywgWzg5ODFdXSwgWydUZnInLCBbMTIwMDg3XV0sIFsndGZyJywgWzEyMDExM11dLCBbJ3RoZXJlNCcsIFs4NzU2XV0sIFsndGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGVyZWZvcmUnLCBbODc1Nl1dLCBbJ1RoZXRhJywgWzkyMF1dLCBbJ3RoZXRhJywgWzk1Ml1dLCBbJ3RoZXRhc3ltJywgWzk3N11dLCBbJ3RoZXRhdicsIFs5NzddXSwgWyd0aGlja2FwcHJveCcsIFs4Nzc2XV0sIFsndGhpY2tzaW0nLCBbODc2NF1dLCBbJ1RoaWNrU3BhY2UnLCBbODI4NywgODIwMl1dLCBbJ1RoaW5TcGFjZScsIFs4MjAxXV0sIFsndGhpbnNwJywgWzgyMDFdXSwgWyd0aGthcCcsIFs4Nzc2XV0sIFsndGhrc2ltJywgWzg3NjRdXSwgWydUSE9STicsIFsyMjJdXSwgWyd0aG9ybicsIFsyNTRdXSwgWyd0aWxkZScsIFs3MzJdXSwgWydUaWxkZScsIFs4NzY0XV0sIFsnVGlsZGVFcXVhbCcsIFs4NzcxXV0sIFsnVGlsZGVGdWxsRXF1YWwnLCBbODc3M11dLCBbJ1RpbGRlVGlsZGUnLCBbODc3Nl1dLCBbJ3RpbWVzYmFyJywgWzEwODAxXV0sIFsndGltZXNiJywgWzg4NjRdXSwgWyd0aW1lcycsIFsyMTVdXSwgWyd0aW1lc2QnLCBbMTA4MDBdXSwgWyd0aW50JywgWzg3NDldXSwgWyd0b2VhJywgWzEwNTM2XV0sIFsndG9wYm90JywgWzkwMTRdXSwgWyd0b3BjaXInLCBbMTA5OTNdXSwgWyd0b3AnLCBbODg2OF1dLCBbJ1RvcGYnLCBbMTIwMTM5XV0sIFsndG9wZicsIFsxMjAxNjVdXSwgWyd0b3Bmb3JrJywgWzEwOTcwXV0sIFsndG9zYScsIFsxMDUzN11dLCBbJ3RwcmltZScsIFs4MjQ0XV0sIFsndHJhZGUnLCBbODQ4Ml1dLCBbJ1RSQURFJywgWzg0ODJdXSwgWyd0cmlhbmdsZScsIFs5NjUzXV0sIFsndHJpYW5nbGVkb3duJywgWzk2NjNdXSwgWyd0cmlhbmdsZWxlZnQnLCBbOTY2N11dLCBbJ3RyaWFuZ2xlbGVmdGVxJywgWzg4ODRdXSwgWyd0cmlhbmdsZXEnLCBbODc5Nl1dLCBbJ3RyaWFuZ2xlcmlnaHQnLCBbOTY1N11dLCBbJ3RyaWFuZ2xlcmlnaHRlcScsIFs4ODg1XV0sIFsndHJpZG90JywgWzk3MDhdXSwgWyd0cmllJywgWzg3OTZdXSwgWyd0cmltaW51cycsIFsxMDgxMF1dLCBbJ1RyaXBsZURvdCcsIFs4NDExXV0sIFsndHJpcGx1cycsIFsxMDgwOV1dLCBbJ3RyaXNiJywgWzEwNzAxXV0sIFsndHJpdGltZScsIFsxMDgxMV1dLCBbJ3RycGV6aXVtJywgWzkxODZdXSwgWydUc2NyJywgWzExOTk4M11dLCBbJ3RzY3InLCBbMTIwMDA5XV0sIFsnVFNjeScsIFsxMDYyXV0sIFsndHNjeScsIFsxMDk0XV0sIFsnVFNIY3knLCBbMTAzNV1dLCBbJ3RzaGN5JywgWzExMTVdXSwgWydUc3Ryb2snLCBbMzU4XV0sIFsndHN0cm9rJywgWzM1OV1dLCBbJ3R3aXh0JywgWzg4MTJdXSwgWyd0d29oZWFkbGVmdGFycm93JywgWzg2MDZdXSwgWyd0d29oZWFkcmlnaHRhcnJvdycsIFs4NjA4XV0sIFsnVWFjdXRlJywgWzIxOF1dLCBbJ3VhY3V0ZScsIFsyNTBdXSwgWyd1YXJyJywgWzg1OTNdXSwgWydVYXJyJywgWzg2MDddXSwgWyd1QXJyJywgWzg2NTddXSwgWydVYXJyb2NpcicsIFsxMDU2OV1dLCBbJ1VicmN5JywgWzEwMzhdXSwgWyd1YnJjeScsIFsxMTE4XV0sIFsnVWJyZXZlJywgWzM2NF1dLCBbJ3VicmV2ZScsIFszNjVdXSwgWydVY2lyYycsIFsyMTldXSwgWyd1Y2lyYycsIFsyNTFdXSwgWydVY3knLCBbMTA1OV1dLCBbJ3VjeScsIFsxMDkxXV0sIFsndWRhcnInLCBbODY0NV1dLCBbJ1VkYmxhYycsIFszNjhdXSwgWyd1ZGJsYWMnLCBbMzY5XV0sIFsndWRoYXInLCBbMTA2MDZdXSwgWyd1ZmlzaHQnLCBbMTA2MjJdXSwgWydVZnInLCBbMTIwMDg4XV0sIFsndWZyJywgWzEyMDExNF1dLCBbJ1VncmF2ZScsIFsyMTddXSwgWyd1Z3JhdmUnLCBbMjQ5XV0sIFsndUhhcicsIFsxMDU5NV1dLCBbJ3VoYXJsJywgWzg2MzldXSwgWyd1aGFycicsIFs4NjM4XV0sIFsndWhibGsnLCBbOTYwMF1dLCBbJ3VsY29ybicsIFs4OTg4XV0sIFsndWxjb3JuZXInLCBbODk4OF1dLCBbJ3VsY3JvcCcsIFs4OTc1XV0sIFsndWx0cmknLCBbOTcyMF1dLCBbJ1VtYWNyJywgWzM2Ml1dLCBbJ3VtYWNyJywgWzM2M11dLCBbJ3VtbCcsIFsxNjhdXSwgWydVbmRlckJhcicsIFs5NV1dLCBbJ1VuZGVyQnJhY2UnLCBbOTE4M11dLCBbJ1VuZGVyQnJhY2tldCcsIFs5MTQxXV0sIFsnVW5kZXJQYXJlbnRoZXNpcycsIFs5MTgxXV0sIFsnVW5pb24nLCBbODg5OV1dLCBbJ1VuaW9uUGx1cycsIFs4ODQ2XV0sIFsnVW9nb24nLCBbMzcwXV0sIFsndW9nb24nLCBbMzcxXV0sIFsnVW9wZicsIFsxMjAxNDBdXSwgWyd1b3BmJywgWzEyMDE2Nl1dLCBbJ1VwQXJyb3dCYXInLCBbMTA1MTRdXSwgWyd1cGFycm93JywgWzg1OTNdXSwgWydVcEFycm93JywgWzg1OTNdXSwgWydVcGFycm93JywgWzg2NTddXSwgWydVcEFycm93RG93bkFycm93JywgWzg2NDVdXSwgWyd1cGRvd25hcnJvdycsIFs4NTk3XV0sIFsnVXBEb3duQXJyb3cnLCBbODU5N11dLCBbJ1VwZG93bmFycm93JywgWzg2NjFdXSwgWydVcEVxdWlsaWJyaXVtJywgWzEwNjA2XV0sIFsndXBoYXJwb29ubGVmdCcsIFs4NjM5XV0sIFsndXBoYXJwb29ucmlnaHQnLCBbODYzOF1dLCBbJ3VwbHVzJywgWzg4NDZdXSwgWydVcHBlckxlZnRBcnJvdycsIFs4NTk4XV0sIFsnVXBwZXJSaWdodEFycm93JywgWzg1OTldXSwgWyd1cHNpJywgWzk2NV1dLCBbJ1Vwc2knLCBbOTc4XV0sIFsndXBzaWgnLCBbOTc4XV0sIFsnVXBzaWxvbicsIFs5MzNdXSwgWyd1cHNpbG9uJywgWzk2NV1dLCBbJ1VwVGVlQXJyb3cnLCBbODYxM11dLCBbJ1VwVGVlJywgWzg4NjldXSwgWyd1cHVwYXJyb3dzJywgWzg2NDhdXSwgWyd1cmNvcm4nLCBbODk4OV1dLCBbJ3VyY29ybmVyJywgWzg5ODldXSwgWyd1cmNyb3AnLCBbODk3NF1dLCBbJ1VyaW5nJywgWzM2Nl1dLCBbJ3VyaW5nJywgWzM2N11dLCBbJ3VydHJpJywgWzk3MjFdXSwgWydVc2NyJywgWzExOTk4NF1dLCBbJ3VzY3InLCBbMTIwMDEwXV0sIFsndXRkb3QnLCBbODk0NF1dLCBbJ1V0aWxkZScsIFszNjBdXSwgWyd1dGlsZGUnLCBbMzYxXV0sIFsndXRyaScsIFs5NjUzXV0sIFsndXRyaWYnLCBbOTY1Ml1dLCBbJ3V1YXJyJywgWzg2NDhdXSwgWydVdW1sJywgWzIyMF1dLCBbJ3V1bWwnLCBbMjUyXV0sIFsndXdhbmdsZScsIFsxMDY2M11dLCBbJ3ZhbmdydCcsIFsxMDY1Ml1dLCBbJ3ZhcmVwc2lsb24nLCBbMTAxM11dLCBbJ3ZhcmthcHBhJywgWzEwMDhdXSwgWyd2YXJub3RoaW5nJywgWzg3MDldXSwgWyd2YXJwaGknLCBbOTgxXV0sIFsndmFycGknLCBbOTgyXV0sIFsndmFycHJvcHRvJywgWzg3MzNdXSwgWyd2YXJyJywgWzg1OTddXSwgWyd2QXJyJywgWzg2NjFdXSwgWyd2YXJyaG8nLCBbMTAwOV1dLCBbJ3ZhcnNpZ21hJywgWzk2Ml1dLCBbJ3ZhcnN1YnNldG5lcScsIFs4ODQyLCA2NTAyNF1dLCBbJ3ZhcnN1YnNldG5lcXEnLCBbMTA5NTUsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxJywgWzg4NDMsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxcScsIFsxMDk1NiwgNjUwMjRdXSwgWyd2YXJ0aGV0YScsIFs5NzddXSwgWyd2YXJ0cmlhbmdsZWxlZnQnLCBbODg4Ml1dLCBbJ3ZhcnRyaWFuZ2xlcmlnaHQnLCBbODg4M11dLCBbJ3ZCYXInLCBbMTA5ODRdXSwgWydWYmFyJywgWzEwOTg3XV0sIFsndkJhcnYnLCBbMTA5ODVdXSwgWydWY3knLCBbMTA0Ml1dLCBbJ3ZjeScsIFsxMDc0XV0sIFsndmRhc2gnLCBbODg2Nl1dLCBbJ3ZEYXNoJywgWzg4NzJdXSwgWydWZGFzaCcsIFs4ODczXV0sIFsnVkRhc2gnLCBbODg3NV1dLCBbJ1ZkYXNobCcsIFsxMDk4Ml1dLCBbJ3ZlZWJhcicsIFs4ODkxXV0sIFsndmVlJywgWzg3NDRdXSwgWydWZWUnLCBbODg5N11dLCBbJ3ZlZWVxJywgWzg3OTRdXSwgWyd2ZWxsaXAnLCBbODk0Ml1dLCBbJ3ZlcmJhcicsIFsxMjRdXSwgWydWZXJiYXInLCBbODIxNF1dLCBbJ3ZlcnQnLCBbMTI0XV0sIFsnVmVydCcsIFs4MjE0XV0sIFsnVmVydGljYWxCYXInLCBbODczOV1dLCBbJ1ZlcnRpY2FsTGluZScsIFsxMjRdXSwgWydWZXJ0aWNhbFNlcGFyYXRvcicsIFsxMDA3Ml1dLCBbJ1ZlcnRpY2FsVGlsZGUnLCBbODc2OF1dLCBbJ1ZlcnlUaGluU3BhY2UnLCBbODIwMl1dLCBbJ1ZmcicsIFsxMjAwODldXSwgWyd2ZnInLCBbMTIwMTE1XV0sIFsndmx0cmknLCBbODg4Ml1dLCBbJ3Zuc3ViJywgWzg4MzQsIDg0MDJdXSwgWyd2bnN1cCcsIFs4ODM1LCA4NDAyXV0sIFsnVm9wZicsIFsxMjAxNDFdXSwgWyd2b3BmJywgWzEyMDE2N11dLCBbJ3Zwcm9wJywgWzg3MzNdXSwgWyd2cnRyaScsIFs4ODgzXV0sIFsnVnNjcicsIFsxMTk5ODVdXSwgWyd2c2NyJywgWzEyMDAxMV1dLCBbJ3ZzdWJuRScsIFsxMDk1NSwgNjUwMjRdXSwgWyd2c3VibmUnLCBbODg0MiwgNjUwMjRdXSwgWyd2c3VwbkUnLCBbMTA5NTYsIDY1MDI0XV0sIFsndnN1cG5lJywgWzg4NDMsIDY1MDI0XV0sIFsnVnZkYXNoJywgWzg4NzRdXSwgWyd2emlnemFnJywgWzEwNjUwXV0sIFsnV2NpcmMnLCBbMzcyXV0sIFsnd2NpcmMnLCBbMzczXV0sIFsnd2VkYmFyJywgWzEwODQ3XV0sIFsnd2VkZ2UnLCBbODc0M11dLCBbJ1dlZGdlJywgWzg4OTZdXSwgWyd3ZWRnZXEnLCBbODc5M11dLCBbJ3dlaWVycCcsIFs4NDcyXV0sIFsnV2ZyJywgWzEyMDA5MF1dLCBbJ3dmcicsIFsxMjAxMTZdXSwgWydXb3BmJywgWzEyMDE0Ml1dLCBbJ3dvcGYnLCBbMTIwMTY4XV0sIFsnd3AnLCBbODQ3Ml1dLCBbJ3dyJywgWzg3NjhdXSwgWyd3cmVhdGgnLCBbODc2OF1dLCBbJ1dzY3InLCBbMTE5OTg2XV0sIFsnd3NjcicsIFsxMjAwMTJdXSwgWyd4Y2FwJywgWzg4OThdXSwgWyd4Y2lyYycsIFs5NzExXV0sIFsneGN1cCcsIFs4ODk5XV0sIFsneGR0cmknLCBbOTY2MV1dLCBbJ1hmcicsIFsxMjAwOTFdXSwgWyd4ZnInLCBbMTIwMTE3XV0sIFsneGhhcnInLCBbMTAyMzFdXSwgWyd4aEFycicsIFsxMDIzNF1dLCBbJ1hpJywgWzkyNl1dLCBbJ3hpJywgWzk1OF1dLCBbJ3hsYXJyJywgWzEwMjI5XV0sIFsneGxBcnInLCBbMTAyMzJdXSwgWyd4bWFwJywgWzEwMjM2XV0sIFsneG5pcycsIFs4OTU1XV0sIFsneG9kb3QnLCBbMTA3NTJdXSwgWydYb3BmJywgWzEyMDE0M11dLCBbJ3hvcGYnLCBbMTIwMTY5XV0sIFsneG9wbHVzJywgWzEwNzUzXV0sIFsneG90aW1lJywgWzEwNzU0XV0sIFsneHJhcnInLCBbMTAyMzBdXSwgWyd4ckFycicsIFsxMDIzM11dLCBbJ1hzY3InLCBbMTE5OTg3XV0sIFsneHNjcicsIFsxMjAwMTNdXSwgWyd4c3FjdXAnLCBbMTA3NThdXSwgWyd4dXBsdXMnLCBbMTA3NTZdXSwgWyd4dXRyaScsIFs5NjUxXV0sIFsneHZlZScsIFs4ODk3XV0sIFsneHdlZGdlJywgWzg4OTZdXSwgWydZYWN1dGUnLCBbMjIxXV0sIFsneWFjdXRlJywgWzI1M11dLCBbJ1lBY3knLCBbMTA3MV1dLCBbJ3lhY3knLCBbMTEwM11dLCBbJ1ljaXJjJywgWzM3NF1dLCBbJ3ljaXJjJywgWzM3NV1dLCBbJ1ljeScsIFsxMDY3XV0sIFsneWN5JywgWzEwOTldXSwgWyd5ZW4nLCBbMTY1XV0sIFsnWWZyJywgWzEyMDA5Ml1dLCBbJ3lmcicsIFsxMjAxMThdXSwgWydZSWN5JywgWzEwMzFdXSwgWyd5aWN5JywgWzExMTFdXSwgWydZb3BmJywgWzEyMDE0NF1dLCBbJ3lvcGYnLCBbMTIwMTcwXV0sIFsnWXNjcicsIFsxMTk5ODhdXSwgWyd5c2NyJywgWzEyMDAxNF1dLCBbJ1lVY3knLCBbMTA3MF1dLCBbJ3l1Y3knLCBbMTEwMl1dLCBbJ3l1bWwnLCBbMjU1XV0sIFsnWXVtbCcsIFszNzZdXSwgWydaYWN1dGUnLCBbMzc3XV0sIFsnemFjdXRlJywgWzM3OF1dLCBbJ1pjYXJvbicsIFszODFdXSwgWyd6Y2Fyb24nLCBbMzgyXV0sIFsnWmN5JywgWzEwNDddXSwgWyd6Y3knLCBbMTA3OV1dLCBbJ1pkb3QnLCBbMzc5XV0sIFsnemRvdCcsIFszODBdXSwgWyd6ZWV0cmYnLCBbODQ4OF1dLCBbJ1plcm9XaWR0aFNwYWNlJywgWzgyMDNdXSwgWydaZXRhJywgWzkxOF1dLCBbJ3pldGEnLCBbOTUwXV0sIFsnemZyJywgWzEyMDExOV1dLCBbJ1pmcicsIFs4NDg4XV0sIFsnWkhjeScsIFsxMDQ2XV0sIFsnemhjeScsIFsxMDc4XV0sIFsnemlncmFycicsIFs4NjY5XV0sIFsnem9wZicsIFsxMjAxNzFdXSwgWydab3BmJywgWzg0ODRdXSwgWydac2NyJywgWzExOTk4OV1dLCBbJ3pzY3InLCBbMTIwMDE1XV0sIFsnendqJywgWzgyMDVdXSwgWyd6d25qJywgWzgyMDRdXV07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgY2hhckluZGV4ID0ge307XG5cbmNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDVFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W2NdO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbHBoYUluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhckluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KSB7XG4gICAgdmFyIGkgPSBFTlRJVElFUy5sZW5ndGg7XG4gICAgdmFyIF9yZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZSA9IEVOVElUSUVTW2ldO1xuICAgICAgICB2YXIgYWxwaGEgPSBlWzBdO1xuICAgICAgICB2YXIgY2hhcnMgPSBlWzFdO1xuICAgICAgICB2YXIgY2hyID0gY2hhcnNbMF07XG4gICAgICAgIHZhciBhZGRDaGFyID0gKGNociA8IDMyIHx8IGNociA+IDEyNikgfHwgY2hyID09PSA2MiB8fCBjaHIgPT09IDYwIHx8IGNociA9PT0gMzggfHwgY2hyID09PSAzNCB8fCBjaHIgPT09IDM5O1xuICAgICAgICB2YXIgY2hhckluZm87XG4gICAgICAgIGlmIChhZGRDaGFyKSB7XG4gICAgICAgICAgICBjaGFySW5mbyA9IGNoYXJJbmRleFtjaHJdID0gY2hhckluZGV4W2Nocl0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJzWzFdKSB7XG4gICAgICAgICAgICB2YXIgY2hyMiA9IGNoYXJzWzFdO1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1tjaHIyXSA9IGFscGhhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bJyddID0gYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNUVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw1LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gL1tcXHUwMDFiXFx1MDA5Yl1bWygpIzs/XSooPzpbMC05XXsxLDR9KD86O1swLTldezAsNH0pKik/WzAtOUEtUFJaY2YtbnFyeT0+PF0vZztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW5zaS1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFhtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi94bWwtZW50aXRpZXMuanMnKSxcbiAgSHRtbDRFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDQtZW50aXRpZXMuanMnKSxcbiAgSHRtbDVFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKSxcbiAgQWxsSHRtbEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNS1lbnRpdGllcy5qcycpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwidmFyIEhUTUxfQUxQSEEgPSBbJ2Fwb3MnLCAnbmJzcCcsICdpZXhjbCcsICdjZW50JywgJ3BvdW5kJywgJ2N1cnJlbicsICd5ZW4nLCAnYnJ2YmFyJywgJ3NlY3QnLCAndW1sJywgJ2NvcHknLCAnb3JkZicsICdsYXF1bycsICdub3QnLCAnc2h5JywgJ3JlZycsICdtYWNyJywgJ2RlZycsICdwbHVzbW4nLCAnc3VwMicsICdzdXAzJywgJ2FjdXRlJywgJ21pY3JvJywgJ3BhcmEnLCAnbWlkZG90JywgJ2NlZGlsJywgJ3N1cDEnLCAnb3JkbScsICdyYXF1bycsICdmcmFjMTQnLCAnZnJhYzEyJywgJ2ZyYWMzNCcsICdpcXVlc3QnLCAnQWdyYXZlJywgJ0FhY3V0ZScsICdBY2lyYycsICdBdGlsZGUnLCAnQXVtbCcsICdBcmluZycsICdBZWxpZycsICdDY2VkaWwnLCAnRWdyYXZlJywgJ0VhY3V0ZScsICdFY2lyYycsICdFdW1sJywgJ0lncmF2ZScsICdJYWN1dGUnLCAnSWNpcmMnLCAnSXVtbCcsICdFVEgnLCAnTnRpbGRlJywgJ09ncmF2ZScsICdPYWN1dGUnLCAnT2NpcmMnLCAnT3RpbGRlJywgJ091bWwnLCAndGltZXMnLCAnT3NsYXNoJywgJ1VncmF2ZScsICdVYWN1dGUnLCAnVWNpcmMnLCAnVXVtbCcsICdZYWN1dGUnLCAnVEhPUk4nLCAnc3psaWcnLCAnYWdyYXZlJywgJ2FhY3V0ZScsICdhY2lyYycsICdhdGlsZGUnLCAnYXVtbCcsICdhcmluZycsICdhZWxpZycsICdjY2VkaWwnLCAnZWdyYXZlJywgJ2VhY3V0ZScsICdlY2lyYycsICdldW1sJywgJ2lncmF2ZScsICdpYWN1dGUnLCAnaWNpcmMnLCAnaXVtbCcsICdldGgnLCAnbnRpbGRlJywgJ29ncmF2ZScsICdvYWN1dGUnLCAnb2NpcmMnLCAnb3RpbGRlJywgJ291bWwnLCAnZGl2aWRlJywgJ09zbGFzaCcsICd1Z3JhdmUnLCAndWFjdXRlJywgJ3VjaXJjJywgJ3V1bWwnLCAneWFjdXRlJywgJ3Rob3JuJywgJ3l1bWwnLCAncXVvdCcsICdhbXAnLCAnbHQnLCAnZ3QnLCAnb2VsaWcnLCAnb2VsaWcnLCAnc2Nhcm9uJywgJ3NjYXJvbicsICd5dW1sJywgJ2NpcmMnLCAndGlsZGUnLCAnZW5zcCcsICdlbXNwJywgJ3RoaW5zcCcsICd6d25qJywgJ3p3aicsICdscm0nLCAncmxtJywgJ25kYXNoJywgJ21kYXNoJywgJ2xzcXVvJywgJ3JzcXVvJywgJ3NicXVvJywgJ2xkcXVvJywgJ3JkcXVvJywgJ2JkcXVvJywgJ2RhZ2dlcicsICdkYWdnZXInLCAncGVybWlsJywgJ2xzYXF1bycsICdyc2FxdW8nLCAnZXVybycsICdmbm9mJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWFmJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ3RoZXRhc3ltJywgJ3Vwc2loJywgJ3BpdicsICdidWxsJywgJ2hlbGxpcCcsICdwcmltZScsICdwcmltZScsICdvbGluZScsICdmcmFzbCcsICd3ZWllcnAnLCAnaW1hZ2UnLCAncmVhbCcsICd0cmFkZScsICdhbGVmc3ltJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdjcmFycicsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnZm9yYWxsJywgJ3BhcnQnLCAnZXhpc3QnLCAnZW1wdHknLCAnbmFibGEnLCAnaXNpbicsICdub3RpbicsICduaScsICdwcm9kJywgJ3N1bScsICdtaW51cycsICdsb3dhc3QnLCAncmFkaWMnLCAncHJvcCcsICdpbmZpbicsICdhbmcnLCAnYW5kJywgJ29yJywgJ2NhcCcsICdjdXAnLCAnaW50JywgJ3RoZXJlNCcsICdzaW0nLCAnY29uZycsICdhc3ltcCcsICduZScsICdlcXVpdicsICdsZScsICdnZScsICdzdWInLCAnc3VwJywgJ25zdWInLCAnc3ViZScsICdzdXBlJywgJ29wbHVzJywgJ290aW1lcycsICdwZXJwJywgJ3Nkb3QnLCAnbGNlaWwnLCAncmNlaWwnLCAnbGZsb29yJywgJ3JmbG9vcicsICdsYW5nJywgJ3JhbmcnLCAnbG96JywgJ3NwYWRlcycsICdjbHVicycsICdoZWFydHMnLCAnZGlhbXMnXTtcbnZhciBIVE1MX0NPREVTID0gWzM5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc0LCAxNzUsIDE3NiwgMTc3LCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MiwgMTgzLCAxODQsIDE4NSwgMTg2LCAxODcsIDE4OCwgMTg5LCAxOTAsIDE5MSwgMTkyLCAxOTMsIDE5NCwgMTk1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjEwLCAyMTEsIDIxMiwgMjEzLCAyMTQsIDIxNSwgMjE2LCAyMTcsIDIxOCwgMjE5LCAyMjAsIDIyMSwgMjIyLCAyMjMsIDIyNCwgMjI1LCAyMjYsIDIyNywgMjI4LCAyMjksIDIzMCwgMjMxLCAyMzIsIDIzMywgMjM0LCAyMzUsIDIzNiwgMjM3LCAyMzgsIDIzOSwgMjQwLCAyNDEsIDI0MiwgMjQzLCAyNDQsIDI0NSwgMjQ2LCAyNDcsIDI0OCwgMjQ5LCAyNTAsIDI1MSwgMjUyLCAyNTMsIDI1NCwgMjU1LCAzNCwgMzgsIDYwLCA2MiwgMzM4LCAzMzksIDM1MiwgMzUzLCAzNzYsIDcxMCwgNzMyLCA4MTk0LCA4MTk1LCA4MjAxLCA4MjA0LCA4MjA1LCA4MjA2LCA4MjA3LCA4MjExLCA4MjEyLCA4MjE2LCA4MjE3LCA4MjE4LCA4MjIwLCA4MjIxLCA4MjIyLCA4MjI0LCA4MjI1LCA4MjQwLCA4MjQ5LCA4MjUwLCA4MzY0LCA0MDIsIDkxMywgOTE0LCA5MTUsIDkxNiwgOTE3LCA5MTgsIDkxOSwgOTIwLCA5MjEsIDkyMiwgOTIzLCA5MjQsIDkyNSwgOTI2LCA5MjcsIDkyOCwgOTI5LCA5MzEsIDkzMiwgOTMzLCA5MzQsIDkzNSwgOTM2LCA5MzcsIDk0NSwgOTQ2LCA5NDcsIDk0OCwgOTQ5LCA5NTAsIDk1MSwgOTUyLCA5NTMsIDk1NCwgOTU1LCA5NTYsIDk1NywgOTU4LCA5NTksIDk2MCwgOTYxLCA5NjIsIDk2MywgOTY0LCA5NjUsIDk2NiwgOTY3LCA5NjgsIDk2OSwgOTc3LCA5NzgsIDk4MiwgODIyNiwgODIzMCwgODI0MiwgODI0MywgODI1NCwgODI2MCwgODQ3MiwgODQ2NSwgODQ3NiwgODQ4MiwgODUwMSwgODU5MiwgODU5MywgODU5NCwgODU5NSwgODU5NiwgODYyOSwgODY1NiwgODY1NywgODY1OCwgODY1OSwgODY2MCwgODcwNCwgODcwNiwgODcwNywgODcwOSwgODcxMSwgODcxMiwgODcxMywgODcxNSwgODcxOSwgODcyMSwgODcyMiwgODcyNywgODczMCwgODczMywgODczNCwgODczNiwgODc0MywgODc0NCwgODc0NSwgODc0NiwgODc0NywgODc1NiwgODc2NCwgODc3MywgODc3NiwgODgwMCwgODgwMSwgODgwNCwgODgwNSwgODgzNCwgODgzNSwgODgzNiwgODgzOCwgODgzOSwgODg1MywgODg1NSwgODg2OSwgODkwMSwgODk2OCwgODk2OSwgODk3MCwgODk3MSwgOTAwMSwgOTAwMiwgOTY3NCwgOTgyNCwgOTgyNywgOTgyOSwgOTgzMF07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgbnVtSW5kZXggPSB7fTtcblxudmFyIGkgPSAwO1xudmFyIGxlbmd0aCA9IEhUTUxfQUxQSEEubGVuZ3RoO1xud2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICB2YXIgYSA9IEhUTUxfQUxQSEFbaV07XG4gICAgdmFyIGMgPSBIVE1MX0NPREVTW2ldO1xuICAgIGFscGhhSW5kZXhbYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgIG51bUluZGV4W2NdID0gYTtcbiAgICBpKys7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw0RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMiksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmRlY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBudW1JbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIHJlc3VsdCArPSBhbHBoYSA/IFwiJlwiICsgYWxwaGEgKyBcIjtcIiA6IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W2NjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjIDwgMzIgfHwgY2MgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiYjXCIgKyBjYyArIFwiO1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBBTFBIQV9JTkRFWCA9IHtcbiAgICAnJmx0JzogJzwnLFxuICAgICcmZ3QnOiAnPicsXG4gICAgJyZxdW90JzogJ1wiJyxcbiAgICAnJmFwb3MnOiAnXFwnJyxcbiAgICAnJmFtcCc6ICcmJyxcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFwb3M7JzogJ1xcJycsXG4gICAgJyZhbXA7JzogJyYnXG59O1xuXG52YXIgQ0hBUl9JTkRFWCA9IHtcbiAgICA2MDogJ2x0JyxcbiAgICA2MjogJ2d0JyxcbiAgICAzNDogJ3F1b3QnLFxuICAgIDM5OiAnYXBvcycsXG4gICAgMzg6ICdhbXAnXG59O1xuXG52YXIgQ0hBUl9TX0lOREVYID0ge1xuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAnJic6ICcmYW1wOydcbn07XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFhtbEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzx8PnxcInwnfCYvZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gQ0hBUl9TX0lOREVYW3NdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIz9bMC05YS16QS1aXSs7Py9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChzLmNoYXJBdCgxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMyksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMikpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQUxQSEFfSU5ERVhbc10gfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBDSEFSX0lOREVYW2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5naHQgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5naHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ2h0KSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xuIH07XG5cbm1vZHVsZS5leHBvcnRzID0gWG1sRW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIveG1sLWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0NvbnN1bWFibGVBcnJheTIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUgPSByZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlL2NsaWVudD9vdmVybGF5PWZhbHNlJnJlbG9hZD10cnVlJyk7XG5cbnZhciBfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhhbmRsZXJzID0ge1xuICByZWxvYWQ6IGZ1bmN0aW9uIHJlbG9hZChyb3V0ZSkge1xuICAgIGlmIChyb3V0ZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoKDAsIF9rZXlzMi5kZWZhdWx0KShuZXh0LnJvdXRlci5jb21wb25lbnRzKSksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBDb21wb25lbnQgPSBuZXh0LnJvdXRlci5jb21wb25lbnRzW3JdLkNvbXBvbmVudDtcblxuICAgICAgICAgIGlmIChDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAgICAgICAvLyByZWxvYWQgYWxsICcvX2Vycm9yLWRlYnVnJ1xuICAgICAgICAgICAgLy8gd2hpY2ggYXJlIGV4cGVjdGVkIHRvIGJlIGVycm9ycyBvZiAnL19lcnJvcicgcm91dGVzXG4gICAgICAgICAgICBuZXh0LnJvdXRlci5yZWxvYWQocik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQucm91dGVyLnJlbG9hZChyb3V0ZSk7XG4gIH0sXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKHJvdXRlKSB7XG4gICAgdmFyIF9yZWYgPSBuZXh0LnJvdXRlci5jb21wb25lbnRzW3JvdXRlXSB8fCB7fSxcbiAgICAgICAgQ29tcG9uZW50ID0gX3JlZi5Db21wb25lbnQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ICYmIENvbXBvbmVudC5fX3JvdXRlID09PSAnL19lcnJvci1kZWJ1ZycpIHtcbiAgICAgIC8vIHJlbG9hZCB0byByZWNvdmVyIGZyb20gcnVudGltZSBlcnJvcnNcbiAgICAgIG5leHQucm91dGVyLnJlbG9hZChyb3V0ZSk7XG4gICAgfVxuICB9XG59OyAvKiBnbG9iYWwgbmV4dCAqL1xuXG5cbl9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlMi5kZWZhdWx0LnN1YnNjcmliZShmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBmbiA9IGhhbmRsZXJzW29iai5hY3Rpb25dO1xuICBpZiAoZm4pIHtcbiAgICB2YXIgZGF0YSA9IG9iai5kYXRhIHx8IFtdO1xuICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgKDAsIF90b0NvbnN1bWFibGVBcnJheTMuZGVmYXVsdCkoZGF0YSkpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBhY3Rpb24gJyArIG9iai5hY3Rpb24pO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbmV4dC9kaXN0L2NsaWVudC93ZWJwYWNrLWhvdC1taWRkbGV3YXJlLWNsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbnNpUmVnZXggPSByZXF1aXJlKCdhbnNpLXJlZ2V4JykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5yZXBsYWNlKGFuc2lSZWdleCwgJycpIDogc3RyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJpcC1hbnNpL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8qZXNsaW50LWVudiBicm93c2VyKi9cblxudmFyIGNsaWVudE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnZhciBzdHlsZXMgPSB7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuODUpJyxcbiAgY29sb3I6ICcjRThFOEU4JyxcbiAgbGluZUhlaWdodDogJzEuMicsXG4gIHdoaXRlU3BhY2U6ICdwcmUnLFxuICBmb250RmFtaWx5OiAnTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2UnLFxuICBmb250U2l6ZTogJzEzcHgnLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiA5OTk5LFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgZGlyOiAnbHRyJ1xufTtcbmZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG59XG5cbnZhciBhbnNpSFRNTCA9IHJlcXVpcmUoJ2Fuc2ktaHRtbCcpO1xudmFyIGNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsndHJhbnNwYXJlbnQnLCAndHJhbnNwYXJlbnQnXSxcbiAgYmxhY2s6ICcxODE4MTgnLFxuICByZWQ6ICdFMzYwNDknLFxuICBncmVlbjogJ0IzQ0I3NCcsXG4gIHllbGxvdzogJ0ZGRDA4MCcsXG4gIGJsdWU6ICc3Q0FGQzInLFxuICBtYWdlbnRhOiAnN0ZBQ0NBJyxcbiAgY3lhbjogJ0MzQzJFRicsXG4gIGxpZ2h0Z3JleTogJ0VCRTdFMycsXG4gIGRhcmtncmV5OiAnNkQ3ODkxJ1xufTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuXG52YXIgRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xudmFyIGVudGl0aWVzID0gbmV3IEVudGl0aWVzKCk7XG5cbmV4cG9ydHMuc2hvd1Byb2JsZW1zID1cbmZ1bmN0aW9uIHNob3dQcm9ibGVtcyh0eXBlLCBsaW5lcykge1xuICBjbGllbnRPdmVybGF5LmlubmVySFRNTCA9ICcnO1xuICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKG1zZykge1xuICAgIG1zZyA9IGFuc2lIVE1MKGVudGl0aWVzLmVuY29kZShtc2cpKTtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcyNnB4JztcbiAgICBkaXYuaW5uZXJIVE1MID0gcHJvYmxlbVR5cGUodHlwZSkgKyAnIGluICcgKyBtc2c7XG4gICAgY2xpZW50T3ZlcmxheS5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59O1xuXG5leHBvcnRzLmNsZWFyID1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keSAmJiBjbGllbnRPdmVybGF5LnBhcmVudE5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59O1xuXG52YXIgcHJvYmxlbUNvbG9ycyA9IHtcbiAgZXJyb3JzOiBjb2xvcnMucmVkLFxuICB3YXJuaW5nczogY29sb3JzLnllbGxvd1xufTtcblxuZnVuY3Rpb24gcHJvYmxlbVR5cGUgKHR5cGUpIHtcbiAgdmFyIGNvbG9yID0gcHJvYmxlbUNvbG9yc1t0eXBlXSB8fCBjb2xvcnMucmVkO1xuICByZXR1cm4gKFxuICAgICc8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IycgKyBjb2xvciArICc7IGNvbG9yOiNmZmY7IHBhZGRpbmc6MnB4IDRweDsgYm9yZGVyLXJhZGl1czogMnB4XCI+JyArXG4gICAgICB0eXBlLnNsaWNlKDAsIC0xKS50b1VwcGVyQ2FzZSgpICtcbiAgICAnPC9zcGFuPidcbiAgKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG4vKmdsb2JhbCBfX3Jlc291cmNlUXVlcnkgX193ZWJwYWNrX3B1YmxpY19wYXRoX18qL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgcGF0aDogXCIvX193ZWJwYWNrX2htclwiLFxuICB0aW1lb3V0OiAyMCAqIDEwMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIHJlbG9hZDogZmFsc2UsXG4gIGxvZzogdHJ1ZSxcbiAgd2FybjogdHJ1ZVxufTtcbmlmIChfX3Jlc291cmNlUXVlcnkpIHtcbiAgdmFyIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcbiAgdmFyIG92ZXJyaWRlcyA9IHF1ZXJ5c3RyaW5nLnBhcnNlKF9fcmVzb3VyY2VRdWVyeS5zbGljZSgxKSk7XG4gIGlmIChvdmVycmlkZXMucGF0aCkgb3B0aW9ucy5wYXRoID0gb3ZlcnJpZGVzLnBhdGg7XG4gIGlmIChvdmVycmlkZXMudGltZW91dCkgb3B0aW9ucy50aW1lb3V0ID0gb3ZlcnJpZGVzLnRpbWVvdXQ7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheSkgb3B0aW9ucy5vdmVybGF5ID0gb3ZlcnJpZGVzLm92ZXJsYXkgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMucmVsb2FkKSBvcHRpb25zLnJlbG9hZCA9IG92ZXJyaWRlcy5yZWxvYWQgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMubm9JbmZvICYmIG92ZXJyaWRlcy5ub0luZm8gIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMucXVpZXQgJiYgb3ZlcnJpZGVzLnF1aWV0ICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgICBvcHRpb25zLndhcm4gPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLmR5bmFtaWNQdWJsaWNQYXRoKSB7XG4gICAgb3B0aW9ucy5wYXRoID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBvcHRpb25zLnBhdGg7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5FdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZSdzIGNsaWVudCByZXF1aXJlcyBFdmVudFNvdXJjZSB0byB3b3JrLiBcIiArXG4gICAgXCJZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogXCIgK1xuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29sc1wiXG4gICk7XG59IGVsc2Uge1xuICBjb25uZWN0KHdpbmRvdy5FdmVudFNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3QoRXZlbnRTb3VyY2UpIHtcbiAgdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcblxuICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gY29ubmVjdGVkXCIpO1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb25uZWN0KEV2ZW50U291cmNlKTsgfSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgfVxuXG59XG5cbnZhciByZXBvcnRlcjtcbi8vIHRoZSByZXBvcnRlciBuZWVkcyB0byBiZSBhIHNpbmdsZXRvbiBvbiB0aGUgcGFnZVxuLy8gaW4gY2FzZSB0aGUgY2xpZW50IGlzIGJlaW5nIHVzZWQgYnkgbXV0bGlwbGUgYnVuZGxlc1xuLy8gd2Ugb25seSB3YW50IHRvIHJlcG9ydCBvbmNlLlxuLy8gYWxsIHRoZSBlcnJvcnMgd2lsbCBnbyB0byBhbGwgY2xpZW50c1xudmFyIHNpbmdsZXRvbktleSA9ICdfX3dlYnBhY2tfaG90X21pZGRsZXdhcmVfcmVwb3J0ZXJfXyc7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvd1tzaW5nbGV0b25LZXldKSB7XG4gIHJlcG9ydGVyID0gd2luZG93W3NpbmdsZXRvbktleV0gPSBjcmVhdGVSZXBvcnRlcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnRlcigpIHtcbiAgdmFyIHN0cmlwID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuXG4gIHZhciBvdmVybGF5O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLm92ZXJsYXkpIHtcbiAgICBvdmVybGF5ID0gcmVxdWlyZSgnLi9jbGllbnQtb3ZlcmxheScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9ibGVtczogZnVuY3Rpb24odHlwZSwgb2JqKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIGJ1bmRsZSBoYXMgXCIgKyB0eXBlICsgXCI6XCIpO1xuICAgICAgICBvYmpbdHlwZV0uZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIHN0cmlwKG1zZykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVybGF5ICYmIHR5cGUgIT09ICd3YXJuaW5ncycpIG92ZXJsYXkuc2hvd1Byb2JsZW1zKHR5cGUsIG9ialt0eXBlXSk7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbihjdXN0b21PdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gY3VzdG9tT3ZlcmxheTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwcm9jZXNzVXBkYXRlID0gcmVxdWlyZSgnLi9wcm9jZXNzLXVwZGF0ZScpO1xuXG52YXIgY3VzdG9tSGFuZGxlcjtcbnZhciBzdWJzY3JpYmVBbGxIYW5kbGVyO1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2Uob2JqKSB7XG4gIHN3aXRjaChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSBcImJ1aWxkaW5nXCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gYnVuZGxlIHJlYnVpbGRpbmdcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVpbHRcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIltITVJdIGJ1bmRsZSBcIiArIChvYmoubmFtZSA/IG9iai5uYW1lICsgXCIgXCIgOiBcIlwiKSArXG4gICAgICAgICAgXCJyZWJ1aWx0IGluIFwiICsgb2JqLnRpbWUgKyBcIm1zXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgXCJzeW5jXCI6XG4gICAgICBpZiAob2JqLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIucHJvYmxlbXMoJ2Vycm9ycycsIG9iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHtcbiAgICAgICAgICBpZiAob2JqLndhcm5pbmdzLmxlbmd0aCA+IDApIHJlcG9ydGVyLnByb2JsZW1zKCd3YXJuaW5ncycsIG9iaik7XG4gICAgICAgICAgcmVwb3J0ZXIuc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NVcGRhdGUob2JqLmhhc2gsIG9iai5tb2R1bGVzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICBjdXN0b21IYW5kbGVyKG9iaik7XG4gICAgICB9XG4gIH1cblxuICBpZiAoc3Vic2NyaWJlQWxsSGFuZGxlcikge1xuICAgIHN1YnNjcmliZUFsbEhhbmRsZXIob2JqKTtcbiAgfVxufVxuXG5pZiAobW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1YnNjcmliZUFsbDogZnVuY3Rpb24gc3Vic2NyaWJlQWxsKGhhbmRsZXIpIHtcbiAgICAgIHN1YnNjcmliZUFsbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgY3VzdG9tSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiB1c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIudXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzP292ZXJsYXk9ZmFsc2UmcmVsb2FkPXRydWVcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLyoqXG4gKiBCYXNlZCBoZWF2aWx5IG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9cbiAqICBjMGFmZGY5YzZhYmMxZGQ3MDcwN2M1OTRlNDczODAyYTU2NmY3YjZlL2hvdC9vbmx5LWRldi1zZXJ2ZXIuanNcbiAqIE9yaWdpbmFsIGNvcHlyaWdodCBUb2JpYXMgS29wcGVycyBAc29rcmEgKE1JVCBsaWNlbnNlKVxuICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuXG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG5cbnZhciBobXJEb2NzVXJsID0gXCJodHRwOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50LXdpdGgtd2VicGFjay5odG1sXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG52YXIgbGFzdEhhc2g7XG52YXIgZmFpbHVyZVN0YXR1c2VzID0geyBhYm9ydDogMSwgZmFpbDogMSB9O1xudmFyIGFwcGx5T3B0aW9ucyA9IHsgaWdub3JlVW5hY2NlcHRlZDogdHJ1ZSB9O1xuXG5mdW5jdGlvbiB1cFRvRGF0ZShoYXNoKSB7XG4gIGlmIChoYXNoKSBsYXN0SGFzaCA9IGhhc2g7XG4gIHJldHVybiBsYXN0SGFzaCA9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhhc2gsIG1vZHVsZU1hcCwgb3B0aW9ucykge1xuICB2YXIgcmVsb2FkID0gb3B0aW9ucy5yZWxvYWQ7XG4gIGlmICghdXBUb0RhdGUoaGFzaCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PSBcImlkbGVcIikge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuICAgIGNoZWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbihlcnIsIHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgaWYoIXVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgc2VydmVyKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbHlDYWxsYmFjayA9IGZ1bmN0aW9uKGFwcGx5RXJyLCByZW5ld2VkTW9kdWxlcykge1xuICAgICAgICBpZiAoYXBwbHlFcnIpIHJldHVybiBoYW5kbGVFcnJvcihhcHBseUVycik7XG5cbiAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSBjaGVjaygpO1xuXG4gICAgICAgIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhcHBseVJlc3VsdCA9IG1vZHVsZS5ob3QuYXBwbHkoYXBwbHlPcHRpb25zLCBhcHBseUNhbGxiYWNrKTtcbiAgICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgICBpZiAoYXBwbHlSZXN1bHQgJiYgYXBwbHlSZXN1bHQudGhlbikge1xuICAgICAgICAvLyBIb3RNb2R1bGVSZXBsYWNlbWVudC5ydW50aW1lLmpzIHJlZmVycyB0byB0aGUgcmVzdWx0IGFzIGBvdXRkYXRlZE1vZHVsZXNgXG4gICAgICAgIGFwcGx5UmVzdWx0LnRoZW4oZnVuY3Rpb24ob3V0ZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgYXBwbHlDYWxsYmFjayhudWxsLCBvdXRkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwbHlSZXN1bHQuY2F0Y2goYXBwbHlDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IG1vZHVsZS5ob3QuY2hlY2soZmFsc2UsIGNiKTtcbiAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHVwZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5jYXRjaChjYik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICB2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgIHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZih1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogXCIgK1xuICAgICAgICAgIFwiKEZ1bGwgcmVsb2FkIG5lZWRlZClcXG5cIiArXG4gICAgICAgICAgXCJUaGlzIGlzIHVzdWFsbHkgYmVjYXVzZSB0aGUgbW9kdWxlcyB3aGljaCBoYXZlIGNoYW5nZWQgXCIgK1xuICAgICAgICAgIFwiKGFuZCB0aGVpciBwYXJlbnRzKSBkbyBub3Qga25vdyBob3cgdG8gaG90IHJlbG9hZCB0aGVtc2VsdmVzLiBcIiArXG4gICAgICAgICAgXCJTZWUgXCIgKyBobXJEb2NzVXJsICsgXCIgZm9yIG1vcmUgZGV0YWlscy5cIlxuICAgICAgICApO1xuICAgICAgICB1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVNYXBbbW9kdWxlSWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICBpZighcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG4gICAgICAgIHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdICAtIFwiICsgbW9kdWxlTWFwW21vZHVsZUlkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBUb0RhdGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSBpbiBmYWlsdXJlU3RhdHVzZXMpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGNoZWNrIGZvciB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFwiICsgZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gVXBkYXRlIGNoZWNrIGZhaWxlZDogXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1SZWxvYWQoKSB7XG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgaWYgKG9wdGlvbnMud2FybikgY29uc29sZS53YXJuKFwiW0hNUl0gUmVsb2FkaW5nIHBhZ2VcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL3Byb2Nlc3MtdXBkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wcm9jZXNzU3R5bGVOYW1lID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMgPSBjcmVhdGVNYXJrdXBGb3JTdHlsZXM7XG5cbnZhciBfY2FtZWxpemVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGVOYW1lKTtcblxudmFyIF9kYW5nZXJvdXNTdHlsZVZhbHVlID0gcmVxdWlyZSgnLi9kYW5nZXJvdXNTdHlsZVZhbHVlJyk7XG5cbnZhciBfZGFuZ2Vyb3VzU3R5bGVWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYW5nZXJvdXNTdHlsZVZhbHVlKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxudmFyIF9tZW1vaXplU3RyaW5nT25seSA9IHJlcXVpcmUoJ2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5Jyk7XG5cbnZhciBfbWVtb2l6ZVN0cmluZ09ubHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVtb2l6ZVN0cmluZ09ubHkpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBleHBvcnRzLnByb2Nlc3NTdHlsZU5hbWUgPSAoMCwgX21lbW9pemVTdHJpbmdPbmx5Mi5kZWZhdWx0KShfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5T3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciB3YXJuVmFsaWRTdHlsZTtcblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vICdtc1RyYW5zZm9ybScgaXMgY29ycmVjdCwgYnV0IHRoZSBvdGhlciBwcmVmaXhlcyBzaG91bGQgYmUgY2FwaXRhbGl6ZWRcbiAgICB2YXIgYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuID0gL14oPzp3ZWJraXR8bW96fG8pW0EtWl0vO1xuXG4gICAgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG4gICAgdmFyIGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiA9IC87XFxzKiQvO1xuXG4gICAgdmFyIHdhcm5lZFN0eWxlTmFtZXMgPSB7fTtcbiAgICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgICB2YXIgd2FybmVkRm9yTmFOVmFsdWUgPSBmYWxzZTtcblxuICAgIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1Vuc3VwcG9ydGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCAoMCwgX2NhbWVsaXplU3R5bGVOYW1lMi5kZWZhdWx0KShuYW1lKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnVW5zdXBwb3J0ZWQgdmVuZG9yLXByZWZpeGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24gPSBmdW5jdGlvbiB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24obmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkU3R5bGVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpICYmIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1N0eWxlIHByb3BlcnR5IHZhbHVlcyBzaG91bGRuXFwndCBjb250YWluIGEgc2VtaWNvbG9uLiVzICcgKyAnVHJ5IFwiJXM6ICVzXCIgaW5zdGVhZC4nLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpLCBuYW1lLCB2YWx1ZS5yZXBsYWNlKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiwgJycpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5TdHlsZVZhbHVlSXNOYU4gPSBmdW5jdGlvbiB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgTmFOYCBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgYCVzYCBjc3Mgc3R5bGUgcHJvcGVydHkuJXMnLCBuYW1lLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrUmVuZGVyTWVzc2FnZSA9IGZ1bmN0aW9uIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikge1xuICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiAnIENoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAgICovXG5cbiAgICB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uIHdhcm5WYWxpZFN0eWxlKG5hbWUsIHZhbHVlLCBjb21wb25lbnQpIHtcbiAgICAgIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby12YXJcbiAgICAgIHZhciBvd25lciA9IHZvaWQgMDtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgb3duZXIgPSBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKTtcbiAgICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKTtcbiAgICAgIH0gZWxzZSBpZiAoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbi8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWFwcGluZyBvZiBzdHlsZSBwcm9wZXJ0aWVzIGZvciB1c2UgYXMgaW5saW5lIHN0eWxlczpcbiAgICpcbiAgICogICA+IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyh7d2lkdGg6ICcyMDBweCcsIGhlaWdodDogMH0pXG4gICAqICAgXCJ3aWR0aDoyMDBweDtoZWlnaHQ6MDtcIlxuICAgKlxuICAgKiBVbmRlZmluZWQgdmFsdWVzIGFyZSBpZ25vcmVkIHNvIHRoYXQgZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgaXMgZWFzaWVyLlxuICAgKiBUaGUgcmVzdWx0IHNob3VsZCBiZSBIVE1MLWVzY2FwZWQgYmVmb3JlIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXNcbiAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqIEByZXR1cm4gez9zdHJpbmd9XG4gICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzLCBjb21wb25lbnQpIHtcbiAgdmFyIHNlcmlhbGl6ZWQgPSAnJztcbiAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgIHZhciBpc0N1c3RvbVByb3AgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHN0eWxlVmFsdWUgPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNDdXN0b21Qcm9wKSB7XG4gICAgICB3YXJuVmFsaWRTdHlsZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGlmIChzdHlsZVZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBzdHlsZU5hbWUgKyAnOicgKyBzdHlsZVZhbHVlICsgJzsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkgKyAnOic7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gKDAsIF9kYW5nZXJvdXNTdHlsZVZhbHVlMi5kZWZhdWx0KShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCkgKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvbGlua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5leHQvbGlua1wiXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX2h5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9oeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvY2FtZWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhbWVsaXplID0gcmVxdWlyZSgnLi9jYW1lbGl6ZScpO1xuXG52YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tb3otdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJNb3pUcmFuc2l0aW9uXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1zLXRyYW5zaXRpb24nKVxuICogICA8IFwibXNUcmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXG4gKiAoaHR0cDovL3d3dy5hbmRpc21pdGguY29tL2Jsb2cvMjAxMi8wMi9tb2Rlcm5penItcHJlZml4ZWQvKSwgYW4gYC1tc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlIGBtc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGNhbWVsaXplKHN0cmluZy5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZVN0eWxlTmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF91cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqXG4gKiBGb3IgQ1NTIHN0eWxlIG5hbWVzLCB1c2UgYGh5cGhlbmF0ZVN0eWxlTmFtZWAgaW5zdGVhZCB3aGljaCB3b3JrcyBwcm9wZXJseVxuICogd2l0aCBhbGwgdmVuZG9yIHByZWZpeGVzLCBpbmNsdWRpbmcgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF91cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHlwaGVuYXRlID0gcmVxdWlyZSgnLi9oeXBoZW5hdGUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBoeXBoZW5hdGUoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICogQHR5cGVjaGVja3Mgc3RhdGljLW9ubHlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTWVtb2l6ZXMgdGhlIHJldHVybiB2YWx1ZSBvZiBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgc3RyaW5nIGFyZ3VtZW50LlxuICovXG5cbmZ1bmN0aW9uIG1lbW9pemVTdHJpbmdPbmx5KGNhbGxiYWNrKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmICghY2FjaGUuaGFzT3duUHJvcGVydHkoc3RyaW5nKSkge1xuICAgICAgY2FjaGVbc3RyaW5nXSA9IGNhbGxiYWNrLmNhbGwodGhpcywgc3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW3N0cmluZ107XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZVN0cmluZ09ubHk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQ1NTUHJvcGVydHlcbiAqL1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIE1vc3Qgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgdW5zZXQgYnkgZG9pbmcgLnN0eWxlW3Byb3BdID0gJycgYnV0IElFOFxuICogZG9lc24ndCBsaWtlIGRvaW5nIHRoYXQgd2l0aCBzaG9ydGhhbmQgcHJvcGVydGllcyBzbyBmb3IgdGhlIHByb3BlcnRpZXMgdGhhdFxuICogSUU4IGJyZWFrcyBvbiwgd2hpY2ggYXJlIGxpc3RlZCBoZXJlLCB3ZSBpbnN0ZWFkIHVuc2V0IGVhY2ggb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHByb3BlcnRpZXMuIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM4NS5cbiAqIFRoZSA0LXZhbHVlICdjbG9jaycgcHJvcGVydGllcyBsaWtlIG1hcmdpbiwgcGFkZGluZywgYm9yZGVyLXdpZHRoIHNlZW0gdG9cbiAqIGJlaGF2ZSB3aXRob3V0IGFueSBwcm9ibGVtcy4gQ3VyaW91c2x5LCBsaXN0LXN0eWxlIHdvcmtzIHRvbyB3aXRob3V0IGFueVxuICogc3BlY2lhbCBwcm9kZGluZy5cbiAqL1xudmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbiAgfSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlcldpZHRoOiB0cnVlLFxuICAgIGJvcmRlclN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbVN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyTGVmdFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckxlZnRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIGJvcmRlclJpZ2h0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJSaWdodENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIGJvcmRlclRvcFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclRvcFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclRvcENvbG9yOiB0cnVlXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250U3R5bGU6IHRydWUsXG4gICAgZm9udFZhcmlhbnQ6IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBmb250U2l6ZTogdHJ1ZSxcbiAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgIGZvbnRGYW1pbHk6IHRydWVcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG91dGxpbmVXaWR0aDogdHJ1ZSxcbiAgICBvdXRsaW5lU3R5bGU6IHRydWUsXG4gICAgb3V0bGluZUNvbG9yOiB0cnVlXG4gIH1cbn07XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHtcbiAgaXNVbml0bGVzc051bWJlcjogaXNVbml0bGVzc051bWJlcixcbiAgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zOiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1Byb3BlcnR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9DU1NQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NTU1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eScpO1xuXG52YXIgX0NTU1Byb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NTU1Byb3BlcnR5KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBkYW5nZXJvdXNTdHlsZVZhbHVlXG4gKi9cblxudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSBfQ1NTUHJvcGVydHkyLmRlZmF1bHQuaXNVbml0bGVzc051bWJlcjtcbnZhciBzdHlsZVdhcm5pbmdzID0ge307XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIGludG8gdGhlIHByb3BlciBjc3Mgd3JpdGFibGUgdmFsdWUuIFRoZSBzdHlsZSBuYW1lIGBuYW1lYFxuICogc2hvdWxkIGJlIGxvZ2ljYWwgKG5vIGh5cGhlbnMpLCBhcyBzcGVjaWZpZWRcbiAqIGluIGBDU1NQcm9wZXJ0eS5pc1VuaXRsZXNzTnVtYmVyYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBDU1MgcHJvcGVydHkgbmFtZSBzdWNoIGFzIGB0b3BNYXJnaW5gLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBDU1MgcHJvcGVydHkgdmFsdWUgc3VjaCBhcyBgMTBweGAuXG4gKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAqIEByZXR1cm4ge3N0cmluZ30gTm9ybWFsaXplZCBzdHlsZSB2YWx1ZSB3aXRoIGRpbWVuc2lvbnMgYXBwbGllZC5cbiAqL1xuZnVuY3Rpb24gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShuYW1lLCB2YWx1ZSwgY29tcG9uZW50KSB7XG4gIC8vIE5vdGUgdGhhdCB3ZSd2ZSByZW1vdmVkIGVzY2FwZVRleHRGb3JCcm93c2VyKCkgY2FsbHMgaGVyZSBzaW5jZSB0aGVcbiAgLy8gd2hvbGUgc3RyaW5nIHdpbGwgYmUgZXNjYXBlZCB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgaW5qZWN0ZWQgaW50b1xuICAvLyB0aGUgbWFya3VwLiBJZiB5b3UgcHJvdmlkZSB1bnNhZmUgdXNlciBkYXRhIGhlcmUgdGhleSBjYW4gaW5qZWN0XG4gIC8vIGFyYml0cmFyeSBDU1Mgd2hpY2ggbWF5IGJlIHByb2JsZW1hdGljIChJIGNvdWxkbid0IHJlcHJvIHRoaXMpOlxuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1hTU19GaWx0ZXJfRXZhc2lvbl9DaGVhdF9TaGVldFxuICAvLyBodHRwOi8vd3d3LnRoZXNwYW5uZXIuY28udWsvMjAwNy8xMS8yNi91bHRpbWF0ZS14c3MtY3NzLWluamVjdGlvbi9cbiAgLy8gVGhpcyBpcyBub3QgYW4gWFNTIGhvbGUgYnV0IGluc3RlYWQgYSBwb3RlbnRpYWwgQ1NTIGluamVjdGlvbiBpc3N1ZVxuICAvLyB3aGljaCBoYXMgbGVhZCB0byBhIGdyZWF0ZXIgZGlzY3Vzc2lvbiBhYm91dCBob3cgd2UncmUgZ29pbmcgdG9cbiAgLy8gdHJ1c3QgVVJMcyBtb3ZpbmcgZm9yd2FyZC4gU2VlICMyMTE1OTAxXG5cbiAgdmFyIGlzRW1wdHkgPSB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJztcbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgaXNOb25OdW1lcmljID0gaXNOYU4odmFsdWUpO1xuICBpZiAoaXNOb25OdW1lcmljIHx8IHZhbHVlID09PSAwIHx8IGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkge1xuICAgIHJldHVybiAnJyArIHZhbHVlOyAvLyBjYXN0IHRvIHN0cmluZ1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gQWxsb3cgJzAnIHRvIHBhc3MgdGhyb3VnaCB3aXRob3V0IHdhcm5pbmcuIDAgaXMgYWxyZWFkeSBzcGVjaWFsIGFuZFxuICAgICAgLy8gZG9lc24ndCByZXF1aXJlIHVuaXRzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIHdhcm4gYWJvdXQgaXQuXG4gICAgICBpZiAoY29tcG9uZW50ICYmIHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgdmFyIG93bmVyID0gY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IG93bmVyLmdldE5hbWUoKSA6IG51bGw7XG4gICAgICAgIGlmIChvd25lck5hbWUgJiYgIXN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSkge1xuICAgICAgICAgIHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG93bmVyTmFtZSkge1xuICAgICAgICAgIHZhciB3YXJuaW5ncyA9IHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXTtcbiAgICAgICAgICB3YXJuZWQgPSB3YXJuaW5nc1tuYW1lXTtcbiAgICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgICAgd2FybmluZ3NbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnYSBgJXNgIHRhZyAob3duZXI6IGAlc2ApIHdhcyBwYXNzZWQgYSBudW1lcmljIHN0cmluZyB2YWx1ZSAnICsgJ2ZvciBDU1MgcHJvcGVydHkgYCVzYCAodmFsdWU6IGAlc2ApIHdoaWNoIHdpbGwgYmUgdHJlYXRlZCAnICsgJ2FzIGEgdW5pdGxlc3MgbnVtYmVyIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3QuJywgY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC50eXBlLCBvd25lck5hbWUgfHwgJ3Vua25vd24nLCBuYW1lLCB2YWx1ZSkgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlICsgJ3B4Jztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvZGFuZ2Vyb3VzU3R5bGVWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNsZWFuO1xuLy8gUmV0dXJucyB0cnVlIGZvciBudWxsLCBmYWxzZSwgdW5kZWZpbmVkIGFuZCB7fVxuZnVuY3Rpb24gaXNGYWxzeSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gZmFsc2UgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gY2xlYW5PYmplY3Qob2JqZWN0KSB7XG4gIGlmIChpc0ZhbHN5KG9iamVjdCkpIHJldHVybiBudWxsO1xuICBpZiAoKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iamVjdCkpICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iamVjdDtcblxuICB2YXIgYWNjID0ge30sXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgIGhhc0ZhbHN5ID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtrZXlzW2ldXTtcbiAgICB2YXIgZmlsdGVyZWRWYWx1ZSA9IGNsZWFuKHZhbHVlKTtcbiAgICBpZiAoZmlsdGVyZWRWYWx1ZSA9PT0gbnVsbCB8fCBmaWx0ZXJlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaGFzRmFsc3kgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgYWNjW2tleXNbaV1dID0gZmlsdGVyZWRWYWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFjYykubGVuZ3RoID09PSAwID8gbnVsbCA6IGhhc0ZhbHN5ID8gYWNjIDogb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkFycmF5KHJ1bGVzKSB7XG4gIHZhciBoYXNGYWxzeSA9IGZhbHNlO1xuICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgcnVsZXMuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBmaWx0ZXJlZFJ1bGUgPSBjbGVhbihydWxlKTtcbiAgICBpZiAoZmlsdGVyZWRSdWxlID09PSBudWxsIHx8IGZpbHRlcmVkUnVsZSAhPT0gcnVsZSkge1xuICAgICAgaGFzRmFsc3kgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBmaWx0ZXJlZC5wdXNoKGZpbHRlcmVkUnVsZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkLmxlbmd0aCA9PSAwID8gbnVsbCA6IGhhc0ZhbHN5ID8gZmlsdGVyZWQgOiBydWxlcztcbn1cblxuLy8gVGFrZXMgc3R5bGUgYXJyYXkgb3Igb2JqZWN0IHByb3ZpZGVkIGJ5IHVzZXIgYW5kIGNsZWFycyBhbGwgdGhlIGZhbHN5IGRhdGEgXG4vLyBJZiB0aGVyZSBpcyBubyBzdHlsZXMgbGVmdCBhZnRlciBmaWx0cmF0aW9uIHJldHVybnMgbnVsbFxuZnVuY3Rpb24gY2xlYW4oaW5wdXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpID8gY2xlYW5BcnJheShpbnB1dCkgOiBjbGVhbk9iamVjdChpbnB1dCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvY2xlYW4uanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZG9IYXNoO1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JheWNtb3JnYW4vNTg4NDIzXG5cbmZ1bmN0aW9uIGRvSGFzaChzdHIsIHNlZWQpIHtcbiAgdmFyIG0gPSAweDViZDFlOTk1O1xuICB2YXIgciA9IDI0O1xuICB2YXIgaCA9IHNlZWQgXiBzdHIubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgd2hpbGUgKGxlbmd0aCA+PSA0KSB7XG4gICAgdmFyIGsgPSBVSW50MzIoc3RyLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgayA9IFVtdWwzMihrLCBtKTtcbiAgICBrIF49IGsgPj4+IHI7XG4gICAgayA9IFVtdWwzMihrLCBtKTtcblxuICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgaCBePSBrO1xuXG4gICAgY3VycmVudEluZGV4ICs9IDQ7XG4gICAgbGVuZ3RoIC09IDQ7XG4gIH1cblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4ICsgMikgPDwgMTY7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBoIF49IGggPj4+IDEzO1xuICBoID0gVW11bDMyKGgsIG0pO1xuICBoIF49IGggPj4+IDE1O1xuXG4gIHJldHVybiBoID4+PiAwO1xufVxuXG5mdW5jdGlvbiBVSW50MzIoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCkgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDE2KSArIChzdHIuY2hhckNvZGVBdChwb3MpIDw8IDI0KTtcbn1cblxuZnVuY3Rpb24gVUludDE2KHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpO1xufVxuXG5mdW5jdGlvbiBVbXVsMzIobiwgbSkge1xuICBuID0gbiB8IDA7XG4gIG0gPSBtIHwgMDtcbiAgdmFyIG5sbyA9IG4gJiAweGZmZmY7XG4gIHZhciBuaGkgPSBuID4+PiAxNjtcbiAgdmFyIHJlcyA9IG5sbyAqIG0gKyAoKG5oaSAqIG0gJiAweGZmZmYpIDw8IDE2KSB8IDA7XG4gIHJldHVybiByZXM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvaGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5tZXJnZSA9IGV4cG9ydHMuJCA9IGV4cG9ydHMuc3R5bGUgPSBleHBvcnRzLnByZXNldHMgPSBleHBvcnRzLmtleWZyYW1lcyA9IGV4cG9ydHMuZm9udEZhY2UgPSBleHBvcnRzLmluc2VydEdsb2JhbCA9IGV4cG9ydHMuaW5zZXJ0UnVsZSA9IGV4cG9ydHMucGx1Z2lucyA9IGV4cG9ydHMuc3R5bGVTaGVldCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuc3BlZWR5ID0gc3BlZWR5O1xuZXhwb3J0cy5zaW11bGF0aW9ucyA9IHNpbXVsYXRpb25zO1xuZXhwb3J0cy5zaW11bGF0ZSA9IHNpbXVsYXRlO1xuZXhwb3J0cy5jc3NMYWJlbHMgPSBjc3NMYWJlbHM7XG5leHBvcnRzLmlzTGlrZVJ1bGUgPSBpc0xpa2VSdWxlO1xuZXhwb3J0cy5pZEZvciA9IGlkRm9yO1xuZXhwb3J0cy5jc3MgPSBjc3M7XG5leHBvcnRzLnJlaHlkcmF0ZSA9IHJlaHlkcmF0ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHMuc2VsZWN0ID0gc2VsZWN0O1xuZXhwb3J0cy5wYXJlbnQgPSBwYXJlbnQ7XG5leHBvcnRzLm1lZGlhID0gbWVkaWE7XG5leHBvcnRzLnBzZXVkbyA9IHBzZXVkbztcbmV4cG9ydHMuYWN0aXZlID0gYWN0aXZlO1xuZXhwb3J0cy5hbnkgPSBhbnk7XG5leHBvcnRzLmNoZWNrZWQgPSBjaGVja2VkO1xuZXhwb3J0cy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuX2RlZmF1bHQgPSBfZGVmYXVsdDtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMuZmlyc3RDaGlsZCA9IGZpcnN0Q2hpbGQ7XG5leHBvcnRzLmZpcnN0T2ZUeXBlID0gZmlyc3RPZlR5cGU7XG5leHBvcnRzLmZ1bGxzY3JlZW4gPSBmdWxsc2NyZWVuO1xuZXhwb3J0cy5mb2N1cyA9IGZvY3VzO1xuZXhwb3J0cy5ob3ZlciA9IGhvdmVyO1xuZXhwb3J0cy5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbmV4cG9ydHMuaW5SYW5nZSA9IGluUmFuZ2U7XG5leHBvcnRzLmludmFsaWQgPSBpbnZhbGlkO1xuZXhwb3J0cy5sYXN0Q2hpbGQgPSBsYXN0Q2hpbGQ7XG5leHBvcnRzLmxhc3RPZlR5cGUgPSBsYXN0T2ZUeXBlO1xuZXhwb3J0cy5sZWZ0ID0gbGVmdDtcbmV4cG9ydHMubGluayA9IGxpbms7XG5leHBvcnRzLm9ubHlDaGlsZCA9IG9ubHlDaGlsZDtcbmV4cG9ydHMub25seU9mVHlwZSA9IG9ubHlPZlR5cGU7XG5leHBvcnRzLm9wdGlvbmFsID0gb3B0aW9uYWw7XG5leHBvcnRzLm91dE9mUmFuZ2UgPSBvdXRPZlJhbmdlO1xuZXhwb3J0cy5yZWFkT25seSA9IHJlYWRPbmx5O1xuZXhwb3J0cy5yZWFkV3JpdGUgPSByZWFkV3JpdGU7XG5leHBvcnRzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5leHBvcnRzLnJpZ2h0ID0gcmlnaHQ7XG5leHBvcnRzLnJvb3QgPSByb290O1xuZXhwb3J0cy5zY29wZSA9IHNjb3BlO1xuZXhwb3J0cy50YXJnZXQgPSB0YXJnZXQ7XG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5leHBvcnRzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuZXhwb3J0cy5kaXIgPSBkaXI7XG5leHBvcnRzLmxhbmcgPSBsYW5nO1xuZXhwb3J0cy5ub3QgPSBub3Q7XG5leHBvcnRzLm50aENoaWxkID0gbnRoQ2hpbGQ7XG5leHBvcnRzLm50aExhc3RDaGlsZCA9IG50aExhc3RDaGlsZDtcbmV4cG9ydHMubnRoTGFzdE9mVHlwZSA9IG50aExhc3RPZlR5cGU7XG5leHBvcnRzLm50aE9mVHlwZSA9IG50aE9mVHlwZTtcbmV4cG9ydHMuYWZ0ZXIgPSBhZnRlcjtcbmV4cG9ydHMuYmVmb3JlID0gYmVmb3JlO1xuZXhwb3J0cy5maXJzdExldHRlciA9IGZpcnN0TGV0dGVyO1xuZXhwb3J0cy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG5leHBvcnRzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbmV4cG9ydHMuYmFja2Ryb3AgPSBiYWNrZHJvcDtcbmV4cG9ydHMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbmV4cG9ydHMuY3NzRm9yID0gY3NzRm9yO1xuZXhwb3J0cy5hdHRyaWJzRm9yID0gYXR0cmlic0ZvcjtcblxudmFyIF9zaGVldCA9IHJlcXVpcmUoJy4vc2hlZXQuanMnKTtcblxudmFyIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xuXG52YXIgX2NsZWFuID0gcmVxdWlyZSgnLi9jbGVhbi5qcycpO1xuXG52YXIgX2NsZWFuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsZWFuKTtcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJyk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9IC8qIHN0eWxlc2hlZXQgKi9cblxuXG52YXIgc3R5bGVTaGVldCA9IGV4cG9ydHMuc3R5bGVTaGVldCA9IG5ldyBfc2hlZXQuU3R5bGVTaGVldCgpO1xuLy8gYW4gaXNvbW9ycGhpYyBTdHlsZVNoZWV0IHNoaW0uIGhpZGVzIGFsbCB0aGUgbml0dHkgZ3JpdHR5LlxuXG4vLyAvKioqKioqKioqKioqKioqKiBMSUZUT0ZGIElOIDMuLi4gMi4uLiAxLi4uICoqKioqKioqKioqKioqKiovXG5zdHlsZVNoZWV0LmluamVjdCgpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4vLyAvKioqKioqKioqKioqKioqKiAgICAgIFRPIFRIRSBNT09PT09PT04gICAgICoqKioqKioqKioqKioqKiovXG5cbi8vIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHRvZ2dsZSBzcGVlZHlcbmZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gIHJldHVybiBzdHlsZVNoZWV0LnNwZWVkeShib29sKTtcbn1cblxuLy8gcGx1Z2luc1xuLy8gd2UgaW5jbHVkZSB0aGVzZSBieSBkZWZhdWx0XG52YXIgcGx1Z2lucyA9IGV4cG9ydHMucGx1Z2lucyA9IHN0eWxlU2hlZXQucGx1Z2lucyA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoX3BsdWdpbnMucHJlZml4ZXMsIF9wbHVnaW5zLmZhbGxiYWNrcyk7XG5wbHVnaW5zLm1lZGlhID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldCgpOyAvLyBuZWF0ISBtZWRpYSwgZm9udC1mYWNlLCBrZXlmcmFtZXNcbnBsdWdpbnMuZm9udEZhY2UgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KCk7XG5wbHVnaW5zLmtleWZyYW1lcyA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoX3BsdWdpbnMucHJlZml4ZXMpO1xuXG4vLyBkZWZpbmUgc29tZSBjb25zdGFudHNcblxudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WO1xudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG5cbi8qKioqIHNpbXVsYXRpb25zICAqKioqL1xuXG4vLyBhIGZsYWcgdG8gZW5hYmxlIHNpbXVsYXRpb24gbWV0YSB0YWdzIG9uIGRvbSBub2Rlc1xuLy8gZGVmYXVsdHMgdG8gdHJ1ZSBpbiBkZXYgbW9kZS4gcmVjb21tZW5kICpub3QqIHRvXG4vLyB0b2dnbGUgb2Z0ZW4uXG52YXIgY2FuU2ltdWxhdGUgPSBpc0RldjtcblxuLy8gd2UgdXNlIHRoZXNlIGZsYWdzIGZvciBpc3N1aW5nIHdhcm5pbmdzIHdoZW4gc2ltdWxhdGUgaXMgY2FsbGVkXG4vLyBpbiBwcm9kIC8gaW4gaW5jb3JyZWN0IG9yZGVyXG52YXIgd2FybmVkMSA9IGZhbHNlLFxuICAgIHdhcm5lZDIgPSBmYWxzZTtcblxuLy8gdG9nZ2xlcyBzaW11bGF0aW9uIGFjdGl2aXR5LiBzaG91bGRuJ3QgYmUgbmVlZGVkIGluIG1vc3QgY2FzZXNcbmZ1bmN0aW9uIHNpbXVsYXRpb25zKCkge1xuICB2YXIgYm9vbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICBjYW5TaW11bGF0ZSA9ICEhYm9vbDtcbn1cblxuLy8gdXNlIHRoaXMgb24gZG9tIG5vZGVzIHRvICdzaW11bGF0ZScgcHNldWRvY2xhc3Nlc1xuLy8gPGRpdiB7Li4uaG92ZXIoeyBjb2xvcjogJ3JlZCcgfSl9IHsuLi5zaW11bGF0ZSgnaG92ZXInLCAndmlzaXRlZCcpfT4uLi48L2Rpdj5cbi8vIHlvdSBjYW4gZXZlbiBzZW5kIGluIHNvbWUgd2VpcmQgb25lcywgYXMgbG9uZyBhcyBpdCdzIGluIHNpbXBsZSBmb3JtYXRcbi8vIGFuZCBtYXRjaGVzIGFuIGV4aXN0aW5nIHJ1bGUgb24gdGhlIGVsZW1lbnRcbi8vIGVnIHNpbXVsYXRlKCdudGhDaGlsZDInLCAnOmhvdmVyOmFjdGl2ZScpIGV0Y1xuZnVuY3Rpb24gc2ltdWxhdGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwc2V1ZG9zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHNldWRvc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBzZXVkb3MgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShwc2V1ZG9zKTtcbiAgaWYgKCFwc2V1ZG9zKSByZXR1cm4ge307XG4gIGlmICghY2FuU2ltdWxhdGUpIHtcbiAgICBpZiAoIXdhcm5lZDEpIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FuXFwndCBzaW11bGF0ZSB3aXRob3V0IG9uY2UgY2FsbGluZyBzaW11bGF0aW9ucyh0cnVlKScpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgd2FybmVkMSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghaXNEZXYgJiYgIWlzVGVzdCAmJiAhd2FybmVkMikge1xuICAgICAgY29uc29sZS53YXJuKCdkb25cXCd0IHVzZSBzaW11bGF0aW9uIG91dHNpZGUgZGV2Jyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB3YXJuZWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBwc2V1ZG9zLnJlZHVjZShmdW5jdGlvbiAobywgcCkge1xuICAgIHJldHVybiBvWydkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocCldID0gJycsIG87XG4gIH0sIHt9KTtcbn1cblxuLyoqKiogbGFiZWxzICoqKiovXG4vLyB0b2dnbGUgZm9yIGRlYnVnIGxhYmVscy5cbi8vICpzaG91bGRuJ3QqIGhhdmUgdG8gbWVzcyB3aXRoIHRoaXMgbWFudWFsbHlcbnZhciBoYXNMYWJlbHMgPSBpc0RldjtcblxuZnVuY3Rpb24gY3NzTGFiZWxzKGJvb2wpIHtcbiAgaGFzTGFiZWxzID0gISFib29sO1xufVxuXG4vLyB0YWtlcyBhIHN0cmluZywgY29udmVydHMgdG8gbG93ZXJjYXNlLCBzdHJpcHMgb3V0IG5vbmFscGhhbnVtZXJpYy5cbmZ1bmN0aW9uIHNpbXBsZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLCAnJyk7XG59XG5cbi8vIGhhc2hlcyBhIHN0cmluZyB0byBzb21ldGhpbmcgJ3VuaXF1ZSdcbi8vIHdlIHVzZSB0aGlzIHRvIGdlbmVyYXRlIGlkcyBmb3Igc3R5bGVzXG5cblxuZnVuY3Rpb24gaGFzaGlmeSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBvYmpzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gKDAsIF9oYXNoMi5kZWZhdWx0KShvYmpzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh4KTtcbiAgfSkuam9pbignJykpLnRvU3RyaW5nKDM2KTtcbn1cblxuLy8gb2Ygc2hhcGUgeyAnZGF0YS1jc3MtPGlkPic6ICcnIH1cbmZ1bmN0aW9uIGlzTGlrZVJ1bGUocnVsZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGUpLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICE9PSAndG9TdHJpbmcnO1xuICB9KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAhIS9kYXRhXFwtY3NzXFwtKFthLXpBLVowLTldKykvLmV4ZWMoa2V5c1swXSk7XG59XG5cbi8vIGV4dHJhY3RzIGlkIGZyb20gYSB7ICdkYXRhLWNzcy08aWQ+JzogJyd9IGxpa2Ugb2JqZWN0XG5mdW5jdGlvbiBpZEZvcihydWxlKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocnVsZSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggIT09ICd0b1N0cmluZyc7XG4gIH0pO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignbm90IGEgcnVsZScpO1xuICB2YXIgcmVnZXggPSAvZGF0YVxcLWNzc1xcLShbYS16QS1aMC05XSspLztcbiAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyhrZXlzWzBdKTtcbiAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBydWxlJyk7XG4gIHJldHVybiBtYXRjaFsxXTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3IoaWQsIHBhdGgpIHtcblxuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwmL2csICcnKTtcbiAgfVxuICBpZiAoIXBhdGgpIHJldHVybiAnLmNzcy0nICsgaWQgKyAnLFtkYXRhLWNzcy0nICsgaWQgKyAnXSc7XG5cbiAgdmFyIHggPSBwYXRoLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHguaW5kZXhPZignJicpID49IDAgPyBbeC5yZXBsYWNlKC9cXCYvbWcsICcuY3NzLScgKyBpZCksIHgucmVwbGFjZSgvXFwmL21nLCAnW2RhdGEtY3NzLScgKyBpZCArICddJyldLmpvaW4oJywnKSAvLyB0b2RvIC0gbWFrZSBzdXJlIGVhY2ggc3ViIHNlbGVjdG9yIGhhcyBhbiAmXG4gICAgOiAnLmNzcy0nICsgaWQgKyB4ICsgJyxbZGF0YS1jc3MtJyArIGlkICsgJ10nICsgeDtcbiAgfSkuam9pbignLCcpO1xuXG4gIGlmIChjYW5TaW11bGF0ZSAmJiAvXlxcJlxcOi8uZXhlYyhwYXRoKSAmJiAhL1xccy8uZXhlYyhwYXRoKSkge1xuICAgIHggKz0gJywuY3NzLScgKyBpZCArICdbZGF0YS1zaW11bGF0ZS0nICsgc2ltcGxlKHBhdGgpICsgJ10sW2RhdGEtY3NzLScgKyBpZCArICddW2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwYXRoKSArICddJztcbiAgfVxuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gdG9DU1MoX3JlZikge1xuICB2YXIgc2VsZWN0b3IgPSBfcmVmLnNlbGVjdG9yLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciByZXN1bHQgPSBwbHVnaW5zLnRyYW5zZm9ybSh7IHNlbGVjdG9yOiBzZWxlY3Rvciwgc3R5bGU6IHN0eWxlIH0pO1xuICByZXR1cm4gcmVzdWx0LnNlbGVjdG9yICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShyZXN1bHQuc3R5bGUpICsgJ30nO1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdChzdHlsZSkge1xuICAvLyB3ZSBjYW4gYmUgc3VyZSBpdCdzIG5vdCBpbmZpbml0ZWx5IG5lc3RlZCBoZXJlIFxuICB2YXIgcGxhaW4gPSB2b2lkIDAsXG4gICAgICBzZWxlY3RzID0gdm9pZCAwLFxuICAgICAgbWVkaWFzID0gdm9pZCAwLFxuICAgICAgc3VwcG9ydHMgPSB2b2lkIDA7XG4gIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5LmluZGV4T2YoJyYnKSA+PSAwKSB7XG4gICAgICBzZWxlY3RzID0gc2VsZWN0cyB8fCB7fTtcbiAgICAgIHNlbGVjdHNba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG1lZGlhcyA9IG1lZGlhcyB8fCB7fTtcbiAgICAgIG1lZGlhc1trZXldID0gZGVjb25zdHJ1Y3Qoc3R5bGVba2V5XSk7XG4gICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignQHN1cHBvcnRzJykgPT09IDApIHtcbiAgICAgIHN1cHBvcnRzID0gc3VwcG9ydHMgfHwge307XG4gICAgICBzdXBwb3J0c1trZXldID0gZGVjb25zdHJ1Y3Qoc3R5bGVba2V5XSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdsYWJlbCcpIHtcbiAgICAgIGlmIChzdHlsZS5sYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBsYWluID0gcGxhaW4gfHwge307XG4gICAgICAgIHBsYWluLmxhYmVsID0gc3R5bGUubGFiZWwuam9pbignLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpbiA9IHBsYWluIHx8IHt9O1xuICAgICAgcGxhaW5ba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgcGxhaW46IHBsYWluLCBzZWxlY3RzOiBzZWxlY3RzLCBtZWRpYXM6IG1lZGlhcywgc3VwcG9ydHM6IHN1cHBvcnRzIH07XG59XG5cbmZ1bmN0aW9uIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBzdHlsZSkge1xuICB2YXIgY3NzID0gW107XG5cbiAgLy8gcGx1Z2lucyBoZXJlXG4gIHZhciBwbGFpbiA9IHN0eWxlLnBsYWluLFxuICAgICAgc2VsZWN0cyA9IHN0eWxlLnNlbGVjdHMsXG4gICAgICBtZWRpYXMgPSBzdHlsZS5tZWRpYXMsXG4gICAgICBzdXBwb3J0cyA9IHN0eWxlLnN1cHBvcnRzO1xuXG4gIGlmIChwbGFpbikge1xuICAgIGNzcy5wdXNoKHRvQ1NTKHsgc3R5bGU6IHBsYWluLCBzZWxlY3Rvcjogc2VsZWN0b3IoaWQpIH0pKTtcbiAgfVxuICBpZiAoc2VsZWN0cykge1xuICAgIE9iamVjdC5rZXlzKHNlbGVjdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKHRvQ1NTKHsgc3R5bGU6IHNlbGVjdHNba2V5XSwgc2VsZWN0b3I6IHNlbGVjdG9yKGlkLCBrZXkpIH0pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobWVkaWFzKSB7XG4gICAgT2JqZWN0LmtleXMobWVkaWFzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaChrZXkgKyAneycgKyBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgbWVkaWFzW2tleV0pLmpvaW4oJycpICsgJ30nKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoc3VwcG9ydHMpIHtcbiAgICBPYmplY3Qua2V5cyhzdXBwb3J0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2goa2V5ICsgJ3snICsgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIHN1cHBvcnRzW2tleV0pLmpvaW4oJycpICsgJ30nKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY3NzO1xufVxuXG4vLyB0aGlzIGNhY2hlIHRvIHRyYWNrIHdoaWNoIHJ1bGVzIGhhdmVcbi8vIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgc3R5bGVzaGVldFxudmFyIGluc2VydGVkID0gc3R5bGVTaGVldC5pbnNlcnRlZCA9IHt9O1xuXG4vLyBhbmQgaGVscGVycyB0byBpbnNlcnQgcnVsZXMgaW50byBzYWlkIHN0eWxlU2hlZXRcbmZ1bmN0aW9uIGluc2VydChzcGVjKSB7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gICAgdmFyIGRlY29uc3RydWN0ZWQgPSBkZWNvbnN0cnVjdChzcGVjLnN0eWxlKTtcbiAgICBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhzcGVjLmlkLCBkZWNvbnN0cnVjdGVkKS5tYXAoZnVuY3Rpb24gKGNzc1J1bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0Lmluc2VydChjc3NSdWxlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBhIHNpbXBsZSBjYWNoZSB0byBzdG9yZSBnZW5lcmF0ZWQgcnVsZXNcbnZhciByZWdpc3RlcmVkID0gc3R5bGVTaGVldC5yZWdpc3RlcmVkID0ge307XG5mdW5jdGlvbiByZWdpc3RlcihzcGVjKSB7XG4gIGlmICghcmVnaXN0ZXJlZFtzcGVjLmlkXSkge1xuICAgIHJlZ2lzdGVyZWRbc3BlYy5pZF0gPSBzcGVjO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRSZWdpc3RlcmVkKHJ1bGUpIHtcbiAgaWYgKGlzTGlrZVJ1bGUocnVsZSkpIHtcbiAgICB2YXIgcmV0ID0gcmVnaXN0ZXJlZFtpZEZvcihydWxlKV07XG4gICAgaWYgKHJldCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tnbGFtb3JdIGFuIHVuZXhwZWN0ZWQgcnVsZSBjYWNoZSBtaXNzIG9jY3VycmVkLiBUaGlzIGlzIHByb2JhYmx5IGEgc2lnbiBvZiBtdWx0aXBsZSBnbGFtb3IgaW5zdGFuY2VzIGluIHlvdXIgYXBwLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy83OScpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJldHVybiBydWxlO1xufVxuXG4vLyB0b2RvIC0gcGVyZlxudmFyIHJ1bGVDYWNoZSA9IHt9O1xuZnVuY3Rpb24gdG9SdWxlKHNwZWMpIHtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydChzcGVjKTtcbiAgaWYgKHJ1bGVDYWNoZVtzcGVjLmlkXSkge1xuICAgIHJldHVybiBydWxlQ2FjaGVbc3BlYy5pZF07XG4gIH1cblxuICB2YXIgcmV0ID0gX2RlZmluZVByb3BlcnR5KHt9LCAnZGF0YS1jc3MtJyArIHNwZWMuaWQsIGhhc0xhYmVscyA/IHNwZWMubGFiZWwgfHwgJycgOiAnJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsICd0b1N0cmluZycsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgcmV0dXJuICdjc3MtJyArIHNwZWMuaWQ7XG4gICAgfVxuICB9KTtcbiAgcnVsZUNhY2hlW3NwZWMuaWRdID0gcmV0O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb25zb2xlLmxvZyh0aGlzKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3Ioa2V5KSB7XG4gIHZhciBwb3NzaWJsZXMgPSBbJzonLCAnLicsICdbJywgJz4nLCAnICddLFxuICAgICAgZm91bmQgPSBmYWxzZSxcbiAgICAgIGNoID0ga2V5LmNoYXJBdCgwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NzaWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2ggPT09IHBvc3NpYmxlc1tpXSkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3VuZCB8fCBrZXkuaW5kZXhPZignJicpID49IDA7XG59XG5cbmZ1bmN0aW9uIGpvaW5TZWxlY3RvcnMoYSwgYikge1xuICB2YXIgYXMgPSBhLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuICEoYS5pbmRleE9mKCcmJykgPj0gMCkgPyAnJicgKyBhIDogYTtcbiAgfSk7XG4gIHZhciBicyA9IGIuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gIShiLmluZGV4T2YoJyYnKSA+PSAwKSA/ICcmJyArIGIgOiBiO1xuICB9KTtcblxuICByZXR1cm4gYnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGIpIHtcbiAgICByZXR1cm4gYXJyLmNvbmNhdChhcy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBiLnJlcGxhY2UoL1xcJi9nLCBhKTtcbiAgICB9KSk7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIGpvaW5NZWRpYVF1ZXJpZXMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAbWVkaWEgJyArIGEuc3Vic3RyaW5nKDYpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDYpIDogYjtcbn1cblxuZnVuY3Rpb24gaXNNZWRpYVF1ZXJ5KGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRzKGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BzdXBwb3J0cycpID09PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU3VwcG9ydHMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAc3VwcG9ydHMgJyArIGEuc3Vic3RyaW5nKDkpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDkpIDogYjtcbn1cblxuLy8gZmxhdHRlbiBhIG5lc3RlZCBhcnJheVxuZnVuY3Rpb24gZmxhdHRlbihpbkFycikge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5BcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbkFycltpXSkpIGFyciA9IGFyci5jb25jYXQoZmxhdHRlbihpbkFycltpXSkpO2Vsc2UgYXJyID0gYXJyLmNvbmNhdChpbkFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLy8gbXV0YWJsZSEgbW9kaWZpZXMgZGVzdC5cbmZ1bmN0aW9uIGJ1aWxkKGRlc3QsIF9yZWYyKSB7XG4gIHZhciBfcmVmMiRzZWxlY3RvciA9IF9yZWYyLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3IgPSBfcmVmMiRzZWxlY3RvciA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRzZWxlY3RvcixcbiAgICAgIF9yZWYyJG1xID0gX3JlZjIubXEsXG4gICAgICBtcSA9IF9yZWYyJG1xID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJG1xLFxuICAgICAgX3JlZjIkc3VwcCA9IF9yZWYyLnN1cHAsXG4gICAgICBzdXBwID0gX3JlZjIkc3VwcCA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRzdXBwLFxuICAgICAgX3JlZjIkc3JjID0gX3JlZjIuc3JjLFxuICAgICAgc3JjID0gX3JlZjIkc3JjID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYyJHNyYztcblxuXG4gIGlmICghQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgc3JjID0gW3NyY107XG4gIH1cbiAgc3JjID0gZmxhdHRlbihzcmMpO1xuXG4gIHNyYy5mb3JFYWNoKGZ1bmN0aW9uIChfc3JjKSB7XG4gICAgaWYgKGlzTGlrZVJ1bGUoX3NyYykpIHtcbiAgICAgIHZhciByZWcgPSBfZ2V0UmVnaXN0ZXJlZChfc3JjKTtcbiAgICAgIGlmIChyZWcudHlwZSAhPT0gJ2NzcycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgbWVyZ2UgdGhpcyBydWxlJyk7XG4gICAgICB9XG4gICAgICBfc3JjID0gcmVnLnN0eWxlO1xuICAgIH1cbiAgICBfc3JjID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoX3NyYyk7XG4gICAgaWYgKF9zcmMuY29tcG9zZXMpIHtcbiAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogbXEsIHN1cHA6IHN1cHAsIHNyYzogX3NyYy5jb21wb3NlcyB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoX3NyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoaXNTZWxlY3RvcihrZXkpKSB7XG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgPT09ICc6OnBsYWNlaG9sZGVyJyA/ICc6OnBsYWNlaG9sZGVyLCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIDo6LW1vei1wbGFjZWhvbGRlciwgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXInIDogc2VsZWN0b3I7XG5cbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogam9pblNlbGVjdG9ycyhzZWxlY3Rvciwga2V5KSwgbXE6IG1xLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZWRpYVF1ZXJ5KGtleSkpIHtcbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG1xOiBqb2luTWVkaWFRdWVyaWVzKG1xLCBrZXkpLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0cyhrZXkpKSB7XG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogbXEsIHN1cHA6IGpvaW5TdXBwb3J0cyhzdXBwLCBrZXkpLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnY29tcG9zZXMnKSB7XG4gICAgICAgIC8vIGlnbm9yZSwgd2UgYWxyZWFkeSBkZWFsdGggd2l0aCBpdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9kZXN0ID0gZGVzdDtcbiAgICAgICAgaWYgKHN1cHApIHtcbiAgICAgICAgICBfZGVzdFtzdXBwXSA9IF9kZXN0W3N1cHBdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3Rbc3VwcF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1xKSB7XG4gICAgICAgICAgX2Rlc3RbbXFdID0gX2Rlc3RbbXFdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3RbbXFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgIF9kZXN0W3NlbGVjdG9yXSA9IF9kZXN0W3NlbGVjdG9yXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdsYWJlbCcgJiYgaGFzTGFiZWxzKSB7XG4gICAgICAgICAgZGVzdC5sYWJlbCA9IGRlc3QubGFiZWwuY29uY2F0KF9zcmMubGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9kZXN0W2tleV0gPSBfc3JjW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9jc3MocnVsZXMpIHtcbiAgdmFyIHN0eWxlID0geyBsYWJlbDogW10gfTtcbiAgYnVpbGQoc3R5bGUsIHsgc3JjOiBydWxlcyB9KTsgLy8gbXV0YXRpdmUhIGJ1dCB3b3J0aCBpdC4gXG5cbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoc3R5bGUpLFxuICAgIHN0eWxlOiBzdHlsZSwgbGFiZWw6IHN0eWxlLmxhYmVsLmpvaW4oJy4nKSxcbiAgICB0eXBlOiAnY3NzJ1xuICB9O1xuICByZXR1cm4gdG9SdWxlKHNwZWMpO1xufVxuXG52YXIgbnVsbHJ1bGUgPSB7XG4gIC8vICdkYXRhLWNzcy1uaWwnOiAnJ1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShudWxscnVsZSwgJ3RvU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgIHJldHVybiAnY3NzLW5pbCc7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHJ1bGVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAocnVsZXNbMF0gJiYgcnVsZXNbMF0ubGVuZ3RoICYmIHJ1bGVzWzBdLnJhdykge1xuICAgIHRocm93IG5ldyBFcnJvcigneW91IGZvcmdvdCB0byBpbmNsdWRlIGdsYW1vci9iYWJlbCBpbiB5b3VyIGJhYmVsIHBsdWdpbnMuJyk7XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgaWYgKCFydWxlcykge1xuICAgIHJldHVybiBudWxscnVsZTsgLy8gdG9kbyAtIG51bGxydWxlIFxuICB9XG5cbiAgcmV0dXJuIF9jc3MocnVsZXMpO1xufVxuXG5jc3MuaW5zZXJ0ID0gZnVuY3Rpb24gKGNzcykge1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShjc3MpLFxuICAgIGNzczogY3NzLFxuICAgIHR5cGU6ICdyYXcnXG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgc3R5bGVTaGVldC5pbnNlcnQoc3BlYy5jc3MpO1xuICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGluc2VydFJ1bGUgPSBleHBvcnRzLmluc2VydFJ1bGUgPSBjc3MuaW5zZXJ0O1xuXG5jc3MuZ2xvYmFsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzdHlsZSkge1xuICByZXR1cm4gY3NzLmluc2VydChzZWxlY3RvciArICd7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykoc3R5bGUpICsgJ30nKTtcbn07XG5cbnZhciBpbnNlcnRHbG9iYWwgPSBleHBvcnRzLmluc2VydEdsb2JhbCA9IGNzcy5nbG9iYWw7XG5cbmZ1bmN0aW9uIGluc2VydEtleWZyYW1lKHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSBPYmplY3Qua2V5cyhzcGVjLmtleWZyYW1lcykubWFwKGZ1bmN0aW9uIChrZikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGx1Z2lucy5rZXlmcmFtZXMudHJhbnNmb3JtKHsgaWQ6IHNwZWMuaWQsIG5hbWU6IGtmLCBzdHlsZTogc3BlYy5rZXlmcmFtZXNba2ZdIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0Lm5hbWUgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHJlc3VsdC5zdHlsZSkgKyAnfSc7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnJ10uZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBzdHlsZVNoZWV0Lmluc2VydCgnQCcgKyBwcmVmaXggKyAna2V5ZnJhbWVzICcgKyAoc3BlYy5uYW1lICsgJ18nICsgc3BlYy5pZCkgKyAneycgKyBpbm5lciArICd9Jyk7XG4gICAgICB9KTtcblxuICAgICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICAgIH0pKCk7XG4gIH1cbn1cbmNzcy5rZXlmcmFtZXMgPSBmdW5jdGlvbiAobmFtZSwga2ZzKSB7XG4gIGlmICgha2ZzKSB7XG4gICAga2ZzID0gbmFtZSwgbmFtZSA9ICdhbmltYXRpb24nO1xuICB9XG5cbiAgLy8gZG8gbm90IGlnbm9yZSBlbXB0eSBrZXlmcmFtZSBkZWZpbml0aW9ucyBmb3Igbm93LlxuICBrZnMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShrZnMpIHx8IHt9O1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShuYW1lLCBrZnMpLFxuICAgIHR5cGU6ICdrZXlmcmFtZXMnLFxuICAgIG5hbWU6IG5hbWUsXG4gICAga2V5ZnJhbWVzOiBrZnNcbiAgfTtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydEtleWZyYW1lKHNwZWMpO1xuICByZXR1cm4gbmFtZSArICdfJyArIHNwZWMuaWQ7XG59O1xuXG52YXIgZm9udEZhY2UgPSBleHBvcnRzLmZvbnRGYWNlID0gY3NzLmZvbnRGYWNlO1xudmFyIGtleWZyYW1lcyA9IGV4cG9ydHMua2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcztcblxuZnVuY3Rpb24gaW5zZXJ0Rm9udEZhY2Uoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgc3R5bGVTaGVldC5pbnNlcnQoJ0Bmb250LWZhY2V7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykoc3BlYy5mb250KSArICd9Jyk7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICB9XG59XG5cbi8vIHdlIGRvbid0IGdvIGFsbCBvdXQgZm9yIGZvbnRzIGFzIG11Y2gsIGdpdmluZyBhIHNpbXBsZSBmb250IGxvYWRpbmcgc3RyYXRlZ3lcbi8vIHVzZSBhIGZhbmNpZXIgbGliIGlmIHlvdSBuZWVkIG1vYXIgcG93ZXJcbmNzcy5mb250RmFjZSA9IGZ1bmN0aW9uIChmb250KSB7XG4gIGZvbnQgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShmb250KTtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoZm9udCksXG4gICAgdHlwZTogJ2ZvbnQtZmFjZScsXG4gICAgZm9udDogZm9udFxuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaW5zZXJ0Rm9udEZhY2Uoc3BlYyk7XG5cbiAgcmV0dXJuIGZvbnQuZm9udEZhbWlseTtcbn07XG5cbi8vIHJlaHlkcmF0ZSB0aGUgaW5zZXJ0aW9uIGNhY2hlIHdpdGggaWRzIHNlbnQgZnJvbVxuLy8gcmVuZGVyU3RhdGljIC8gcmVuZGVyU3RhdGljT3B0aW1pemVkXG5mdW5jdGlvbiByZWh5ZHJhdGUoaWRzKSB7XG4gIC8vIGxvYWQgdXAgaWRzXG4gIE9iamVjdC5hc3NpZ24oaW5zZXJ0ZWQsIGlkcy5yZWR1Y2UoZnVuY3Rpb24gKG8sIGkpIHtcbiAgICByZXR1cm4gb1tpXSA9IHRydWUsIG87XG4gIH0sIHt9KSk7XG4gIC8vIGFzc3VtZSBjc3MgbG9hZGVkIHNlcGFyYXRlbHlcbn1cblxuLy8gY2xlYXJzIG91dCB0aGUgY2FjaGUgYW5kIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXRcbi8vIGJlc3QgZm9yIHRlc3RzLCB0aG91Z2ggdGhlcmUgbWlnaHQgYmUgc29tZSB2YWx1ZSBmb3IgU1NSLlxuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgaW5zZXJ0ZWQgPSBzdHlsZVNoZWV0Lmluc2VydGVkID0ge307XG4gIHJlZ2lzdGVyZWQgPSBzdHlsZVNoZWV0LnJlZ2lzdGVyZWQgPSB7fTtcbiAgcnVsZUNhY2hlID0ge307XG4gIHN0eWxlU2hlZXQuZmx1c2goKTtcbiAgc3R5bGVTaGVldC5pbmplY3QoKTtcbn1cblxudmFyIHByZXNldHMgPSBleHBvcnRzLnByZXNldHMgPSB7XG4gIG1vYmlsZTogJyhtaW4td2lkdGg6IDQwMHB4KScsXG4gIE1vYmlsZTogJ0BtZWRpYSAobWluLXdpZHRoOiA0MDBweCknLFxuICBwaGFibGV0OiAnKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgUGhhYmxldDogJ0BtZWRpYSAobWluLXdpZHRoOiA1NTBweCknLFxuICB0YWJsZXQ6ICcobWluLXdpZHRoOiA3NTBweCknLFxuICBUYWJsZXQ6ICdAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgZGVza3RvcDogJyhtaW4td2lkdGg6IDEwMDBweCknLFxuICBEZXNrdG9wOiAnQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCknLFxuICBoZDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICBIZDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJ1xufTtcblxudmFyIHN0eWxlID0gZXhwb3J0cy5zdHlsZSA9IGNzcztcblxuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIHN0eWxlc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc3R5bGUoc3R5bGVzKTtcbiAgfVxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0b3IsIHN0eWxlcykpO1xufVxudmFyICQgPSBleHBvcnRzLiQgPSBzZWxlY3Q7XG5cbmZ1bmN0aW9uIHBhcmVudChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBzdHlsZXNbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0b3IgKyAnICYnLCBzdHlsZXMpKTtcbn1cblxudmFyIG1lcmdlID0gZXhwb3J0cy5tZXJnZSA9IGNzcztcbnZhciBjb21wb3NlID0gZXhwb3J0cy5jb21wb3NlID0gY3NzO1xuXG5mdW5jdGlvbiBtZWRpYShxdWVyeSkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjYgPiAxID8gX2xlbjYgLSAxIDogMCksIF9rZXk2ID0gMTsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIHJ1bGVzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sICdAbWVkaWEgJyArIHF1ZXJ5LCBydWxlcykpO1xufVxuXG5mdW5jdGlvbiBwc2V1ZG8oc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgc3R5bGVzW19rZXk3IC0gMV0gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yLCBzdHlsZXMpKTtcbn1cblxuLy8gYWxsbGxsbCB0aGUgcHNldWRvY2xhc3Nlc1xuXG5mdW5jdGlvbiBhY3RpdmUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6YWN0aXZlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGFueSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzphbnknLCB4KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpjaGVja2VkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmRpc2FibGVkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmVtcHR5JywgeCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZW5hYmxlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBfZGVmYXVsdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkZWZhdWx0JywgeCk7IC8vIG5vdGUgJ19kZWZhdWx0JyBuYW1lXG59XG5cbmZ1bmN0aW9uIGZpcnN0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0JywgeCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zmlyc3QtY2hpbGQnLCB4KTtcbn1cblxuZnVuY3Rpb24gZmlyc3RPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zmlyc3Qtb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBmdWxsc2NyZWVuKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZ1bGxzY3JlZW4nLCB4KTtcbn1cblxuZnVuY3Rpb24gZm9jdXMoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zm9jdXMnLCB4KTtcbn1cblxuZnVuY3Rpb24gaG92ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aG92ZXInLCB4KTtcbn1cblxuZnVuY3Rpb24gaW5kZXRlcm1pbmF0ZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzppbmRldGVybWluYXRlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW4tcmFuZ2UnLCB4KTtcbn1cblxuZnVuY3Rpb24gaW52YWxpZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzppbnZhbGlkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxhc3RDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsYXN0LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxhc3RPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFzdC1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxlZnQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGVmdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsaW5rKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxpbmsnLCB4KTtcbn1cblxuZnVuY3Rpb24gb25seUNoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9ubHktY2hpbGQnLCB4KTtcbn1cblxuZnVuY3Rpb24gb25seU9mVHlwZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvbmx5LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gb3B0aW9uYWwoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b3B0aW9uYWwnLCB4KTtcbn1cblxuZnVuY3Rpb24gb3V0T2ZSYW5nZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvdXQtb2YtcmFuZ2UnLCB4KTtcbn1cblxuZnVuY3Rpb24gcmVhZE9ubHkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVhZC1vbmx5JywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRXcml0ZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZWFkLXdyaXRlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlcXVpcmVkJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJpZ2h0JywgeCk7XG59XG5cbmZ1bmN0aW9uIHJvb3QoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cm9vdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBzY29wZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpzY29wZScsIHgpO1xufVxuXG5mdW5jdGlvbiB0YXJnZXQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6dGFyZ2V0JywgeCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnZhbGlkJywgeCk7XG59XG5cbmZ1bmN0aW9uIHZpc2l0ZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6dmlzaXRlZCcsIHgpO1xufVxuXG4vLyBwYXJhbWV0ZXJpemVkIHBzZXVkb2NsYXNzZXNcbmZ1bmN0aW9uIGRpcihwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkaXIoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbGFuZyhwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsYW5nKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG5vdChwLCB4KSB7XG4gIC8vIHNob3VsZCB0aGlzIGJlIGEgcGx1Z2luP1xuICB2YXIgc2VsZWN0b3IgPSBwLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHgudHJpbSgpO1xuICB9KS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gJzpub3QoJyArIHggKyAnKSc7XG4gIH0pO1xuICBpZiAoc2VsZWN0b3IubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHBzZXVkbygnOm5vdCgnICsgcCArICcpJywgeCk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvci5qb2luKCcnKSwgeCk7XG59XG5mdW5jdGlvbiBudGhDaGlsZChwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtY2hpbGQoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoTGFzdENoaWxkKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1sYXN0LWNoaWxkKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aExhc3RPZlR5cGUocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWxhc3Qtb2YtdHlwZSgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLW9mLXR5cGUoJyArIHAgKyAnKScsIHgpO1xufVxuXG4vLyBwc2V1ZG9lbGVtZW50c1xuZnVuY3Rpb24gYWZ0ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmFmdGVyJywgeCk7XG59XG5mdW5jdGlvbiBiZWZvcmUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmJlZm9yZScsIHgpO1xufVxuZnVuY3Rpb24gZmlyc3RMZXR0ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmZpcnN0LWxldHRlcicsIHgpO1xufVxuZnVuY3Rpb24gZmlyc3RMaW5lKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpmaXJzdC1saW5lJywgeCk7XG59XG5mdW5jdGlvbiBzZWxlY3Rpb24oeCkge1xuICByZXR1cm4gcHNldWRvKCc6OnNlbGVjdGlvbicsIHgpO1xufVxuZnVuY3Rpb24gYmFja2Ryb3AoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmJhY2tkcm9wJywgeCk7XG59XG5mdW5jdGlvbiBwbGFjZWhvbGRlcih4KSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9pc3N1ZXMvMTRcbiAgcmV0dXJuIGNzcyh7ICc6OnBsYWNlaG9sZGVyJzogeCB9KTtcbn1cblxuLyoqKiBoZWxwZXJzIGZvciB3ZWIgY29tcG9uZW50cyAqKiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzE2XG5cbmZ1bmN0aW9uIGNzc0ZvcigpIHtcbiAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgcnVsZXNbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJ1bGVzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocnVsZXMpO1xuICByZXR1cm4gcnVsZXMgPyBydWxlcy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICB2YXIgc3R5bGUgPSB7IGxhYmVsOiBbXSB9O1xuICAgIGJ1aWxkKHN0eWxlLCB7IHNyYzogciB9KTsgLy8gbXV0YXRpdmUhIGJ1dCB3b3J0aCBpdC4gICBcbiAgICByZXR1cm4gZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaGFzaGlmeShzdHlsZSksIGRlY29uc3RydWN0KHN0eWxlKSkuam9pbignJyk7XG4gIH0pLmpvaW4oJycpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnNGb3IoKSB7XG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuOSksIF9rZXk5ID0gMDsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIHJ1bGVzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgdmFyIGh0bWxBdHRyaWJ1dGVzID0gcnVsZXMgPyBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZEZvcihydWxlKTsgLy8gdGhyb3dhd2F5IGNoZWNrIGZvciBydWxlXG4gICAgdmFyIGtleSA9IE9iamVjdC5rZXlzKHJ1bGUpWzBdLFxuICAgICAgICB2YWx1ZSA9IHJ1bGVba2V5XTtcbiAgICByZXR1cm4ga2V5ICsgJz1cIicgKyAodmFsdWUgfHwgJycpICsgJ1wiJztcbiAgfSkuam9pbignICcpIDogJyc7XG5cbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihleHBvcnRzKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOiBnbG9iYWwuSW5saW5lU3R5bGVQcmVmaXhBbGwgPSBmYWN0b3J5KCk7XG59KSh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBiYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIGJhYmVsSGVscGVycy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzO1xuXG4gIGZ1bmN0aW9uIF9fY29tbW9uanMoZm4sIG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBwcmVmaXhQcm9wcyA9IHsgXCJXZWJraXRcIjogeyBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IHRydWUsIFwicGVyc3BlY3RpdmVcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybVN0eWxlXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiB0cnVlLCBcImFuaW1hdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkRlbGF5XCI6IHRydWUsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogdHJ1ZSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsIFwiYW5pbWF0aW9uTmFtZVwiOiB0cnVlLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiB0cnVlLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJmb250S2VybmluZ1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiB0cnVlLCBcImJveERlY29yYXRpb25CcmVha1wiOiB0cnVlLCBcImNsaXBQYXRoXCI6IHRydWUsIFwibWFza0ltYWdlXCI6IHRydWUsIFwibWFza01vZGVcIjogdHJ1ZSwgXCJtYXNrUmVwZWF0XCI6IHRydWUsIFwibWFza1Bvc2l0aW9uXCI6IHRydWUsIFwibWFza0NsaXBcIjogdHJ1ZSwgXCJtYXNrT3JpZ2luXCI6IHRydWUsIFwibWFza1NpemVcIjogdHJ1ZSwgXCJtYXNrQ29tcG9zaXRlXCI6IHRydWUsIFwibWFza1wiOiB0cnVlLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyTW9kZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJTbGljZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IHRydWUsIFwibWFza0JvcmRlclwiOiB0cnVlLCBcIm1hc2tUeXBlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJmaWx0ZXJcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlLCBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogdHJ1ZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogdHJ1ZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogdHJ1ZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiB0cnVlLCBcImFsaWduSXRlbXNcIjogdHJ1ZSwgXCJhbGlnblNlbGZcIjogdHJ1ZSwgXCJqdXN0aWZ5Q29udGVudFwiOiB0cnVlLCBcIm9yZGVyXCI6IHRydWUsIFwiYmFja2Ryb3BGaWx0ZXJcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogdHJ1ZSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IHRydWUsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvbkRlbGF5XCI6IHRydWUsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IHRydWUsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUgfSwgXCJNb3pcIjogeyBcImFwcGVhcmFuY2VcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwiYm94U2l6aW5nXCI6IHRydWUsIFwidGV4dEFsaWduTGFzdFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IHRydWUsIFwidGFiU2l6ZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlIH0sIFwibXNcIjogeyBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogZmFsc2UsIFwiZmxleERpcmVjdGlvblwiOiB0cnVlLCBcImZsZXhHcm93XCI6IGZhbHNlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiBmYWxzZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiBmYWxzZSwgXCJhbGlnbkl0ZW1zXCI6IGZhbHNlLCBcImFsaWduU2VsZlwiOiBmYWxzZSwgXCJqdXN0aWZ5Q29udGVudFwiOiBmYWxzZSwgXCJvcmRlclwiOiBmYWxzZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwid3JhcEZsb3dcIjogdHJ1ZSwgXCJ3cmFwVGhyb3VnaFwiOiB0cnVlLCBcIndyYXBNYXJnaW5cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInRvdWNoQWN0aW9uXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVwiOiB0cnVlLCBcImdyaWRBdXRvQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRBdXRvUm93c1wiOiB0cnVlLCBcImdyaWRBdXRvRmxvd1wiOiB0cnVlLCBcImdyaWRcIjogdHJ1ZSwgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSwgXCJncmlkUm93RW5kXCI6IHRydWUsIFwiZ3JpZFJvd1wiOiB0cnVlLCBcImdyaWRDb2x1bW5cIjogdHJ1ZSwgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsIFwiZ3JpZENvbHVtbkdhcFwiOiB0cnVlLCBcImdyaWRSb3dHYXBcIjogdHJ1ZSwgXCJncmlkQXJlYVwiOiB0cnVlLCBcImdyaWRHYXBcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0gfTtcblxuICAvLyBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBzdHJpbmdzXG4gIHZhciBjYXBpdGFsaXplU3RyaW5nID0gZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuXG4gIHZhciBpc1ByZWZpeGVkUHJvcGVydHkgPSBmdW5jdGlvbiBpc1ByZWZpeGVkUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14oV2Via2l0fE1venxPfG1zKS8pICE9PSBudWxsO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNvcnRQcmVmaXhlZFN0eWxlKHN0eWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgaWYgKGlzUHJlZml4ZWRQcm9wZXJ0eShsZWZ0KSAmJiAhaXNQcmVmaXhlZFByb3BlcnR5KHJpZ2h0KSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKCFpc1ByZWZpeGVkUHJvcGVydHkobGVmdCkgJiYgaXNQcmVmaXhlZFByb3BlcnR5KHJpZ2h0KSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoc29ydGVkU3R5bGUsIHByb3ApIHtcbiAgICAgIHNvcnRlZFN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgICByZXR1cm4gc29ydGVkU3R5bGU7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgICAgcmV0dXJuIHsgcG9zaXRpb246IFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J10gfTtcbiAgICB9XG4gIH1cblxuICAvLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG4gIHZhciBqb2luUHJlZml4ZWRWYWx1ZSA9IGZ1bmN0aW9uIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciByZXBsYWNlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcmVwbGFjZXIocHJlZml4LCB2YWx1ZSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIHZhciBpc1ByZWZpeGVkVmFsdWUgPSBmdW5jdGlvbiBpc1ByZWZpeGVkVmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignLCcpO1xuXG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8td2Via2l0LXwtbW96LXwtbXMtLykgIT09IG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bmN0aW9uIChwcmVmaXgsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyA9IHtcbiAgICAnem9vbS1pbic6IHRydWUsXG4gICAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgICBncmFiOiB0cnVlLFxuICAgIGdyYWJiaW5nOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyQxID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbiAgZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXMkMVt2YWx1ZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICBtYXhIZWlnaHQ6IHRydWUsXG4gICAgbWF4V2lkdGg6IHRydWUsXG4gICAgd2lkdGg6IHRydWUsXG4gICAgaGVpZ2h0OiB0cnVlLFxuICAgIGNvbHVtbldpZHRoOiB0cnVlLFxuICAgIG1pbldpZHRoOiB0cnVlLFxuICAgIG1pbkhlaWdodDogdHJ1ZVxuICB9O1xuICB2YXIgdmFsdWVzJDIgPSB7XG4gICAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAgICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiB2YWx1ZXMkMlt2YWx1ZV0pIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWx1ZXMkMyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbiAgZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkgJiYgdmFsdWUubWF0Y2godmFsdWVzJDMpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5kZXggPSBfX2NvbW1vbmpzKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xuICAgIHZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4gICAgdmFyIGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nIGluIGNhY2hlID8gY2FjaGVbc3RyaW5nXSA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmcucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGh5cGhlbmF0ZVN0eWxlTmFtZSA9IGluZGV4ICYmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGluZGV4KSkgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBpbmRleCA/IGluZGV4WydkZWZhdWx0J10gOiBpbmRleDtcblxuICB2YXIgcHJvcGVydGllcyQxID0ge1xuICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICAgIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gICAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllcyQxW3Byb3BlcnR5XSkge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goLy1tb3otfC1tcy0vKSA9PT0gbnVsbDtcbiAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdXZWJraXQnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCB3ZWJraXRPdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlZjIgPSB7fSwgYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5KF9yZWYyLCAnV2Via2l0JyArIGNhcGl0YWxpemVTdHJpbmcocHJvcGVydHkpLCB3ZWJraXRPdXRwdXQpLCBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoX3JlZjIsIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSksIF9yZWYyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgIC8vIGl0ZXJhdGUgZWFjaCBzaW5nbGUgdmFsdWUgYW5kIGNoZWNrIGZvciB0cmFuc2l0aW9uZWQgcHJvcGVydGllc1xuICAgIC8vIHRoYXQgbmVlZCB0byBiZSBwcmVmaXhlZCBhcyB3ZWxsXG4gICAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gT2JqZWN0LmtleXMocHJlZml4UHJvcHMpLnJlZHVjZShmdW5jdGlvbiAob3V0LCBwcmVmaXgpIHtcbiAgICAgICAgdmFyIGRhc2hDYXNlUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocHJlZml4UHJvcHNbcHJlZml4XSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHByb3ApO1xuXG4gICAgICAgICAgaWYgKHZhbC5pbmRleE9mKGRhc2hDYXNlUHJvcGVydHkpID4gLTEgJiYgZGFzaENhc2VQcm9wZXJ0eSAhPT0gJ29yZGVyJykge1xuICAgICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgICAgb3V0ID0gdmFsLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgZGFzaENhc2VQcmVmaXggKyBkYXNoQ2FzZVByb3BlcnR5KSArICcsJyArIG91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgfSwgdmFsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICB2YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdkaXN0cmlidXRlJyxcbiAgICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICAgJ2ZsZXgtZW5kJzogJ2VuZCdcbiAgfTtcbiAgdmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gICAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICAgIGFsaWduU2VsZjogJ21zRmxleEl0ZW1BbGlnbicsXG4gICAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICAgIG9yZGVyOiAnbXNGbGV4T3JkZXInLFxuICAgIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICAgIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gICAgZmxleEJhc2lzOiAnbXNQcmVmZXJyZWRTaXplJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsZXhib3hJRShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhbHRlcm5hdGl2ZVZhbHVlcyQxID0ge1xuICAgICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAgICdmbGV4LWVuZCc6ICdlbmQnLFxuICAgICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICAgIHdyYXA6ICdtdWx0aXBsZSdcbiAgfTtcblxuICB2YXIgYWx0ZXJuYXRpdmVQcm9wcyQxID0ge1xuICAgIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnZmxleERpcmVjdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wcyQxW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wcyQxW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXMkMVt2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwbHVnaW5zID0gW3Bvc2l0aW9uLCBjYWxjLCBjdXJzb3IsIHNpemluZywgZ3JhZGllbnQsIHRyYW5zaXRpb24sIGZsZXhib3hJRSwgZmxleGJveE9sZCwgZmxleF07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIC0gU3R5bGUgb2JqZWN0IHRoYXQgZ2V0cyBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFkZGVkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAqL1xuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBwcmVmaXhBbGwodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJlZml4UHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gcHJlZml4UHJvcHNbcHJlZml4XTtcbiAgICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZXNbcHJlZml4ICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIFtdLmNvbmNhdChzdHlsZXNbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgLy8gcmVzb2x2ZSBldmVyeSBzcGVjaWFsIHBsdWdpbnNcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICByZXR1cm4gYXNzaWduU3R5bGVzKHN0eWxlcywgcGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvcnRQcmVmaXhlZFN0eWxlKHN0eWxlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25TdHlsZXMoYmFzZSkge1xuICAgIHZhciBleHRlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZVZhbHVlKSkge1xuICAgICAgICBbXS5jb25jYXQoZXh0ZW5kW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IGJhc2VWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICBpZiAodmFsdWVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJhc2VbcHJvcGVydHldLnB1c2godmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VbcHJvcGVydHldID0gZXh0ZW5kW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVmaXhBbGw7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbHVnaW5TZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5mYWxsYmFja3MgPSBmYWxsYmFja3M7XG5leHBvcnRzLnByZWZpeGVzID0gcHJlZml4ZXM7XG5cbnZhciBfQ1NTUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGlzRGV2ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHggPT09ICdkZXZlbG9wbWVudCcgfHwgIXg7XG59KHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxudmFyIFBsdWdpblNldCA9IGV4cG9ydHMuUGx1Z2luU2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW5TZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdWdpblNldCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW5pdGlhbCA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW5pdGlhbFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLmZucyA9IGluaXRpYWwgfHwgW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGx1Z2luU2V0LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZm5zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAoX3RoaXMuZm5zLmluZGV4T2YoZm4pID49IDApIHtcbiAgICAgICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYWRkaW5nIHRoZSBzYW1lIHBsdWdpbiBhZ2FpbiwgaWdub3JpbmcnKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm5zID0gW2ZuXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmZucykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZm4pIHtcbiAgICAgIHRoaXMuZm5zID0gdGhpcy5mbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBmbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmZucyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyYW5zZm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShvKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbnMucmVkdWNlKGZ1bmN0aW9uIChvLCBmbikge1xuICAgICAgICByZXR1cm4gZm4obyk7XG4gICAgICB9LCBvKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGx1Z2luU2V0O1xufSgpO1xuXG5mdW5jdGlvbiBmYWxsYmFja3Mobm9kZSkge1xuICB2YXIgaGFzQXJyYXkgPSBPYmplY3Qua2V5cyhub2RlLnN0eWxlKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLnN0eWxlW3hdKTtcbiAgfSkuaW5kZXhPZih0cnVlKSA+PSAwO1xuICBpZiAoaGFzQXJyYXkpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBbJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgZmxhdHRlbmVkID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobywga2V5KSB7XG4gICAgICAgIG9ba2V5XSA9IEFycmF5LmlzQXJyYXkoc3R5bGVba2V5XSkgPyBzdHlsZVtrZXldLmpvaW4oJzsgJyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLnByb2Nlc3NTdHlsZU5hbWUpKGtleSkgKyAnOiAnKSA6IHN0eWxlW2tleV07XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSwge30pO1xuICAgICAgLy8gdG9kbyAtIFxuICAgICAgLy8gZmxhdHRlbiBhcnJheXMgd2hpY2ggaGF2ZW4ndCBiZWVuIGZsYXR0ZW5lZCB5ZXQgXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBfZXh0ZW5kcyh7IHN0eWxlOiBmbGF0dGVuZWQgfSwgcmVzdClcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgcHJlZml4QWxsID0gcmVxdWlyZSgnLi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qcycpO1xuXG5mdW5jdGlvbiBwcmVmaXhlcyhfcmVmKSB7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnc3R5bGUnXSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHsgc3R5bGU6IHByZWZpeEFsbChzdHlsZSkgfSwgcmVzdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvcGx1Z2lucy5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TdHlsZVNoZWV0ID0gU3R5bGVTaGVldDtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbi8qIFxuXG5oaWdoIHBlcmZvcm1hbmNlIFN0eWxlU2hlZXQgZm9yIGNzcy1pbi1qcyBzeXN0ZW1zIFxuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXMgXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuLSAncG9seWZpbGxzJyBvbiBzZXJ2ZXIgc2lkZSBcblxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgU3R5bGVTaGVldCBmcm9tICdnbGFtb3IvbGliL3NoZWV0J1xubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCgpXG5cbnN0eWxlU2hlZXQuaW5qZWN0KCkgXG4tICdpbmplY3RzJyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlIChvciBpbnRvIG1lbW9yeSBpZiBvbiBzZXJ2ZXIpXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9JykgXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0IFxuXG5zdHlsZVNoZWV0LmZsdXNoKCkgXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG5cbiovXG5cbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH1cblxuICAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94IFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVjsgLy8oeCA9PiAoeCA9PT0gJ2RldmVsb3BtZW50JykgfHwgIXgpKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG5cbnZhciBvbGRJRSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgbHQgSUUgMTBdPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgIHJldHVybiBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKS5sZW5ndGggPT09IDE7XG4gIH1cbn0oKTtcblxuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKCkge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSkuYXBwZW5kQ2hpbGQodGFnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxuZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRzcGVlZHkgPSBfcmVmLnNwZWVkeSxcbiAgICAgIHNwZWVkeSA9IF9yZWYkc3BlZWR5ID09PSB1bmRlZmluZWQgPyAhaXNEZXYgJiYgIWlzVGVzdCA6IF9yZWYkc3BlZWR5LFxuICAgICAgX3JlZiRtYXhMZW5ndGggPSBfcmVmLm1heExlbmd0aCxcbiAgICAgIG1heExlbmd0aCA9IF9yZWYkbWF4TGVuZ3RoID09PSB1bmRlZmluZWQgPyBpc0Jyb3dzZXIgJiYgb2xkSUUgPyA0MDAwIDogNjUwMDAgOiBfcmVmJG1heExlbmd0aDtcblxuICB0aGlzLmlzU3BlZWR5ID0gc3BlZWR5OyAvLyB0aGUgYmlnIGRyYXdiYWNrIGhlcmUgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gIHRoaXMuc2hlZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMudGFncyA9IFtdO1xuICB0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgdGhpcy5jdHIgPSAwO1xufVxuXG5PYmplY3QuYXNzaWduKFN0eWxlU2hlZXQucHJvdG90eXBlLCB7XG4gIGdldFNoZWV0OiBmdW5jdGlvbiBnZXRTaGVldCgpIHtcbiAgICByZXR1cm4gc2hlZXRGb3JUYWcobGFzdCh0aGlzLnRhZ3MpKTtcbiAgfSxcbiAgaW5qZWN0OiBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLmluamVjdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgaW5qZWN0ZWQgc3R5bGVzaGVldCEnKTtcbiAgICB9XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50YWdzWzBdID0gbWFrZVN0eWxlVGFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlcnZlciBzaWRlICdwb2x5ZmlsbCcuIGp1c3QgZW5vdWdoIGJlaGF2aW9yIHRvIGJlIHVzZWZ1bC5cbiAgICAgIHRoaXMuc2hlZXQgPSB7XG4gICAgICAgIGNzc1J1bGVzOiBbXSxcbiAgICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgICAgICAgLy8gZW5vdWdoICdzcGVjIGNvbXBsaWFuY2UnIHRvIGJlIGFibGUgdG8gZXh0cmFjdCB0aGUgcnVsZXMgbGF0ZXIgIFxuICAgICAgICAgIC8vIGluIG90aGVyIHdvcmRzLCBqdXN0IHRoZSBjc3NUZXh0IGZpZWxkIFxuICAgICAgICAgIF90aGlzLnNoZWV0LmNzc1J1bGVzLnB1c2goeyBjc3NUZXh0OiBydWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gdHJ1ZTtcbiAgfSxcbiAgc3BlZWR5OiBmdW5jdGlvbiBzcGVlZHkoYm9vbCkge1xuICAgIGlmICh0aGlzLmN0ciAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2hhbmdlIHNwZWVkeSBtb2RlIGFmdGVyIGluc2VydGluZyBhbnkgcnVsZSB0byBzaGVldC4gRWl0aGVyIGNhbGwgc3BlZWR5KCcgKyBib29sICsgJykgZWFybGllciBpbiB5b3VyIGFwcCwgb3IgY2FsbCBmbHVzaCgpIGJlZm9yZSBzcGVlZHkoJyArIGJvb2wgKyAnKScpO1xuICAgIH1cbiAgICB0aGlzLmlzU3BlZWR5ID0gISFib29sO1xuICB9LFxuICBfaW5zZXJ0OiBmdW5jdGlvbiBfaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1ZyBcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAgIHRyeSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG4gICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7IC8vIHRvZG8gLSBjb3JyZWN0IGluZGV4IGhlcmUgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChpc0Rldikge1xuICAgICAgICAvLyBtaWdodCBuZWVkIGJldGVyIGR4IGZvciB0aGlzIFxuICAgICAgICBjb25zb2xlLndhcm4oJ3dob29wcywgaWxsZWdhbCBydWxlIGluc2VydGVkJywgcnVsZSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzIFxuICAgICAgaWYgKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5nZXRTaGVldCgpLmluc2VydFJ1bGUpIHtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHJ1bGUpO1xuICAgICAgfVxuICAgICAgLy8gbW9yZSBicm93c2VyIHdlaXJkbmVzcy4gSSBkb24ndCBldmVuIGtub3cgICAgXG4gICAgICAvLyBlbHNlIGlmKHRoaXMudGFncy5sZW5ndGggPiAwICYmIHRoaXMudGFnczo6bGFzdCgpLnN0eWxlU2hlZXQpIHsgICAgICBcbiAgICAgIC8vICAgdGhpcy50YWdzOjpsYXN0KCkuc3R5bGVTaGVldC5jc3NUZXh0Kz0gcnVsZVxuICAgICAgLy8gfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgbGFzdCh0aGlzLnRhZ3MpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBpcyBwcmV0dHkgc2ltcGxlICAgICAgICAgXG4gICAgICB0aGlzLnNoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgICBpZiAoaXNCcm93c2VyICYmIHRoaXMuY3RyICUgdGhpcy5tYXhMZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudGFncy5wdXNoKG1ha2VTdHlsZVRhZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3RyIC0gMTtcbiAgfSxcblxuICAvLyBjb21tZW50aW5nIHRoaXMgb3V0IHRpbGwgd2UgZGVjaWRlIG9uIHYzJ3MgZGVjaXNpb24gXG4gIC8vIF9yZXBsYWNlKGluZGV4LCBydWxlKSB7XG4gIC8vICAgLy8gdGhpcyB3ZWlyZG5lc3MgZm9yIHBlcmYsIGFuZCBjaHJvbWUncyB3ZWlyZCBidWcgXG4gIC8vICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcbiAgLy8gICB0cnkgeyAgXG4gIC8vICAgICBsZXQgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCkgICAgICAgIFxuICAvLyAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCkgLy8gdG9kbyAtIGNvcnJlY3QgaW5kZXggaGVyZSAgICAgXG4gIC8vICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KVxuICAvLyAgIH1cbiAgLy8gICBjYXRjaChlKSB7XG4gIC8vICAgICBpZihpc0Rldikge1xuICAvLyAgICAgICAvLyBtaWdodCBuZWVkIGJldGVyIGR4IGZvciB0aGlzIFxuICAvLyAgICAgICBjb25zb2xlLndhcm4oJ3dob29wcywgcHJvYmxlbSByZXBsYWNpbmcgcnVsZScsIHJ1bGUpIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIC8vICAgICB9ICAgICAgICAgIFxuICAvLyAgIH0gICAgICAgICAgXG5cbiAgLy8gfVxuICAvLyByZXBsYWNlKGluZGV4LCBydWxlKSB7XG4gIC8vICAgaWYoaXNCcm93c2VyKSB7XG4gIC8vICAgICBpZih0aGlzLmlzU3BlZWR5ICYmIHRoaXMuZ2V0U2hlZXQoKS5pbnNlcnRSdWxlKSB7XG4gIC8vICAgICAgIHRoaXMuX3JlcGxhY2UoaW5kZXgsIHJ1bGUpXG4gIC8vICAgICB9XG4gIC8vICAgICBlbHNlIHtcbiAgLy8gICAgICAgbGV0IF9zbG90ID0gTWF0aC5mbG9vcigoaW5kZXggICsgdGhpcy5tYXhMZW5ndGgpIC8gdGhpcy5tYXhMZW5ndGgpIC0gMSAgICAgICAgXG4gIC8vICAgICAgIGxldCBfaW5kZXggPSAoaW5kZXggJSB0aGlzLm1heExlbmd0aCkgKyAxXG4gIC8vICAgICAgIGxldCB0YWcgPSB0aGlzLnRhZ3NbX3Nsb3RdXG4gIC8vICAgICAgIHRhZy5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSksIHRhZy5jaGlsZE5vZGVzW19pbmRleF0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGVsc2Uge1xuICAvLyAgICAgbGV0IHJ1bGVzID0gdGhpcy5zaGVldC5jc3NSdWxlc1xuICAvLyAgICAgdGhpcy5zaGVldC5jc3NSdWxlcyA9IFsgLi4ucnVsZXMuc2xpY2UoMCwgaW5kZXgpLCB7IGNzc1RleHQ6IHJ1bGUgfSwgLi4ucnVsZXMuc2xpY2UoaW5kZXggKyAxKSBdXG4gIC8vICAgfVxuICAvLyB9XG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShpbmRleCkge1xuICAgIC8vIHdlIGluc2VydCBhIGJsYW5rIHJ1bGUgd2hlbiAnZGVsZXRpbmcnIHNvIHByZXZpb3VzbHkgcmV0dXJuZWQgaW5kZXhlcyByZW1haW4gc3RhYmxlXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShpbmRleCwgJycpO1xuICB9LFxuICBmbHVzaDogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YWdzID0gW107XG4gICAgICB0aGlzLnNoZWV0ID0gbnVsbDtcbiAgICAgIHRoaXMuY3RyID0gMDtcbiAgICAgIC8vIHRvZG8gLSBsb29rIGZvciByZW1uYW50cyBpbiBkb2N1bWVudC5zdHlsZVNoZWV0c1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlciBcbiAgICAgIHRoaXMuc2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5pbmplY3RlZCA9IGZhbHNlO1xuICB9LFxuICBydWxlczogZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNoZWV0LmNzc1J1bGVzO1xuICAgIH1cbiAgICB2YXIgYXJyID0gW107XG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UuYXBwbHkoYXJyLCBbYXJyLmxlbmd0aCwgMF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShBcnJheS5mcm9tKHNoZWV0Rm9yVGFnKHRhZykuY3NzUnVsZXMpKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL3NoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHBhcnRpY2xlczogcGFydGljbGVzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgfX0gPlxuICAgICAgICA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBiZWZvcmV0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFmdGVydGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtb3Zpbmd0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbW91c2VQb3M6IHsgeDogMCwgeTogMCB9IH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICB4OiBlLnBhZ2VYIC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiksXG4gICAgICAgIHk6IGUucGFnZVkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JldGV4dCwgYWZ0ZXJ0ZXh0LCBtb3Zpbmd0ZXh0LCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IG9mZnNldCA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCAke3RoaXMuc3RhdGUubW91c2VQb3MueCAvIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnRyYW5zZm9ybV9tb3VzZV9wb3NfeH1weCxcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi50cmFuc2Zvcm1fbW91c2VfcG9zX3l9cHgsIDAgKWAsXG4gICAgICB0ZXh0U2hhZG93OiBgJHstIHRoaXMuc3RhdGUubW91c2VQb3MueCAvIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnNoYWRvd19tb3VzZV9wb3NfeH1weFxuICAgICAgICAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnNoYWRvd19tb3VzZV9wb3NfeX1weFxuICAgICAgICAke3RoaXMucHJvcHMuc3R5bGUubW92aW5ndGl0bGViYWNrZ3JvdW5kfWBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJhY2tncm91bmR9XG4gICAgICAgIG9uTW91c2VNb3ZlPXsgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSB9ID5cbiAgICAgICAgPGgxIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vd3JhcCd9fSBjbGFzc05hbWU9e3N0eWxlLmZpeGVkdGl0bGV9PlxuICAgICAgICAgIHtiZWZvcmV0ZXh0fVxuXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUubW92aW5ndGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17b2Zmc2V0fT5cbiAgICAgICAgICAgIHttb3Zpbmd0ZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIHthZnRlcnRleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTW92aW5nVGV4dC5qcyIsIiFmdW5jdGlvbihlLCB0KSB7XG4gICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQocmVxdWlyZShcInJlYWN0XCIpKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcInJlYWN0XCIgXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0cy5QYXJ0aWNsZXMgPSB0KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBlLlBhcnRpY2xlcyA9IHQoZS5SZWFjdCk7XG59KHRoaXMsIGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBmdW5jdGlvbiB0KGkpIHtcbiAgICAgICAgICAgIGlmIChhW2ldKSByZXR1cm4gYVtpXS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHIgPSBhW2ldID0ge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogITFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZVtpXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCB0KSwgci5sb2FkZWQgPSAhMCwgci5leHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhID0ge307XG4gICAgICAgIHJldHVybiB0Lm0gPSBlLCB0LmMgPSBhLCB0LnAgPSBcIlwiLCB0KDApO1xuICAgIH0oWyBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGkgPSBhKDMpO1xuICAgICAgICB0LlBhcnRpY2xlcyA9IGkuZGVmYXVsdCwgdC5kZWZhdWx0ID0gaS5kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgYSBpbiBlKSB0Lmhhc093blByb3BlcnR5KGEpIHx8ICh0W2FdID0gZVthXSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGkoYSgxMSkpLCBpKGEoOSkpO1xuICAgICAgICB2YXIgciA9IGEoNCk7XG4gICAgICAgIHQuSW50ZXJhY3QgPSByLmRlZmF1bHQ7XG4gICAgICAgIHZhciBzID0gYSg1KTtcbiAgICAgICAgdC5Nb2RlcyA9IHMuZGVmYXVsdDtcbiAgICAgICAgdmFyIG4gPSBhKDYpO1xuICAgICAgICB0LlBhcnRpY2xlID0gbi5kZWZhdWx0O1xuICAgICAgICB2YXIgbyA9IGEoNyk7XG4gICAgICAgIHQuUGFydGljbGVNYW5hZ2VyID0gby5kZWZhdWx0O1xuICAgICAgICB2YXIgYyA9IGEoOCk7XG4gICAgICAgIHQuUGFydGljbGVzTGlicmFyeSA9IGMuZGVmYXVsdDtcbiAgICAgICAgdmFyIGwgPSBhKDEwKTtcbiAgICAgICAgdC5WZW5kb3JzID0gbC5kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKHQsIGEpIHtcbiAgICAgICAgdC5leHBvcnRzID0gZTtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuICF0IHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ID8gZSA6IHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHQpO1xuICAgICAgICAgICAgZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQgJiYgdC5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCB0ICYmIChPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgdCkgOiBlLl9fcHJvdG9fXyA9IHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbyA9IGEoMiksIGMgPSBhKDIpLCBsID0gYSgxKSwgdSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQoZSkge1xuICAgICAgICAgICAgICAgIGkodGhpcywgdCk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByKHRoaXMsICh0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcywgZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXM6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgbGlicmFyeTogdm9pZCAwXG4gICAgICAgICAgICAgICAgfSwgYS5sb2FkQ2FudmFzID0gYS5sb2FkQ2FudmFzLmJpbmQoYSksIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcyh0LCBlKSwgbih0LCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saWJyYXJ5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRDYW52YXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGUgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXM6IGVcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnN0YXRlLmxpYnJhcnkubG9hZENhbnZhcyh0LnN0YXRlLmNhbnZhcyksIHQuc3RhdGUubGlicmFyeS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxNb3VudFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5OiBuZXcgbC5QYXJ0aWNsZXNMaWJyYXJ5KHRoaXMucHJvcHMucGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpYnJhcnkuZGVzdHJveSgpLCB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnk6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnByb3BzLCB0ID0gZS53aWR0aCwgYSA9IGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIG8uY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHRoaXMubG9hZENhbnZhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBsLmRlZXBFeHRlbmQodGhpcy5wcm9wcy5zdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIHQ7XG4gICAgICAgIH0oYy5QdXJlQ29tcG9uZW50KTtcbiAgICAgICAgdS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICB9LCB0LmRlZmF1bHQgPSB1O1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGEoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBpKSB7XG4gICAgICAgICAgICAgICAgYSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGkoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxpbmtQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUueCAtIHQueCwgaSA9IGUueSAtIHQueSwgciA9IE1hdGguc3FydChhICogYSArIGkgKiBpKSwgcyA9IHRoaXMubGlicmFyeS5jYW52YXMsIG4gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyIDw9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIHIgLyAoMSAvIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSAvIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lLCBsID0gYy5yLCB1ID0gYy5nLCBwID0gYy5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LnNhdmUoKSwgcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoIFwiICsgbCArIFwiLCBcIiArIHUgKyBcIiwgXCIgKyBwICsgXCIsIFwiICsgbyArIFwiIClcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHgubGluZVdpZHRoID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLCBzLmN0eC5iZWdpblBhdGgoKSwgbi5zaGFkb3cuZW5hYmxlICYmIChzLmN0eC5zaGFkb3dCbHVyID0gbi5zaGFkb3cuYmx1ciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHguc2hhZG93Q29sb3IgPSBuLnNoYWRvdy5jb2xvciksIHMuY3R4Lm1vdmVUbyhlLngsIGUueSksIHMuY3R4LmxpbmVUbyh0LngsIHQueSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LnN0cm9rZSgpLCBzLmN0eC5jbG9zZVBhdGgoKSwgcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJhdHRyYWN0UGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnggLSB0LngsIGkgPSBlLnkgLSB0LnksIHIgPSBNYXRoLnNxcnQoYSAqIGEgKyBpICogaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyIDw9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhIC8gKDFlMyAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCksIG4gPSBpIC8gKDFlMyAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnZ4IC09IHMsIGUudnkgLT0gbiwgdC52eCArPSBzLCB0LnZ5ICs9IG47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJvdW5jZVBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS54IC0gdC54LCBpID0gZS55IC0gdC55LCByID0gTWF0aC5zcXJ0KGEgKiBhICsgaSAqIGkpLCBzID0gZS5yYWRpdXMgKyB0LnJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgciA8PSBzICYmIChlLnZ4ID0gLWUudngsIGUudnkgPSAtZS52eSwgdC52eCA9IC10LnZ4LCB0LnZ5ID0gLXQudnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gcjtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcihlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVzaFBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcCwgbiA9IGEubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoaW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZTsgbysrKSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcy5QYXJ0aWNsZSh0aGlzLnBhcmFtcywgdGhpcy5saWJyYXJ5LCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuY29sb3IsIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0ID8gdC5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdCA/IHQucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogaS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSkpLCBvID09IGUgLSAxICYmICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUgfHwgbi5wYXJ0aWNsZXNEcmF3KCksIHIucHVzaGluZyA9ICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbW92ZVBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgZSksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSB8fCB0LnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJ1YmJsZVBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LnRtcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS54IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgciA9IGUueSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksIG4gPSBNYXRoLnNxcnQoaSAqIGkgKyByICogciksIG8gPSAxIC0gbiAvIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLCBjID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcGFjaXR5X2J1YmJsZSA9IGUub3BhY2l0eSwgZS5yYWRpdXNfYnViYmxlID0gZS5yYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyA+PSAwICYmIFwibW91c2Vtb3ZlXCIgPT0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUpIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gZS5yYWRpdXMgKyB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPj0gMCAmJiAoZS5yYWRpdXNfYnViYmxlID0gbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGUucmFkaXVzIC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcCA9IGUucmFkaXVzIC0gdSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID4gMCA/IGUucmFkaXVzX2J1YmJsZSA9IHAgOiBlLnJhZGl1c19idWJibGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICE9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA+IGUub3BhY2l0eSAmJiBoIDw9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgJiYgKGUub3BhY2l0eV9idWJibGUgPSBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gZS5vcGFjaXR5IC0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlIC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA8IGUub3BhY2l0eSAmJiBtID49IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgJiYgKGUub3BhY2l0eV9idWJibGUgPSBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlbGVhdmVcIiA9PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LnN0YXR1cyAmJiBjKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgcy5pc0luQXJyYXkoXCJidWJibGVcIiwgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSAmJiBhLmJ1YmJsZV9jbGlja2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBlLnggLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LCBkID0gZS55IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSwgeSA9IE1hdGguc3FydCh2ICogdiArIGQgKiBkKSwgYiA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBiID4gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24gJiYgKGEuYnViYmxlX2R1cmF0aW9uX2VuZCA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBiID4gMiAqIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uICYmIChhLmJ1YmJsZV9jbGlja2luZyA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYnViYmxlX2R1cmF0aW9uX2VuZCA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gZnVuY3Rpb24oaSwgciwgcywgbiwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9IHIpIGlmIChhLmJ1YmJsZV9kdXJhdGlvbl9lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPSBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG4gLSBiICogKG4gLSBpKSAvIHQucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uLCBsID0gaSAtIGMsIHUgPSBpICsgbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiID09IG8gJiYgKGUucmFkaXVzX2J1YmJsZSA9IHUpLCBcIm9wYWNpdHlcIiA9PSBvICYmIChlLm9wYWNpdHlfYnViYmxlID0gdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHkgPD0gdC5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwID0gdm9pZCAwICE9IHMgPyBzIDogbiwgcCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG4gLSBiICogKG4gLSBpKSAvIHQucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCIgPT0gbyAmJiAoZS5yYWRpdXNfYnViYmxlID0gaCksIFwib3BhY2l0eVwiID09IG8gJiYgKGUub3BhY2l0eV9idWJibGUgPSBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcInNpemVcIiA9PSBvICYmIChlLnJhZGl1c19idWJibGUgPSB2b2lkIDApLCBcIm9wYWNpdHlcIiA9PSBvICYmIChlLm9wYWNpdHlfYnViYmxlID0gdm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJ1YmJsZV9jbGlja2luZyAmJiAoZih0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgZS5yYWRpdXNfYnViYmxlLCBlLnJhZGl1cywgXCJzaXplXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIGUub3BhY2l0eV9idWJibGUsIGUub3BhY2l0eSwgXCJvcGFjaXR5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmVwdWxzZVBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIFwibW91c2Vtb3ZlXCIgPT0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS54IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgbyA9IGUueSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksIGMgPSBNYXRoLnNxcnQobiAqIG4gKyBvICogbyksIGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbiAvIGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbyAvIGNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHUgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsIHAgPSAxMDAsIGggPSBzLmNsYW1wKDEgLyB1ICogKC0xICogTWF0aC5wb3coYyAvIHUsIDIpICsgMSkgKiB1ICogcCwgMCwgNTApLCBtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUueCArIGwueCAqIGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZS55ICsgbC55ICogaFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm91bmNlXCIgPT0gdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPyAobS54IC0gZS5yYWRpdXMgPiAwICYmIG0ueCArIGUucmFkaXVzIDwgaS53aWR0aCAmJiAoZS54ID0gbS54KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnkgLSBlLnJhZGl1cyA+IDAgJiYgbS55ICsgZS5yYWRpdXMgPCBpLmhlaWdodCAmJiAoZS55ID0gbS55KSkgOiAoZS54ID0gbS54LCBlLnkgPSBtLnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSBpZiAoci5yZXB1bHNlX2ZpbmlzaCB8fCAoci5yZXB1bHNlX2NvdW50KyssIFxuICAgICAgICAgICAgICAgICAgICByLnJlcHVsc2VfY291bnQgPT0gdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAmJiAoci5yZXB1bHNlX2ZpbmlzaCA9ICEwKSksIFxuICAgICAgICAgICAgICAgICAgICByLnJlcHVsc2VfY2xpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gTWF0aC5wb3codGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlIC8gNiwgMyksIGQgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gZS54LCB5ID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIGUueSwgYiA9IGQgKiBkICsgeSAqIHksIGYgPSAtdiAvIGIgKiAxLCBfID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBNYXRoLmF0YW4yKHksIGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnZ4ID0gZiAqIE1hdGguY29zKGEpLCBlLnZ5ID0gZiAqIE1hdGguc2luKGEpLCBcImJvdW5jZVwiID09IHQucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogZS54ICsgZS52eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUueSArIGUudnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci54ICsgZS5yYWRpdXMgPiBpLndpZHRoID8gZS52eCA9IC1lLnZ4IDogci54IC0gZS5yYWRpdXMgPCAwICYmIChlLnZ4ID0gLWUudngpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci55ICsgZS5yYWRpdXMgPiBpLmhlaWdodCA/IGUudnkgPSAtZS52eSA6IHIueSAtIGUucmFkaXVzIDwgMCAmJiAoZS52eSA9IC1lLnZ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA8PSB2ICYmIF8oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIDAgPT0gci5yZXB1bHNlX2NsaWNraW5nICYmIChlLnZ4ID0gZS52eF9pLCBlLnZ5ID0gZS52eV9pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdyYWJQYXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LmNhbnZhcywgYSA9IHRoaXMucGFyYW1zLCBpID0gYS5pbnRlcmFjdGl2aXR5LCByID0gYS5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBcIm1vdXNlbW92ZVwiID09IGkuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGUueCAtIGkubW91c2UucG9zX3gsIG4gPSBlLnkgLSBpLm1vdXNlLnBvc195LCBvID0gTWF0aC5zcXJ0KHMgKiBzICsgbiAqIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPD0gaS5tb2Rlcy5ncmFiLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBpLm1vZGVzLmdyYWIsIGwgPSBjLmxpbmVfbGlua2VkLm9wYWNpdHkgLSBvIC8gKDEgLyBjLmxpbmVfbGlua2VkLm9wYWNpdHkpIC8gYy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSByLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lLCBwID0gdS5yLCBoID0gdS5nLCBtID0gdS5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSggXCIgKyBwICsgXCIsIFwiICsgaCArIFwiLCBcIiArIG0gKyBcIiwgXCIgKyBsICsgXCIgKVwiLCB0LmN0eC5saW5lV2lkdGggPSByLmxpbmVfbGlua2VkLndpZHRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdHguYmVnaW5QYXRoKCksIHQuY3R4Lm1vdmVUbyhlLngsIGUueSksIHQuY3R4LmxpbmVUbyhpLm1vdXNlLnBvc194LCBpLm1vdXNlLnBvc195KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuY3R4LnN0cm9rZSgpLCB0LmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgfSwgcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBhKDEpLCBvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEsIHIsIHMsIG4pIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGEsIHRoaXMuc2V0dXBTaXplKCksIHRoaXMuc2V0dXBQb3NpdGlvbihuKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cENvbG9yKHIpLCB0aGlzLnNldHVwT3BhY2l0eSgpLCB0aGlzLnNldHVwQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcyhlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBTaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9ICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlICYmICh0aGlzLnNpemVfc3RhdHVzID0gITEsIHRoaXMudnMgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jIHx8ICh0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwUG9zaXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQuY2FudmFzLCBpID0gdC52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBlID8gZS54IDogTWF0aC5yYW5kb20oKSAqIGEud2lkdGgsIHRoaXMueSA9IGUgPyBlLnkgOiBNYXRoLnJhbmRvbSgpICogYS5oZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBhLndpZHRoIC0gMiAqIHRoaXMucmFkaXVzID8gdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXMgOiB0aGlzLnggPCAyICogdGhpcy5yYWRpdXMgJiYgKHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA+IGEuaGVpZ2h0IC0gMiAqIHRoaXMucmFkaXVzID8gdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXMgOiB0aGlzLnkgPCAyICogdGhpcy5yYWRpdXMgJiYgKHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSAmJiBpLmNoZWNrT3ZlcmxhcCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwQ29sb3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gbi5nZXRDb2xvcihlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwT3BhY2l0eVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUgJiYgKHRoaXMub3BhY2l0eV9zdGF0dXMgPSAhMSwgdGhpcy52byA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDAsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMgfHwgKHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBBbmltYXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXAsIGEgPSBlLnZlbmRvcnMsIGkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLS41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLS41XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQgPyAodGhpcy52eCA9IGkueCwgdGhpcy52eSA9IGkueSwgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUucmFuZG9tICYmICh0aGlzLnZ4ID0gdGhpcy52eCAqIE1hdGgucmFuZG9tKCksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIE1hdGgucmFuZG9tKCkpKSA6ICh0aGlzLnZ4ID0gaS54ICsgTWF0aC5yYW5kb20oKSAtIC41LCB0aGlzLnZ5ID0gaS55ICsgTWF0aC5yYW5kb20oKSAtIC41KSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnhfaSA9IHRoaXMudngsIHRoaXMudnlfaSA9IHRoaXMudnk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBzID8gXCJ1bmRlZmluZWRcIiA6IHIocykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHMubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNoYXBlID0gcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1hZ2VcIiA9PSB0aGlzLnNoYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogby5pbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IG8uaW1hZ2Uud2lkdGggLyBvLmltYWdlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5pbWcucmF0aW8gfHwgKHRoaXMuaW1nLnJhdGlvID0gMSksIFwic3ZnXCIgPT0gdC5pbWdfdHlwZSAmJiB2b2lkIDAgIT0gdC5zb3VyY2Vfc3ZnICYmIChhLmNyZWF0ZVN2Z0ltZyh0aGlzKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2hpbmcgJiYgKHRoaXMuaW1nLmxvYWRlZCA9ICExKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcCwgcyA9IGEudmVuZG9ycywgbiA9ICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMsIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBuID0gdm9pZCAwICE9IHRoaXMucmFkaXVzX2J1YmJsZSA/IHRoaXMucmFkaXVzX2J1YmJsZSA6IHRoaXMucmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHZvaWQgMCAhPSB0aGlzLm9wYWNpdHlfYnViYmxlID8gdGhpcy5vcGFjaXR5X2J1YmJsZSA6IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yLnJnYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmNvbG9yLnJnYiwgdSA9IGwuciwgcCA9IGwuZywgaCA9IGwuYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBcInJnYmEoIFwiICsgdSArIFwiLCBcIiArIHAgKyBcIiwgXCIgKyBoICsgXCIsIFwiICsgbyArIFwiIClcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5jb2xvci5oc2wsIHYgPSBtLmgsIGQgPSBtLnMsIHkgPSBtLmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gXCJoc2xhKCBcIiArIHYgKyBcIiwgXCIgKyBkICsgXCIsIFwiICsgeSArIFwiLCBcIiArIG8gKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpLmN0eC5maWxsU3R5bGUgPSBjLCBpLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgbiwgMCwgMiAqIE1hdGguUEksICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LnJlY3QodGhpcy54IC0gbiwgdGhpcy55IC0gbiwgMiAqIG4sIDIgKiBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmRyYXdTaGFwZShpLmN0eCwgdGhpcy54IC0gbiwgdGhpcy55ICsgbiAvIDEuNjYsIDIgKiBuLCAzLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZHJhd1NoYXBlKGkuY3R4LCB0aGlzLnggLSBuIC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMy41KSwgdGhpcy55IC0gbiAvIC43NiwgMi42NiAqIG4gLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5kcmF3U2hhcGUoaS5jdHgsIHRoaXMueCAtIDIgKiBuIC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gNCksIHRoaXMueSAtIG4gLyAxLjUyLCAyICogbiAqIDIuNjYgLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LmRyYXdJbWFnZShlLCB0LnggLSBuLCB0LnkgLSBuLCAyICogbiwgMiAqIG4gLyB0LmltZy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBiID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFwic3ZnXCIgPT0gci5pbWdfdHlwZSA/IHRoaXMuaW1nLm9iaiA6IHIuaW1nX29iaiwgYiAmJiBlKGIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkuY3R4LmNsb3NlUGF0aCgpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCAmJiAoaS5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yLCBcbiAgICAgICAgICAgICAgICAgICAgaS5jdHgubGluZVdpZHRoID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCwgaS5jdHguc3Ryb2tlKCkpLCBpLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBvO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcyA9IGEoMSksIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgYSwgciwgcywgbikge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5pbnRlcmFjdCA9IGEsIHRoaXMubW9kZXMgPSByLCB0aGlzLnZlbmRvcnMgPSBzLCBcbiAgICAgICAgICAgICAgICB0aGlzLmxpYnJhcnkgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc0NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcywgdCA9IGUuY29sb3IsIGEgPSBlLm9wYWNpdHksIGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcy5QYXJ0aWNsZSh0aGlzLnBhcmFtcywgdGhpcy5saWJyYXJ5LCB0LCBhLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNVcGRhdGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQuY2FudmFzLCBpID0gdC5pbnRlcmFjdCwgciA9IHQubW9kZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnNwZWVkIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnggKz0gdC52eCAqIG8sIHQueSArPSB0LnZ5ICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlICYmICgxID09IHQub3BhY2l0eV9zdGF0dXMgPyAodC5vcGFjaXR5ID49IGUucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlICYmICh0Lm9wYWNpdHlfc3RhdHVzID0gITEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQub3BhY2l0eSArPSB0LnZvKSA6ICh0Lm9wYWNpdHkgPD0gZS5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbiAmJiAodC5vcGFjaXR5X3N0YXR1cyA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm9wYWNpdHkgLT0gdC52byksIHQub3BhY2l0eSA8IDAgJiYgKHQub3BhY2l0eSA9IDApKSwgZS5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUgJiYgKDEgPT0gdC5zaXplX3N0YXR1cyA/ICh0LnJhZGl1cyA+PSBlLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSAmJiAodC5zaXplX3N0YXR1cyA9ICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJhZGl1cyArPSB0LnZzKSA6ICh0LnJhZGl1cyA8PSBlLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluICYmICh0LnNpemVfc3RhdHVzID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmFkaXVzIC09IHQudnMpLCB0LnJhZGl1cyA8IDAgJiYgKHQucmFkaXVzID0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGMgPSBcImJvdW5jZVwiID09IGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfbGVmdDogdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeF9yaWdodDogYS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X3RvcDogdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IGEuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfbGVmdDogLXQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6IGEud2lkdGggKyB0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X3RvcDogLXQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBhLmhlaWdodCArIHQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0LnggLSB0LnJhZGl1cyA+IGEud2lkdGggPyAodC54ID0gYy54X2xlZnQsIHQueSA9IE1hdGgucmFuZG9tKCkgKiBhLmhlaWdodCkgOiB0LnggKyB0LnJhZGl1cyA8IDAgJiYgKHQueCA9IGMueF9yaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnkgPSBNYXRoLnJhbmRvbSgpICogYS5oZWlnaHQpLCB0LnkgLSB0LnJhZGl1cyA+IGEuaGVpZ2h0ID8gKHQueSA9IGMueV90b3AsIHQueCA9IE1hdGgucmFuZG9tKCkgKiBhLndpZHRoKSA6IHQueSArIHQucmFkaXVzIDwgMCAmJiAodC55ID0gYy55X2JvdHRvbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnggPSBNYXRoLnJhbmRvbSgpICogYS53aWR0aCksIGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3VuY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnggKyB0LnJhZGl1cyA+IGEud2lkdGggPyB0LnZ4ID0gLXQudnggOiB0LnggLSB0LnJhZGl1cyA8IDAgJiYgKHQudnggPSAtdC52eCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQueSArIHQucmFkaXVzID4gYS5oZWlnaHQgPyB0LnZ5ID0gLXQudnkgOiB0LnkgLSB0LnJhZGl1cyA8IDAgJiYgKHQudnkgPSAtdC52eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0luQXJyYXkoXCJncmFiXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgci5ncmFiUGFydGljbGUodCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgcy5pc0luQXJyYXkoXCJidWJibGVcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkgJiYgci5idWJibGVQYXJ0aWNsZSh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAocy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgcy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpICYmIHIucmVwdWxzZVBhcnRpY2xlKHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgZS5wYXJhbXMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpIGZvciAodmFyIGwgPSBuICsgMTsgbCA8IGUucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5wYXJhbXMucGFydGljbGVzLmFycmF5W2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgJiYgaS5saW5rUGFydGljbGVzKHQsIHUpLCBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSAmJiBpLmF0dHJhY3RQYXJ0aWNsZXModCwgdSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSAmJiBpLmJvdW5jZVBhcnRpY2xlcyh0LCB1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNEcmF3XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUuY2FudmFzLCBhID0gZS5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgICAgICB0LmN0eC5jbGVhclJlY3QoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpLCBhLnBhcnRpY2xlc1VwZGF0ZSgpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNFbXB0eVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNSZWZyZXNoXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wO1xuICAgICAgICAgICAgICAgICAgICBlLnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuY2hlY2tBbmltRnJhbWUpLCBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpLCB0LnNvdXJjZV9zdmcgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICB0LmltZ19vYmogPSB2b2lkIDAsIHQuY291bnRfc3ZnID0gMCwgdGhpcy5wYXJ0aWNsZXNFbXB0eSgpLCB0aGlzLmxpYnJhcnkuY2FudmFzQ2xlYXIoKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlicmFyeS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbjtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnRtcCA9IHt9LCB0aGlzLnRtcCA9IHt9LCB0aGlzLmxvYWRQYXJhbWV0ZXJzKHQpLCB0aGlzLmV4dGVuZFBhcmFtcygpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0ID0gbmV3IHMuSW50ZXJhY3QodGhpcy5wYXJhbXMsIHRoaXMpLCB0aGlzLm1vZGVzID0gbmV3IHMuTW9kZXModGhpcy5wYXJhbXMsIHRoaXMpLCBcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSBuZXcgcy5WZW5kb3JzKHRoaXMucGFyYW1zLCB0aGlzKSwgdGhpcy5tYW5hZ2VyID0gbmV3IHMuUGFydGljbGVNYW5hZ2VyKHRoaXMucGFyYW1zLCB0aGlzLmludGVyYWN0LCB0aGlzLm1vZGVzLCB0aGlzLnZlbmRvcnMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRQYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzLmdldERlZmF1bHRQYXJhbXMoKSwgYSA9IHMuZGVlcEV4dGVuZCh0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibG9hZENhbnZhc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICBlLmV2ZW50c0xpc3RlbmVycygpLCBlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudG1wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaExpc3RlbmVycygpLCB0aGlzLnZlbmRvcnMuZGV0YWNoTGlzdGVuZXJzKCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGUuZHJhd0FuaW1GcmFtZSksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXRhY2hMaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXh0ZW5kUGFyYW1zXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuZFRtcERlZmluaXRpb24oKSwgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV4dGVuZFRtcERlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy50bXA7XG4gICAgICAgICAgICAgICAgICAgIGUub2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZV92YWx1ZTogdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplX2FuaW1fc3BlZWQ6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlX3NwZWVkOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZF93aWR0aDogdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX2J1YmJsZV9zaXplOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJldGluYUluaXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXMsIHQgPSB0aGlzLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucmV0aW5hX2RldGVjdCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAoZS5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0LnJldGluYSA9ICEwLCBlLndpZHRoID0gZS5lbGVtZW50Lm9mZnNldFdpZHRoICogZS5weHJhdGlvLCBlLmhlaWdodCA9IGUuZWxlbWVudC5vZmZzZXRIZWlnaHQgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHQub2JqLnNpemVfdmFsdWUgKiBlLnB4cmF0aW8sIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSB0Lm9iai5zaXplX2FuaW1fc3BlZWQgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHQub2JqLm1vdmVfc3BlZWQgKiBlLnB4cmF0aW8sIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHQub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gdC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSB0Lm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHQub2JqLmxpbmVfbGlua2VkX3dpZHRoICogZS5weHJhdGlvLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gdC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHQub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIGUucHhyYXRpbykgOiAoZS5weHJhdGlvID0gMSwgXG4gICAgICAgICAgICAgICAgICAgIHQucmV0aW5hID0gITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzSW5pdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5jdHggPSBlLmVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzU2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50LndpZHRoID0gZS53aWR0aCwgZS5lbGVtZW50LmhlaWdodCA9IGUuaGVpZ2h0LCB0aGlzLnBhcmFtcyAmJiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjYW52YXNQYWludFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5jdHguZmlsbFJlY3QoMCwgMCwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzQ2xlYXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIGUuY3R4LmNsZWFyUmVjdCgwLCAwLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvbldpbmRvd1Jlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcywgdCA9IHRoaXMubWFuYWdlciwgYSA9IHRoaXMudG1wLCBpID0gdGhpcy52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICBlLndpZHRoID0gZS5lbGVtZW50Lm9mZnNldFdpZHRoLCBlLmhlaWdodCA9IGUuZWxlbWVudC5vZmZzZXRIZWlnaHQsIGEucmV0aW5hICYmIChlLndpZHRoICo9IGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIGUuaGVpZ2h0ICo9IGUucHhyYXRpbyksIGUuZWxlbWVudC53aWR0aCA9IGUud2lkdGgsIGUuZWxlbWVudC5oZWlnaHQgPSBlLmhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSB8fCAodC5wYXJ0aWNsZXNFbXB0eSgpLCB0LnBhcnRpY2xlc0NyZWF0ZSgpLCB0LnBhcnRpY2xlc0RyYXcoKSwgXG4gICAgICAgICAgICAgICAgICAgIGkuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKSksIGkuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIHQuaGV4VG9SZ2IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gICAgICAgICAgICBlID0gZS5yZXBsYWNlKHQsIGZ1bmN0aW9uKGUsIHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdCArIHQgKyBhICsgYSArIGkgKyBpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgYSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhlKTtcbiAgICAgICAgICAgIHJldHVybiBhID8ge1xuICAgICAgICAgICAgICAgIHI6IHBhcnNlSW50KGFbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICBnOiBwYXJzZUludChhWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgYjogcGFyc2VJbnQoYVszXSwgMTYpXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgfSwgdC5jbGFtcCA9IGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlLCB0KSwgYSk7XG4gICAgICAgIH0sIHQuaXNJbkFycmF5ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaW5kZXhPZihlKSA+IC0xO1xuICAgICAgICB9LCB0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihlLCBhKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGEpIGFbaV0gJiYgYVtpXS5jb25zdHJ1Y3RvciAmJiBhW2ldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgPyAoZVtpXSA9IGVbaV0gfHwge30sIFxuICAgICAgICAgICAgdC5kZWVwRXh0ZW5kKGVbaV0sIGFbaV0pKSA6IGVbaV0gPSBhW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH0sIHQuZ2V0Q29sb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHt9O1xuICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGUgPyBcInVuZGVmaW5lZFwiIDogYShlKSkpIGlmIChlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBpLnJnYiA9IHQuaGV4VG9SZ2Iocik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzID0gZS5yLCBuID0gZS5nLCBvID0gZS5iO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHMgJiYgdm9pZCAwICE9PSBuICYmIHZvaWQgMCAhPT0gbykgaS5yZ2IgPSB7XG4gICAgICAgICAgICAgICAgICAgIHI6IHMsXG4gICAgICAgICAgICAgICAgICAgIGc6IG4sXG4gICAgICAgICAgICAgICAgICAgIGI6IG9cbiAgICAgICAgICAgICAgICB9OyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlLmgsIGwgPSBlLnMsIHUgPSBlLmw7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gYyAmJiB2b2lkIDAgIT09IG4gJiYgdm9pZCAwICE9PSBvICYmIChpLmhzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbDogdVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgXCJyYW5kb21cIiA9PSBlID8gaS5yZ2IgPSB7XG4gICAgICAgICAgICAgICAgcjogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDEsXG4gICAgICAgICAgICAgICAgZzogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDEsXG4gICAgICAgICAgICAgICAgYjogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDFcbiAgICAgICAgICAgIH0gOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChpLnJnYiA9IHQuaGV4VG9SZ2IoZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYSgxKSwgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBhKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBhLCB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV2ZW50c0xpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LCB0ID0gdGhpcy5saWJyYXJ5LmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgXCJ3aW5kb3dcIiA9PSBlLmRldGVjdF9vbiA/IGUuZWwgPSB3aW5kb3cgOiBlLmVsID0gdC5lbGVtZW50LCAoZS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgZS5ldmVudHMub25jbGljay5lbmFibGUpICYmIChlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSksIFxuICAgICAgICAgICAgICAgICAgICBlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKSksIGUuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXRhY2hMaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eSwgdCA9IHRoaXMubGlicmFyeS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGUuZWwgJiYgKChlLmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBlLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkgJiYgKGUuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKSwgXG4gICAgICAgICAgICAgICAgICAgIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmUpKSwgZS5ldmVudHMub25jbGljay5lbmFibGUgJiYgZS5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrKSksIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uTW91c2VNb3ZlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LmNhbnZhcywgaSA9IHQudG1wLCByID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eSwgcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHIuZWwgPT0gd2luZG93ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZIHx8IGUuY2xpZW50WVxuICAgICAgICAgICAgICAgICAgICB9LCByLm1vdXNlLnBvc194ID0gcy54LCByLm1vdXNlLnBvc195ID0gcy55LCBpLnJldGluYSAmJiAoci5tb3VzZS5wb3NfeCAqPSBhLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICByLm1vdXNlLnBvc195ICo9IGEucHhyYXRpbyksIHIuc3RhdHVzID0gXCJtb3VzZW1vdmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uTW91c2VMZWF2ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eTtcbiAgICAgICAgICAgICAgICAgICAgdC5tb3VzZS5wb3NfeCA9IG51bGwsIHQubW91c2UucG9zX3kgPSBudWxsLCB0LnN0YXR1cyA9IFwibW91c2VsZWF2ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLm1vZGVzLCBhID0gZS50bXAsIGkgPSB0aGlzLnBhcmFtcywgciA9IGkuaW50ZXJhY3Rpdml0eSwgcyA9IGkucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5tb3VzZS5jbGlja19wb3NfeCA9IHIubW91c2UucG9zX3gsIHIubW91c2UuY2xpY2tfcG9zX3kgPSByLm1vdXNlLnBvc195LCByLm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXG4gICAgICAgICAgICAgICAgICAgIHIuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSBzd2l0Y2ggKHIuZXZlbnRzLm9uY2xpY2subW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwdXNoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm1vdmUuZW5hYmxlID8gdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHIubW91c2UpIDogMSA9PSByLm1vZGVzLnB1c2gucGFydGljbGVzX25iID8gdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHIubW91c2UpIDogci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEgJiYgdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVBhcnRpY2xlcyhyLm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYnViYmxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJ1YmJsZV9jbGlja2luZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwdWxzZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5yZXB1bHNlX2NsaWNraW5nID0gITAsIGEucmVwdWxzZV9jb3VudCA9IDAsIGEucmVwdWxzZV9maW5pc2ggPSAhMSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnJlcHVsc2VfY2xpY2tpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDFlMyAqIHIubW9kZXMucmVwdWxzZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlbnNpdHlBdXRvUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUuY2FudmFzLCBhID0gZS5tb2RlcywgaSA9IGUudG1wLCByID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXIuZGVuc2l0eS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdC5lbGVtZW50LndpZHRoICogdC5lbGVtZW50LmhlaWdodCAvIDFlMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucmV0aW5hICYmIChzID0gcyAvIHQucHhyYXRpbyAqIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBzICogci5udW1iZXIudmFsdWUgLyByLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWEsIG8gPSByLmFycmF5Lmxlbmd0aCAtIG47XG4gICAgICAgICAgICAgICAgICAgICAgICBvIDwgMCA/IGEucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhvKSkgOiBhLnJlbW92ZVBhcnRpY2xlcyhvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2hlY2tPdmVybGFwXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmxpYnJhcnksIGkgPSBhLmNhbnZhcywgciA9IGEudmVuZG9ycywgcyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYSwgbiA9IGUueCAtIHMueCwgbyA9IGUueSAtIHMueSwgYyA9IE1hdGguc3FydChuICogbiArIG8gKiBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPD0gZS5yYWRpdXMgKyBzLnJhZGl1cyAmJiAoZS54ID0gdCA/IHQueCA6IE1hdGgucmFuZG9tKCkgKiBpLndpZHRoLCBlLnkgPSB0ID8gdC55IDogTWF0aC5yYW5kb20oKSAqIGkuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuY2hlY2tPdmVybGFwKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjcmVhdGVTdmdJbWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeS50bXAsIGEgPSB0LnNvdXJjZV9zdmcsIGkgPSAvIyhbMC05QS1GXXszLDZ9KS9naSwgciA9IGEucmVwbGFjZShpLCBmdW5jdGlvbih0LCBhLCBpLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvbG9yLnJnYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5jb2xvci5yZ2IsIG8gPSBuLnIsIGMgPSBuLmcsIGwgPSBuLmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IFwicmdiYSggXCIgKyBvICsgXCIsIFwiICsgYyArIFwiLCBcIiArIGwgKyBcIiwgXCIgKyBlLm9wYWNpdHkgKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5jb2xvci5oc2wsIHAgPSB1LmgsIGggPSB1LnMsIG0gPSB1Lmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IFwicmdiYSggXCIgKyBwICsgXCIsIFwiICsgaCArIFwiLCBcIiArIG0gKyBcIiwgXCIgKyBlLm9wYWNpdHkgKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgfSksIHMgPSBuZXcgQmxvYihbIHIgXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIlxuICAgICAgICAgICAgICAgICAgICB9KSwgbiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LCBvID0gbi5jcmVhdGVPYmplY3RVUkwocyksIGMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW1nLm9iaiA9IGMsIGUuaW1nLmxvYWRlZCA9ICEwLCBuLnJldm9rZU9iamVjdFVSTChvKSwgdC5jb3VudF9zdmcrKztcbiAgICAgICAgICAgICAgICAgICAgfSksIGMuc3JjID0gbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5jYW52YXMsIGEgPSBlLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5kcmF3QW5pbUZyYW1lKSwgdC5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZHJhd1NoYXBlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQsIGEsIGksIHIsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSByICogcywgbyA9IHIgLyBzLCBjID0gMTgwICogKG8gLSAyKSAvIG8sIGwgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGMgLyAxODA7XG4gICAgICAgICAgICAgICAgICAgIGUuc2F2ZSgpLCBlLmJlZ2luUGF0aCgpLCBlLnRyYW5zbGF0ZSh0LCBhKSwgZS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgbjsgdSsrKSBlLmxpbmVUbyhpLCAwKSwgZS50cmFuc2xhdGUoaSwgMCksIGUucm90YXRlKGwpO1xuICAgICAgICAgICAgICAgICAgICBlLmZpbGwoKSwgZS5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJleHBvcnRJbWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZS5lbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJsb2FkSW1nXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LnRtcCwgaSA9IHQudmVuZG9ycywgciA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaW1nX2Vycm9yID0gdm9pZCAwLCBcIlwiICE9IHIuc2hhcGUuaW1hZ2Uuc3JjKSBpZiAoXCJzdmdcIiA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vcGVuKFwiR0VUXCIsIHIuc2hhcGUuaW1hZ2Uuc3JjKSwgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCA9PSBzLnJlYWR5U3RhdGUgJiYgKDIwMCA9PSBzLnN0YXR1cyA/IChhLnNvdXJjZV9zdmcgPSBlLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY2hlY2tCZWZvcmVEcmF3KCkpIDogKGNvbnNvbGUubG9nKFwiRXJyb3IgcmVhY3QtcGFydGljbGVzLWpzIC0gaW1hZ2Ugbm90IGZvdW5kXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmltZ19lcnJvciA9ICEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuaW1nX29iaiA9IG4sIGkuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbi5zcmMgPSByLnNoYXBlLmltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiRXJyb3IgcmVhY3QtcGFydGljbGVzLWpzIC0gbm8gaW1hZ2Uuc3JjXCIpLCBhLmltZ19lcnJvciA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUubWFuYWdlciwgaSA9IGUudmVuZG9ycywgciA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiID09IHIuc2hhcGUudHlwZSA/IFwic3ZnXCIgPT0gdC5pbWdfdHlwZSA/IHQuY291bnRfc3ZnID49IHIubnVtYmVyLnZhbHVlID8gKGEucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3ZlLmVuYWJsZSA/IHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpKSA6IHQuaW1nX2Vycm9yIHx8ICh0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpKSA6IHZvaWQgMCAhPSB0LmltZ19vYmogPyAoYS5wYXJ0aWNsZXNEcmF3KCksIFxuICAgICAgICAgICAgICAgICAgICByLm1vdmUuZW5hYmxlID8gdC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSkpIDogdC5pbWdfZXJyb3IgfHwgKHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkpIDogKGEucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3ZlLmVuYWJsZSA/IHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNoZWNrQmVmb3JlRHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1hZ2VcIiA9PSBpLnNoYXBlLnR5cGUpIGlmIChcInN2Z1wiID09IHQuaW1nX3R5cGUgJiYgdm9pZCAwID09IHQuc291cmNlX3N2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5jaGVja0FuaW1GcmFtZSksIHQuaW1nX2Vycm9yIHx8IChhLmluaXQoKSwgYS5kcmF3KCkpOyBlbHNlIGEuaW5pdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgYS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUubWFuYWdlciwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgZS5yZXRpbmFJbml0KCksIGUuY2FudmFzSW5pdCgpLCBlLmNhbnZhc1NpemUoKSwgdC5wYXJ0aWNsZXNDcmVhdGUoKSwgYS5kZW5zaXR5QXV0b1BhcnRpY2xlcygpLCBcbiAgICAgICAgICAgICAgICAgICAgaS5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IHMuaGV4VG9SZ2IoaS5saW5lX2xpbmtlZC5jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgcy5pc0luQXJyYXkoXCJpbWFnZVwiLCBpLnNoYXBlLnR5cGUpID8gKHQuaW1nX3R5cGUgPSBpLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIoaS5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyksIFxuICAgICAgICAgICAgICAgICAgICBhLmxvYWRJbWcodC5pbWdfdHlwZSkpIDogYS5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIHQuZ2V0RGVmYXVsdFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiAxMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJfc2lkZXM6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogLjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3luYzogITFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmM6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0X21vZGU6IFwiYm91bmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuY2U6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWDogM2UzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDNlM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhcnJheTogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiZ3JhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogLjRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2U6IHt9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXRpbmFfZGV0ZWN0OiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9IF0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXBhcnRpY2xlcy1qcy9saWIvcGFydGljbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICdnbGFtb3InXG5cbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH1cblxuICByZW5kZXJFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXNDb2RlXG4gICAgICA/IGAgQW4gZXJyb3Igb2NjdXJyZWQgb24gc2VydmVyLmBcbiAgICAgIDogJyBBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQuJ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkYm94fT5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZHZlcnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Vycm9ydGV4dH0+XG4gICAgICAgICAgICBUaGUgcGFnZSB5b3VyIGxvb2tpbmcgZm9yIGNhbid0IGJlIGZvdW5kLlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0XG4gICAgICAgICAgICBtb3Zpbmd0ZXh0PXt0aGlzLnByb3BzLnN0YXR1c0NvZGV9XG4gICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rfT5HbyBCYWNrIEhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBzdHlsZSh7XG4gICAgY29sb3I6ICcjMmIyYjJiJyxcbiAgICBmb250U2l6ZTogJzEwMDAlJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICczMDAlJyxcbiAgICB9XG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6ICdyZ2JhKDk5LCAyMzEsIDE3NSwgMC44KScsXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy0yMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnMjAnLFxuICB9LFxufVxuXG5jb25zdCBlcnJvcnRleHQgPSBjc3Moe1xuICBmb250U2l6ZTogJzE0MCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnOTAlJyxcbiAgfVxufSlcblxuY29uc3QgZXJyb3JudW1iZXIgPSBjc3Moe1xuICBmb250U2l6ZTogJzIwMDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzYwMCUnLFxuICAgIHBhZGRpbmc6ICcyMHB4IDEwcHgnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICB9XG59KVxuXG5jb25zdCBsaW5rID0gY3NzKHtcbiAgY29sb3I6ICcjMjQyNDI0JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyOiAnM3B4IHNvbGlkICMyNDI0MjQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG59KVxuXG5jb25zdCBjZW50ZXJlZGJveCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJ1xufSlcblxuY29uc3QgY2VudGVyZWR2ZXJ0ID0gY3NzKHtcbiAgcGFkZGluZzogJzJlbScsXG4gIG1heFdpZHRoOiAnNTAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiAnIzI0MjQyNCcsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2Vycm9yLmpzIiwiY29uc3QgcGFydGljbGVzID0ge1xuICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogXCIjMDAwXCJcbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgbW92ZToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA2LFxuICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgICAgcm90YXRlWTogMTIwMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgICBldmVudHM6IHtcbiAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInB1c2hcIlxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGdyYWI6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgc2l6ZTogNDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBvcGFjaXR5OiA4LFxuICAgICAgICBzcGVlZDogM1xuICAgICAgfSxcbiAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgfSxcbiAgICAgIHB1c2g6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgICByZXRpbmFfZGV0ZWN0OiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpY2xlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvcGFydGljbGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==