# delegate
一个dom的事件委托库

## 使用说明
```html
<ul>
    <li class="aaa">1</li>
    <li>2</li>
    <li>3</li>
    <li class="aaa">4</li>
    <li>5</li>
</ul>
```
 ```js
 var dom = document.querySelector('ul');
 var myEvent = delegate('.aaa', function (e) {
    console.log(e)
  })

dom.addEventListener('click', myEvent, false)
```

## 兼容
ie9及以上
