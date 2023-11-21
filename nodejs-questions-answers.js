//TODO: Clone this repo using Git Clone in your VS Code terminal.
//TODO: Use 'Better Comments' extension on VS Code for better readability.

//! What is Node.js?
//* Node.js is an open-source, cross-platform JavaScript runtime environment.

//! Why learn Node.js?
//* Build end to end JS applications. Major companies have all migrated from other backend technologies to Node.js. Full stack development is one of the most sought out skill sets by companies. Huge Community Support.

//! What can you build with Node.js?
//* Traditional Websites. Backend services like APIs. Real-time applications. Streaming Services. CLI Tools. Multiplayer games. Node.js allows you to build complex and powerful applications.

//! Summary on Node.js
//* Node.js is an open source, cross platform JavaScript runtime environment. It is not a language, it is not a framework. Node.js is capable of executing JavaScript code outside a browser. It can execute not only the standard ECMAScript language but also new features that are made available through C++ bindings using the V8 engine. It consists of C++ files which form the core features and JavaScript files which expose common utilities and some of the C++ features for easier consumption.

//! Executing JS Code
//* REPL - Read, Evaluate, Print, Loop
//* Executing code in a JavaScript file in the command line

//! Browser vs Node.js
//* In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. You don't have the document, window and all the other objects that are provided by the browser. In the browser, we don't have all the nice APIs that Node.js provides through its modules. For Example the filesystem access functionality. With Node.js, you can control the environment. With a browser, you are at the mercy of what the users choose. 

//! What are Modules?
//* A module is an encapsulated and reusable chunk of code that has its own context. In Node.js, each file is treated as a seperate module.

//! What are the types of modules?
//* Local modules - Modules that we create in our application
//* Built-in modules - Modules that Node.js ships with out of the box
//* Third party modules - Modules written by other developers that we can use in our application

//! What is CommonJS?
//* CommonJS is a standard that states how a module should be structured and shared. Node.js adopted CommonJS when it started out and is what you will see in code bases.

//! Summary on Local Modules
//* In Node.js, each file is a module that is isolated by default. To load a module into another file, we use the require function. When index.js is executed, the code in the module is also executed. if the file we are requiring is a JavaScript file, we can skip specifying the extension and Node.js will infer it on our behalf.

//! Explain Immediately Invoked Function Expression (IIFE) in reference to module scope. 
(function() {
    // Module code actually lives here
})()
//* Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope. This saves us from having to worry about conflicting variables or functions. There is proper encapsulation and reusability is unaffected.

//! Summary on Module Scope
//* Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code. IIFE allows you to repeat variable or function names without any conflicts.

//! What is Module Wrapper in Node.js?
//* Every module in node.js gets wrapped in an IIFE before being loaded. IIFE helps to keep top-level variables scoped to the module rather than the global object. The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module.

//! More about CommonJS.
//* Each file is treated as a module. Variables, functions, classes, etc. are not accessible to other files by default. Explicity tell the module system which parts of your code should be exported via module.exports or exports. To import code into a file, use the require() function.

//! What are ES Modules?
//* At the time Node.js was created, there was no built-in module system in JavaScript. Node.js defaulted to CommonJS as its module system. As of ES2015, JavaScript does have a standardized module system as part of the language itself. That module system is called ECMAScript Modules or ES Modules or ESM for short.

//! Summary on ES Modules.
//* ES Modules is the ECMAScript standard for modules. It was introduced with ES2015. Node.js 14 and above support ES Modules. Instead of module.exports, we use the export keyword. The export can be default or named. We import the exported variables or functions using the import keyword. If it is a default export, we can assign any name while importing. If it is a named export, the import name must be the same.

//! What are Built-in Modules?
//* Built-in modules are modules that Node.js ships with. It is also known as core modules. You have to import this module before you can use it. The most important built-in modules are: path, events, fs, stream, and http.

//! What is Path module?
//* The path module provides utilities for working with file and directory paths.

//! What is the benefits of node: Protocol? {Eg: require("node:path")}
//* It makes it perfectly clear that the import is a Node.js built-in module. It makes the import identifier a valid absolute URL. It also avoids conflicts for future Node.js built-in modules.

//! What is Callback Function in JavaScript?
//* In JavaScript, functions are first class objects. A function can be passed as an argument to a function. A function can also be returned as values from other functions. Any function that is passed to an argument to another function is called a callback function.

//! What is Higher Order Function in JavaScript?
//* The function which accepts a function as its argument or returns a function is called higher order function.

//! What are the types of Callbacks in JavaScript?
//* 1. Synchronous Callbacks 2. Asynchronous Callbacks

//! What is Synchronous Callbacks?
//* A callback that is executed immediately is called synchronous callbacks. Eg: Functions passed to methods like sort, map or filter.

//! What is Asynchronous Callbacks?
//* A callback that is often used to continue or resume code execution after an asynchronous operation has completed is called asynchronous callbacks. Callbacks are used to delay the execution of a function until a particular time or event has occurred. In Node.js most of the modules have an asynchronous nature to prevent blocking of execution, for example, reading data from a file, fetching data from a database or handling a network request.

//!  What is Event Module?
//* The event module allows us to work with events in Node.js. An event is an action or an occurence that has happened in our application that we can respond to. Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner. 

//! What is Event-Driven Architecture?
//* The event module returns a class called Event Emitter class which we can instantiate to create an emitter object. Using the emitter object we can register event listeners using the on method and emit an event using the emit method. The emit method accepts the event name followed by arguments that need to be passed on to the listeners. When an event occurs node automatically calls the listeners for the corresponding event passing in the appropriate arguments. Events allow us to write code in a non-blocking manner.

//! What is Binary Data?
//* Computers store and represent data in binary format which is a collection of 0s and 1s. Each 0 or 1 is called a binary digit or bit for short. To work with a piece of data, a computer needs to convert that data into its binary representation.

//! How does computer convert a character to binary format?
//* Computers will first convert the character to a number, then convert that number to its binary representation. Eg: Character "V". Computers will first convert V to a number that represents V. 86 is the numeric representation of the character V. It is also called character code.

//! What are Character Sets?
//* Character Sets are predefined lists of characters represented by numbers. Two of the most popular character sets are Unicode and ASCII.

//! What is Character Encoding?
//* Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer. It dictates how many bits to use to represent the number. Example of a character encoding system is UTF-8. UTF-8 states that characters should be encoded in bytes (8 bits). Eight 1s or 0s should be used to represent the code of any character in binary. Eg: 4 => 100 => 00000100, V => 86 => 01010110. Similar guidelines also exist on how images and videos should be encoded and stored in binary format.

//! What are Streams?
//* A stream is a sequence of data that is being moved from one point to another over time. In Node.js, the idea is to process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing. Eg: Watching a video on YouTube. The data arrives in chunks and you watch in chunks while the rest of the data arrives over time. Another Eg: Transferring file contents from file A to file B. The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time. In doing so, you are preventing unneccessary data downloads and memory usage. Stream is infact a built-in node module that inherits from the event emitter class. Other modules internally use streams for their functioning.

//! What are Buffers?
//* Node.js cannot control the pace at which data arrives in the stream. It can only decide when it is the right time to send the data for processing. If there is data already processed or too little data to process, Node puts the arriving data in a buffer. It is an intentionally small area that Node maintains in the runtime to process a stream of data. Eg: Streaming a video online. If your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for more data to arrive. Once the buffer is filled up and the data is processed, the video player shows the video. While the video is playing, more data will continue to arrive and wait in the buffer.

//! What do you mean by synchronous?
//* If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time. This is called synchronous.

//! What is blocking?
//* JavaScript is blocking because of its synchronous nature. This means no matter how long a previous process takes, the subsequent processes won't kick off until the former is completed.

//! What is single-threaded?
//* A thread is simply a process that your JavaScript program can use to run a task. Each thread can only do one task at a time. JavaScript has just one thread called the main thread for executing any code.

//! How do we cater Asynchronous programming in JavaScript?
//* Just JavaScript is not enough to achieve asynchronous. We need new pieces which are outside of JavaScript to help us write asynchronous code. For front-end, this is where web browsers come into play. For back-end, this is where Node.js comes into play. Web browsers and Node.js define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs. You can let your code do several things at the same time without stopping or blocking your main thread.

//! What is fs Module?
//* The File System (fs) module allows you to work with the file system on your computer. fs module internally uses the buffer.

//! What is Error-First Callback?
//* Error-First Callback in Node.js is a function which either returns an error object or any successful data returned by the function. Eg:
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

//! What is the default size of buffers used by streams?
//* The buffers streams use has a size of 64 kilobytes.

//! What are the different types of streams?
//* 1. Readable streams - from which data can be read. Eg: Reading from a file as readable stream
//* 2. Writable streams - to which we can write data. Eg: Writing to a file as writable stream
//* 3. Duplex streams - that are both Readable and Writable. Eg: Sockets as a duplex stream
//* 4. Transform streams - that can modify or transform the data as it is written and read. Eg: File compression wehere you can write compressed data and read de-compressed data to and from a file as a transform stream

//! What are Pipes?
//* In Node.js, a pipe takes a readable stream and connects it to a writable stream. We use the pipe method on a readable stream to implement the functionality. A pipe return the destination stream which enables chaining. However the condition is that the destination stream has to be readable, duplex or a transform stream. Writable streams cannot be chained by calling .pipe. For Writable streams another built-in module called zlib is used.

//! How does the web work? (or) What happens when you type a URL in the web browser on your computer?
//* Computers connected to the internet are called clients and servers. Clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browser. Servers on the other hand are computers that store web pages, sites, or apps. When you type a URL in the browser the client device requests access to a web page. A copy of web page is downloaded from the server and sent as a response to the client to be displayed in the web browser. This model is popularly called the client server model. [Contd. in the next QnA]

//! What is HTTP?
//* HTTP stands for Hypertext Transfer Protocol. This is a protocol that defines a format for clients and servers to speak to each other. The client sends an HTTP request and the server responds with an HTTP response.This is how web works at a very high level.

//! Explain on HTTP in regards to Node.
//* We can create a web server using Node.js. Node.js has access to operating system functionality like networking. Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests. The node server we create should still respect the HTTP format. The HTTP module allows creation of web servers that can transfer data over HTTP.

//! What is Web Framework?
//* A framework simply abstracts the lower level code allowing you to focus on the requirements than the code itself. For example, Angular, React, Vue are all framework/libraries that help you build user interfaces without having to rely on the lower level DOM API in JavaScript. There are frameworks to build web or mobile applications without having to rely on the HTTP module in node.js. Eg: Express, Nest, Hapi, Koa and Sails. They build on top of the HTTP module making it easier for you to implement all the features.

//! What is libuv?
//* libuv is a cross platform open source library written in C language. libuv handles asynchronous non-blocking operations in Node.js. These operations are achieved by using two very important features - Thread Pool and Event Loop.

//! What is Thread Pool?
//* libuv's thread pool is a pool of threads that Node.js uses to offload time-consuming tasks and ensure the main thread is not blocked for a long time.

//! Why https.request does not use the thread pool?
//* https.request is a network input/output operation and not a CPU bound operation. It does not use the thread pool. Libuv instead delegates the work to the operating system kernel and whenever possible, it will poll the kernel and see if the request has completed.

//! Summary on Libuv and Async Methods
//* In Node.js, async methods are handled by libuv. They are handled in two different ways: 1. Native async mechanism, 2. Thread pool. Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking the main thread. Since this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and IO Completion Port on Windows. Relying on native async mechanisms makes Node scalable as the only limitation is the operating system kernel. Example of this type is a network I/O operation. If there is no native async support and the task is file I/O or CPU intensive, libuv uses the thread pool to avoid blocking the main thread. Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become bottleneck if all threads are busy.

//! What is Event Loop in Node.js?
//* Event Loop is a C program and is part of libuv. It is a design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js. 

//! Explain the execution order of Event Loop.
//* User written synchronous JavaScript code takes priority over async code that the runtime would like to execute. Only after the call stack is empty, the event loop comes into picture.
//* 1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue.
//* 2. All callbacks within the timer queue are executed.
//* 3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.
//* 4. All callbacks within the I/O queue are executed.
//* 5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.
//* 6. All callbacks in the check queue are executed.
//* 7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.
//* 8. All callbacks in the close queue are executed.
//* 9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.
//* If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated. On the other hand, if all callbacks and there is no more code to process, the event loop exits.

//! Why is the use of process.nextTick() discouraged?
//* The use of process.nextTick is discouraged as it can cause the rest of the event loop to starve. If you endlessly call process.nextTick. the control will never make it past the microtask queue.

//! What are the two main reasons to use process.nextTick?
//* 1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues.
//* 2. To allow a callback to run after the call stack has unwound but before the event loop continues.

//! How to queue a callback function into I/O queue?
//* Most of the async methods from the built-in modules queue the callback function in the I/O queue. Eg: fs.readFile

//! How to queue a callback function into a Check Queue?
//* To queue a callback function into the check queue, we can use a function called setImmediate.

//! Summary on Event Loop.
//* The event loop is a C program that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js. It co-ordinates the execution of callbacks in six different queues. They are nextTick, Promise, timer, I/O, check and close queues. We use process.nextTick() method to queue into the nextTick queue. We resolve or reject a Promise to queue into the Promise queue. We use setTimeout or setInterval to queue into the timer queue. Execute an async method to queue into the I/O queue. Use setImmediate function to queue into the check queue. Attach close event listeners to queue into the close queue. The order of execution follows the same order listed here with an exception that nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer and check queues.

//! What is npm?
//* 1. It is the world's largest software library (registry).
//* 2. It is a software package manager.
//* npm is a library which contains code packages written by various developers. It is a large public database of JavaScript code that developers from all over the world can use to share and borrow code.

//! What are other package managers?
//* Other package managers are pnpm and Yarn. npm is the default package manager for Node.js. 

//! What is package.json?
//* package.json is npm's configuration file. It is a json file that typically lives in the root directory of your package and holds various metadata reelvant to the package. package.json is the central place to configure and describe how to interact with and run your package. It is primarily used by the npm CLI.

//! What is Semantic Versioning?
//* SemVer is one of the most widely adopted versioning systems. It is a simple set of rules and requirements that dictate how version numbers are assigned and incremented. It is crucial to keep a semantic and historical track of changes. Version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next. A semantic version is of a format "X.Y.Z" where X refers to major version, Y refers to minor version and Z refers to patch. Semantic versioning always starts with 0.1.0.

//! What are npm scripts?
//* An npm script is a convenient way to bundle common commands for use in a project. They are typically entered in the command line in order to do something with the application. npm scripts are stored in project's package.json file, giving access to everyone who has access to the codebase. They also ensure that everyone is using the same command with the same options. Common use cases for npm scripts include building your project, starting a development server, compiling CSS, linting, minifying etc. npm scripts are executed using the command npm run <SCRIPT_NAME>. 

//! What is CLI?
//* CLI stands for Command Line Interface. It is a program that you can run from the terminal. Eg: npm and git.

//! What is Cluster Module?
//* Node is single threaded. No matter how many cores you have, node only uses a single core of your CPU. This is fine for I/O operations but if the code has long running and CPU intensive operations, your application might struggle from a performance point of view. To help with this scenario, Node.js introduced the Cluster Module. The cluster module enables the creation of child processes (also called workers) that run simultaneously. All created workers share the same server port. In simple words, the cluster module gives you a quick win when it comes to handling the workload in a Node.js application.

//! Explain the working of Cluster Module.
//* When we run node index in the terminal the file is treated as a cluster master and this master is in charge of spawning new workers which run an instance of our node application. THe master is only in charge of the workers - starting, stopping, restarting etc.. but does not execute the application code itself. It is not in charge of handling incoming requests, reading files etc... That is upto the individual worker instance. Workers are in charge of handling incoming requests, reading files etc.. Each worker get its own event loop, memory, and V8 instance. We should only create as many workers as there are CPU cores on the machine the app is running. If you create more workers than there are logical cores on the computer, it can cause an overhead as the system will have to schedule all the created workers with fewer number of cores.

//! What is Worker Threads Module?
//* The worker_threads module enables the use of threads that execute JavaScript in parallel. Code executed in a worker thread runs in a separate child process, preventing it from blocking your main application. The cluster module can be used to run multiple instances of Node.js that can distribute workloads. worker_threads module allows running multiple application threads within a single Node.js instance. When process isolation is not needed, that is, no separate instances of V8, event loop and memory are needed, you should use worker_threads.
