urlData = []

const sessions = chrome.sessions
const history = chrome.history
const storage = chrome.storage

// 初始化data
urlData = getUrl()

if (urlData == undefined) {
    urlData = []
}

//监听session变化
sessions.onChanged.addListener(
    function () {
        for (var url in urlData) {
            deleteHistory(url)
        }
    }
)

// 删除包含特定url的历史记录
function deleteHistory(url) {
    history.search({ text: url }, function (historyItems) {
        for (var i = 0; i < historyItems.length; i++) {
            history.deleteUrl({ url: historyItems[i].url });
        }
    })
}

// 添加url
function addUrl(url) {
    urlData.push(url)

    storage.sync.set({ 'urlData': urlData })
}

// 获取url
function getUrl() {
    var res

    storage.sync.get(['urlData'], function (result) {
        console.log(result)
        res = result.urlData
    })

    console.log(res)
    return res
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == 'getUrl') {
        sendResponse({ urlData: urlData })
    } else if (request.type == 'addUrl') {
        addUrl(request.url)
        console.log(getUrl())
    }
})