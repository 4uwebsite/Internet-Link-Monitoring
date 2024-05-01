# Internet-Link-Monitoring
A PWA (Progressive Web App) that monitors browser internet connectivity. Sends notifications when connected/disconnected. Maintain and export log.

App: https://4uwebsite.github.io/Internet-Link-Monitoring/

# Features:
- Internet connected/disconnected status.
- Connection Data.
- Session duration.
- Time elapsed since last connected/disconnected.
- Data logging:
    - Data Structure:
        event = {
            id: "timestamp",
            sessionid: "SIDtimestamp",
            conStat: "con/dis",
            connData: "4G/10mbps/100ms"
        }
- Log Export.
- Notifications.
- Disable when not desktop.
- Title should reflect connection state.

# UI/UX
https://www.figma.com/file/zBX8YoUKD0slplxnrkFstl/Internet-Link-Monitoring?type=design&node-id=0%3A1&mode=design&t=JnhE6p0iW3f8bZ1B-1
*** Modifed in implementation.



# Version 2.0.0

## Known Issues
- Connection favicon preloading fails when offline. This is scheduled to be fixed when the project is released as a Progressive Web App (PWA) with a Service Worker.
- Requesting Permission by button:
    Unable to implement this feature.

# Feature Pipeline
- Show Connection State averages.

# Versioning
2.0.0
- Manifest file and PWA compatibility.
- Currently only Desktop support.
1.0.8
- Mobile view Refresh Page button implemented. 
1.0.7
- Non-code fixes.
1.0.6
- Non-code fixes.
- Completed build.