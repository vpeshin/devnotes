## Moving

```cs
// Method 1
if (keyboard_check(ord("D")) x -= 4;
...

// Method 2
var xDirection, yDirection;
// 1, 0 or -1
xDirection = keyboard_check(ord("D")) - keyboard_check(ord("A"));
x += xDirection * 3;
...
```

## Tips

### Make object unmovable

Set `Density` to `0.0`

