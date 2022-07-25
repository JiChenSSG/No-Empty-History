/* global chrome */

var history = []

chrome.history.search({ text: '' }, function (historyItems) {
    for (var i = 0; i < historyItems.length; i++) {
        var item = historyItems[i]
        history.push({
            url: item.url,
            title: item.title,
            lastVisitTime: item.lastVisitTime,
            visitCount: item.visitCount
        })
    }
})

console.log(history)