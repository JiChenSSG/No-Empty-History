//监听session变化
chrome.sessions.onChanged.addListener(
    function () {
        chrome.history.search({ text: 'pornhub' }, function (historyItems) {
            for (var i = 0; i < historyItems.length; i++) {
                chrome.history.deleteUrl({ url: historyItems[i].url });
            }
        })
    }
)

