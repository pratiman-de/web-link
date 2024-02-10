chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    const urls = tabs.map(tab => tab.url);
    const data = urls.join('\n');
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
      url: url,
      filename: 'tab_links.txt',
      saveAs: true
    });
  });
});
