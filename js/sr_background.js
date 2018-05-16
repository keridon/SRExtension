// バックグラウンド スクリプト

// メッセージ受信時の処理
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // ウィンドウのアクティブ化
    chrome.windows.update(sender.tab.windowId, { focused: true });
    // タブのアクティブ化
    chrome.tabs.update(sender.tab.id, { active: true, highlighted: true });
});
