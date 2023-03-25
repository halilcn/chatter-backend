export default `
type Message{
    text: String
    from: String
    createdAt: String
}

type MessageChat{
    channelId: String
}

type WrapperMessage{
    messages: [Message]
    status: String
}

input CreateMessageInputData { 
    text: String
    channelId: String
    from: String
}

input StartChatInputData { 
    consumerName: String
}

input MessagesInputData { 
    channelId: String
}

input createMessage { 
    message: String
}

extend type Query{
    messages(input:MessagesInputData): WrapperMessage
}

extend type Mutation {
    createMessage(input:CreateMessageInputData): Message
    startChat(input:StartChatInputData): MessageChat
 }
`;
