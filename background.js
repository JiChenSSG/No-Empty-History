urlData = {}

const sessions = chrome.sessions
const history = chrome.history
const storage = chrome.storage

// 初始化data
getUrl()

//监听session变化
sessions.onChanged.addListener(
    function () {
        for (var url in urlData) {
            if (urlData[url] == 1) {
                deleteHistory(url)
            }
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
function addUrl(url, status) {
    urlData[url] = status

    storage.sync.set({ urlData: urlData })
}

function delUrl(url) {
    delete urlData[url]

    storage.sync.set({ urlData: urlData })
}


// 获取url
function getUrl() {
    storage.sync.get(['urlData'], function (result) {
        urlData = result.urlData
    })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request)
    if (request.type == 'getUrl') {
        sendResponse({ urlData: urlData })
    } else if (request.type == 'addUrl') {
        addUrl(request.url, request.status)
        sendResponse({ urlData: urlData })
    } if (request.type == 'deleteUrl') {
        delUrl(request.url)
        sendResponse({ urlData: urlData })
    }
})