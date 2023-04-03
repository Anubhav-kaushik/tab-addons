function addTabs(tabsData, tabsContainerSelector, tabsContentContainerSelector) {
    const tabsContainer = document.querySelector(tabsContainerSelector);
    const tabsContentContainer = document.querySelector(tabsContentContainerSelector);
    tabsContainer.innerHTML = '';
    tabsContentContainer.innerHTML = '';

    let n = 1;
    // Create tab
    for (let tabName in tabsData) {
        const tab = createTab(tabName, n, tabsContainerSelector, tabsContentContainerSelector);
        tabsContainer.append(tab);

        let tabData = tabsData[tabName];
        const tabContent = createTabContent(tabData, n);
        tabsContentContainer.append(tabContent);

        n++
    }
}

function createTab(tabname, num, tabsContainerSelector, tabsContentSelector) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.dataset.tabNum = num;
    if (num == 1) {
        tab.dataset.status = 'active';
    } else {
        tab.dataset.status = 'inactive';
    }
    
    tab.addEventListener('click', function(e) {
            showSelected(this, tabsContainerSelector, tabsContentSelector)
    })

    const tabHeading = document.createElement('h3');
    tabHeading.classList.add('tab-heading');
    tabHeading.innerHTML = tabname;
    tab.append(tabHeading);

    return tab;
}

function createTabContent(tabData, tabNumber) {
    const tabContentBlock = document.createElement('div');
    tabContentBlock.classList.add('tab-content');
    tabContentBlock.dataset.tabNum = tabNumber;
    if (tabNumber == 1) {
        tabContentBlock.dataset.status = 'active';
    } else {
        tabContentBlock.dataset.status = 'inactive';
    }


    tabContentBlock.append(tabData);

    return tabContentBlock;
}

function showSelected(tab, tabsContainerSelector, tabsContentSelector) {
    const tabNum = tab.dataset.tabNum;

    const tabsContainer = document.querySelectorAll(`${tabsContainerSelector} .tab`);

    for (let tabContainer of tabsContainer) {
        tabContainer.dataset.status = 'inactive'
    }

    tab.dataset.status = 'active';

    const contentContainer = document.querySelector(tabsContentSelector);
    const tabsContent = contentContainer.querySelectorAll('.tab-content');
    const activeTab = contentContainer.querySelector(`[data-tab-num="${tabNum}"]`);

    for (let tab of tabsContent) {
        tab.dataset.status = 'inactive';
    }

    activeTab.dataset.status = 'active';
}