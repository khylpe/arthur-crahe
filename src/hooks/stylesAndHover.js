import React, { Component, useState } from 'react';

export const useHoverStyle = (notHoverStyle, hoverStyle) => {
       const [isHovered, setIsHovered] = useState(false);

       const handleMouseEnter = () => {
              setIsHovered(true);
       };

       const handleMouseLeave = () => {
              setIsHovered(false);
       };

       const style = isHovered ? hoverStyle : notHoverStyle;

       return [style, handleMouseEnter, handleMouseLeave];
};

export const useAllHoverStyles = (theme) => {
       const [navItemCurrentStyle, handleNavItemCurrentMouseEnter, handleNavItemCurrentMouseLeave] = useHoverStyle(theme.navItems.current.notHover, theme.navItems.current.hover);
       const [navItemsStyle, handleNavItemsMouseEnter, handleNavItemsMouseLeave] = useHoverStyle(theme.navItems.notCurrent.notHover, theme.navItems.notCurrent.hover);

       const [titleStyle, handleTitleMouseEnter, handleTitleMouseLeave] = useHoverStyle(theme.title.notHover, theme.title.hover);
       const [currentSectionStyle, handleCurrentSectionMouseEnter, handleCurrentSectionMouseLeave] = useHoverStyle(theme.currentSection.notHover, theme.currentSection.hover);
       const [inputStyle, handleInputMouseEnter, handleInputMouseLeave] = useHoverStyle(theme.input.notHover, theme.input.hover);
       const [buttonStyle, handleButtonMouseEnter, handleButtonMouseLeave] = useHoverStyle(theme.button.notHover, theme.button.hover);
       const [linkStyle, handleLinkMouseEnter, handleLinkMouseLeave] = useHoverStyle(theme.link.notHover, theme.link.hover);
       const [textStyle, handleTextMouseEnter, handleTextMouseLeave] = useHoverStyle(theme.text.notHover, theme.text.hover);

       return {
              navItemCurrent: { style: navItemCurrentStyle, onMouseEnter: handleNavItemCurrentMouseEnter, onMouseLeave: handleNavItemCurrentMouseLeave },
              navItems: { style: navItemsStyle, onMouseEnter: handleNavItemsMouseEnter, onMouseLeave: handleNavItemsMouseLeave },
              title: { style: titleStyle, onMouseEnter: handleTitleMouseEnter, onMouseLeave: handleTitleMouseLeave },
              currentSection: { style: currentSectionStyle, onMouseEnter: handleCurrentSectionMouseEnter, onMouseLeave: handleCurrentSectionMouseLeave },
              input: { style: inputStyle, onMouseEnter: handleInputMouseEnter, onMouseLeave: handleInputMouseLeave },
              button: { style: buttonStyle, onMouseEnter: handleButtonMouseEnter, onMouseLeave: handleButtonMouseLeave },
              link: { style: linkStyle, onMouseEnter: handleLinkMouseEnter, onMouseLeave: handleLinkMouseLeave },
              text: { style: textStyle, onMouseEnter: handleTextMouseEnter, onMouseLeave: handleTextMouseLeave },
       };
};