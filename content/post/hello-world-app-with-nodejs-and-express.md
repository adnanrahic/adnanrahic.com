---
title: "\"Hello World!\" app with Node.js and Express"
date: 2017-01-09T20:03:26+02:00
description: "Do you use Node…? You will."
draft: false
image: "https://cdn-images-1.medium.com/max/2000/1*DfH5s8jWzkkgIBRALLzQMw.jpeg"
tags: [
    "Nodejs",
    "JavaScript",
    "Webdev",
    "Programming"
]
categories: [
    "Nodejs"
]
comments: true
canonical: "https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30"
---

This article is aimed for beginner developers and anyone interested in getting
up and running with Node.js. Before diving into this article, you should be
confident enough with JavaScript to know the basic concepts of the language.
Technical terms regarding Node will be explained and linked below.

### What is [Node.js](https://nodejs.org/en/)?

Node is an asynchronousevent driven JavaScript runtime built upon Chrome’s V8
JavaScript engine.It’s designed to build scalable network applications.

That being the raw definition, let me clarify. Node.js enables you to write
server side JavaScript. You may now be wondering, how? As you know, JavaScript
is a language which runs in a browser.The browser’s engine takes JavaScript code
and compiles it into commands. The creator of Node.js took Chrome’s engine and
built a runtime for it to work on a server. Don’t get confused with the word
runtime. It’s an environment where the language can get interpreted. So what do
we have now? A way to write JavaScript on the back end.

Regarding the definition, you might be wondering what the term asynchronous even
means in the current context. JavaScript is [single
threaded](https://en.wikipedia.org/wiki/Thread_(computing)), meaning there is
only one thread of execution. So you don’t want events to interrupt the main
thread of execution. This is what asynchronous means, handling events without
interrupting the main thread.Node is based on this *non-blocking* execution,
making it one of the fastest tools for building web applications today. In the
following “Hello World” example, many connections can be handled concurrently.
Upon each connection the
[callback](http://dreamerslab.com/blog/en/javascript-callbacks/) is fired, but
if there is no work to be done Node will remain asleep.

There are 6 simple steps in this example, bear with me.

*****

#### 1. Install Node.js for your platform (MacOS, Windows or Linux)

The first step is to get yourself an instance of the JavaScript runtime up and
running on your local machine. Just smash **nodejs.org** in your browsers
address bar, or click the link above, and you should be good to go. The home
screen should give you what you want right away. As I am running Ubuntu on my
machine, the respective version of Node.js for my operating system is listed. Go
ahead, download and install it. This will give you the tools needed to run a
server on your local machine.

<img class="b-lazy" data-src="https://cdn-images-1.medium.com/max/1000/1*LWV8A-Fk2YAYfPtWXrtKtQ.png" src="/img/loader.svg">

*****

#### 2. [Open a command prompt and type:](https://www.git-tower.com/blog/command-line-cheat-sheet/)
```bash
$ mkdir myapp
$ cd myapp
```

These commands are universal for whatever OS you’ll be running. The former will
create a new directory inside the directory you are currently in, *mkdir = “make
directory”.* The latter will change into this newly created directory, *cd =
“change directory”*. Hard-core windows users can calm down, this will work for
you guys too, as it is equivalent to creating a new folder within your file
system… only more fancy.

*****

#### 3. Initialize your project and link it to [npm](https://www.npmjs.com/)

Now the real fun starts. After creating your directory, very innovatively named
*myapp*, you will need to initialize a project and link it to [npm](https://www.npmjs.com/). <br> Np-what?
Okay, calm down. Npm is short for *node package manager*. This is where all node
packages live. Packages can be viewed as bundles of code, like modules, which
carry out a specific function. This functionality is what we as developers are
utilizing. We use the application program interface, the API, provided for us by
these modules. What is an API you ask?

Take a look [here](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82).

The modules in turn act like black boxes with buttons and levers we can push and
pull to get the desired end result.

Running this command initializes your project:
```bash
$ npm init
```

This creates a *package.json* file in your *myapp* folder. The file contains
references for all npm packages you have downloaded to your project. The command
will prompt you to enter a number of things.

You can enter your way through all of them **EXCEPT** this one:
```
entry point: (index.js) 
```

You will want to change this to:
```
app.js
```

*****

#### 4. Install [Express](http://expressjs.com/) in the myapp directory

While still in the *myapp* directory run:
```bash
$ npm install express --save
```

The *install* command will go ahead and find the package you wish to install,
and install it to your project. You will now be able to see a *node_modules*
folder get created in the root of your project. This is a crucial step, as you
will be able to *require* any of the recently installed files in your own
application files. The addition of —save will save the package to your
dependencies list, located in the *package.json*, in your *myapp* directory.

Yeah, I know what you’re thinking. What exactly is this Express thing? Some mail
delivery service, rivaling FedEx, I presume (please ignore these lame jokes).
No, to burstyour bubble, Express is a…

> “Fast, unopinionated, minimalist web framework for
> [Node.js](https://nodejs.org/en/)” — Taken from Express.js’ official website

It gives you a set of robust and easy to use tools to get your web application
up and running. Express has become so popular, it now is the de facto standard,
in the vast majority of Node.js applications today. I strongly encourage the use
of Express.

*****

#### 5. Start your text editor of choice and create a file named app.js. 
Write the following:
```js
express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```


Here is where you will need to use the package which was recently installed. The
first line declares a variable which will contain the module called express,
grabbing it from the *node_modules* folder. The module is actually a function.
Assigning the function call to another variable gives you access to a predefined
set of tools which will in a great deal make your life much easier. You could
view the variable *app* as an object, whose methods you are utilizing to build
the actual program.

The listen method starts a server and listens on port 3000 for connections.<br>
It responds with “Hello World!” for get requests to the root URL (/). For every
other path, it will respond with a *404 Not Found*.

#### 6. Run the app
Type the command:
```bash
$ node app.js
```

After running the command, load [http://localhost:3000/](http://localhost:3000/)
in a browser to see the output. You should also see “Example app listening on
port 3000!” get logged to the command line.

<img class="b-lazy" data-src="https://cdn-images-1.medium.com/max/1750/1*vAF8KgTWu6983trFjK3zew.png" src="/img/loader.svg">
<span class="figcaption_hack">Wow, so much output!</span>

That’s it, you’re done. You have successfully created your first Node app. Don’t
stop here, keep exploring the wonderful world of Node.js, as it has much more to
offer.

*****

Your finished app should have a folder structure somewhat resembling this.

<img class="b-lazy" data-src="https://cdn-images-1.medium.com/max/1000/1*QJPDVqdT5sdGyZqWn7LHCw.png" src="/img/loader.svg">
<span class="figcaption_hack">Folder structure — green for folders — blue for files</span>

*****

That’s it for me today. If you liked this article and if it helped you in any
way, feel free to follow me, more tutorials like this one will be coming soon.
If you believe this article will be of big help to someone, feel free to share.

Happy coding :)

---
<iframe src="https://upscri.be/b6f3d5?as_embed" height="400" frameborder="0" style="width:100%;max-width:800px;margin:0 auto;"></iframe>
Feel free to follow me on social media. Links are below!