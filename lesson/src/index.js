
//ES module 模块引入方式 浏览器不认识import 所以webpack就需要了 进行翻译告诉浏览器
// import Header from "./header.js";
// import Sidebar from "./sidebar.js";
// import Content from "./content.js";

//CommonJs模块引入规范
var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
import avatar from'./timg.jpeg'
var img = new Image();
img.src = avatar;
var root = document.getElementById('root')
root.append(img);

new Header();
new Sidebar();
new Content();