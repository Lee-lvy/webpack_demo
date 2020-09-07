module.exports = {
    plugins: [
        require('autoprefixer')({overrideBrowserslist:['last 15 versions']}) //单纯设置 'autoprefixer' 不生效 后面要加({overrideBrowserslist:['last 15 versions']})
    ]
}