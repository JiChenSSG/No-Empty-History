var historys = []

chrome.history.search({ text: '' }, function (historyItems) {
    for (var i = 0; i < historyItems.length; i++) {
        var item = historyItems[i]
        historys.push({
            url: item.url,
            title: item.title,
            lastVisitTime: item.lastVisitTime,
            visitCount: item.visitCount
        })
    }
})

console.log(historys)