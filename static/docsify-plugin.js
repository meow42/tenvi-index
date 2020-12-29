/** 在页面上显示编辑连接 */
function EditOnGit(url, branch = 'main') {
  // 拼接HTML
  function getHTML(fileName, basePath = '') {
    let editURL = `${url}/edit/${branch}/${basePath}${fileName}`;
    return header = [
      `<div style="position: absolute; right: 16px; top: 9px;">`,
      `<a style="text-decoration: underline; cursor: pointer" href="${editURL}">`,
      '编辑此页面',
      `</a></div>\r\n`,
    ].join("")
  }
  // 返回函数
  return function (hook, vm) {
    // 内容解析成 html 后调用
    hook.afterEach(function (html, next) {
      console.log('editOnGitee:', vm);
      let elHTML = getHTML(vm.route.file, vm.config.basePath);
      next(elHTML + html);
    });
  }
}