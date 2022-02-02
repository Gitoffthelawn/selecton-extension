function collapseButtons() {
    const maxButtons = configs.maxTooltipButtonsToShow ?? 3;
    const buttonsCount = tooltip.children.length - 1; /// subtract the arrow

    if (buttonsCount > maxButtons) {
        /// Create button
        const moreButton = document.createElement('button');
        moreButton.setAttribute('class', 'selection-popup-button button-with-border');
        moreButton.innerText = '⋮';

        // let icon = document.createElement('img');
        // icon.setAttribute('src', menuIcon);
        // icon.setAttribute('class', 'selecton-button-img-icon');
        // icon.style.opacity = 1.0;
        // moreButton.appendChild(icon);

        if (configs.reverseTooltipButtonsOrder)
            tooltip.insertBefore(moreButton, tooltip.children[2]);
        else
            tooltip.appendChild(moreButton);

        /// Create panel
        // setTimeout(function () {
        const collapsedButtonsPanel = createHorizontalHoverPanelForButton(moreButton, true);

        /// Append buttons to panel
        if (configs.reverseTooltipButtonsOrder) {
            for (let i = 1; i <= buttonsCount - maxButtons; i++) {
                if (i == 1) tooltip.children[i].classList.remove('button-with-border');
                collapsedButtonsPanel.prepend(tooltip.children[i]);
            }
        } else {
            for (let i = buttonsCount; i > maxButtons; i--) {
                if (i == (maxButtons * 1) + 1) tooltip.children[i].classList.remove('button-with-border');
                collapsedButtonsPanel.prepend(tooltip.children[i]);
            }
        }

        setBorderRadiusForSideButtons(collapsedButtonsPanel, 0);

        /// Add button
        moreButton.appendChild(collapsedButtonsPanel);
        // }, 0)

    }
}