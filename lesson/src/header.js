//使用面向对象 每个负责的指责不一样
function Header () { //定义一个构造函数 这就是一个类
    var dom = document.getElementById('root')
    var head = document.createElement('div');
    head.innerHTML = 'HEAD';
    dom.append(head)
}
// export default Header;// ES module
module.exports = Header