import React from "react";

export default function App () {
    const [messages, setMessages] = React.useState(["a"])

    let text

    if (messages.length === 0) {
        text = "You're all caught up";
    } else if (messages.length === 1) {
        text = "You have 1 unread messages"
    } else {
        text = `You have ${messages.length} unread messages`
    }

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}