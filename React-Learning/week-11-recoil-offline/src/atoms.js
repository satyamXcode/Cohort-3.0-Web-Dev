import { atom, selector } from "recoil";

// Asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        git: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notification")
            return res.data
        }
        
    })
});


export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging;
    }
})