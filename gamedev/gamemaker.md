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


## Shooting

```cs
// obj_player, Create:
cooldown = 0;

// obj_player, Step:
if (mouse_check_button(mb_left)) && (cooldown < 1) {
	instance_create_layer(x,y,"Bullets",obj_bullet);
	cooldown = 10;
}
cooldown--;

// obj_bullet, Create:
direction = point_direction(x, y, mouse_x, mouse_y);
direction = direction + random_range(-5, 5);
speed = 10;
image_angle = direction;

// obj_bullet, Outside Room:
// Destroy bullet object when outside of the room
instance_destroy();
```


## Tips

### Make object unmovable

Set `Density` to `0.0`

