class Notification {
    send(message) {
        throw new Error('This method must be implemented by subclasses')
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Sending email with message: ${message}`)
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(`Sending SMS with message: ${message}`)
    }
}

class NotificationFactory {
    createNotification() {
        throw new Error('This method must be implemented by subclasses')
    }
}

class EmailNotificationFactory extends NotificationFactory {
    createNotification() {
        return new EmailNotification()
    }
}

class SMSNotificationFactory extends NotificationFactory {
    createNotification() {
        return new SMSNotification()
    }
}

function sendNotification(factory, message) {
    const notification = factory.createNotification()
    notification.send(message);
}

// Client code can choose which factory to use
const emailFactory = new EmailNotificationFactory()
const smsFactory = new SMSNotificationFactory()

sendNotification(emailFactory, "Hello via Email!") // Sending email with message: Hello via Email!
sendNotification(smsFactory, "Hello via SMS!") // Sending SMS with message: Hello via SMS!