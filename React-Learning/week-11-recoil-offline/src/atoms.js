import { atom } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 0,
        jobs: 0,
        notifications: 0,
        messaging: 0
    }
});


export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging;
    }
})