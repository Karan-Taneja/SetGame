###ERROR - REACT DOMException-00001
##UNRESOLVED
#Occurs when submitting a set, seems to occur any time more than 1 set is submitted successfully.
react-dom.development.js:9279 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    at removeChild (http://localhost:3000/static/js/1.chunk.js:14391:22)
    at unmountHostComponents (http://localhost:3000/static/js/1.chunk.js:23810:13)
    at commitDeletion (http://localhost:3000/static/js/1.chunk.js:23868:9)
    at commitAllHostEffects (http://localhost:3000/static/js/1.chunk.js:24733:15)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/1.chunk.js:5259:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/1.chunk.js:5308:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/1.chunk.js:5362:35)
    at commitRoot (http://localhost:3000/static/js/1.chunk.js:24972:11)
    at http://localhost:3000/static/js/1.chunk.js:26558:9
    at Object.unstable_runWithPriority (http://localhost:3000/static/js/1.chunk.js:32262:16)
    at completeRoot (http://localhost:3000/static/js/1.chunk.js:26557:17)
    at performWorkOnRoot (http://localhost:3000/static/js/1.chunk.js:26480:13)
    at performWork (http://localhost:3000/static/js/1.chunk.js:26385:11)
    at performSyncWork (http://localhost:3000/static/js/1.chunk.js:26359:7)
    at interactiveUpdates$1 (http://localhost:3000/static/js/1.chunk.js:26644:11)
    at interactiveUpdates (http://localhost:3000/static/js/1.chunk.js:7380:14)
    at dispatchInteractiveEvent (http://localhost:3000/static/js/1.chunk.js:10198:7)
removeChild @ react-dom.development.js:9279
unmountHostComponents @ react-dom.development.js:18698
commitDeletion @ react-dom.development.js:18756
commitAllHostEffects @ react-dom.development.js:19621
callCallback @ react-dom.development.js:147
invokeGuardedCallbackDev @ react-dom.development.js:196
invokeGuardedCallback @ react-dom.development.js:250
commitRoot @ react-dom.development.js:19860
(anonymous) @ react-dom.development.js:21446
unstable_runWithPriority @ scheduler.development.js:255
completeRoot @ react-dom.development.js:21445
performWorkOnRoot @ react-dom.development.js:21368
performWork @ react-dom.development.js:21273
performSyncWork @ react-dom.development.js:21247
interactiveUpdates$1 @ react-dom.development.js:21532
interactiveUpdates @ react-dom.development.js:2268
dispatchInteractiveEvent @ react-dom.development.js:5086
2index.js:1437 The above error occurred in the <span> component:
    in span (at shape.js:36)
    in div (at shape.js:35)
    in div (at shape.js:48)
    in Shape (at card.js:23)
    in div (at card.js:27)
    in div (at card.js:26)
    in Card (at board.js:11)
    in div (at board.js:14)
    in Board (at App.js:153)
    in div (at App.js:152)
    in App (at src/index.js:6)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
console.(anonymous function) @ index.js:1437
logCapturedError @ react-dom.development.js:17880
logError @ react-dom.development.js:17916
update.callback @ react-dom.development.js:18939
callCallback @ react-dom.development.js:17104
commitUpdateEffects @ react-dom.development.js:17144
commitUpdateQueue @ react-dom.development.js:17132
commitLifeCycles @ react-dom.development.js:18172
commitAllLifeCycles @ react-dom.development.js:19674
callCallback @ react-dom.development.js:147
invokeGuardedCallbackDev @ react-dom.development.js:196
invokeGuardedCallback @ react-dom.development.js:250
commitRoot @ react-dom.development.js:19898
(anonymous) @ react-dom.development.js:21446
unstable_runWithPriority @ scheduler.development.js:255
completeRoot @ react-dom.development.js:21445
performWorkOnRoot @ react-dom.development.js:21368
performWork @ react-dom.development.js:21273
performSyncWork @ react-dom.development.js:21247
interactiveUpdates$1 @ react-dom.development.js:21532
interactiveUpdates @ react-dom.development.js:2268
dispatchInteractiveEvent @ react-dom.development.js:5086
react-dom.development.js:21333 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    at removeChild (http://localhost:3000/static/js/1.chunk.js:14391:22)
    at unmountHostComponents (http://localhost:3000/static/js/1.chunk.js:23810:13)
    at commitDeletion (http://localhost:3000/static/js/1.chunk.js:23868:9)
    at commitAllHostEffects (http://localhost:3000/static/js/1.chunk.js:24733:15)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/1.chunk.js:5259:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/1.chunk.js:5308:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/1.chunk.js:5362:35)
    at commitRoot (http://localhost:3000/static/js/1.chunk.js:24972:11)
    at http://localhost:3000/static/js/1.chunk.js:26558:9
    at Object.unstable_runWithPriority (http://localhost:3000/static/js/1.chunk.js:32262:16)
    at completeRoot (http://localhost:3000/static/js/1.chunk.js:26557:17)
    at performWorkOnRoot (http://localhost:3000/static/js/1.chunk.js:26480:13)
    at performWork (http://localhost:3000/static/js/1.chunk.js:26385:11)
    at performSyncWork (http://localhost:3000/static/js/1.chunk.js:26359:7)
    at interactiveUpdates$1 (http://localhost:3000/static/js/1.chunk.js:26644:11)
    at interactiveUpdates (http://localhost:3000/static/js/1.chunk.js:7380:14)
    at dispatchInteractiveEvent (http://localhost:3000/static/js/1.chunk.js:10198:7)
###END OF ERROR REACT DOMException-00001