# Service Messages

::: tip
When a user is added to, removed from or leaves a conversation, a message is added to the conversation.
This message is a "service message" with the "type" property with a value of 2 rather than the 1 of the regular messages.
Service messages body properties are empty strings, but they have the "meta" property containing information about the service message. This can differ from service message to service mssage.
:::