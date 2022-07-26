var historys = []

// chrome.history.search({ text: 'pornhub' }, function (historyItems) {
//     for (var i = 0; i < historyItems.length; i++) {
//         historys.push(historyItems[i].url)
//         chrome.history.deleteUrl({ url: historyItems[i].url });
//     }
// })

chrome.sessions.onChanged.addListener(
    {
        function() {
            chrome.history.search({ text: 'pornhub' }, function (historyItems) {
                for (var i = 0; i < historyItems.length; i++) {
                    historys.push(historyItems[i].url)
                    chrome.history.deleteUrl({ url: historyItems[i].url });
                }
            })
        }
    }
)

console.log(historys)