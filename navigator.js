class Navigator {
    constructor(navigatorConfig) {
        this.pages = navigatorConfig.pages;  // schema: {pageId: pageData, ...}
        this.activate = navigatorConfig.activate;  // function(pageData)
        this.deactivate = navigatorConfig.deactivate;  // function(pageData)
        this.setupEventListeners();
        this.selectPage(navigatorConfig.initialPage);  // id of page to select
    }

    getId(str) {
        return str.substring(str.lastIndexOf('#') + 1);
    }

    setupEventListeners() {
        let pageIds = Object.keys(this.pages);
        // add click handler to every anchor pointing to a valid page id
        Array.from(document.getElementsByTagName('a'))
            .filter(anchorElement => pageIds.includes(
                this.getId(anchorElement.href)
            ))
            .forEach(anchorElement => {
                let anchorPageId = this.getId(anchorElement.href);
                let boundHandler = this.selectPage.bind(
                    this, anchorPageId
                );
                anchorElement.addEventListener("click", event => {
                    event.preventDefault();
                    boundHandler();
                    return false;
                })
            });
        // handle change of location.hash by user (in the browser address bar)
        let partiallyBoundHandler = this.selectId.bind(this);
        window.addEventListener("hashchange", event => {
            partiallyBoundHandler(location.hash.substring(1));
        });
    }

    selectPage(pageId) {
        Object.keys(this.pages).forEach(navPageId => {
            let pageData = this.pages[navPageId];
            if (navPageId === pageId) {
                this.activate(pageData);
            } else {
                this.deactivate(pageData);
            }
            this.activePage = pageId;
        });
    }

    selectId(pageId) {
        if (Object.keys(this.pages).includes(pageId)) {
            this.selectPage(pageId);
        }
    }
}
