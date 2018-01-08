/**
 * ripplecharts - v2.4.2 - 2018-01-08
 * http://xrpcharts.ripple.com
 *
 * Copyright (c) 2018 Ripple, Inc.
 * Licensed ISC <> 
 */
var API="https://data.ripple.com/v2";var PRICECHART_CSS=".priceChart{position:relative;display:inline-block;width:100%;clear:both}.priceChart .background{pointer-events:all;fill:none;stroke:#999;stroke-width:1;shape-rendering:crispEdges}.priceChart .loader{position:absolute;top:50%;left:50%;width:40px;margin-top:-20px;margin-left:-20px}.priceChart .axis{fill:#999;shape-rendering:crispEdges}.priceChart .axis .title{stroke-width:.5;stroke:#ccc;fill:#ccc}.priceChart .axis path,.priceChart .axis line{fill:none;stroke:#999;stroke-width:1}.priceChart .axis text{font-size:10px}.priceChart .axis.price text,.priceChart .axis.volume text{font-size:12px}.priceChart path{fill:none;stroke:#3369a8;stroke-width:2;stroke-linejoin:round}.priceChart line{stroke:#999;shape-rendering:crispEdges}.priceChart .status{position:absolute;top:30%;width:100%;color:#aaa;text-align:center}.priceChart .hover{stroke:#999;stroke-width:1}.priceChart .focus{fill:rgba(255,255,255,0.5);stroke:#999}.priceChart .focus.dark{fill:#555;stroke:none}.priceChart .volumeBars rect{fill:#ddd;stroke:#bbb}.priceChart .title{font-size:15px}.priceChart .chartDetails{position:absolute;padding:1px 5px;font-size:14px;color:#333;text-align:right;background:rgba(255,255,255,0.5);border-bottom:1px solid rgba(150,150,150,0.2)}.priceChart .chartDetails span{display:inline-block;margin:0 .25em;font-size:12px;color:#999}.priceChart .chartDetails b{margin:0 .25em}.priceChart .chartDetails .date{margin-right:20px;text-align:right}.priceChart .chartDetails .high{color:#090}.priceChart .chartDetails .low{color:#900}.priceChart .chartDetails .vwap{color:#86b}.priceChart .chartDetails .volume{color:#369}.candlesticks rect{fill:#fff;stroke:#a22;stroke-width:1}.candlesticks line{stroke:#a22}.candlesticks .filled rect{fill:#a22}.candlesticks .up rect{stroke:#3a3}.candlesticks .up line{stroke:#3a3}.candlesticks .up.filled rect{fill:#3a3}.candlesticks line{stroke-width:1}.candlesticks line.extent{stroke-width:1}.dark .candlesticks line{stroke-width:1;stroke:#a00}.dark .candlesticks .filled rect{fill:#a00}.dark .candlesticks .up line{stroke:#393}.dark .candlesticks .up rect{stroke:#393}.dark .candlesticks .filled.up rect{fill:#393;stroke:#393}.dark .candlesticks rect{fill:#000;stroke-width:1;stroke:#a00}.dark .priceChart .background,.dark .priceChart .hover,.dark .priceChart .axis path,.dark .priceChart .axis line{stroke:#404040}.dark .priceChart .axis text{fill:#666;stroke:#666}.dark .priceChart .axis .title{stroke:#333;stroke-width:1;fill:#333}.dark .priceChart .volumeBars rect{opacity:.4;stroke:#888}.dark .priceChart .status{color:#666}.dark .priceChart .chartDetails{background:rgba(255,255,255,0.1)}.dark{color:#999;background:#000}.light{background:#fff}@keyframes rotating{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotating{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.loader{-webkit-animation:rotating 1s linear infinite;-moz-animation:rotating 1s linear infinite;-ms-animation:rotating 1s linear infinite;-o-animation:rotating 1s linear infinite;animation:rotating 1s linear infinite}.closer{position:absolute;top:0;right:0;z-index:1;padding:3px 5px;font-size:12px;font-weight:300;line-height:10px;color:#000;cursor:pointer}.closer:hover{color:#666}.info{position:absolute;top:0;left:0;height:60px;color:#000}.infoText{width:20px;height:60px;padding:2px 1px;overflow:hidden;font-size:12px;text-align:center;cursor:pointer}#prices{position:relative;display:inline-block;width:100%;height:60px;overflow:hidden;white-space:nowrap;background-color:#f5f5f5}#prices .ticker{display:inline-block;margin:15px;cursor:pointer;opacity:.7}#prices .hidden{display:none}#prices .pct{display:inline-block;margin:5px 5px 5px 0;font-size:14px;font-weight:300}#prices .pctUp{color:#483}#prices .pctDown{color:#a22}#prices .price{display:inline-block;margin:5px;font-weight:700;color:#3c3c3c}#prices .baseGateway{display:inline-block;font-size:12px;color:#346aa9}#prices .counterGateway{display:inline-block;font-size:12px;color:#346aa9}#prices .baseCurrency{display:inline-block;font-weight:300}#prices .counterCurrency{display:inline-block;margin:5px 5px 5px 0;font-weight:300}#prices .priceStatus{display:inline-block;width:10px;height:5px;padding-bottom:2px}#prices #scrollingText{position:relative;top:150px;width:100%;height:16px;padding:2px 0;border:solid 1px #ccc}@keyframes rotating{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotating{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.tickerLoader{position:absolute;top:17px;right:0;left:0;width:auto;height:25px;margin:auto;-webkit-animation:rotating 1s linear infinite;-moz-animation:rotating 1s linear infinite;-ms-animation:rotating 1s linear infinite;-o-animation:rotating 1s linear infinite;animation:rotating 1s linear infinite}div.scrollingHotSpotLeft{position:absolute;left:0;z-index:200;width:10%;height:100%;min-width:75px}div.scrollingHotSpotRight{position:absolute;right:0;z-index:200;width:10%;height:100%;min-width:75px}div.scrollWrapper{position:relative;width:100%;height:100%;overflow:hidden}div.scrollableArea{position:relative;width:auto;height:100%}";var LOADER_PNG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAyCAYAAADMb4LpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoBJREFUeNrsmb1uwjAQgCHK1uyww072ssPePAAPwEBZYOABYKEd0p2xAw8Q9rCHPex0JzM9VxcpWM6vL3GixpIVifz4u8P36+7j8eg0dehlfHT/se/DxYTZj/zsw/SW78s71TpdSs0DNAOewRwlPHaCeQAhbrWBB/A5XN4yPh7AtEEARzk8gK/hMinw6k5GAI0A3CoIzsYK3h8qgYeFDdzjMmOuSvNTmC+S3xgV1b4s/JjIUU1VwI+I4JVoXun41/BBk+E9Ig5PBbxLBO9UDo+h/UcS/Fw0SaMw2K2kzdjKvA1oje3XXUHwhUxqTJkSs2i7zpgusK22AXC/TsVIHxOt14THvgD6WLtKKiLEN1x6ZYKXGWFFgAEleJnwIiP0qRfRc2wFMwTL4CHMmLzdoOwe6ClVkoU5+4C7F2B0ddBVRu8NE/LzuSguwDtTXMfkvNUVo68jElposDnd3ikS3kNvk/TeBW3ijnm8FWPcfEw4ggCHRHjUwqqmWfAJBNgKDRY1XldwNibYZnmGxz2+bkANMkElPxmsRdAJ6HDGdkS3OSbqNISDtVtcXbaCT0hzN9FiA7TFjPqTSIAB82paZMv0COEdQfbpx0TeosPUZFoPcW4NQN2Sy0Y2jDLSA78qyw3h74Tf9CqFx/1I1ca4pVRdZMmfVkInIA3wSrWOJtt+EITvtIyTwuP8dRw07i89S3YCDhnbJbLat0XFyFbiw3aOTsBGwsZ24ToapxXmdRY5BQg6Oc+WcPFFAQGe1oktwCHqzjLkO1LHkhjZWf6fdqZ1wXW8XN0DzOCGOA0MQgzWpThLjbRMwkrK4DyXG9ff6Tb5+L49GWnhW/gWvprxK8AA17MEbNrj+u8AAAAASUVORK5CYII=";function ApiHandler(a){function b(a){return moment.utc(a).format(e)}function c(a,c){var e=d.url+"/network/"+a.type+"?",f=a.start?"&start="+b(a.start):"",g=a.end?"&end="+b(a.end):"",h=a.interval?"&interval="+a.interval:"",i=a.currency?"&exchange_currency="+a.currency:"",j=a.issuer?"&exchange_issuer="+a.issuer:"",k="&limit="+(a.limit||1e3),l=a.period?"&live="+a.period:"";return e+=f+g+h+k+i+j+l,d3.json(e,function(a,b){a?c({status:a.status,text:a.statusText||"Unable to load data"}):(b.rows.forEach(function(a){a.total=Number(a.total),a.exchange_rate=Number(a.exchange_rate),a.components.forEach(function(a){a.rate=Number(a.rate),a.amount=Number(a.amount),a.converted_amount=Number(a.converted_amount||"0")})}),c(null,b))})}var d=this,e="YYYY-MM-DDTHH:mm:ss";d.url=a,this.getXRPstats=function(a){var b=d.url+"/network/xrp_distribution?descending=true&limit=1";return d3.json(b,function(b,c){b?a({status:b.status,text:b.statusText||"Unable to load data"}):a(null,c.rows[0])})},this.getTx=function(a,b){var c=d.url+"/transactions/"+a;return d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):b(null,c)})},this.getAccountTx=function(a,b){var c=d.url+"/accounts/"+a.account+"/transactions",e=a.limit?"&limit="+a.limit:"",f=a.marker?"&marker="+a.marker:"",g=a.descending?"&descending=true":"";return c+="?"+e+f+g,d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):b(null,c)})},this.getTopMarkets=function(a,b){var c=["XAU","XAG","BTC","ETH","LTC","XRP","EUR","USD","GBP","AUD","NZD","USD","CAD","CHF","JPY","CNY"],e=d.url+"/network/top_markets"+(a?"?limit="+a:"");return d3.json(e,function(d,e){if(d)b({status:d.status,text:d.statusText||"Unable to load data"});else{var f=[];e.markets.forEach(function(b,d){if(!(a&&d>=a)){var e={base:{currency:b.base_currency,issuer:b.base_issuer},counter:{currency:b.counter_currency,issuer:b.counter_issuer}},g=c.indexOf(e.base.currency),h=c.indexOf(e.counter.currency);(g>h||-1===g)&&(e={base:e.counter,counter:e.base}),f.push(e)}}),b(null,f)}})},this.offersExercised=function(a,c,e){var f=d.url+"/exchanges/",g=a.base.currency+(a.base.issuer?"+"+a.base.issuer:""),h=a.counter.currency+(a.counter.issuer?"+"+a.counter.issuer:""),i="all"===a.timeIncrement?"":"limit="+(a.limit||1e3),j=a.timeIncrement&&"all"!==a.timeIncrement?"&interval="+(a.timeMultiple||1)+a.timeIncrement:"",k=a.startTime?"&start="+b(a.startTime):"",l=a.endTime?"&end="+b(a.endTime):"",m=a.descending?"&descending=true":"",n=a.reduce===!0||"all"===a.timeIncrement?"&reduce=true":"";return f+=g+"/"+h+"?"+i+j+k+l+m+n,d3.json(f,function(b,d){b?e({status:b.status,text:b.statusText||"Unable to load data"}):c(a.reduce===!1?d.exchanges.map(function(a){return{time:moment.utc(a.executed_time),price:Number(a.rate),amount:Number(a.base_amount),amount2:Number(a.counter_amount),tx:a.tx_hash,type:a.taker===a.buyer?"buy":"sell"}}):d.exchanges.map(function(a){return{startTime:moment.utc(a.start),baseVolume:Number(a.base_volume),counterVolume:Number(a.counter_volume),count:a.count,open:Number(a.open),high:Number(a.high),low:Number(a.low),close:Number(a.close),vwap:Number(a.vwap),openTime:a.open_time,closeTime:a.close_time}}))})},this.paymentVolume=function(a,c,e){var f=d.url+"/payments/",g=a.currency?a.currency+(a.issuer?"+"+a.issuer:""):"",h=a.limit||1e3,i=a.timeIncrement?"&interval="+a.timeIncrement:"",j=a.startTime?"&start="+b(a.startTime):"",k=a.endTime?"&end="+b(a.endTime):"",l=a.descending?"&descending=true":"";return f+=g+"?limit="+h+i+j+k+l,d3.json(f,function(a,b){a?e({status:a.status,text:a.statusText||"Unable to load data"}):c(b)})},this.issuerCapitalization=function(a,c,e){var f=d.url+"/capitalization/"+a.currency+"+"+a.issuer,g=a.limit||1e3,h=a.interval?"&interval="+a.interval:"",i=a.start?"&start="+b(a.start):"",j=a.end?"&end="+b(a.end):"",k=a.descending?"&descending=true":"",l=a.adjusted?"&adjusted=true":"";return f+="?limit="+g+h+i+j+k+l,d3.json(f,function(a,b){a?e({status:a.status,text:a.statusText||"Unable to load data"}):c(b)})},this.getTotalAccounts=function(a,c){var e=d.url+"/accounts?reduce=true&start=2013-01-01";return a&&(e+="&end="+b(a)),d3.json(e,function(a,b){a?c({status:a.status,text:a.statusText||"Unable to load data"}):c(null,b?b.count||0:0)})},this.accountsCreated=function(a,c){var e=d.url+"/accounts?",f=a.startTime?"&start="+b(a.startTime):"",g=a.endTime?"&end="+b(a.endTime):"",h=a.timeIncrement?"&interval="+a.timeIncrement:"",i="&limit="+(a.limit||1e3);return e+=f+g+h+i,d3.json(e,function(a,b){a?c({status:a.status,text:a.statusText||"Unable to load data"}):c(null,b)})},this.getExchangeVolume=function(a,b){a.type="exchange_volume",c(a,b)},this.getPaymentVolume=function(a,b){a.type="payment_volume",c(a,b)},this.getIssuedValue=function(a,b){a.type="issued_value",c(a,b)},this.getExternalMarkets=function(a,b){var c=d.url+"/network/external_markets?",e=a.period?"&period="+a.period:"";return c+=e,d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):b(null,c.data)})},this.exchangeRate=function(a,c){var e=d.url+"/exchange_rates",f="/"+a.base.currency+(a.base.issuer?"+"+a.base.issuer:""),g="/"+a.counter.currency+(a.counter.issuer?"+"+a.counter.issuer:""),h=[];return a.date?h.push("date="+b(a.date)):a.period||h.push("live=true"),a.period&&h.push("period="+a.period),e+=f+g+(h.length?"?"+h.join("&"):""),d3.json(e,function(a,b){a?c({status:a.status,text:a.statusText||"Unable to load data"}):c(null,b.rate||0)})},this.activeAccounts=function(a,b){var c=d.url+"/active_accounts/",e=a.base.currency+(a.base.issuer?"+"+a.base.issuer:""),f=a.counter.currency+(a.counter.issuer?"+"+a.counter.issuer:""),g=a.period?"&period="+a.period:"",h=a.transactions?"&include_exchanges=true":"";return c+=e+"/"+f+"?"+g+h,d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):(c.accounts.forEach(function(a){a.base_volume=Number(a.base_volume),a.counter_volume=Number(a.counter_volume),a.exchanges.forEach(function(a){a.base_amount=Number(a.base_amount),a.counter_amount=Number(a.counter_amount)})}),b(null,c))})},this.getValidators=function(a){var b=d.url+"/network/validator_reports";return d3.json(b,function(b,c){b?a({status:b.status,text:b.statusText||"Unable to load data"}):a(null,c.reports)})},this.getValidator=function(a,b){var c=d.url+"/network/validators/"+a;return d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):b(null,c)})},this.getValidatorReports=function(a,b){var c=d.url+"/network/validators/"+a.pubkey+"/reports?descending=true";return d3.json(c,function(a,c){a?b({status:a.status,text:a.statusText||"Unable to load data"}):b(null,c.reports)})},this.getMaintenanceStatus=function(a){var b,c=d.url+"/maintenance/ripplecharts",e=setTimeout(function(){b.abort(),a({status:500,text:"Data Response Timeout"})},15e3);return b=d3.json(c,function(b,c){clearTimeout(e),b?a({status:b.status,text:b.statusText||"Unable to load data"}):a(null,c)})}}function formatReduceResult(a){return{startTime:a.startTime,openTime:a.openTime===1/0?null:moment.unix(a.openTime).format(),closeTime:a.closeTime?moment.unix(a.closeTime).format():null,baseVolume:a.curr1Volume,counterVolume:a.curr2Volume,count:a.numTrades,open:a.open,close:a.close,high:a.high,low:a.low,vwap:a.volumeWeightedAvg}}function offersExercisedReduce(a,b){var c;if(b)return c=a[0],"string"==typeof c.openTime&&(c.openTime=moment.utc(c.openTime).unix()),"string"==typeof c.closeTime&&(c.closeTime=moment.utc(c.closeTime).unix()),a.forEach(function(a,b){0!==b&&("string"==typeof a.openTime&&(a.openTime=moment.utc(a.openTime).unix()),"string"==typeof a.closeTime&&(a.closeTime=moment.utc(a.closeTime).unix()),(!c.open||a.openTime<c.openTime)&&(c.openTime=a.openTime,c.open=a.open),(!c.close||c.closeTime<a.closeTime)&&(c.closeTime=a.closeTime,c.close=a.close),(!c.high||a.high>c.high)&&(c.high=a.high),(!c.low||a.low<c.low)&&(c.low=a.low),c.curr1Volume+=a.curr1Volume,c.curr2Volume+=a.curr2Volume,c.numTrades+=a.numTrades)}),c.volumeWeightedAvg=c.curr2Volume/c.curr1Volume,c;var d=a[0][7],e=a[0][2];return c={openTime:d,closeTime:d,open:e,close:e,high:e,low:e,curr1Volume:0,curr2Volume:0,numTrades:0},a.forEach(function(a){var b=a[7],d=a[2];b<c.openTime&&(c.openTime=b,c.open=d),c.closeTime<b&&(c.closeTime=b,c.close=d),d>c.high&&(c.high=d),d<c.low&&(c.low=d),c.curr1Volume+=a[0],c.curr2Volume+=a[1],c.numTrades++}),c.volumeWeightedAvg=c.curr2Volume/c.curr1Volume,c}function offersExercisedMap(a,b){var c=moment.utc(a.close_time_timestamp).unix();a.transactions.forEach(function(a){"tesSUCCESS"===a.metaData.TransactionResult&&("Payment"===a.TransactionType||"OfferCreate"===a.TransactionType)&&a.metaData.AffectedNodes.forEach(function(d){var e=d.ModifiedNode||d.DeletedNode;if(e&&"Offer"===e.LedgerEntryType&&e.PreviousFields&&e.PreviousFields.TakerPays&&e.PreviousFields.TakerGets){var f,g,h,i,j,k=e.FinalFields.Account;"object"==typeof e.PreviousFields.TakerPays?(g=[e.PreviousFields.TakerPays.currency,e.PreviousFields.TakerPays.issuer],h=e.PreviousFields.TakerPays.value-e.FinalFields.TakerPays.value):(g=["XRP"],h=(e.PreviousFields.TakerPays-e.FinalFields.TakerPays)/1e6),"object"==typeof e.PreviousFields.TakerGets?(i=[e.PreviousFields.TakerGets.currency,e.PreviousFields.TakerGets.issuer],j=e.PreviousFields.TakerGets.value-e.FinalFields.TakerGets.value):(i=["XRP"],j=(e.PreviousFields.TakerGets-e.FinalFields.TakerGets)/1e6),f=j/h,b([g,i],[h,j,f,a.Account,k,k,a.Account,c,a.hash])}})})}function createTxProcessor(a,b){function c(c){var d={close_time_timestamp:(new Date).getTime(),transactions:[c.transaction]};d.transactions[0].metaData=c.meta,offersExercisedMap(d,function(c,d){var e=c,f=d;(!a.counter||a.counter.currency===c[0][0]&&a.counter.issuer===c[0][1]||a.counter.currency===c[1][0]&&a.counter.issuer===c[1][1])&&(!a.base||a.base.currency===c[0][0]&&a.base.issuer===c[0][1]||a.base.currency===c[1][0]&&a.base.issuer===c[1][1])&&(a.base.currency===c[1][0]&&a.base.issuer===c[1][1]&&(e=[c[1],c[0]],f=[d[1],d[0],1/d[2],d[3],d[4],d[6],d[5],d[7],d[8]]),b(a.reduce?offersExercisedReduce([f],!1):{key:e,value:f}))})}return c}function OffersExercisedListener(a,b){var c=this;c.displayFn=b,c.finishedInterval=function(){c.displayFn(formatReduceResult(c.storedResults),!0);var a=moment.utc(c.storedResults.startTime).add(c.viewOpts.timeMultiple,c.viewOpts.timeIncrement);c.resetStored([a.format()])},c.updateViewOpts(a)}function PriceChart(a){function b(a){var b=a.toDate()||new Date,c=String(b),d=c.match(/\(([^\)]+)\)$/)||c.match(/([A-Z]+) [\d]{4}$/);return d&&(d=d[1].match(/[A-Z]/g).join("")),!d&&/(GMT\W*\d{4})/.test(c)?RegExp.$1:d}function c(a,c){switch(c){case"da":return a.utc().format("MMMM D")+" <small>("+a.utc().format("hh:mm A")+" UTC)</small>";case"mo":return a.utc().format("MMMM YYYY")+" <small>UTC</small>";default:return a.format("MMMM D")+" &middot "+a.format("hh:mm:ss A")+" "+b(a)}}function d(a){x.html(a).style("opacity",1),a&&z.transition().duration(10).style("opacity",0)}function e(){var b=m.style("zoom")||1;"normal"===b?b=1:/%/.test(b)&&(b=parseFloat(b)/100);var d,e,f,g,h,i,j=d3.mouse(this)[0]/b,k=Math.max(0,Math.min(a.width+a.margin.left,j)),l=d3.bisect(S.map(function(a){return a.startTime}),K.invert(k-a.margin.left)),o=S[l];if(o){d=o.open.toPrecision(5),e=o.high.toPrecision(5),f=o.low.toPrecision(5),g=o.close.toPrecision(5),i=o.vwap.toPrecision(5),h=o.baseVolume.toFixed(2);var p=A.currency,q=n.select(".chartDetails");q.html('<span class="date">'+c(o.startTime.local(),F)+"</span><span><small>O:</small><b>"+d+'</b></span><span class="high"><small>H:</small><b>'+e+'</b></span><span class="low"><small>L:</small><b>'+f+"</b></span><span><small>C:</small><b>"+g+'</b></span><span class="vwap"><small>VWAP:</small><b>'+i+'</b></span><span class="volume"><small>Vol:</small><b>'+h+" "+p+"</b></span><span><small>Ct:</small><b>"+o.count+"</b></span>").style("opacity",1),u.transition().duration(50).attr("transform","translate("+K(o.startTime)+")"),w.transition().duration(50).attr("transform","translate("+K(o.startTime)+","+L(o.close)+")"),v.transition().duration(50).attr("x1",K(o.startTime)).attr("x2",a.width).attr("y1",L(o.close)).attr("y2",L(o.close)),u.style("opacity",1),v.style("opacity",1),w.style("opacity",1)}}function f(){n.html(""),r=n.selectAll("svg").data([0]),r.enter().append("svg").attr("width",a.width+a.margin.left+a.margin.right).attr("height",a.height+a.margin.top+a.margin.bottom),r.append("defs").append("clipPath").attr("id","clip").append("rect"),r.select("rect").attr("width",a.width).attr("height",a.height),s=r.append("g").attr("transform","translate("+a.margin.left+","+a.margin.top+")"),s.append("rect").attr("class","background").attr("width",a.width).attr("height",a.height),s.append("g").attr("class","x axis"),s.append("g").attr("class","volume axis").append("text").text("Volume").attr("class","title").attr("transform","rotate(-90)").attr("y",15).attr("x",-110),s.append("g").attr("class","price axis").attr("transform","translate("+a.width+", 0)").append("text").text("Price").attr("class","title").attr("transform","rotate(-90)").attr("y",-10).attr("x",-100),s.append("path").attr("class","line"),s.append("g").attr("class","volumeBars").attr("clip-path","url(#clip)"),s.append("g").attr("class","candlesticks").attr("clip-path","url(#clip)"),t=r.append("svg:defs").append("svg:linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%").attr("spreadMethod","pad"),t.append("svg:stop").attr("offset","0%").attr("stop-color","#ccc").attr("stop-opacity",.5),t.append("svg:stop").attr("offset","100%").attr("stop-color","#ddd").attr("stop-opacity",.5),u=s.append("line").attr("class","hover").attr("y2",a.height),v=s.append("line").attr("class","hover"),w=s.append("circle").attr("class","focus dark").attr("r",3),x=n.append("h4").attr("class","status"),y=n.append("div").attr("class","chartDetails").style("left",a.margin.left+"px").style("right",a.margin.right+"px").style("top",a.margin.top-1+"px").style("opacity",0),z=n.append("img").attr("class","loader").attr("src",LOADER_PNG).style("opacity",0),R&&(r.style("opacity",.5),z.style("opacity",1))}function g(b){d(R||S&&S.length?"":"No Data for this Period");var c=b?0:250,f=(moment(D).unix()-moment(C).unix())/G,g=a.width/(1.5*f);3>g?g=1:4>g&&(g=2);var h=A.currency,i=B.currency;s.select(".axis.price").select("text").text("Price ("+i+")"),s.select(".axis.volume").select("text").text("Volume ("+h+")"),r.datum(S,function(a){return a.startTime}).on("mousemove",e).on("touchmove",e).on("touchstart",e).on("touchend",e),K.domain([C,moment.utc(D).add(f/35*G,"seconds")]).range([0,a.width]),M.domain([0,2*d3.max(S,function(a){return a.baseVolume})]).range([a.height,0]),"line"===E?(s.select(".line").style("opacity",1),s.select(".candlesticks").style("opacity",0),L.domain([.975*d3.min(S,function(a){return Math.min(a.close)}),1.025*d3.max(S,function(a){return Math.max(a.close)})]).range([a.height-20,0])):(s.select(".line").style("opacity",0),s.select(".candlesticks").style("opacity",1),L.domain([.975*d3.min(S,function(a){return Math.min(a.open,a.close,a.high,a.low)}),1.025*d3.max(S,function(a){return Math.max(a.open,a.close,a.high,a.low)})]).range([a.height-20,0]));var j=d3.svg.line().x(function(a){return K(a.startTime)}).y(function(a){return L(a.close)});s.select(".line").datum(S,function(a){return a.startTime}).transition().duration(c).attr("d",j);var k=s.select(".candlesticks").selectAll("g").data(S,function(a){return a.startTime}),l=k.enter().append("g").attr("transform",function(a){return"translate("+K(a.startTime)+")"});l.append("line").attr("class","extent"),l.append("line").attr("class","high"),l.append("line").attr("class","low"),l.append("rect");var m=k.classed("up",function(a,b){if(b>0){var c=S[b-1];return c.close<=a.close}return a.open<=a.close}).classed("filled",function(a){return a.close<=a.open}).transition().duration(c).attr("transform",function(a){return"translate("+K(a.startTime)+")"});m.select(".extent").attr("y1",function(a){return L(a.low)}).attr("y2",function(a){return L(a.high)}),m.select("rect").attr("x",-g/2).attr("width",g).attr("y",function(a){return L(Math.max(a.open,a.close))}).attr("height",function(a){return Math.abs(L(a.open)-L(a.close))+.5}),m.select(".high").attr("x1",-g/4).attr("x2",g/4).attr("y1",function(a){return L(a.high)}).attr("y2",function(a){return L(a.high)}),m.select(".low").attr("x1",-g/4).attr("x2",g/4).attr("y1",function(a){return L(a.low)}).attr("y2",function(a){return L(a.low)}),d3.transition(k.exit()).attr("transform",function(a){return"translate("+K(a.startTime)+")"}).style("opacity",1e-6).remove();var n=s.select(".volumeBars").selectAll("rect").data(S,function(a){return a.startTime});n.enter().append("rect"),n.data(S,function(a){return a.startTime}).transition().duration(c).attr("x",function(a){return K(a.startTime)-g/3}).attr("y",function(a){return M(a.baseVolume)}).attr("width",g/1.2).attr("height",function(b){return a.height-M(b.baseVolume)}).style("fill","url(#gradient)"),n.exit().remove(),s.select(".x.axis").attr("transform","translate(0,"+M.range()[0]+")").transition().duration(c).call(N),s.select(".price.axis").attr("transform","translate("+K.range()[1]+", 0)").transition().duration(c).call(P),s.select(".volume.axis").transition().duration(c).call(O),R||(r.transition().duration(c).style("opacity",1),z.transition().duration(c).style("opacity",0))}function h(a){var b=S.length?S[0]:null,c=S.length?S[S.length-1]:null,d=a;d.startTime=moment.utc(d.startTime),d.live=!0,c&&c.startTime.unix()===d.startTime.unix()?S[S.length-1]=d:(d.baseVolume&&S.push(d),C.add(G,"seconds"),D.add(G,"seconds"),b&&b.startTime.unix()<C.unix()&&S.shift()),S.length&&g()}function i(){var b=a.width,c=a.height,d=parseInt(m.style("width"),10),e=parseInt(m.style("height"),10);d&&e&&(a.width=d-a.margin.left-a.margin.right,a.height=e-a.margin.top-a.margin.bottom,a.height<150&&(a.height=150),(b!==a.width||c!==a.height)&&(r.attr("width",a.width+a.margin.left+a.margin.right).attr("height",a.height+a.margin.top+a.margin.bottom),r.select("rect").attr("width",a.width).attr("height",a.height),r.select("rect.background").attr("width",a.width).attr("height",a.height),A&&B&&g(!0)))}function j(a){var b;if(a.subtract(a.milliseconds(),"milliseconds"),"se"===F)b=a.subtract(a.seconds()%H,"seconds");else if("mi"===F)b=a.subtract({seconds:a.seconds(),minutes:a.minutes()%H});else if("ho"===F)b=a.subtract({seconds:a.seconds(),minutes:a.minutes(),hours:a.hours()%H});else if("da"===F){var c,d;1===H?c=0:(d=a.diff(moment.utc([2013,0,1]),"hours")/24,c=0>d?H-(0-Math.floor(d))%H:Math.floor(d)%H),b=a.subtract({seconds:a.seconds(),minutes:a.minutes(),hours:a.hours(),days:c})}else"we"===F?b=a.subtract({seconds:a.seconds(),minutes:a.minutes(),hours:a.hours(),days:a.day(),weeks:a.isoWeek()%H}):"mo"===F&&(b=a.subtract({seconds:a.seconds(),minutes:a.minutes(),hours:a.hours(),days:a.date()-1,months:a.months()%H}));return b}function k(){var a,b={startTime:moment.utc(I),baseVolume:0,counterVolume:0,count:0,open:0,high:0,low:0,close:0,vwap:0,openTime:1/0,closeTime:0};switch(F){case"se":a="second";break;case"mi":a="minute";break;case"ho":a="hour";break;case"da":a="day";break;case"we":a="week";break;case"mo":a="month";break;default:a=F}var c={base:A,counter:B,timeIncrement:a,timeMultiple:H,incompleteApiRow:b};l?l.updateViewOpts(c):l=new OffersExercisedListener(c,h)}var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J=this,K=d3.time.scale(),L=d3.scale.linear(),M=d3.scale.linear(),N=d3.svg.axis().scale(K),O=d3.svg.axis().scale(M).orient("left").tickFormat(d3.format("s")),P=d3.svg.axis().scale(L).orient("right"),Q=new ApiHandler(a.url),R=!0,S=[];if(J.onStateChange=null,E=a.type?a.type:"line",m=a.id?d3.select("#"+a.id):d3.select("body").append("div"),o=parseInt(m.style("height"),10)||0,p=parseInt(m.style("width"),10)||0,n=m.append("div").attr("class","priceChart"),m.classed("priceChartWrap"),a.margin||(a.margin={top:2,right:60,bottom:20,left:60}),a.width||(a.width=p-a.margin.left-a.margin.right),a.height?a.height-=a.margin.top-a.margin.bottom:o?a.height=o-a.margin.top-a.margin.bottom:a.height=window.innerHeight-a.margin.top-a.margin.bottom,a.height<150&&(a.height=150),a.width<0&&(a.width=0),a.resize)addResizeListener(m.node(),i);else{var T=parseInt(y.style("padding-left"),10)+parseInt(y.style("padding-right"),10);y.style("width",a.width-T+"px").style("right","auto"),n.style("width",a.width+a.margin.left+a.margin.right+"px"),n.style("height",(a.height||q)+a.margin.top+a.margin.bottom+"px")}f(),this.resizeChart=function(){i()},this.fadeOut=function(){n.selectAll("svg").transition().duration(100).style("opacity",.5),r.on("mousemove",null).on("touchmove",null),y.style("opacity",0),x.style("opacity",0),n.selectAll(".hover").style("opacity",0),n.selectAll(".focus").style("opacity",0),z.transition().duration(100).style("opacity",1)},this.setType=function(a){E=a,S.length&&g()},this.getRawData=function(){return S},this.load=function(b,c,e){if(!b)return void d("Base currency is required.");if(!c)return void d("Counter currency is required.");if(!e||!e.interval)return void d("Interval is required.");switch(F=e.interval.slice(0,2)){case"se":G=1;break;case"mi":G=60;break;case"ho":G=3600;break;case"da":G=86400;break;case"we":G=604800;break;case"mo":G=2635200;break;default:d("Invalid Interval")}J.onStateChange&&J.onStateChange("loading"),J.fadeOut(),A=b,B=c,H=e.multiple||1,S=[],R=!0,G*=H,I=j(moment.utc(e.end)),D=moment.utc(I).add(G,"seconds"),C=e.start?j(moment.utc(e.start)):moment.utc(e.offset(D)),l&&l.stopListener(),a.live&&e.live&&k(),J.request&&J.request.abort(),J.request=Q.offersExercised({startTime:C.format(),endTime:D.format(),timeIncrement:e.interval,timeMultiple:e.multiple,descending:!1,base:A,counter:B},function(b){if(S.length&&b.length){var c=S.shift(),d=b[b.length-1],f=d.baseVolume+c.baseVolume;d.high>c.high&&(d.high=c.high),d.low<c.low&&(d.low=c.low),d.vwap=(d.vwap*d.baseVolume+c.vwap*c.baseVolume)/f,d.baseVolume=f,d.close=c.close,d.closeTime=c.closeTime,b[b.length-1]=d}a.live&&e.live&&l.resetStored(b[b.length-1],!0),S=b.concat(S),R=!1,J.onStateChange&&J.onStateChange("loaded"),g()},function(a){J.onStateChange&&J.onStateChange("error"),R=!1,console.log(a),d(a.text?a.text:"Unable to load data")})},this.suspend=function(){l&&l.stopListener()}}if(function(){function a(a){var b=a.__resizeTriggers__,c=b.firstElementChild,d=b.lastElementChild,e=c.firstElementChild;d.scrollLeft=d.scrollWidth,d.scrollTop=d.scrollHeight,e.style.width=c.offsetWidth+1+"px",e.style.height=c.offsetHeight+1+"px",c.scrollLeft=c.scrollWidth,c.scrollTop=c.scrollHeight}function b(a){return a.offsetWidth!=a.__resizeLast__.width||a.offsetHeight!=a.__resizeLast__.height}function c(c){var d=this;a(this),this.__resizeRAF__&&h(this.__resizeRAF__),this.__resizeRAF__=g(function(){b(d)&&(d.__resizeLast__.width=d.offsetWidth,d.__resizeLast__.height=d.offsetHeight,d.__resizeListeners__.forEach(function(a){a.call(d,c)}))})}function d(){if(!f){var a=(s?s:"")+".resize-triggers { "+(t?t:"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',b=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a)),b.appendChild(c),f=!0}}var e=document.attachEvent,f=!1;if(!e){var g=function(){var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)};return function(b){return a(b)}}(),h=function(){var a=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(b){return a(b)}}(),i=!1,j="animation",k="",l="animationstart",m="Webkit Moz O ms".split(" "),n="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),o="",p=document.createElement("fakeelement");if(void 0!==p.style.animationName&&(i=!0),i===!1)for(var q=0;q<m.length;q++)if(void 0!==p.style[m[q]+"AnimationName"]){o=m[q],j=o+"Animation",k="-"+o.toLowerCase()+"-",l=n[q],i=!0;break}var r="resizeanim",s="@"+k+"keyframes "+r+" { from { opacity: 0; } to { opacity: 0; } } ",t=k+"animation: 1ms "+r+"; "}window.addResizeListener=function(b,f){e?b.attachEvent("onresize",f):(b.__resizeTriggers__||("static"==getComputedStyle(b).position&&(b.style.position="relative"),d(),b.__resizeLast__={},b.__resizeListeners__=[],(b.__resizeTriggers__=document.createElement("div")).className="resize-triggers",b.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',b.appendChild(b.__resizeTriggers__),a(b),b.addEventListener("scroll",c,!0),l&&b.__resizeTriggers__.addEventListener(l,function(c){c.animationName==r&&a(b)})),b.__resizeListeners__.push(f))},window.removeResizeListener=function(a,b){e?a.detachEvent("onresize",b):(a.__resizeListeners__.splice(a.__resizeListeners__.indexOf(b),1),a.__resizeListeners__.length||(a.removeEventListener("scroll",c),a.__resizeTriggers__=!a.removeChild(a.__resizeTriggers__)))}}(),OffersExercisedListener.prototype.updateViewOpts=function(a){function b(){g.interval=setInterval(function(){g.finishedInterval()},moment.duration(g.viewOpts.timeMultiple,g.viewOpts.timeIncrement).asMilliseconds())}function c(){var a={command:"subscribe",streams:["transactions"]};return remote.connection.request(a)}function d(a){return a.openTime=moment.utc(a.openTime).toArray().slice(0,6),a.timeIncrement&&(a.reduce=!0,a.timeMultiple||(a.timeMultiple=1)),a.base&&a.counter?a.base&&""===a.base.issuer?delete a.base.issuer:a.counter&&""===a.counter.issuer&&delete a.counter.issuer:a.reduce=!1,a}function e(){if(g.stopListener(),g.viewOpts=d(a),g.viewOpts.timeIncrement){g.resetStored(g.viewOpts.incompleteApiRow||[]),g.txProcessor=createTxProcessor(g.viewOpts,function(a){g.storedResults=offersExercisedReduce([g.storedResults,a],!0),g.displayFn(formatReduceResult(g.storedResults))});var c=moment.utc(g.storedResults.startTime).add(g.viewOpts.timeMultiple,g.viewOpts.timeIncrement),e=c.diff(moment.utc());if(e>20736e5)return;e>0?g.timeout=setTimeout(function(){g.finishedInterval(),b(g)},e):(g.finishedInterval(),b())}else g.txProcessor=createTxProcessor(g.viewOpts,g.displayFn);remote.connection.on("transaction",g.txProcessor)}function f(){remote.connect().then(e).then(c)["catch"](function(a){console.log(a),"DisconnectedError"===a.name&&(console.log("attempting reconnect"),f())})}var g=this;f()},OffersExercisedListener.prototype.resetStored=function(a,b){function c(a){var b=a.openTime||a[9],c=a.closeTime||a[10];return"string"==typeof b&&(b=moment.utc(b).unix()),"string"==typeof c&&(c=moment.utc(c).unix()),{startTime:moment.utc(a.startTime||a.time||a[0]).format(),curr1Volume:a.baseVolume||a[1]||0,curr2Volume:a.counterVolume||a[2]||0,numTrades:a.count||a[3]||0,open:a.open||a[4]||0,high:a.high||a[5]||0,low:a.low||a[6]||0,close:a.close||a[7]||0,volumeWeightedAvg:a.vwap||a[8]||0,openTime:b||1/0,closeTime:c||0}}var d=c(a||[]),e=this.storedResults?moment.utc(this.storedResults.startTime):null;b&&this.storedResults&&!e.diff(d.startTime)?this.storedResults=offersExercisedReduce([this.storedResults,d],!0):b&&this.storedResults&&e.diff(d.startTime)>0||(this.storedResults=d),this.storedResults.curr1VwavNumerator=this.storedResults.volumeWeightedAvg*this.storedResults.curr1Volume},OffersExercisedListener.prototype.stopListener=function(){var a=this;a.storedResults={},a.interval&&clearInterval(a.interval),a.timeout&&clearTimeout(a.timeout),a.check&&clearInterval(a.check),a.txProcessor&&remote.connection.removeListener("transaction",a.txProcessor)},!LOADER_PNG)var LOADER_PNG="assets/images/rippleThrobber.png";remote=new ripple.RippleAPI({server:"wss://s1.ripple.com"});var PriceChartWidget=function(a){var b,c,d,e=this;if(a||(a={}),!a.customCSS&&"undefined"!=typeof PRICECHART_CSS){var f=document.createElement("style");f.innerHTML=PRICECHART_CSS,document.getElementsByTagName("head")[0].appendChild(f)}a.id?b=d3.select("#"+a.id):(a.id="pc"+Math.random().toString(36).substring(5),b=d3.select("body").append("div").attr("id",a.id)),c=a.bodyTheme?d3.select("body"):b,d=null;var g=new PriceChart({url:a.apiURL||API,id:a.id,margin:a.margin,width:a.width,height:a.height,resize:a.resize||!1,live:!0});return this.load=function(a){a||(a={});var b={start:a.start,end:a.end,interval:a.interval,multiple:a.multiple,offset:a.offset,live:a.end?void 0:a.live};if(!b.start&&!b.offset&&b.interval){var e=b.interval.slice(0,2),f=b.multiple||1;"se"==e?b.offset=function(a){return function(b){return d3.time.minute.offset(b,-2*a)}}(f):"mi"==e?b.offset=function(a){return function(b){return d3.time.hour.offset(b,-2*a)}}(f):"ho"==e?b.offset=function(a){return function(b){return d3.time.day.offset(b,-5*a)}}(f):"da"==e?b.offset=function(a){return function(b){return d3.time.day.offset(b,-120*a)}}(f):"we"==e?b.offset=function(a){return function(b){return d3.time.year.offset(b,-2*a)}}(f):"mo"==e&&(b.offset=function(a){return function(a){return d3.time.year.offset(a,-10)}}(f))}d&&a.theme&&a.theme!=d&&c.classed(d,!1),a.theme&&(c.classed(a.theme,!0),d=a.theme),g.setType(a.type),g.load(a.base,a.counter,b)},this.loadFromQS=function(){function a(a,b,c){var d=200*c,e=b?b.slice(0,2):null;return e||(e=null),"mi"===e?moment.utc().subtract(d,"minutes"):"ho"===e?moment.utc().subtract(d,"hours"):"da"===e?moment.utc().subtract(d,"days"):"we"===e?moment.utc().subtract(d,"weeks"):"mo"===e?moment.utc().subtract(d,"months"):"ye"===e?moment.utc().subtract(d,"years"):moment.utc().subtract(1,"days")}function b(){for(var a={},b=window.location.search.substring(1),c=b?b.split("&"):[],d=0;d<c.length;d++){var e=c[d].split("="),f=decodeURIComponent(e[0]),g=decodeURIComponent(e[1]);try{a[f]=JSON.parse(g)}catch(h){a[f]=g}}return a}var c=b();if(c.base||(c.base={currency:"XRP",issuer:""}),c.counter||(c.counter={currency:"USD",issuer:"rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"}),c.type||(c.type="line"),c.theme||(c.theme="light"),c.multiple||(c.multiple=1),c.end=c.end?moment.utc(c.end):moment.utc(),c.start=c.start?moment.utc(c.start):a(c.end,c.interval,c.multiple),!c.interval){var d=Math.abs(c.start.diff(c.end,"days"));if(d>365)c.interval="month",c.multiple=1;else if(d>120)c.interval="day",c.multiple=3;else if(d>30)c.interval="day",c.multiple=1;else if(d>5)c.interval="hour",c.multiple=4;else if(d>3)c.interval="hour",c.multiple=1;else{var f=Math.abs(c.start.diff(c.end,"hours"));f>12?(c.interval="minute",c.multiple=15):f>2?(c.interval="minute",c.multiple=5):(c.interval="minute",c.multiple=1)}}e.load(c)},this.resize=g.resizeChart,this.suspend=g.suspend(),this};