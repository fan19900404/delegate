    /**
     * 事件委托
     * @param {String} [selector] (可选)选择器
     * @param {Function} fn 回调方法
     * @returns {Function}
     * @example
     * ```html
     * <ul>
        <li class="aaa">1</li>
        <li>2</li>
        <li>3</li>
        <li class="aaa">4</li>
        <li>5</li>
       </ul>
     * ```
       ```js
       var dom = document.querySelector('ul');
       var myEvent = createEvent('.aaa', function (e) {
          console.log(e)
        })

      dom.addEventListener('click', myEvent, false)
       ```
     */
    var delegate = function (selector, fn) {
      var selectorType = Object.prototype.toString.call(selector)
      if (selectorType === '[object Function]') {
        return selector
      }

      if (selectorType !== '[object String]') {
        return fn
      }

      return function (e) {

        var result = Array.prototype.some.call(this.querySelectorAll(selector), function (v) {
          return v.contains(e.target)
        })

        if (result) {
          fn(e)
        }
      }
    }
