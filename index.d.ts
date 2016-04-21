import {Readable} from 'stream';

declare var FacebookChatApi: FacebookChatApi.FacebookChatApiStatic;

declare namespace FacebookChatApi {

  export interface FacebookChatApiStatic {}
  export interface Api {
    search: string;
  }

  export interface ErrorObject {
    error: string;
  }

  export type FacebookID = string | number;

  interface FacebookChatApiStatic {
    /**
     * login(credentials, [options], callback)
     *
     * This function is returned by `require(...)` and is the main entry point to the API.
     * It allows the user to log into facebook given the right credentials.
     * If it succeeds, `callback` will be called with a `null` object (for potential errors) and with an object containing all the available functions.
     * If it fails, `callback` will be called with an error object.
     *
     *  __Arguments__
     * `credentials`: An object containing the fields `email` and `password` used to login, __*or*__ an object containing the field `appState`.
     * `options`: An object representing options to use when logging in (as described in [api.setOptions](#setOptions)).
     * `callback(err, api)`: A callback called when login is done (successful or not). `err` is an object containing a field `error`.
     */
    (credentials: FacebookChatApi.Credentials | FacebookChatApi.AppStateContainer, callback?: (err: FacebookChatApi.ErrorObject, api: FacebookChatApi.Api) => any): void;
    (credentials: FacebookChatApi.Credentials | FacebookChatApi.AppStateContainer, options: FacebookChatApi.ApiOptions, callback?: (err: FacebookChatApi.ErrorObject, api: FacebookChatApi.Api) => any): void;
  }

  export interface Credentials {
    email: string;
    password: string;
  }

  export interface AppStateContainer {
    appState: any;
  }

  export type UserStatus = 'offline' | 'idle' | 'active' | 'mobile';

  export type LogLevel = 'silly' | 'verbose' | 'info' | 'http' | 'warn' | 'error' | 'silent';

  export interface ApiOptions {
    logLevel?: LogLevel;
    selfListen?: boolean;
    listenEvents?: boolean;
    pageID?: number;
    updatePresence?: boolean;
    forceLogin?: boolean;
  }

  interface Api {
    /**
     * api.addUserToGroup(userID, threadID, [callback])
     *
     * Adds a user (or array of users) to a group chat.
     *
     * __Arguments__
     * `userID`: User ID or array of user IDs.
     * `threadID`: Group chat ID.
     * `callback(err)`: A callback called when the query is done (either with an error or with no arguments).
     */
    addUserToGroup (userID: number, threadID: number, callback?: (err: Error) => any): void;
  }

  interface Api {
    /**
     * api.changeArchivedStatus(threadOrThreads, archive, [callback])
     *
     * Given a threadID, or an array of threadIDs, will set the archive status of the threads to `archive`. Archiving a thread will hide it from the logged-in user's inbox until the next time a message is sent or received.
     *
     * __Arguments__
     * `threadOrThreads`: The id(s) of the threads you wish to archive/unarchive.
     * `archive`: Boolean indicating the new archive status to assign to the thread(s).
     * `callback(err)`: A callback called when the query is done (either with an error or null).
     */
    changeArchivedStatus (threadOrThreadsID: number | number[], archive: boolean, callback?: (err: Error) => any): void;
  }

  interface Api {
    /**
     * api.changeGroupImage(image, threadID, [callback])
     *
     * Will change the group chat's image to the given image.
     *
     * __Arguments__
     * `image`: File stream of image.
     * `threadID`: String representing the ID of the thread.
     * `callback(err)`: A callback called when the change is done (either with an error or null).
     */
    changeGroupImage (image: any, threadID: number, callback?: (err: Error) => any): void;
  }

  interface Api {
    /**
     * api.changeThreadColor(color, threadID, [callback])
     *
     * Will change the thread color to the given hex string color ("#0000ff"). Set it
     * to empty string if you want the default.
     * Note: the color needs to start with a "#".
     *
     * __Arguments__
     * `color`: String representing a hex color code (eg: "#0000ff") preceded by "#".
     * `threadID`: String representing the ID of the thread.
     * `callback(err)`: A callback called when the change is done (either with an error or null).
     */
    changeThreadColor(color: string, threadID: number, callback?: (err: Error) => any): any;
  }

  interface Api {
    /**
     * api.changeThreadEmoji(emoji, threadID, [callback])
     *
     * Will change the thread emoji to the one provided.
     * Note: The UI doesn't play nice with all emoji.
     *
     *  __Arguments__
     * `emoji`: String containing a single emoji character.
     * `threadID`: String representing the ID of the thread.
     * `callback(err)`: A callback called when the change is done (either with an error or null).
     */
    changeThreadEmoji(emoji: string, threadID: number,  callback?: (err: Error) => any): any;
  }

  interface Api {
    /**
     * api.changeNickname(nickname, threadID, participantID, [callback])
     *
     * Will change the thread user nickname to the one provided.
     *
     *  __Arguments__
     * `nickname`: String containing a nickname. For reset of nickname left it empty
     * `threadID`: String representing the ID of the thread.
     * `participantID`: String representing the ID of the user.
     * `callback(err)`: An optional callback called when the change is done (either with an error or null).
     */
    changeNickname(nickname: string, threadID: number, participantID: number, callback?: (err: Error) => any): any;
  }

  interface Api {
    /**
     * api.deleteMessage(messageOrMessages, [callback])
     *
     * Takes a messageID or an array of messageIDs and deletes the corresponding message.
     *
     * __Arguments__
     * `messageOrMessages`: A messageID string or messageID string array
     * `callback(err)`: A callback called when the query is done (either with an error or null).
     */
    deleteMessage(messageOrMessagesID: number | number[], callback?: (err: Error) => any): any;
  }

  interface Api {
    /**
     * api.getAppState()
     *
     * Returns current appState which can be saved to a file or stored in a variable.
     */
    getAppState(): AppStateContainer;
  }

  interface Api {
    /**
     * api.getCurrentUserID()
     *
     * Returns the currently logged-in user's Facebook user ID.
     */
    getCurrentUserID(): number;
  }

  interface Api {
    /**
     * api.getFriendsList(callback)
     *
     * Returns an array of objects with some information about your friends.
     *
     * __Arguments__
     * `callback(err, arr)` - A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of objects with the following fields: `alternateName`, `firstName`, `gender`, `userID`, `isFriend`, `fullName`, `profilePicture`, `type`, `profileUrl`, `vanity`, `isBirthday`.
     */
    getFriendsList(callback: (err: Error, arr: Friend[]) => any): void;
  }

  export interface Friend {
    alternateName: string;
    firstName: string;
    gender: string;
    userID: number;
    isFriend: boolean;
    fullName: string;
    profilePicture: any;
    typ: any;  // TODO
    profileUrl: string;
    vanity: any; // TODO
    isBirthday: boolean;
  }

  interface Api {
    /**
     * api.getOnlineUsers([callback])
     *
     * Obtains users currently online and calls the callback with a list of the online users.
     *
     * __Arguments__
     * `callback(err, arr)`: A callback called when the query is done (either with an error or with null followed by an array `arr`). `arr`
     * is an array of objects with the following keys: `lastActive`, `userID` and `status`. `status` is one of `['offline', 'idle', 'active', 'mobile']`.
     *
     * Look at [listen](#listen) for details on how to get updated presence.
     */
    getOnlineUsers(callback: (err: Error, arr: OnlineUser) => any): void;
  }

  export interface OnlineUser {
    lastActive: any;  // TODO
    userID: number;
    status: UserStatus;
  }

  interface Api {
    /**
     * api.getThreadHistory(threadID, start, end, timestamp, [callback])
     *
     * Takes a threadID, start and end numbers, a timestamp, and a callback.
     *
     * __Arguments__
     * `threadID`: A threadID corresponding to the target chat
     * `start`: The ith message in the chat from which to start retrieving history.
     * `end`: The jth message in the chat to which retrieving history.
     * `timestamp`: Used to described the end time. If set, will query messages up to and including `timestamp`.
     * `callback(error, history)`: If error is null, history will contain an array of message objects.
     */
    getThreadHistory(threadID: number, start: number, end: number, timestamp: any, callback: (err: Error, history: Message[]) => any): any;
  }

  interface Api {
    /**
     * api.getThreadInfo(threadID, [callback])
     *
     * Takes a threadID and a callback.  Works for both single-user and group threads.
     *
     * __Arguments__
     * `threadID`: A threadID corresponding to the target thread.
     * `callback(error, info)`: If error is null, info will contain participantIDs, name, snippet, messageCount, emoji, nicknames, and color.  The last three will be null if custom values are not set for the thread.
     */
    getThreadInfo(threadID: number, callback: (err: Error, info: GetThreadInfoResult) => any): any;
  }

  export interface GetThreadInfoResult {
    participantIDs: string[];
    name: string;
    snippet: any; // TODO
    messageCount: number;
    emoji: string;
    nicknames: string[];
    color: string;
  }

  interface Api {
    /**
     * api.getThreadList(start, end, callback)
     *
     * Will return information about threads.
     *
     * __Arguments__
     * `start`: Start index in the list of recently used threads.
     * `end`: End index.
     * `callback(err, arr)`: A callback called when the query is done (either with an error or with an confirmation object). `arr` is an array of thread object containing the following properties: `threadID`, <del>`participants`</del>, `participantIDs`, `formerParticipants`, `name`, `snippet`, `snippetHasAttachment`, `snippetAttachments`, `snippetSender`, `unreadCount`, `messageCount`, `imageSrc`, `timestamp`, `serverTimestamp`, `muteSettings`, `isCanonicalUser`, `isCanonical`, `canonicalFbid`, `isSubscribed`, `rootMessageThreadingID`, `folder`, `isArchived`, `recipientsLoadable`, `hasEmailParticipant`, `readOnly`, `canReply`, `composerEnabled`, `blockedParticipants`, `lastMessageID`.
     */
    getThreadList(start: number, end: number, callback: (err: Error, obj: Thread[]) => any): void;
  }

  interface Api {
    /**
     * api.deleteThread(threadOrThreads, [callback])
     *
     * Given a threadID, or an array of threadIDs, will delete the threads from your account. Note that this does *not* remove the messages from Facebook's servers - anyone who hasn't deleted the thread can still view all of the messages.
     *
     * __Arguments__
     * `threadOrThreads` - The id(s) of the threads you wish to remove from your account.
     * `callback(err)` - A callback called when the operation is done, maybe with an object representing an error.
     */
    deleteThread(threadOrThreads: number | number[], callback?: (err: Error) => any): void;
  }

  interface Api {
    /**
     * api.getUserID(name, callback)
     *
     * Given the full name of a Facebook user, the call will perform a Facebook Graph search and return all corresponding IDs (order determined by Facebook).
     *
     * __Arguments__
     * `name` - A string being the name of the person you're looking for.
     * `callback(err, obj)` - A callback called when the search is done (either with an error or with the resulting object). `obj` is an array which contains all of the users that facebook graph search found, ordered by "importance".
     */
    getUserID(name: string, callback: (err: Error, arr: number[]) => any): void;
  }

  interface Api {
    /**
     * api.getUserInfo(ids, callback)
     *
     * Will get some information about the given users.
     *
     * __Arguments__
     * `ids` - Either a string/number for one ID or an array of strings/numbers for a batched query.
     * `callback(err, obj)` - A callback called when the query is done (either with an error or with an confirmation object).
     */
    getUserInfo(ids: number | number[], callback: (err: Error, arr: GetUserInfoResult[]) => any): void;
  }

  /**
   * `obj` is a mapping from userId to another object containing the following properties:
   * name,
   * firstName,
   * vanity,
   * thumbSrc,
   * profileUrl,
   * gender,
   * type,
   * isFriend,
   * isBirthday,
   * searchTokens,
   * alternateName
   */
  export interface GetUserInfoResult {
    name: string;
    firstName: string;
    vanity: string;  // TODO
    thumbSrc: string;  // TODO
    profileUrl: string;
    gender: string;
    typ: any;  // TODO : ?
    isFriend: boolean;
    isBirthday: boolean;
    searchTokens: any;  // TODO
    alternateName: string;
  }


  interface Api {
    /**
     * api.listen(callback)
     *
     * Will call `callback` when a new message is received on this account.
     * By default this won't receive events (joining/leaving a chat, title change etc...) but it can be activated with `api.setOptions({listenEvents: true})`.  This will by default ignore messages sent by the current account, you can enable listening to your own messages with `api.setOptions({selfListen: true})`. This returns `stopListening` that will stop the `listen` loop and is guaranteed to prevent any future calls to the callback given to `listen`. An immediate call to `stopListening` when an error occurs will prevent the listen function to continue.
     *
     *  __Arguments__
     *  `callback(error, message)`: A callback called every time the logged-in account receives a new message.
     */
    listen(callback: (err: Error, eventType: FacebookEvent) => any): void;
  }

  export type EventType = 'message' | 'event' | 'typ' | 'read_receipt' | 'read' | 'presence';

  export interface BaseFacebookEvent {
    type: EventType;
  }

  export interface MessageEvent extends BaseFacebookEvent {
    /**
     * If `type` is `message`, the object will contain the following fields:
     * + `senderID`: The id of the person who sent the message in the chat with threadID.
     * + `body`: The string corresponding to the message that was just received.
     * + `threadID`: The threadID representing the thread in which the message was sent.
     * + `messageID`: A string representing the message ID.
     * + `attachments`: An array of attachments to the message.
     * + `isGroup`: boolean, true if this thread is a group thread (more than 2 participants).
     *
     *  If enabled through [setOptions](#setOptions), this will also handle events. In this case, `message` will be either a message (see above) or an event object with the following fields:
     * - `type`: The string `"event"` or `"typ"`
     * - `threadID`: The threadID representing the thread in which the message was sent.
     */
      type: "message";
    senderID: string;
    body: string;
    threadID: string;
    messageID: string;
    attachments: Attachment[];
    isGroup: boolean;
  }

  export interface EventEvent extends BaseFacebookEvent {
    /**
     * If `type` is `"event"` then the object will also have those fields:
     * - `logMessageType`: String representing the type of event (`"log:thread-name"`, `"log:unsubscribe"`, `"log:subscribe"`, ...)
     * - `logMessageData`: Data relevant to the event.
     * - `logMessageBody`: String printed in the chat.
     * - `author`: The person who performed the event.
     */
      type: "event";
    logMessageType: string;
    logMessageData: any;
    logMessageBody: string;
    author: string;
  }

  export interface TypEvent extends BaseFacebookEvent {
    /**
     * If `type` is `"typ"` then the object will have the following fields:
     * - `isTyping`: Boolean representing whether or not a person started typing.
     * - `from`: ID of the user who started/stopped typing.
     * - `threadID`: Current threadID.
     * - `fromMobile`: Boolean representing whether or not the person's using a mobile device to type.
     */
      type: "typ";
    isTyping: boolean;
    from: number;
    threadID: string;
    fromMobile: boolean;
  }

  export interface ReadReceiptEvent extends BaseFacebookEvent {
    /**
     * If `type` is `"read_receipt"` then the object will have the following fields:
     * - `reader`: ID of the user who just read the message.
     * - `time`: The time at which the reader read the message.
     * - `threadID`: The thread in which the message was read.
     */
      type: "read_receipt";
    reader: string;
    threadID: string;
    time: string;
  }

  export interface ReadEvent extends BaseFacebookEvent {
    /**
     * If `type` is `"read"` then the object will have the following fields:
     * - `threadID`: The threadID representing the thread in which the message was sent.
     * - `time`: The time at which the user read the message.
     */
      type: "read";
    threadID: string;
    time: string;
  }

  export interface PresenceEvent extends BaseFacebookEvent {
    /**
     * If enabled through [setOptions](#setOptions), this will also return presence, (`type` will be `"presence"`), which is the online status of the user's friends. The object given to the callback will have the following fields:
     * - `type`: The string "presence".
     * - `timestamp`: How old the information is.
     * - `userID`: The ID of the user whose status this packet is describing
     * - `statuses`: An object with the following fields: `fbAppStatus`, `messengerStatus`, `otherStatus`, `status` and `webStatus`. All can contain any of the following values: `"active"`, `"idle"`, `"invisible"`, `"offline"`.
     */
      type: "presence";
    timestamp: number;
    userID: number;
    statuses: UserStatuses;
  }

  export interface UserStatuses {
    fbAppStatus: UserStatus;
    messengerStatus: UserStatus;
    otherStatus: UserStatus;
    status: UserStatus;
    webStatus: UserStatus;
  }

  export type FacebookEvent = MessageEvent | EventEvent | TypEvent;

  export type AttachmentType = 'sticker' | 'file' | 'photo' | 'animated_image' | 'share';

  export interface BaseAttachment {
    type: AttachmentType;
  }

  export interface StickerAttachment extends BaseAttachment {
    /**
     * If `attachments` contains an object with type is `"sticker"`, the same object will contain the following fields:
     * `url`, `stickerID`, `packID`, `frameCount`, `frameRate`,
     * `framesPerRow`, `framesPerCol`, `spriteURI`, `spriteURI2x`,
     * `height`, `width`, `caption`, `description`.
     */
      type: "sticker";
    url: string;
    stickerID: number;
    packID: number;
    frameCount: number;
    frameRate: number;
    framesPerRow: number;
    framesPerCol: number;
    spriteURI: string;
    spriteURI2x: string;
    height: number;
    width: number;
    caption: string;
    description: string;
  }

  export interface FileAttachment extends BaseAttachment {
    /**
     * If `attachments` contains an object with type is `"file"`, the same object will contain the following fields:
     * `name`, `url`, `ID`, `fileSize`, `isMalicious`, `mimeType`.
     */
      type: "file";
    name: string;
    url: string;
    ID: number;
    fileSize: number;
    isMalicious: boolean;
    mimeType: string;
  }

  export interface PhotoAttachment extends BaseAttachment {
    /**
     * If `attachments` contains an object with type is `"photo"`, the same object will contain the following fields:
     * `name`, `hiresUrl`, `thumbnailUrl`, `previewUrl`, `previewWidth`,
     * `previewHeight`, `facebookUrl`, `ID`, `filename`, `mimeType`,
     * `url`, `width`, `height`.
     */
      type: "photo";
    name: string;
    hiresUrl: string[];
    thumbnailUrl: string;
    previewUrl: string;
    previewWidth: number;
    previewHeight: number;
    facebookUrl: string;
    ID: number;
    filename: string;
    mimeType: string;
    url: string;
    width: number;
    height: number;
  }

  export interface AnimatedImageAttachment extends BaseAttachment {
    /**
     * If `animated_image` contains an object with type is `"animated_image"`, the same object will contain the following fields:
     * `name`, `facebookUrl`, `previewUrl`, `previewWidth`, `previewHeight`,
     * `thumbnailUrl`, `ID`, `filename`, `mimeType`, `width`, `height`,
     * `url`, `rawGifImage`, `rawWebpImage`, `animatedGifUrl`,
     * `animatedGifPreviewUrl`, `animatedWebpUrl`, `animatedWebpPreviewUrl`
     */
      type: "animated_image";
    name: string;
    facebookUrl: string;
    previewUrl: string;
    previewWidth: number;
    previewHeight: number;
    thumbnailUrl: string;
    ID: number;
    filename: string;
    mimeType: string;
    width: number;
    height: number;
    url: string;
    rawGifImage: any; // TODO
    rawWebpImage: any;  // TODO
    animatedGifUrl: string;
    animatedGifPreviewUrl: string;
    animatedWebpUrl: string;
    animatedWebpPreviewUrl: string;
  }

  export interface ShareAttachment extends BaseAttachment {
    /**
     * If `attachments` contains an object with type is `"share"`, the same object will contain the following fields:
     * `description`, `ID`, `subattachments`, `animatedImageSize`, `width`,
     * `height`, `image`, `playable`, `duration`, `source`, `title`,
     * `facebookUrl`, `url`.
     */
      type: "share";
    description: string;
    ID: number;
    subattachments: Attachment; // TODO
    animatedImageSize: number;
    width: number;
    height: number;
    image: any; // TODO : see above for images
    playable: boolean;
    duration: number;
    source: string;
    title: string;
    facebookUrl: string;
    url: string;
  }

  export type Attachment = StickerAttachment | FileAttachment | PhotoAttachment | AnimatedImageAttachment | ShareAttachment;

  interface Api {
    /**
     * api.logout([callback])
     *
     * Logs out the current user.
     *
     * __Arguments__
     * `callback(err)`: A callback called when the query is done (either with an error or with null).
     */
    logout(callback?: (err: Error) => any): void;
  }

  interface Api {
    /**
     * api.markAsRead(threadID, [callback])
     *
     * Given a threadID will mark all the unread messages as read. Facebook will take a couple of seconds to show that you've read the messages.
     *
     * __Arguments__
     * `threadID` - The id of the thread in which you want to mark the messages as read.
     * `callback(err)` - A callback called when the operation is done maybe with an object representing an error.
     */
    markAsRead(threadID: number, callback?: (err?: Error) => any): void;
  }

  interface Api {
    /**
     * api.removeUserFromGroup(userID, threadID, [callback])
     *
     * Removes a user from a group chat.
     *
     * __Arguments__
     * `userID`: User ID.
     * `threadID`: Group chat ID.
     * `callback(err)`: A callback called when the query is done (either with an error or with no arguments).
     */
    removeUserFromGroup(userID: number, threadID: number, callback?: (err?: Error) => any): void;
  }

  interface Api {
    /**
     * api.searchForThread(name, callback)
     *
     * Takes a chat title (thread name) and returns matching results as a formatted threads array (ordered according to Facebook).
     *
     * __Arguments__
     * `name`: A messageID string or messageID string array
     * `callback(err, obj)`: A callback called when the query is done (either with an error or a thread object).
     */
    searchForThread(name: FacebookID | FacebookID[], callback: (err: Error, obj: Thread) => any): void;
    // TODO: check if the doc is right, it looks like obj could be an array of Threads
  }

  /**
   * The object passed in the callback has the following shape:
   * `threadID`, `participantIDs`, `formerParticipants`,
   * `name`, `snippet`, `snippetHasAttachment`, `snippetAttachments`,
   * `snippetSender`, `unreadCount`, `messageCount`, `imageSrc`,
   * `timestamp`, `serverTimestamp`, `muteSettings`, `isCanonicalUser`,
   * `isCanonical`, `canonicalFbid`, `isSubscribed`, `rootMessageThreadingID`,
   * `folder`, `isArchived`, `recipientsLoadable`, `hasEmailParticipant`,
   * `readOnly`, `canReply`, `composerEnabled`, `blockedParticipants`, `lastMessageID`
   */
  export interface Thread {
    threadID: string;
    participantIDs: string[];
    formerParticipants: string[];
    name: string;
    snippet: string;
    snippetHasAttachment: boolean;
    snippetAttachments: string[];
    snippetSender: string;
    unreadCount: number;
    messageCount: number;
    imageSrc: string;
    timestamp: any;
    serverTimestamp: string;
    muteSettings: any[];
    isCanonicalUser: boolean;
    isCanonical: boolean;
    canonicalFbid: number;
    isSubscribed: boolean;
    rootMessageThreadingID: number;
    folder: string;
    isArchived: boolean;
    recipientsLoadable: any;
    hasEmailParticipant: boolean;
    readOnly: boolean;
    canReply: boolean;
    composerEnabled: boolean;
    blockedParticipants: string[];
    lastMessageID: number;
  }

  interface Api {
    /**
     * api.sendMessage(message, threadID, [callback])
     *
     * Sends the given message to the threadID.
     *
     * __Arguments__
     * `message`: A string (for backward compatibility) or a message object as described below.
     * `threadID`: A string, number, or array representing a thread. It happens to be someone's userId in the case of a one to one conversation or an array of userIds when starting a new group chat.
     * `callback(err, messageInfo)`: A callback called when sending the message is done (either with an error or with an confirmation object). `messageInfo` contains the `threadID` where the message was sent and a `messageID`, as well as the `timestamp` of the message.
     */
    sendMessage(message: string | Message, threadID: FacebookID | FacebookID[], callback?: (err: Error, messageInfo: MessageInfo) => any): void;
  }

  /**
   * __Message Object__:
   *
   * Various types of message can be sent:
   * Regular: set field `body` to the desired message as a string.
   * Sticker: set a field `sticker` to the desired sticker ID.
   * File or image: Set field `attachment` to a readable stream or an array of readable streams.
   * URL: set a field `url` to the desired URL.
   *
   * Note that a message can only be a regular message (which can be empty) and optionally one of the following: a sticker, an attachment or a url.
   */

  export type Message = {body: string} | {sticker: string} | {attachment: Readable | Readable[]} | {url: string};

  export interface MessageInfo {
    threadID: string;
    messageID: string;
    timestamp : string; // TODO: check type
  }

  interface Api {
    /**
     * api.sendTypingIndicator(threadID, [callback])
     *
     * Sends a "USERNAME is typing" indicator to other members of the thread indicated by threadID.  This indication will disappear after 30 second or when the `end` function is called. The `end` function is returned by `api.sendTypingIndicator`.
     *
     *  __Arguments__
     * `threadID`: Group chat ID.
     * `callback(err)`: A callback called when the query is done (with an error or with null).
     */
    sendTypingIndicator(threadID: number, callback?: (err: Error) => any): any;
  }

  interface Api {
    /**
     * api.setOptions(options)
     *
     * Sets various configurable options for the api.
     *
     * __Arguments__
     * `options` - An object containing the new values for the options that you want
     * to set.  If the value for an option is unspecified, it is unchanged. The following options are possible.
     * - `logLevel`: The desired logging level as determined by npmlog.  Choose
     * from either `"silly"`, `"verbose"`, `"info"`, `"http"`, `"warn"`, `"error"`, or `"silent"`.
     * - `selfListen`: (Default `false`) Set this to `true` if you want your api
     * to receive messages from its own account.  This is to be used with
     * caution, as it can result in loops (a simple echo bot will send messages
     * forever).
     * - `listenEvents`: (Default `false`) Will make [api.listen](#listen) also handle events (look at api.listen for more details).
     * - `pageID`: (Default empty) Makes [api.listen](#listen) only receive messages through the page specified by that ID. Also makes `sendMessage` and `sendSticker` send from the page.
     * - `updatePresence`: (Default `false`) Will make [api.listen](#listen) also return `presence` ([api.listen](#presence) for more details).
     * - `forceLogin`: (Default `false`) Will automatically approve of any recent logins and continue with the login process.
     */
    setOptions(options: ApiOptions): void;
  }

  interface Api {
    /**
     * api.setTitle(newTitle, threadID, [callback])
     *
     * Sets the title of the group chat with thread id `threadID` to `newTitle`.
     *
     * Note: This will not work if the thread id corresponds to a single-user chat or if the bot is not in the group chat.
     *
     * __Arguments__
     * `newTitle`: A string representing the new title.
     * `threadID`: A string or number representing a thread. It happens to be someone's userId in the case of a one to one conversation.
     * `callback(err, obj)` - A callback called when sending the message is done (either with an error or with an confirmation object). `obj` contains only the threadID where the message was sent.
     */
    setTitle(newTitle: string, threadID: number, callback?: (err: Error, obj: SetTitleResult) => any): void;
  }

  export interface SetTitleResult {
    threadID: string;
  }
}

export = FacebookChatApi;
