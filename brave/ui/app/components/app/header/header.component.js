import React, { PureComponent } from 'react'

export default class BraveHeader extends PureComponent {

  openChromePage (route) {
    if (!route) {
      return
    }

    chrome.tabs.update({
      url: `chrome://${route}`,
    })
  }

  render () {
    const pathName = window.location.pathname

    if (pathName === '/notification.html' || pathName === '/popup.html') {
      return null
    }

    return (
      <div className="br-toolbar fonts-loaded">
        <ul className="nav-items" role="navigation" aria-label="Category navigation">
          <li className="nav-items_list-item" title="Settings">
            <span onClick={() => { this.openChromePage('settings') }} className="nav-item">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fillRule="evenodd" d="M10 15.884c-.068 0-.136 0-.204-.003l-.928 1.413c-.24.365-.692.538-1.112.417a8.124 8.124 0 0 1-3.389-1.938.998.998 0 0 1-.194-1.175l.77-1.505a5.904 5.904 0 0 1-.197-.34l-1.705-.09a1 1 0 0 1-.922-.749 7.946 7.946 0 0 1-.244-1.946c0-.655.083-1.306.245-1.947a.998.998 0 0 1 .918-.747l1.708-.09c.062-.115.128-.229.198-.34L4.173 5.34a.998.998 0 0 1 .195-1.176 8.121 8.121 0 0 1 3.386-1.937c.422-.121.875.052 1.114.416l.928 1.414a5.872 5.872 0 0 1 .408 0l.928-1.414c.24-.364.691-.537 1.113-.416a8.126 8.126 0 0 1 3.388 1.938 1 1 0 0 1 .194 1.175l-.77 1.505c.069.111.135.225.197.34l1.705.09a1 1 0 0 1 .922.748c.16.64.244 1.29.244 1.946a7.95 7.95 0 0 1-.245 1.948.998.998 0 0 1-.918.746l-1.708.09a5.948 5.948 0 0 1-.198.34l.773 1.508a1 1 0 0 1-.197 1.174 8.124 8.124 0 0 1-3.386 1.937 1.005 1.005 0 0 1-1.114-.417l-.928-1.413a5.872 5.872 0 0 1-.204.003zm-2.087.545l1.022-1.557a.637.637 0 0 1 .592-.284 5.031 5.031 0 0 0 .946 0 .637.637 0 0 1 .592.284l1.022 1.557a6.85 6.85 0 0 0 2.513-1.435l-.849-1.655a.637.637 0 0 1 .051-.664c.183-.253.34-.52.468-.803a.637.637 0 0 1 .546-.371l1.877-.1c.105-.473.159-.952.159-1.433 0-.48-.054-.96-.159-1.433l-1.877-.1a.637.637 0 0 1-.546-.37 4.68 4.68 0 0 0-.468-.803.637.637 0 0 1-.05-.664l.848-1.656a6.853 6.853 0 0 0-2.513-1.434l-1.022 1.557a.637.637 0 0 1-.592.284 5.031 5.031 0 0 0-.946 0 .637.637 0 0 1-.592-.284L7.913 3.508A6.849 6.849 0 0 0 5.4 4.942l.849 1.656c.109.213.09.47-.051.664-.185.254-.341.522-.468.801a.637.637 0 0 1-.546.373l-1.877.1a6.635 6.635 0 0 0-.159 1.432c0 .481.054.96.159 1.433l1.877.1a.637.637 0 0 1 .546.372c.127.28.283.547.468.802.14.194.16.45.05.664L5.4 14.994a6.851 6.851 0 0 0 2.513 1.435zm.4-6.46a1.687 1.687 0 1 0 3.374 0 1.687 1.687 0 0 0-3.374 0zm-1.274 0a2.96 2.96 0 1 1 5.922 0 2.96 2.96 0 0 1-5.922 0z"></path>
                </svg>
              </span>
              <span className="nav-item_text">Settings</span>
            </span>
          </li>
          <li className="nav-items_list-item" title="Brave Rewards">
            <span onClick={() => { this.openChromePage('rewards') }} className="nav-item">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fillRule="evenodd" d="M13.595 12.065l-2.974-4.73V4.755l5.325 8.877-2.35-1.568zM7.063 13.11h5.846l1.897 1.265H4.85l2.214-1.265zm2.308-5.775l-2.96 4.708-2.15 1.228 5.11-8.515v2.579zm.625 1.355l1.994 3.17H8.002l1.994-3.17zm8.036 5.988l-7.5-12.5c-.02-.032-.046-.058-.071-.086a.616.616 0 0 0-.465-.217.617.617 0 0 0-.465.217c-.025.027-.052.053-.07.086l-7.5 12.5a.641.641 0 0 0-.067.156l-.002.011a.619.619 0 0 0-.008.256.606.606 0 0 0 .068.207l.001.002c.01.018.025.031.037.048.02.028.04.059.064.083.024.024.051.042.078.062.018.012.033.027.051.038.03.017.06.027.092.038.02.008.038.019.059.024a.652.652 0 0 0 .143.02l.019.002h15a.624.624 0 0 0 .536-.947z"></path>
                </svg>
              </span>
              <span className="nav-item_text">Brave Rewards</span>
            </span>
          </li>
          <li className="nav-items_list-item" title="History">
            <span onClick={() => { this.openChromePage('history') }} className="nav-item">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fillRule="nonzero" d="M11.083 10h3.292a.625.625 0 1 1 0 1.25h-3.292a1.25 1.25 0 1 1-1.708-1.708V6.875a.625.625 0 1 1 1.25 0v2.667c.19.11.348.268.458.458zM5.28 5h1.594a.625.625 0 1 1 0 1.25H3.75a.625.625 0 0 1-.625-.625V2.5a.625.625 0 1 1 1.25 0v1.636A8.125 8.125 0 1 1 1.875 10a.625.625 0 1 1 1.25 0 6.875 6.875 0 1 0 2.156-5z"></path>
                </svg>
              </span>
              <span className="nav-item_text">History</span>
            </span>
          </li>
          <li className="nav-items_list-item" title="Bookmarks">
            <span onClick={() => { this.openChromePage('bookmarks') }} className="nav-item">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fillRule="evenodd" d="M16.342 14.56a6.226 6.226 0 0 0 .035 2.315h.498a.625.625 0 1 1 0 1.25h-.976a.62.62 0 0 1-.028 0H5.035c-1.398 0-2.535-1.116-2.535-2.5V3.846c0-1.1.943-1.97 2.084-1.97h11.151c.626 0 1.14.5 1.14 1.127v10.123a.625.625 0 1 1 0 1.25H16.7a.624.624 0 0 1-.358.185zm-1.237-.185H5.035c-.713 0-1.285.562-1.285 1.25 0 .689.572 1.25 1.285 1.25h10.07c-.14-.83-.14-1.67 0-2.5zM3.75 13.469a2.552 2.552 0 0 1 1.285-.344h10.59v-10h-2.5V8.75a.625.625 0 0 1-1.021.483L10 7.508 7.896 9.233a.625.625 0 0 1-1.021-.483V3.125H4.584c-.472 0-.834.334-.834.72v9.624zM8.125 3.125v4.304l1.479-1.213c.23-.19.562-.19.792 0l1.479 1.213V3.125h-3.75z"></path>
                </svg>
              </span>
              <span className="nav-item_text">Bookmarks</span>
            </span>
          </li>
          <li className="nav-items_list-item" title="Downloads">
            <span onClick={() => { this.openChromePage('downloads') }} className="nav-item">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fillRule="evenodd" d="M9.557 13.562a.619.619 0 0 0 .443.183.631.631 0 0 0 .443-.183l3.123-3.117a.624.624 0 1 0-.882-.884l-2.059 2.053v-8.49a.624.624 0 1 0-1.25 0v8.49L7.316 9.561a.624.624 0 1 0-.882.884l3.123 3.117zm7.943-1.06v3.749c0 .688-.56 1.249-1.25 1.249H3.75c-.69 0-1.25-.561-1.25-1.25v-3.748a.624.624 0 1 1 1.25 0v3.749h12.5v-3.749a.624.624 0 1 1 1.25 0z"></path>
                </svg>
              </span>
              <span className="nav-item_text">Downloads</span>
            </span>
          </li>
          <li className="nav-items_list-item" title="Wallets">
            <span onClick={() => { this.openChromePage('wallet') }} className="nav-item -selected">
              <span className="nav-item_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path d="M5.483 13.455a2.615 2.615 0 0 0 2.572 3.128c.91 0 1.728-.463 2.202-1.185a.71.71 0 0 1-.113-.113L9.063 13.94a6.14 6.14 0 0 1-3.58-.485zm-1.26-.789A5.983 5.983 0 0 1 2 8.011C2 4.691 4.711 2 8.055 2a6.058 6.058 0 0 1 5.579 3.669l3.06 1.463a.71.71 0 0 1 .386.48l.902 3.926a.705.705 0 0 1-.138.6l-2.529 3.147a.716.716 0 0 1-.558.267h-2.972A4.054 4.054 0 0 1 8.055 18c-2.238 0-4.052-1.801-4.052-4.023 0-.452.075-.893.22-1.31zm9.862-5.209c.017.183.026.368.026.554 0 2.444-1.469 4.547-3.578 5.487l.512.637h3.369l2.1-2.615-.75-3.26-1.679-.803zm-6.03 5.149c2.556 0 4.629-2.057 4.629-4.595 0-2.537-2.073-4.594-4.629-4.594-2.556 0-4.628 2.057-4.628 4.594 0 2.538 2.072 4.595 4.628 4.595zm-1.942-2.328a.706.706 0 0 1-.627-1.038l1.951-3.715a.711.711 0 0 1 1.26-.005l1.924 3.701a.716.716 0 0 1-.634 1.043l-3.874.014zm2.706-1.432L8.06 7.387l-.768 1.465 1.527-.006z" />
                </svg>
              </span>
              <span className="nav-item_text">Crypto Wallets</span>
            </span>
          </li>
        </ul>
        <div className="toolbar-extra">
          <slot></slot>
        </div>
      </div>
    )
  }
}

