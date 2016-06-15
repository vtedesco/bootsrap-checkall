Bootstrap-checkall
========================

Add ability to check all checkboxes in a block.
Add ability to uncheck-all.

1) Installation
--------------
```html
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-checkall.js"></script>
```

2) Usage
--------------
Include the JS file then :

```html
    <span class="btn-link" data-toggle="autoCheck-on" data-target="#cities"> Select All </span>
    <span class="btn-link" data-toggle="autoCheck-off" data-target="#cities"> Select None </span>
    <div id="cities">
        <input type="checkbox"> San Francisco
        <input type="checkbox"> San José
        <input type="checkbox"> Oakland
    </div>
```