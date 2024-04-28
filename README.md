# Internet-Link-Monitoring
Monitors browser internet connectivity. Sends notifications when connected/disconnected. Maintain and export log.

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



# Version 1.0.4

## Known Issues
- Connection favicon preloading fails when offline. This is scheduled to be fixed when the project is released as a Progressive Web App (PWA) with a Service Worker.
- Requesting Permission by button:
    Unable to implement this feature.

## Bug Fixes
- Offline connection icon not appearing fixed.

# Feature Pipeline
- Show Connection State averages.
